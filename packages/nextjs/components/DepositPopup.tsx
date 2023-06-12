import { erc20ABI, useContractWrite, useContractRead, usePrepareContractWrite, useAccount } from 'wagmi';
import GameSingleImplementationABI from '~~/types/GameSingleImplementationABI';
import MockERC20 from '~~/types/MockERC20';
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { utils } from 'ethers';

type DepositPopup = {
  address?: string;
  onClose: () => void
}

export default function DepositPopup(props: DepositPopup) {
  const [isOpen, setIsOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState('0.0');
  const { address: userAddress } = useAccount();
  const { address: gameAddress, onClose } = props;
  const { data: tokenAddress } = useContractRead({
    address: gameAddress,
    abi: GameSingleImplementationABI,
    functionName: 'tokenAddr',
  });

  const { config: faucetConfig } = usePrepareContractWrite({
    address: tokenAddress,
    abi: MockERC20.abi,
    functionName: 'faucet',
    args: [utils.parseEther(depositAmount), userAddress ?? ''],
  })
  const { writeAsync: callFaucet } = useContractWrite(faucetConfig);

  const { config: approveConfig } = usePrepareContractWrite({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: 'approve',
    args: [gameAddress ?? '', utils.parseEther(depositAmount)],
  })
  const { writeAsync: approveDeposit } = useContractWrite(approveConfig);
  
  const { config: depositConfig } = usePrepareContractWrite({
    address: gameAddress,
    abi: GameSingleImplementationABI,
    functionName: 'deposit',
    args: [utils.parseEther(depositAmount)],
  })
  const { writeAsync: deposit } = useContractWrite(depositConfig);

  useEffect(() => {
    gameAddress && setIsOpen(true);
  }, [gameAddress])

  return (
    <Dialog
      open={isOpen}
      onClose={() => {setIsOpen(false); onClose()}}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="w-full max-w-sm rounded bg-black border-2 border-white p-6 h-[50%] flex flex-col">
          <Dialog.Title>Deposit</Dialog.Title>
          <Dialog.Description className="flex flex-col">
            <label>Stake</label>
            <input
              type="number"
              className="bg-bet-black-lighter p-2"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
          </Dialog.Description>
          <button 
            className="font-bold text-sm bg-bet-cyan text-bet-black-light rounded-lg py-2 px-6 mt-auto w-full"
            onClick={() => {
              callFaucet?.()?.then?.(() => {
                approveDeposit?.()?.then?.(() => {
                  deposit?.()?.then(() => {
                    setIsOpen(false)
                    onClose()
                })
                })
              })
            }}
          >
            Place
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
