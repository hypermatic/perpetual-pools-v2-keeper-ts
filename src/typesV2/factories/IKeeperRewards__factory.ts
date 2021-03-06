/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IKeeperRewards,
  IKeeperRewardsInterface,
} from "../IKeeperRewards";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "PoolUpkeepError",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasSpent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_savedPreviousUpdatedTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_updateInterval",
        type: "uint256",
      },
    ],
    name: "payKeeper",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKeeperRewards__factory {
  static readonly abi = _abi;
  static createInterface(): IKeeperRewardsInterface {
    return new utils.Interface(_abi) as IKeeperRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKeeperRewards {
    return new Contract(address, _abi, signerOrProvider) as IKeeperRewards;
  }
}
