import {
  Abi,
} from "abitype";

export type GenericContractsDeclaration = {
  [key: number]: readonly {
    name: string;
    chainId: string;
    contracts: {
      [key: string]: {
        address: string;
        abi: Abi;
      };
    };
  }[];
};

const deployedContracts: GenericContractsDeclaration = {
  
};

export default deployedContracts;
