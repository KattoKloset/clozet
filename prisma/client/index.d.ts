
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemImage
 * 
 */
export type ItemImage = $Result.DefaultSelection<Prisma.$ItemImagePayload>
/**
 * Model ShipmentGroup
 * 
 */
export type ShipmentGroup = $Result.DefaultSelection<Prisma.$ShipmentGroupPayload>
/**
 * Model ShipmentBatch
 * 
 */
export type ShipmentBatch = $Result.DefaultSelection<Prisma.$ShipmentBatchPayload>
/**
 * Model Drop
 * 
 */
export type Drop = $Result.DefaultSelection<Prisma.$DropPayload>
/**
 * Model CollaboratorAssignment
 * 
 */
export type CollaboratorAssignment = $Result.DefaultSelection<Prisma.$CollaboratorAssignmentPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Buyer
 * 
 */
export type Buyer = $Result.DefaultSelection<Prisma.$BuyerPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Rental
 * 
 */
export type Rental = $Result.DefaultSelection<Prisma.$RentalPayload>
/**
 * Model ShippingRule
 * 
 */
export type ShippingRule = $Result.DefaultSelection<Prisma.$ShippingRulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SELLER: 'SELLER',
  COLLABORATOR: 'COLLABORATOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const BatchStatus: {
  HOLDING: 'HOLDING',
  AWAITING_PICKUP: 'AWAITING_PICKUP',
  IN_TRANSIT: 'IN_TRANSIT',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED'
};

export type BatchStatus = (typeof BatchStatus)[keyof typeof BatchStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  PAYNOW: 'PAYNOW',
  BANK_TRANSFER: 'BANK_TRANSFER',
  STRIPE: 'STRIPE'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const CommissionType: {
  PERCENT_PROFIT: 'PERCENT_PROFIT',
  PERCENT_SALE: 'PERCENT_SALE',
  FLAT: 'FLAT'
};

export type CommissionType = (typeof CommissionType)[keyof typeof CommissionType]


export const RentalStatus: {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  OVERDUE: 'OVERDUE',
  COMPLETED: 'COMPLETED'
};

export type RentalStatus = (typeof RentalStatus)[keyof typeof RentalStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type BatchStatus = $Enums.BatchStatus

export const BatchStatus: typeof $Enums.BatchStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type CommissionType = $Enums.CommissionType

export const CommissionType: typeof $Enums.CommissionType

export type RentalStatus = $Enums.RentalStatus

export const RentalStatus: typeof $Enums.RentalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemImage`: Exposes CRUD operations for the **ItemImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemImages
    * const itemImages = await prisma.itemImage.findMany()
    * ```
    */
  get itemImage(): Prisma.ItemImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentGroup`: Exposes CRUD operations for the **ShipmentGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentGroups
    * const shipmentGroups = await prisma.shipmentGroup.findMany()
    * ```
    */
  get shipmentGroup(): Prisma.ShipmentGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentBatch`: Exposes CRUD operations for the **ShipmentBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentBatches
    * const shipmentBatches = await prisma.shipmentBatch.findMany()
    * ```
    */
  get shipmentBatch(): Prisma.ShipmentBatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drop`: Exposes CRUD operations for the **Drop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drops
    * const drops = await prisma.drop.findMany()
    * ```
    */
  get drop(): Prisma.DropDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collaboratorAssignment`: Exposes CRUD operations for the **CollaboratorAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollaboratorAssignments
    * const collaboratorAssignments = await prisma.collaboratorAssignment.findMany()
    * ```
    */
  get collaboratorAssignment(): Prisma.CollaboratorAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buyer`: Exposes CRUD operations for the **Buyer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buyers
    * const buyers = await prisma.buyer.findMany()
    * ```
    */
  get buyer(): Prisma.BuyerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **Rental** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rental.findMany()
    * ```
    */
  get rental(): Prisma.RentalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shippingRule`: Exposes CRUD operations for the **ShippingRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShippingRules
    * const shippingRules = await prisma.shippingRule.findMany()
    * ```
    */
  get shippingRule(): Prisma.ShippingRuleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Supplier: 'Supplier',
    Item: 'Item',
    ItemImage: 'ItemImage',
    ShipmentGroup: 'ShipmentGroup',
    ShipmentBatch: 'ShipmentBatch',
    Drop: 'Drop',
    CollaboratorAssignment: 'CollaboratorAssignment',
    Order: 'Order',
    Buyer: 'Buyer',
    OrderItem: 'OrderItem',
    Rental: 'Rental',
    ShippingRule: 'ShippingRule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "supplier" | "item" | "itemImage" | "shipmentGroup" | "shipmentBatch" | "drop" | "collaboratorAssignment" | "order" | "buyer" | "orderItem" | "rental" | "shippingRule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemImage: {
        payload: Prisma.$ItemImagePayload<ExtArgs>
        fields: Prisma.ItemImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          findFirst: {
            args: Prisma.ItemImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          findMany: {
            args: Prisma.ItemImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>[]
          }
          create: {
            args: Prisma.ItemImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          createMany: {
            args: Prisma.ItemImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>[]
          }
          delete: {
            args: Prisma.ItemImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          update: {
            args: Prisma.ItemImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          deleteMany: {
            args: Prisma.ItemImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>[]
          }
          upsert: {
            args: Prisma.ItemImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          aggregate: {
            args: Prisma.ItemImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemImage>
          }
          groupBy: {
            args: Prisma.ItemImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemImageCountArgs<ExtArgs>
            result: $Utils.Optional<ItemImageCountAggregateOutputType> | number
          }
        }
      }
      ShipmentGroup: {
        payload: Prisma.$ShipmentGroupPayload<ExtArgs>
        fields: Prisma.ShipmentGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload>
          }
          findFirst: {
            args: Prisma.ShipmentGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload>
          }
          findMany: {
            args: Prisma.ShipmentGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload>[]
          }
          create: {
            args: Prisma.ShipmentGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload>
          }
          createMany: {
            args: Prisma.ShipmentGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload>[]
          }
          delete: {
            args: Prisma.ShipmentGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload>
          }
          update: {
            args: Prisma.ShipmentGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentGroupPayload>
          }
          aggregate: {
            args: Prisma.ShipmentGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentGroup>
          }
          groupBy: {
            args: Prisma.ShipmentGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupCountAggregateOutputType> | number
          }
        }
      }
      ShipmentBatch: {
        payload: Prisma.$ShipmentBatchPayload<ExtArgs>
        fields: Prisma.ShipmentBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload>
          }
          findFirst: {
            args: Prisma.ShipmentBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload>
          }
          findMany: {
            args: Prisma.ShipmentBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload>[]
          }
          create: {
            args: Prisma.ShipmentBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload>
          }
          createMany: {
            args: Prisma.ShipmentBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload>[]
          }
          delete: {
            args: Prisma.ShipmentBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload>
          }
          update: {
            args: Prisma.ShipmentBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentBatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentBatchPayload>
          }
          aggregate: {
            args: Prisma.ShipmentBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentBatch>
          }
          groupBy: {
            args: Prisma.ShipmentBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentBatchCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentBatchCountAggregateOutputType> | number
          }
        }
      }
      Drop: {
        payload: Prisma.$DropPayload<ExtArgs>
        fields: Prisma.DropFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DropFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DropFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload>
          }
          findFirst: {
            args: Prisma.DropFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DropFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload>
          }
          findMany: {
            args: Prisma.DropFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload>[]
          }
          create: {
            args: Prisma.DropCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload>
          }
          createMany: {
            args: Prisma.DropCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DropCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload>[]
          }
          delete: {
            args: Prisma.DropDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload>
          }
          update: {
            args: Prisma.DropUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload>
          }
          deleteMany: {
            args: Prisma.DropDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DropUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DropUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload>[]
          }
          upsert: {
            args: Prisma.DropUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DropPayload>
          }
          aggregate: {
            args: Prisma.DropAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrop>
          }
          groupBy: {
            args: Prisma.DropGroupByArgs<ExtArgs>
            result: $Utils.Optional<DropGroupByOutputType>[]
          }
          count: {
            args: Prisma.DropCountArgs<ExtArgs>
            result: $Utils.Optional<DropCountAggregateOutputType> | number
          }
        }
      }
      CollaboratorAssignment: {
        payload: Prisma.$CollaboratorAssignmentPayload<ExtArgs>
        fields: Prisma.CollaboratorAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaboratorAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaboratorAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload>
          }
          findFirst: {
            args: Prisma.CollaboratorAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaboratorAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload>
          }
          findMany: {
            args: Prisma.CollaboratorAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload>[]
          }
          create: {
            args: Prisma.CollaboratorAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload>
          }
          createMany: {
            args: Prisma.CollaboratorAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaboratorAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload>[]
          }
          delete: {
            args: Prisma.CollaboratorAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload>
          }
          update: {
            args: Prisma.CollaboratorAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.CollaboratorAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollaboratorAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollaboratorAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.CollaboratorAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaboratorAssignmentPayload>
          }
          aggregate: {
            args: Prisma.CollaboratorAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaboratorAssignment>
          }
          groupBy: {
            args: Prisma.CollaboratorAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaboratorAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<CollaboratorAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Buyer: {
        payload: Prisma.$BuyerPayload<ExtArgs>
        fields: Prisma.BuyerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuyerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuyerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          findFirst: {
            args: Prisma.BuyerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuyerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          findMany: {
            args: Prisma.BuyerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>[]
          }
          create: {
            args: Prisma.BuyerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          createMany: {
            args: Prisma.BuyerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuyerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>[]
          }
          delete: {
            args: Prisma.BuyerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          update: {
            args: Prisma.BuyerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          deleteMany: {
            args: Prisma.BuyerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuyerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuyerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>[]
          }
          upsert: {
            args: Prisma.BuyerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuyerPayload>
          }
          aggregate: {
            args: Prisma.BuyerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuyer>
          }
          groupBy: {
            args: Prisma.BuyerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuyerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuyerCountArgs<ExtArgs>
            result: $Utils.Optional<BuyerCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Rental: {
        payload: Prisma.$RentalPayload<ExtArgs>
        fields: Prisma.RentalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findFirst: {
            args: Prisma.RentalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findMany: {
            args: Prisma.RentalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          create: {
            args: Prisma.RentalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          createMany: {
            args: Prisma.RentalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          delete: {
            args: Prisma.RentalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          update: {
            args: Prisma.RentalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          deleteMany: {
            args: Prisma.RentalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          upsert: {
            args: Prisma.RentalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRental>
          }
          groupBy: {
            args: Prisma.RentalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalCountArgs<ExtArgs>
            result: $Utils.Optional<RentalCountAggregateOutputType> | number
          }
        }
      }
      ShippingRule: {
        payload: Prisma.$ShippingRulePayload<ExtArgs>
        fields: Prisma.ShippingRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShippingRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShippingRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload>
          }
          findFirst: {
            args: Prisma.ShippingRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShippingRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload>
          }
          findMany: {
            args: Prisma.ShippingRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload>[]
          }
          create: {
            args: Prisma.ShippingRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload>
          }
          createMany: {
            args: Prisma.ShippingRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShippingRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload>[]
          }
          delete: {
            args: Prisma.ShippingRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload>
          }
          update: {
            args: Prisma.ShippingRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload>
          }
          deleteMany: {
            args: Prisma.ShippingRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShippingRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShippingRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload>[]
          }
          upsert: {
            args: Prisma.ShippingRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingRulePayload>
          }
          aggregate: {
            args: Prisma.ShippingRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShippingRule>
          }
          groupBy: {
            args: Prisma.ShippingRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShippingRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShippingRuleCountArgs<ExtArgs>
            result: $Utils.Optional<ShippingRuleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    supplier?: SupplierOmit
    item?: ItemOmit
    itemImage?: ItemImageOmit
    shipmentGroup?: ShipmentGroupOmit
    shipmentBatch?: ShipmentBatchOmit
    drop?: DropOmit
    collaboratorAssignment?: CollaboratorAssignmentOmit
    order?: OrderOmit
    buyer?: BuyerOmit
    orderItem?: OrderItemOmit
    rental?: RentalOmit
    shippingRule?: ShippingRuleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    rentals: number
    collaboratorOnDrops: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    rentals?: boolean | UserCountOutputTypeCountRentalsArgs
    collaboratorOnDrops?: boolean | UserCountOutputTypeCountCollaboratorOnDropsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollaboratorOnDropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorAssignmentWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    items: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SupplierCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    images: number
    ShipmentBatch: number
    CollaboratorAssignment: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ItemCountOutputTypeCountImagesArgs
    ShipmentBatch?: boolean | ItemCountOutputTypeCountShipmentBatchArgs
    CollaboratorAssignment?: boolean | ItemCountOutputTypeCountCollaboratorAssignmentArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemImageWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountShipmentBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentBatchWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountCollaboratorAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorAssignmentWhereInput
  }


  /**
   * Count Type ShipmentGroupCountOutputType
   */

  export type ShipmentGroupCountOutputType = {
    items: number
  }

  export type ShipmentGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ShipmentGroupCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ShipmentGroupCountOutputType without action
   */
  export type ShipmentGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroupCountOutputType
     */
    select?: ShipmentGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentGroupCountOutputType without action
   */
  export type ShipmentGroupCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type ShipmentBatchCountOutputType
   */

  export type ShipmentBatchCountOutputType = {
    items: number
  }

  export type ShipmentBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ShipmentBatchCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ShipmentBatchCountOutputType without action
   */
  export type ShipmentBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatchCountOutputType
     */
    select?: ShipmentBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentBatchCountOutputType without action
   */
  export type ShipmentBatchCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type DropCountOutputType
   */

  export type DropCountOutputType = {
    items: number
    collaborators: number
  }

  export type DropCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | DropCountOutputTypeCountItemsArgs
    collaborators?: boolean | DropCountOutputTypeCountCollaboratorsArgs
  }

  // Custom InputTypes
  /**
   * DropCountOutputType without action
   */
  export type DropCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DropCountOutputType
     */
    select?: DropCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DropCountOutputType without action
   */
  export type DropCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * DropCountOutputType without action
   */
  export type DropCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorAssignmentWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
    User: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
    User?: boolean | OrderCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type BuyerCountOutputType
   */

  export type BuyerCountOutputType = {
    orders: number
    rentals: number
  }

  export type BuyerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | BuyerCountOutputTypeCountOrdersArgs
    rentals?: boolean | BuyerCountOutputTypeCountRentalsArgs
  }

  // Custom InputTypes
  /**
   * BuyerCountOutputType without action
   */
  export type BuyerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerCountOutputType
     */
    select?: BuyerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuyerCountOutputType without action
   */
  export type BuyerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * BuyerCountOutputType without action
   */
  export type BuyerCountOutputTypeCountRentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }


  /**
   * Count Type RentalCountOutputType
   */

  export type RentalCountOutputType = {
    User: number
  }

  export type RentalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RentalCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalCountOutputType
     */
    select?: RentalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalCountOutputType without action
   */
  export type RentalCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    telegram: string | null
    instagram: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    telegram: string | null
    instagram: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    telegram: number
    instagram: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    telegram?: true
    instagram?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    telegram?: true
    instagram?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    telegram?: true
    instagram?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    telegram: string | null
    instagram: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    instagram?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    rentals?: boolean | User$rentalsArgs<ExtArgs>
    collaboratorOnDrops?: boolean | User$collaboratorOnDropsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    instagram?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    instagram?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    instagram?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "telegram" | "instagram" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    rentals?: boolean | User$rentalsArgs<ExtArgs>
    collaboratorOnDrops?: boolean | User$collaboratorOnDropsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      rentals: Prisma.$RentalPayload<ExtArgs>[]
      collaboratorOnDrops: Prisma.$CollaboratorAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      telegram: string | null
      instagram: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentals<T extends User$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, User$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaboratorOnDrops<T extends User$collaboratorOnDropsArgs<ExtArgs> = {}>(args?: Subset<T, User$collaboratorOnDropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly telegram: FieldRef<"User", 'String'>
    readonly instagram: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.rentals
   */
  export type User$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * User.collaboratorOnDrops
   */
  export type User$collaboratorOnDropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    where?: CollaboratorAssignmentWhereInput
    orderBy?: CollaboratorAssignmentOrderByWithRelationInput | CollaboratorAssignmentOrderByWithRelationInput[]
    cursor?: CollaboratorAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorAssignmentScalarFieldEnum | CollaboratorAssignmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    contact: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contact: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    contact: number
    notes: number
    createdAt: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    notes?: true
    createdAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    notes?: true
    createdAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    contact: string | null
    notes: string | null
    createdAt: Date
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    notes?: boolean
    createdAt?: boolean
    items?: boolean | Supplier$itemsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    notes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    contact?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contact" | "notes" | "createdAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Supplier$itemsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contact: string | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Supplier$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly contact: FieldRef<"Supplier", 'String'>
    readonly notes: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.items
   */
  export type Supplier$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    purchasePrice: number | null
    salePrice: number | null
    profit: number | null
  }

  export type ItemSumAggregateOutputType = {
    purchasePrice: number | null
    salePrice: number | null
    profit: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    size: string | null
    color: string | null
    condition: string | null
    purchasePrice: number | null
    salePrice: number | null
    profit: number | null
    supplierId: string | null
    shipmentGroupId: string | null
    dropId: string | null
    createdAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    size: string | null
    color: string | null
    condition: string | null
    purchasePrice: number | null
    salePrice: number | null
    profit: number | null
    supplierId: string | null
    shipmentGroupId: string | null
    dropId: string | null
    createdAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    size: number
    color: number
    condition: number
    purchasePrice: number
    salePrice: number
    profit: number
    supplierId: number
    shipmentGroupId: number
    dropId: number
    createdAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    purchasePrice?: true
    salePrice?: true
    profit?: true
  }

  export type ItemSumAggregateInputType = {
    purchasePrice?: true
    salePrice?: true
    profit?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    size?: true
    color?: true
    condition?: true
    purchasePrice?: true
    salePrice?: true
    profit?: true
    supplierId?: true
    shipmentGroupId?: true
    dropId?: true
    createdAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    size?: true
    color?: true
    condition?: true
    purchasePrice?: true
    salePrice?: true
    profit?: true
    supplierId?: true
    shipmentGroupId?: true
    dropId?: true
    createdAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    size?: true
    color?: true
    condition?: true
    purchasePrice?: true
    salePrice?: true
    profit?: true
    supplierId?: true
    shipmentGroupId?: true
    dropId?: true
    createdAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    size: string | null
    color: string | null
    condition: string | null
    purchasePrice: number
    salePrice: number | null
    profit: number | null
    supplierId: string | null
    shipmentGroupId: string | null
    dropId: string | null
    createdAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    size?: boolean
    color?: boolean
    condition?: boolean
    purchasePrice?: boolean
    salePrice?: boolean
    profit?: boolean
    supplierId?: boolean
    shipmentGroupId?: boolean
    dropId?: boolean
    createdAt?: boolean
    supplier?: boolean | Item$supplierArgs<ExtArgs>
    shipmentGroup?: boolean | Item$shipmentGroupArgs<ExtArgs>
    drop?: boolean | Item$dropArgs<ExtArgs>
    rental?: boolean | Item$rentalArgs<ExtArgs>
    orderItem?: boolean | Item$orderItemArgs<ExtArgs>
    images?: boolean | Item$imagesArgs<ExtArgs>
    ShipmentBatch?: boolean | Item$ShipmentBatchArgs<ExtArgs>
    CollaboratorAssignment?: boolean | Item$CollaboratorAssignmentArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    size?: boolean
    color?: boolean
    condition?: boolean
    purchasePrice?: boolean
    salePrice?: boolean
    profit?: boolean
    supplierId?: boolean
    shipmentGroupId?: boolean
    dropId?: boolean
    createdAt?: boolean
    supplier?: boolean | Item$supplierArgs<ExtArgs>
    shipmentGroup?: boolean | Item$shipmentGroupArgs<ExtArgs>
    drop?: boolean | Item$dropArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    size?: boolean
    color?: boolean
    condition?: boolean
    purchasePrice?: boolean
    salePrice?: boolean
    profit?: boolean
    supplierId?: boolean
    shipmentGroupId?: boolean
    dropId?: boolean
    createdAt?: boolean
    supplier?: boolean | Item$supplierArgs<ExtArgs>
    shipmentGroup?: boolean | Item$shipmentGroupArgs<ExtArgs>
    drop?: boolean | Item$dropArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    size?: boolean
    color?: boolean
    condition?: boolean
    purchasePrice?: boolean
    salePrice?: boolean
    profit?: boolean
    supplierId?: boolean
    shipmentGroupId?: boolean
    dropId?: boolean
    createdAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "size" | "color" | "condition" | "purchasePrice" | "salePrice" | "profit" | "supplierId" | "shipmentGroupId" | "dropId" | "createdAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Item$supplierArgs<ExtArgs>
    shipmentGroup?: boolean | Item$shipmentGroupArgs<ExtArgs>
    drop?: boolean | Item$dropArgs<ExtArgs>
    rental?: boolean | Item$rentalArgs<ExtArgs>
    orderItem?: boolean | Item$orderItemArgs<ExtArgs>
    images?: boolean | Item$imagesArgs<ExtArgs>
    ShipmentBatch?: boolean | Item$ShipmentBatchArgs<ExtArgs>
    CollaboratorAssignment?: boolean | Item$CollaboratorAssignmentArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Item$supplierArgs<ExtArgs>
    shipmentGroup?: boolean | Item$shipmentGroupArgs<ExtArgs>
    drop?: boolean | Item$dropArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Item$supplierArgs<ExtArgs>
    shipmentGroup?: boolean | Item$shipmentGroupArgs<ExtArgs>
    drop?: boolean | Item$dropArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs> | null
      shipmentGroup: Prisma.$ShipmentGroupPayload<ExtArgs> | null
      drop: Prisma.$DropPayload<ExtArgs> | null
      rental: Prisma.$RentalPayload<ExtArgs> | null
      orderItem: Prisma.$OrderItemPayload<ExtArgs> | null
      images: Prisma.$ItemImagePayload<ExtArgs>[]
      ShipmentBatch: Prisma.$ShipmentBatchPayload<ExtArgs>[]
      CollaboratorAssignment: Prisma.$CollaboratorAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      size: string | null
      color: string | null
      condition: string | null
      purchasePrice: number
      salePrice: number | null
      profit: number | null
      supplierId: string | null
      shipmentGroupId: string | null
      dropId: string | null
      createdAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends Item$supplierArgs<ExtArgs> = {}>(args?: Subset<T, Item$supplierArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shipmentGroup<T extends Item$shipmentGroupArgs<ExtArgs> = {}>(args?: Subset<T, Item$shipmentGroupArgs<ExtArgs>>): Prisma__ShipmentGroupClient<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    drop<T extends Item$dropArgs<ExtArgs> = {}>(args?: Subset<T, Item$dropArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rental<T extends Item$rentalArgs<ExtArgs> = {}>(args?: Subset<T, Item$rentalArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderItem<T extends Item$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, Item$orderItemArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends Item$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Item$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ShipmentBatch<T extends Item$ShipmentBatchArgs<ExtArgs> = {}>(args?: Subset<T, Item$ShipmentBatchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CollaboratorAssignment<T extends Item$CollaboratorAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Item$CollaboratorAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly size: FieldRef<"Item", 'String'>
    readonly color: FieldRef<"Item", 'String'>
    readonly condition: FieldRef<"Item", 'String'>
    readonly purchasePrice: FieldRef<"Item", 'Float'>
    readonly salePrice: FieldRef<"Item", 'Float'>
    readonly profit: FieldRef<"Item", 'Float'>
    readonly supplierId: FieldRef<"Item", 'String'>
    readonly shipmentGroupId: FieldRef<"Item", 'String'>
    readonly dropId: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.supplier
   */
  export type Item$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
  }

  /**
   * Item.shipmentGroup
   */
  export type Item$shipmentGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    where?: ShipmentGroupWhereInput
  }

  /**
   * Item.drop
   */
  export type Item$dropArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    where?: DropWhereInput
  }

  /**
   * Item.rental
   */
  export type Item$rentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
  }

  /**
   * Item.orderItem
   */
  export type Item$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
  }

  /**
   * Item.images
   */
  export type Item$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    where?: ItemImageWhereInput
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    cursor?: ItemImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * Item.ShipmentBatch
   */
  export type Item$ShipmentBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    where?: ShipmentBatchWhereInput
    orderBy?: ShipmentBatchOrderByWithRelationInput | ShipmentBatchOrderByWithRelationInput[]
    cursor?: ShipmentBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentBatchScalarFieldEnum | ShipmentBatchScalarFieldEnum[]
  }

  /**
   * Item.CollaboratorAssignment
   */
  export type Item$CollaboratorAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    where?: CollaboratorAssignmentWhereInput
    orderBy?: CollaboratorAssignmentOrderByWithRelationInput | CollaboratorAssignmentOrderByWithRelationInput[]
    cursor?: CollaboratorAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorAssignmentScalarFieldEnum | CollaboratorAssignmentScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ItemImage
   */

  export type AggregateItemImage = {
    _count: ItemImageCountAggregateOutputType | null
    _avg: ItemImageAvgAggregateOutputType | null
    _sum: ItemImageSumAggregateOutputType | null
    _min: ItemImageMinAggregateOutputType | null
    _max: ItemImageMaxAggregateOutputType | null
  }

  export type ItemImageAvgAggregateOutputType = {
    position: number | null
  }

  export type ItemImageSumAggregateOutputType = {
    position: number | null
  }

  export type ItemImageMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    url: string | null
    position: number | null
    uploadedAt: Date | null
  }

  export type ItemImageMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    url: string | null
    position: number | null
    uploadedAt: Date | null
  }

  export type ItemImageCountAggregateOutputType = {
    id: number
    itemId: number
    url: number
    position: number
    uploadedAt: number
    _all: number
  }


  export type ItemImageAvgAggregateInputType = {
    position?: true
  }

  export type ItemImageSumAggregateInputType = {
    position?: true
  }

  export type ItemImageMinAggregateInputType = {
    id?: true
    itemId?: true
    url?: true
    position?: true
    uploadedAt?: true
  }

  export type ItemImageMaxAggregateInputType = {
    id?: true
    itemId?: true
    url?: true
    position?: true
    uploadedAt?: true
  }

  export type ItemImageCountAggregateInputType = {
    id?: true
    itemId?: true
    url?: true
    position?: true
    uploadedAt?: true
    _all?: true
  }

  export type ItemImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemImage to aggregate.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemImages
    **/
    _count?: true | ItemImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemImageMaxAggregateInputType
  }

  export type GetItemImageAggregateType<T extends ItemImageAggregateArgs> = {
        [P in keyof T & keyof AggregateItemImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemImage[P]>
      : GetScalarType<T[P], AggregateItemImage[P]>
  }




  export type ItemImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemImageWhereInput
    orderBy?: ItemImageOrderByWithAggregationInput | ItemImageOrderByWithAggregationInput[]
    by: ItemImageScalarFieldEnum[] | ItemImageScalarFieldEnum
    having?: ItemImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemImageCountAggregateInputType | true
    _avg?: ItemImageAvgAggregateInputType
    _sum?: ItemImageSumAggregateInputType
    _min?: ItemImageMinAggregateInputType
    _max?: ItemImageMaxAggregateInputType
  }

  export type ItemImageGroupByOutputType = {
    id: string
    itemId: string
    url: string
    position: number
    uploadedAt: Date
    _count: ItemImageCountAggregateOutputType | null
    _avg: ItemImageAvgAggregateOutputType | null
    _sum: ItemImageSumAggregateOutputType | null
    _min: ItemImageMinAggregateOutputType | null
    _max: ItemImageMaxAggregateOutputType | null
  }

  type GetItemImageGroupByPayload<T extends ItemImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemImageGroupByOutputType[P]>
            : GetScalarType<T[P], ItemImageGroupByOutputType[P]>
        }
      >
    >


  export type ItemImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    url?: boolean
    position?: boolean
    uploadedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemImage"]>

  export type ItemImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    url?: boolean
    position?: boolean
    uploadedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemImage"]>

  export type ItemImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    url?: boolean
    position?: boolean
    uploadedAt?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemImage"]>

  export type ItemImageSelectScalar = {
    id?: boolean
    itemId?: boolean
    url?: boolean
    position?: boolean
    uploadedAt?: boolean
  }

  export type ItemImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "url" | "position" | "uploadedAt", ExtArgs["result"]["itemImage"]>
  export type ItemImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ItemImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemImage"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      url: string
      position: number
      uploadedAt: Date
    }, ExtArgs["result"]["itemImage"]>
    composites: {}
  }

  type ItemImageGetPayload<S extends boolean | null | undefined | ItemImageDefaultArgs> = $Result.GetResult<Prisma.$ItemImagePayload, S>

  type ItemImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemImageCountAggregateInputType | true
    }

  export interface ItemImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemImage'], meta: { name: 'ItemImage' } }
    /**
     * Find zero or one ItemImage that matches the filter.
     * @param {ItemImageFindUniqueArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemImageFindUniqueArgs>(args: SelectSubset<T, ItemImageFindUniqueArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemImageFindUniqueOrThrowArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageFindFirstArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemImageFindFirstArgs>(args?: SelectSubset<T, ItemImageFindFirstArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageFindFirstOrThrowArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemImages
     * const itemImages = await prisma.itemImage.findMany()
     * 
     * // Get first 10 ItemImages
     * const itemImages = await prisma.itemImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemImageWithIdOnly = await prisma.itemImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemImageFindManyArgs>(args?: SelectSubset<T, ItemImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemImage.
     * @param {ItemImageCreateArgs} args - Arguments to create a ItemImage.
     * @example
     * // Create one ItemImage
     * const ItemImage = await prisma.itemImage.create({
     *   data: {
     *     // ... data to create a ItemImage
     *   }
     * })
     * 
     */
    create<T extends ItemImageCreateArgs>(args: SelectSubset<T, ItemImageCreateArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemImages.
     * @param {ItemImageCreateManyArgs} args - Arguments to create many ItemImages.
     * @example
     * // Create many ItemImages
     * const itemImage = await prisma.itemImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemImageCreateManyArgs>(args?: SelectSubset<T, ItemImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemImages and returns the data saved in the database.
     * @param {ItemImageCreateManyAndReturnArgs} args - Arguments to create many ItemImages.
     * @example
     * // Create many ItemImages
     * const itemImage = await prisma.itemImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemImages and only return the `id`
     * const itemImageWithIdOnly = await prisma.itemImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemImage.
     * @param {ItemImageDeleteArgs} args - Arguments to delete one ItemImage.
     * @example
     * // Delete one ItemImage
     * const ItemImage = await prisma.itemImage.delete({
     *   where: {
     *     // ... filter to delete one ItemImage
     *   }
     * })
     * 
     */
    delete<T extends ItemImageDeleteArgs>(args: SelectSubset<T, ItemImageDeleteArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemImage.
     * @param {ItemImageUpdateArgs} args - Arguments to update one ItemImage.
     * @example
     * // Update one ItemImage
     * const itemImage = await prisma.itemImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemImageUpdateArgs>(args: SelectSubset<T, ItemImageUpdateArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemImages.
     * @param {ItemImageDeleteManyArgs} args - Arguments to filter ItemImages to delete.
     * @example
     * // Delete a few ItemImages
     * const { count } = await prisma.itemImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemImageDeleteManyArgs>(args?: SelectSubset<T, ItemImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemImages
     * const itemImage = await prisma.itemImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemImageUpdateManyArgs>(args: SelectSubset<T, ItemImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemImages and returns the data updated in the database.
     * @param {ItemImageUpdateManyAndReturnArgs} args - Arguments to update many ItemImages.
     * @example
     * // Update many ItemImages
     * const itemImage = await prisma.itemImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemImages and only return the `id`
     * const itemImageWithIdOnly = await prisma.itemImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemImage.
     * @param {ItemImageUpsertArgs} args - Arguments to update or create a ItemImage.
     * @example
     * // Update or create a ItemImage
     * const itemImage = await prisma.itemImage.upsert({
     *   create: {
     *     // ... data to create a ItemImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemImage we want to update
     *   }
     * })
     */
    upsert<T extends ItemImageUpsertArgs>(args: SelectSubset<T, ItemImageUpsertArgs<ExtArgs>>): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageCountArgs} args - Arguments to filter ItemImages to count.
     * @example
     * // Count the number of ItemImages
     * const count = await prisma.itemImage.count({
     *   where: {
     *     // ... the filter for the ItemImages we want to count
     *   }
     * })
    **/
    count<T extends ItemImageCountArgs>(
      args?: Subset<T, ItemImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemImageAggregateArgs>(args: Subset<T, ItemImageAggregateArgs>): Prisma.PrismaPromise<GetItemImageAggregateType<T>>

    /**
     * Group by ItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemImageGroupByArgs['orderBy'] }
        : { orderBy?: ItemImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemImage model
   */
  readonly fields: ItemImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemImage model
   */
  interface ItemImageFieldRefs {
    readonly id: FieldRef<"ItemImage", 'String'>
    readonly itemId: FieldRef<"ItemImage", 'String'>
    readonly url: FieldRef<"ItemImage", 'String'>
    readonly position: FieldRef<"ItemImage", 'Int'>
    readonly uploadedAt: FieldRef<"ItemImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemImage findUnique
   */
  export type ItemImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where: ItemImageWhereUniqueInput
  }

  /**
   * ItemImage findUniqueOrThrow
   */
  export type ItemImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where: ItemImageWhereUniqueInput
  }

  /**
   * ItemImage findFirst
   */
  export type ItemImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemImages.
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemImages.
     */
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * ItemImage findFirstOrThrow
   */
  export type ItemImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemImages.
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemImages.
     */
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * ItemImage findMany
   */
  export type ItemImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImages to fetch.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemImages.
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * ItemImage create
   */
  export type ItemImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemImage.
     */
    data: XOR<ItemImageCreateInput, ItemImageUncheckedCreateInput>
  }

  /**
   * ItemImage createMany
   */
  export type ItemImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemImages.
     */
    data: ItemImageCreateManyInput | ItemImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemImage createManyAndReturn
   */
  export type ItemImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * The data used to create many ItemImages.
     */
    data: ItemImageCreateManyInput | ItemImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemImage update
   */
  export type ItemImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemImage.
     */
    data: XOR<ItemImageUpdateInput, ItemImageUncheckedUpdateInput>
    /**
     * Choose, which ItemImage to update.
     */
    where: ItemImageWhereUniqueInput
  }

  /**
   * ItemImage updateMany
   */
  export type ItemImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemImages.
     */
    data: XOR<ItemImageUpdateManyMutationInput, ItemImageUncheckedUpdateManyInput>
    /**
     * Filter which ItemImages to update
     */
    where?: ItemImageWhereInput
    /**
     * Limit how many ItemImages to update.
     */
    limit?: number
  }

  /**
   * ItemImage updateManyAndReturn
   */
  export type ItemImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * The data used to update ItemImages.
     */
    data: XOR<ItemImageUpdateManyMutationInput, ItemImageUncheckedUpdateManyInput>
    /**
     * Filter which ItemImages to update
     */
    where?: ItemImageWhereInput
    /**
     * Limit how many ItemImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemImage upsert
   */
  export type ItemImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemImage to update in case it exists.
     */
    where: ItemImageWhereUniqueInput
    /**
     * In case the ItemImage found by the `where` argument doesn't exist, create a new ItemImage with this data.
     */
    create: XOR<ItemImageCreateInput, ItemImageUncheckedCreateInput>
    /**
     * In case the ItemImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemImageUpdateInput, ItemImageUncheckedUpdateInput>
  }

  /**
   * ItemImage delete
   */
  export type ItemImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter which ItemImage to delete.
     */
    where: ItemImageWhereUniqueInput
  }

  /**
   * ItemImage deleteMany
   */
  export type ItemImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemImages to delete
     */
    where?: ItemImageWhereInput
    /**
     * Limit how many ItemImages to delete.
     */
    limit?: number
  }

  /**
   * ItemImage without action
   */
  export type ItemImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemImage
     */
    omit?: ItemImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemImageInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentGroup
   */

  export type AggregateShipmentGroup = {
    _count: ShipmentGroupCountAggregateOutputType | null
    _avg: ShipmentGroupAvgAggregateOutputType | null
    _sum: ShipmentGroupSumAggregateOutputType | null
    _min: ShipmentGroupMinAggregateOutputType | null
    _max: ShipmentGroupMaxAggregateOutputType | null
  }

  export type ShipmentGroupAvgAggregateOutputType = {
    totalItemCost: number | null
    totalShippingCost: number | null
    averageCost: number | null
  }

  export type ShipmentGroupSumAggregateOutputType = {
    totalItemCost: number | null
    totalShippingCost: number | null
    averageCost: number | null
  }

  export type ShipmentGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    totalItemCost: number | null
    totalShippingCost: number | null
    averageCost: number | null
    createdAt: Date | null
  }

  export type ShipmentGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    totalItemCost: number | null
    totalShippingCost: number | null
    averageCost: number | null
    createdAt: Date | null
  }

  export type ShipmentGroupCountAggregateOutputType = {
    id: number
    name: number
    totalItemCost: number
    totalShippingCost: number
    averageCost: number
    createdAt: number
    _all: number
  }


  export type ShipmentGroupAvgAggregateInputType = {
    totalItemCost?: true
    totalShippingCost?: true
    averageCost?: true
  }

  export type ShipmentGroupSumAggregateInputType = {
    totalItemCost?: true
    totalShippingCost?: true
    averageCost?: true
  }

  export type ShipmentGroupMinAggregateInputType = {
    id?: true
    name?: true
    totalItemCost?: true
    totalShippingCost?: true
    averageCost?: true
    createdAt?: true
  }

  export type ShipmentGroupMaxAggregateInputType = {
    id?: true
    name?: true
    totalItemCost?: true
    totalShippingCost?: true
    averageCost?: true
    createdAt?: true
  }

  export type ShipmentGroupCountAggregateInputType = {
    id?: true
    name?: true
    totalItemCost?: true
    totalShippingCost?: true
    averageCost?: true
    createdAt?: true
    _all?: true
  }

  export type ShipmentGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentGroup to aggregate.
     */
    where?: ShipmentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentGroups to fetch.
     */
    orderBy?: ShipmentGroupOrderByWithRelationInput | ShipmentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentGroups
    **/
    _count?: true | ShipmentGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentGroupMaxAggregateInputType
  }

  export type GetShipmentGroupAggregateType<T extends ShipmentGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentGroup[P]>
      : GetScalarType<T[P], AggregateShipmentGroup[P]>
  }




  export type ShipmentGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentGroupWhereInput
    orderBy?: ShipmentGroupOrderByWithAggregationInput | ShipmentGroupOrderByWithAggregationInput[]
    by: ShipmentGroupScalarFieldEnum[] | ShipmentGroupScalarFieldEnum
    having?: ShipmentGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentGroupCountAggregateInputType | true
    _avg?: ShipmentGroupAvgAggregateInputType
    _sum?: ShipmentGroupSumAggregateInputType
    _min?: ShipmentGroupMinAggregateInputType
    _max?: ShipmentGroupMaxAggregateInputType
  }

  export type ShipmentGroupGroupByOutputType = {
    id: string
    name: string
    totalItemCost: number
    totalShippingCost: number
    averageCost: number
    createdAt: Date
    _count: ShipmentGroupCountAggregateOutputType | null
    _avg: ShipmentGroupAvgAggregateOutputType | null
    _sum: ShipmentGroupSumAggregateOutputType | null
    _min: ShipmentGroupMinAggregateOutputType | null
    _max: ShipmentGroupMaxAggregateOutputType | null
  }

  type GetShipmentGroupGroupByPayload<T extends ShipmentGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalItemCost?: boolean
    totalShippingCost?: boolean
    averageCost?: boolean
    createdAt?: boolean
    items?: boolean | ShipmentGroup$itemsArgs<ExtArgs>
    _count?: boolean | ShipmentGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentGroup"]>

  export type ShipmentGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalItemCost?: boolean
    totalShippingCost?: boolean
    averageCost?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shipmentGroup"]>

  export type ShipmentGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalItemCost?: boolean
    totalShippingCost?: boolean
    averageCost?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shipmentGroup"]>

  export type ShipmentGroupSelectScalar = {
    id?: boolean
    name?: boolean
    totalItemCost?: boolean
    totalShippingCost?: boolean
    averageCost?: boolean
    createdAt?: boolean
  }

  export type ShipmentGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "totalItemCost" | "totalShippingCost" | "averageCost" | "createdAt", ExtArgs["result"]["shipmentGroup"]>
  export type ShipmentGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ShipmentGroup$itemsArgs<ExtArgs>
    _count?: boolean | ShipmentGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShipmentGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShipmentGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentGroup"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      totalItemCost: number
      totalShippingCost: number
      averageCost: number
      createdAt: Date
    }, ExtArgs["result"]["shipmentGroup"]>
    composites: {}
  }

  type ShipmentGroupGetPayload<S extends boolean | null | undefined | ShipmentGroupDefaultArgs> = $Result.GetResult<Prisma.$ShipmentGroupPayload, S>

  type ShipmentGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentGroupCountAggregateInputType | true
    }

  export interface ShipmentGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentGroup'], meta: { name: 'ShipmentGroup' } }
    /**
     * Find zero or one ShipmentGroup that matches the filter.
     * @param {ShipmentGroupFindUniqueArgs} args - Arguments to find a ShipmentGroup
     * @example
     * // Get one ShipmentGroup
     * const shipmentGroup = await prisma.shipmentGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentGroupFindUniqueArgs>(args: SelectSubset<T, ShipmentGroupFindUniqueArgs<ExtArgs>>): Prisma__ShipmentGroupClient<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentGroupFindUniqueOrThrowArgs} args - Arguments to find a ShipmentGroup
     * @example
     * // Get one ShipmentGroup
     * const shipmentGroup = await prisma.shipmentGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentGroupClient<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupFindFirstArgs} args - Arguments to find a ShipmentGroup
     * @example
     * // Get one ShipmentGroup
     * const shipmentGroup = await prisma.shipmentGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentGroupFindFirstArgs>(args?: SelectSubset<T, ShipmentGroupFindFirstArgs<ExtArgs>>): Prisma__ShipmentGroupClient<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupFindFirstOrThrowArgs} args - Arguments to find a ShipmentGroup
     * @example
     * // Get one ShipmentGroup
     * const shipmentGroup = await prisma.shipmentGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentGroupClient<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentGroups
     * const shipmentGroups = await prisma.shipmentGroup.findMany()
     * 
     * // Get first 10 ShipmentGroups
     * const shipmentGroups = await prisma.shipmentGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentGroupWithIdOnly = await prisma.shipmentGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentGroupFindManyArgs>(args?: SelectSubset<T, ShipmentGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentGroup.
     * @param {ShipmentGroupCreateArgs} args - Arguments to create a ShipmentGroup.
     * @example
     * // Create one ShipmentGroup
     * const ShipmentGroup = await prisma.shipmentGroup.create({
     *   data: {
     *     // ... data to create a ShipmentGroup
     *   }
     * })
     * 
     */
    create<T extends ShipmentGroupCreateArgs>(args: SelectSubset<T, ShipmentGroupCreateArgs<ExtArgs>>): Prisma__ShipmentGroupClient<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentGroups.
     * @param {ShipmentGroupCreateManyArgs} args - Arguments to create many ShipmentGroups.
     * @example
     * // Create many ShipmentGroups
     * const shipmentGroup = await prisma.shipmentGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentGroupCreateManyArgs>(args?: SelectSubset<T, ShipmentGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShipmentGroups and returns the data saved in the database.
     * @param {ShipmentGroupCreateManyAndReturnArgs} args - Arguments to create many ShipmentGroups.
     * @example
     * // Create many ShipmentGroups
     * const shipmentGroup = await prisma.shipmentGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShipmentGroups and only return the `id`
     * const shipmentGroupWithIdOnly = await prisma.shipmentGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShipmentGroup.
     * @param {ShipmentGroupDeleteArgs} args - Arguments to delete one ShipmentGroup.
     * @example
     * // Delete one ShipmentGroup
     * const ShipmentGroup = await prisma.shipmentGroup.delete({
     *   where: {
     *     // ... filter to delete one ShipmentGroup
     *   }
     * })
     * 
     */
    delete<T extends ShipmentGroupDeleteArgs>(args: SelectSubset<T, ShipmentGroupDeleteArgs<ExtArgs>>): Prisma__ShipmentGroupClient<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentGroup.
     * @param {ShipmentGroupUpdateArgs} args - Arguments to update one ShipmentGroup.
     * @example
     * // Update one ShipmentGroup
     * const shipmentGroup = await prisma.shipmentGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentGroupUpdateArgs>(args: SelectSubset<T, ShipmentGroupUpdateArgs<ExtArgs>>): Prisma__ShipmentGroupClient<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentGroups.
     * @param {ShipmentGroupDeleteManyArgs} args - Arguments to filter ShipmentGroups to delete.
     * @example
     * // Delete a few ShipmentGroups
     * const { count } = await prisma.shipmentGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentGroupDeleteManyArgs>(args?: SelectSubset<T, ShipmentGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentGroups
     * const shipmentGroup = await prisma.shipmentGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentGroupUpdateManyArgs>(args: SelectSubset<T, ShipmentGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentGroups and returns the data updated in the database.
     * @param {ShipmentGroupUpdateManyAndReturnArgs} args - Arguments to update many ShipmentGroups.
     * @example
     * // Update many ShipmentGroups
     * const shipmentGroup = await prisma.shipmentGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShipmentGroups and only return the `id`
     * const shipmentGroupWithIdOnly = await prisma.shipmentGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShipmentGroup.
     * @param {ShipmentGroupUpsertArgs} args - Arguments to update or create a ShipmentGroup.
     * @example
     * // Update or create a ShipmentGroup
     * const shipmentGroup = await prisma.shipmentGroup.upsert({
     *   create: {
     *     // ... data to create a ShipmentGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentGroup we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentGroupUpsertArgs>(args: SelectSubset<T, ShipmentGroupUpsertArgs<ExtArgs>>): Prisma__ShipmentGroupClient<$Result.GetResult<Prisma.$ShipmentGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupCountArgs} args - Arguments to filter ShipmentGroups to count.
     * @example
     * // Count the number of ShipmentGroups
     * const count = await prisma.shipmentGroup.count({
     *   where: {
     *     // ... the filter for the ShipmentGroups we want to count
     *   }
     * })
    **/
    count<T extends ShipmentGroupCountArgs>(
      args?: Subset<T, ShipmentGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentGroupAggregateArgs>(args: Subset<T, ShipmentGroupAggregateArgs>): Prisma.PrismaPromise<GetShipmentGroupAggregateType<T>>

    /**
     * Group by ShipmentGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentGroup model
   */
  readonly fields: ShipmentGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends ShipmentGroup$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentGroup$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentGroup model
   */
  interface ShipmentGroupFieldRefs {
    readonly id: FieldRef<"ShipmentGroup", 'String'>
    readonly name: FieldRef<"ShipmentGroup", 'String'>
    readonly totalItemCost: FieldRef<"ShipmentGroup", 'Float'>
    readonly totalShippingCost: FieldRef<"ShipmentGroup", 'Float'>
    readonly averageCost: FieldRef<"ShipmentGroup", 'Float'>
    readonly createdAt: FieldRef<"ShipmentGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentGroup findUnique
   */
  export type ShipmentGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentGroup to fetch.
     */
    where: ShipmentGroupWhereUniqueInput
  }

  /**
   * ShipmentGroup findUniqueOrThrow
   */
  export type ShipmentGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentGroup to fetch.
     */
    where: ShipmentGroupWhereUniqueInput
  }

  /**
   * ShipmentGroup findFirst
   */
  export type ShipmentGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentGroup to fetch.
     */
    where?: ShipmentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentGroups to fetch.
     */
    orderBy?: ShipmentGroupOrderByWithRelationInput | ShipmentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentGroups.
     */
    cursor?: ShipmentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentGroups.
     */
    distinct?: ShipmentGroupScalarFieldEnum | ShipmentGroupScalarFieldEnum[]
  }

  /**
   * ShipmentGroup findFirstOrThrow
   */
  export type ShipmentGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentGroup to fetch.
     */
    where?: ShipmentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentGroups to fetch.
     */
    orderBy?: ShipmentGroupOrderByWithRelationInput | ShipmentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentGroups.
     */
    cursor?: ShipmentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentGroups.
     */
    distinct?: ShipmentGroupScalarFieldEnum | ShipmentGroupScalarFieldEnum[]
  }

  /**
   * ShipmentGroup findMany
   */
  export type ShipmentGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentGroups to fetch.
     */
    where?: ShipmentGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentGroups to fetch.
     */
    orderBy?: ShipmentGroupOrderByWithRelationInput | ShipmentGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentGroups.
     */
    cursor?: ShipmentGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentGroups.
     */
    skip?: number
    distinct?: ShipmentGroupScalarFieldEnum | ShipmentGroupScalarFieldEnum[]
  }

  /**
   * ShipmentGroup create
   */
  export type ShipmentGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentGroup.
     */
    data: XOR<ShipmentGroupCreateInput, ShipmentGroupUncheckedCreateInput>
  }

  /**
   * ShipmentGroup createMany
   */
  export type ShipmentGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentGroups.
     */
    data: ShipmentGroupCreateManyInput | ShipmentGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentGroup createManyAndReturn
   */
  export type ShipmentGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * The data used to create many ShipmentGroups.
     */
    data: ShipmentGroupCreateManyInput | ShipmentGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentGroup update
   */
  export type ShipmentGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentGroup.
     */
    data: XOR<ShipmentGroupUpdateInput, ShipmentGroupUncheckedUpdateInput>
    /**
     * Choose, which ShipmentGroup to update.
     */
    where: ShipmentGroupWhereUniqueInput
  }

  /**
   * ShipmentGroup updateMany
   */
  export type ShipmentGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentGroups.
     */
    data: XOR<ShipmentGroupUpdateManyMutationInput, ShipmentGroupUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentGroups to update
     */
    where?: ShipmentGroupWhereInput
    /**
     * Limit how many ShipmentGroups to update.
     */
    limit?: number
  }

  /**
   * ShipmentGroup updateManyAndReturn
   */
  export type ShipmentGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * The data used to update ShipmentGroups.
     */
    data: XOR<ShipmentGroupUpdateManyMutationInput, ShipmentGroupUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentGroups to update
     */
    where?: ShipmentGroupWhereInput
    /**
     * Limit how many ShipmentGroups to update.
     */
    limit?: number
  }

  /**
   * ShipmentGroup upsert
   */
  export type ShipmentGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentGroup to update in case it exists.
     */
    where: ShipmentGroupWhereUniqueInput
    /**
     * In case the ShipmentGroup found by the `where` argument doesn't exist, create a new ShipmentGroup with this data.
     */
    create: XOR<ShipmentGroupCreateInput, ShipmentGroupUncheckedCreateInput>
    /**
     * In case the ShipmentGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentGroupUpdateInput, ShipmentGroupUncheckedUpdateInput>
  }

  /**
   * ShipmentGroup delete
   */
  export type ShipmentGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
    /**
     * Filter which ShipmentGroup to delete.
     */
    where: ShipmentGroupWhereUniqueInput
  }

  /**
   * ShipmentGroup deleteMany
   */
  export type ShipmentGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentGroups to delete
     */
    where?: ShipmentGroupWhereInput
    /**
     * Limit how many ShipmentGroups to delete.
     */
    limit?: number
  }

  /**
   * ShipmentGroup.items
   */
  export type ShipmentGroup$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * ShipmentGroup without action
   */
  export type ShipmentGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentGroup
     */
    select?: ShipmentGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentGroup
     */
    omit?: ShipmentGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentGroupInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentBatch
   */

  export type AggregateShipmentBatch = {
    _count: ShipmentBatchCountAggregateOutputType | null
    _min: ShipmentBatchMinAggregateOutputType | null
    _max: ShipmentBatchMaxAggregateOutputType | null
  }

  export type ShipmentBatchMinAggregateOutputType = {
    id: string | null
    name: string | null
    destination: string | null
    status: $Enums.BatchStatus | null
    trackingNumber: string | null
    shippedAt: Date | null
    createdAt: Date | null
  }

  export type ShipmentBatchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    destination: string | null
    status: $Enums.BatchStatus | null
    trackingNumber: string | null
    shippedAt: Date | null
    createdAt: Date | null
  }

  export type ShipmentBatchCountAggregateOutputType = {
    id: number
    name: number
    destination: number
    status: number
    trackingNumber: number
    shippedAt: number
    createdAt: number
    _all: number
  }


  export type ShipmentBatchMinAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    status?: true
    trackingNumber?: true
    shippedAt?: true
    createdAt?: true
  }

  export type ShipmentBatchMaxAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    status?: true
    trackingNumber?: true
    shippedAt?: true
    createdAt?: true
  }

  export type ShipmentBatchCountAggregateInputType = {
    id?: true
    name?: true
    destination?: true
    status?: true
    trackingNumber?: true
    shippedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ShipmentBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentBatch to aggregate.
     */
    where?: ShipmentBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentBatches to fetch.
     */
    orderBy?: ShipmentBatchOrderByWithRelationInput | ShipmentBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentBatches
    **/
    _count?: true | ShipmentBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentBatchMaxAggregateInputType
  }

  export type GetShipmentBatchAggregateType<T extends ShipmentBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentBatch[P]>
      : GetScalarType<T[P], AggregateShipmentBatch[P]>
  }




  export type ShipmentBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentBatchWhereInput
    orderBy?: ShipmentBatchOrderByWithAggregationInput | ShipmentBatchOrderByWithAggregationInput[]
    by: ShipmentBatchScalarFieldEnum[] | ShipmentBatchScalarFieldEnum
    having?: ShipmentBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentBatchCountAggregateInputType | true
    _min?: ShipmentBatchMinAggregateInputType
    _max?: ShipmentBatchMaxAggregateInputType
  }

  export type ShipmentBatchGroupByOutputType = {
    id: string
    name: string
    destination: string
    status: $Enums.BatchStatus
    trackingNumber: string | null
    shippedAt: Date | null
    createdAt: Date
    _count: ShipmentBatchCountAggregateOutputType | null
    _min: ShipmentBatchMinAggregateOutputType | null
    _max: ShipmentBatchMaxAggregateOutputType | null
  }

  type GetShipmentBatchGroupByPayload<T extends ShipmentBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentBatchGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentBatchGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    status?: boolean
    trackingNumber?: boolean
    shippedAt?: boolean
    createdAt?: boolean
    items?: boolean | ShipmentBatch$itemsArgs<ExtArgs>
    _count?: boolean | ShipmentBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentBatch"]>

  export type ShipmentBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    status?: boolean
    trackingNumber?: boolean
    shippedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shipmentBatch"]>

  export type ShipmentBatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    destination?: boolean
    status?: boolean
    trackingNumber?: boolean
    shippedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shipmentBatch"]>

  export type ShipmentBatchSelectScalar = {
    id?: boolean
    name?: boolean
    destination?: boolean
    status?: boolean
    trackingNumber?: boolean
    shippedAt?: boolean
    createdAt?: boolean
  }

  export type ShipmentBatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "destination" | "status" | "trackingNumber" | "shippedAt" | "createdAt", ExtArgs["result"]["shipmentBatch"]>
  export type ShipmentBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ShipmentBatch$itemsArgs<ExtArgs>
    _count?: boolean | ShipmentBatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShipmentBatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShipmentBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentBatch"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      destination: string
      status: $Enums.BatchStatus
      trackingNumber: string | null
      shippedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["shipmentBatch"]>
    composites: {}
  }

  type ShipmentBatchGetPayload<S extends boolean | null | undefined | ShipmentBatchDefaultArgs> = $Result.GetResult<Prisma.$ShipmentBatchPayload, S>

  type ShipmentBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentBatchCountAggregateInputType | true
    }

  export interface ShipmentBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentBatch'], meta: { name: 'ShipmentBatch' } }
    /**
     * Find zero or one ShipmentBatch that matches the filter.
     * @param {ShipmentBatchFindUniqueArgs} args - Arguments to find a ShipmentBatch
     * @example
     * // Get one ShipmentBatch
     * const shipmentBatch = await prisma.shipmentBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentBatchFindUniqueArgs>(args: SelectSubset<T, ShipmentBatchFindUniqueArgs<ExtArgs>>): Prisma__ShipmentBatchClient<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentBatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentBatchFindUniqueOrThrowArgs} args - Arguments to find a ShipmentBatch
     * @example
     * // Get one ShipmentBatch
     * const shipmentBatch = await prisma.shipmentBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentBatchClient<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentBatchFindFirstArgs} args - Arguments to find a ShipmentBatch
     * @example
     * // Get one ShipmentBatch
     * const shipmentBatch = await prisma.shipmentBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentBatchFindFirstArgs>(args?: SelectSubset<T, ShipmentBatchFindFirstArgs<ExtArgs>>): Prisma__ShipmentBatchClient<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentBatchFindFirstOrThrowArgs} args - Arguments to find a ShipmentBatch
     * @example
     * // Get one ShipmentBatch
     * const shipmentBatch = await prisma.shipmentBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentBatchClient<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentBatches
     * const shipmentBatches = await prisma.shipmentBatch.findMany()
     * 
     * // Get first 10 ShipmentBatches
     * const shipmentBatches = await prisma.shipmentBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentBatchWithIdOnly = await prisma.shipmentBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentBatchFindManyArgs>(args?: SelectSubset<T, ShipmentBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentBatch.
     * @param {ShipmentBatchCreateArgs} args - Arguments to create a ShipmentBatch.
     * @example
     * // Create one ShipmentBatch
     * const ShipmentBatch = await prisma.shipmentBatch.create({
     *   data: {
     *     // ... data to create a ShipmentBatch
     *   }
     * })
     * 
     */
    create<T extends ShipmentBatchCreateArgs>(args: SelectSubset<T, ShipmentBatchCreateArgs<ExtArgs>>): Prisma__ShipmentBatchClient<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentBatches.
     * @param {ShipmentBatchCreateManyArgs} args - Arguments to create many ShipmentBatches.
     * @example
     * // Create many ShipmentBatches
     * const shipmentBatch = await prisma.shipmentBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentBatchCreateManyArgs>(args?: SelectSubset<T, ShipmentBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShipmentBatches and returns the data saved in the database.
     * @param {ShipmentBatchCreateManyAndReturnArgs} args - Arguments to create many ShipmentBatches.
     * @example
     * // Create many ShipmentBatches
     * const shipmentBatch = await prisma.shipmentBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShipmentBatches and only return the `id`
     * const shipmentBatchWithIdOnly = await prisma.shipmentBatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShipmentBatch.
     * @param {ShipmentBatchDeleteArgs} args - Arguments to delete one ShipmentBatch.
     * @example
     * // Delete one ShipmentBatch
     * const ShipmentBatch = await prisma.shipmentBatch.delete({
     *   where: {
     *     // ... filter to delete one ShipmentBatch
     *   }
     * })
     * 
     */
    delete<T extends ShipmentBatchDeleteArgs>(args: SelectSubset<T, ShipmentBatchDeleteArgs<ExtArgs>>): Prisma__ShipmentBatchClient<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentBatch.
     * @param {ShipmentBatchUpdateArgs} args - Arguments to update one ShipmentBatch.
     * @example
     * // Update one ShipmentBatch
     * const shipmentBatch = await prisma.shipmentBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentBatchUpdateArgs>(args: SelectSubset<T, ShipmentBatchUpdateArgs<ExtArgs>>): Prisma__ShipmentBatchClient<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentBatches.
     * @param {ShipmentBatchDeleteManyArgs} args - Arguments to filter ShipmentBatches to delete.
     * @example
     * // Delete a few ShipmentBatches
     * const { count } = await prisma.shipmentBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentBatchDeleteManyArgs>(args?: SelectSubset<T, ShipmentBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentBatches
     * const shipmentBatch = await prisma.shipmentBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentBatchUpdateManyArgs>(args: SelectSubset<T, ShipmentBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentBatches and returns the data updated in the database.
     * @param {ShipmentBatchUpdateManyAndReturnArgs} args - Arguments to update many ShipmentBatches.
     * @example
     * // Update many ShipmentBatches
     * const shipmentBatch = await prisma.shipmentBatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShipmentBatches and only return the `id`
     * const shipmentBatchWithIdOnly = await prisma.shipmentBatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentBatchUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShipmentBatch.
     * @param {ShipmentBatchUpsertArgs} args - Arguments to update or create a ShipmentBatch.
     * @example
     * // Update or create a ShipmentBatch
     * const shipmentBatch = await prisma.shipmentBatch.upsert({
     *   create: {
     *     // ... data to create a ShipmentBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentBatch we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentBatchUpsertArgs>(args: SelectSubset<T, ShipmentBatchUpsertArgs<ExtArgs>>): Prisma__ShipmentBatchClient<$Result.GetResult<Prisma.$ShipmentBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentBatchCountArgs} args - Arguments to filter ShipmentBatches to count.
     * @example
     * // Count the number of ShipmentBatches
     * const count = await prisma.shipmentBatch.count({
     *   where: {
     *     // ... the filter for the ShipmentBatches we want to count
     *   }
     * })
    **/
    count<T extends ShipmentBatchCountArgs>(
      args?: Subset<T, ShipmentBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentBatchAggregateArgs>(args: Subset<T, ShipmentBatchAggregateArgs>): Prisma.PrismaPromise<GetShipmentBatchAggregateType<T>>

    /**
     * Group by ShipmentBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentBatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentBatchGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentBatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentBatch model
   */
  readonly fields: ShipmentBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends ShipmentBatch$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentBatch$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentBatch model
   */
  interface ShipmentBatchFieldRefs {
    readonly id: FieldRef<"ShipmentBatch", 'String'>
    readonly name: FieldRef<"ShipmentBatch", 'String'>
    readonly destination: FieldRef<"ShipmentBatch", 'String'>
    readonly status: FieldRef<"ShipmentBatch", 'BatchStatus'>
    readonly trackingNumber: FieldRef<"ShipmentBatch", 'String'>
    readonly shippedAt: FieldRef<"ShipmentBatch", 'DateTime'>
    readonly createdAt: FieldRef<"ShipmentBatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentBatch findUnique
   */
  export type ShipmentBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentBatch to fetch.
     */
    where: ShipmentBatchWhereUniqueInput
  }

  /**
   * ShipmentBatch findUniqueOrThrow
   */
  export type ShipmentBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentBatch to fetch.
     */
    where: ShipmentBatchWhereUniqueInput
  }

  /**
   * ShipmentBatch findFirst
   */
  export type ShipmentBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentBatch to fetch.
     */
    where?: ShipmentBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentBatches to fetch.
     */
    orderBy?: ShipmentBatchOrderByWithRelationInput | ShipmentBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentBatches.
     */
    cursor?: ShipmentBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentBatches.
     */
    distinct?: ShipmentBatchScalarFieldEnum | ShipmentBatchScalarFieldEnum[]
  }

  /**
   * ShipmentBatch findFirstOrThrow
   */
  export type ShipmentBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentBatch to fetch.
     */
    where?: ShipmentBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentBatches to fetch.
     */
    orderBy?: ShipmentBatchOrderByWithRelationInput | ShipmentBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentBatches.
     */
    cursor?: ShipmentBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentBatches.
     */
    distinct?: ShipmentBatchScalarFieldEnum | ShipmentBatchScalarFieldEnum[]
  }

  /**
   * ShipmentBatch findMany
   */
  export type ShipmentBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentBatches to fetch.
     */
    where?: ShipmentBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentBatches to fetch.
     */
    orderBy?: ShipmentBatchOrderByWithRelationInput | ShipmentBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentBatches.
     */
    cursor?: ShipmentBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentBatches.
     */
    skip?: number
    distinct?: ShipmentBatchScalarFieldEnum | ShipmentBatchScalarFieldEnum[]
  }

  /**
   * ShipmentBatch create
   */
  export type ShipmentBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentBatch.
     */
    data: XOR<ShipmentBatchCreateInput, ShipmentBatchUncheckedCreateInput>
  }

  /**
   * ShipmentBatch createMany
   */
  export type ShipmentBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentBatches.
     */
    data: ShipmentBatchCreateManyInput | ShipmentBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentBatch createManyAndReturn
   */
  export type ShipmentBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * The data used to create many ShipmentBatches.
     */
    data: ShipmentBatchCreateManyInput | ShipmentBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentBatch update
   */
  export type ShipmentBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentBatch.
     */
    data: XOR<ShipmentBatchUpdateInput, ShipmentBatchUncheckedUpdateInput>
    /**
     * Choose, which ShipmentBatch to update.
     */
    where: ShipmentBatchWhereUniqueInput
  }

  /**
   * ShipmentBatch updateMany
   */
  export type ShipmentBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentBatches.
     */
    data: XOR<ShipmentBatchUpdateManyMutationInput, ShipmentBatchUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentBatches to update
     */
    where?: ShipmentBatchWhereInput
    /**
     * Limit how many ShipmentBatches to update.
     */
    limit?: number
  }

  /**
   * ShipmentBatch updateManyAndReturn
   */
  export type ShipmentBatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * The data used to update ShipmentBatches.
     */
    data: XOR<ShipmentBatchUpdateManyMutationInput, ShipmentBatchUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentBatches to update
     */
    where?: ShipmentBatchWhereInput
    /**
     * Limit how many ShipmentBatches to update.
     */
    limit?: number
  }

  /**
   * ShipmentBatch upsert
   */
  export type ShipmentBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentBatch to update in case it exists.
     */
    where: ShipmentBatchWhereUniqueInput
    /**
     * In case the ShipmentBatch found by the `where` argument doesn't exist, create a new ShipmentBatch with this data.
     */
    create: XOR<ShipmentBatchCreateInput, ShipmentBatchUncheckedCreateInput>
    /**
     * In case the ShipmentBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentBatchUpdateInput, ShipmentBatchUncheckedUpdateInput>
  }

  /**
   * ShipmentBatch delete
   */
  export type ShipmentBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
    /**
     * Filter which ShipmentBatch to delete.
     */
    where: ShipmentBatchWhereUniqueInput
  }

  /**
   * ShipmentBatch deleteMany
   */
  export type ShipmentBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentBatches to delete
     */
    where?: ShipmentBatchWhereInput
    /**
     * Limit how many ShipmentBatches to delete.
     */
    limit?: number
  }

  /**
   * ShipmentBatch.items
   */
  export type ShipmentBatch$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * ShipmentBatch without action
   */
  export type ShipmentBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentBatch
     */
    select?: ShipmentBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentBatch
     */
    omit?: ShipmentBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentBatchInclude<ExtArgs> | null
  }


  /**
   * Model Drop
   */

  export type AggregateDrop = {
    _count: DropCountAggregateOutputType | null
    _min: DropMinAggregateOutputType | null
    _max: DropMaxAggregateOutputType | null
  }

  export type DropMinAggregateOutputType = {
    id: string | null
    name: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
  }

  export type DropMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
  }

  export type DropCountAggregateOutputType = {
    id: number
    name: number
    startedAt: number
    endedAt: number
    createdAt: number
    _all: number
  }


  export type DropMinAggregateInputType = {
    id?: true
    name?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
  }

  export type DropMaxAggregateInputType = {
    id?: true
    name?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
  }

  export type DropCountAggregateInputType = {
    id?: true
    name?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    _all?: true
  }

  export type DropAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drop to aggregate.
     */
    where?: DropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drops to fetch.
     */
    orderBy?: DropOrderByWithRelationInput | DropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drops
    **/
    _count?: true | DropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DropMaxAggregateInputType
  }

  export type GetDropAggregateType<T extends DropAggregateArgs> = {
        [P in keyof T & keyof AggregateDrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrop[P]>
      : GetScalarType<T[P], AggregateDrop[P]>
  }




  export type DropGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DropWhereInput
    orderBy?: DropOrderByWithAggregationInput | DropOrderByWithAggregationInput[]
    by: DropScalarFieldEnum[] | DropScalarFieldEnum
    having?: DropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DropCountAggregateInputType | true
    _min?: DropMinAggregateInputType
    _max?: DropMaxAggregateInputType
  }

  export type DropGroupByOutputType = {
    id: string
    name: string
    startedAt: Date
    endedAt: Date
    createdAt: Date
    _count: DropCountAggregateOutputType | null
    _min: DropMinAggregateOutputType | null
    _max: DropMaxAggregateOutputType | null
  }

  type GetDropGroupByPayload<T extends DropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DropGroupByOutputType[P]>
            : GetScalarType<T[P], DropGroupByOutputType[P]>
        }
      >
    >


  export type DropSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    items?: boolean | Drop$itemsArgs<ExtArgs>
    collaborators?: boolean | Drop$collaboratorsArgs<ExtArgs>
    _count?: boolean | DropCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drop"]>

  export type DropSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["drop"]>

  export type DropSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["drop"]>

  export type DropSelectScalar = {
    id?: boolean
    name?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
  }

  export type DropOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startedAt" | "endedAt" | "createdAt", ExtArgs["result"]["drop"]>
  export type DropInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Drop$itemsArgs<ExtArgs>
    collaborators?: boolean | Drop$collaboratorsArgs<ExtArgs>
    _count?: boolean | DropCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DropIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DropIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DropPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drop"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
      collaborators: Prisma.$CollaboratorAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startedAt: Date
      endedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["drop"]>
    composites: {}
  }

  type DropGetPayload<S extends boolean | null | undefined | DropDefaultArgs> = $Result.GetResult<Prisma.$DropPayload, S>

  type DropCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DropFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DropCountAggregateInputType | true
    }

  export interface DropDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drop'], meta: { name: 'Drop' } }
    /**
     * Find zero or one Drop that matches the filter.
     * @param {DropFindUniqueArgs} args - Arguments to find a Drop
     * @example
     * // Get one Drop
     * const drop = await prisma.drop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DropFindUniqueArgs>(args: SelectSubset<T, DropFindUniqueArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DropFindUniqueOrThrowArgs} args - Arguments to find a Drop
     * @example
     * // Get one Drop
     * const drop = await prisma.drop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DropFindUniqueOrThrowArgs>(args: SelectSubset<T, DropFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DropFindFirstArgs} args - Arguments to find a Drop
     * @example
     * // Get one Drop
     * const drop = await prisma.drop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DropFindFirstArgs>(args?: SelectSubset<T, DropFindFirstArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DropFindFirstOrThrowArgs} args - Arguments to find a Drop
     * @example
     * // Get one Drop
     * const drop = await prisma.drop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DropFindFirstOrThrowArgs>(args?: SelectSubset<T, DropFindFirstOrThrowArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drops
     * const drops = await prisma.drop.findMany()
     * 
     * // Get first 10 Drops
     * const drops = await prisma.drop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dropWithIdOnly = await prisma.drop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DropFindManyArgs>(args?: SelectSubset<T, DropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drop.
     * @param {DropCreateArgs} args - Arguments to create a Drop.
     * @example
     * // Create one Drop
     * const Drop = await prisma.drop.create({
     *   data: {
     *     // ... data to create a Drop
     *   }
     * })
     * 
     */
    create<T extends DropCreateArgs>(args: SelectSubset<T, DropCreateArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drops.
     * @param {DropCreateManyArgs} args - Arguments to create many Drops.
     * @example
     * // Create many Drops
     * const drop = await prisma.drop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DropCreateManyArgs>(args?: SelectSubset<T, DropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drops and returns the data saved in the database.
     * @param {DropCreateManyAndReturnArgs} args - Arguments to create many Drops.
     * @example
     * // Create many Drops
     * const drop = await prisma.drop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drops and only return the `id`
     * const dropWithIdOnly = await prisma.drop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DropCreateManyAndReturnArgs>(args?: SelectSubset<T, DropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drop.
     * @param {DropDeleteArgs} args - Arguments to delete one Drop.
     * @example
     * // Delete one Drop
     * const Drop = await prisma.drop.delete({
     *   where: {
     *     // ... filter to delete one Drop
     *   }
     * })
     * 
     */
    delete<T extends DropDeleteArgs>(args: SelectSubset<T, DropDeleteArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drop.
     * @param {DropUpdateArgs} args - Arguments to update one Drop.
     * @example
     * // Update one Drop
     * const drop = await prisma.drop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DropUpdateArgs>(args: SelectSubset<T, DropUpdateArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drops.
     * @param {DropDeleteManyArgs} args - Arguments to filter Drops to delete.
     * @example
     * // Delete a few Drops
     * const { count } = await prisma.drop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DropDeleteManyArgs>(args?: SelectSubset<T, DropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drops
     * const drop = await prisma.drop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DropUpdateManyArgs>(args: SelectSubset<T, DropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drops and returns the data updated in the database.
     * @param {DropUpdateManyAndReturnArgs} args - Arguments to update many Drops.
     * @example
     * // Update many Drops
     * const drop = await prisma.drop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drops and only return the `id`
     * const dropWithIdOnly = await prisma.drop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DropUpdateManyAndReturnArgs>(args: SelectSubset<T, DropUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drop.
     * @param {DropUpsertArgs} args - Arguments to update or create a Drop.
     * @example
     * // Update or create a Drop
     * const drop = await prisma.drop.upsert({
     *   create: {
     *     // ... data to create a Drop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drop we want to update
     *   }
     * })
     */
    upsert<T extends DropUpsertArgs>(args: SelectSubset<T, DropUpsertArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DropCountArgs} args - Arguments to filter Drops to count.
     * @example
     * // Count the number of Drops
     * const count = await prisma.drop.count({
     *   where: {
     *     // ... the filter for the Drops we want to count
     *   }
     * })
    **/
    count<T extends DropCountArgs>(
      args?: Subset<T, DropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DropAggregateArgs>(args: Subset<T, DropAggregateArgs>): Prisma.PrismaPromise<GetDropAggregateType<T>>

    /**
     * Group by Drop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DropGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DropGroupByArgs['orderBy'] }
        : { orderBy?: DropGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drop model
   */
  readonly fields: DropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DropClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Drop$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Drop$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborators<T extends Drop$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Drop$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Drop model
   */
  interface DropFieldRefs {
    readonly id: FieldRef<"Drop", 'String'>
    readonly name: FieldRef<"Drop", 'String'>
    readonly startedAt: FieldRef<"Drop", 'DateTime'>
    readonly endedAt: FieldRef<"Drop", 'DateTime'>
    readonly createdAt: FieldRef<"Drop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Drop findUnique
   */
  export type DropFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    /**
     * Filter, which Drop to fetch.
     */
    where: DropWhereUniqueInput
  }

  /**
   * Drop findUniqueOrThrow
   */
  export type DropFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    /**
     * Filter, which Drop to fetch.
     */
    where: DropWhereUniqueInput
  }

  /**
   * Drop findFirst
   */
  export type DropFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    /**
     * Filter, which Drop to fetch.
     */
    where?: DropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drops to fetch.
     */
    orderBy?: DropOrderByWithRelationInput | DropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drops.
     */
    cursor?: DropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drops.
     */
    distinct?: DropScalarFieldEnum | DropScalarFieldEnum[]
  }

  /**
   * Drop findFirstOrThrow
   */
  export type DropFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    /**
     * Filter, which Drop to fetch.
     */
    where?: DropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drops to fetch.
     */
    orderBy?: DropOrderByWithRelationInput | DropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drops.
     */
    cursor?: DropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drops.
     */
    distinct?: DropScalarFieldEnum | DropScalarFieldEnum[]
  }

  /**
   * Drop findMany
   */
  export type DropFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    /**
     * Filter, which Drops to fetch.
     */
    where?: DropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drops to fetch.
     */
    orderBy?: DropOrderByWithRelationInput | DropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drops.
     */
    cursor?: DropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drops.
     */
    skip?: number
    distinct?: DropScalarFieldEnum | DropScalarFieldEnum[]
  }

  /**
   * Drop create
   */
  export type DropCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    /**
     * The data needed to create a Drop.
     */
    data: XOR<DropCreateInput, DropUncheckedCreateInput>
  }

  /**
   * Drop createMany
   */
  export type DropCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drops.
     */
    data: DropCreateManyInput | DropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drop createManyAndReturn
   */
  export type DropCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * The data used to create many Drops.
     */
    data: DropCreateManyInput | DropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drop update
   */
  export type DropUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    /**
     * The data needed to update a Drop.
     */
    data: XOR<DropUpdateInput, DropUncheckedUpdateInput>
    /**
     * Choose, which Drop to update.
     */
    where: DropWhereUniqueInput
  }

  /**
   * Drop updateMany
   */
  export type DropUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drops.
     */
    data: XOR<DropUpdateManyMutationInput, DropUncheckedUpdateManyInput>
    /**
     * Filter which Drops to update
     */
    where?: DropWhereInput
    /**
     * Limit how many Drops to update.
     */
    limit?: number
  }

  /**
   * Drop updateManyAndReturn
   */
  export type DropUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * The data used to update Drops.
     */
    data: XOR<DropUpdateManyMutationInput, DropUncheckedUpdateManyInput>
    /**
     * Filter which Drops to update
     */
    where?: DropWhereInput
    /**
     * Limit how many Drops to update.
     */
    limit?: number
  }

  /**
   * Drop upsert
   */
  export type DropUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    /**
     * The filter to search for the Drop to update in case it exists.
     */
    where: DropWhereUniqueInput
    /**
     * In case the Drop found by the `where` argument doesn't exist, create a new Drop with this data.
     */
    create: XOR<DropCreateInput, DropUncheckedCreateInput>
    /**
     * In case the Drop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DropUpdateInput, DropUncheckedUpdateInput>
  }

  /**
   * Drop delete
   */
  export type DropDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    /**
     * Filter which Drop to delete.
     */
    where: DropWhereUniqueInput
  }

  /**
   * Drop deleteMany
   */
  export type DropDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drops to delete
     */
    where?: DropWhereInput
    /**
     * Limit how many Drops to delete.
     */
    limit?: number
  }

  /**
   * Drop.items
   */
  export type Drop$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Drop.collaborators
   */
  export type Drop$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    where?: CollaboratorAssignmentWhereInput
    orderBy?: CollaboratorAssignmentOrderByWithRelationInput | CollaboratorAssignmentOrderByWithRelationInput[]
    cursor?: CollaboratorAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaboratorAssignmentScalarFieldEnum | CollaboratorAssignmentScalarFieldEnum[]
  }

  /**
   * Drop without action
   */
  export type DropDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
  }


  /**
   * Model CollaboratorAssignment
   */

  export type AggregateCollaboratorAssignment = {
    _count: CollaboratorAssignmentCountAggregateOutputType | null
    _avg: CollaboratorAssignmentAvgAggregateOutputType | null
    _sum: CollaboratorAssignmentSumAggregateOutputType | null
    _min: CollaboratorAssignmentMinAggregateOutputType | null
    _max: CollaboratorAssignmentMaxAggregateOutputType | null
  }

  export type CollaboratorAssignmentAvgAggregateOutputType = {
    value: number | null
  }

  export type CollaboratorAssignmentSumAggregateOutputType = {
    value: number | null
  }

  export type CollaboratorAssignmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dropId: string | null
    itemId: string | null
    type: $Enums.CommissionType | null
    value: number | null
  }

  export type CollaboratorAssignmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dropId: string | null
    itemId: string | null
    type: $Enums.CommissionType | null
    value: number | null
  }

  export type CollaboratorAssignmentCountAggregateOutputType = {
    id: number
    userId: number
    dropId: number
    itemId: number
    type: number
    value: number
    _all: number
  }


  export type CollaboratorAssignmentAvgAggregateInputType = {
    value?: true
  }

  export type CollaboratorAssignmentSumAggregateInputType = {
    value?: true
  }

  export type CollaboratorAssignmentMinAggregateInputType = {
    id?: true
    userId?: true
    dropId?: true
    itemId?: true
    type?: true
    value?: true
  }

  export type CollaboratorAssignmentMaxAggregateInputType = {
    id?: true
    userId?: true
    dropId?: true
    itemId?: true
    type?: true
    value?: true
  }

  export type CollaboratorAssignmentCountAggregateInputType = {
    id?: true
    userId?: true
    dropId?: true
    itemId?: true
    type?: true
    value?: true
    _all?: true
  }

  export type CollaboratorAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollaboratorAssignment to aggregate.
     */
    where?: CollaboratorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollaboratorAssignments to fetch.
     */
    orderBy?: CollaboratorAssignmentOrderByWithRelationInput | CollaboratorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaboratorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollaboratorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollaboratorAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollaboratorAssignments
    **/
    _count?: true | CollaboratorAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollaboratorAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollaboratorAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaboratorAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaboratorAssignmentMaxAggregateInputType
  }

  export type GetCollaboratorAssignmentAggregateType<T extends CollaboratorAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaboratorAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaboratorAssignment[P]>
      : GetScalarType<T[P], AggregateCollaboratorAssignment[P]>
  }




  export type CollaboratorAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorAssignmentWhereInput
    orderBy?: CollaboratorAssignmentOrderByWithAggregationInput | CollaboratorAssignmentOrderByWithAggregationInput[]
    by: CollaboratorAssignmentScalarFieldEnum[] | CollaboratorAssignmentScalarFieldEnum
    having?: CollaboratorAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaboratorAssignmentCountAggregateInputType | true
    _avg?: CollaboratorAssignmentAvgAggregateInputType
    _sum?: CollaboratorAssignmentSumAggregateInputType
    _min?: CollaboratorAssignmentMinAggregateInputType
    _max?: CollaboratorAssignmentMaxAggregateInputType
  }

  export type CollaboratorAssignmentGroupByOutputType = {
    id: string
    userId: string
    dropId: string | null
    itemId: string | null
    type: $Enums.CommissionType
    value: number
    _count: CollaboratorAssignmentCountAggregateOutputType | null
    _avg: CollaboratorAssignmentAvgAggregateOutputType | null
    _sum: CollaboratorAssignmentSumAggregateOutputType | null
    _min: CollaboratorAssignmentMinAggregateOutputType | null
    _max: CollaboratorAssignmentMaxAggregateOutputType | null
  }

  type GetCollaboratorAssignmentGroupByPayload<T extends CollaboratorAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaboratorAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaboratorAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaboratorAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], CollaboratorAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type CollaboratorAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dropId?: boolean
    itemId?: boolean
    type?: boolean
    value?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    drop?: boolean | CollaboratorAssignment$dropArgs<ExtArgs>
    item?: boolean | CollaboratorAssignment$itemArgs<ExtArgs>
  }, ExtArgs["result"]["collaboratorAssignment"]>

  export type CollaboratorAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dropId?: boolean
    itemId?: boolean
    type?: boolean
    value?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    drop?: boolean | CollaboratorAssignment$dropArgs<ExtArgs>
    item?: boolean | CollaboratorAssignment$itemArgs<ExtArgs>
  }, ExtArgs["result"]["collaboratorAssignment"]>

  export type CollaboratorAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dropId?: boolean
    itemId?: boolean
    type?: boolean
    value?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    drop?: boolean | CollaboratorAssignment$dropArgs<ExtArgs>
    item?: boolean | CollaboratorAssignment$itemArgs<ExtArgs>
  }, ExtArgs["result"]["collaboratorAssignment"]>

  export type CollaboratorAssignmentSelectScalar = {
    id?: boolean
    userId?: boolean
    dropId?: boolean
    itemId?: boolean
    type?: boolean
    value?: boolean
  }

  export type CollaboratorAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dropId" | "itemId" | "type" | "value", ExtArgs["result"]["collaboratorAssignment"]>
  export type CollaboratorAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    drop?: boolean | CollaboratorAssignment$dropArgs<ExtArgs>
    item?: boolean | CollaboratorAssignment$itemArgs<ExtArgs>
  }
  export type CollaboratorAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    drop?: boolean | CollaboratorAssignment$dropArgs<ExtArgs>
    item?: boolean | CollaboratorAssignment$itemArgs<ExtArgs>
  }
  export type CollaboratorAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    drop?: boolean | CollaboratorAssignment$dropArgs<ExtArgs>
    item?: boolean | CollaboratorAssignment$itemArgs<ExtArgs>
  }

  export type $CollaboratorAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollaboratorAssignment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      drop: Prisma.$DropPayload<ExtArgs> | null
      item: Prisma.$ItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dropId: string | null
      itemId: string | null
      type: $Enums.CommissionType
      value: number
    }, ExtArgs["result"]["collaboratorAssignment"]>
    composites: {}
  }

  type CollaboratorAssignmentGetPayload<S extends boolean | null | undefined | CollaboratorAssignmentDefaultArgs> = $Result.GetResult<Prisma.$CollaboratorAssignmentPayload, S>

  type CollaboratorAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollaboratorAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollaboratorAssignmentCountAggregateInputType | true
    }

  export interface CollaboratorAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollaboratorAssignment'], meta: { name: 'CollaboratorAssignment' } }
    /**
     * Find zero or one CollaboratorAssignment that matches the filter.
     * @param {CollaboratorAssignmentFindUniqueArgs} args - Arguments to find a CollaboratorAssignment
     * @example
     * // Get one CollaboratorAssignment
     * const collaboratorAssignment = await prisma.collaboratorAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollaboratorAssignmentFindUniqueArgs>(args: SelectSubset<T, CollaboratorAssignmentFindUniqueArgs<ExtArgs>>): Prisma__CollaboratorAssignmentClient<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollaboratorAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollaboratorAssignmentFindUniqueOrThrowArgs} args - Arguments to find a CollaboratorAssignment
     * @example
     * // Get one CollaboratorAssignment
     * const collaboratorAssignment = await prisma.collaboratorAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollaboratorAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, CollaboratorAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollaboratorAssignmentClient<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollaboratorAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAssignmentFindFirstArgs} args - Arguments to find a CollaboratorAssignment
     * @example
     * // Get one CollaboratorAssignment
     * const collaboratorAssignment = await prisma.collaboratorAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollaboratorAssignmentFindFirstArgs>(args?: SelectSubset<T, CollaboratorAssignmentFindFirstArgs<ExtArgs>>): Prisma__CollaboratorAssignmentClient<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollaboratorAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAssignmentFindFirstOrThrowArgs} args - Arguments to find a CollaboratorAssignment
     * @example
     * // Get one CollaboratorAssignment
     * const collaboratorAssignment = await prisma.collaboratorAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollaboratorAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, CollaboratorAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollaboratorAssignmentClient<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollaboratorAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollaboratorAssignments
     * const collaboratorAssignments = await prisma.collaboratorAssignment.findMany()
     * 
     * // Get first 10 CollaboratorAssignments
     * const collaboratorAssignments = await prisma.collaboratorAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaboratorAssignmentWithIdOnly = await prisma.collaboratorAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollaboratorAssignmentFindManyArgs>(args?: SelectSubset<T, CollaboratorAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollaboratorAssignment.
     * @param {CollaboratorAssignmentCreateArgs} args - Arguments to create a CollaboratorAssignment.
     * @example
     * // Create one CollaboratorAssignment
     * const CollaboratorAssignment = await prisma.collaboratorAssignment.create({
     *   data: {
     *     // ... data to create a CollaboratorAssignment
     *   }
     * })
     * 
     */
    create<T extends CollaboratorAssignmentCreateArgs>(args: SelectSubset<T, CollaboratorAssignmentCreateArgs<ExtArgs>>): Prisma__CollaboratorAssignmentClient<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollaboratorAssignments.
     * @param {CollaboratorAssignmentCreateManyArgs} args - Arguments to create many CollaboratorAssignments.
     * @example
     * // Create many CollaboratorAssignments
     * const collaboratorAssignment = await prisma.collaboratorAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollaboratorAssignmentCreateManyArgs>(args?: SelectSubset<T, CollaboratorAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollaboratorAssignments and returns the data saved in the database.
     * @param {CollaboratorAssignmentCreateManyAndReturnArgs} args - Arguments to create many CollaboratorAssignments.
     * @example
     * // Create many CollaboratorAssignments
     * const collaboratorAssignment = await prisma.collaboratorAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollaboratorAssignments and only return the `id`
     * const collaboratorAssignmentWithIdOnly = await prisma.collaboratorAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollaboratorAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, CollaboratorAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollaboratorAssignment.
     * @param {CollaboratorAssignmentDeleteArgs} args - Arguments to delete one CollaboratorAssignment.
     * @example
     * // Delete one CollaboratorAssignment
     * const CollaboratorAssignment = await prisma.collaboratorAssignment.delete({
     *   where: {
     *     // ... filter to delete one CollaboratorAssignment
     *   }
     * })
     * 
     */
    delete<T extends CollaboratorAssignmentDeleteArgs>(args: SelectSubset<T, CollaboratorAssignmentDeleteArgs<ExtArgs>>): Prisma__CollaboratorAssignmentClient<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollaboratorAssignment.
     * @param {CollaboratorAssignmentUpdateArgs} args - Arguments to update one CollaboratorAssignment.
     * @example
     * // Update one CollaboratorAssignment
     * const collaboratorAssignment = await prisma.collaboratorAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollaboratorAssignmentUpdateArgs>(args: SelectSubset<T, CollaboratorAssignmentUpdateArgs<ExtArgs>>): Prisma__CollaboratorAssignmentClient<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollaboratorAssignments.
     * @param {CollaboratorAssignmentDeleteManyArgs} args - Arguments to filter CollaboratorAssignments to delete.
     * @example
     * // Delete a few CollaboratorAssignments
     * const { count } = await prisma.collaboratorAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollaboratorAssignmentDeleteManyArgs>(args?: SelectSubset<T, CollaboratorAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollaboratorAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollaboratorAssignments
     * const collaboratorAssignment = await prisma.collaboratorAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollaboratorAssignmentUpdateManyArgs>(args: SelectSubset<T, CollaboratorAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollaboratorAssignments and returns the data updated in the database.
     * @param {CollaboratorAssignmentUpdateManyAndReturnArgs} args - Arguments to update many CollaboratorAssignments.
     * @example
     * // Update many CollaboratorAssignments
     * const collaboratorAssignment = await prisma.collaboratorAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollaboratorAssignments and only return the `id`
     * const collaboratorAssignmentWithIdOnly = await prisma.collaboratorAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollaboratorAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, CollaboratorAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollaboratorAssignment.
     * @param {CollaboratorAssignmentUpsertArgs} args - Arguments to update or create a CollaboratorAssignment.
     * @example
     * // Update or create a CollaboratorAssignment
     * const collaboratorAssignment = await prisma.collaboratorAssignment.upsert({
     *   create: {
     *     // ... data to create a CollaboratorAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollaboratorAssignment we want to update
     *   }
     * })
     */
    upsert<T extends CollaboratorAssignmentUpsertArgs>(args: SelectSubset<T, CollaboratorAssignmentUpsertArgs<ExtArgs>>): Prisma__CollaboratorAssignmentClient<$Result.GetResult<Prisma.$CollaboratorAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollaboratorAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAssignmentCountArgs} args - Arguments to filter CollaboratorAssignments to count.
     * @example
     * // Count the number of CollaboratorAssignments
     * const count = await prisma.collaboratorAssignment.count({
     *   where: {
     *     // ... the filter for the CollaboratorAssignments we want to count
     *   }
     * })
    **/
    count<T extends CollaboratorAssignmentCountArgs>(
      args?: Subset<T, CollaboratorAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaboratorAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollaboratorAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollaboratorAssignmentAggregateArgs>(args: Subset<T, CollaboratorAssignmentAggregateArgs>): Prisma.PrismaPromise<GetCollaboratorAssignmentAggregateType<T>>

    /**
     * Group by CollaboratorAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollaboratorAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaboratorAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: CollaboratorAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollaboratorAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaboratorAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollaboratorAssignment model
   */
  readonly fields: CollaboratorAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollaboratorAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaboratorAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drop<T extends CollaboratorAssignment$dropArgs<ExtArgs> = {}>(args?: Subset<T, CollaboratorAssignment$dropArgs<ExtArgs>>): Prisma__DropClient<$Result.GetResult<Prisma.$DropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    item<T extends CollaboratorAssignment$itemArgs<ExtArgs> = {}>(args?: Subset<T, CollaboratorAssignment$itemArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CollaboratorAssignment model
   */
  interface CollaboratorAssignmentFieldRefs {
    readonly id: FieldRef<"CollaboratorAssignment", 'String'>
    readonly userId: FieldRef<"CollaboratorAssignment", 'String'>
    readonly dropId: FieldRef<"CollaboratorAssignment", 'String'>
    readonly itemId: FieldRef<"CollaboratorAssignment", 'String'>
    readonly type: FieldRef<"CollaboratorAssignment", 'CommissionType'>
    readonly value: FieldRef<"CollaboratorAssignment", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CollaboratorAssignment findUnique
   */
  export type CollaboratorAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CollaboratorAssignment to fetch.
     */
    where: CollaboratorAssignmentWhereUniqueInput
  }

  /**
   * CollaboratorAssignment findUniqueOrThrow
   */
  export type CollaboratorAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CollaboratorAssignment to fetch.
     */
    where: CollaboratorAssignmentWhereUniqueInput
  }

  /**
   * CollaboratorAssignment findFirst
   */
  export type CollaboratorAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CollaboratorAssignment to fetch.
     */
    where?: CollaboratorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollaboratorAssignments to fetch.
     */
    orderBy?: CollaboratorAssignmentOrderByWithRelationInput | CollaboratorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollaboratorAssignments.
     */
    cursor?: CollaboratorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollaboratorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollaboratorAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollaboratorAssignments.
     */
    distinct?: CollaboratorAssignmentScalarFieldEnum | CollaboratorAssignmentScalarFieldEnum[]
  }

  /**
   * CollaboratorAssignment findFirstOrThrow
   */
  export type CollaboratorAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CollaboratorAssignment to fetch.
     */
    where?: CollaboratorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollaboratorAssignments to fetch.
     */
    orderBy?: CollaboratorAssignmentOrderByWithRelationInput | CollaboratorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollaboratorAssignments.
     */
    cursor?: CollaboratorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollaboratorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollaboratorAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollaboratorAssignments.
     */
    distinct?: CollaboratorAssignmentScalarFieldEnum | CollaboratorAssignmentScalarFieldEnum[]
  }

  /**
   * CollaboratorAssignment findMany
   */
  export type CollaboratorAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CollaboratorAssignments to fetch.
     */
    where?: CollaboratorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollaboratorAssignments to fetch.
     */
    orderBy?: CollaboratorAssignmentOrderByWithRelationInput | CollaboratorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollaboratorAssignments.
     */
    cursor?: CollaboratorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollaboratorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollaboratorAssignments.
     */
    skip?: number
    distinct?: CollaboratorAssignmentScalarFieldEnum | CollaboratorAssignmentScalarFieldEnum[]
  }

  /**
   * CollaboratorAssignment create
   */
  export type CollaboratorAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a CollaboratorAssignment.
     */
    data: XOR<CollaboratorAssignmentCreateInput, CollaboratorAssignmentUncheckedCreateInput>
  }

  /**
   * CollaboratorAssignment createMany
   */
  export type CollaboratorAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollaboratorAssignments.
     */
    data: CollaboratorAssignmentCreateManyInput | CollaboratorAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollaboratorAssignment createManyAndReturn
   */
  export type CollaboratorAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many CollaboratorAssignments.
     */
    data: CollaboratorAssignmentCreateManyInput | CollaboratorAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollaboratorAssignment update
   */
  export type CollaboratorAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a CollaboratorAssignment.
     */
    data: XOR<CollaboratorAssignmentUpdateInput, CollaboratorAssignmentUncheckedUpdateInput>
    /**
     * Choose, which CollaboratorAssignment to update.
     */
    where: CollaboratorAssignmentWhereUniqueInput
  }

  /**
   * CollaboratorAssignment updateMany
   */
  export type CollaboratorAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollaboratorAssignments.
     */
    data: XOR<CollaboratorAssignmentUpdateManyMutationInput, CollaboratorAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which CollaboratorAssignments to update
     */
    where?: CollaboratorAssignmentWhereInput
    /**
     * Limit how many CollaboratorAssignments to update.
     */
    limit?: number
  }

  /**
   * CollaboratorAssignment updateManyAndReturn
   */
  export type CollaboratorAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update CollaboratorAssignments.
     */
    data: XOR<CollaboratorAssignmentUpdateManyMutationInput, CollaboratorAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which CollaboratorAssignments to update
     */
    where?: CollaboratorAssignmentWhereInput
    /**
     * Limit how many CollaboratorAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollaboratorAssignment upsert
   */
  export type CollaboratorAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the CollaboratorAssignment to update in case it exists.
     */
    where: CollaboratorAssignmentWhereUniqueInput
    /**
     * In case the CollaboratorAssignment found by the `where` argument doesn't exist, create a new CollaboratorAssignment with this data.
     */
    create: XOR<CollaboratorAssignmentCreateInput, CollaboratorAssignmentUncheckedCreateInput>
    /**
     * In case the CollaboratorAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaboratorAssignmentUpdateInput, CollaboratorAssignmentUncheckedUpdateInput>
  }

  /**
   * CollaboratorAssignment delete
   */
  export type CollaboratorAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
    /**
     * Filter which CollaboratorAssignment to delete.
     */
    where: CollaboratorAssignmentWhereUniqueInput
  }

  /**
   * CollaboratorAssignment deleteMany
   */
  export type CollaboratorAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollaboratorAssignments to delete
     */
    where?: CollaboratorAssignmentWhereInput
    /**
     * Limit how many CollaboratorAssignments to delete.
     */
    limit?: number
  }

  /**
   * CollaboratorAssignment.drop
   */
  export type CollaboratorAssignment$dropArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drop
     */
    select?: DropSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drop
     */
    omit?: DropOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DropInclude<ExtArgs> | null
    where?: DropWhereInput
  }

  /**
   * CollaboratorAssignment.item
   */
  export type CollaboratorAssignment$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
  }

  /**
   * CollaboratorAssignment without action
   */
  export type CollaboratorAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollaboratorAssignment
     */
    select?: CollaboratorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollaboratorAssignment
     */
    omit?: CollaboratorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaboratorAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    shippingFee: number | null
    totalAmount: number | null
  }

  export type OrderSumAggregateOutputType = {
    shippingFee: number | null
    totalAmount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    buyerId: string | null
    shippingFee: number | null
    totalAmount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentRef: string | null
    proofImage: string | null
    invoiceUrl: string | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    buyerId: string | null
    shippingFee: number | null
    totalAmount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentRef: string | null
    proofImage: string | null
    invoiceUrl: string | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    buyerId: number
    shippingFee: number
    totalAmount: number
    paymentStatus: number
    paymentMethod: number
    paymentRef: number
    proofImage: number
    invoiceUrl: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    shippingFee?: true
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    shippingFee?: true
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    buyerId?: true
    shippingFee?: true
    totalAmount?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentRef?: true
    proofImage?: true
    invoiceUrl?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    buyerId?: true
    shippingFee?: true
    totalAmount?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentRef?: true
    proofImage?: true
    invoiceUrl?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    buyerId?: true
    shippingFee?: true
    totalAmount?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentRef?: true
    proofImage?: true
    invoiceUrl?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    buyerId: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod: $Enums.PaymentMethod | null
    paymentRef: string | null
    proofImage: string | null
    invoiceUrl: string | null
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerId?: boolean
    shippingFee?: boolean
    totalAmount?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentRef?: boolean
    proofImage?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    User?: boolean | Order$UserArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerId?: boolean
    shippingFee?: boolean
    totalAmount?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentRef?: boolean
    proofImage?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerId?: boolean
    shippingFee?: boolean
    totalAmount?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentRef?: boolean
    proofImage?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    buyerId?: boolean
    shippingFee?: boolean
    totalAmount?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentRef?: boolean
    proofImage?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "buyerId" | "shippingFee" | "totalAmount" | "paymentStatus" | "paymentMethod" | "paymentRef" | "proofImage" | "invoiceUrl" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    User?: boolean | Order$UserArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      buyer: Prisma.$BuyerPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      buyerId: string
      shippingFee: number
      totalAmount: number
      paymentStatus: $Enums.PaymentStatus
      paymentMethod: $Enums.PaymentMethod | null
      paymentRef: string | null
      proofImage: string | null
      invoiceUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends BuyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerDefaultArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Order$UserArgs<ExtArgs> = {}>(args?: Subset<T, Order$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly buyerId: FieldRef<"Order", 'String'>
    readonly shippingFee: FieldRef<"Order", 'Float'>
    readonly totalAmount: FieldRef<"Order", 'Float'>
    readonly paymentStatus: FieldRef<"Order", 'PaymentStatus'>
    readonly paymentMethod: FieldRef<"Order", 'PaymentMethod'>
    readonly paymentRef: FieldRef<"Order", 'String'>
    readonly proofImage: FieldRef<"Order", 'String'>
    readonly invoiceUrl: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.User
   */
  export type Order$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Buyer
   */

  export type AggregateBuyer = {
    _count: BuyerCountAggregateOutputType | null
    _min: BuyerMinAggregateOutputType | null
    _max: BuyerMaxAggregateOutputType | null
  }

  export type BuyerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    telegram: string | null
    instagram: string | null
    address: string | null
    address2: string | null
    postalCode: string | null
    createdAt: Date | null
  }

  export type BuyerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    telegram: string | null
    instagram: string | null
    address: string | null
    address2: string | null
    postalCode: string | null
    createdAt: Date | null
  }

  export type BuyerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    telegram: number
    instagram: number
    address: number
    address2: number
    postalCode: number
    createdAt: number
    _all: number
  }


  export type BuyerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    telegram?: true
    instagram?: true
    address?: true
    address2?: true
    postalCode?: true
    createdAt?: true
  }

  export type BuyerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    telegram?: true
    instagram?: true
    address?: true
    address2?: true
    postalCode?: true
    createdAt?: true
  }

  export type BuyerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    telegram?: true
    instagram?: true
    address?: true
    address2?: true
    postalCode?: true
    createdAt?: true
    _all?: true
  }

  export type BuyerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buyer to aggregate.
     */
    where?: BuyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buyers to fetch.
     */
    orderBy?: BuyerOrderByWithRelationInput | BuyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buyers
    **/
    _count?: true | BuyerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuyerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuyerMaxAggregateInputType
  }

  export type GetBuyerAggregateType<T extends BuyerAggregateArgs> = {
        [P in keyof T & keyof AggregateBuyer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuyer[P]>
      : GetScalarType<T[P], AggregateBuyer[P]>
  }




  export type BuyerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuyerWhereInput
    orderBy?: BuyerOrderByWithAggregationInput | BuyerOrderByWithAggregationInput[]
    by: BuyerScalarFieldEnum[] | BuyerScalarFieldEnum
    having?: BuyerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuyerCountAggregateInputType | true
    _min?: BuyerMinAggregateInputType
    _max?: BuyerMaxAggregateInputType
  }

  export type BuyerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    telegram: string | null
    instagram: string | null
    address: string | null
    address2: string | null
    postalCode: string | null
    createdAt: Date
    _count: BuyerCountAggregateOutputType | null
    _min: BuyerMinAggregateOutputType | null
    _max: BuyerMaxAggregateOutputType | null
  }

  type GetBuyerGroupByPayload<T extends BuyerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuyerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuyerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuyerGroupByOutputType[P]>
            : GetScalarType<T[P], BuyerGroupByOutputType[P]>
        }
      >
    >


  export type BuyerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    instagram?: boolean
    address?: boolean
    address2?: boolean
    postalCode?: boolean
    createdAt?: boolean
    orders?: boolean | Buyer$ordersArgs<ExtArgs>
    rentals?: boolean | Buyer$rentalsArgs<ExtArgs>
    _count?: boolean | BuyerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buyer"]>

  export type BuyerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    instagram?: boolean
    address?: boolean
    address2?: boolean
    postalCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["buyer"]>

  export type BuyerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    instagram?: boolean
    address?: boolean
    address2?: boolean
    postalCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["buyer"]>

  export type BuyerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    telegram?: boolean
    instagram?: boolean
    address?: boolean
    address2?: boolean
    postalCode?: boolean
    createdAt?: boolean
  }

  export type BuyerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "telegram" | "instagram" | "address" | "address2" | "postalCode" | "createdAt", ExtArgs["result"]["buyer"]>
  export type BuyerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Buyer$ordersArgs<ExtArgs>
    rentals?: boolean | Buyer$rentalsArgs<ExtArgs>
    _count?: boolean | BuyerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BuyerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BuyerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BuyerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Buyer"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      rentals: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      telegram: string | null
      instagram: string | null
      address: string | null
      address2: string | null
      postalCode: string | null
      createdAt: Date
    }, ExtArgs["result"]["buyer"]>
    composites: {}
  }

  type BuyerGetPayload<S extends boolean | null | undefined | BuyerDefaultArgs> = $Result.GetResult<Prisma.$BuyerPayload, S>

  type BuyerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuyerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuyerCountAggregateInputType | true
    }

  export interface BuyerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Buyer'], meta: { name: 'Buyer' } }
    /**
     * Find zero or one Buyer that matches the filter.
     * @param {BuyerFindUniqueArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuyerFindUniqueArgs>(args: SelectSubset<T, BuyerFindUniqueArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Buyer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuyerFindUniqueOrThrowArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuyerFindUniqueOrThrowArgs>(args: SelectSubset<T, BuyerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buyer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFindFirstArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuyerFindFirstArgs>(args?: SelectSubset<T, BuyerFindFirstArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buyer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFindFirstOrThrowArgs} args - Arguments to find a Buyer
     * @example
     * // Get one Buyer
     * const buyer = await prisma.buyer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuyerFindFirstOrThrowArgs>(args?: SelectSubset<T, BuyerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buyers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buyers
     * const buyers = await prisma.buyer.findMany()
     * 
     * // Get first 10 Buyers
     * const buyers = await prisma.buyer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buyerWithIdOnly = await prisma.buyer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuyerFindManyArgs>(args?: SelectSubset<T, BuyerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Buyer.
     * @param {BuyerCreateArgs} args - Arguments to create a Buyer.
     * @example
     * // Create one Buyer
     * const Buyer = await prisma.buyer.create({
     *   data: {
     *     // ... data to create a Buyer
     *   }
     * })
     * 
     */
    create<T extends BuyerCreateArgs>(args: SelectSubset<T, BuyerCreateArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buyers.
     * @param {BuyerCreateManyArgs} args - Arguments to create many Buyers.
     * @example
     * // Create many Buyers
     * const buyer = await prisma.buyer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuyerCreateManyArgs>(args?: SelectSubset<T, BuyerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buyers and returns the data saved in the database.
     * @param {BuyerCreateManyAndReturnArgs} args - Arguments to create many Buyers.
     * @example
     * // Create many Buyers
     * const buyer = await prisma.buyer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buyers and only return the `id`
     * const buyerWithIdOnly = await prisma.buyer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuyerCreateManyAndReturnArgs>(args?: SelectSubset<T, BuyerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Buyer.
     * @param {BuyerDeleteArgs} args - Arguments to delete one Buyer.
     * @example
     * // Delete one Buyer
     * const Buyer = await prisma.buyer.delete({
     *   where: {
     *     // ... filter to delete one Buyer
     *   }
     * })
     * 
     */
    delete<T extends BuyerDeleteArgs>(args: SelectSubset<T, BuyerDeleteArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Buyer.
     * @param {BuyerUpdateArgs} args - Arguments to update one Buyer.
     * @example
     * // Update one Buyer
     * const buyer = await prisma.buyer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuyerUpdateArgs>(args: SelectSubset<T, BuyerUpdateArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buyers.
     * @param {BuyerDeleteManyArgs} args - Arguments to filter Buyers to delete.
     * @example
     * // Delete a few Buyers
     * const { count } = await prisma.buyer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuyerDeleteManyArgs>(args?: SelectSubset<T, BuyerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buyers
     * const buyer = await prisma.buyer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuyerUpdateManyArgs>(args: SelectSubset<T, BuyerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buyers and returns the data updated in the database.
     * @param {BuyerUpdateManyAndReturnArgs} args - Arguments to update many Buyers.
     * @example
     * // Update many Buyers
     * const buyer = await prisma.buyer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buyers and only return the `id`
     * const buyerWithIdOnly = await prisma.buyer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuyerUpdateManyAndReturnArgs>(args: SelectSubset<T, BuyerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Buyer.
     * @param {BuyerUpsertArgs} args - Arguments to update or create a Buyer.
     * @example
     * // Update or create a Buyer
     * const buyer = await prisma.buyer.upsert({
     *   create: {
     *     // ... data to create a Buyer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buyer we want to update
     *   }
     * })
     */
    upsert<T extends BuyerUpsertArgs>(args: SelectSubset<T, BuyerUpsertArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerCountArgs} args - Arguments to filter Buyers to count.
     * @example
     * // Count the number of Buyers
     * const count = await prisma.buyer.count({
     *   where: {
     *     // ... the filter for the Buyers we want to count
     *   }
     * })
    **/
    count<T extends BuyerCountArgs>(
      args?: Subset<T, BuyerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuyerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuyerAggregateArgs>(args: Subset<T, BuyerAggregateArgs>): Prisma.PrismaPromise<GetBuyerAggregateType<T>>

    /**
     * Group by Buyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuyerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuyerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuyerGroupByArgs['orderBy'] }
        : { orderBy?: BuyerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Buyer model
   */
  readonly fields: BuyerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Buyer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuyerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Buyer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Buyer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentals<T extends Buyer$rentalsArgs<ExtArgs> = {}>(args?: Subset<T, Buyer$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Buyer model
   */
  interface BuyerFieldRefs {
    readonly id: FieldRef<"Buyer", 'String'>
    readonly name: FieldRef<"Buyer", 'String'>
    readonly email: FieldRef<"Buyer", 'String'>
    readonly phone: FieldRef<"Buyer", 'String'>
    readonly telegram: FieldRef<"Buyer", 'String'>
    readonly instagram: FieldRef<"Buyer", 'String'>
    readonly address: FieldRef<"Buyer", 'String'>
    readonly address2: FieldRef<"Buyer", 'String'>
    readonly postalCode: FieldRef<"Buyer", 'String'>
    readonly createdAt: FieldRef<"Buyer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Buyer findUnique
   */
  export type BuyerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyer to fetch.
     */
    where: BuyerWhereUniqueInput
  }

  /**
   * Buyer findUniqueOrThrow
   */
  export type BuyerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyer to fetch.
     */
    where: BuyerWhereUniqueInput
  }

  /**
   * Buyer findFirst
   */
  export type BuyerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyer to fetch.
     */
    where?: BuyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buyers to fetch.
     */
    orderBy?: BuyerOrderByWithRelationInput | BuyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buyers.
     */
    cursor?: BuyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buyers.
     */
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * Buyer findFirstOrThrow
   */
  export type BuyerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyer to fetch.
     */
    where?: BuyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buyers to fetch.
     */
    orderBy?: BuyerOrderByWithRelationInput | BuyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buyers.
     */
    cursor?: BuyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buyers.
     */
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * Buyer findMany
   */
  export type BuyerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter, which Buyers to fetch.
     */
    where?: BuyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buyers to fetch.
     */
    orderBy?: BuyerOrderByWithRelationInput | BuyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buyers.
     */
    cursor?: BuyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buyers.
     */
    skip?: number
    distinct?: BuyerScalarFieldEnum | BuyerScalarFieldEnum[]
  }

  /**
   * Buyer create
   */
  export type BuyerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * The data needed to create a Buyer.
     */
    data: XOR<BuyerCreateInput, BuyerUncheckedCreateInput>
  }

  /**
   * Buyer createMany
   */
  export type BuyerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buyers.
     */
    data: BuyerCreateManyInput | BuyerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Buyer createManyAndReturn
   */
  export type BuyerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * The data used to create many Buyers.
     */
    data: BuyerCreateManyInput | BuyerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Buyer update
   */
  export type BuyerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * The data needed to update a Buyer.
     */
    data: XOR<BuyerUpdateInput, BuyerUncheckedUpdateInput>
    /**
     * Choose, which Buyer to update.
     */
    where: BuyerWhereUniqueInput
  }

  /**
   * Buyer updateMany
   */
  export type BuyerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buyers.
     */
    data: XOR<BuyerUpdateManyMutationInput, BuyerUncheckedUpdateManyInput>
    /**
     * Filter which Buyers to update
     */
    where?: BuyerWhereInput
    /**
     * Limit how many Buyers to update.
     */
    limit?: number
  }

  /**
   * Buyer updateManyAndReturn
   */
  export type BuyerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * The data used to update Buyers.
     */
    data: XOR<BuyerUpdateManyMutationInput, BuyerUncheckedUpdateManyInput>
    /**
     * Filter which Buyers to update
     */
    where?: BuyerWhereInput
    /**
     * Limit how many Buyers to update.
     */
    limit?: number
  }

  /**
   * Buyer upsert
   */
  export type BuyerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * The filter to search for the Buyer to update in case it exists.
     */
    where: BuyerWhereUniqueInput
    /**
     * In case the Buyer found by the `where` argument doesn't exist, create a new Buyer with this data.
     */
    create: XOR<BuyerCreateInput, BuyerUncheckedCreateInput>
    /**
     * In case the Buyer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuyerUpdateInput, BuyerUncheckedUpdateInput>
  }

  /**
   * Buyer delete
   */
  export type BuyerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
    /**
     * Filter which Buyer to delete.
     */
    where: BuyerWhereUniqueInput
  }

  /**
   * Buyer deleteMany
   */
  export type BuyerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buyers to delete
     */
    where?: BuyerWhereInput
    /**
     * Limit how many Buyers to delete.
     */
    limit?: number
  }

  /**
   * Buyer.orders
   */
  export type Buyer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Buyer.rentals
   */
  export type Buyer$rentalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Buyer without action
   */
  export type BuyerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buyer
     */
    select?: BuyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buyer
     */
    omit?: BuyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuyerInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemId: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemId: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    itemId: number
    _all: number
  }


  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    itemId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    itemId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    itemId?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    itemId: string
    _count: OrderItemCountAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    itemId?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "itemId", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      itemId: string
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly itemId: FieldRef<"OrderItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  export type RentalAvgAggregateOutputType = {
    deposit: number | null
    rentalFee: number | null
    penalty: number | null
  }

  export type RentalSumAggregateOutputType = {
    deposit: number | null
    rentalFee: number | null
    penalty: number | null
  }

  export type RentalMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    buyerId: string | null
    startDate: Date | null
    endDate: Date | null
    deposit: number | null
    rentalFee: number | null
    penalty: number | null
    returnedAt: Date | null
    returnNotes: string | null
    status: $Enums.RentalStatus | null
  }

  export type RentalMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    buyerId: string | null
    startDate: Date | null
    endDate: Date | null
    deposit: number | null
    rentalFee: number | null
    penalty: number | null
    returnedAt: Date | null
    returnNotes: string | null
    status: $Enums.RentalStatus | null
  }

  export type RentalCountAggregateOutputType = {
    id: number
    itemId: number
    buyerId: number
    startDate: number
    endDate: number
    deposit: number
    rentalFee: number
    penalty: number
    returnedAt: number
    returnNotes: number
    status: number
    _all: number
  }


  export type RentalAvgAggregateInputType = {
    deposit?: true
    rentalFee?: true
    penalty?: true
  }

  export type RentalSumAggregateInputType = {
    deposit?: true
    rentalFee?: true
    penalty?: true
  }

  export type RentalMinAggregateInputType = {
    id?: true
    itemId?: true
    buyerId?: true
    startDate?: true
    endDate?: true
    deposit?: true
    rentalFee?: true
    penalty?: true
    returnedAt?: true
    returnNotes?: true
    status?: true
  }

  export type RentalMaxAggregateInputType = {
    id?: true
    itemId?: true
    buyerId?: true
    startDate?: true
    endDate?: true
    deposit?: true
    rentalFee?: true
    penalty?: true
    returnedAt?: true
    returnNotes?: true
    status?: true
  }

  export type RentalCountAggregateInputType = {
    id?: true
    itemId?: true
    buyerId?: true
    startDate?: true
    endDate?: true
    deposit?: true
    rentalFee?: true
    penalty?: true
    returnedAt?: true
    returnNotes?: true
    status?: true
    _all?: true
  }

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rental to aggregate.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rentals
    **/
    _count?: true | RentalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalMaxAggregateInputType
  }

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
        [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>
  }




  export type RentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithAggregationInput | RentalOrderByWithAggregationInput[]
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum
    having?: RentalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalCountAggregateInputType | true
    _avg?: RentalAvgAggregateInputType
    _sum?: RentalSumAggregateInputType
    _min?: RentalMinAggregateInputType
    _max?: RentalMaxAggregateInputType
  }

  export type RentalGroupByOutputType = {
    id: string
    itemId: string
    buyerId: string
    startDate: Date
    endDate: Date
    deposit: number
    rentalFee: number
    penalty: number | null
    returnedAt: Date | null
    returnNotes: string | null
    status: $Enums.RentalStatus
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  type GetRentalGroupByPayload<T extends RentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalGroupByOutputType[P]>
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
        }
      >
    >


  export type RentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    buyerId?: boolean
    startDate?: boolean
    endDate?: boolean
    deposit?: boolean
    rentalFee?: boolean
    penalty?: boolean
    returnedAt?: boolean
    returnNotes?: boolean
    status?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
    User?: boolean | Rental$UserArgs<ExtArgs>
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>

  export type RentalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    buyerId?: boolean
    startDate?: boolean
    endDate?: boolean
    deposit?: boolean
    rentalFee?: boolean
    penalty?: boolean
    returnedAt?: boolean
    returnNotes?: boolean
    status?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>

  export type RentalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    buyerId?: boolean
    startDate?: boolean
    endDate?: boolean
    deposit?: boolean
    rentalFee?: boolean
    penalty?: boolean
    returnedAt?: boolean
    returnNotes?: boolean
    status?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>

  export type RentalSelectScalar = {
    id?: boolean
    itemId?: boolean
    buyerId?: boolean
    startDate?: boolean
    endDate?: boolean
    deposit?: boolean
    rentalFee?: boolean
    penalty?: boolean
    returnedAt?: boolean
    returnNotes?: boolean
    status?: boolean
  }

  export type RentalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "buyerId" | "startDate" | "endDate" | "deposit" | "rentalFee" | "penalty" | "returnedAt" | "returnNotes" | "status", ExtArgs["result"]["rental"]>
  export type RentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
    User?: boolean | Rental$UserArgs<ExtArgs>
    _count?: boolean | RentalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RentalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
  }
  export type RentalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    buyer?: boolean | BuyerDefaultArgs<ExtArgs>
  }

  export type $RentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rental"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      buyer: Prisma.$BuyerPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      buyerId: string
      startDate: Date
      endDate: Date
      deposit: number
      rentalFee: number
      penalty: number | null
      returnedAt: Date | null
      returnNotes: string | null
      status: $Enums.RentalStatus
    }, ExtArgs["result"]["rental"]>
    composites: {}
  }

  type RentalGetPayload<S extends boolean | null | undefined | RentalDefaultArgs> = $Result.GetResult<Prisma.$RentalPayload, S>

  type RentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalCountAggregateInputType | true
    }

  export interface RentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rental'], meta: { name: 'Rental' } }
    /**
     * Find zero or one Rental that matches the filter.
     * @param {RentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalFindUniqueArgs>(args: SelectSubset<T, RentalFindUniqueArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rental that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalFindFirstArgs>(args?: SelectSubset<T, RentalFindFirstArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalWithIdOnly = await prisma.rental.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalFindManyArgs>(args?: SelectSubset<T, RentalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rental.
     * @param {RentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     * 
     */
    create<T extends RentalCreateArgs>(args: SelectSubset<T, RentalCreateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rentals.
     * @param {RentalCreateManyArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rental = await prisma.rental.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalCreateManyArgs>(args?: SelectSubset<T, RentalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rentals and returns the data saved in the database.
     * @param {RentalCreateManyAndReturnArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rental = await prisma.rental.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rentals and only return the `id`
     * const rentalWithIdOnly = await prisma.rental.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rental.
     * @param {RentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     * 
     */
    delete<T extends RentalDeleteArgs>(args: SelectSubset<T, RentalDeleteArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rental.
     * @param {RentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalUpdateArgs>(args: SelectSubset<T, RentalUpdateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rentals.
     * @param {RentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalDeleteManyArgs>(args?: SelectSubset<T, RentalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalUpdateManyArgs>(args: SelectSubset<T, RentalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals and returns the data updated in the database.
     * @param {RentalUpdateManyAndReturnArgs} args - Arguments to update many Rentals.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rentals and only return the `id`
     * const rentalWithIdOnly = await prisma.rental.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rental.
     * @param {RentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     */
    upsert<T extends RentalUpsertArgs>(args: SelectSubset<T, RentalUpsertArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends RentalCountArgs>(
      args?: Subset<T, RentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalAggregateArgs>(args: Subset<T, RentalAggregateArgs>): Prisma.PrismaPromise<GetRentalAggregateType<T>>

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalGroupByArgs['orderBy'] }
        : { orderBy?: RentalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rental model
   */
  readonly fields: RentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends BuyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuyerDefaultArgs<ExtArgs>>): Prisma__BuyerClient<$Result.GetResult<Prisma.$BuyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends Rental$UserArgs<ExtArgs> = {}>(args?: Subset<T, Rental$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rental model
   */
  interface RentalFieldRefs {
    readonly id: FieldRef<"Rental", 'String'>
    readonly itemId: FieldRef<"Rental", 'String'>
    readonly buyerId: FieldRef<"Rental", 'String'>
    readonly startDate: FieldRef<"Rental", 'DateTime'>
    readonly endDate: FieldRef<"Rental", 'DateTime'>
    readonly deposit: FieldRef<"Rental", 'Float'>
    readonly rentalFee: FieldRef<"Rental", 'Float'>
    readonly penalty: FieldRef<"Rental", 'Float'>
    readonly returnedAt: FieldRef<"Rental", 'DateTime'>
    readonly returnNotes: FieldRef<"Rental", 'String'>
    readonly status: FieldRef<"Rental", 'RentalStatus'>
  }
    

  // Custom InputTypes
  /**
   * Rental findUnique
   */
  export type RentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental findUniqueOrThrow
   */
  export type RentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental findFirst
   */
  export type RentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental findFirstOrThrow
   */
  export type RentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental findMany
   */
  export type RentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rentals to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental create
   */
  export type RentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to create a Rental.
     */
    data: XOR<RentalCreateInput, RentalUncheckedCreateInput>
  }

  /**
   * Rental createMany
   */
  export type RentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rentals.
     */
    data: RentalCreateManyInput | RentalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rental createManyAndReturn
   */
  export type RentalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * The data used to create many Rentals.
     */
    data: RentalCreateManyInput | RentalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rental update
   */
  export type RentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to update a Rental.
     */
    data: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
    /**
     * Choose, which Rental to update.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental updateMany
   */
  export type RentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rentals.
     */
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyInput>
    /**
     * Filter which Rentals to update
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to update.
     */
    limit?: number
  }

  /**
   * Rental updateManyAndReturn
   */
  export type RentalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * The data used to update Rentals.
     */
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyInput>
    /**
     * Filter which Rentals to update
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rental upsert
   */
  export type RentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The filter to search for the Rental to update in case it exists.
     */
    where: RentalWhereUniqueInput
    /**
     * In case the Rental found by the `where` argument doesn't exist, create a new Rental with this data.
     */
    create: XOR<RentalCreateInput, RentalUncheckedCreateInput>
    /**
     * In case the Rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
  }

  /**
   * Rental delete
   */
  export type RentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter which Rental to delete.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental deleteMany
   */
  export type RentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rentals to delete
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to delete.
     */
    limit?: number
  }

  /**
   * Rental.User
   */
  export type Rental$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Rental without action
   */
  export type RentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
  }


  /**
   * Model ShippingRule
   */

  export type AggregateShippingRule = {
    _count: ShippingRuleCountAggregateOutputType | null
    _avg: ShippingRuleAvgAggregateOutputType | null
    _sum: ShippingRuleSumAggregateOutputType | null
    _min: ShippingRuleMinAggregateOutputType | null
    _max: ShippingRuleMaxAggregateOutputType | null
  }

  export type ShippingRuleAvgAggregateOutputType = {
    fee: number | null
    maxItems: number | null
  }

  export type ShippingRuleSumAggregateOutputType = {
    fee: number | null
    maxItems: number | null
  }

  export type ShippingRuleMinAggregateOutputType = {
    id: string | null
    name: string | null
    region: string | null
    fee: number | null
    maxItems: number | null
    createdAt: Date | null
  }

  export type ShippingRuleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    region: string | null
    fee: number | null
    maxItems: number | null
    createdAt: Date | null
  }

  export type ShippingRuleCountAggregateOutputType = {
    id: number
    name: number
    region: number
    fee: number
    maxItems: number
    createdAt: number
    _all: number
  }


  export type ShippingRuleAvgAggregateInputType = {
    fee?: true
    maxItems?: true
  }

  export type ShippingRuleSumAggregateInputType = {
    fee?: true
    maxItems?: true
  }

  export type ShippingRuleMinAggregateInputType = {
    id?: true
    name?: true
    region?: true
    fee?: true
    maxItems?: true
    createdAt?: true
  }

  export type ShippingRuleMaxAggregateInputType = {
    id?: true
    name?: true
    region?: true
    fee?: true
    maxItems?: true
    createdAt?: true
  }

  export type ShippingRuleCountAggregateInputType = {
    id?: true
    name?: true
    region?: true
    fee?: true
    maxItems?: true
    createdAt?: true
    _all?: true
  }

  export type ShippingRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingRule to aggregate.
     */
    where?: ShippingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingRules to fetch.
     */
    orderBy?: ShippingRuleOrderByWithRelationInput | ShippingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShippingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShippingRules
    **/
    _count?: true | ShippingRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShippingRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShippingRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingRuleMaxAggregateInputType
  }

  export type GetShippingRuleAggregateType<T extends ShippingRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateShippingRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShippingRule[P]>
      : GetScalarType<T[P], AggregateShippingRule[P]>
  }




  export type ShippingRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingRuleWhereInput
    orderBy?: ShippingRuleOrderByWithAggregationInput | ShippingRuleOrderByWithAggregationInput[]
    by: ShippingRuleScalarFieldEnum[] | ShippingRuleScalarFieldEnum
    having?: ShippingRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingRuleCountAggregateInputType | true
    _avg?: ShippingRuleAvgAggregateInputType
    _sum?: ShippingRuleSumAggregateInputType
    _min?: ShippingRuleMinAggregateInputType
    _max?: ShippingRuleMaxAggregateInputType
  }

  export type ShippingRuleGroupByOutputType = {
    id: string
    name: string
    region: string
    fee: number
    maxItems: number | null
    createdAt: Date
    _count: ShippingRuleCountAggregateOutputType | null
    _avg: ShippingRuleAvgAggregateOutputType | null
    _sum: ShippingRuleSumAggregateOutputType | null
    _min: ShippingRuleMinAggregateOutputType | null
    _max: ShippingRuleMaxAggregateOutputType | null
  }

  type GetShippingRuleGroupByPayload<T extends ShippingRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippingRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingRuleGroupByOutputType[P]>
        }
      >
    >


  export type ShippingRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    fee?: boolean
    maxItems?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shippingRule"]>

  export type ShippingRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    fee?: boolean
    maxItems?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shippingRule"]>

  export type ShippingRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    region?: boolean
    fee?: boolean
    maxItems?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shippingRule"]>

  export type ShippingRuleSelectScalar = {
    id?: boolean
    name?: boolean
    region?: boolean
    fee?: boolean
    maxItems?: boolean
    createdAt?: boolean
  }

  export type ShippingRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "region" | "fee" | "maxItems" | "createdAt", ExtArgs["result"]["shippingRule"]>

  export type $ShippingRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShippingRule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      region: string
      fee: number
      maxItems: number | null
      createdAt: Date
    }, ExtArgs["result"]["shippingRule"]>
    composites: {}
  }

  type ShippingRuleGetPayload<S extends boolean | null | undefined | ShippingRuleDefaultArgs> = $Result.GetResult<Prisma.$ShippingRulePayload, S>

  type ShippingRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShippingRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShippingRuleCountAggregateInputType | true
    }

  export interface ShippingRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShippingRule'], meta: { name: 'ShippingRule' } }
    /**
     * Find zero or one ShippingRule that matches the filter.
     * @param {ShippingRuleFindUniqueArgs} args - Arguments to find a ShippingRule
     * @example
     * // Get one ShippingRule
     * const shippingRule = await prisma.shippingRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShippingRuleFindUniqueArgs>(args: SelectSubset<T, ShippingRuleFindUniqueArgs<ExtArgs>>): Prisma__ShippingRuleClient<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShippingRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShippingRuleFindUniqueOrThrowArgs} args - Arguments to find a ShippingRule
     * @example
     * // Get one ShippingRule
     * const shippingRule = await prisma.shippingRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShippingRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ShippingRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShippingRuleClient<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingRuleFindFirstArgs} args - Arguments to find a ShippingRule
     * @example
     * // Get one ShippingRule
     * const shippingRule = await prisma.shippingRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShippingRuleFindFirstArgs>(args?: SelectSubset<T, ShippingRuleFindFirstArgs<ExtArgs>>): Prisma__ShippingRuleClient<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingRuleFindFirstOrThrowArgs} args - Arguments to find a ShippingRule
     * @example
     * // Get one ShippingRule
     * const shippingRule = await prisma.shippingRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShippingRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ShippingRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShippingRuleClient<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShippingRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShippingRules
     * const shippingRules = await prisma.shippingRule.findMany()
     * 
     * // Get first 10 ShippingRules
     * const shippingRules = await prisma.shippingRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shippingRuleWithIdOnly = await prisma.shippingRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShippingRuleFindManyArgs>(args?: SelectSubset<T, ShippingRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShippingRule.
     * @param {ShippingRuleCreateArgs} args - Arguments to create a ShippingRule.
     * @example
     * // Create one ShippingRule
     * const ShippingRule = await prisma.shippingRule.create({
     *   data: {
     *     // ... data to create a ShippingRule
     *   }
     * })
     * 
     */
    create<T extends ShippingRuleCreateArgs>(args: SelectSubset<T, ShippingRuleCreateArgs<ExtArgs>>): Prisma__ShippingRuleClient<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShippingRules.
     * @param {ShippingRuleCreateManyArgs} args - Arguments to create many ShippingRules.
     * @example
     * // Create many ShippingRules
     * const shippingRule = await prisma.shippingRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShippingRuleCreateManyArgs>(args?: SelectSubset<T, ShippingRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShippingRules and returns the data saved in the database.
     * @param {ShippingRuleCreateManyAndReturnArgs} args - Arguments to create many ShippingRules.
     * @example
     * // Create many ShippingRules
     * const shippingRule = await prisma.shippingRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShippingRules and only return the `id`
     * const shippingRuleWithIdOnly = await prisma.shippingRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShippingRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ShippingRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShippingRule.
     * @param {ShippingRuleDeleteArgs} args - Arguments to delete one ShippingRule.
     * @example
     * // Delete one ShippingRule
     * const ShippingRule = await prisma.shippingRule.delete({
     *   where: {
     *     // ... filter to delete one ShippingRule
     *   }
     * })
     * 
     */
    delete<T extends ShippingRuleDeleteArgs>(args: SelectSubset<T, ShippingRuleDeleteArgs<ExtArgs>>): Prisma__ShippingRuleClient<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShippingRule.
     * @param {ShippingRuleUpdateArgs} args - Arguments to update one ShippingRule.
     * @example
     * // Update one ShippingRule
     * const shippingRule = await prisma.shippingRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShippingRuleUpdateArgs>(args: SelectSubset<T, ShippingRuleUpdateArgs<ExtArgs>>): Prisma__ShippingRuleClient<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShippingRules.
     * @param {ShippingRuleDeleteManyArgs} args - Arguments to filter ShippingRules to delete.
     * @example
     * // Delete a few ShippingRules
     * const { count } = await prisma.shippingRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShippingRuleDeleteManyArgs>(args?: SelectSubset<T, ShippingRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShippingRules
     * const shippingRule = await prisma.shippingRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShippingRuleUpdateManyArgs>(args: SelectSubset<T, ShippingRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingRules and returns the data updated in the database.
     * @param {ShippingRuleUpdateManyAndReturnArgs} args - Arguments to update many ShippingRules.
     * @example
     * // Update many ShippingRules
     * const shippingRule = await prisma.shippingRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShippingRules and only return the `id`
     * const shippingRuleWithIdOnly = await prisma.shippingRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShippingRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ShippingRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShippingRule.
     * @param {ShippingRuleUpsertArgs} args - Arguments to update or create a ShippingRule.
     * @example
     * // Update or create a ShippingRule
     * const shippingRule = await prisma.shippingRule.upsert({
     *   create: {
     *     // ... data to create a ShippingRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShippingRule we want to update
     *   }
     * })
     */
    upsert<T extends ShippingRuleUpsertArgs>(args: SelectSubset<T, ShippingRuleUpsertArgs<ExtArgs>>): Prisma__ShippingRuleClient<$Result.GetResult<Prisma.$ShippingRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShippingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingRuleCountArgs} args - Arguments to filter ShippingRules to count.
     * @example
     * // Count the number of ShippingRules
     * const count = await prisma.shippingRule.count({
     *   where: {
     *     // ... the filter for the ShippingRules we want to count
     *   }
     * })
    **/
    count<T extends ShippingRuleCountArgs>(
      args?: Subset<T, ShippingRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShippingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShippingRuleAggregateArgs>(args: Subset<T, ShippingRuleAggregateArgs>): Prisma.PrismaPromise<GetShippingRuleAggregateType<T>>

    /**
     * Group by ShippingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShippingRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippingRuleGroupByArgs['orderBy'] }
        : { orderBy?: ShippingRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShippingRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShippingRule model
   */
  readonly fields: ShippingRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShippingRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShippingRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShippingRule model
   */
  interface ShippingRuleFieldRefs {
    readonly id: FieldRef<"ShippingRule", 'String'>
    readonly name: FieldRef<"ShippingRule", 'String'>
    readonly region: FieldRef<"ShippingRule", 'String'>
    readonly fee: FieldRef<"ShippingRule", 'Float'>
    readonly maxItems: FieldRef<"ShippingRule", 'Int'>
    readonly createdAt: FieldRef<"ShippingRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShippingRule findUnique
   */
  export type ShippingRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * Filter, which ShippingRule to fetch.
     */
    where: ShippingRuleWhereUniqueInput
  }

  /**
   * ShippingRule findUniqueOrThrow
   */
  export type ShippingRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * Filter, which ShippingRule to fetch.
     */
    where: ShippingRuleWhereUniqueInput
  }

  /**
   * ShippingRule findFirst
   */
  export type ShippingRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * Filter, which ShippingRule to fetch.
     */
    where?: ShippingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingRules to fetch.
     */
    orderBy?: ShippingRuleOrderByWithRelationInput | ShippingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingRules.
     */
    cursor?: ShippingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingRules.
     */
    distinct?: ShippingRuleScalarFieldEnum | ShippingRuleScalarFieldEnum[]
  }

  /**
   * ShippingRule findFirstOrThrow
   */
  export type ShippingRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * Filter, which ShippingRule to fetch.
     */
    where?: ShippingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingRules to fetch.
     */
    orderBy?: ShippingRuleOrderByWithRelationInput | ShippingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingRules.
     */
    cursor?: ShippingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingRules.
     */
    distinct?: ShippingRuleScalarFieldEnum | ShippingRuleScalarFieldEnum[]
  }

  /**
   * ShippingRule findMany
   */
  export type ShippingRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * Filter, which ShippingRules to fetch.
     */
    where?: ShippingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingRules to fetch.
     */
    orderBy?: ShippingRuleOrderByWithRelationInput | ShippingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShippingRules.
     */
    cursor?: ShippingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingRules.
     */
    skip?: number
    distinct?: ShippingRuleScalarFieldEnum | ShippingRuleScalarFieldEnum[]
  }

  /**
   * ShippingRule create
   */
  export type ShippingRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * The data needed to create a ShippingRule.
     */
    data: XOR<ShippingRuleCreateInput, ShippingRuleUncheckedCreateInput>
  }

  /**
   * ShippingRule createMany
   */
  export type ShippingRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShippingRules.
     */
    data: ShippingRuleCreateManyInput | ShippingRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShippingRule createManyAndReturn
   */
  export type ShippingRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * The data used to create many ShippingRules.
     */
    data: ShippingRuleCreateManyInput | ShippingRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShippingRule update
   */
  export type ShippingRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * The data needed to update a ShippingRule.
     */
    data: XOR<ShippingRuleUpdateInput, ShippingRuleUncheckedUpdateInput>
    /**
     * Choose, which ShippingRule to update.
     */
    where: ShippingRuleWhereUniqueInput
  }

  /**
   * ShippingRule updateMany
   */
  export type ShippingRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShippingRules.
     */
    data: XOR<ShippingRuleUpdateManyMutationInput, ShippingRuleUncheckedUpdateManyInput>
    /**
     * Filter which ShippingRules to update
     */
    where?: ShippingRuleWhereInput
    /**
     * Limit how many ShippingRules to update.
     */
    limit?: number
  }

  /**
   * ShippingRule updateManyAndReturn
   */
  export type ShippingRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * The data used to update ShippingRules.
     */
    data: XOR<ShippingRuleUpdateManyMutationInput, ShippingRuleUncheckedUpdateManyInput>
    /**
     * Filter which ShippingRules to update
     */
    where?: ShippingRuleWhereInput
    /**
     * Limit how many ShippingRules to update.
     */
    limit?: number
  }

  /**
   * ShippingRule upsert
   */
  export type ShippingRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * The filter to search for the ShippingRule to update in case it exists.
     */
    where: ShippingRuleWhereUniqueInput
    /**
     * In case the ShippingRule found by the `where` argument doesn't exist, create a new ShippingRule with this data.
     */
    create: XOR<ShippingRuleCreateInput, ShippingRuleUncheckedCreateInput>
    /**
     * In case the ShippingRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShippingRuleUpdateInput, ShippingRuleUncheckedUpdateInput>
  }

  /**
   * ShippingRule delete
   */
  export type ShippingRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
    /**
     * Filter which ShippingRule to delete.
     */
    where: ShippingRuleWhereUniqueInput
  }

  /**
   * ShippingRule deleteMany
   */
  export type ShippingRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingRules to delete
     */
    where?: ShippingRuleWhereInput
    /**
     * Limit how many ShippingRules to delete.
     */
    limit?: number
  }

  /**
   * ShippingRule without action
   */
  export type ShippingRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingRule
     */
    select?: ShippingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingRule
     */
    omit?: ShippingRuleOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    telegram: 'telegram',
    instagram: 'instagram',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contact: 'contact',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    size: 'size',
    color: 'color',
    condition: 'condition',
    purchasePrice: 'purchasePrice',
    salePrice: 'salePrice',
    profit: 'profit',
    supplierId: 'supplierId',
    shipmentGroupId: 'shipmentGroupId',
    dropId: 'dropId',
    createdAt: 'createdAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemImageScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    url: 'url',
    position: 'position',
    uploadedAt: 'uploadedAt'
  };

  export type ItemImageScalarFieldEnum = (typeof ItemImageScalarFieldEnum)[keyof typeof ItemImageScalarFieldEnum]


  export const ShipmentGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    totalItemCost: 'totalItemCost',
    totalShippingCost: 'totalShippingCost',
    averageCost: 'averageCost',
    createdAt: 'createdAt'
  };

  export type ShipmentGroupScalarFieldEnum = (typeof ShipmentGroupScalarFieldEnum)[keyof typeof ShipmentGroupScalarFieldEnum]


  export const ShipmentBatchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    destination: 'destination',
    status: 'status',
    trackingNumber: 'trackingNumber',
    shippedAt: 'shippedAt',
    createdAt: 'createdAt'
  };

  export type ShipmentBatchScalarFieldEnum = (typeof ShipmentBatchScalarFieldEnum)[keyof typeof ShipmentBatchScalarFieldEnum]


  export const DropScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt'
  };

  export type DropScalarFieldEnum = (typeof DropScalarFieldEnum)[keyof typeof DropScalarFieldEnum]


  export const CollaboratorAssignmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dropId: 'dropId',
    itemId: 'itemId',
    type: 'type',
    value: 'value'
  };

  export type CollaboratorAssignmentScalarFieldEnum = (typeof CollaboratorAssignmentScalarFieldEnum)[keyof typeof CollaboratorAssignmentScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    buyerId: 'buyerId',
    shippingFee: 'shippingFee',
    totalAmount: 'totalAmount',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    paymentRef: 'paymentRef',
    proofImage: 'proofImage',
    invoiceUrl: 'invoiceUrl',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const BuyerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    telegram: 'telegram',
    instagram: 'instagram',
    address: 'address',
    address2: 'address2',
    postalCode: 'postalCode',
    createdAt: 'createdAt'
  };

  export type BuyerScalarFieldEnum = (typeof BuyerScalarFieldEnum)[keyof typeof BuyerScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    itemId: 'itemId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const RentalScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    buyerId: 'buyerId',
    startDate: 'startDate',
    endDate: 'endDate',
    deposit: 'deposit',
    rentalFee: 'rentalFee',
    penalty: 'penalty',
    returnedAt: 'returnedAt',
    returnNotes: 'returnNotes',
    status: 'status'
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum]


  export const ShippingRuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    region: 'region',
    fee: 'fee',
    maxItems: 'maxItems',
    createdAt: 'createdAt'
  };

  export type ShippingRuleScalarFieldEnum = (typeof ShippingRuleScalarFieldEnum)[keyof typeof ShippingRuleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BatchStatus'
   */
  export type EnumBatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchStatus'>
    


  /**
   * Reference to a field of type 'BatchStatus[]'
   */
  export type ListEnumBatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BatchStatus[]'>
    


  /**
   * Reference to a field of type 'CommissionType'
   */
  export type EnumCommissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommissionType'>
    


  /**
   * Reference to a field of type 'CommissionType[]'
   */
  export type ListEnumCommissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommissionType[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'RentalStatus'
   */
  export type EnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus'>
    


  /**
   * Reference to a field of type 'RentalStatus[]'
   */
  export type ListEnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    telegram?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    rentals?: RentalListRelationFilter
    collaboratorOnDrops?: CollaboratorAssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    rentals?: RentalOrderByRelationAggregateInput
    collaboratorOnDrops?: CollaboratorAssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    telegram?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    rentals?: RentalListRelationFilter
    collaboratorOnDrops?: CollaboratorAssignmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegram?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    contact?: StringNullableFilter<"Supplier"> | string | null
    notes?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    items?: ItemListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    contact?: StringNullableFilter<"Supplier"> | string | null
    notes?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    items?: ItemListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    contact?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    size?: StringNullableFilter<"Item"> | string | null
    color?: StringNullableFilter<"Item"> | string | null
    condition?: StringNullableFilter<"Item"> | string | null
    purchasePrice?: FloatFilter<"Item"> | number
    salePrice?: FloatNullableFilter<"Item"> | number | null
    profit?: FloatNullableFilter<"Item"> | number | null
    supplierId?: StringNullableFilter<"Item"> | string | null
    shipmentGroupId?: StringNullableFilter<"Item"> | string | null
    dropId?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    shipmentGroup?: XOR<ShipmentGroupNullableScalarRelationFilter, ShipmentGroupWhereInput> | null
    drop?: XOR<DropNullableScalarRelationFilter, DropWhereInput> | null
    rental?: XOR<RentalNullableScalarRelationFilter, RentalWhereInput> | null
    orderItem?: XOR<OrderItemNullableScalarRelationFilter, OrderItemWhereInput> | null
    images?: ItemImageListRelationFilter
    ShipmentBatch?: ShipmentBatchListRelationFilter
    CollaboratorAssignment?: CollaboratorAssignmentListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    purchasePrice?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    profit?: SortOrderInput | SortOrder
    supplierId?: SortOrderInput | SortOrder
    shipmentGroupId?: SortOrderInput | SortOrder
    dropId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    shipmentGroup?: ShipmentGroupOrderByWithRelationInput
    drop?: DropOrderByWithRelationInput
    rental?: RentalOrderByWithRelationInput
    orderItem?: OrderItemOrderByWithRelationInput
    images?: ItemImageOrderByRelationAggregateInput
    ShipmentBatch?: ShipmentBatchOrderByRelationAggregateInput
    CollaboratorAssignment?: CollaboratorAssignmentOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    size?: StringNullableFilter<"Item"> | string | null
    color?: StringNullableFilter<"Item"> | string | null
    condition?: StringNullableFilter<"Item"> | string | null
    purchasePrice?: FloatFilter<"Item"> | number
    salePrice?: FloatNullableFilter<"Item"> | number | null
    profit?: FloatNullableFilter<"Item"> | number | null
    supplierId?: StringNullableFilter<"Item"> | string | null
    shipmentGroupId?: StringNullableFilter<"Item"> | string | null
    dropId?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    shipmentGroup?: XOR<ShipmentGroupNullableScalarRelationFilter, ShipmentGroupWhereInput> | null
    drop?: XOR<DropNullableScalarRelationFilter, DropWhereInput> | null
    rental?: XOR<RentalNullableScalarRelationFilter, RentalWhereInput> | null
    orderItem?: XOR<OrderItemNullableScalarRelationFilter, OrderItemWhereInput> | null
    images?: ItemImageListRelationFilter
    ShipmentBatch?: ShipmentBatchListRelationFilter
    CollaboratorAssignment?: CollaboratorAssignmentListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    purchasePrice?: SortOrder
    salePrice?: SortOrderInput | SortOrder
    profit?: SortOrderInput | SortOrder
    supplierId?: SortOrderInput | SortOrder
    shipmentGroupId?: SortOrderInput | SortOrder
    dropId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    description?: StringNullableWithAggregatesFilter<"Item"> | string | null
    size?: StringNullableWithAggregatesFilter<"Item"> | string | null
    color?: StringNullableWithAggregatesFilter<"Item"> | string | null
    condition?: StringNullableWithAggregatesFilter<"Item"> | string | null
    purchasePrice?: FloatWithAggregatesFilter<"Item"> | number
    salePrice?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    profit?: FloatNullableWithAggregatesFilter<"Item"> | number | null
    supplierId?: StringNullableWithAggregatesFilter<"Item"> | string | null
    shipmentGroupId?: StringNullableWithAggregatesFilter<"Item"> | string | null
    dropId?: StringNullableWithAggregatesFilter<"Item"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type ItemImageWhereInput = {
    AND?: ItemImageWhereInput | ItemImageWhereInput[]
    OR?: ItemImageWhereInput[]
    NOT?: ItemImageWhereInput | ItemImageWhereInput[]
    id?: StringFilter<"ItemImage"> | string
    itemId?: StringFilter<"ItemImage"> | string
    url?: StringFilter<"ItemImage"> | string
    position?: IntFilter<"ItemImage"> | number
    uploadedAt?: DateTimeFilter<"ItemImage"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ItemImageOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    url?: SortOrder
    position?: SortOrder
    uploadedAt?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type ItemImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemImageWhereInput | ItemImageWhereInput[]
    OR?: ItemImageWhereInput[]
    NOT?: ItemImageWhereInput | ItemImageWhereInput[]
    itemId?: StringFilter<"ItemImage"> | string
    url?: StringFilter<"ItemImage"> | string
    position?: IntFilter<"ItemImage"> | number
    uploadedAt?: DateTimeFilter<"ItemImage"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type ItemImageOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    url?: SortOrder
    position?: SortOrder
    uploadedAt?: SortOrder
    _count?: ItemImageCountOrderByAggregateInput
    _avg?: ItemImageAvgOrderByAggregateInput
    _max?: ItemImageMaxOrderByAggregateInput
    _min?: ItemImageMinOrderByAggregateInput
    _sum?: ItemImageSumOrderByAggregateInput
  }

  export type ItemImageScalarWhereWithAggregatesInput = {
    AND?: ItemImageScalarWhereWithAggregatesInput | ItemImageScalarWhereWithAggregatesInput[]
    OR?: ItemImageScalarWhereWithAggregatesInput[]
    NOT?: ItemImageScalarWhereWithAggregatesInput | ItemImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemImage"> | string
    itemId?: StringWithAggregatesFilter<"ItemImage"> | string
    url?: StringWithAggregatesFilter<"ItemImage"> | string
    position?: IntWithAggregatesFilter<"ItemImage"> | number
    uploadedAt?: DateTimeWithAggregatesFilter<"ItemImage"> | Date | string
  }

  export type ShipmentGroupWhereInput = {
    AND?: ShipmentGroupWhereInput | ShipmentGroupWhereInput[]
    OR?: ShipmentGroupWhereInput[]
    NOT?: ShipmentGroupWhereInput | ShipmentGroupWhereInput[]
    id?: StringFilter<"ShipmentGroup"> | string
    name?: StringFilter<"ShipmentGroup"> | string
    totalItemCost?: FloatFilter<"ShipmentGroup"> | number
    totalShippingCost?: FloatFilter<"ShipmentGroup"> | number
    averageCost?: FloatFilter<"ShipmentGroup"> | number
    createdAt?: DateTimeFilter<"ShipmentGroup"> | Date | string
    items?: ItemListRelationFilter
  }

  export type ShipmentGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    totalItemCost?: SortOrder
    totalShippingCost?: SortOrder
    averageCost?: SortOrder
    createdAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
  }

  export type ShipmentGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentGroupWhereInput | ShipmentGroupWhereInput[]
    OR?: ShipmentGroupWhereInput[]
    NOT?: ShipmentGroupWhereInput | ShipmentGroupWhereInput[]
    name?: StringFilter<"ShipmentGroup"> | string
    totalItemCost?: FloatFilter<"ShipmentGroup"> | number
    totalShippingCost?: FloatFilter<"ShipmentGroup"> | number
    averageCost?: FloatFilter<"ShipmentGroup"> | number
    createdAt?: DateTimeFilter<"ShipmentGroup"> | Date | string
    items?: ItemListRelationFilter
  }, "id">

  export type ShipmentGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    totalItemCost?: SortOrder
    totalShippingCost?: SortOrder
    averageCost?: SortOrder
    createdAt?: SortOrder
    _count?: ShipmentGroupCountOrderByAggregateInput
    _avg?: ShipmentGroupAvgOrderByAggregateInput
    _max?: ShipmentGroupMaxOrderByAggregateInput
    _min?: ShipmentGroupMinOrderByAggregateInput
    _sum?: ShipmentGroupSumOrderByAggregateInput
  }

  export type ShipmentGroupScalarWhereWithAggregatesInput = {
    AND?: ShipmentGroupScalarWhereWithAggregatesInput | ShipmentGroupScalarWhereWithAggregatesInput[]
    OR?: ShipmentGroupScalarWhereWithAggregatesInput[]
    NOT?: ShipmentGroupScalarWhereWithAggregatesInput | ShipmentGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShipmentGroup"> | string
    name?: StringWithAggregatesFilter<"ShipmentGroup"> | string
    totalItemCost?: FloatWithAggregatesFilter<"ShipmentGroup"> | number
    totalShippingCost?: FloatWithAggregatesFilter<"ShipmentGroup"> | number
    averageCost?: FloatWithAggregatesFilter<"ShipmentGroup"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ShipmentGroup"> | Date | string
  }

  export type ShipmentBatchWhereInput = {
    AND?: ShipmentBatchWhereInput | ShipmentBatchWhereInput[]
    OR?: ShipmentBatchWhereInput[]
    NOT?: ShipmentBatchWhereInput | ShipmentBatchWhereInput[]
    id?: StringFilter<"ShipmentBatch"> | string
    name?: StringFilter<"ShipmentBatch"> | string
    destination?: StringFilter<"ShipmentBatch"> | string
    status?: EnumBatchStatusFilter<"ShipmentBatch"> | $Enums.BatchStatus
    trackingNumber?: StringNullableFilter<"ShipmentBatch"> | string | null
    shippedAt?: DateTimeNullableFilter<"ShipmentBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"ShipmentBatch"> | Date | string
    items?: ItemListRelationFilter
  }

  export type ShipmentBatchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    shippedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
  }

  export type ShipmentBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentBatchWhereInput | ShipmentBatchWhereInput[]
    OR?: ShipmentBatchWhereInput[]
    NOT?: ShipmentBatchWhereInput | ShipmentBatchWhereInput[]
    name?: StringFilter<"ShipmentBatch"> | string
    destination?: StringFilter<"ShipmentBatch"> | string
    status?: EnumBatchStatusFilter<"ShipmentBatch"> | $Enums.BatchStatus
    trackingNumber?: StringNullableFilter<"ShipmentBatch"> | string | null
    shippedAt?: DateTimeNullableFilter<"ShipmentBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"ShipmentBatch"> | Date | string
    items?: ItemListRelationFilter
  }, "id">

  export type ShipmentBatchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    trackingNumber?: SortOrderInput | SortOrder
    shippedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ShipmentBatchCountOrderByAggregateInput
    _max?: ShipmentBatchMaxOrderByAggregateInput
    _min?: ShipmentBatchMinOrderByAggregateInput
  }

  export type ShipmentBatchScalarWhereWithAggregatesInput = {
    AND?: ShipmentBatchScalarWhereWithAggregatesInput | ShipmentBatchScalarWhereWithAggregatesInput[]
    OR?: ShipmentBatchScalarWhereWithAggregatesInput[]
    NOT?: ShipmentBatchScalarWhereWithAggregatesInput | ShipmentBatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShipmentBatch"> | string
    name?: StringWithAggregatesFilter<"ShipmentBatch"> | string
    destination?: StringWithAggregatesFilter<"ShipmentBatch"> | string
    status?: EnumBatchStatusWithAggregatesFilter<"ShipmentBatch"> | $Enums.BatchStatus
    trackingNumber?: StringNullableWithAggregatesFilter<"ShipmentBatch"> | string | null
    shippedAt?: DateTimeNullableWithAggregatesFilter<"ShipmentBatch"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ShipmentBatch"> | Date | string
  }

  export type DropWhereInput = {
    AND?: DropWhereInput | DropWhereInput[]
    OR?: DropWhereInput[]
    NOT?: DropWhereInput | DropWhereInput[]
    id?: StringFilter<"Drop"> | string
    name?: StringFilter<"Drop"> | string
    startedAt?: DateTimeFilter<"Drop"> | Date | string
    endedAt?: DateTimeFilter<"Drop"> | Date | string
    createdAt?: DateTimeFilter<"Drop"> | Date | string
    items?: ItemListRelationFilter
    collaborators?: CollaboratorAssignmentListRelationFilter
  }

  export type DropOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
    collaborators?: CollaboratorAssignmentOrderByRelationAggregateInput
  }

  export type DropWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DropWhereInput | DropWhereInput[]
    OR?: DropWhereInput[]
    NOT?: DropWhereInput | DropWhereInput[]
    name?: StringFilter<"Drop"> | string
    startedAt?: DateTimeFilter<"Drop"> | Date | string
    endedAt?: DateTimeFilter<"Drop"> | Date | string
    createdAt?: DateTimeFilter<"Drop"> | Date | string
    items?: ItemListRelationFilter
    collaborators?: CollaboratorAssignmentListRelationFilter
  }, "id">

  export type DropOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    _count?: DropCountOrderByAggregateInput
    _max?: DropMaxOrderByAggregateInput
    _min?: DropMinOrderByAggregateInput
  }

  export type DropScalarWhereWithAggregatesInput = {
    AND?: DropScalarWhereWithAggregatesInput | DropScalarWhereWithAggregatesInput[]
    OR?: DropScalarWhereWithAggregatesInput[]
    NOT?: DropScalarWhereWithAggregatesInput | DropScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drop"> | string
    name?: StringWithAggregatesFilter<"Drop"> | string
    startedAt?: DateTimeWithAggregatesFilter<"Drop"> | Date | string
    endedAt?: DateTimeWithAggregatesFilter<"Drop"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Drop"> | Date | string
  }

  export type CollaboratorAssignmentWhereInput = {
    AND?: CollaboratorAssignmentWhereInput | CollaboratorAssignmentWhereInput[]
    OR?: CollaboratorAssignmentWhereInput[]
    NOT?: CollaboratorAssignmentWhereInput | CollaboratorAssignmentWhereInput[]
    id?: StringFilter<"CollaboratorAssignment"> | string
    userId?: StringFilter<"CollaboratorAssignment"> | string
    dropId?: StringNullableFilter<"CollaboratorAssignment"> | string | null
    itemId?: StringNullableFilter<"CollaboratorAssignment"> | string | null
    type?: EnumCommissionTypeFilter<"CollaboratorAssignment"> | $Enums.CommissionType
    value?: FloatFilter<"CollaboratorAssignment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    drop?: XOR<DropNullableScalarRelationFilter, DropWhereInput> | null
    item?: XOR<ItemNullableScalarRelationFilter, ItemWhereInput> | null
  }

  export type CollaboratorAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dropId?: SortOrderInput | SortOrder
    itemId?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    user?: UserOrderByWithRelationInput
    drop?: DropOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type CollaboratorAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollaboratorAssignmentWhereInput | CollaboratorAssignmentWhereInput[]
    OR?: CollaboratorAssignmentWhereInput[]
    NOT?: CollaboratorAssignmentWhereInput | CollaboratorAssignmentWhereInput[]
    userId?: StringFilter<"CollaboratorAssignment"> | string
    dropId?: StringNullableFilter<"CollaboratorAssignment"> | string | null
    itemId?: StringNullableFilter<"CollaboratorAssignment"> | string | null
    type?: EnumCommissionTypeFilter<"CollaboratorAssignment"> | $Enums.CommissionType
    value?: FloatFilter<"CollaboratorAssignment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    drop?: XOR<DropNullableScalarRelationFilter, DropWhereInput> | null
    item?: XOR<ItemNullableScalarRelationFilter, ItemWhereInput> | null
  }, "id">

  export type CollaboratorAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dropId?: SortOrderInput | SortOrder
    itemId?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    _count?: CollaboratorAssignmentCountOrderByAggregateInput
    _avg?: CollaboratorAssignmentAvgOrderByAggregateInput
    _max?: CollaboratorAssignmentMaxOrderByAggregateInput
    _min?: CollaboratorAssignmentMinOrderByAggregateInput
    _sum?: CollaboratorAssignmentSumOrderByAggregateInput
  }

  export type CollaboratorAssignmentScalarWhereWithAggregatesInput = {
    AND?: CollaboratorAssignmentScalarWhereWithAggregatesInput | CollaboratorAssignmentScalarWhereWithAggregatesInput[]
    OR?: CollaboratorAssignmentScalarWhereWithAggregatesInput[]
    NOT?: CollaboratorAssignmentScalarWhereWithAggregatesInput | CollaboratorAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollaboratorAssignment"> | string
    userId?: StringWithAggregatesFilter<"CollaboratorAssignment"> | string
    dropId?: StringNullableWithAggregatesFilter<"CollaboratorAssignment"> | string | null
    itemId?: StringNullableWithAggregatesFilter<"CollaboratorAssignment"> | string | null
    type?: EnumCommissionTypeWithAggregatesFilter<"CollaboratorAssignment"> | $Enums.CommissionType
    value?: FloatWithAggregatesFilter<"CollaboratorAssignment"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    buyerId?: StringFilter<"Order"> | string
    shippingFee?: FloatFilter<"Order"> | number
    totalAmount?: FloatFilter<"Order"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Order"> | $Enums.PaymentMethod | null
    paymentRef?: StringNullableFilter<"Order"> | string | null
    proofImage?: StringNullableFilter<"Order"> | string | null
    invoiceUrl?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    buyer?: XOR<BuyerScalarRelationFilter, BuyerWhereInput>
    orderItems?: OrderItemListRelationFilter
    User?: UserListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    buyerId?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentRef?: SortOrderInput | SortOrder
    proofImage?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    buyer?: BuyerOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    buyerId?: StringFilter<"Order"> | string
    shippingFee?: FloatFilter<"Order"> | number
    totalAmount?: FloatFilter<"Order"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Order"> | $Enums.PaymentMethod | null
    paymentRef?: StringNullableFilter<"Order"> | string | null
    proofImage?: StringNullableFilter<"Order"> | string | null
    invoiceUrl?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    buyer?: XOR<BuyerScalarRelationFilter, BuyerWhereInput>
    orderItems?: OrderItemListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    buyerId?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentRef?: SortOrderInput | SortOrder
    proofImage?: SortOrderInput | SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    buyerId?: StringWithAggregatesFilter<"Order"> | string
    shippingFee?: FloatWithAggregatesFilter<"Order"> | number
    totalAmount?: FloatWithAggregatesFilter<"Order"> | number
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Order"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodNullableWithAggregatesFilter<"Order"> | $Enums.PaymentMethod | null
    paymentRef?: StringNullableWithAggregatesFilter<"Order"> | string | null
    proofImage?: StringNullableWithAggregatesFilter<"Order"> | string | null
    invoiceUrl?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type BuyerWhereInput = {
    AND?: BuyerWhereInput | BuyerWhereInput[]
    OR?: BuyerWhereInput[]
    NOT?: BuyerWhereInput | BuyerWhereInput[]
    id?: StringFilter<"Buyer"> | string
    name?: StringFilter<"Buyer"> | string
    email?: StringNullableFilter<"Buyer"> | string | null
    phone?: StringNullableFilter<"Buyer"> | string | null
    telegram?: StringNullableFilter<"Buyer"> | string | null
    instagram?: StringNullableFilter<"Buyer"> | string | null
    address?: StringNullableFilter<"Buyer"> | string | null
    address2?: StringNullableFilter<"Buyer"> | string | null
    postalCode?: StringNullableFilter<"Buyer"> | string | null
    createdAt?: DateTimeFilter<"Buyer"> | Date | string
    orders?: OrderListRelationFilter
    rentals?: RentalListRelationFilter
  }

  export type BuyerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    rentals?: RentalOrderByRelationAggregateInput
  }

  export type BuyerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BuyerWhereInput | BuyerWhereInput[]
    OR?: BuyerWhereInput[]
    NOT?: BuyerWhereInput | BuyerWhereInput[]
    name?: StringFilter<"Buyer"> | string
    email?: StringNullableFilter<"Buyer"> | string | null
    phone?: StringNullableFilter<"Buyer"> | string | null
    telegram?: StringNullableFilter<"Buyer"> | string | null
    instagram?: StringNullableFilter<"Buyer"> | string | null
    address?: StringNullableFilter<"Buyer"> | string | null
    address2?: StringNullableFilter<"Buyer"> | string | null
    postalCode?: StringNullableFilter<"Buyer"> | string | null
    createdAt?: DateTimeFilter<"Buyer"> | Date | string
    orders?: OrderListRelationFilter
    rentals?: RentalListRelationFilter
  }, "id">

  export type BuyerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BuyerCountOrderByAggregateInput
    _max?: BuyerMaxOrderByAggregateInput
    _min?: BuyerMinOrderByAggregateInput
  }

  export type BuyerScalarWhereWithAggregatesInput = {
    AND?: BuyerScalarWhereWithAggregatesInput | BuyerScalarWhereWithAggregatesInput[]
    OR?: BuyerScalarWhereWithAggregatesInput[]
    NOT?: BuyerScalarWhereWithAggregatesInput | BuyerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Buyer"> | string
    name?: StringWithAggregatesFilter<"Buyer"> | string
    email?: StringNullableWithAggregatesFilter<"Buyer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Buyer"> | string | null
    telegram?: StringNullableWithAggregatesFilter<"Buyer"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"Buyer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Buyer"> | string | null
    address2?: StringNullableWithAggregatesFilter<"Buyer"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Buyer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Buyer"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    itemId?: StringFilter<"OrderItem"> | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    item?: ItemOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemId?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "itemId">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    itemId?: StringWithAggregatesFilter<"OrderItem"> | string
  }

  export type RentalWhereInput = {
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    id?: StringFilter<"Rental"> | string
    itemId?: StringFilter<"Rental"> | string
    buyerId?: StringFilter<"Rental"> | string
    startDate?: DateTimeFilter<"Rental"> | Date | string
    endDate?: DateTimeFilter<"Rental"> | Date | string
    deposit?: FloatFilter<"Rental"> | number
    rentalFee?: FloatFilter<"Rental"> | number
    penalty?: FloatNullableFilter<"Rental"> | number | null
    returnedAt?: DateTimeNullableFilter<"Rental"> | Date | string | null
    returnNotes?: StringNullableFilter<"Rental"> | string | null
    status?: EnumRentalStatusFilter<"Rental"> | $Enums.RentalStatus
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    buyer?: XOR<BuyerScalarRelationFilter, BuyerWhereInput>
    User?: UserListRelationFilter
  }

  export type RentalOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    buyerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deposit?: SortOrder
    rentalFee?: SortOrder
    penalty?: SortOrderInput | SortOrder
    returnedAt?: SortOrderInput | SortOrder
    returnNotes?: SortOrderInput | SortOrder
    status?: SortOrder
    item?: ItemOrderByWithRelationInput
    buyer?: BuyerOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type RentalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemId?: string
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    buyerId?: StringFilter<"Rental"> | string
    startDate?: DateTimeFilter<"Rental"> | Date | string
    endDate?: DateTimeFilter<"Rental"> | Date | string
    deposit?: FloatFilter<"Rental"> | number
    rentalFee?: FloatFilter<"Rental"> | number
    penalty?: FloatNullableFilter<"Rental"> | number | null
    returnedAt?: DateTimeNullableFilter<"Rental"> | Date | string | null
    returnNotes?: StringNullableFilter<"Rental"> | string | null
    status?: EnumRentalStatusFilter<"Rental"> | $Enums.RentalStatus
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    buyer?: XOR<BuyerScalarRelationFilter, BuyerWhereInput>
    User?: UserListRelationFilter
  }, "id" | "itemId">

  export type RentalOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    buyerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deposit?: SortOrder
    rentalFee?: SortOrder
    penalty?: SortOrderInput | SortOrder
    returnedAt?: SortOrderInput | SortOrder
    returnNotes?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: RentalCountOrderByAggregateInput
    _avg?: RentalAvgOrderByAggregateInput
    _max?: RentalMaxOrderByAggregateInput
    _min?: RentalMinOrderByAggregateInput
    _sum?: RentalSumOrderByAggregateInput
  }

  export type RentalScalarWhereWithAggregatesInput = {
    AND?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    OR?: RentalScalarWhereWithAggregatesInput[]
    NOT?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rental"> | string
    itemId?: StringWithAggregatesFilter<"Rental"> | string
    buyerId?: StringWithAggregatesFilter<"Rental"> | string
    startDate?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    deposit?: FloatWithAggregatesFilter<"Rental"> | number
    rentalFee?: FloatWithAggregatesFilter<"Rental"> | number
    penalty?: FloatNullableWithAggregatesFilter<"Rental"> | number | null
    returnedAt?: DateTimeNullableWithAggregatesFilter<"Rental"> | Date | string | null
    returnNotes?: StringNullableWithAggregatesFilter<"Rental"> | string | null
    status?: EnumRentalStatusWithAggregatesFilter<"Rental"> | $Enums.RentalStatus
  }

  export type ShippingRuleWhereInput = {
    AND?: ShippingRuleWhereInput | ShippingRuleWhereInput[]
    OR?: ShippingRuleWhereInput[]
    NOT?: ShippingRuleWhereInput | ShippingRuleWhereInput[]
    id?: StringFilter<"ShippingRule"> | string
    name?: StringFilter<"ShippingRule"> | string
    region?: StringFilter<"ShippingRule"> | string
    fee?: FloatFilter<"ShippingRule"> | number
    maxItems?: IntNullableFilter<"ShippingRule"> | number | null
    createdAt?: DateTimeFilter<"ShippingRule"> | Date | string
  }

  export type ShippingRuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    fee?: SortOrder
    maxItems?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ShippingRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShippingRuleWhereInput | ShippingRuleWhereInput[]
    OR?: ShippingRuleWhereInput[]
    NOT?: ShippingRuleWhereInput | ShippingRuleWhereInput[]
    name?: StringFilter<"ShippingRule"> | string
    region?: StringFilter<"ShippingRule"> | string
    fee?: FloatFilter<"ShippingRule"> | number
    maxItems?: IntNullableFilter<"ShippingRule"> | number | null
    createdAt?: DateTimeFilter<"ShippingRule"> | Date | string
  }, "id">

  export type ShippingRuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    fee?: SortOrder
    maxItems?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ShippingRuleCountOrderByAggregateInput
    _avg?: ShippingRuleAvgOrderByAggregateInput
    _max?: ShippingRuleMaxOrderByAggregateInput
    _min?: ShippingRuleMinOrderByAggregateInput
    _sum?: ShippingRuleSumOrderByAggregateInput
  }

  export type ShippingRuleScalarWhereWithAggregatesInput = {
    AND?: ShippingRuleScalarWhereWithAggregatesInput | ShippingRuleScalarWhereWithAggregatesInput[]
    OR?: ShippingRuleScalarWhereWithAggregatesInput[]
    NOT?: ShippingRuleScalarWhereWithAggregatesInput | ShippingRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShippingRule"> | string
    name?: StringWithAggregatesFilter<"ShippingRule"> | string
    region?: StringWithAggregatesFilter<"ShippingRule"> | string
    fee?: FloatWithAggregatesFilter<"ShippingRule"> | number
    maxItems?: IntNullableWithAggregatesFilter<"ShippingRule"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ShippingRule"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    rentals?: RentalCreateNestedManyWithoutUserInput
    collaboratorOnDrops?: CollaboratorAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    rentals?: RentalUncheckedCreateNestedManyWithoutUserInput
    collaboratorOnDrops?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    rentals?: RentalUpdateManyWithoutUserNestedInput
    collaboratorOnDrops?: CollaboratorAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutUserNestedInput
    collaboratorOnDrops?: CollaboratorAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    contact?: string | null
    notes?: string | null
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    contact?: string | null
    notes?: string | null
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    contact?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutItemsInput
    shipmentGroup?: ShipmentGroupCreateNestedOneWithoutItemsInput
    drop?: DropCreateNestedOneWithoutItemsInput
    rental?: RentalCreateNestedOneWithoutItemInput
    orderItem?: OrderItemCreateNestedOneWithoutItemInput
    images?: ItemImageCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    shipmentGroupId?: string | null
    dropId?: string | null
    createdAt?: Date | string
    rental?: RentalUncheckedCreateNestedOneWithoutItemInput
    orderItem?: OrderItemUncheckedCreateNestedOneWithoutItemInput
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchUncheckedCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutItemsNestedInput
    shipmentGroup?: ShipmentGroupUpdateOneWithoutItemsNestedInput
    drop?: DropUpdateOneWithoutItemsNestedInput
    rental?: RentalUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUpdateOneWithoutItemNestedInput
    images?: ItemImageUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: RentalUncheckedUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUncheckedUpdateOneWithoutItemNestedInput
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUncheckedUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    shipmentGroupId?: string | null
    dropId?: string | null
    createdAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageCreateInput = {
    id?: string
    url: string
    position: number
    uploadedAt?: Date | string
    item: ItemCreateNestedOneWithoutImagesInput
  }

  export type ItemImageUncheckedCreateInput = {
    id?: string
    itemId: string
    url: string
    position: number
    uploadedAt?: Date | string
  }

  export type ItemImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ItemImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageCreateManyInput = {
    id?: string
    itemId: string
    url: string
    position: number
    uploadedAt?: Date | string
  }

  export type ItemImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentGroupCreateInput = {
    id?: string
    name: string
    totalItemCost: number
    totalShippingCost: number
    averageCost: number
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutShipmentGroupInput
  }

  export type ShipmentGroupUncheckedCreateInput = {
    id?: string
    name: string
    totalItemCost: number
    totalShippingCost: number
    averageCost: number
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutShipmentGroupInput
  }

  export type ShipmentGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalItemCost?: FloatFieldUpdateOperationsInput | number
    totalShippingCost?: FloatFieldUpdateOperationsInput | number
    averageCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutShipmentGroupNestedInput
  }

  export type ShipmentGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalItemCost?: FloatFieldUpdateOperationsInput | number
    totalShippingCost?: FloatFieldUpdateOperationsInput | number
    averageCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutShipmentGroupNestedInput
  }

  export type ShipmentGroupCreateManyInput = {
    id?: string
    name: string
    totalItemCost: number
    totalShippingCost: number
    averageCost: number
    createdAt?: Date | string
  }

  export type ShipmentGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalItemCost?: FloatFieldUpdateOperationsInput | number
    totalShippingCost?: FloatFieldUpdateOperationsInput | number
    averageCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalItemCost?: FloatFieldUpdateOperationsInput | number
    totalShippingCost?: FloatFieldUpdateOperationsInput | number
    averageCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentBatchCreateInput = {
    id?: string
    name: string
    destination: string
    status: $Enums.BatchStatus
    trackingNumber?: string | null
    shippedAt?: Date | string | null
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutShipmentBatchInput
  }

  export type ShipmentBatchUncheckedCreateInput = {
    id?: string
    name: string
    destination: string
    status: $Enums.BatchStatus
    trackingNumber?: string | null
    shippedAt?: Date | string | null
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutShipmentBatchInput
  }

  export type ShipmentBatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutShipmentBatchNestedInput
  }

  export type ShipmentBatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutShipmentBatchNestedInput
  }

  export type ShipmentBatchCreateManyInput = {
    id?: string
    name: string
    destination: string
    status: $Enums.BatchStatus
    trackingNumber?: string | null
    shippedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ShipmentBatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentBatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DropCreateInput = {
    id?: string
    name: string
    startedAt: Date | string
    endedAt: Date | string
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutDropInput
    collaborators?: CollaboratorAssignmentCreateNestedManyWithoutDropInput
  }

  export type DropUncheckedCreateInput = {
    id?: string
    name: string
    startedAt: Date | string
    endedAt: Date | string
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutDropInput
    collaborators?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutDropInput
  }

  export type DropUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutDropNestedInput
    collaborators?: CollaboratorAssignmentUpdateManyWithoutDropNestedInput
  }

  export type DropUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutDropNestedInput
    collaborators?: CollaboratorAssignmentUncheckedUpdateManyWithoutDropNestedInput
  }

  export type DropCreateManyInput = {
    id?: string
    name: string
    startedAt: Date | string
    endedAt: Date | string
    createdAt?: Date | string
  }

  export type DropUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DropUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorAssignmentCreateInput = {
    id?: string
    type: $Enums.CommissionType
    value: number
    user: UserCreateNestedOneWithoutCollaboratorOnDropsInput
    drop?: DropCreateNestedOneWithoutCollaboratorsInput
    item?: ItemCreateNestedOneWithoutCollaboratorAssignmentInput
  }

  export type CollaboratorAssignmentUncheckedCreateInput = {
    id?: string
    userId: string
    dropId?: string | null
    itemId?: string | null
    type: $Enums.CommissionType
    value: number
  }

  export type CollaboratorAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCollaboratorOnDropsNestedInput
    drop?: DropUpdateOneWithoutCollaboratorsNestedInput
    item?: ItemUpdateOneWithoutCollaboratorAssignmentNestedInput
  }

  export type CollaboratorAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type CollaboratorAssignmentCreateManyInput = {
    id?: string
    userId: string
    dropId?: string | null
    itemId?: string | null
    type: $Enums.CommissionType
    value: number
  }

  export type CollaboratorAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type CollaboratorAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    id?: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    buyer: BuyerCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    User?: UserCreateNestedManyWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    buyerId: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    User?: UserUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    User?: UserUpdateManyWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    User?: UserUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    buyerId: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuyerCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    address?: string | null
    address2?: string | null
    postalCode?: string | null
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutBuyerInput
    rentals?: RentalCreateNestedManyWithoutBuyerInput
  }

  export type BuyerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    address?: string | null
    address2?: string | null
    postalCode?: string | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    rentals?: RentalUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type BuyerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    rentals?: RentalUpdateManyWithoutBuyerNestedInput
  }

  export type BuyerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type BuyerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    address?: string | null
    address2?: string | null
    postalCode?: string | null
    createdAt?: Date | string
  }

  export type BuyerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuyerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    item: ItemCreateNestedOneWithoutOrderItemInput
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    itemId: string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: ItemUpdateOneRequiredWithoutOrderItemNestedInput
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    itemId: string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type RentalCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
    item: ItemCreateNestedOneWithoutRentalInput
    buyer: BuyerCreateNestedOneWithoutRentalsInput
    User?: UserCreateNestedManyWithoutRentalsInput
  }

  export type RentalUncheckedCreateInput = {
    id?: string
    itemId: string
    buyerId: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
    User?: UserUncheckedCreateNestedManyWithoutRentalsInput
  }

  export type RentalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    item?: ItemUpdateOneRequiredWithoutRentalNestedInput
    buyer?: BuyerUpdateOneRequiredWithoutRentalsNestedInput
    User?: UserUpdateManyWithoutRentalsNestedInput
  }

  export type RentalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    User?: UserUncheckedUpdateManyWithoutRentalsNestedInput
  }

  export type RentalCreateManyInput = {
    id?: string
    itemId: string
    buyerId: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
  }

  export type RentalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
  }

  export type RentalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
  }

  export type ShippingRuleCreateInput = {
    id?: string
    name: string
    region: string
    fee: number
    maxItems?: number | null
    createdAt?: Date | string
  }

  export type ShippingRuleUncheckedCreateInput = {
    id?: string
    name: string
    region: string
    fee: number
    maxItems?: number | null
    createdAt?: Date | string
  }

  export type ShippingRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    fee?: FloatFieldUpdateOperationsInput | number
    maxItems?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    fee?: FloatFieldUpdateOperationsInput | number
    maxItems?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingRuleCreateManyInput = {
    id?: string
    name: string
    region: string
    fee: number
    maxItems?: number | null
    createdAt?: Date | string
  }

  export type ShippingRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    fee?: FloatFieldUpdateOperationsInput | number
    maxItems?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    fee?: FloatFieldUpdateOperationsInput | number
    maxItems?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type RentalListRelationFilter = {
    every?: RentalWhereInput
    some?: RentalWhereInput
    none?: RentalWhereInput
  }

  export type CollaboratorAssignmentListRelationFilter = {
    every?: CollaboratorAssignmentWhereInput
    some?: CollaboratorAssignmentWhereInput
    none?: CollaboratorAssignmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollaboratorAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    instagram?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    instagram?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    instagram?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SupplierNullableScalarRelationFilter = {
    is?: SupplierWhereInput | null
    isNot?: SupplierWhereInput | null
  }

  export type ShipmentGroupNullableScalarRelationFilter = {
    is?: ShipmentGroupWhereInput | null
    isNot?: ShipmentGroupWhereInput | null
  }

  export type DropNullableScalarRelationFilter = {
    is?: DropWhereInput | null
    isNot?: DropWhereInput | null
  }

  export type RentalNullableScalarRelationFilter = {
    is?: RentalWhereInput | null
    isNot?: RentalWhereInput | null
  }

  export type OrderItemNullableScalarRelationFilter = {
    is?: OrderItemWhereInput | null
    isNot?: OrderItemWhereInput | null
  }

  export type ItemImageListRelationFilter = {
    every?: ItemImageWhereInput
    some?: ItemImageWhereInput
    none?: ItemImageWhereInput
  }

  export type ShipmentBatchListRelationFilter = {
    every?: ShipmentBatchWhereInput
    some?: ShipmentBatchWhereInput
    none?: ShipmentBatchWhereInput
  }

  export type ItemImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentBatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    size?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    purchasePrice?: SortOrder
    salePrice?: SortOrder
    profit?: SortOrder
    supplierId?: SortOrder
    shipmentGroupId?: SortOrder
    dropId?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    purchasePrice?: SortOrder
    salePrice?: SortOrder
    profit?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    size?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    purchasePrice?: SortOrder
    salePrice?: SortOrder
    profit?: SortOrder
    supplierId?: SortOrder
    shipmentGroupId?: SortOrder
    dropId?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    size?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    purchasePrice?: SortOrder
    salePrice?: SortOrder
    profit?: SortOrder
    supplierId?: SortOrder
    shipmentGroupId?: SortOrder
    dropId?: SortOrder
    createdAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    purchasePrice?: SortOrder
    salePrice?: SortOrder
    profit?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ItemImageCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    url?: SortOrder
    position?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ItemImageAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ItemImageMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    url?: SortOrder
    position?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ItemImageMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    url?: SortOrder
    position?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ItemImageSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ShipmentGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalItemCost?: SortOrder
    totalShippingCost?: SortOrder
    averageCost?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipmentGroupAvgOrderByAggregateInput = {
    totalItemCost?: SortOrder
    totalShippingCost?: SortOrder
    averageCost?: SortOrder
  }

  export type ShipmentGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalItemCost?: SortOrder
    totalShippingCost?: SortOrder
    averageCost?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipmentGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalItemCost?: SortOrder
    totalShippingCost?: SortOrder
    averageCost?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipmentGroupSumOrderByAggregateInput = {
    totalItemCost?: SortOrder
    totalShippingCost?: SortOrder
    averageCost?: SortOrder
  }

  export type EnumBatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusFilter<$PrismaModel> | $Enums.BatchStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ShipmentBatchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    trackingNumber?: SortOrder
    shippedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipmentBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    trackingNumber?: SortOrder
    shippedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipmentBatchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    destination?: SortOrder
    status?: SortOrder
    trackingNumber?: SortOrder
    shippedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBatchStatusFilter<$PrismaModel>
    _max?: NestedEnumBatchStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DropCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DropMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DropMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCommissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionType | EnumCommissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommissionType[] | ListEnumCommissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommissionType[] | ListEnumCommissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommissionTypeFilter<$PrismaModel> | $Enums.CommissionType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ItemNullableScalarRelationFilter = {
    is?: ItemWhereInput | null
    isNot?: ItemWhereInput | null
  }

  export type CollaboratorAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dropId?: SortOrder
    itemId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type CollaboratorAssignmentAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type CollaboratorAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dropId?: SortOrder
    itemId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type CollaboratorAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dropId?: SortOrder
    itemId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type CollaboratorAssignmentSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumCommissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionType | EnumCommissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommissionType[] | ListEnumCommissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommissionType[] | ListEnumCommissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommissionTypeFilter<$PrismaModel>
    _max?: NestedEnumCommissionTypeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type BuyerScalarRelationFilter = {
    is?: BuyerWhereInput
    isNot?: BuyerWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentRef?: SortOrder
    proofImage?: SortOrder
    invoiceUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    shippingFee?: SortOrder
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentRef?: SortOrder
    proofImage?: SortOrder
    invoiceUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentRef?: SortOrder
    proofImage?: SortOrder
    invoiceUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    shippingFee?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type BuyerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    instagram?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    postalCode?: SortOrder
    createdAt?: SortOrder
  }

  export type BuyerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    instagram?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    postalCode?: SortOrder
    createdAt?: SortOrder
  }

  export type BuyerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    instagram?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    postalCode?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemId?: SortOrder
  }

  export type EnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type RentalCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    buyerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deposit?: SortOrder
    rentalFee?: SortOrder
    penalty?: SortOrder
    returnedAt?: SortOrder
    returnNotes?: SortOrder
    status?: SortOrder
  }

  export type RentalAvgOrderByAggregateInput = {
    deposit?: SortOrder
    rentalFee?: SortOrder
    penalty?: SortOrder
  }

  export type RentalMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    buyerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deposit?: SortOrder
    rentalFee?: SortOrder
    penalty?: SortOrder
    returnedAt?: SortOrder
    returnNotes?: SortOrder
    status?: SortOrder
  }

  export type RentalMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    buyerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deposit?: SortOrder
    rentalFee?: SortOrder
    penalty?: SortOrder
    returnedAt?: SortOrder
    returnNotes?: SortOrder
    status?: SortOrder
  }

  export type RentalSumOrderByAggregateInput = {
    deposit?: SortOrder
    rentalFee?: SortOrder
    penalty?: SortOrder
  }

  export type EnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ShippingRuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    fee?: SortOrder
    maxItems?: SortOrder
    createdAt?: SortOrder
  }

  export type ShippingRuleAvgOrderByAggregateInput = {
    fee?: SortOrder
    maxItems?: SortOrder
  }

  export type ShippingRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    fee?: SortOrder
    maxItems?: SortOrder
    createdAt?: SortOrder
  }

  export type ShippingRuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    region?: SortOrder
    fee?: SortOrder
    maxItems?: SortOrder
    createdAt?: SortOrder
  }

  export type ShippingRuleSumOrderByAggregateInput = {
    fee?: SortOrder
    maxItems?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RentalCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type CollaboratorAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutUserInput, CollaboratorAssignmentUncheckedCreateWithoutUserInput> | CollaboratorAssignmentCreateWithoutUserInput[] | CollaboratorAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutUserInput | CollaboratorAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: CollaboratorAssignmentCreateManyUserInputEnvelope
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type CollaboratorAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutUserInput, CollaboratorAssignmentUncheckedCreateWithoutUserInput> | CollaboratorAssignmentCreateWithoutUserInput[] | CollaboratorAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutUserInput | CollaboratorAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: CollaboratorAssignmentCreateManyUserInputEnvelope
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RentalUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type CollaboratorAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutUserInput, CollaboratorAssignmentUncheckedCreateWithoutUserInput> | CollaboratorAssignmentCreateWithoutUserInput[] | CollaboratorAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutUserInput | CollaboratorAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: CollaboratorAssignmentUpsertWithWhereUniqueWithoutUserInput | CollaboratorAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollaboratorAssignmentCreateManyUserInputEnvelope
    set?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    disconnect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    delete?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    update?: CollaboratorAssignmentUpdateWithWhereUniqueWithoutUserInput | CollaboratorAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollaboratorAssignmentUpdateManyWithWhereWithoutUserInput | CollaboratorAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollaboratorAssignmentScalarWhereInput | CollaboratorAssignmentScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type CollaboratorAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutUserInput, CollaboratorAssignmentUncheckedCreateWithoutUserInput> | CollaboratorAssignmentCreateWithoutUserInput[] | CollaboratorAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutUserInput | CollaboratorAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: CollaboratorAssignmentUpsertWithWhereUniqueWithoutUserInput | CollaboratorAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollaboratorAssignmentCreateManyUserInputEnvelope
    set?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    disconnect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    delete?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    update?: CollaboratorAssignmentUpdateWithWhereUniqueWithoutUserInput | CollaboratorAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollaboratorAssignmentUpdateManyWithWhereWithoutUserInput | CollaboratorAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollaboratorAssignmentScalarWhereInput | CollaboratorAssignmentScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput> | ItemCreateWithoutSupplierInput[] | ItemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutSupplierInput | ItemCreateOrConnectWithoutSupplierInput[]
    createMany?: ItemCreateManySupplierInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput> | ItemCreateWithoutSupplierInput[] | ItemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutSupplierInput | ItemCreateOrConnectWithoutSupplierInput[]
    createMany?: ItemCreateManySupplierInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput> | ItemCreateWithoutSupplierInput[] | ItemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutSupplierInput | ItemCreateOrConnectWithoutSupplierInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutSupplierInput | ItemUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ItemCreateManySupplierInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutSupplierInput | ItemUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutSupplierInput | ItemUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput> | ItemCreateWithoutSupplierInput[] | ItemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutSupplierInput | ItemCreateOrConnectWithoutSupplierInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutSupplierInput | ItemUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ItemCreateManySupplierInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutSupplierInput | ItemUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutSupplierInput | ItemUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutItemsInput = {
    create?: XOR<SupplierCreateWithoutItemsInput, SupplierUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutItemsInput
    connect?: SupplierWhereUniqueInput
  }

  export type ShipmentGroupCreateNestedOneWithoutItemsInput = {
    create?: XOR<ShipmentGroupCreateWithoutItemsInput, ShipmentGroupUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShipmentGroupCreateOrConnectWithoutItemsInput
    connect?: ShipmentGroupWhereUniqueInput
  }

  export type DropCreateNestedOneWithoutItemsInput = {
    create?: XOR<DropCreateWithoutItemsInput, DropUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DropCreateOrConnectWithoutItemsInput
    connect?: DropWhereUniqueInput
  }

  export type RentalCreateNestedOneWithoutItemInput = {
    create?: XOR<RentalCreateWithoutItemInput, RentalUncheckedCreateWithoutItemInput>
    connectOrCreate?: RentalCreateOrConnectWithoutItemInput
    connect?: RentalWhereUniqueInput
  }

  export type OrderItemCreateNestedOneWithoutItemInput = {
    create?: XOR<OrderItemCreateWithoutItemInput, OrderItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutItemInput
    connect?: OrderItemWhereUniqueInput
  }

  export type ItemImageCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
  }

  export type ShipmentBatchCreateNestedManyWithoutItemsInput = {
    create?: XOR<ShipmentBatchCreateWithoutItemsInput, ShipmentBatchUncheckedCreateWithoutItemsInput> | ShipmentBatchCreateWithoutItemsInput[] | ShipmentBatchUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: ShipmentBatchCreateOrConnectWithoutItemsInput | ShipmentBatchCreateOrConnectWithoutItemsInput[]
    connect?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
  }

  export type CollaboratorAssignmentCreateNestedManyWithoutItemInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutItemInput, CollaboratorAssignmentUncheckedCreateWithoutItemInput> | CollaboratorAssignmentCreateWithoutItemInput[] | CollaboratorAssignmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutItemInput | CollaboratorAssignmentCreateOrConnectWithoutItemInput[]
    createMany?: CollaboratorAssignmentCreateManyItemInputEnvelope
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<RentalCreateWithoutItemInput, RentalUncheckedCreateWithoutItemInput>
    connectOrCreate?: RentalCreateOrConnectWithoutItemInput
    connect?: RentalWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<OrderItemCreateWithoutItemInput, OrderItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutItemInput
    connect?: OrderItemWhereUniqueInput
  }

  export type ItemImageUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
  }

  export type ShipmentBatchUncheckedCreateNestedManyWithoutItemsInput = {
    create?: XOR<ShipmentBatchCreateWithoutItemsInput, ShipmentBatchUncheckedCreateWithoutItemsInput> | ShipmentBatchCreateWithoutItemsInput[] | ShipmentBatchUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: ShipmentBatchCreateOrConnectWithoutItemsInput | ShipmentBatchCreateOrConnectWithoutItemsInput[]
    connect?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
  }

  export type CollaboratorAssignmentUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutItemInput, CollaboratorAssignmentUncheckedCreateWithoutItemInput> | CollaboratorAssignmentCreateWithoutItemInput[] | CollaboratorAssignmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutItemInput | CollaboratorAssignmentCreateOrConnectWithoutItemInput[]
    createMany?: CollaboratorAssignmentCreateManyItemInputEnvelope
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplierUpdateOneWithoutItemsNestedInput = {
    create?: XOR<SupplierCreateWithoutItemsInput, SupplierUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutItemsInput
    upsert?: SupplierUpsertWithoutItemsInput
    disconnect?: SupplierWhereInput | boolean
    delete?: SupplierWhereInput | boolean
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutItemsInput, SupplierUpdateWithoutItemsInput>, SupplierUncheckedUpdateWithoutItemsInput>
  }

  export type ShipmentGroupUpdateOneWithoutItemsNestedInput = {
    create?: XOR<ShipmentGroupCreateWithoutItemsInput, ShipmentGroupUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ShipmentGroupCreateOrConnectWithoutItemsInput
    upsert?: ShipmentGroupUpsertWithoutItemsInput
    disconnect?: ShipmentGroupWhereInput | boolean
    delete?: ShipmentGroupWhereInput | boolean
    connect?: ShipmentGroupWhereUniqueInput
    update?: XOR<XOR<ShipmentGroupUpdateToOneWithWhereWithoutItemsInput, ShipmentGroupUpdateWithoutItemsInput>, ShipmentGroupUncheckedUpdateWithoutItemsInput>
  }

  export type DropUpdateOneWithoutItemsNestedInput = {
    create?: XOR<DropCreateWithoutItemsInput, DropUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DropCreateOrConnectWithoutItemsInput
    upsert?: DropUpsertWithoutItemsInput
    disconnect?: DropWhereInput | boolean
    delete?: DropWhereInput | boolean
    connect?: DropWhereUniqueInput
    update?: XOR<XOR<DropUpdateToOneWithWhereWithoutItemsInput, DropUpdateWithoutItemsInput>, DropUncheckedUpdateWithoutItemsInput>
  }

  export type RentalUpdateOneWithoutItemNestedInput = {
    create?: XOR<RentalCreateWithoutItemInput, RentalUncheckedCreateWithoutItemInput>
    connectOrCreate?: RentalCreateOrConnectWithoutItemInput
    upsert?: RentalUpsertWithoutItemInput
    disconnect?: RentalWhereInput | boolean
    delete?: RentalWhereInput | boolean
    connect?: RentalWhereUniqueInput
    update?: XOR<XOR<RentalUpdateToOneWithWhereWithoutItemInput, RentalUpdateWithoutItemInput>, RentalUncheckedUpdateWithoutItemInput>
  }

  export type OrderItemUpdateOneWithoutItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutItemInput, OrderItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutItemInput
    upsert?: OrderItemUpsertWithoutItemInput
    disconnect?: OrderItemWhereInput | boolean
    delete?: OrderItemWhereInput | boolean
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutItemInput, OrderItemUpdateWithoutItemInput>, OrderItemUncheckedUpdateWithoutItemInput>
  }

  export type ItemImageUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    upsert?: ItemImageUpsertWithWhereUniqueWithoutItemInput | ItemImageUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    set?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    disconnect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    delete?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    update?: ItemImageUpdateWithWhereUniqueWithoutItemInput | ItemImageUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemImageUpdateManyWithWhereWithoutItemInput | ItemImageUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
  }

  export type ShipmentBatchUpdateManyWithoutItemsNestedInput = {
    create?: XOR<ShipmentBatchCreateWithoutItemsInput, ShipmentBatchUncheckedCreateWithoutItemsInput> | ShipmentBatchCreateWithoutItemsInput[] | ShipmentBatchUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: ShipmentBatchCreateOrConnectWithoutItemsInput | ShipmentBatchCreateOrConnectWithoutItemsInput[]
    upsert?: ShipmentBatchUpsertWithWhereUniqueWithoutItemsInput | ShipmentBatchUpsertWithWhereUniqueWithoutItemsInput[]
    set?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
    disconnect?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
    delete?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
    connect?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
    update?: ShipmentBatchUpdateWithWhereUniqueWithoutItemsInput | ShipmentBatchUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: ShipmentBatchUpdateManyWithWhereWithoutItemsInput | ShipmentBatchUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: ShipmentBatchScalarWhereInput | ShipmentBatchScalarWhereInput[]
  }

  export type CollaboratorAssignmentUpdateManyWithoutItemNestedInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutItemInput, CollaboratorAssignmentUncheckedCreateWithoutItemInput> | CollaboratorAssignmentCreateWithoutItemInput[] | CollaboratorAssignmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutItemInput | CollaboratorAssignmentCreateOrConnectWithoutItemInput[]
    upsert?: CollaboratorAssignmentUpsertWithWhereUniqueWithoutItemInput | CollaboratorAssignmentUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: CollaboratorAssignmentCreateManyItemInputEnvelope
    set?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    disconnect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    delete?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    update?: CollaboratorAssignmentUpdateWithWhereUniqueWithoutItemInput | CollaboratorAssignmentUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: CollaboratorAssignmentUpdateManyWithWhereWithoutItemInput | CollaboratorAssignmentUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: CollaboratorAssignmentScalarWhereInput | CollaboratorAssignmentScalarWhereInput[]
  }

  export type RentalUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<RentalCreateWithoutItemInput, RentalUncheckedCreateWithoutItemInput>
    connectOrCreate?: RentalCreateOrConnectWithoutItemInput
    upsert?: RentalUpsertWithoutItemInput
    disconnect?: RentalWhereInput | boolean
    delete?: RentalWhereInput | boolean
    connect?: RentalWhereUniqueInput
    update?: XOR<XOR<RentalUpdateToOneWithWhereWithoutItemInput, RentalUpdateWithoutItemInput>, RentalUncheckedUpdateWithoutItemInput>
  }

  export type OrderItemUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutItemInput, OrderItemUncheckedCreateWithoutItemInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutItemInput
    upsert?: OrderItemUpsertWithoutItemInput
    disconnect?: OrderItemWhereInput | boolean
    delete?: OrderItemWhereInput | boolean
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutItemInput, OrderItemUpdateWithoutItemInput>, OrderItemUncheckedUpdateWithoutItemInput>
  }

  export type ItemImageUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    upsert?: ItemImageUpsertWithWhereUniqueWithoutItemInput | ItemImageUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    set?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    disconnect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    delete?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    update?: ItemImageUpdateWithWhereUniqueWithoutItemInput | ItemImageUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemImageUpdateManyWithWhereWithoutItemInput | ItemImageUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
  }

  export type ShipmentBatchUncheckedUpdateManyWithoutItemsNestedInput = {
    create?: XOR<ShipmentBatchCreateWithoutItemsInput, ShipmentBatchUncheckedCreateWithoutItemsInput> | ShipmentBatchCreateWithoutItemsInput[] | ShipmentBatchUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: ShipmentBatchCreateOrConnectWithoutItemsInput | ShipmentBatchCreateOrConnectWithoutItemsInput[]
    upsert?: ShipmentBatchUpsertWithWhereUniqueWithoutItemsInput | ShipmentBatchUpsertWithWhereUniqueWithoutItemsInput[]
    set?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
    disconnect?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
    delete?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
    connect?: ShipmentBatchWhereUniqueInput | ShipmentBatchWhereUniqueInput[]
    update?: ShipmentBatchUpdateWithWhereUniqueWithoutItemsInput | ShipmentBatchUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: ShipmentBatchUpdateManyWithWhereWithoutItemsInput | ShipmentBatchUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: ShipmentBatchScalarWhereInput | ShipmentBatchScalarWhereInput[]
  }

  export type CollaboratorAssignmentUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutItemInput, CollaboratorAssignmentUncheckedCreateWithoutItemInput> | CollaboratorAssignmentCreateWithoutItemInput[] | CollaboratorAssignmentUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutItemInput | CollaboratorAssignmentCreateOrConnectWithoutItemInput[]
    upsert?: CollaboratorAssignmentUpsertWithWhereUniqueWithoutItemInput | CollaboratorAssignmentUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: CollaboratorAssignmentCreateManyItemInputEnvelope
    set?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    disconnect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    delete?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    update?: CollaboratorAssignmentUpdateWithWhereUniqueWithoutItemInput | CollaboratorAssignmentUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: CollaboratorAssignmentUpdateManyWithWhereWithoutItemInput | CollaboratorAssignmentUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: CollaboratorAssignmentScalarWhereInput | CollaboratorAssignmentScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutImagesInput = {
    create?: XOR<ItemCreateWithoutImagesInput, ItemUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutImagesInput
    connect?: ItemWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ItemCreateWithoutImagesInput, ItemUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutImagesInput
    upsert?: ItemUpsertWithoutImagesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutImagesInput, ItemUpdateWithoutImagesInput>, ItemUncheckedUpdateWithoutImagesInput>
  }

  export type ItemCreateNestedManyWithoutShipmentGroupInput = {
    create?: XOR<ItemCreateWithoutShipmentGroupInput, ItemUncheckedCreateWithoutShipmentGroupInput> | ItemCreateWithoutShipmentGroupInput[] | ItemUncheckedCreateWithoutShipmentGroupInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutShipmentGroupInput | ItemCreateOrConnectWithoutShipmentGroupInput[]
    createMany?: ItemCreateManyShipmentGroupInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutShipmentGroupInput = {
    create?: XOR<ItemCreateWithoutShipmentGroupInput, ItemUncheckedCreateWithoutShipmentGroupInput> | ItemCreateWithoutShipmentGroupInput[] | ItemUncheckedCreateWithoutShipmentGroupInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutShipmentGroupInput | ItemCreateOrConnectWithoutShipmentGroupInput[]
    createMany?: ItemCreateManyShipmentGroupInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutShipmentGroupNestedInput = {
    create?: XOR<ItemCreateWithoutShipmentGroupInput, ItemUncheckedCreateWithoutShipmentGroupInput> | ItemCreateWithoutShipmentGroupInput[] | ItemUncheckedCreateWithoutShipmentGroupInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutShipmentGroupInput | ItemCreateOrConnectWithoutShipmentGroupInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutShipmentGroupInput | ItemUpsertWithWhereUniqueWithoutShipmentGroupInput[]
    createMany?: ItemCreateManyShipmentGroupInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutShipmentGroupInput | ItemUpdateWithWhereUniqueWithoutShipmentGroupInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutShipmentGroupInput | ItemUpdateManyWithWhereWithoutShipmentGroupInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutShipmentGroupNestedInput = {
    create?: XOR<ItemCreateWithoutShipmentGroupInput, ItemUncheckedCreateWithoutShipmentGroupInput> | ItemCreateWithoutShipmentGroupInput[] | ItemUncheckedCreateWithoutShipmentGroupInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutShipmentGroupInput | ItemCreateOrConnectWithoutShipmentGroupInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutShipmentGroupInput | ItemUpsertWithWhereUniqueWithoutShipmentGroupInput[]
    createMany?: ItemCreateManyShipmentGroupInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutShipmentGroupInput | ItemUpdateWithWhereUniqueWithoutShipmentGroupInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutShipmentGroupInput | ItemUpdateManyWithWhereWithoutShipmentGroupInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutShipmentBatchInput = {
    create?: XOR<ItemCreateWithoutShipmentBatchInput, ItemUncheckedCreateWithoutShipmentBatchInput> | ItemCreateWithoutShipmentBatchInput[] | ItemUncheckedCreateWithoutShipmentBatchInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutShipmentBatchInput | ItemCreateOrConnectWithoutShipmentBatchInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutShipmentBatchInput = {
    create?: XOR<ItemCreateWithoutShipmentBatchInput, ItemUncheckedCreateWithoutShipmentBatchInput> | ItemCreateWithoutShipmentBatchInput[] | ItemUncheckedCreateWithoutShipmentBatchInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutShipmentBatchInput | ItemCreateOrConnectWithoutShipmentBatchInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type EnumBatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.BatchStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ItemUpdateManyWithoutShipmentBatchNestedInput = {
    create?: XOR<ItemCreateWithoutShipmentBatchInput, ItemUncheckedCreateWithoutShipmentBatchInput> | ItemCreateWithoutShipmentBatchInput[] | ItemUncheckedCreateWithoutShipmentBatchInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutShipmentBatchInput | ItemCreateOrConnectWithoutShipmentBatchInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutShipmentBatchInput | ItemUpsertWithWhereUniqueWithoutShipmentBatchInput[]
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutShipmentBatchInput | ItemUpdateWithWhereUniqueWithoutShipmentBatchInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutShipmentBatchInput | ItemUpdateManyWithWhereWithoutShipmentBatchInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutShipmentBatchNestedInput = {
    create?: XOR<ItemCreateWithoutShipmentBatchInput, ItemUncheckedCreateWithoutShipmentBatchInput> | ItemCreateWithoutShipmentBatchInput[] | ItemUncheckedCreateWithoutShipmentBatchInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutShipmentBatchInput | ItemCreateOrConnectWithoutShipmentBatchInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutShipmentBatchInput | ItemUpsertWithWhereUniqueWithoutShipmentBatchInput[]
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutShipmentBatchInput | ItemUpdateWithWhereUniqueWithoutShipmentBatchInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutShipmentBatchInput | ItemUpdateManyWithWhereWithoutShipmentBatchInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutDropInput = {
    create?: XOR<ItemCreateWithoutDropInput, ItemUncheckedCreateWithoutDropInput> | ItemCreateWithoutDropInput[] | ItemUncheckedCreateWithoutDropInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutDropInput | ItemCreateOrConnectWithoutDropInput[]
    createMany?: ItemCreateManyDropInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type CollaboratorAssignmentCreateNestedManyWithoutDropInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutDropInput, CollaboratorAssignmentUncheckedCreateWithoutDropInput> | CollaboratorAssignmentCreateWithoutDropInput[] | CollaboratorAssignmentUncheckedCreateWithoutDropInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutDropInput | CollaboratorAssignmentCreateOrConnectWithoutDropInput[]
    createMany?: CollaboratorAssignmentCreateManyDropInputEnvelope
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutDropInput = {
    create?: XOR<ItemCreateWithoutDropInput, ItemUncheckedCreateWithoutDropInput> | ItemCreateWithoutDropInput[] | ItemUncheckedCreateWithoutDropInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutDropInput | ItemCreateOrConnectWithoutDropInput[]
    createMany?: ItemCreateManyDropInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type CollaboratorAssignmentUncheckedCreateNestedManyWithoutDropInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutDropInput, CollaboratorAssignmentUncheckedCreateWithoutDropInput> | CollaboratorAssignmentCreateWithoutDropInput[] | CollaboratorAssignmentUncheckedCreateWithoutDropInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutDropInput | CollaboratorAssignmentCreateOrConnectWithoutDropInput[]
    createMany?: CollaboratorAssignmentCreateManyDropInputEnvelope
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutDropNestedInput = {
    create?: XOR<ItemCreateWithoutDropInput, ItemUncheckedCreateWithoutDropInput> | ItemCreateWithoutDropInput[] | ItemUncheckedCreateWithoutDropInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutDropInput | ItemCreateOrConnectWithoutDropInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutDropInput | ItemUpsertWithWhereUniqueWithoutDropInput[]
    createMany?: ItemCreateManyDropInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutDropInput | ItemUpdateWithWhereUniqueWithoutDropInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutDropInput | ItemUpdateManyWithWhereWithoutDropInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type CollaboratorAssignmentUpdateManyWithoutDropNestedInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutDropInput, CollaboratorAssignmentUncheckedCreateWithoutDropInput> | CollaboratorAssignmentCreateWithoutDropInput[] | CollaboratorAssignmentUncheckedCreateWithoutDropInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutDropInput | CollaboratorAssignmentCreateOrConnectWithoutDropInput[]
    upsert?: CollaboratorAssignmentUpsertWithWhereUniqueWithoutDropInput | CollaboratorAssignmentUpsertWithWhereUniqueWithoutDropInput[]
    createMany?: CollaboratorAssignmentCreateManyDropInputEnvelope
    set?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    disconnect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    delete?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    update?: CollaboratorAssignmentUpdateWithWhereUniqueWithoutDropInput | CollaboratorAssignmentUpdateWithWhereUniqueWithoutDropInput[]
    updateMany?: CollaboratorAssignmentUpdateManyWithWhereWithoutDropInput | CollaboratorAssignmentUpdateManyWithWhereWithoutDropInput[]
    deleteMany?: CollaboratorAssignmentScalarWhereInput | CollaboratorAssignmentScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutDropNestedInput = {
    create?: XOR<ItemCreateWithoutDropInput, ItemUncheckedCreateWithoutDropInput> | ItemCreateWithoutDropInput[] | ItemUncheckedCreateWithoutDropInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutDropInput | ItemCreateOrConnectWithoutDropInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutDropInput | ItemUpsertWithWhereUniqueWithoutDropInput[]
    createMany?: ItemCreateManyDropInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutDropInput | ItemUpdateWithWhereUniqueWithoutDropInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutDropInput | ItemUpdateManyWithWhereWithoutDropInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type CollaboratorAssignmentUncheckedUpdateManyWithoutDropNestedInput = {
    create?: XOR<CollaboratorAssignmentCreateWithoutDropInput, CollaboratorAssignmentUncheckedCreateWithoutDropInput> | CollaboratorAssignmentCreateWithoutDropInput[] | CollaboratorAssignmentUncheckedCreateWithoutDropInput[]
    connectOrCreate?: CollaboratorAssignmentCreateOrConnectWithoutDropInput | CollaboratorAssignmentCreateOrConnectWithoutDropInput[]
    upsert?: CollaboratorAssignmentUpsertWithWhereUniqueWithoutDropInput | CollaboratorAssignmentUpsertWithWhereUniqueWithoutDropInput[]
    createMany?: CollaboratorAssignmentCreateManyDropInputEnvelope
    set?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    disconnect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    delete?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    connect?: CollaboratorAssignmentWhereUniqueInput | CollaboratorAssignmentWhereUniqueInput[]
    update?: CollaboratorAssignmentUpdateWithWhereUniqueWithoutDropInput | CollaboratorAssignmentUpdateWithWhereUniqueWithoutDropInput[]
    updateMany?: CollaboratorAssignmentUpdateManyWithWhereWithoutDropInput | CollaboratorAssignmentUpdateManyWithWhereWithoutDropInput[]
    deleteMany?: CollaboratorAssignmentScalarWhereInput | CollaboratorAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCollaboratorOnDropsInput = {
    create?: XOR<UserCreateWithoutCollaboratorOnDropsInput, UserUncheckedCreateWithoutCollaboratorOnDropsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaboratorOnDropsInput
    connect?: UserWhereUniqueInput
  }

  export type DropCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<DropCreateWithoutCollaboratorsInput, DropUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: DropCreateOrConnectWithoutCollaboratorsInput
    connect?: DropWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutCollaboratorAssignmentInput = {
    create?: XOR<ItemCreateWithoutCollaboratorAssignmentInput, ItemUncheckedCreateWithoutCollaboratorAssignmentInput>
    connectOrCreate?: ItemCreateOrConnectWithoutCollaboratorAssignmentInput
    connect?: ItemWhereUniqueInput
  }

  export type EnumCommissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CommissionType
  }

  export type UserUpdateOneRequiredWithoutCollaboratorOnDropsNestedInput = {
    create?: XOR<UserCreateWithoutCollaboratorOnDropsInput, UserUncheckedCreateWithoutCollaboratorOnDropsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaboratorOnDropsInput
    upsert?: UserUpsertWithoutCollaboratorOnDropsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollaboratorOnDropsInput, UserUpdateWithoutCollaboratorOnDropsInput>, UserUncheckedUpdateWithoutCollaboratorOnDropsInput>
  }

  export type DropUpdateOneWithoutCollaboratorsNestedInput = {
    create?: XOR<DropCreateWithoutCollaboratorsInput, DropUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: DropCreateOrConnectWithoutCollaboratorsInput
    upsert?: DropUpsertWithoutCollaboratorsInput
    disconnect?: DropWhereInput | boolean
    delete?: DropWhereInput | boolean
    connect?: DropWhereUniqueInput
    update?: XOR<XOR<DropUpdateToOneWithWhereWithoutCollaboratorsInput, DropUpdateWithoutCollaboratorsInput>, DropUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type ItemUpdateOneWithoutCollaboratorAssignmentNestedInput = {
    create?: XOR<ItemCreateWithoutCollaboratorAssignmentInput, ItemUncheckedCreateWithoutCollaboratorAssignmentInput>
    connectOrCreate?: ItemCreateOrConnectWithoutCollaboratorAssignmentInput
    upsert?: ItemUpsertWithoutCollaboratorAssignmentInput
    disconnect?: ItemWhereInput | boolean
    delete?: ItemWhereInput | boolean
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutCollaboratorAssignmentInput, ItemUpdateWithoutCollaboratorAssignmentInput>, ItemUncheckedUpdateWithoutCollaboratorAssignmentInput>
  }

  export type BuyerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<BuyerCreateWithoutOrdersInput, BuyerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BuyerCreateOrConnectWithoutOrdersInput
    connect?: BuyerWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput> | UserCreateWithoutOrdersInput[] | UserUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | UserCreateOrConnectWithoutOrdersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput> | UserCreateWithoutOrdersInput[] | UserUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | UserCreateOrConnectWithoutOrdersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null
  }

  export type BuyerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<BuyerCreateWithoutOrdersInput, BuyerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BuyerCreateOrConnectWithoutOrdersInput
    upsert?: BuyerUpsertWithoutOrdersInput
    connect?: BuyerWhereUniqueInput
    update?: XOR<XOR<BuyerUpdateToOneWithWhereWithoutOrdersInput, BuyerUpdateWithoutOrdersInput>, BuyerUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type UserUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput> | UserCreateWithoutOrdersInput[] | UserUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | UserCreateOrConnectWithoutOrdersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrdersInput | UserUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrdersInput | UserUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrdersInput | UserUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput> | UserCreateWithoutOrdersInput[] | UserUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | UserCreateOrConnectWithoutOrdersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrdersInput | UserUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrdersInput | UserUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrdersInput | UserUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RentalCreateNestedManyWithoutBuyerInput = {
    create?: XOR<RentalCreateWithoutBuyerInput, RentalUncheckedCreateWithoutBuyerInput> | RentalCreateWithoutBuyerInput[] | RentalUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBuyerInput | RentalCreateOrConnectWithoutBuyerInput[]
    createMany?: RentalCreateManyBuyerInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<RentalCreateWithoutBuyerInput, RentalUncheckedCreateWithoutBuyerInput> | RentalCreateWithoutBuyerInput[] | RentalUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBuyerInput | RentalCreateOrConnectWithoutBuyerInput[]
    createMany?: RentalCreateManyBuyerInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RentalUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<RentalCreateWithoutBuyerInput, RentalUncheckedCreateWithoutBuyerInput> | RentalCreateWithoutBuyerInput[] | RentalUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBuyerInput | RentalCreateOrConnectWithoutBuyerInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutBuyerInput | RentalUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: RentalCreateManyBuyerInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutBuyerInput | RentalUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutBuyerInput | RentalUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<RentalCreateWithoutBuyerInput, RentalUncheckedCreateWithoutBuyerInput> | RentalCreateWithoutBuyerInput[] | RentalUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBuyerInput | RentalCreateOrConnectWithoutBuyerInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutBuyerInput | RentalUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: RentalCreateManyBuyerInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutBuyerInput | RentalUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutBuyerInput | RentalUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ItemCreateWithoutOrderItemInput, ItemUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOrderItemInput
    connect?: ItemWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<ItemCreateWithoutOrderItemInput, ItemUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOrderItemInput
    upsert?: ItemUpsertWithoutOrderItemInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutOrderItemInput, ItemUpdateWithoutOrderItemInput>, ItemUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ItemCreateNestedOneWithoutRentalInput = {
    create?: XOR<ItemCreateWithoutRentalInput, ItemUncheckedCreateWithoutRentalInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRentalInput
    connect?: ItemWhereUniqueInput
  }

  export type BuyerCreateNestedOneWithoutRentalsInput = {
    create?: XOR<BuyerCreateWithoutRentalsInput, BuyerUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: BuyerCreateOrConnectWithoutRentalsInput
    connect?: BuyerWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRentalsInput = {
    create?: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput> | UserCreateWithoutRentalsInput[] | UserUncheckedCreateWithoutRentalsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput | UserCreateOrConnectWithoutRentalsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRentalsInput = {
    create?: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput> | UserCreateWithoutRentalsInput[] | UserUncheckedCreateWithoutRentalsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput | UserCreateOrConnectWithoutRentalsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRentalStatusFieldUpdateOperationsInput = {
    set?: $Enums.RentalStatus
  }

  export type ItemUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<ItemCreateWithoutRentalInput, ItemUncheckedCreateWithoutRentalInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRentalInput
    upsert?: ItemUpsertWithoutRentalInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutRentalInput, ItemUpdateWithoutRentalInput>, ItemUncheckedUpdateWithoutRentalInput>
  }

  export type BuyerUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<BuyerCreateWithoutRentalsInput, BuyerUncheckedCreateWithoutRentalsInput>
    connectOrCreate?: BuyerCreateOrConnectWithoutRentalsInput
    upsert?: BuyerUpsertWithoutRentalsInput
    connect?: BuyerWhereUniqueInput
    update?: XOR<XOR<BuyerUpdateToOneWithWhereWithoutRentalsInput, BuyerUpdateWithoutRentalsInput>, BuyerUncheckedUpdateWithoutRentalsInput>
  }

  export type UserUpdateManyWithoutRentalsNestedInput = {
    create?: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput> | UserCreateWithoutRentalsInput[] | UserUncheckedCreateWithoutRentalsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput | UserCreateOrConnectWithoutRentalsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRentalsInput | UserUpsertWithWhereUniqueWithoutRentalsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRentalsInput | UserUpdateWithWhereUniqueWithoutRentalsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRentalsInput | UserUpdateManyWithWhereWithoutRentalsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRentalsNestedInput = {
    create?: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput> | UserCreateWithoutRentalsInput[] | UserUncheckedCreateWithoutRentalsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput | UserCreateOrConnectWithoutRentalsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRentalsInput | UserUpsertWithWhereUniqueWithoutRentalsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRentalsInput | UserUpdateWithWhereUniqueWithoutRentalsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRentalsInput | UserUpdateManyWithWhereWithoutRentalsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumBatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusFilter<$PrismaModel> | $Enums.BatchStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BatchStatus | EnumBatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BatchStatus[] | ListEnumBatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.BatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBatchStatusFilter<$PrismaModel>
    _max?: NestedEnumBatchStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCommissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionType | EnumCommissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommissionType[] | ListEnumCommissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommissionType[] | ListEnumCommissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommissionTypeFilter<$PrismaModel> | $Enums.CommissionType
  }

  export type NestedEnumCommissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionType | EnumCommissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CommissionType[] | ListEnumCommissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommissionType[] | ListEnumCommissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCommissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CommissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommissionTypeFilter<$PrismaModel>
    _max?: NestedEnumCommissionTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    buyer: BuyerCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    buyerId: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type RentalCreateWithoutUserInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
    item: ItemCreateNestedOneWithoutRentalInput
    buyer: BuyerCreateNestedOneWithoutRentalsInput
  }

  export type RentalUncheckedCreateWithoutUserInput = {
    id?: string
    itemId: string
    buyerId: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
  }

  export type RentalCreateOrConnectWithoutUserInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type CollaboratorAssignmentCreateWithoutUserInput = {
    id?: string
    type: $Enums.CommissionType
    value: number
    drop?: DropCreateNestedOneWithoutCollaboratorsInput
    item?: ItemCreateNestedOneWithoutCollaboratorAssignmentInput
  }

  export type CollaboratorAssignmentUncheckedCreateWithoutUserInput = {
    id?: string
    dropId?: string | null
    itemId?: string | null
    type: $Enums.CommissionType
    value: number
  }

  export type CollaboratorAssignmentCreateOrConnectWithoutUserInput = {
    where: CollaboratorAssignmentWhereUniqueInput
    create: XOR<CollaboratorAssignmentCreateWithoutUserInput, CollaboratorAssignmentUncheckedCreateWithoutUserInput>
  }

  export type CollaboratorAssignmentCreateManyUserInputEnvelope = {
    data: CollaboratorAssignmentCreateManyUserInput | CollaboratorAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    buyerId?: StringFilter<"Order"> | string
    shippingFee?: FloatFilter<"Order"> | number
    totalAmount?: FloatFilter<"Order"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    paymentMethod?: EnumPaymentMethodNullableFilter<"Order"> | $Enums.PaymentMethod | null
    paymentRef?: StringNullableFilter<"Order"> | string | null
    proofImage?: StringNullableFilter<"Order"> | string | null
    invoiceUrl?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type RentalUpsertWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
  }

  export type RentalUpdateManyWithWhereWithoutUserInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutUserInput>
  }

  export type RentalScalarWhereInput = {
    AND?: RentalScalarWhereInput | RentalScalarWhereInput[]
    OR?: RentalScalarWhereInput[]
    NOT?: RentalScalarWhereInput | RentalScalarWhereInput[]
    id?: StringFilter<"Rental"> | string
    itemId?: StringFilter<"Rental"> | string
    buyerId?: StringFilter<"Rental"> | string
    startDate?: DateTimeFilter<"Rental"> | Date | string
    endDate?: DateTimeFilter<"Rental"> | Date | string
    deposit?: FloatFilter<"Rental"> | number
    rentalFee?: FloatFilter<"Rental"> | number
    penalty?: FloatNullableFilter<"Rental"> | number | null
    returnedAt?: DateTimeNullableFilter<"Rental"> | Date | string | null
    returnNotes?: StringNullableFilter<"Rental"> | string | null
    status?: EnumRentalStatusFilter<"Rental"> | $Enums.RentalStatus
  }

  export type CollaboratorAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: CollaboratorAssignmentWhereUniqueInput
    update: XOR<CollaboratorAssignmentUpdateWithoutUserInput, CollaboratorAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<CollaboratorAssignmentCreateWithoutUserInput, CollaboratorAssignmentUncheckedCreateWithoutUserInput>
  }

  export type CollaboratorAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: CollaboratorAssignmentWhereUniqueInput
    data: XOR<CollaboratorAssignmentUpdateWithoutUserInput, CollaboratorAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type CollaboratorAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: CollaboratorAssignmentScalarWhereInput
    data: XOR<CollaboratorAssignmentUpdateManyMutationInput, CollaboratorAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type CollaboratorAssignmentScalarWhereInput = {
    AND?: CollaboratorAssignmentScalarWhereInput | CollaboratorAssignmentScalarWhereInput[]
    OR?: CollaboratorAssignmentScalarWhereInput[]
    NOT?: CollaboratorAssignmentScalarWhereInput | CollaboratorAssignmentScalarWhereInput[]
    id?: StringFilter<"CollaboratorAssignment"> | string
    userId?: StringFilter<"CollaboratorAssignment"> | string
    dropId?: StringNullableFilter<"CollaboratorAssignment"> | string | null
    itemId?: StringNullableFilter<"CollaboratorAssignment"> | string | null
    type?: EnumCommissionTypeFilter<"CollaboratorAssignment"> | $Enums.CommissionType
    value?: FloatFilter<"CollaboratorAssignment"> | number
  }

  export type ItemCreateWithoutSupplierInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    createdAt?: Date | string
    shipmentGroup?: ShipmentGroupCreateNestedOneWithoutItemsInput
    drop?: DropCreateNestedOneWithoutItemsInput
    rental?: RentalCreateNestedOneWithoutItemInput
    orderItem?: OrderItemCreateNestedOneWithoutItemInput
    images?: ItemImageCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutSupplierInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    shipmentGroupId?: string | null
    dropId?: string | null
    createdAt?: Date | string
    rental?: RentalUncheckedCreateNestedOneWithoutItemInput
    orderItem?: OrderItemUncheckedCreateNestedOneWithoutItemInput
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchUncheckedCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutSupplierInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput>
  }

  export type ItemCreateManySupplierInputEnvelope = {
    data: ItemCreateManySupplierInput | ItemCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutSupplierInput, ItemUncheckedUpdateWithoutSupplierInput>
    create: XOR<ItemCreateWithoutSupplierInput, ItemUncheckedCreateWithoutSupplierInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutSupplierInput, ItemUncheckedUpdateWithoutSupplierInput>
  }

  export type ItemUpdateManyWithWhereWithoutSupplierInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    size?: StringNullableFilter<"Item"> | string | null
    color?: StringNullableFilter<"Item"> | string | null
    condition?: StringNullableFilter<"Item"> | string | null
    purchasePrice?: FloatFilter<"Item"> | number
    salePrice?: FloatNullableFilter<"Item"> | number | null
    profit?: FloatNullableFilter<"Item"> | number | null
    supplierId?: StringNullableFilter<"Item"> | string | null
    shipmentGroupId?: StringNullableFilter<"Item"> | string | null
    dropId?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type SupplierCreateWithoutItemsInput = {
    id?: string
    name: string
    contact?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    contact?: string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutItemsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutItemsInput, SupplierUncheckedCreateWithoutItemsInput>
  }

  export type ShipmentGroupCreateWithoutItemsInput = {
    id?: string
    name: string
    totalItemCost: number
    totalShippingCost: number
    averageCost: number
    createdAt?: Date | string
  }

  export type ShipmentGroupUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    totalItemCost: number
    totalShippingCost: number
    averageCost: number
    createdAt?: Date | string
  }

  export type ShipmentGroupCreateOrConnectWithoutItemsInput = {
    where: ShipmentGroupWhereUniqueInput
    create: XOR<ShipmentGroupCreateWithoutItemsInput, ShipmentGroupUncheckedCreateWithoutItemsInput>
  }

  export type DropCreateWithoutItemsInput = {
    id?: string
    name: string
    startedAt: Date | string
    endedAt: Date | string
    createdAt?: Date | string
    collaborators?: CollaboratorAssignmentCreateNestedManyWithoutDropInput
  }

  export type DropUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    startedAt: Date | string
    endedAt: Date | string
    createdAt?: Date | string
    collaborators?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutDropInput
  }

  export type DropCreateOrConnectWithoutItemsInput = {
    where: DropWhereUniqueInput
    create: XOR<DropCreateWithoutItemsInput, DropUncheckedCreateWithoutItemsInput>
  }

  export type RentalCreateWithoutItemInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
    buyer: BuyerCreateNestedOneWithoutRentalsInput
    User?: UserCreateNestedManyWithoutRentalsInput
  }

  export type RentalUncheckedCreateWithoutItemInput = {
    id?: string
    buyerId: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
    User?: UserUncheckedCreateNestedManyWithoutRentalsInput
  }

  export type RentalCreateOrConnectWithoutItemInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutItemInput, RentalUncheckedCreateWithoutItemInput>
  }

  export type OrderItemCreateWithoutItemInput = {
    id?: string
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutItemInput = {
    id?: string
    orderId: string
  }

  export type OrderItemCreateOrConnectWithoutItemInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutItemInput, OrderItemUncheckedCreateWithoutItemInput>
  }

  export type ItemImageCreateWithoutItemInput = {
    id?: string
    url: string
    position: number
    uploadedAt?: Date | string
  }

  export type ItemImageUncheckedCreateWithoutItemInput = {
    id?: string
    url: string
    position: number
    uploadedAt?: Date | string
  }

  export type ItemImageCreateOrConnectWithoutItemInput = {
    where: ItemImageWhereUniqueInput
    create: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput>
  }

  export type ItemImageCreateManyItemInputEnvelope = {
    data: ItemImageCreateManyItemInput | ItemImageCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentBatchCreateWithoutItemsInput = {
    id?: string
    name: string
    destination: string
    status: $Enums.BatchStatus
    trackingNumber?: string | null
    shippedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ShipmentBatchUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    destination: string
    status: $Enums.BatchStatus
    trackingNumber?: string | null
    shippedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ShipmentBatchCreateOrConnectWithoutItemsInput = {
    where: ShipmentBatchWhereUniqueInput
    create: XOR<ShipmentBatchCreateWithoutItemsInput, ShipmentBatchUncheckedCreateWithoutItemsInput>
  }

  export type CollaboratorAssignmentCreateWithoutItemInput = {
    id?: string
    type: $Enums.CommissionType
    value: number
    user: UserCreateNestedOneWithoutCollaboratorOnDropsInput
    drop?: DropCreateNestedOneWithoutCollaboratorsInput
  }

  export type CollaboratorAssignmentUncheckedCreateWithoutItemInput = {
    id?: string
    userId: string
    dropId?: string | null
    type: $Enums.CommissionType
    value: number
  }

  export type CollaboratorAssignmentCreateOrConnectWithoutItemInput = {
    where: CollaboratorAssignmentWhereUniqueInput
    create: XOR<CollaboratorAssignmentCreateWithoutItemInput, CollaboratorAssignmentUncheckedCreateWithoutItemInput>
  }

  export type CollaboratorAssignmentCreateManyItemInputEnvelope = {
    data: CollaboratorAssignmentCreateManyItemInput | CollaboratorAssignmentCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithoutItemsInput = {
    update: XOR<SupplierUpdateWithoutItemsInput, SupplierUncheckedUpdateWithoutItemsInput>
    create: XOR<SupplierCreateWithoutItemsInput, SupplierUncheckedCreateWithoutItemsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutItemsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutItemsInput, SupplierUncheckedUpdateWithoutItemsInput>
  }

  export type SupplierUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentGroupUpsertWithoutItemsInput = {
    update: XOR<ShipmentGroupUpdateWithoutItemsInput, ShipmentGroupUncheckedUpdateWithoutItemsInput>
    create: XOR<ShipmentGroupCreateWithoutItemsInput, ShipmentGroupUncheckedCreateWithoutItemsInput>
    where?: ShipmentGroupWhereInput
  }

  export type ShipmentGroupUpdateToOneWithWhereWithoutItemsInput = {
    where?: ShipmentGroupWhereInput
    data: XOR<ShipmentGroupUpdateWithoutItemsInput, ShipmentGroupUncheckedUpdateWithoutItemsInput>
  }

  export type ShipmentGroupUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalItemCost?: FloatFieldUpdateOperationsInput | number
    totalShippingCost?: FloatFieldUpdateOperationsInput | number
    averageCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentGroupUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalItemCost?: FloatFieldUpdateOperationsInput | number
    totalShippingCost?: FloatFieldUpdateOperationsInput | number
    averageCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DropUpsertWithoutItemsInput = {
    update: XOR<DropUpdateWithoutItemsInput, DropUncheckedUpdateWithoutItemsInput>
    create: XOR<DropCreateWithoutItemsInput, DropUncheckedCreateWithoutItemsInput>
    where?: DropWhereInput
  }

  export type DropUpdateToOneWithWhereWithoutItemsInput = {
    where?: DropWhereInput
    data: XOR<DropUpdateWithoutItemsInput, DropUncheckedUpdateWithoutItemsInput>
  }

  export type DropUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: CollaboratorAssignmentUpdateManyWithoutDropNestedInput
  }

  export type DropUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: CollaboratorAssignmentUncheckedUpdateManyWithoutDropNestedInput
  }

  export type RentalUpsertWithoutItemInput = {
    update: XOR<RentalUpdateWithoutItemInput, RentalUncheckedUpdateWithoutItemInput>
    create: XOR<RentalCreateWithoutItemInput, RentalUncheckedCreateWithoutItemInput>
    where?: RentalWhereInput
  }

  export type RentalUpdateToOneWithWhereWithoutItemInput = {
    where?: RentalWhereInput
    data: XOR<RentalUpdateWithoutItemInput, RentalUncheckedUpdateWithoutItemInput>
  }

  export type RentalUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    buyer?: BuyerUpdateOneRequiredWithoutRentalsNestedInput
    User?: UserUpdateManyWithoutRentalsNestedInput
  }

  export type RentalUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    User?: UserUncheckedUpdateManyWithoutRentalsNestedInput
  }

  export type OrderItemUpsertWithoutItemInput = {
    update: XOR<OrderItemUpdateWithoutItemInput, OrderItemUncheckedUpdateWithoutItemInput>
    create: XOR<OrderItemCreateWithoutItemInput, OrderItemUncheckedCreateWithoutItemInput>
    where?: OrderItemWhereInput
  }

  export type OrderItemUpdateToOneWithWhereWithoutItemInput = {
    where?: OrderItemWhereInput
    data: XOR<OrderItemUpdateWithoutItemInput, OrderItemUncheckedUpdateWithoutItemInput>
  }

  export type OrderItemUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemImageUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemImageWhereUniqueInput
    update: XOR<ItemImageUpdateWithoutItemInput, ItemImageUncheckedUpdateWithoutItemInput>
    create: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput>
  }

  export type ItemImageUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemImageWhereUniqueInput
    data: XOR<ItemImageUpdateWithoutItemInput, ItemImageUncheckedUpdateWithoutItemInput>
  }

  export type ItemImageUpdateManyWithWhereWithoutItemInput = {
    where: ItemImageScalarWhereInput
    data: XOR<ItemImageUpdateManyMutationInput, ItemImageUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemImageScalarWhereInput = {
    AND?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
    OR?: ItemImageScalarWhereInput[]
    NOT?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
    id?: StringFilter<"ItemImage"> | string
    itemId?: StringFilter<"ItemImage"> | string
    url?: StringFilter<"ItemImage"> | string
    position?: IntFilter<"ItemImage"> | number
    uploadedAt?: DateTimeFilter<"ItemImage"> | Date | string
  }

  export type ShipmentBatchUpsertWithWhereUniqueWithoutItemsInput = {
    where: ShipmentBatchWhereUniqueInput
    update: XOR<ShipmentBatchUpdateWithoutItemsInput, ShipmentBatchUncheckedUpdateWithoutItemsInput>
    create: XOR<ShipmentBatchCreateWithoutItemsInput, ShipmentBatchUncheckedCreateWithoutItemsInput>
  }

  export type ShipmentBatchUpdateWithWhereUniqueWithoutItemsInput = {
    where: ShipmentBatchWhereUniqueInput
    data: XOR<ShipmentBatchUpdateWithoutItemsInput, ShipmentBatchUncheckedUpdateWithoutItemsInput>
  }

  export type ShipmentBatchUpdateManyWithWhereWithoutItemsInput = {
    where: ShipmentBatchScalarWhereInput
    data: XOR<ShipmentBatchUpdateManyMutationInput, ShipmentBatchUncheckedUpdateManyWithoutItemsInput>
  }

  export type ShipmentBatchScalarWhereInput = {
    AND?: ShipmentBatchScalarWhereInput | ShipmentBatchScalarWhereInput[]
    OR?: ShipmentBatchScalarWhereInput[]
    NOT?: ShipmentBatchScalarWhereInput | ShipmentBatchScalarWhereInput[]
    id?: StringFilter<"ShipmentBatch"> | string
    name?: StringFilter<"ShipmentBatch"> | string
    destination?: StringFilter<"ShipmentBatch"> | string
    status?: EnumBatchStatusFilter<"ShipmentBatch"> | $Enums.BatchStatus
    trackingNumber?: StringNullableFilter<"ShipmentBatch"> | string | null
    shippedAt?: DateTimeNullableFilter<"ShipmentBatch"> | Date | string | null
    createdAt?: DateTimeFilter<"ShipmentBatch"> | Date | string
  }

  export type CollaboratorAssignmentUpsertWithWhereUniqueWithoutItemInput = {
    where: CollaboratorAssignmentWhereUniqueInput
    update: XOR<CollaboratorAssignmentUpdateWithoutItemInput, CollaboratorAssignmentUncheckedUpdateWithoutItemInput>
    create: XOR<CollaboratorAssignmentCreateWithoutItemInput, CollaboratorAssignmentUncheckedCreateWithoutItemInput>
  }

  export type CollaboratorAssignmentUpdateWithWhereUniqueWithoutItemInput = {
    where: CollaboratorAssignmentWhereUniqueInput
    data: XOR<CollaboratorAssignmentUpdateWithoutItemInput, CollaboratorAssignmentUncheckedUpdateWithoutItemInput>
  }

  export type CollaboratorAssignmentUpdateManyWithWhereWithoutItemInput = {
    where: CollaboratorAssignmentScalarWhereInput
    data: XOR<CollaboratorAssignmentUpdateManyMutationInput, CollaboratorAssignmentUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutItemsInput
    shipmentGroup?: ShipmentGroupCreateNestedOneWithoutItemsInput
    drop?: DropCreateNestedOneWithoutItemsInput
    rental?: RentalCreateNestedOneWithoutItemInput
    orderItem?: OrderItemCreateNestedOneWithoutItemInput
    ShipmentBatch?: ShipmentBatchCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    shipmentGroupId?: string | null
    dropId?: string | null
    createdAt?: Date | string
    rental?: RentalUncheckedCreateNestedOneWithoutItemInput
    orderItem?: OrderItemUncheckedCreateNestedOneWithoutItemInput
    ShipmentBatch?: ShipmentBatchUncheckedCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutImagesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutImagesInput, ItemUncheckedCreateWithoutImagesInput>
  }

  export type ItemUpsertWithoutImagesInput = {
    update: XOR<ItemUpdateWithoutImagesInput, ItemUncheckedUpdateWithoutImagesInput>
    create: XOR<ItemCreateWithoutImagesInput, ItemUncheckedCreateWithoutImagesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutImagesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutImagesInput, ItemUncheckedUpdateWithoutImagesInput>
  }

  export type ItemUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutItemsNestedInput
    shipmentGroup?: ShipmentGroupUpdateOneWithoutItemsNestedInput
    drop?: DropUpdateOneWithoutItemsNestedInput
    rental?: RentalUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUpdateOneWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: RentalUncheckedUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUncheckedUpdateOneWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUncheckedUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateWithoutShipmentGroupInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutItemsInput
    drop?: DropCreateNestedOneWithoutItemsInput
    rental?: RentalCreateNestedOneWithoutItemInput
    orderItem?: OrderItemCreateNestedOneWithoutItemInput
    images?: ItemImageCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutShipmentGroupInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    dropId?: string | null
    createdAt?: Date | string
    rental?: RentalUncheckedCreateNestedOneWithoutItemInput
    orderItem?: OrderItemUncheckedCreateNestedOneWithoutItemInput
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchUncheckedCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutShipmentGroupInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutShipmentGroupInput, ItemUncheckedCreateWithoutShipmentGroupInput>
  }

  export type ItemCreateManyShipmentGroupInputEnvelope = {
    data: ItemCreateManyShipmentGroupInput | ItemCreateManyShipmentGroupInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutShipmentGroupInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutShipmentGroupInput, ItemUncheckedUpdateWithoutShipmentGroupInput>
    create: XOR<ItemCreateWithoutShipmentGroupInput, ItemUncheckedCreateWithoutShipmentGroupInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutShipmentGroupInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutShipmentGroupInput, ItemUncheckedUpdateWithoutShipmentGroupInput>
  }

  export type ItemUpdateManyWithWhereWithoutShipmentGroupInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutShipmentGroupInput>
  }

  export type ItemCreateWithoutShipmentBatchInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutItemsInput
    shipmentGroup?: ShipmentGroupCreateNestedOneWithoutItemsInput
    drop?: DropCreateNestedOneWithoutItemsInput
    rental?: RentalCreateNestedOneWithoutItemInput
    orderItem?: OrderItemCreateNestedOneWithoutItemInput
    images?: ItemImageCreateNestedManyWithoutItemInput
    CollaboratorAssignment?: CollaboratorAssignmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutShipmentBatchInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    shipmentGroupId?: string | null
    dropId?: string | null
    createdAt?: Date | string
    rental?: RentalUncheckedCreateNestedOneWithoutItemInput
    orderItem?: OrderItemUncheckedCreateNestedOneWithoutItemInput
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutShipmentBatchInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutShipmentBatchInput, ItemUncheckedCreateWithoutShipmentBatchInput>
  }

  export type ItemUpsertWithWhereUniqueWithoutShipmentBatchInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutShipmentBatchInput, ItemUncheckedUpdateWithoutShipmentBatchInput>
    create: XOR<ItemCreateWithoutShipmentBatchInput, ItemUncheckedCreateWithoutShipmentBatchInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutShipmentBatchInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutShipmentBatchInput, ItemUncheckedUpdateWithoutShipmentBatchInput>
  }

  export type ItemUpdateManyWithWhereWithoutShipmentBatchInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutShipmentBatchInput>
  }

  export type ItemCreateWithoutDropInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutItemsInput
    shipmentGroup?: ShipmentGroupCreateNestedOneWithoutItemsInput
    rental?: RentalCreateNestedOneWithoutItemInput
    orderItem?: OrderItemCreateNestedOneWithoutItemInput
    images?: ItemImageCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutDropInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    shipmentGroupId?: string | null
    createdAt?: Date | string
    rental?: RentalUncheckedCreateNestedOneWithoutItemInput
    orderItem?: OrderItemUncheckedCreateNestedOneWithoutItemInput
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchUncheckedCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutDropInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutDropInput, ItemUncheckedCreateWithoutDropInput>
  }

  export type ItemCreateManyDropInputEnvelope = {
    data: ItemCreateManyDropInput | ItemCreateManyDropInput[]
    skipDuplicates?: boolean
  }

  export type CollaboratorAssignmentCreateWithoutDropInput = {
    id?: string
    type: $Enums.CommissionType
    value: number
    user: UserCreateNestedOneWithoutCollaboratorOnDropsInput
    item?: ItemCreateNestedOneWithoutCollaboratorAssignmentInput
  }

  export type CollaboratorAssignmentUncheckedCreateWithoutDropInput = {
    id?: string
    userId: string
    itemId?: string | null
    type: $Enums.CommissionType
    value: number
  }

  export type CollaboratorAssignmentCreateOrConnectWithoutDropInput = {
    where: CollaboratorAssignmentWhereUniqueInput
    create: XOR<CollaboratorAssignmentCreateWithoutDropInput, CollaboratorAssignmentUncheckedCreateWithoutDropInput>
  }

  export type CollaboratorAssignmentCreateManyDropInputEnvelope = {
    data: CollaboratorAssignmentCreateManyDropInput | CollaboratorAssignmentCreateManyDropInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutDropInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutDropInput, ItemUncheckedUpdateWithoutDropInput>
    create: XOR<ItemCreateWithoutDropInput, ItemUncheckedCreateWithoutDropInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutDropInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutDropInput, ItemUncheckedUpdateWithoutDropInput>
  }

  export type ItemUpdateManyWithWhereWithoutDropInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutDropInput>
  }

  export type CollaboratorAssignmentUpsertWithWhereUniqueWithoutDropInput = {
    where: CollaboratorAssignmentWhereUniqueInput
    update: XOR<CollaboratorAssignmentUpdateWithoutDropInput, CollaboratorAssignmentUncheckedUpdateWithoutDropInput>
    create: XOR<CollaboratorAssignmentCreateWithoutDropInput, CollaboratorAssignmentUncheckedCreateWithoutDropInput>
  }

  export type CollaboratorAssignmentUpdateWithWhereUniqueWithoutDropInput = {
    where: CollaboratorAssignmentWhereUniqueInput
    data: XOR<CollaboratorAssignmentUpdateWithoutDropInput, CollaboratorAssignmentUncheckedUpdateWithoutDropInput>
  }

  export type CollaboratorAssignmentUpdateManyWithWhereWithoutDropInput = {
    where: CollaboratorAssignmentScalarWhereInput
    data: XOR<CollaboratorAssignmentUpdateManyMutationInput, CollaboratorAssignmentUncheckedUpdateManyWithoutDropInput>
  }

  export type UserCreateWithoutCollaboratorOnDropsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    rentals?: RentalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollaboratorOnDropsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    rentals?: RentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollaboratorOnDropsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollaboratorOnDropsInput, UserUncheckedCreateWithoutCollaboratorOnDropsInput>
  }

  export type DropCreateWithoutCollaboratorsInput = {
    id?: string
    name: string
    startedAt: Date | string
    endedAt: Date | string
    createdAt?: Date | string
    items?: ItemCreateNestedManyWithoutDropInput
  }

  export type DropUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    name: string
    startedAt: Date | string
    endedAt: Date | string
    createdAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutDropInput
  }

  export type DropCreateOrConnectWithoutCollaboratorsInput = {
    where: DropWhereUniqueInput
    create: XOR<DropCreateWithoutCollaboratorsInput, DropUncheckedCreateWithoutCollaboratorsInput>
  }

  export type ItemCreateWithoutCollaboratorAssignmentInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutItemsInput
    shipmentGroup?: ShipmentGroupCreateNestedOneWithoutItemsInput
    drop?: DropCreateNestedOneWithoutItemsInput
    rental?: RentalCreateNestedOneWithoutItemInput
    orderItem?: OrderItemCreateNestedOneWithoutItemInput
    images?: ItemImageCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchCreateNestedManyWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutCollaboratorAssignmentInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    shipmentGroupId?: string | null
    dropId?: string | null
    createdAt?: Date | string
    rental?: RentalUncheckedCreateNestedOneWithoutItemInput
    orderItem?: OrderItemUncheckedCreateNestedOneWithoutItemInput
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchUncheckedCreateNestedManyWithoutItemsInput
  }

  export type ItemCreateOrConnectWithoutCollaboratorAssignmentInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCollaboratorAssignmentInput, ItemUncheckedCreateWithoutCollaboratorAssignmentInput>
  }

  export type UserUpsertWithoutCollaboratorOnDropsInput = {
    update: XOR<UserUpdateWithoutCollaboratorOnDropsInput, UserUncheckedUpdateWithoutCollaboratorOnDropsInput>
    create: XOR<UserCreateWithoutCollaboratorOnDropsInput, UserUncheckedCreateWithoutCollaboratorOnDropsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollaboratorOnDropsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollaboratorOnDropsInput, UserUncheckedUpdateWithoutCollaboratorOnDropsInput>
  }

  export type UserUpdateWithoutCollaboratorOnDropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    rentals?: RentalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollaboratorOnDropsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    rentals?: RentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DropUpsertWithoutCollaboratorsInput = {
    update: XOR<DropUpdateWithoutCollaboratorsInput, DropUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<DropCreateWithoutCollaboratorsInput, DropUncheckedCreateWithoutCollaboratorsInput>
    where?: DropWhereInput
  }

  export type DropUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: DropWhereInput
    data: XOR<DropUpdateWithoutCollaboratorsInput, DropUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type DropUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutDropNestedInput
  }

  export type DropUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutDropNestedInput
  }

  export type ItemUpsertWithoutCollaboratorAssignmentInput = {
    update: XOR<ItemUpdateWithoutCollaboratorAssignmentInput, ItemUncheckedUpdateWithoutCollaboratorAssignmentInput>
    create: XOR<ItemCreateWithoutCollaboratorAssignmentInput, ItemUncheckedCreateWithoutCollaboratorAssignmentInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutCollaboratorAssignmentInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutCollaboratorAssignmentInput, ItemUncheckedUpdateWithoutCollaboratorAssignmentInput>
  }

  export type ItemUpdateWithoutCollaboratorAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutItemsNestedInput
    shipmentGroup?: ShipmentGroupUpdateOneWithoutItemsNestedInput
    drop?: DropUpdateOneWithoutItemsNestedInput
    rental?: RentalUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUpdateOneWithoutItemNestedInput
    images?: ItemImageUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUpdateManyWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutCollaboratorAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: RentalUncheckedUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUncheckedUpdateOneWithoutItemNestedInput
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type BuyerCreateWithoutOrdersInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    address?: string | null
    address2?: string | null
    postalCode?: string | null
    createdAt?: Date | string
    rentals?: RentalCreateNestedManyWithoutBuyerInput
  }

  export type BuyerUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    address?: string | null
    address2?: string | null
    postalCode?: string | null
    createdAt?: Date | string
    rentals?: RentalUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type BuyerCreateOrConnectWithoutOrdersInput = {
    where: BuyerWhereUniqueInput
    create: XOR<BuyerCreateWithoutOrdersInput, BuyerUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    item: ItemCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    itemId: string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: RentalCreateNestedManyWithoutUserInput
    collaboratorOnDrops?: CollaboratorAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    rentals?: RentalUncheckedCreateNestedManyWithoutUserInput
    collaboratorOnDrops?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type BuyerUpsertWithoutOrdersInput = {
    update: XOR<BuyerUpdateWithoutOrdersInput, BuyerUncheckedUpdateWithoutOrdersInput>
    create: XOR<BuyerCreateWithoutOrdersInput, BuyerUncheckedCreateWithoutOrdersInput>
    where?: BuyerWhereInput
  }

  export type BuyerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: BuyerWhereInput
    data: XOR<BuyerUpdateWithoutOrdersInput, BuyerUncheckedUpdateWithoutOrdersInput>
  }

  export type BuyerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUpdateManyWithoutBuyerNestedInput
  }

  export type BuyerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    itemId?: StringFilter<"OrderItem"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutOrdersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrdersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateManyWithWhereWithoutOrdersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrdersInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    telegram?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type OrderCreateWithoutBuyerInput = {
    id?: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    User?: UserCreateNestedManyWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutBuyerInput = {
    id?: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    User?: UserUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrderCreateOrConnectWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderCreateManyBuyerInputEnvelope = {
    data: OrderCreateManyBuyerInput | OrderCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type RentalCreateWithoutBuyerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
    item: ItemCreateNestedOneWithoutRentalInput
    User?: UserCreateNestedManyWithoutRentalsInput
  }

  export type RentalUncheckedCreateWithoutBuyerInput = {
    id?: string
    itemId: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
    User?: UserUncheckedCreateNestedManyWithoutRentalsInput
  }

  export type RentalCreateOrConnectWithoutBuyerInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutBuyerInput, RentalUncheckedCreateWithoutBuyerInput>
  }

  export type RentalCreateManyBuyerInputEnvelope = {
    data: RentalCreateManyBuyerInput | RentalCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
  }

  export type OrderUpdateManyWithWhereWithoutBuyerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBuyerInput>
  }

  export type RentalUpsertWithWhereUniqueWithoutBuyerInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutBuyerInput, RentalUncheckedUpdateWithoutBuyerInput>
    create: XOR<RentalCreateWithoutBuyerInput, RentalUncheckedCreateWithoutBuyerInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutBuyerInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutBuyerInput, RentalUncheckedUpdateWithoutBuyerInput>
  }

  export type RentalUpdateManyWithWhereWithoutBuyerInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ItemCreateWithoutOrderItemInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutItemsInput
    shipmentGroup?: ShipmentGroupCreateNestedOneWithoutItemsInput
    drop?: DropCreateNestedOneWithoutItemsInput
    rental?: RentalCreateNestedOneWithoutItemInput
    images?: ItemImageCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutOrderItemInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    shipmentGroupId?: string | null
    dropId?: string | null
    createdAt?: Date | string
    rental?: RentalUncheckedCreateNestedOneWithoutItemInput
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchUncheckedCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutOrderItemInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOrderItemInput, ItemUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    buyer: BuyerCreateNestedOneWithoutOrdersInput
    User?: UserCreateNestedManyWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    buyerId: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ItemUpsertWithoutOrderItemInput = {
    update: XOR<ItemUpdateWithoutOrderItemInput, ItemUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ItemCreateWithoutOrderItemInput, ItemUncheckedCreateWithoutOrderItemInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutOrderItemInput, ItemUncheckedUpdateWithoutOrderItemInput>
  }

  export type ItemUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutItemsNestedInput
    shipmentGroup?: ShipmentGroupUpdateOneWithoutItemsNestedInput
    drop?: DropUpdateOneWithoutItemsNestedInput
    rental?: RentalUpdateOneWithoutItemNestedInput
    images?: ItemImageUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: RentalUncheckedUpdateOneWithoutItemNestedInput
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUncheckedUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerUpdateOneRequiredWithoutOrdersNestedInput
    User?: UserUpdateManyWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ItemCreateWithoutRentalInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    createdAt?: Date | string
    supplier?: SupplierCreateNestedOneWithoutItemsInput
    shipmentGroup?: ShipmentGroupCreateNestedOneWithoutItemsInput
    drop?: DropCreateNestedOneWithoutItemsInput
    orderItem?: OrderItemCreateNestedOneWithoutItemInput
    images?: ItemImageCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutRentalInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    shipmentGroupId?: string | null
    dropId?: string | null
    createdAt?: Date | string
    orderItem?: OrderItemUncheckedCreateNestedOneWithoutItemInput
    images?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    ShipmentBatch?: ShipmentBatchUncheckedCreateNestedManyWithoutItemsInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutRentalInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutRentalInput, ItemUncheckedCreateWithoutRentalInput>
  }

  export type BuyerCreateWithoutRentalsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    address?: string | null
    address2?: string | null
    postalCode?: string | null
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutBuyerInput
  }

  export type BuyerUncheckedCreateWithoutRentalsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    address?: string | null
    address2?: string | null
    postalCode?: string | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type BuyerCreateOrConnectWithoutRentalsInput = {
    where: BuyerWhereUniqueInput
    create: XOR<BuyerCreateWithoutRentalsInput, BuyerUncheckedCreateWithoutRentalsInput>
  }

  export type UserCreateWithoutRentalsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    collaboratorOnDrops?: CollaboratorAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRentalsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    telegram?: string | null
    instagram?: string | null
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    collaboratorOnDrops?: CollaboratorAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRentalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
  }

  export type ItemUpsertWithoutRentalInput = {
    update: XOR<ItemUpdateWithoutRentalInput, ItemUncheckedUpdateWithoutRentalInput>
    create: XOR<ItemCreateWithoutRentalInput, ItemUncheckedCreateWithoutRentalInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutRentalInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutRentalInput, ItemUncheckedUpdateWithoutRentalInput>
  }

  export type ItemUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutItemsNestedInput
    shipmentGroup?: ShipmentGroupUpdateOneWithoutItemsNestedInput
    drop?: DropUpdateOneWithoutItemsNestedInput
    orderItem?: OrderItemUpdateOneWithoutItemNestedInput
    images?: ItemImageUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutRentalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItem?: OrderItemUncheckedUpdateOneWithoutItemNestedInput
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUncheckedUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type BuyerUpsertWithoutRentalsInput = {
    update: XOR<BuyerUpdateWithoutRentalsInput, BuyerUncheckedUpdateWithoutRentalsInput>
    create: XOR<BuyerCreateWithoutRentalsInput, BuyerUncheckedCreateWithoutRentalsInput>
    where?: BuyerWhereInput
  }

  export type BuyerUpdateToOneWithWhereWithoutRentalsInput = {
    where?: BuyerWhereInput
    data: XOR<BuyerUpdateWithoutRentalsInput, BuyerUncheckedUpdateWithoutRentalsInput>
  }

  export type BuyerUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutBuyerNestedInput
  }

  export type BuyerUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRentalsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRentalsInput, UserUncheckedUpdateWithoutRentalsInput>
    create: XOR<UserCreateWithoutRentalsInput, UserUncheckedCreateWithoutRentalsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRentalsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRentalsInput, UserUncheckedUpdateWithoutRentalsInput>
  }

  export type UserUpdateManyWithWhereWithoutRentalsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRentalsInput>
  }

  export type CollaboratorAssignmentCreateManyUserInput = {
    id?: string
    dropId?: string | null
    itemId?: string | null
    type: $Enums.CommissionType
    value: number
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: BuyerUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    item?: ItemUpdateOneRequiredWithoutRentalNestedInput
    buyer?: BuyerUpdateOneRequiredWithoutRentalsNestedInput
  }

  export type RentalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
  }

  export type RentalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
  }

  export type CollaboratorAssignmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
    drop?: DropUpdateOneWithoutCollaboratorsNestedInput
    item?: ItemUpdateOneWithoutCollaboratorAssignmentNestedInput
  }

  export type CollaboratorAssignmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type CollaboratorAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemCreateManySupplierInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    shipmentGroupId?: string | null
    dropId?: string | null
    createdAt?: Date | string
  }

  export type ItemUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentGroup?: ShipmentGroupUpdateOneWithoutItemsNestedInput
    drop?: DropUpdateOneWithoutItemsNestedInput
    rental?: RentalUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUpdateOneWithoutItemNestedInput
    images?: ItemImageUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: RentalUncheckedUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUncheckedUpdateOneWithoutItemNestedInput
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUncheckedUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageCreateManyItemInput = {
    id?: string
    url: string
    position: number
    uploadedAt?: Date | string
  }

  export type CollaboratorAssignmentCreateManyItemInput = {
    id?: string
    userId: string
    dropId?: string | null
    type: $Enums.CommissionType
    value: number
  }

  export type ItemImageUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemImageUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentBatchUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentBatchUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentBatchUncheckedUpdateManyWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    status?: EnumBatchStatusFieldUpdateOperationsInput | $Enums.BatchStatus
    trackingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorAssignmentUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCollaboratorOnDropsNestedInput
    drop?: DropUpdateOneWithoutCollaboratorsNestedInput
  }

  export type CollaboratorAssignmentUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type CollaboratorAssignmentUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemCreateManyShipmentGroupInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    dropId?: string | null
    createdAt?: Date | string
  }

  export type ItemUpdateWithoutShipmentGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutItemsNestedInput
    drop?: DropUpdateOneWithoutItemsNestedInput
    rental?: RentalUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUpdateOneWithoutItemNestedInput
    images?: ItemImageUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutShipmentGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: RentalUncheckedUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUncheckedUpdateOneWithoutItemNestedInput
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUncheckedUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutShipmentGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpdateWithoutShipmentBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutItemsNestedInput
    shipmentGroup?: ShipmentGroupUpdateOneWithoutItemsNestedInput
    drop?: DropUpdateOneWithoutItemsNestedInput
    rental?: RentalUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUpdateOneWithoutItemNestedInput
    images?: ItemImageUpdateManyWithoutItemNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutShipmentBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: RentalUncheckedUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUncheckedUpdateOneWithoutItemNestedInput
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutShipmentBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    dropId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyDropInput = {
    id?: string
    name: string
    description?: string | null
    size?: string | null
    color?: string | null
    condition?: string | null
    purchasePrice: number
    salePrice?: number | null
    profit?: number | null
    supplierId?: string | null
    shipmentGroupId?: string | null
    createdAt?: Date | string
  }

  export type CollaboratorAssignmentCreateManyDropInput = {
    id?: string
    userId: string
    itemId?: string | null
    type: $Enums.CommissionType
    value: number
  }

  export type ItemUpdateWithoutDropInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneWithoutItemsNestedInput
    shipmentGroup?: ShipmentGroupUpdateOneWithoutItemsNestedInput
    rental?: RentalUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUpdateOneWithoutItemNestedInput
    images?: ItemImageUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutDropInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rental?: RentalUncheckedUpdateOneWithoutItemNestedInput
    orderItem?: OrderItemUncheckedUpdateOneWithoutItemNestedInput
    images?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    ShipmentBatch?: ShipmentBatchUncheckedUpdateManyWithoutItemsNestedInput
    CollaboratorAssignment?: CollaboratorAssignmentUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutDropInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    salePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    profit?: NullableFloatFieldUpdateOperationsInput | number | null
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorAssignmentUpdateWithoutDropInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCollaboratorOnDropsNestedInput
    item?: ItemUpdateOneWithoutCollaboratorAssignmentNestedInput
  }

  export type CollaboratorAssignmentUncheckedUpdateWithoutDropInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type CollaboratorAssignmentUncheckedUpdateManyWithoutDropInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCommissionTypeFieldUpdateOperationsInput | $Enums.CommissionType
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    itemId: string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: ItemUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUpdateManyWithoutUserNestedInput
    collaboratorOnDrops?: CollaboratorAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentals?: RentalUncheckedUpdateManyWithoutUserNestedInput
    collaboratorOnDrops?: CollaboratorAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyBuyerInput = {
    id?: string
    shippingFee: number
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    paymentMethod?: $Enums.PaymentMethod | null
    paymentRef?: string | null
    proofImage?: string | null
    invoiceUrl?: string | null
    createdAt?: Date | string
  }

  export type RentalCreateManyBuyerInput = {
    id?: string
    itemId: string
    startDate: Date | string
    endDate: Date | string
    deposit: number
    rentalFee: number
    penalty?: number | null
    returnedAt?: Date | string | null
    returnNotes?: string | null
    status: $Enums.RentalStatus
  }

  export type OrderUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    User?: UserUpdateManyWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    User?: UserUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shippingFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    paymentRef?: NullableStringFieldUpdateOperationsInput | string | null
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    item?: ItemUpdateOneRequiredWithoutRentalNestedInput
    User?: UserUpdateManyWithoutRentalsNestedInput
  }

  export type RentalUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    User?: UserUncheckedUpdateManyWithoutRentalsNestedInput
  }

  export type RentalUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: FloatFieldUpdateOperationsInput | number
    rentalFee?: FloatFieldUpdateOperationsInput | number
    penalty?: NullableFloatFieldUpdateOperationsInput | number | null
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    returnNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
  }

  export type UserUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    collaboratorOnDrops?: CollaboratorAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    collaboratorOnDrops?: CollaboratorAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}