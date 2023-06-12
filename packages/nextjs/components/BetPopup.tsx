import { erc20ABI, useContractWrite, useContractRead, usePrepareContractWrite } from 'wagmi';
import GameSingleImplementationABI from '~~/types/GameSingleImplementationABI';
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { utils } from 'ethers';

type DepositPopup = {
  choice?: 0 | 1 | 2;
  address?: string;
  onClose: () => void
}

export default function BetPopup(props: DepositPopup) {
  const [isOpen, setIsOpen] = useState(false);
  const [betAmount, setBetAmount] = useState('0.0');
  const { address: gameAddress, onClose, choice } = props;
  const { data: tokenAddress } = useContractRead({
    address: gameAddress,
    abi: GameSingleImplementationABI,
    functionName: 'tokenAddr',
  });

  const { config: approveConfig } = usePrepareContractWrite({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: 'approve',
    args: [gameAddress ?? '', utils.parseEther(betAmount)],
  })
  const { writeAsync: approveDeposit } = useContractWrite(approveConfig);
  
  const { config: depositConfig } = usePrepareContractWrite({
    address: gameAddress,
    abi: GameSingleImplementationABI,
    functionName: 'play',
    args: [choice!, utils.parseEther(betAmount)],
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
          <Dialog.Title>Bet</Dialog.Title>
          <Dialog.Description className="flex flex-col">
            <label>Stake</label>
            <input
              type="number"
              className="bg-bet-black-lighter p-2"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
            />
          </Dialog.Description>
          <button 
            className="font-bold text-sm bg-bet-cyan text-bet-black-light rounded-lg py-2 px-6 mt-auto w-full"
            onClick={() => {
              approveDeposit?.()?.then?.(() => {
                deposit?.()?.then(() => {
                  setIsOpen(false)
                  onClose()
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
