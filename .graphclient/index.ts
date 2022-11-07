// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import { parse } from 'graphql';
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { UnlockTypes } from './sources/Unlock/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type Query = {
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  key?: Maybe<Key>;
  keys: Array<Key>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  crossLocks: Array<Lock>;
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


export type QuerycrossLocksArgs = {
  first: Scalars['Int'];
  chainNames: Array<Scalars['String']>;
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
  chainName?: Maybe<Scalars['String']>;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Key: ResolverTypeWrapper<Key>;
  Key_filter: Key_filter;
  Key_orderBy: Key_orderBy;
  Lock: ResolverTypeWrapper<Lock>;
  Lock_filter: Lock_filter;
  Lock_orderBy: Lock_orderBy;
  OrderDirection: OrderDirection;
  String: ResolverTypeWrapper<Scalars['String']>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Key: Key;
  Key_filter: Key_filter;
  Lock: Lock;
  Lock_filter: Lock_filter;
  String: Scalars['String'];
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type QueryResolvers<ContextType = MeshContext & { chainName: string }, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  lock?: Resolver<Maybe<ResolversTypes['Lock']>, ParentType, ContextType, RequireFields<QuerylockArgs, 'id' | 'subgraphError'>>;
  locks?: Resolver<Array<ResolversTypes['Lock']>, ParentType, ContextType, RequireFields<QuerylocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  key?: Resolver<Maybe<ResolversTypes['Key']>, ParentType, ContextType, RequireFields<QuerykeyArgs, 'id' | 'subgraphError'>>;
  keys?: Resolver<Array<ResolversTypes['Key']>, ParentType, ContextType, RequireFields<QuerykeysArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  crossLocks?: Resolver<Array<ResolversTypes['Lock']>, ParentType, ContextType, RequireFields<QuerycrossLocksArgs, 'first' | 'chainNames'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext & { chainName: string }, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  lock?: SubscriptionResolver<Maybe<ResolversTypes['Lock']>, "lock", ParentType, ContextType, RequireFields<SubscriptionlockArgs, 'id' | 'subgraphError'>>;
  locks?: SubscriptionResolver<Array<ResolversTypes['Lock']>, "locks", ParentType, ContextType, RequireFields<SubscriptionlocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  key?: SubscriptionResolver<Maybe<ResolversTypes['Key']>, "key", ParentType, ContextType, RequireFields<SubscriptionkeyArgs, 'id' | 'subgraphError'>>;
  keys?: SubscriptionResolver<Array<ResolversTypes['Key']>, "keys", ParentType, ContextType, RequireFields<SubscriptionkeysArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type KeyResolvers<ContextType = MeshContext & { chainName: string }, ParentType extends ResolversParentTypes['Key'] = ResolversParentTypes['Key']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lock?: Resolver<ResolversTypes['Lock'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  expiration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenURI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAtBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cancelled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LockResolvers<ContextType = MeshContext & { chainName: string }, ParentType extends ResolversParentTypes['Lock'] = ResolversParentTypes['Lock']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expirationDuration?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lockManagers?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalKeys?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  maxNumberOfKeys?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  maxKeysPerAddress?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  keys?: Resolver<Maybe<Array<ResolversTypes['Key']>>, ParentType, ContextType, RequireFields<LockkeysArgs, 'skip' | 'first'>>;
  createdAtBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  chainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext & { chainName: string }, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext & { chainName: string }, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext & { chainName: string }> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Key?: KeyResolvers<ContextType>;
  Lock?: LockResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;


export type MeshContext = UnlockTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/Unlock/introspectionSchema":
      return import("./sources/Unlock/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const unlockTransforms = [];
const unlockHandler = new GraphqlHandler({
              name: "Unlock",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/unlock-protocol/{context.chainName:mainnet}-v2"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Unlock"),
              logger: logger.child("Unlock"),
              importFn,
            });
sources[0] = {
          name: 'Unlock',
          handler: unlockHandler,
          transforms: unlockTransforms
        }
const additionalTypeDefs = [parse("extend type Lock {\n  chainName: String\n}\n\nextend type Query {\n  crossLocks(first: Int!, chainNames: [String!]!): [Lock!]!\n}"),] as any[];
const additionalResolvers = await Promise.all([
        import("../src/resolvers.ts")
            .then(m => m.resolvers || m.default || m)
      ]);
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: CrossLocksExampleDocument,
        get rawSDL() {
          return printWithCache(CrossLocksExampleDocument);
        },
        location: 'CrossLocksExampleDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type CrossLocksExampleQueryVariables = Exact<{
  chainNames: Array<Scalars['String']> | Scalars['String'];
}>;


export type CrossLocksExampleQuery = { crossLocks: Array<Pick<Lock, 'id' | 'name'>> };


export const CrossLocksExampleDocument = gql`
    query CrossLocksExample($chainNames: [String!]!) {
  crossLocks(first: 2, chainNames: $chainNames) {
    id
    name
  }
}
    ` as unknown as DocumentNode<CrossLocksExampleQuery, CrossLocksExampleQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    CrossLocksExample(variables: CrossLocksExampleQueryVariables, options?: C): Promise<CrossLocksExampleQuery> {
      return requester<CrossLocksExampleQuery, CrossLocksExampleQueryVariables>(CrossLocksExampleDocument, variables, options) as Promise<CrossLocksExampleQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;