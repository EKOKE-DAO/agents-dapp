import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export const idlFactory = ({ IDL }: { IDL: any }) => {
  const Pagination = IDL.Record({ count: IDL.Nat64, offset: IDL.Nat64 });
  const Log = IDL.Record({ log: IDL.Text, offset: IDL.Nat64 });
  const Logs = IDL.Record({
    logs: IDL.Vec(Log),
    all_logs_count: IDL.Nat64,
  });
  const Continent = IDL.Variant({
    Africa: IDL.Null,
    Antarctica: IDL.Null,
    Asia: IDL.Null,
    Europe: IDL.Null,
    SouthAmerica: IDL.Null,
    Oceania: IDL.Null,
    NorthAmerica: IDL.Null,
  });
  const Agency = IDL.Record({
    lat: IDL.Opt(IDL.Text),
    lng: IDL.Opt(IDL.Text),
    vat: IDL.Text,
    region: IDL.Text,
    zip_code: IDL.Text,
    country: IDL.Text,
    agent: IDL.Text,
    owner: IDL.Principal,
    city: IDL.Text,
    logo: IDL.Opt(IDL.Text),
    name: IDL.Text,
    continent: Continent,
    email: IDL.Text,
    website: IDL.Text,
    address: IDL.Text,
    mobile: IDL.Text,
  });
  const Role = IDL.Variant({
    Custodian: IDL.Null,
    Agent: IDL.Null,
    GasStation: IDL.Null,
  });
  const ConfigurationError = IDL.Variant({
    CustodialsCantBeEmpty: IDL.Null,
    AnonymousCustodial: IDL.Null,
  });
  const ContractError = IDL.Variant({
    CurrencyNotAllowed: IDL.Text,
    ContractValueIsNotMultipleOfInstallments: IDL.Null,
    ContractSellerQuotaIsNot100: IDL.Null,
    ContractPriceMismatch: IDL.Null,
    TokenValueIsZero: IDL.Null,
    ContractNotFound: IDL.Nat,
    CannotCloseContract: IDL.Null,
    ContractHasNoSeller: IDL.Null,
    ContractHasNoBuyer: IDL.Null,
    BadContractExpiration: IDL.Null,
    ContractHasNoTokens: IDL.Null,
    BadRealEstateId: IDL.Null,
    BadContractProperty: IDL.Null,
  });
  const CloseContractError = IDL.Variant({
    ContractNotFound: IDL.Nat,
    ContractNotExpired: IDL.Nat,
  });
  const ConfigurationError_1 = IDL.Variant({
    AnonymousOwner: IDL.Null,
    AnonymousMinter: IDL.Null,
  });
  const ContractError_1 = IDL.Variant({
    DocumentNotFound: IDL.Nat64,
    ContractNotFound: IDL.Nat,
    DocumentSizeMismatch: IDL.Tuple(IDL.Nat64, IDL.Nat64),
    BadContractProperty: IDL.Null,
  });
  const RealEstateError = IDL.Variant({ NotFound: IDL.Nat });
  const RejectionCode = IDL.Variant({
    NoError: IDL.Null,
    CanisterError: IDL.Null,
    SysTransient: IDL.Null,
    DestinationInvalid: IDL.Null,
    Unknown: IDL.Null,
    SysFatal: IDL.Null,
    CanisterReject: IDL.Null,
  });
  const DeferredDataError = IDL.Variant({
    Configuration: ConfigurationError_1,
    Contract: ContractError_1,
    RealEstate: RealEstateError,
    InvalidSignature: IDL.Null,
    Unauthorized: IDL.Null,
    StorageError: IDL.Null,
    CanisterCall: IDL.Tuple(RejectionCode, IDL.Text),
  });
  const EcdsaError = IDL.Variant({
    RecoveryIdError: IDL.Text,
    InvalidSignature: IDL.Text,
    InvalidPublicKey: IDL.Text,
  });
  const DeferredMinterError = IDL.Variant({
    Configuration: ConfigurationError,
    Contract: ContractError,
    CloseContract: CloseContractError,
    Unauthorized: IDL.Null,
    FailedToDecodeOutput: IDL.Text,
    EvmRpc: IDL.Text,
    DataCanister: DeferredDataError,
    StorageError: IDL.Null,
    CanisterCall: IDL.Tuple(RejectionCode, IDL.Text),
    Ecdsa: EcdsaError,
  });
  const Result = IDL.Variant({ Ok: IDL.Null, Err: DeferredMinterError });
  const ContractType = IDL.Variant({
    Sell: IDL.Null,
    Financing: IDL.Null,
  });
  const GenericValue = IDL.Variant({
    Nat64Content: IDL.Nat64,
    Nat32Content: IDL.Nat32,
    BoolContent: IDL.Bool,
    Nat8Content: IDL.Nat8,
    Int64Content: IDL.Int64,
    IntContent: IDL.Int,
    NatContent: IDL.Nat,
    Nat16Content: IDL.Nat16,
    Int32Content: IDL.Int32,
    Int8Content: IDL.Int8,
    FloatContent: IDL.Float64,
    Int16Content: IDL.Int16,
    Principal: IDL.Principal,
    TextContent: IDL.Text,
  });
  const RestrictionLevel = IDL.Variant({
    Buyer: IDL.Null,
    Public: IDL.Null,
    Seller: IDL.Null,
    Agent: IDL.Null,
  });
  const RestrictedProperty = IDL.Record({
    value: GenericValue,
    access_list: IDL.Vec(RestrictionLevel),
  });
  const Seller = IDL.Record({ quota: IDL.Nat8, address: IDL.Text });
  const ContractRegistration = IDL.Record({
    value: IDL.Nat64,
    type: ContractType,
    restricted_properties: IDL.Vec(IDL.Tuple(IDL.Text, RestrictedProperty)),
    properties: IDL.Vec(IDL.Tuple(IDL.Text, GenericValue)),
    deposit: IDL.Nat64,
    real_estate_id: IDL.Nat,
    sellers: IDL.Vec(Seller),
    token_value: IDL.Nat64,
    expiration: IDL.Text,
    currency: IDL.Text,
    installments: IDL.Nat64,
    buyers: IDL.Vec(IDL.Text),
  });
  const Result_1 = IDL.Variant({ Ok: IDL.Nat, Err: DeferredMinterError });
  const RealEstate = IDL.Record({
    region: IDL.Opt(IDL.Text),
    latitude: IDL.Opt(IDL.Float64),
    energy_class: IDL.Opt(IDL.Text),
    zip_code: IDL.Opt(IDL.Text),
    deleted: IDL.Bool,
    square_meters: IDL.Opt(IDL.Nat64),
    country: IDL.Opt(IDL.Text),
    bedrooms: IDL.Opt(IDL.Nat64),
    floors: IDL.Opt(IDL.Nat64),
    city: IDL.Opt(IDL.Text),
    name: IDL.Text,
    pool: IDL.Opt(IDL.Bool),
    zone: IDL.Opt(IDL.Text),
    garage: IDL.Opt(IDL.Bool),
    garden: IDL.Opt(IDL.Bool),
    agency: IDL.Principal,
    continent: IDL.Opt(Continent),
    description: IDL.Text,
    longitude: IDL.Opt(IDL.Float64),
    address: IDL.Opt(IDL.Text),
    elevator: IDL.Opt(IDL.Bool),
    youtube: IDL.Opt(IDL.Text),
    image: IDL.Opt(IDL.Text),
    balconies: IDL.Opt(IDL.Nat64),
    bathrooms: IDL.Opt(IDL.Nat64),
    year_of_construction: IDL.Opt(IDL.Nat64),
    parking: IDL.Opt(IDL.Bool),
    rooms: IDL.Opt(IDL.Nat64),
  });
  const Result_2 = IDL.Variant({
    Ok: IDL.Text,
    Err: DeferredMinterError,
  });
  const HttpRequest = IDL.Record({
    url: IDL.Text,
    method: IDL.Text,
    body: IDL.Vec(IDL.Nat8),
    headers: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
  });
  const HttpResponse = IDL.Record({
    body: IDL.Vec(IDL.Nat8),
    headers: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
    upgrade: IDL.Opt(IDL.Bool),
    status_code: IDL.Nat16,
  });
  return IDL.Service({
    admin_cycles: IDL.Func([], [IDL.Nat], ['query']),
    admin_ic_logs: IDL.Func([Pagination], [Logs], ['query']),
    admin_register_agency: IDL.Func([IDL.Principal, Agency], [], []),
    admin_remove_role: IDL.Func([IDL.Principal, Role], [Result], []),
    admin_set_allowed_currencies: IDL.Func([IDL.Vec(IDL.Text)], [], []),
    admin_set_custodians: IDL.Func([IDL.Vec(IDL.Principal)], [Result], []),
    admin_set_role: IDL.Func([IDL.Principal, Role], [], []),
    close_contract: IDL.Func([IDL.Nat], [Result], []),
    create_contract: IDL.Func([ContractRegistration], [Result_1], []),
    create_real_estate: IDL.Func([RealEstate], [Result_1], []),
    delete_real_estate: IDL.Func([IDL.Nat], [Result], []),
    gas_station_set_gas_price: IDL.Func([IDL.Nat64], [Result], []),
    get_agencies: IDL.Func([], [IDL.Vec(Agency)], ['query']),
    get_agency: IDL.Func([IDL.Principal], [IDL.Opt(Agency)], ['query']),
    get_eth_address: IDL.Func([], [Result_2], []),
    http_request: IDL.Func([HttpRequest], [HttpResponse], ['query']),
    remove_agency: IDL.Func([IDL.Principal], [Result], []),
    update_real_estate: IDL.Func([IDL.Nat, RealEstate], [Result], []),
  });
};

export interface Agency {
  lat: [] | [string];
  lng: [] | [string];
  vat: string;
  region: string;
  zip_code: string;
  country: string;
  agent: string;
  owner: Principal;
  city: string;
  logo: [] | [string];
  name: string;
  continent: Continent;
  email: string;
  website: string;
  address: string;
  mobile: string;
}
export type CloseContractError =
  | { ContractNotFound: bigint }
  | { ContractNotExpired: bigint };
export type ConfigurationError =
  | { CustodialsCantBeEmpty: null }
  | { AnonymousCustodial: null };
export type ConfigurationError_1 =
  | { AnonymousOwner: null }
  | { AnonymousMinter: null };
export type Continent =
  | { Africa: null }
  | { Antarctica: null }
  | { Asia: null }
  | { Europe: null }
  | { SouthAmerica: null }
  | { Oceania: null }
  | { NorthAmerica: null };
export type ContractError =
  | { CurrencyNotAllowed: string }
  | { ContractValueIsNotMultipleOfInstallments: null }
  | { ContractSellerQuotaIsNot100: null }
  | { ContractPriceMismatch: null }
  | { TokenValueIsZero: null }
  | { ContractNotFound: bigint }
  | { CannotCloseContract: null }
  | { ContractHasNoSeller: null }
  | { ContractHasNoBuyer: null }
  | { BadContractExpiration: null }
  | { ContractHasNoTokens: null }
  | { BadRealEstateId: null }
  | { BadContractProperty: null };
export type ContractError_1 =
  | { DocumentNotFound: bigint }
  | { ContractNotFound: bigint }
  | { DocumentSizeMismatch: [bigint, bigint] }
  | { BadContractProperty: null };
export interface ContractRegistration {
  value: bigint;
  type: ContractType;
  restricted_properties: Array<[string, RestrictedProperty]>;
  properties: Array<[string, GenericValue]>;
  deposit: bigint;
  real_estate_id: bigint;
  sellers: Array<Seller>;
  token_value: bigint;
  expiration: string;
  currency: string;
  installments: bigint;
  buyers: Array<string>;
}
export type ContractType = { Sell: null } | { Financing: null };
export type DeferredDataError =
  | { Configuration: ConfigurationError_1 }
  | { Contract: ContractError_1 }
  | { RealEstate: RealEstateError }
  | { InvalidSignature: null }
  | { Unauthorized: null }
  | { StorageError: null }
  | { CanisterCall: [RejectionCode, string] };
export type DeferredMinterError =
  | { Configuration: ConfigurationError }
  | { Contract: ContractError }
  | { CloseContract: CloseContractError }
  | { Unauthorized: null }
  | { FailedToDecodeOutput: string }
  | { EvmRpc: string }
  | { DataCanister: DeferredDataError }
  | { StorageError: null }
  | { CanisterCall: [RejectionCode, string] }
  | { Ecdsa: EcdsaError };
export interface DeferredMinterInitData {
  deferred_erc721: string;
  evm_rpc_api: [] | [string];
  allowed_currencies: Array<string>;
  deferred_data: Principal;
  reward_pool: string;
  custodians: Array<Principal>;
  chain_id: bigint;
  evm_rpc: Principal;
  ecdsa_key: EcdsaKey;
  log_settings: LogSettingsV2;
}
export type EcdsaError =
  | { RecoveryIdError: string }
  | { InvalidSignature: string }
  | { InvalidPublicKey: string };
export type EcdsaKey = { Dfx: null } | { Production: null } | { Test: null };
export type GenericValue =
  | { Nat64Content: bigint }
  | { Nat32Content: number }
  | { BoolContent: boolean }
  | { Nat8Content: number }
  | { Int64Content: bigint }
  | { IntContent: bigint }
  | { NatContent: bigint }
  | { Nat16Content: number }
  | { Int32Content: number }
  | { Int8Content: number }
  | { FloatContent: number }
  | { Int16Content: number }
  | { Principal: Principal }
  | { TextContent: string };
export interface HttpRequest {
  url: string;
  method: string;
  body: Uint8Array | number[];
  headers: Array<[string, string]>;
}
export interface HttpResponse {
  body: Uint8Array | number[];
  headers: Array<[string, string]>;
  upgrade: [] | [boolean];
  status_code: number;
}
export interface Log {
  log: string;
  offset: bigint;
}
export interface LogSettingsV2 {
  log_filter: string;
  in_memory_records: bigint;
  enable_console: boolean;
  max_record_length: bigint;
}
export interface Logs {
  logs: Array<Log>;
  all_logs_count: bigint;
}
export interface Pagination {
  count: bigint;
  offset: bigint;
}
export interface RealEstate {
  region: [] | [string];
  latitude: [] | [number];
  energy_class: [] | [string];
  zip_code: [] | [string];
  deleted: boolean;
  square_meters: [] | [bigint];
  country: [] | [string];
  bedrooms: [] | [bigint];
  floors: [] | [bigint];
  city: [] | [string];
  name: string;
  pool: [] | [boolean];
  zone: [] | [string];
  garage: [] | [boolean];
  garden: [] | [boolean];
  agency: Principal;
  continent: [] | [Continent];
  description: string;
  longitude: [] | [number];
  address: [] | [string];
  elevator: [] | [boolean];
  youtube: [] | [string];
  image: [] | [string];
  balconies: [] | [bigint];
  bathrooms: [] | [bigint];
  year_of_construction: [] | [bigint];
  parking: [] | [boolean];
  rooms: [] | [bigint];
}
export type RealEstateError = { NotFound: bigint };
export type RejectionCode =
  | { NoError: null }
  | { CanisterError: null }
  | { SysTransient: null }
  | { DestinationInvalid: null }
  | { Unknown: null }
  | { SysFatal: null }
  | { CanisterReject: null };
export interface RestrictedProperty {
  value: GenericValue;
  access_list: Array<RestrictionLevel>;
}
export type RestrictionLevel =
  | { Buyer: null }
  | { Public: null }
  | { Seller: null }
  | { Agent: null };
export type Result = { Ok: null } | { Err: DeferredMinterError };
export type Result_1 = { Ok: bigint } | { Err: DeferredMinterError };
export type Result_2 = { Ok: string } | { Err: DeferredMinterError };
export type Role = { Custodian: null } | { Agent: null } | { GasStation: null };
export interface Seller {
  quota: number;
  address: string;
}
export interface DeferredMinter {
  admin_cycles: ActorMethod<[], bigint>;
  admin_ic_logs: ActorMethod<[Pagination], Logs>;
  admin_register_agency: ActorMethod<[Principal, Agency], undefined>;
  admin_remove_role: ActorMethod<[Principal, Role], Result>;
  admin_set_allowed_currencies: ActorMethod<[Array<string>], undefined>;
  admin_set_custodians: ActorMethod<[Array<Principal>], Result>;
  admin_set_role: ActorMethod<[Principal, Role], undefined>;
  close_contract: ActorMethod<[bigint], Result>;
  create_contract: ActorMethod<[ContractRegistration], Result_1>;
  create_real_estate: ActorMethod<[RealEstate], Result_1>;
  delete_real_estate: ActorMethod<[bigint], Result>;
  gas_station_set_gas_price: ActorMethod<[bigint], Result>;
  get_agencies: ActorMethod<[], Array<Agency>>;
  get_agency: ActorMethod<[Principal], [] | [Agency]>;
  get_eth_address: ActorMethod<[], Result_2>;
  http_request: ActorMethod<[HttpRequest], HttpResponse>;
  remove_agency: ActorMethod<[Principal], Result>;
  update_real_estate: ActorMethod<[bigint, RealEstate], Result>;
}
