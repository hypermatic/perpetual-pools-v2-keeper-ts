/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AutoClaim, AutoClaimInterface } from "../AutoClaim";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolFactoryAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "poolCommitter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "updateIntervalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "PaidClaimRequest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "poolCommitter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newReward",
        type: "uint256",
      },
    ],
    name: "PaidClaimRequestUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "poolCommitter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "PaidRequestExecution",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "poolCommitter",
        type: "address",
      },
    ],
    name: "RequestWithdrawn",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "updateIntervalId",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "reward",
            type: "uint256",
          },
        ],
        internalType: "struct IAutoClaim.ClaimRequest",
        name: "request",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "currentUpdateIntervalId",
        type: "uint256",
      },
    ],
    name: "checkClaim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolCommitter",
        type: "address",
      },
    ],
    name: "checkUserClaim",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimRequests",
    outputs: [
      {
        internalType: "uint128",
        name: "updateIntervalId",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "makePaidClaimRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "poolCommitterAddresses",
        type: "address[]",
      },
    ],
    name: "multiPaidClaimMultiplePoolCommitters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "poolCommitterAddress",
        type: "address",
      },
    ],
    name: "multiPaidClaimSinglePoolCommitter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolCommitterAddress",
        type: "address",
      },
    ],
    name: "paidClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolCommitter",
        type: "address",
      },
    ],
    name: "withdrawClaimRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "withdrawUserClaimRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161149438038061149483398101604081905261002f916100ae565b6001600160a01b0381166100895760405162461bcd60e51b815260206004820152601860248201527f506f6f6c466163746f72792061646472657373203d3d20300000000000000000604482015260640160405180910390fd5b600180546001600160a01b0319166001600160a01b03929092169190911790556100de565b6000602082840312156100c057600080fd5b81516001600160a01b03811681146100d757600080fd5b9392505050565b6113a7806100ed6000396000f3fe60806040526004361061008a5760003560e01c8063883e9e4811610059578063883e9e48146101305780638d68dd61146101505780639b42f47e146101b7578063c76ac728146101ca578063f009fc08146101ea57600080fd5b806307119aeb14610099578063351ea38a146100bb5780634c830642146100f057806384de06e41461011057600080fd5b3661009457600080fd5b600080fd5b3480156100a557600080fd5b506100b96100b43660046110bc565b61020a565b005b3480156100c757600080fd5b506100db6100d63660046111ec565b6102f8565b60405190151581526020015b60405180910390f35b3480156100fc57600080fd5b506100b961010b3660046110bc565b610324565b34801561011c57600080fd5b506100b961012b36600461110a565b610472565b34801561013c57600080fd5b506100db61014b3660046110d7565b610603565b34801561015c57600080fd5b5061019861016b3660046110d7565b6000602081815292815260408082209093529081522080546001909101546001600160801b039091169082565b604080516001600160801b0390931683526020830191909152016100e7565b6100b96101c53660046110bc565b6106c6565b3480156101d657600080fd5b506100b96101e53660046110d7565b610a2d565b3480156101f657600080fd5b506100b961020536600461115e565b610b98565b6001546040516359e86a9960e01b81523360048201526001600160a01b03909116906359e86a999060240160206040518083038186803b15801561024d57600080fd5b505afa158015610261573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028591906111ca565b6102aa5760405162461bcd60e51b81526004016102a1906112bb565b60405180910390fd5b6001600160a01b038116600090815260208181526040808320338452909152812060018101805482546001600160801b0319169092559190915580156102f4576102f48282610dfa565b5050565b81516000906001600160801b03161580159061031d575082516001600160801b031682115b9392505050565b6001546040516359e86a9960e01b81526001600160a01b038381166004830152909116906359e86a999060240160206040518083038186803b15801561036957600080fd5b505afa15801561037d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a191906111ca565b6103bd5760405162461bcd60e51b81526004016102a190611284565b336000908152602081815260408083206001600160a01b03851684529091529020546001600160801b03161561046f57336000908152602081815260408083206001600160a01b0385168452909152812060018101805482546001600160801b031916909255919091558015610437576104373382610dfa565b6040516001600160a01b0383169033907fbeb52c9358dfd474b9e79cc7bb7c88a2079664f938ff899c7a54bbaa5e54b08a90600090a3505b50565b6001546040516359e86a9960e01b81526001600160a01b03838116600483015260009216906359e86a999060240160206040518083038186803b1580156104b857600080fd5b505afa1580156104cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f091906111ca565b61050c5760405162461bcd60e51b81526004016102a190611284565b60008290506000816001600160a01b0316639d03132e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561054c57600080fd5b505afa158015610560573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105849190611267565b6001600160801b0316905060005b858110156105ea576105cc8787838181106105af576105af611346565b90506020020160208101906105c491906110bc565b868585610f18565b6105d690856112fd565b9350806105e281611315565b915050610592565b5082156105fb576105fb3384610dfa565b505050505050565b6001600160a01b038083166000908152602081815260408083209385168084529382528083208151808301835281546001600160801b03168152600190910154818401528151634e81899760e11b81529151939461031d9491939092639d03132e9260048083019392829003018186803b15801561068057600080fd5b505afa158015610694573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b89190611267565b6001600160801b03166102f8565b6001546040516359e86a9960e01b81523360048201526001600160a01b03909116906359e86a999060240160206040518083038186803b15801561070957600080fd5b505afa15801561071d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074191906111ca565b61075d5760405162461bcd60e51b81526004016102a1906112bb565b6001600160a01b03811660009081526020818152604080832033808552925290912080549091906001600160801b0316801561095b57816001600160a01b0316639d03132e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107cc57600080fd5b505afa1580156107e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108049190611267565b6001600160801b0316816001600160801b03161015610901576001838101546001600160a01b0386811660008181526020818152604080832033845290915280822080546001600160801b0319168155909501559251630f41a04d60e11b81526004810193909352909190841690631e83409a90602401600060405180830381600087803b15801561089557600080fd5b505af11580156108a9573d6000803e3d6000fd5b5050505060008111156108c0576108c08582610dfa565b600184015460405133906001600160a01b038816907ffc1ef6f920271c53bdf1b6aa6a98b1cd7baa573c736975d7eb1f85b2f0c3d7f390600090a45061095b565b3483600101600082825461091591906112fd565b9091555050600183015460405133906001600160a01b038716907f1b0cd6fbb8d6f8911969df04996d8d67f926c059c09a2df27305bb1b36b5917c90600090a450505050565b816001600160a01b031663d4c4e2836040518163ffffffff1660e01b815260040160206040518083038186803b15801561099457600080fd5b505afa1580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc9190611267565b83546001600160801b0319166001600160801b03821617845534600185018190556040519192509033906001600160a01b038716907f1b0cd6fbb8d6f8911969df04996d8d67f926c059c09a2df27305bb1b36b5917c90600090a450505050565b6001546040516359e86a9960e01b81526001600160a01b038381166004830152909116906359e86a999060240160206040518083038186803b158015610a7257600080fd5b505afa158015610a86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaa91906111ca565b610aee5760405162461bcd60e51b815260206004820152601560248201527424b73b30b634b2102837b7b621b7b6b6b4ba3a32b960591b60448201526064016102a1565b60008190506000816001600160a01b0316639d03132e6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b2e57600080fd5b505afa158015610b42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b669190611267565b6001600160801b031690506000610b7f85858585610f18565b90508015610b9157610b913382610dfa565b5050505050565b828114610bf35760405162461bcd60e51b815260206004820152602360248201527f537570706c69656420617272617973206d7573742062652073616d65206c656e6044820152620cee8d60eb1b60648201526084016102a1565b600083815b81811015610ded576001546001600160a01b03166359e86a99868684818110610c2357610c23611346565b9050602002016020810190610c3891906110bc565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260240160206040518083038186803b158015610c7757600080fd5b505afa158015610c8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610caf91906111ca565b610ccb5760405162461bcd60e51b81526004016102a190611284565b6000858583818110610cdf57610cdf611346565b9050602002016020810190610cf491906110bc565b90506000816001600160a01b0316639d03132e6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d3157600080fd5b505afa158015610d45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d699190611267565b6001600160801b03169050610dcc898985818110610d8957610d89611346565b9050602002016020810190610d9e91906110bc565b888886818110610db057610db0611346565b9050602002016020810190610dc591906110bc565b8484610f18565b610dd690866112fd565b945050508080610de590611315565b915050610bf8565b5081156105fb576105fb33835b80471015610e4a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016102a1565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610e97576040519150601f19603f3d011682016040523d82523d6000602084013e610e9c565b606091505b5050905080610f135760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016102a1565b505050565b6001600160a01b038085166000908152602081815260408083209387168352928152828220835180850190945280546001600160801b03168452600101549083015290610f6581846102f8565b15611046576001600160a01b038681166000818152602081815260408083208a8616845290915280822080546001600160801b03191681556001019190915551630f41a04d60e11b8152600481019190915290851690631e83409a90602401600060405180830381600087803b158015610fde57600080fd5b505af1158015610ff2573d6000803e3d6000fd5b505050508060200151856001600160a01b0316876001600160a01b03167ffc1ef6f920271c53bdf1b6aa6a98b1cd7baa573c736975d7eb1f85b2f0c3d7f360405160405180910390a460200151905061104c565b60009150505b949350505050565b80356001600160a01b038116811461106b57600080fd5b919050565b60008083601f84011261108257600080fd5b50813567ffffffffffffffff81111561109a57600080fd5b6020830191508360208260051b85010111156110b557600080fd5b9250929050565b6000602082840312156110ce57600080fd5b61031d82611054565b600080604083850312156110ea57600080fd5b6110f383611054565b915061110160208401611054565b90509250929050565b60008060006040848603121561111f57600080fd5b833567ffffffffffffffff81111561113657600080fd5b61114286828701611070565b9094509250611155905060208501611054565b90509250925092565b6000806000806040858703121561117457600080fd5b843567ffffffffffffffff8082111561118c57600080fd5b61119888838901611070565b909650945060208701359150808211156111b157600080fd5b506111be87828801611070565b95989497509550505050565b6000602082840312156111dc57600080fd5b8151801515811461031d57600080fd5b600080828403606081121561120057600080fd5b604081121561120e57600080fd5b506040516040810181811067ffffffffffffffff8211171561124057634e487b7160e01b600052604160045260246000fd5b604052833561124e8161135c565b8152602084810135908201529460409093013593505050565b60006020828403121561127957600080fd5b815161031d8161135c565b6020808252601f908201527f496e76616c696420706f6f6c20636f6d6d697474657220636f6e747261637400604082015260600190565b60208082526022908201527f6d73672e73656e646572206e6f742076616c696420506f6f6c436f6d6d69747460408201526132b960f11b606082015260800190565b6000821982111561131057611310611330565b500190565b600060001982141561132957611329611330565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160801b038116811461046f57600080fdfea2646970667358221220638c47364a077f700126cb30f6bd3158ae4550ee9f7ca5a0ffebc431f5d2948664736f6c63430008070033";

export class AutoClaim__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _poolFactoryAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AutoClaim> {
    return super.deploy(
      _poolFactoryAddress,
      overrides || {}
    ) as Promise<AutoClaim>;
  }
  getDeployTransaction(
    _poolFactoryAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_poolFactoryAddress, overrides || {});
  }
  attach(address: string): AutoClaim {
    return super.attach(address) as AutoClaim;
  }
  connect(signer: Signer): AutoClaim__factory {
    return super.connect(signer) as AutoClaim__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AutoClaimInterface {
    return new utils.Interface(_abi) as AutoClaimInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutoClaim {
    return new Contract(address, _abi, signerOrProvider) as AutoClaim;
  }
}
