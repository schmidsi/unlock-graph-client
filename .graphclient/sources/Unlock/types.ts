// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace UnlockTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Key = {
  id: Scalars['ID'];
  lock: Lock;
  tokenId: Scalars['BigInt'];
  owner: Scalars['Bytes'];
  manager?: Maybe<Scalars['Bytes']>;
  expiration: Scalars['BigInt'];
  tokenURI?: Maybe<Scalars['String']>;
  createdAtBlock: Scalars['BigInt'];
  cancelled?: Maybe<Scalars['Boolean']>;
};

export type Key_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lock?: InputMaybe<Scalars['String']>;
  lock_not?: InputMaybe<Scalars['String']>;
  lock_gt?: InputMaybe<Scalars['String']>;
  lock_lt?: InputMaybe<Scalars['String']>;
  lock_gte?: InputMaybe<Scalars['String']>;
  lock_lte?: InputMaybe<Scalars['String']>;
  lock_in?: InputMaybe<Array<Scalars['String']>>;
  lock_not_in?: InputMaybe<Array<Scalars['String']>>;
  lock_contains?: InputMaybe<Scalars['String']>;
  lock_contains_nocase?: InputMaybe<Scalars['String']>;
  lock_not_contains?: InputMaybe<Scalars['String']>;
  lock_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lock_starts_with?: InputMaybe<Scalars['String']>;
  lock_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lock_not_starts_with?: InputMaybe<Scalars['String']>;
  lock_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lock_ends_with?: InputMaybe<Scalars['String']>;
  lock_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lock_not_ends_with?: InputMaybe<Scalars['String']>;
  lock_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lock_?: InputMaybe<Lock_filter>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  manager?: InputMaybe<Scalars['Bytes']>;
  manager_not?: InputMaybe<Scalars['Bytes']>;
  manager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  manager_contains?: InputMaybe<Scalars['Bytes']>;
  manager_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiration?: InputMaybe<Scalars['BigInt']>;
  expiration_not?: InputMaybe<Scalars['BigInt']>;
  expiration_gt?: InputMaybe<Scalars['BigInt']>;
  expiration_lt?: InputMaybe<Scalars['BigInt']>;
  expiration_gte?: InputMaybe<Scalars['BigInt']>;
  expiration_lte?: InputMaybe<Scalars['BigInt']>;
  expiration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cancelled?: InputMaybe<Scalars['Boolean']>;
  cancelled_not?: InputMaybe<Scalars['Boolean']>;
  cancelled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  cancelled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Key_orderBy =
  | 'id'
  | 'lock'
  | 'tokenId'
  | 'owner'
  | 'manager'
  | 'expiration'
  | 'tokenURI'
  | 'createdAtBlock'
  | 'cancelled';

export type Lock = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  expirationDuration?: Maybe<Scalars['BigInt']>;
  tokenAddress: Scalars['Bytes'];
  price: Scalars['BigInt'];
  lockManagers: Array<Scalars['Bytes']>;
  version: Scalars['BigInt'];
  totalKeys: Scalars['BigInt'];
  maxNumberOfKeys?: Maybe<Scalars['BigInt']>;
  maxKeysPerAddress?: Maybe<Scalars['BigInt']>;
  keys?: Maybe<Array<Key>>;
  createdAtBlock?: Maybe<Scalars['BigInt']>;
};


export type LockkeysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Key_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Key_filter>;
};

export type Lock_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  expirationDuration?: InputMaybe<Scalars['BigInt']>;
  expirationDuration_not?: InputMaybe<Scalars['BigInt']>;
  expirationDuration_gt?: InputMaybe<Scalars['BigInt']>;
  expirationDuration_lt?: InputMaybe<Scalars['BigInt']>;
  expirationDuration_gte?: InputMaybe<Scalars['BigInt']>;
  expirationDuration_lte?: InputMaybe<Scalars['BigInt']>;
  expirationDuration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expirationDuration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockManagers?: InputMaybe<Array<Scalars['Bytes']>>;
  lockManagers_not?: InputMaybe<Array<Scalars['Bytes']>>;
  lockManagers_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  lockManagers_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  lockManagers_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  lockManagers_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  version?: InputMaybe<Scalars['BigInt']>;
  version_not?: InputMaybe<Scalars['BigInt']>;
  version_gt?: InputMaybe<Scalars['BigInt']>;
  version_lt?: InputMaybe<Scalars['BigInt']>;
  version_gte?: InputMaybe<Scalars['BigInt']>;
  version_lte?: InputMaybe<Scalars['BigInt']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalKeys?: InputMaybe<Scalars['BigInt']>;
  totalKeys_not?: InputMaybe<Scalars['BigInt']>;
  totalKeys_gt?: InputMaybe<Scalars['BigInt']>;
  totalKeys_lt?: InputMaybe<Scalars['BigInt']>;
  totalKeys_gte?: InputMaybe<Scalars['BigInt']>;
  totalKeys_lte?: InputMaybe<Scalars['BigInt']>;
  totalKeys_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalKeys_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxNumberOfKeys?: InputMaybe<Scalars['BigInt']>;
  maxNumberOfKeys_not?: InputMaybe<Scalars['BigInt']>;
  maxNumberOfKeys_gt?: InputMaybe<Scalars['BigInt']>;
  maxNumberOfKeys_lt?: InputMaybe<Scalars['BigInt']>;
  maxNumberOfKeys_gte?: InputMaybe<Scalars['BigInt']>;
  maxNumberOfKeys_lte?: InputMaybe<Scalars['BigInt']>;
  maxNumberOfKeys_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxNumberOfKeys_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxKeysPerAddress?: InputMaybe<Scalars['BigInt']>;
  maxKeysPerAddress_not?: InputMaybe<Scalars['BigInt']>;
  maxKeysPerAddress_gt?: InputMaybe<Scalars['BigInt']>;
  maxKeysPerAddress_lt?: InputMaybe<Scalars['BigInt']>;
  maxKeysPerAddress_gte?: InputMaybe<Scalars['BigInt']>;
  maxKeysPerAddress_lte?: InputMaybe<Scalars['BigInt']>;
  maxKeysPerAddress_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxKeysPerAddress_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  keys_?: InputMaybe<Key_filter>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Lock_orderBy =
  | 'id'
  | 'address'
  | 'name'
  | 'symbol'
  | 'expirationDuration'
  | 'tokenAddress'
  | 'price'
  | 'lockManagers'
  | 'version'
  | 'totalKeys'
  | 'maxNumberOfKeys'
  | 'maxKeysPerAddress'
  | 'keys'
  | 'createdAtBlock';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  key?: Maybe<Key>;
  keys: Array<Key>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerylockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Lock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Lock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykeyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerykeysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Key_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Key_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  key?: Maybe<Key>;
  keys: Array<Key>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionlockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Lock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Lock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkeyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionkeysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Key_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Key_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  lock: InContextSdkMethod<Query['lock'], QuerylockArgs, MeshContext>,
  /** null **/
  locks: InContextSdkMethod<Query['locks'], QuerylocksArgs, MeshContext>,
  /** null **/
  key: InContextSdkMethod<Query['key'], QuerykeyArgs, MeshContext>,
  /** null **/
  keys: InContextSdkMethod<Query['keys'], QuerykeysArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  lock: InContextSdkMethod<Subscription['lock'], SubscriptionlockArgs, MeshContext>,
  /** null **/
  locks: InContextSdkMethod<Subscription['locks'], SubscriptionlocksArgs, MeshContext>,
  /** null **/
  key: InContextSdkMethod<Subscription['key'], SubscriptionkeyArgs, MeshContext>,
  /** null **/
  keys: InContextSdkMethod<Subscription['keys'], SubscriptionkeysArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["Unlock"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["chainName"]: Scalars['ID']
    };
}
