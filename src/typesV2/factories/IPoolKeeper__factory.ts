/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPoolKeeper, IPoolKeeperInterface } from "../IPoolKeeper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "FactoryChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "GasPriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "KeeperPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expectedReward",
        type: "uint256",
      },
    ],
    name: "KeeperPaymentError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "firstPrice",
        type: "int256",
      },
    ],
    name: "PoolAdded",
    type: "event",
  },
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "startPrice",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "endPrice",
        type: "int256",
      },
    ],
    name: "UpkeepSuccessful",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "pools",
        type: "address[]",
      },
    ],
    name: "checkUpkeepMultiplePools",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "isUpkeepRequiredSinglePool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
    ],
    name: "newPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "pools",
        type: "address[]",
      },
    ],
    name: "performUpkeepMultiplePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "performUpkeepSinglePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPoolKeeper__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolKeeperInterface {
    return new utils.Interface(_abi) as IPoolKeeperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPoolKeeper {
    return new Contract(address, _abi, signerOrProvider) as IPoolKeeper;
  }
}
