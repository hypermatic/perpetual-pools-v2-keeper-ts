/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPoolFactoryInterface extends ethers.utils.Interface {
  functions: {
    "deployPool(tuple)": FunctionFragment;
    "isValidPool(address)": FunctionFragment;
    "isValidPoolCommitter(address)": FunctionFragment;
    "numPools()": FunctionFragment;
    "pools(uint256)": FunctionFragment;
    "setAutoClaim(address)": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setFeeReceiver(address)": FunctionFragment;
    "setInvariantCheck(address)": FunctionFragment;
    "setPoolKeeper(address)": FunctionFragment;
    "setSecondaryFeeSplitPercent(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deployPool",
    values: [
      {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        settlementToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        feeController: string;
        mintingFee: BigNumberish;
        changeInterval: BigNumberish;
        burningFee: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "isValidPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isValidPoolCommitter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "numPools", values?: undefined): string;
  encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setAutoClaim",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeReceiver",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setInvariantCheck",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolKeeper",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSecondaryFeeSplitPercent",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deployPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidPoolCommitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numPools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAutoClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInvariantCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolKeeper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSecondaryFeeSplitPercent",
    data: BytesLike
  ): Result;

  events: {
    "AutoClaimChanged(address)": EventFragment;
    "DeployCommitter(address,address,address,uint256,address)": EventFragment;
    "DeployPool(address,address,string)": EventFragment;
    "FeeChanged(uint256)": EventFragment;
    "FeeReceiverChanged(address)": EventFragment;
    "InvariantCheckChanged(address)": EventFragment;
    "MaxLeverageChanged(uint256)": EventFragment;
    "MintAndBurnFeesChanged(uint256,uint256)": EventFragment;
    "PoolKeeperChanged(address)": EventFragment;
    "SecondaryFeeSplitChanged(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AutoClaimChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployCommitter"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeReceiverChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InvariantCheckChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MaxLeverageChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintAndBurnFeesChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolKeeperChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SecondaryFeeSplitChanged"): EventFragment;
}

export class IPoolFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPoolFactoryInterface;

  functions: {
    deployPool(
      deploymentParameters: {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        settlementToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        feeController: string;
        mintingFee: BigNumberish;
        changeInterval: BigNumberish;
        burningFee: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isValidPool(_pool: string, overrides?: CallOverrides): Promise<[boolean]>;

    isValidPoolCommitter(
      _poolCommitter: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    numPools(overrides?: CallOverrides): Promise<[BigNumber]>;

    pools(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    setAutoClaim(
      _autoClaim: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInvariantCheck(
      _invariantCheck: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSecondaryFeeSplitPercent(
      newFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deployPool(
    deploymentParameters: {
      poolName: string;
      frontRunningInterval: BigNumberish;
      updateInterval: BigNumberish;
      leverageAmount: BigNumberish;
      settlementToken: string;
      oracleWrapper: string;
      settlementEthOracle: string;
      feeController: string;
      mintingFee: BigNumberish;
      changeInterval: BigNumberish;
      burningFee: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isValidPool(_pool: string, overrides?: CallOverrides): Promise<boolean>;

  isValidPoolCommitter(
    _poolCommitter: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  numPools(overrides?: CallOverrides): Promise<BigNumber>;

  pools(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  setAutoClaim(
    _autoClaim: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeReceiver(
    _feeReceiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInvariantCheck(
    _invariantCheck: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPoolKeeper(
    _poolKeeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSecondaryFeeSplitPercent(
    newFeePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployPool(
      deploymentParameters: {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        settlementToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        feeController: string;
        mintingFee: BigNumberish;
        changeInterval: BigNumberish;
        burningFee: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    isValidPool(_pool: string, overrides?: CallOverrides): Promise<boolean>;

    isValidPoolCommitter(
      _poolCommitter: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    numPools(overrides?: CallOverrides): Promise<BigNumber>;

    pools(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    setAutoClaim(_autoClaim: string, overrides?: CallOverrides): Promise<void>;

    setFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setInvariantCheck(
      _invariantCheck: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSecondaryFeeSplitPercent(
      newFeePercent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AutoClaimChanged(
      autoClaim?: string | null
    ): TypedEventFilter<[string], { autoClaim: string }>;

    DeployCommitter(
      poolCommitterAddress?: null,
      quoteToken?: null,
      pool?: null,
      changeInterval?: null,
      feeController?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, string],
      {
        poolCommitterAddress: string;
        quoteToken: string;
        pool: string;
        changeInterval: BigNumber;
        feeController: string;
      }
    >;

    DeployPool(
      pool?: string | null,
      poolCommitter?: null,
      ticker?: null
    ): TypedEventFilter<
      [string, string, string],
      { pool: string; poolCommitter: string; ticker: string }
    >;

    FeeChanged(
      fee?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { fee: BigNumber }>;

    FeeReceiverChanged(
      receiver?: string | null
    ): TypedEventFilter<[string], { receiver: string }>;

    InvariantCheckChanged(
      invariantCheck?: string | null
    ): TypedEventFilter<[string], { invariantCheck: string }>;

    MaxLeverageChanged(
      leverage?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { leverage: BigNumber }>;

    MintAndBurnFeesChanged(
      mint?: BigNumberish | null,
      burn?: BigNumberish | null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { mint: BigNumber; burn: BigNumber }
    >;

    PoolKeeperChanged(
      _poolKeeper?: null
    ): TypedEventFilter<[string], { _poolKeeper: string }>;

    SecondaryFeeSplitChanged(
      fee?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { fee: BigNumber }>;
  };

  estimateGas: {
    deployPool(
      deploymentParameters: {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        settlementToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        feeController: string;
        mintingFee: BigNumberish;
        changeInterval: BigNumberish;
        burningFee: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isValidPool(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    isValidPoolCommitter(
      _poolCommitter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numPools(overrides?: CallOverrides): Promise<BigNumber>;

    pools(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setAutoClaim(
      _autoClaim: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInvariantCheck(
      _invariantCheck: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSecondaryFeeSplitPercent(
      newFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployPool(
      deploymentParameters: {
        poolName: string;
        frontRunningInterval: BigNumberish;
        updateInterval: BigNumberish;
        leverageAmount: BigNumberish;
        settlementToken: string;
        oracleWrapper: string;
        settlementEthOracle: string;
        feeController: string;
        mintingFee: BigNumberish;
        changeInterval: BigNumberish;
        burningFee: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isValidPool(
      _pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidPoolCommitter(
      _poolCommitter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pools(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAutoClaim(
      _autoClaim: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeReceiver(
      _feeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInvariantCheck(
      _invariantCheck: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPoolKeeper(
      _poolKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSecondaryFeeSplitPercent(
      newFeePercent: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
