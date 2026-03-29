
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model ApprovalRule
 * 
 */
export type ApprovalRule = $Result.DefaultSelection<Prisma.$ApprovalRulePayload>
/**
 * Model ApprovalStep
 * 
 */
export type ApprovalStep = $Result.DefaultSelection<Prisma.$ApprovalStepPayload>
/**
 * Model ExpenseApproval
 * 
 */
export type ExpenseApproval = $Result.DefaultSelection<Prisma.$ExpenseApprovalPayload>
/**
 * Model OCRData
 * 
 */
export type OCRData = $Result.DefaultSelection<Prisma.$OCRDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ExpenseStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  IN_REVIEW: 'IN_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ExpenseStatus = (typeof ExpenseStatus)[keyof typeof ExpenseStatus]


export const ApprovalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ExpenseStatus = $Enums.ExpenseStatus

export const ExpenseStatus: typeof $Enums.ExpenseStatus

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvalRule`: Exposes CRUD operations for the **ApprovalRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovalRules
    * const approvalRules = await prisma.approvalRule.findMany()
    * ```
    */
  get approvalRule(): Prisma.ApprovalRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvalStep`: Exposes CRUD operations for the **ApprovalStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovalSteps
    * const approvalSteps = await prisma.approvalStep.findMany()
    * ```
    */
  get approvalStep(): Prisma.ApprovalStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseApproval`: Exposes CRUD operations for the **ExpenseApproval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseApprovals
    * const expenseApprovals = await prisma.expenseApproval.findMany()
    * ```
    */
  get expenseApproval(): Prisma.ExpenseApprovalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oCRData`: Exposes CRUD operations for the **OCRData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OCRData
    * const oCRData = await prisma.oCRData.findMany()
    * ```
    */
  get oCRData(): Prisma.OCRDataDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Company: 'Company',
    User: 'User',
    Expense: 'Expense',
    ApprovalRule: 'ApprovalRule',
    ApprovalStep: 'ApprovalStep',
    ExpenseApproval: 'ExpenseApproval',
    OCRData: 'OCRData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "user" | "expense" | "approvalRule" | "approvalStep" | "expenseApproval" | "oCRData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
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
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      ApprovalRule: {
        payload: Prisma.$ApprovalRulePayload<ExtArgs>
        fields: Prisma.ApprovalRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          findFirst: {
            args: Prisma.ApprovalRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          findMany: {
            args: Prisma.ApprovalRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>[]
          }
          create: {
            args: Prisma.ApprovalRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          createMany: {
            args: Prisma.ApprovalRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>[]
          }
          delete: {
            args: Prisma.ApprovalRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          update: {
            args: Prisma.ApprovalRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          deleteMany: {
            args: Prisma.ApprovalRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>[]
          }
          upsert: {
            args: Prisma.ApprovalRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          aggregate: {
            args: Prisma.ApprovalRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovalRule>
          }
          groupBy: {
            args: Prisma.ApprovalRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalRuleCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRuleCountAggregateOutputType> | number
          }
        }
      }
      ApprovalStep: {
        payload: Prisma.$ApprovalStepPayload<ExtArgs>
        fields: Prisma.ApprovalStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          findFirst: {
            args: Prisma.ApprovalStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          findMany: {
            args: Prisma.ApprovalStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>[]
          }
          create: {
            args: Prisma.ApprovalStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          createMany: {
            args: Prisma.ApprovalStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>[]
          }
          delete: {
            args: Prisma.ApprovalStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          update: {
            args: Prisma.ApprovalStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>[]
          }
          upsert: {
            args: Prisma.ApprovalStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          aggregate: {
            args: Prisma.ApprovalStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovalStep>
          }
          groupBy: {
            args: Prisma.ApprovalStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalStepCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalStepCountAggregateOutputType> | number
          }
        }
      }
      ExpenseApproval: {
        payload: Prisma.$ExpenseApprovalPayload<ExtArgs>
        fields: Prisma.ExpenseApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload>
          }
          findFirst: {
            args: Prisma.ExpenseApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload>
          }
          findMany: {
            args: Prisma.ExpenseApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload>[]
          }
          create: {
            args: Prisma.ExpenseApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload>
          }
          createMany: {
            args: Prisma.ExpenseApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload>[]
          }
          delete: {
            args: Prisma.ExpenseApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload>
          }
          update: {
            args: Prisma.ExpenseApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseApprovalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseApprovalPayload>
          }
          aggregate: {
            args: Prisma.ExpenseApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseApproval>
          }
          groupBy: {
            args: Prisma.ExpenseApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseApprovalCountAggregateOutputType> | number
          }
        }
      }
      OCRData: {
        payload: Prisma.$OCRDataPayload<ExtArgs>
        fields: Prisma.OCRDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OCRDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OCRDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload>
          }
          findFirst: {
            args: Prisma.OCRDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OCRDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload>
          }
          findMany: {
            args: Prisma.OCRDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload>[]
          }
          create: {
            args: Prisma.OCRDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload>
          }
          createMany: {
            args: Prisma.OCRDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OCRDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload>[]
          }
          delete: {
            args: Prisma.OCRDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload>
          }
          update: {
            args: Prisma.OCRDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload>
          }
          deleteMany: {
            args: Prisma.OCRDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OCRDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OCRDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload>[]
          }
          upsert: {
            args: Prisma.OCRDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OCRDataPayload>
          }
          aggregate: {
            args: Prisma.OCRDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOCRData>
          }
          groupBy: {
            args: Prisma.OCRDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<OCRDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.OCRDataCountArgs<ExtArgs>
            result: $Utils.Optional<OCRDataCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    user?: UserOmit
    expense?: ExpenseOmit
    approvalRule?: ApprovalRuleOmit
    approvalStep?: ApprovalStepOmit
    expenseApproval?: ExpenseApprovalOmit
    oCRData?: OCRDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    expenses: number
    approvalRules: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    expenses?: boolean | CompanyCountOutputTypeCountExpensesArgs
    approvalRules?: boolean | CompanyCountOutputTypeCountApprovalRulesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountApprovalRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRuleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subordinates: number
    expenses: number
    approvals: number
    approvalSteps: number
    rules: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subordinates?: boolean | UserCountOutputTypeCountSubordinatesArgs
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    approvals?: boolean | UserCountOutputTypeCountApprovalsArgs
    approvalSteps?: boolean | UserCountOutputTypeCountApprovalStepsArgs
    rules?: boolean | UserCountOutputTypeCountRulesArgs
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
  export type UserCountOutputTypeCountSubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseApprovalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalStepWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRuleWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    approvals: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvals?: boolean | ExpenseCountOutputTypeCountApprovalsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseApprovalWhereInput
  }


  /**
   * Count Type ApprovalRuleCountOutputType
   */

  export type ApprovalRuleCountOutputType = {
    steps: number
  }

  export type ApprovalRuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | ApprovalRuleCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * ApprovalRuleCountOutputType without action
   */
  export type ApprovalRuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleCountOutputType
     */
    select?: ApprovalRuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApprovalRuleCountOutputType without action
   */
  export type ApprovalRuleCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalStepWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    currencyCode: string | null
    createdAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    currencyCode: string | null
    createdAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    country: number
    currencyCode: number
    createdAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    currencyCode?: true
    createdAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    currencyCode?: true
    createdAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    currencyCode?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    country: string
    currencyCode: string
    createdAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    currencyCode?: boolean
    createdAt?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    expenses?: boolean | Company$expensesArgs<ExtArgs>
    approvalRules?: boolean | Company$approvalRulesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    currencyCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    currencyCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    currencyCode?: boolean
    createdAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "currencyCode" | "createdAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    expenses?: boolean | Company$expensesArgs<ExtArgs>
    approvalRules?: boolean | Company$approvalRulesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      approvalRules: Prisma.$ApprovalRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string
      currencyCode: string
      createdAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Company$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Company$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvalRules<T extends Company$approvalRulesArgs<ExtArgs> = {}>(args?: Subset<T, Company$approvalRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly country: FieldRef<"Company", 'String'>
    readonly currencyCode: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Company.expenses
   */
  export type Company$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Company.approvalRules
   */
  export type Company$approvalRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    where?: ApprovalRuleWhereInput
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    cursor?: ApprovalRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


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
    companyId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    managerId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    managerId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    companyId: number
    name: number
    email: number
    passwordHash: number
    role: number
    managerId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    managerId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    managerId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    managerId?: true
    createdAt?: true
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
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId: string | null
    createdAt: Date
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
    companyId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    managerId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    approvalSteps?: boolean | User$approvalStepsArgs<ExtArgs>
    rules?: boolean | User$rulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    managerId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    managerId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    companyId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    managerId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "name" | "email" | "passwordHash" | "role" | "managerId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    approvalSteps?: boolean | User$approvalStepsArgs<ExtArgs>
    rules?: boolean | User$rulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      manager: Prisma.$UserPayload<ExtArgs> | null
      subordinates: Prisma.$UserPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      approvals: Prisma.$ExpenseApprovalPayload<ExtArgs>[]
      approvalSteps: Prisma.$ApprovalStepPayload<ExtArgs>[]
      rules: Prisma.$ApprovalRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      managerId: string | null
      createdAt: Date
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
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manager<T extends User$managerArgs<ExtArgs> = {}>(args?: Subset<T, User$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subordinates<T extends User$subordinatesArgs<ExtArgs> = {}>(args?: Subset<T, User$subordinatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvals<T extends User$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvalSteps<T extends User$approvalStepsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalStepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rules<T extends User$rulesArgs<ExtArgs> = {}>(args?: Subset<T, User$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly companyId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly managerId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.manager
   */
  export type User$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * User.subordinates
   */
  export type User$subordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.approvals
   */
  export type User$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    where?: ExpenseApprovalWhereInput
    orderBy?: ExpenseApprovalOrderByWithRelationInput | ExpenseApprovalOrderByWithRelationInput[]
    cursor?: ExpenseApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseApprovalScalarFieldEnum | ExpenseApprovalScalarFieldEnum[]
  }

  /**
   * User.approvalSteps
   */
  export type User$approvalStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    where?: ApprovalStepWhereInput
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    cursor?: ApprovalStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * User.rules
   */
  export type User$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    where?: ApprovalRuleWhereInput
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    cursor?: ApprovalRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
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
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amountOriginal: number | null
    amountConverted: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amountOriginal: number | null
    amountConverted: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    employeeId: string | null
    amountOriginal: number | null
    currencyOriginal: string | null
    amountConverted: number | null
    category: string | null
    description: string | null
    remarks: string | null
    date: Date | null
    receiptUrl: string | null
    status: $Enums.ExpenseStatus | null
    createdAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    employeeId: string | null
    amountOriginal: number | null
    currencyOriginal: string | null
    amountConverted: number | null
    category: string | null
    description: string | null
    remarks: string | null
    date: Date | null
    receiptUrl: string | null
    status: $Enums.ExpenseStatus | null
    createdAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    companyId: number
    employeeId: number
    amountOriginal: number
    currencyOriginal: number
    amountConverted: number
    category: number
    description: number
    remarks: number
    date: number
    receiptUrl: number
    status: number
    createdAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amountOriginal?: true
    amountConverted?: true
  }

  export type ExpenseSumAggregateInputType = {
    amountOriginal?: true
    amountConverted?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    companyId?: true
    employeeId?: true
    amountOriginal?: true
    currencyOriginal?: true
    amountConverted?: true
    category?: true
    description?: true
    remarks?: true
    date?: true
    receiptUrl?: true
    status?: true
    createdAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    companyId?: true
    employeeId?: true
    amountOriginal?: true
    currencyOriginal?: true
    amountConverted?: true
    category?: true
    description?: true
    remarks?: true
    date?: true
    receiptUrl?: true
    status?: true
    createdAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    companyId?: true
    employeeId?: true
    amountOriginal?: true
    currencyOriginal?: true
    amountConverted?: true
    category?: true
    description?: true
    remarks?: true
    date?: true
    receiptUrl?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    companyId: string
    employeeId: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks: string | null
    date: Date
    receiptUrl: string | null
    status: $Enums.ExpenseStatus
    createdAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    employeeId?: boolean
    amountOriginal?: boolean
    currencyOriginal?: boolean
    amountConverted?: boolean
    category?: boolean
    description?: boolean
    remarks?: boolean
    date?: boolean
    receiptUrl?: boolean
    status?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    approvals?: boolean | Expense$approvalsArgs<ExtArgs>
    ocrData?: boolean | Expense$ocrDataArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    employeeId?: boolean
    amountOriginal?: boolean
    currencyOriginal?: boolean
    amountConverted?: boolean
    category?: boolean
    description?: boolean
    remarks?: boolean
    date?: boolean
    receiptUrl?: boolean
    status?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    employeeId?: boolean
    amountOriginal?: boolean
    currencyOriginal?: boolean
    amountConverted?: boolean
    category?: boolean
    description?: boolean
    remarks?: boolean
    date?: boolean
    receiptUrl?: boolean
    status?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    companyId?: boolean
    employeeId?: boolean
    amountOriginal?: boolean
    currencyOriginal?: boolean
    amountConverted?: boolean
    category?: boolean
    description?: boolean
    remarks?: boolean
    date?: boolean
    receiptUrl?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "employeeId" | "amountOriginal" | "currencyOriginal" | "amountConverted" | "category" | "description" | "remarks" | "date" | "receiptUrl" | "status" | "createdAt", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    approvals?: boolean | Expense$approvalsArgs<ExtArgs>
    ocrData?: boolean | Expense$ocrDataArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      employee: Prisma.$UserPayload<ExtArgs>
      approvals: Prisma.$ExpenseApprovalPayload<ExtArgs>[]
      ocrData: Prisma.$OCRDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      employeeId: string
      amountOriginal: number
      currencyOriginal: string
      amountConverted: number
      category: string
      description: string
      remarks: string | null
      date: Date
      receiptUrl: string | null
      status: $Enums.ExpenseStatus
      createdAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
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
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvals<T extends Expense$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, Expense$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ocrData<T extends Expense$ocrDataArgs<ExtArgs> = {}>(args?: Subset<T, Expense$ocrDataArgs<ExtArgs>>): Prisma__OCRDataClient<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly companyId: FieldRef<"Expense", 'String'>
    readonly employeeId: FieldRef<"Expense", 'String'>
    readonly amountOriginal: FieldRef<"Expense", 'Float'>
    readonly currencyOriginal: FieldRef<"Expense", 'String'>
    readonly amountConverted: FieldRef<"Expense", 'Float'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly remarks: FieldRef<"Expense", 'String'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly receiptUrl: FieldRef<"Expense", 'String'>
    readonly status: FieldRef<"Expense", 'ExpenseStatus'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.approvals
   */
  export type Expense$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    where?: ExpenseApprovalWhereInput
    orderBy?: ExpenseApprovalOrderByWithRelationInput | ExpenseApprovalOrderByWithRelationInput[]
    cursor?: ExpenseApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseApprovalScalarFieldEnum | ExpenseApprovalScalarFieldEnum[]
  }

  /**
   * Expense.ocrData
   */
  export type Expense$ocrDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    where?: OCRDataWhereInput
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model ApprovalRule
   */

  export type AggregateApprovalRule = {
    _count: ApprovalRuleCountAggregateOutputType | null
    _avg: ApprovalRuleAvgAggregateOutputType | null
    _sum: ApprovalRuleSumAggregateOutputType | null
    _min: ApprovalRuleMinAggregateOutputType | null
    _max: ApprovalRuleMaxAggregateOutputType | null
  }

  export type ApprovalRuleAvgAggregateOutputType = {
    minApprovalPercentage: number | null
  }

  export type ApprovalRuleSumAggregateOutputType = {
    minApprovalPercentage: number | null
  }

  export type ApprovalRuleMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    userId: string | null
    ruleName: string | null
    description: string | null
    isManagerApprover: boolean | null
    isSequential: boolean | null
    minApprovalPercentage: number | null
    createdAt: Date | null
  }

  export type ApprovalRuleMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    userId: string | null
    ruleName: string | null
    description: string | null
    isManagerApprover: boolean | null
    isSequential: boolean | null
    minApprovalPercentage: number | null
    createdAt: Date | null
  }

  export type ApprovalRuleCountAggregateOutputType = {
    id: number
    companyId: number
    userId: number
    ruleName: number
    description: number
    isManagerApprover: number
    isSequential: number
    minApprovalPercentage: number
    createdAt: number
    _all: number
  }


  export type ApprovalRuleAvgAggregateInputType = {
    minApprovalPercentage?: true
  }

  export type ApprovalRuleSumAggregateInputType = {
    minApprovalPercentage?: true
  }

  export type ApprovalRuleMinAggregateInputType = {
    id?: true
    companyId?: true
    userId?: true
    ruleName?: true
    description?: true
    isManagerApprover?: true
    isSequential?: true
    minApprovalPercentage?: true
    createdAt?: true
  }

  export type ApprovalRuleMaxAggregateInputType = {
    id?: true
    companyId?: true
    userId?: true
    ruleName?: true
    description?: true
    isManagerApprover?: true
    isSequential?: true
    minApprovalPercentage?: true
    createdAt?: true
  }

  export type ApprovalRuleCountAggregateInputType = {
    id?: true
    companyId?: true
    userId?: true
    ruleName?: true
    description?: true
    isManagerApprover?: true
    isSequential?: true
    minApprovalPercentage?: true
    createdAt?: true
    _all?: true
  }

  export type ApprovalRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRule to aggregate.
     */
    where?: ApprovalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRules to fetch.
     */
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovalRules
    **/
    _count?: true | ApprovalRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalRuleMaxAggregateInputType
  }

  export type GetApprovalRuleAggregateType<T extends ApprovalRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovalRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovalRule[P]>
      : GetScalarType<T[P], AggregateApprovalRule[P]>
  }




  export type ApprovalRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRuleWhereInput
    orderBy?: ApprovalRuleOrderByWithAggregationInput | ApprovalRuleOrderByWithAggregationInput[]
    by: ApprovalRuleScalarFieldEnum[] | ApprovalRuleScalarFieldEnum
    having?: ApprovalRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalRuleCountAggregateInputType | true
    _avg?: ApprovalRuleAvgAggregateInputType
    _sum?: ApprovalRuleSumAggregateInputType
    _min?: ApprovalRuleMinAggregateInputType
    _max?: ApprovalRuleMaxAggregateInputType
  }

  export type ApprovalRuleGroupByOutputType = {
    id: string
    companyId: string
    userId: string
    ruleName: string
    description: string | null
    isManagerApprover: boolean
    isSequential: boolean
    minApprovalPercentage: number
    createdAt: Date
    _count: ApprovalRuleCountAggregateOutputType | null
    _avg: ApprovalRuleAvgAggregateOutputType | null
    _sum: ApprovalRuleSumAggregateOutputType | null
    _min: ApprovalRuleMinAggregateOutputType | null
    _max: ApprovalRuleMaxAggregateOutputType | null
  }

  type GetApprovalRuleGroupByPayload<T extends ApprovalRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalRuleGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    userId?: boolean
    ruleName?: boolean
    description?: boolean
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    steps?: boolean | ApprovalRule$stepsArgs<ExtArgs>
    _count?: boolean | ApprovalRuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRule"]>

  export type ApprovalRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    userId?: boolean
    ruleName?: boolean
    description?: boolean
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRule"]>

  export type ApprovalRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    userId?: boolean
    ruleName?: boolean
    description?: boolean
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRule"]>

  export type ApprovalRuleSelectScalar = {
    id?: boolean
    companyId?: boolean
    userId?: boolean
    ruleName?: boolean
    description?: boolean
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: boolean
    createdAt?: boolean
  }

  export type ApprovalRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "userId" | "ruleName" | "description" | "isManagerApprover" | "isSequential" | "minApprovalPercentage" | "createdAt", ExtArgs["result"]["approvalRule"]>
  export type ApprovalRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    steps?: boolean | ApprovalRule$stepsArgs<ExtArgs>
    _count?: boolean | ApprovalRuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApprovalRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApprovalRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovalRule"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      steps: Prisma.$ApprovalStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      userId: string
      ruleName: string
      description: string | null
      isManagerApprover: boolean
      isSequential: boolean
      minApprovalPercentage: number
      createdAt: Date
    }, ExtArgs["result"]["approvalRule"]>
    composites: {}
  }

  type ApprovalRuleGetPayload<S extends boolean | null | undefined | ApprovalRuleDefaultArgs> = $Result.GetResult<Prisma.$ApprovalRulePayload, S>

  type ApprovalRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalRuleCountAggregateInputType | true
    }

  export interface ApprovalRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovalRule'], meta: { name: 'ApprovalRule' } }
    /**
     * Find zero or one ApprovalRule that matches the filter.
     * @param {ApprovalRuleFindUniqueArgs} args - Arguments to find a ApprovalRule
     * @example
     * // Get one ApprovalRule
     * const approvalRule = await prisma.approvalRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalRuleFindUniqueArgs>(args: SelectSubset<T, ApprovalRuleFindUniqueArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovalRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalRuleFindUniqueOrThrowArgs} args - Arguments to find a ApprovalRule
     * @example
     * // Get one ApprovalRule
     * const approvalRule = await prisma.approvalRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleFindFirstArgs} args - Arguments to find a ApprovalRule
     * @example
     * // Get one ApprovalRule
     * const approvalRule = await prisma.approvalRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalRuleFindFirstArgs>(args?: SelectSubset<T, ApprovalRuleFindFirstArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleFindFirstOrThrowArgs} args - Arguments to find a ApprovalRule
     * @example
     * // Get one ApprovalRule
     * const approvalRule = await prisma.approvalRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovalRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalRules
     * const approvalRules = await prisma.approvalRule.findMany()
     * 
     * // Get first 10 ApprovalRules
     * const approvalRules = await prisma.approvalRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalRuleWithIdOnly = await prisma.approvalRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalRuleFindManyArgs>(args?: SelectSubset<T, ApprovalRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovalRule.
     * @param {ApprovalRuleCreateArgs} args - Arguments to create a ApprovalRule.
     * @example
     * // Create one ApprovalRule
     * const ApprovalRule = await prisma.approvalRule.create({
     *   data: {
     *     // ... data to create a ApprovalRule
     *   }
     * })
     * 
     */
    create<T extends ApprovalRuleCreateArgs>(args: SelectSubset<T, ApprovalRuleCreateArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovalRules.
     * @param {ApprovalRuleCreateManyArgs} args - Arguments to create many ApprovalRules.
     * @example
     * // Create many ApprovalRules
     * const approvalRule = await prisma.approvalRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalRuleCreateManyArgs>(args?: SelectSubset<T, ApprovalRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApprovalRules and returns the data saved in the database.
     * @param {ApprovalRuleCreateManyAndReturnArgs} args - Arguments to create many ApprovalRules.
     * @example
     * // Create many ApprovalRules
     * const approvalRule = await prisma.approvalRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApprovalRules and only return the `id`
     * const approvalRuleWithIdOnly = await prisma.approvalRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApprovalRule.
     * @param {ApprovalRuleDeleteArgs} args - Arguments to delete one ApprovalRule.
     * @example
     * // Delete one ApprovalRule
     * const ApprovalRule = await prisma.approvalRule.delete({
     *   where: {
     *     // ... filter to delete one ApprovalRule
     *   }
     * })
     * 
     */
    delete<T extends ApprovalRuleDeleteArgs>(args: SelectSubset<T, ApprovalRuleDeleteArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovalRule.
     * @param {ApprovalRuleUpdateArgs} args - Arguments to update one ApprovalRule.
     * @example
     * // Update one ApprovalRule
     * const approvalRule = await prisma.approvalRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalRuleUpdateArgs>(args: SelectSubset<T, ApprovalRuleUpdateArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovalRules.
     * @param {ApprovalRuleDeleteManyArgs} args - Arguments to filter ApprovalRules to delete.
     * @example
     * // Delete a few ApprovalRules
     * const { count } = await prisma.approvalRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalRuleDeleteManyArgs>(args?: SelectSubset<T, ApprovalRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalRules
     * const approvalRule = await prisma.approvalRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalRuleUpdateManyArgs>(args: SelectSubset<T, ApprovalRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRules and returns the data updated in the database.
     * @param {ApprovalRuleUpdateManyAndReturnArgs} args - Arguments to update many ApprovalRules.
     * @example
     * // Update many ApprovalRules
     * const approvalRule = await prisma.approvalRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApprovalRules and only return the `id`
     * const approvalRuleWithIdOnly = await prisma.approvalRule.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApprovalRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApprovalRule.
     * @param {ApprovalRuleUpsertArgs} args - Arguments to update or create a ApprovalRule.
     * @example
     * // Update or create a ApprovalRule
     * const approvalRule = await prisma.approvalRule.upsert({
     *   create: {
     *     // ... data to create a ApprovalRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalRule we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalRuleUpsertArgs>(args: SelectSubset<T, ApprovalRuleUpsertArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovalRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleCountArgs} args - Arguments to filter ApprovalRules to count.
     * @example
     * // Count the number of ApprovalRules
     * const count = await prisma.approvalRule.count({
     *   where: {
     *     // ... the filter for the ApprovalRules we want to count
     *   }
     * })
    **/
    count<T extends ApprovalRuleCountArgs>(
      args?: Subset<T, ApprovalRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovalRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprovalRuleAggregateArgs>(args: Subset<T, ApprovalRuleAggregateArgs>): Prisma.PrismaPromise<GetApprovalRuleAggregateType<T>>

    /**
     * Group by ApprovalRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleGroupByArgs} args - Group by arguments.
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
      T extends ApprovalRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalRuleGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApprovalRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovalRule model
   */
  readonly fields: ApprovalRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovalRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    steps<T extends ApprovalRule$stepsArgs<ExtArgs> = {}>(args?: Subset<T, ApprovalRule$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ApprovalRule model
   */
  interface ApprovalRuleFieldRefs {
    readonly id: FieldRef<"ApprovalRule", 'String'>
    readonly companyId: FieldRef<"ApprovalRule", 'String'>
    readonly userId: FieldRef<"ApprovalRule", 'String'>
    readonly ruleName: FieldRef<"ApprovalRule", 'String'>
    readonly description: FieldRef<"ApprovalRule", 'String'>
    readonly isManagerApprover: FieldRef<"ApprovalRule", 'Boolean'>
    readonly isSequential: FieldRef<"ApprovalRule", 'Boolean'>
    readonly minApprovalPercentage: FieldRef<"ApprovalRule", 'Int'>
    readonly createdAt: FieldRef<"ApprovalRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApprovalRule findUnique
   */
  export type ApprovalRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRule to fetch.
     */
    where: ApprovalRuleWhereUniqueInput
  }

  /**
   * ApprovalRule findUniqueOrThrow
   */
  export type ApprovalRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRule to fetch.
     */
    where: ApprovalRuleWhereUniqueInput
  }

  /**
   * ApprovalRule findFirst
   */
  export type ApprovalRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRule to fetch.
     */
    where?: ApprovalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRules to fetch.
     */
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRules.
     */
    cursor?: ApprovalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRules.
     */
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
  }

  /**
   * ApprovalRule findFirstOrThrow
   */
  export type ApprovalRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRule to fetch.
     */
    where?: ApprovalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRules to fetch.
     */
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRules.
     */
    cursor?: ApprovalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRules.
     */
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
  }

  /**
   * ApprovalRule findMany
   */
  export type ApprovalRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRules to fetch.
     */
    where?: ApprovalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRules to fetch.
     */
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovalRules.
     */
    cursor?: ApprovalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRules.
     */
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
  }

  /**
   * ApprovalRule create
   */
  export type ApprovalRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a ApprovalRule.
     */
    data: XOR<ApprovalRuleCreateInput, ApprovalRuleUncheckedCreateInput>
  }

  /**
   * ApprovalRule createMany
   */
  export type ApprovalRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalRules.
     */
    data: ApprovalRuleCreateManyInput | ApprovalRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovalRule createManyAndReturn
   */
  export type ApprovalRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * The data used to create many ApprovalRules.
     */
    data: ApprovalRuleCreateManyInput | ApprovalRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRule update
   */
  export type ApprovalRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a ApprovalRule.
     */
    data: XOR<ApprovalRuleUpdateInput, ApprovalRuleUncheckedUpdateInput>
    /**
     * Choose, which ApprovalRule to update.
     */
    where: ApprovalRuleWhereUniqueInput
  }

  /**
   * ApprovalRule updateMany
   */
  export type ApprovalRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalRules.
     */
    data: XOR<ApprovalRuleUpdateManyMutationInput, ApprovalRuleUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRules to update
     */
    where?: ApprovalRuleWhereInput
    /**
     * Limit how many ApprovalRules to update.
     */
    limit?: number
  }

  /**
   * ApprovalRule updateManyAndReturn
   */
  export type ApprovalRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * The data used to update ApprovalRules.
     */
    data: XOR<ApprovalRuleUpdateManyMutationInput, ApprovalRuleUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRules to update
     */
    where?: ApprovalRuleWhereInput
    /**
     * Limit how many ApprovalRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRule upsert
   */
  export type ApprovalRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the ApprovalRule to update in case it exists.
     */
    where: ApprovalRuleWhereUniqueInput
    /**
     * In case the ApprovalRule found by the `where` argument doesn't exist, create a new ApprovalRule with this data.
     */
    create: XOR<ApprovalRuleCreateInput, ApprovalRuleUncheckedCreateInput>
    /**
     * In case the ApprovalRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalRuleUpdateInput, ApprovalRuleUncheckedUpdateInput>
  }

  /**
   * ApprovalRule delete
   */
  export type ApprovalRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter which ApprovalRule to delete.
     */
    where: ApprovalRuleWhereUniqueInput
  }

  /**
   * ApprovalRule deleteMany
   */
  export type ApprovalRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRules to delete
     */
    where?: ApprovalRuleWhereInput
    /**
     * Limit how many ApprovalRules to delete.
     */
    limit?: number
  }

  /**
   * ApprovalRule.steps
   */
  export type ApprovalRule$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    where?: ApprovalStepWhereInput
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    cursor?: ApprovalStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * ApprovalRule without action
   */
  export type ApprovalRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
  }


  /**
   * Model ApprovalStep
   */

  export type AggregateApprovalStep = {
    _count: ApprovalStepCountAggregateOutputType | null
    _avg: ApprovalStepAvgAggregateOutputType | null
    _sum: ApprovalStepSumAggregateOutputType | null
    _min: ApprovalStepMinAggregateOutputType | null
    _max: ApprovalStepMaxAggregateOutputType | null
  }

  export type ApprovalStepAvgAggregateOutputType = {
    stepOrder: number | null
  }

  export type ApprovalStepSumAggregateOutputType = {
    stepOrder: number | null
  }

  export type ApprovalStepMinAggregateOutputType = {
    id: string | null
    ruleId: string | null
    approverId: string | null
    stepOrder: number | null
    isRequired: boolean | null
  }

  export type ApprovalStepMaxAggregateOutputType = {
    id: string | null
    ruleId: string | null
    approverId: string | null
    stepOrder: number | null
    isRequired: boolean | null
  }

  export type ApprovalStepCountAggregateOutputType = {
    id: number
    ruleId: number
    approverId: number
    stepOrder: number
    isRequired: number
    _all: number
  }


  export type ApprovalStepAvgAggregateInputType = {
    stepOrder?: true
  }

  export type ApprovalStepSumAggregateInputType = {
    stepOrder?: true
  }

  export type ApprovalStepMinAggregateInputType = {
    id?: true
    ruleId?: true
    approverId?: true
    stepOrder?: true
    isRequired?: true
  }

  export type ApprovalStepMaxAggregateInputType = {
    id?: true
    ruleId?: true
    approverId?: true
    stepOrder?: true
    isRequired?: true
  }

  export type ApprovalStepCountAggregateInputType = {
    id?: true
    ruleId?: true
    approverId?: true
    stepOrder?: true
    isRequired?: true
    _all?: true
  }

  export type ApprovalStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalStep to aggregate.
     */
    where?: ApprovalStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalSteps to fetch.
     */
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovalSteps
    **/
    _count?: true | ApprovalStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalStepMaxAggregateInputType
  }

  export type GetApprovalStepAggregateType<T extends ApprovalStepAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovalStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovalStep[P]>
      : GetScalarType<T[P], AggregateApprovalStep[P]>
  }




  export type ApprovalStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalStepWhereInput
    orderBy?: ApprovalStepOrderByWithAggregationInput | ApprovalStepOrderByWithAggregationInput[]
    by: ApprovalStepScalarFieldEnum[] | ApprovalStepScalarFieldEnum
    having?: ApprovalStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalStepCountAggregateInputType | true
    _avg?: ApprovalStepAvgAggregateInputType
    _sum?: ApprovalStepSumAggregateInputType
    _min?: ApprovalStepMinAggregateInputType
    _max?: ApprovalStepMaxAggregateInputType
  }

  export type ApprovalStepGroupByOutputType = {
    id: string
    ruleId: string
    approverId: string
    stepOrder: number
    isRequired: boolean
    _count: ApprovalStepCountAggregateOutputType | null
    _avg: ApprovalStepAvgAggregateOutputType | null
    _sum: ApprovalStepSumAggregateOutputType | null
    _min: ApprovalStepMinAggregateOutputType | null
    _max: ApprovalStepMaxAggregateOutputType | null
  }

  type GetApprovalStepGroupByPayload<T extends ApprovalStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalStepGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalStepGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruleId?: boolean
    approverId?: boolean
    stepOrder?: boolean
    isRequired?: boolean
    rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalStep"]>

  export type ApprovalStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruleId?: boolean
    approverId?: boolean
    stepOrder?: boolean
    isRequired?: boolean
    rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalStep"]>

  export type ApprovalStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruleId?: boolean
    approverId?: boolean
    stepOrder?: boolean
    isRequired?: boolean
    rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalStep"]>

  export type ApprovalStepSelectScalar = {
    id?: boolean
    ruleId?: boolean
    approverId?: boolean
    stepOrder?: boolean
    isRequired?: boolean
  }

  export type ApprovalStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ruleId" | "approverId" | "stepOrder" | "isRequired", ExtArgs["result"]["approvalStep"]>
  export type ApprovalStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApprovalStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovalStep"
    objects: {
      rule: Prisma.$ApprovalRulePayload<ExtArgs>
      approver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ruleId: string
      approverId: string
      stepOrder: number
      isRequired: boolean
    }, ExtArgs["result"]["approvalStep"]>
    composites: {}
  }

  type ApprovalStepGetPayload<S extends boolean | null | undefined | ApprovalStepDefaultArgs> = $Result.GetResult<Prisma.$ApprovalStepPayload, S>

  type ApprovalStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalStepCountAggregateInputType | true
    }

  export interface ApprovalStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovalStep'], meta: { name: 'ApprovalStep' } }
    /**
     * Find zero or one ApprovalStep that matches the filter.
     * @param {ApprovalStepFindUniqueArgs} args - Arguments to find a ApprovalStep
     * @example
     * // Get one ApprovalStep
     * const approvalStep = await prisma.approvalStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalStepFindUniqueArgs>(args: SelectSubset<T, ApprovalStepFindUniqueArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovalStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalStepFindUniqueOrThrowArgs} args - Arguments to find a ApprovalStep
     * @example
     * // Get one ApprovalStep
     * const approvalStep = await prisma.approvalStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalStepFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepFindFirstArgs} args - Arguments to find a ApprovalStep
     * @example
     * // Get one ApprovalStep
     * const approvalStep = await prisma.approvalStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalStepFindFirstArgs>(args?: SelectSubset<T, ApprovalStepFindFirstArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepFindFirstOrThrowArgs} args - Arguments to find a ApprovalStep
     * @example
     * // Get one ApprovalStep
     * const approvalStep = await prisma.approvalStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalStepFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovalSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalSteps
     * const approvalSteps = await prisma.approvalStep.findMany()
     * 
     * // Get first 10 ApprovalSteps
     * const approvalSteps = await prisma.approvalStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalStepWithIdOnly = await prisma.approvalStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalStepFindManyArgs>(args?: SelectSubset<T, ApprovalStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovalStep.
     * @param {ApprovalStepCreateArgs} args - Arguments to create a ApprovalStep.
     * @example
     * // Create one ApprovalStep
     * const ApprovalStep = await prisma.approvalStep.create({
     *   data: {
     *     // ... data to create a ApprovalStep
     *   }
     * })
     * 
     */
    create<T extends ApprovalStepCreateArgs>(args: SelectSubset<T, ApprovalStepCreateArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovalSteps.
     * @param {ApprovalStepCreateManyArgs} args - Arguments to create many ApprovalSteps.
     * @example
     * // Create many ApprovalSteps
     * const approvalStep = await prisma.approvalStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalStepCreateManyArgs>(args?: SelectSubset<T, ApprovalStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApprovalSteps and returns the data saved in the database.
     * @param {ApprovalStepCreateManyAndReturnArgs} args - Arguments to create many ApprovalSteps.
     * @example
     * // Create many ApprovalSteps
     * const approvalStep = await prisma.approvalStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApprovalSteps and only return the `id`
     * const approvalStepWithIdOnly = await prisma.approvalStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalStepCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApprovalStep.
     * @param {ApprovalStepDeleteArgs} args - Arguments to delete one ApprovalStep.
     * @example
     * // Delete one ApprovalStep
     * const ApprovalStep = await prisma.approvalStep.delete({
     *   where: {
     *     // ... filter to delete one ApprovalStep
     *   }
     * })
     * 
     */
    delete<T extends ApprovalStepDeleteArgs>(args: SelectSubset<T, ApprovalStepDeleteArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovalStep.
     * @param {ApprovalStepUpdateArgs} args - Arguments to update one ApprovalStep.
     * @example
     * // Update one ApprovalStep
     * const approvalStep = await prisma.approvalStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalStepUpdateArgs>(args: SelectSubset<T, ApprovalStepUpdateArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovalSteps.
     * @param {ApprovalStepDeleteManyArgs} args - Arguments to filter ApprovalSteps to delete.
     * @example
     * // Delete a few ApprovalSteps
     * const { count } = await prisma.approvalStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalStepDeleteManyArgs>(args?: SelectSubset<T, ApprovalStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalSteps
     * const approvalStep = await prisma.approvalStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalStepUpdateManyArgs>(args: SelectSubset<T, ApprovalStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalSteps and returns the data updated in the database.
     * @param {ApprovalStepUpdateManyAndReturnArgs} args - Arguments to update many ApprovalSteps.
     * @example
     * // Update many ApprovalSteps
     * const approvalStep = await prisma.approvalStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApprovalSteps and only return the `id`
     * const approvalStepWithIdOnly = await prisma.approvalStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApprovalStepUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApprovalStep.
     * @param {ApprovalStepUpsertArgs} args - Arguments to update or create a ApprovalStep.
     * @example
     * // Update or create a ApprovalStep
     * const approvalStep = await prisma.approvalStep.upsert({
     *   create: {
     *     // ... data to create a ApprovalStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalStep we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalStepUpsertArgs>(args: SelectSubset<T, ApprovalStepUpsertArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovalSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepCountArgs} args - Arguments to filter ApprovalSteps to count.
     * @example
     * // Count the number of ApprovalSteps
     * const count = await prisma.approvalStep.count({
     *   where: {
     *     // ... the filter for the ApprovalSteps we want to count
     *   }
     * })
    **/
    count<T extends ApprovalStepCountArgs>(
      args?: Subset<T, ApprovalStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovalStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprovalStepAggregateArgs>(args: Subset<T, ApprovalStepAggregateArgs>): Prisma.PrismaPromise<GetApprovalStepAggregateType<T>>

    /**
     * Group by ApprovalStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepGroupByArgs} args - Group by arguments.
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
      T extends ApprovalStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalStepGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApprovalStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovalStep model
   */
  readonly fields: ApprovalStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovalStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rule<T extends ApprovalRuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApprovalRuleDefaultArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApprovalStep model
   */
  interface ApprovalStepFieldRefs {
    readonly id: FieldRef<"ApprovalStep", 'String'>
    readonly ruleId: FieldRef<"ApprovalStep", 'String'>
    readonly approverId: FieldRef<"ApprovalStep", 'String'>
    readonly stepOrder: FieldRef<"ApprovalStep", 'Int'>
    readonly isRequired: FieldRef<"ApprovalStep", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ApprovalStep findUnique
   */
  export type ApprovalStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalStep to fetch.
     */
    where: ApprovalStepWhereUniqueInput
  }

  /**
   * ApprovalStep findUniqueOrThrow
   */
  export type ApprovalStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalStep to fetch.
     */
    where: ApprovalStepWhereUniqueInput
  }

  /**
   * ApprovalStep findFirst
   */
  export type ApprovalStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalStep to fetch.
     */
    where?: ApprovalStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalSteps to fetch.
     */
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalSteps.
     */
    cursor?: ApprovalStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalSteps.
     */
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * ApprovalStep findFirstOrThrow
   */
  export type ApprovalStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalStep to fetch.
     */
    where?: ApprovalStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalSteps to fetch.
     */
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalSteps.
     */
    cursor?: ApprovalStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalSteps.
     */
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * ApprovalStep findMany
   */
  export type ApprovalStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalSteps to fetch.
     */
    where?: ApprovalStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalSteps to fetch.
     */
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovalSteps.
     */
    cursor?: ApprovalStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalSteps.
     */
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * ApprovalStep create
   */
  export type ApprovalStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * The data needed to create a ApprovalStep.
     */
    data: XOR<ApprovalStepCreateInput, ApprovalStepUncheckedCreateInput>
  }

  /**
   * ApprovalStep createMany
   */
  export type ApprovalStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalSteps.
     */
    data: ApprovalStepCreateManyInput | ApprovalStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovalStep createManyAndReturn
   */
  export type ApprovalStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * The data used to create many ApprovalSteps.
     */
    data: ApprovalStepCreateManyInput | ApprovalStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalStep update
   */
  export type ApprovalStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * The data needed to update a ApprovalStep.
     */
    data: XOR<ApprovalStepUpdateInput, ApprovalStepUncheckedUpdateInput>
    /**
     * Choose, which ApprovalStep to update.
     */
    where: ApprovalStepWhereUniqueInput
  }

  /**
   * ApprovalStep updateMany
   */
  export type ApprovalStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalSteps.
     */
    data: XOR<ApprovalStepUpdateManyMutationInput, ApprovalStepUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalSteps to update
     */
    where?: ApprovalStepWhereInput
    /**
     * Limit how many ApprovalSteps to update.
     */
    limit?: number
  }

  /**
   * ApprovalStep updateManyAndReturn
   */
  export type ApprovalStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * The data used to update ApprovalSteps.
     */
    data: XOR<ApprovalStepUpdateManyMutationInput, ApprovalStepUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalSteps to update
     */
    where?: ApprovalStepWhereInput
    /**
     * Limit how many ApprovalSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalStep upsert
   */
  export type ApprovalStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * The filter to search for the ApprovalStep to update in case it exists.
     */
    where: ApprovalStepWhereUniqueInput
    /**
     * In case the ApprovalStep found by the `where` argument doesn't exist, create a new ApprovalStep with this data.
     */
    create: XOR<ApprovalStepCreateInput, ApprovalStepUncheckedCreateInput>
    /**
     * In case the ApprovalStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalStepUpdateInput, ApprovalStepUncheckedUpdateInput>
  }

  /**
   * ApprovalStep delete
   */
  export type ApprovalStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter which ApprovalStep to delete.
     */
    where: ApprovalStepWhereUniqueInput
  }

  /**
   * ApprovalStep deleteMany
   */
  export type ApprovalStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalSteps to delete
     */
    where?: ApprovalStepWhereInput
    /**
     * Limit how many ApprovalSteps to delete.
     */
    limit?: number
  }

  /**
   * ApprovalStep without action
   */
  export type ApprovalStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseApproval
   */

  export type AggregateExpenseApproval = {
    _count: ExpenseApprovalCountAggregateOutputType | null
    _avg: ExpenseApprovalAvgAggregateOutputType | null
    _sum: ExpenseApprovalSumAggregateOutputType | null
    _min: ExpenseApprovalMinAggregateOutputType | null
    _max: ExpenseApprovalMaxAggregateOutputType | null
  }

  export type ExpenseApprovalAvgAggregateOutputType = {
    stepOrder: number | null
  }

  export type ExpenseApprovalSumAggregateOutputType = {
    stepOrder: number | null
  }

  export type ExpenseApprovalMinAggregateOutputType = {
    id: string | null
    expenseId: string | null
    approverId: string | null
    stepOrder: number | null
    status: $Enums.ApprovalStatus | null
    comment: string | null
    actedAt: Date | null
  }

  export type ExpenseApprovalMaxAggregateOutputType = {
    id: string | null
    expenseId: string | null
    approverId: string | null
    stepOrder: number | null
    status: $Enums.ApprovalStatus | null
    comment: string | null
    actedAt: Date | null
  }

  export type ExpenseApprovalCountAggregateOutputType = {
    id: number
    expenseId: number
    approverId: number
    stepOrder: number
    status: number
    comment: number
    actedAt: number
    _all: number
  }


  export type ExpenseApprovalAvgAggregateInputType = {
    stepOrder?: true
  }

  export type ExpenseApprovalSumAggregateInputType = {
    stepOrder?: true
  }

  export type ExpenseApprovalMinAggregateInputType = {
    id?: true
    expenseId?: true
    approverId?: true
    stepOrder?: true
    status?: true
    comment?: true
    actedAt?: true
  }

  export type ExpenseApprovalMaxAggregateInputType = {
    id?: true
    expenseId?: true
    approverId?: true
    stepOrder?: true
    status?: true
    comment?: true
    actedAt?: true
  }

  export type ExpenseApprovalCountAggregateInputType = {
    id?: true
    expenseId?: true
    approverId?: true
    stepOrder?: true
    status?: true
    comment?: true
    actedAt?: true
    _all?: true
  }

  export type ExpenseApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseApproval to aggregate.
     */
    where?: ExpenseApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseApprovals to fetch.
     */
    orderBy?: ExpenseApprovalOrderByWithRelationInput | ExpenseApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseApprovals
    **/
    _count?: true | ExpenseApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseApprovalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseApprovalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseApprovalMaxAggregateInputType
  }

  export type GetExpenseApprovalAggregateType<T extends ExpenseApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseApproval[P]>
      : GetScalarType<T[P], AggregateExpenseApproval[P]>
  }




  export type ExpenseApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseApprovalWhereInput
    orderBy?: ExpenseApprovalOrderByWithAggregationInput | ExpenseApprovalOrderByWithAggregationInput[]
    by: ExpenseApprovalScalarFieldEnum[] | ExpenseApprovalScalarFieldEnum
    having?: ExpenseApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseApprovalCountAggregateInputType | true
    _avg?: ExpenseApprovalAvgAggregateInputType
    _sum?: ExpenseApprovalSumAggregateInputType
    _min?: ExpenseApprovalMinAggregateInputType
    _max?: ExpenseApprovalMaxAggregateInputType
  }

  export type ExpenseApprovalGroupByOutputType = {
    id: string
    expenseId: string
    approverId: string
    stepOrder: number
    status: $Enums.ApprovalStatus
    comment: string | null
    actedAt: Date | null
    _count: ExpenseApprovalCountAggregateOutputType | null
    _avg: ExpenseApprovalAvgAggregateOutputType | null
    _sum: ExpenseApprovalSumAggregateOutputType | null
    _min: ExpenseApprovalMinAggregateOutputType | null
    _max: ExpenseApprovalMaxAggregateOutputType | null
  }

  type GetExpenseApprovalGroupByPayload<T extends ExpenseApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseApprovalGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    approverId?: boolean
    stepOrder?: boolean
    status?: boolean
    comment?: boolean
    actedAt?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseApproval"]>

  export type ExpenseApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    approverId?: boolean
    stepOrder?: boolean
    status?: boolean
    comment?: boolean
    actedAt?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseApproval"]>

  export type ExpenseApprovalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    approverId?: boolean
    stepOrder?: boolean
    status?: boolean
    comment?: boolean
    actedAt?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseApproval"]>

  export type ExpenseApprovalSelectScalar = {
    id?: boolean
    expenseId?: boolean
    approverId?: boolean
    stepOrder?: boolean
    status?: boolean
    comment?: boolean
    actedAt?: boolean
  }

  export type ExpenseApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expenseId" | "approverId" | "stepOrder" | "status" | "comment" | "actedAt", ExtArgs["result"]["expenseApproval"]>
  export type ExpenseApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseApprovalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpenseApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseApproval"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
      approver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expenseId: string
      approverId: string
      stepOrder: number
      status: $Enums.ApprovalStatus
      comment: string | null
      actedAt: Date | null
    }, ExtArgs["result"]["expenseApproval"]>
    composites: {}
  }

  type ExpenseApprovalGetPayload<S extends boolean | null | undefined | ExpenseApprovalDefaultArgs> = $Result.GetResult<Prisma.$ExpenseApprovalPayload, S>

  type ExpenseApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseApprovalCountAggregateInputType | true
    }

  export interface ExpenseApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseApproval'], meta: { name: 'ExpenseApproval' } }
    /**
     * Find zero or one ExpenseApproval that matches the filter.
     * @param {ExpenseApprovalFindUniqueArgs} args - Arguments to find a ExpenseApproval
     * @example
     * // Get one ExpenseApproval
     * const expenseApproval = await prisma.expenseApproval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseApprovalFindUniqueArgs>(args: SelectSubset<T, ExpenseApprovalFindUniqueArgs<ExtArgs>>): Prisma__ExpenseApprovalClient<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseApproval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseApprovalFindUniqueOrThrowArgs} args - Arguments to find a ExpenseApproval
     * @example
     * // Get one ExpenseApproval
     * const expenseApproval = await prisma.expenseApproval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseApprovalClient<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseApproval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseApprovalFindFirstArgs} args - Arguments to find a ExpenseApproval
     * @example
     * // Get one ExpenseApproval
     * const expenseApproval = await prisma.expenseApproval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseApprovalFindFirstArgs>(args?: SelectSubset<T, ExpenseApprovalFindFirstArgs<ExtArgs>>): Prisma__ExpenseApprovalClient<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseApproval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseApprovalFindFirstOrThrowArgs} args - Arguments to find a ExpenseApproval
     * @example
     * // Get one ExpenseApproval
     * const expenseApproval = await prisma.expenseApproval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseApprovalClient<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseApprovals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseApprovals
     * const expenseApprovals = await prisma.expenseApproval.findMany()
     * 
     * // Get first 10 ExpenseApprovals
     * const expenseApprovals = await prisma.expenseApproval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseApprovalWithIdOnly = await prisma.expenseApproval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseApprovalFindManyArgs>(args?: SelectSubset<T, ExpenseApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseApproval.
     * @param {ExpenseApprovalCreateArgs} args - Arguments to create a ExpenseApproval.
     * @example
     * // Create one ExpenseApproval
     * const ExpenseApproval = await prisma.expenseApproval.create({
     *   data: {
     *     // ... data to create a ExpenseApproval
     *   }
     * })
     * 
     */
    create<T extends ExpenseApprovalCreateArgs>(args: SelectSubset<T, ExpenseApprovalCreateArgs<ExtArgs>>): Prisma__ExpenseApprovalClient<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseApprovals.
     * @param {ExpenseApprovalCreateManyArgs} args - Arguments to create many ExpenseApprovals.
     * @example
     * // Create many ExpenseApprovals
     * const expenseApproval = await prisma.expenseApproval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseApprovalCreateManyArgs>(args?: SelectSubset<T, ExpenseApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseApprovals and returns the data saved in the database.
     * @param {ExpenseApprovalCreateManyAndReturnArgs} args - Arguments to create many ExpenseApprovals.
     * @example
     * // Create many ExpenseApprovals
     * const expenseApproval = await prisma.expenseApproval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseApprovals and only return the `id`
     * const expenseApprovalWithIdOnly = await prisma.expenseApproval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseApproval.
     * @param {ExpenseApprovalDeleteArgs} args - Arguments to delete one ExpenseApproval.
     * @example
     * // Delete one ExpenseApproval
     * const ExpenseApproval = await prisma.expenseApproval.delete({
     *   where: {
     *     // ... filter to delete one ExpenseApproval
     *   }
     * })
     * 
     */
    delete<T extends ExpenseApprovalDeleteArgs>(args: SelectSubset<T, ExpenseApprovalDeleteArgs<ExtArgs>>): Prisma__ExpenseApprovalClient<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseApproval.
     * @param {ExpenseApprovalUpdateArgs} args - Arguments to update one ExpenseApproval.
     * @example
     * // Update one ExpenseApproval
     * const expenseApproval = await prisma.expenseApproval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseApprovalUpdateArgs>(args: SelectSubset<T, ExpenseApprovalUpdateArgs<ExtArgs>>): Prisma__ExpenseApprovalClient<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseApprovals.
     * @param {ExpenseApprovalDeleteManyArgs} args - Arguments to filter ExpenseApprovals to delete.
     * @example
     * // Delete a few ExpenseApprovals
     * const { count } = await prisma.expenseApproval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseApprovalDeleteManyArgs>(args?: SelectSubset<T, ExpenseApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseApprovals
     * const expenseApproval = await prisma.expenseApproval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseApprovalUpdateManyArgs>(args: SelectSubset<T, ExpenseApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseApprovals and returns the data updated in the database.
     * @param {ExpenseApprovalUpdateManyAndReturnArgs} args - Arguments to update many ExpenseApprovals.
     * @example
     * // Update many ExpenseApprovals
     * const expenseApproval = await prisma.expenseApproval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseApprovals and only return the `id`
     * const expenseApprovalWithIdOnly = await prisma.expenseApproval.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExpenseApprovalUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseApproval.
     * @param {ExpenseApprovalUpsertArgs} args - Arguments to update or create a ExpenseApproval.
     * @example
     * // Update or create a ExpenseApproval
     * const expenseApproval = await prisma.expenseApproval.upsert({
     *   create: {
     *     // ... data to create a ExpenseApproval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseApproval we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseApprovalUpsertArgs>(args: SelectSubset<T, ExpenseApprovalUpsertArgs<ExtArgs>>): Prisma__ExpenseApprovalClient<$Result.GetResult<Prisma.$ExpenseApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseApprovalCountArgs} args - Arguments to filter ExpenseApprovals to count.
     * @example
     * // Count the number of ExpenseApprovals
     * const count = await prisma.expenseApproval.count({
     *   where: {
     *     // ... the filter for the ExpenseApprovals we want to count
     *   }
     * })
    **/
    count<T extends ExpenseApprovalCountArgs>(
      args?: Subset<T, ExpenseApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseApprovalAggregateArgs>(args: Subset<T, ExpenseApprovalAggregateArgs>): Prisma.PrismaPromise<GetExpenseApprovalAggregateType<T>>

    /**
     * Group by ExpenseApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseApprovalGroupByArgs} args - Group by arguments.
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
      T extends ExpenseApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseApprovalGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseApprovalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseApproval model
   */
  readonly fields: ExpenseApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseApproval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExpenseApproval model
   */
  interface ExpenseApprovalFieldRefs {
    readonly id: FieldRef<"ExpenseApproval", 'String'>
    readonly expenseId: FieldRef<"ExpenseApproval", 'String'>
    readonly approverId: FieldRef<"ExpenseApproval", 'String'>
    readonly stepOrder: FieldRef<"ExpenseApproval", 'Int'>
    readonly status: FieldRef<"ExpenseApproval", 'ApprovalStatus'>
    readonly comment: FieldRef<"ExpenseApproval", 'String'>
    readonly actedAt: FieldRef<"ExpenseApproval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseApproval findUnique
   */
  export type ExpenseApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseApproval to fetch.
     */
    where: ExpenseApprovalWhereUniqueInput
  }

  /**
   * ExpenseApproval findUniqueOrThrow
   */
  export type ExpenseApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseApproval to fetch.
     */
    where: ExpenseApprovalWhereUniqueInput
  }

  /**
   * ExpenseApproval findFirst
   */
  export type ExpenseApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseApproval to fetch.
     */
    where?: ExpenseApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseApprovals to fetch.
     */
    orderBy?: ExpenseApprovalOrderByWithRelationInput | ExpenseApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseApprovals.
     */
    cursor?: ExpenseApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseApprovals.
     */
    distinct?: ExpenseApprovalScalarFieldEnum | ExpenseApprovalScalarFieldEnum[]
  }

  /**
   * ExpenseApproval findFirstOrThrow
   */
  export type ExpenseApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseApproval to fetch.
     */
    where?: ExpenseApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseApprovals to fetch.
     */
    orderBy?: ExpenseApprovalOrderByWithRelationInput | ExpenseApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseApprovals.
     */
    cursor?: ExpenseApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseApprovals.
     */
    distinct?: ExpenseApprovalScalarFieldEnum | ExpenseApprovalScalarFieldEnum[]
  }

  /**
   * ExpenseApproval findMany
   */
  export type ExpenseApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseApprovals to fetch.
     */
    where?: ExpenseApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseApprovals to fetch.
     */
    orderBy?: ExpenseApprovalOrderByWithRelationInput | ExpenseApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseApprovals.
     */
    cursor?: ExpenseApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseApprovals.
     */
    distinct?: ExpenseApprovalScalarFieldEnum | ExpenseApprovalScalarFieldEnum[]
  }

  /**
   * ExpenseApproval create
   */
  export type ExpenseApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseApproval.
     */
    data: XOR<ExpenseApprovalCreateInput, ExpenseApprovalUncheckedCreateInput>
  }

  /**
   * ExpenseApproval createMany
   */
  export type ExpenseApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseApprovals.
     */
    data: ExpenseApprovalCreateManyInput | ExpenseApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseApproval createManyAndReturn
   */
  export type ExpenseApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseApprovals.
     */
    data: ExpenseApprovalCreateManyInput | ExpenseApprovalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseApproval update
   */
  export type ExpenseApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseApproval.
     */
    data: XOR<ExpenseApprovalUpdateInput, ExpenseApprovalUncheckedUpdateInput>
    /**
     * Choose, which ExpenseApproval to update.
     */
    where: ExpenseApprovalWhereUniqueInput
  }

  /**
   * ExpenseApproval updateMany
   */
  export type ExpenseApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseApprovals.
     */
    data: XOR<ExpenseApprovalUpdateManyMutationInput, ExpenseApprovalUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseApprovals to update
     */
    where?: ExpenseApprovalWhereInput
    /**
     * Limit how many ExpenseApprovals to update.
     */
    limit?: number
  }

  /**
   * ExpenseApproval updateManyAndReturn
   */
  export type ExpenseApprovalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseApprovals.
     */
    data: XOR<ExpenseApprovalUpdateManyMutationInput, ExpenseApprovalUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseApprovals to update
     */
    where?: ExpenseApprovalWhereInput
    /**
     * Limit how many ExpenseApprovals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseApproval upsert
   */
  export type ExpenseApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseApproval to update in case it exists.
     */
    where: ExpenseApprovalWhereUniqueInput
    /**
     * In case the ExpenseApproval found by the `where` argument doesn't exist, create a new ExpenseApproval with this data.
     */
    create: XOR<ExpenseApprovalCreateInput, ExpenseApprovalUncheckedCreateInput>
    /**
     * In case the ExpenseApproval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseApprovalUpdateInput, ExpenseApprovalUncheckedUpdateInput>
  }

  /**
   * ExpenseApproval delete
   */
  export type ExpenseApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
    /**
     * Filter which ExpenseApproval to delete.
     */
    where: ExpenseApprovalWhereUniqueInput
  }

  /**
   * ExpenseApproval deleteMany
   */
  export type ExpenseApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseApprovals to delete
     */
    where?: ExpenseApprovalWhereInput
    /**
     * Limit how many ExpenseApprovals to delete.
     */
    limit?: number
  }

  /**
   * ExpenseApproval without action
   */
  export type ExpenseApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseApproval
     */
    select?: ExpenseApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseApproval
     */
    omit?: ExpenseApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseApprovalInclude<ExtArgs> | null
  }


  /**
   * Model OCRData
   */

  export type AggregateOCRData = {
    _count: OCRDataCountAggregateOutputType | null
    _avg: OCRDataAvgAggregateOutputType | null
    _sum: OCRDataSumAggregateOutputType | null
    _min: OCRDataMinAggregateOutputType | null
    _max: OCRDataMaxAggregateOutputType | null
  }

  export type OCRDataAvgAggregateOutputType = {
    confidence: number | null
  }

  export type OCRDataSumAggregateOutputType = {
    confidence: number | null
  }

  export type OCRDataMinAggregateOutputType = {
    id: string | null
    expenseId: string | null
    rawText: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type OCRDataMaxAggregateOutputType = {
    id: string | null
    expenseId: string | null
    rawText: string | null
    confidence: number | null
    createdAt: Date | null
  }

  export type OCRDataCountAggregateOutputType = {
    id: number
    expenseId: number
    rawText: number
    extractedJson: number
    confidence: number
    createdAt: number
    _all: number
  }


  export type OCRDataAvgAggregateInputType = {
    confidence?: true
  }

  export type OCRDataSumAggregateInputType = {
    confidence?: true
  }

  export type OCRDataMinAggregateInputType = {
    id?: true
    expenseId?: true
    rawText?: true
    confidence?: true
    createdAt?: true
  }

  export type OCRDataMaxAggregateInputType = {
    id?: true
    expenseId?: true
    rawText?: true
    confidence?: true
    createdAt?: true
  }

  export type OCRDataCountAggregateInputType = {
    id?: true
    expenseId?: true
    rawText?: true
    extractedJson?: true
    confidence?: true
    createdAt?: true
    _all?: true
  }

  export type OCRDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OCRData to aggregate.
     */
    where?: OCRDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OCRData to fetch.
     */
    orderBy?: OCRDataOrderByWithRelationInput | OCRDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OCRDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OCRData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OCRData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OCRData
    **/
    _count?: true | OCRDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OCRDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OCRDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OCRDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OCRDataMaxAggregateInputType
  }

  export type GetOCRDataAggregateType<T extends OCRDataAggregateArgs> = {
        [P in keyof T & keyof AggregateOCRData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOCRData[P]>
      : GetScalarType<T[P], AggregateOCRData[P]>
  }




  export type OCRDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OCRDataWhereInput
    orderBy?: OCRDataOrderByWithAggregationInput | OCRDataOrderByWithAggregationInput[]
    by: OCRDataScalarFieldEnum[] | OCRDataScalarFieldEnum
    having?: OCRDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OCRDataCountAggregateInputType | true
    _avg?: OCRDataAvgAggregateInputType
    _sum?: OCRDataSumAggregateInputType
    _min?: OCRDataMinAggregateInputType
    _max?: OCRDataMaxAggregateInputType
  }

  export type OCRDataGroupByOutputType = {
    id: string
    expenseId: string
    rawText: string | null
    extractedJson: JsonValue
    confidence: number | null
    createdAt: Date
    _count: OCRDataCountAggregateOutputType | null
    _avg: OCRDataAvgAggregateOutputType | null
    _sum: OCRDataSumAggregateOutputType | null
    _min: OCRDataMinAggregateOutputType | null
    _max: OCRDataMaxAggregateOutputType | null
  }

  type GetOCRDataGroupByPayload<T extends OCRDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OCRDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OCRDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OCRDataGroupByOutputType[P]>
            : GetScalarType<T[P], OCRDataGroupByOutputType[P]>
        }
      >
    >


  export type OCRDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    rawText?: boolean
    extractedJson?: boolean
    confidence?: boolean
    createdAt?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oCRData"]>

  export type OCRDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    rawText?: boolean
    extractedJson?: boolean
    confidence?: boolean
    createdAt?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oCRData"]>

  export type OCRDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    rawText?: boolean
    extractedJson?: boolean
    confidence?: boolean
    createdAt?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oCRData"]>

  export type OCRDataSelectScalar = {
    id?: boolean
    expenseId?: boolean
    rawText?: boolean
    extractedJson?: boolean
    confidence?: boolean
    createdAt?: boolean
  }

  export type OCRDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expenseId" | "rawText" | "extractedJson" | "confidence" | "createdAt", ExtArgs["result"]["oCRData"]>
  export type OCRDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }
  export type OCRDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }
  export type OCRDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
  }

  export type $OCRDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OCRData"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expenseId: string
      rawText: string | null
      extractedJson: Prisma.JsonValue
      confidence: number | null
      createdAt: Date
    }, ExtArgs["result"]["oCRData"]>
    composites: {}
  }

  type OCRDataGetPayload<S extends boolean | null | undefined | OCRDataDefaultArgs> = $Result.GetResult<Prisma.$OCRDataPayload, S>

  type OCRDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OCRDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OCRDataCountAggregateInputType | true
    }

  export interface OCRDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OCRData'], meta: { name: 'OCRData' } }
    /**
     * Find zero or one OCRData that matches the filter.
     * @param {OCRDataFindUniqueArgs} args - Arguments to find a OCRData
     * @example
     * // Get one OCRData
     * const oCRData = await prisma.oCRData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OCRDataFindUniqueArgs>(args: SelectSubset<T, OCRDataFindUniqueArgs<ExtArgs>>): Prisma__OCRDataClient<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OCRData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OCRDataFindUniqueOrThrowArgs} args - Arguments to find a OCRData
     * @example
     * // Get one OCRData
     * const oCRData = await prisma.oCRData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OCRDataFindUniqueOrThrowArgs>(args: SelectSubset<T, OCRDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OCRDataClient<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OCRData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OCRDataFindFirstArgs} args - Arguments to find a OCRData
     * @example
     * // Get one OCRData
     * const oCRData = await prisma.oCRData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OCRDataFindFirstArgs>(args?: SelectSubset<T, OCRDataFindFirstArgs<ExtArgs>>): Prisma__OCRDataClient<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OCRData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OCRDataFindFirstOrThrowArgs} args - Arguments to find a OCRData
     * @example
     * // Get one OCRData
     * const oCRData = await prisma.oCRData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OCRDataFindFirstOrThrowArgs>(args?: SelectSubset<T, OCRDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__OCRDataClient<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OCRData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OCRDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OCRData
     * const oCRData = await prisma.oCRData.findMany()
     * 
     * // Get first 10 OCRData
     * const oCRData = await prisma.oCRData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oCRDataWithIdOnly = await prisma.oCRData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OCRDataFindManyArgs>(args?: SelectSubset<T, OCRDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OCRData.
     * @param {OCRDataCreateArgs} args - Arguments to create a OCRData.
     * @example
     * // Create one OCRData
     * const OCRData = await prisma.oCRData.create({
     *   data: {
     *     // ... data to create a OCRData
     *   }
     * })
     * 
     */
    create<T extends OCRDataCreateArgs>(args: SelectSubset<T, OCRDataCreateArgs<ExtArgs>>): Prisma__OCRDataClient<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OCRData.
     * @param {OCRDataCreateManyArgs} args - Arguments to create many OCRData.
     * @example
     * // Create many OCRData
     * const oCRData = await prisma.oCRData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OCRDataCreateManyArgs>(args?: SelectSubset<T, OCRDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OCRData and returns the data saved in the database.
     * @param {OCRDataCreateManyAndReturnArgs} args - Arguments to create many OCRData.
     * @example
     * // Create many OCRData
     * const oCRData = await prisma.oCRData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OCRData and only return the `id`
     * const oCRDataWithIdOnly = await prisma.oCRData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OCRDataCreateManyAndReturnArgs>(args?: SelectSubset<T, OCRDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OCRData.
     * @param {OCRDataDeleteArgs} args - Arguments to delete one OCRData.
     * @example
     * // Delete one OCRData
     * const OCRData = await prisma.oCRData.delete({
     *   where: {
     *     // ... filter to delete one OCRData
     *   }
     * })
     * 
     */
    delete<T extends OCRDataDeleteArgs>(args: SelectSubset<T, OCRDataDeleteArgs<ExtArgs>>): Prisma__OCRDataClient<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OCRData.
     * @param {OCRDataUpdateArgs} args - Arguments to update one OCRData.
     * @example
     * // Update one OCRData
     * const oCRData = await prisma.oCRData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OCRDataUpdateArgs>(args: SelectSubset<T, OCRDataUpdateArgs<ExtArgs>>): Prisma__OCRDataClient<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OCRData.
     * @param {OCRDataDeleteManyArgs} args - Arguments to filter OCRData to delete.
     * @example
     * // Delete a few OCRData
     * const { count } = await prisma.oCRData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OCRDataDeleteManyArgs>(args?: SelectSubset<T, OCRDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OCRData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OCRDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OCRData
     * const oCRData = await prisma.oCRData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OCRDataUpdateManyArgs>(args: SelectSubset<T, OCRDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OCRData and returns the data updated in the database.
     * @param {OCRDataUpdateManyAndReturnArgs} args - Arguments to update many OCRData.
     * @example
     * // Update many OCRData
     * const oCRData = await prisma.oCRData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OCRData and only return the `id`
     * const oCRDataWithIdOnly = await prisma.oCRData.updateManyAndReturn({
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
    updateManyAndReturn<T extends OCRDataUpdateManyAndReturnArgs>(args: SelectSubset<T, OCRDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OCRData.
     * @param {OCRDataUpsertArgs} args - Arguments to update or create a OCRData.
     * @example
     * // Update or create a OCRData
     * const oCRData = await prisma.oCRData.upsert({
     *   create: {
     *     // ... data to create a OCRData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OCRData we want to update
     *   }
     * })
     */
    upsert<T extends OCRDataUpsertArgs>(args: SelectSubset<T, OCRDataUpsertArgs<ExtArgs>>): Prisma__OCRDataClient<$Result.GetResult<Prisma.$OCRDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OCRData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OCRDataCountArgs} args - Arguments to filter OCRData to count.
     * @example
     * // Count the number of OCRData
     * const count = await prisma.oCRData.count({
     *   where: {
     *     // ... the filter for the OCRData we want to count
     *   }
     * })
    **/
    count<T extends OCRDataCountArgs>(
      args?: Subset<T, OCRDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OCRDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OCRData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OCRDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OCRDataAggregateArgs>(args: Subset<T, OCRDataAggregateArgs>): Prisma.PrismaPromise<GetOCRDataAggregateType<T>>

    /**
     * Group by OCRData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OCRDataGroupByArgs} args - Group by arguments.
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
      T extends OCRDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OCRDataGroupByArgs['orderBy'] }
        : { orderBy?: OCRDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OCRDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOCRDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OCRData model
   */
  readonly fields: OCRDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OCRData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OCRDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OCRData model
   */
  interface OCRDataFieldRefs {
    readonly id: FieldRef<"OCRData", 'String'>
    readonly expenseId: FieldRef<"OCRData", 'String'>
    readonly rawText: FieldRef<"OCRData", 'String'>
    readonly extractedJson: FieldRef<"OCRData", 'Json'>
    readonly confidence: FieldRef<"OCRData", 'Float'>
    readonly createdAt: FieldRef<"OCRData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OCRData findUnique
   */
  export type OCRDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    /**
     * Filter, which OCRData to fetch.
     */
    where: OCRDataWhereUniqueInput
  }

  /**
   * OCRData findUniqueOrThrow
   */
  export type OCRDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    /**
     * Filter, which OCRData to fetch.
     */
    where: OCRDataWhereUniqueInput
  }

  /**
   * OCRData findFirst
   */
  export type OCRDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    /**
     * Filter, which OCRData to fetch.
     */
    where?: OCRDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OCRData to fetch.
     */
    orderBy?: OCRDataOrderByWithRelationInput | OCRDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OCRData.
     */
    cursor?: OCRDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OCRData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OCRData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OCRData.
     */
    distinct?: OCRDataScalarFieldEnum | OCRDataScalarFieldEnum[]
  }

  /**
   * OCRData findFirstOrThrow
   */
  export type OCRDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    /**
     * Filter, which OCRData to fetch.
     */
    where?: OCRDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OCRData to fetch.
     */
    orderBy?: OCRDataOrderByWithRelationInput | OCRDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OCRData.
     */
    cursor?: OCRDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OCRData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OCRData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OCRData.
     */
    distinct?: OCRDataScalarFieldEnum | OCRDataScalarFieldEnum[]
  }

  /**
   * OCRData findMany
   */
  export type OCRDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    /**
     * Filter, which OCRData to fetch.
     */
    where?: OCRDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OCRData to fetch.
     */
    orderBy?: OCRDataOrderByWithRelationInput | OCRDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OCRData.
     */
    cursor?: OCRDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OCRData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OCRData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OCRData.
     */
    distinct?: OCRDataScalarFieldEnum | OCRDataScalarFieldEnum[]
  }

  /**
   * OCRData create
   */
  export type OCRDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    /**
     * The data needed to create a OCRData.
     */
    data: XOR<OCRDataCreateInput, OCRDataUncheckedCreateInput>
  }

  /**
   * OCRData createMany
   */
  export type OCRDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OCRData.
     */
    data: OCRDataCreateManyInput | OCRDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OCRData createManyAndReturn
   */
  export type OCRDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * The data used to create many OCRData.
     */
    data: OCRDataCreateManyInput | OCRDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OCRData update
   */
  export type OCRDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    /**
     * The data needed to update a OCRData.
     */
    data: XOR<OCRDataUpdateInput, OCRDataUncheckedUpdateInput>
    /**
     * Choose, which OCRData to update.
     */
    where: OCRDataWhereUniqueInput
  }

  /**
   * OCRData updateMany
   */
  export type OCRDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OCRData.
     */
    data: XOR<OCRDataUpdateManyMutationInput, OCRDataUncheckedUpdateManyInput>
    /**
     * Filter which OCRData to update
     */
    where?: OCRDataWhereInput
    /**
     * Limit how many OCRData to update.
     */
    limit?: number
  }

  /**
   * OCRData updateManyAndReturn
   */
  export type OCRDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * The data used to update OCRData.
     */
    data: XOR<OCRDataUpdateManyMutationInput, OCRDataUncheckedUpdateManyInput>
    /**
     * Filter which OCRData to update
     */
    where?: OCRDataWhereInput
    /**
     * Limit how many OCRData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OCRData upsert
   */
  export type OCRDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    /**
     * The filter to search for the OCRData to update in case it exists.
     */
    where: OCRDataWhereUniqueInput
    /**
     * In case the OCRData found by the `where` argument doesn't exist, create a new OCRData with this data.
     */
    create: XOR<OCRDataCreateInput, OCRDataUncheckedCreateInput>
    /**
     * In case the OCRData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OCRDataUpdateInput, OCRDataUncheckedUpdateInput>
  }

  /**
   * OCRData delete
   */
  export type OCRDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
    /**
     * Filter which OCRData to delete.
     */
    where: OCRDataWhereUniqueInput
  }

  /**
   * OCRData deleteMany
   */
  export type OCRDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OCRData to delete
     */
    where?: OCRDataWhereInput
    /**
     * Limit how many OCRData to delete.
     */
    limit?: number
  }

  /**
   * OCRData without action
   */
  export type OCRDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OCRData
     */
    select?: OCRDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OCRData
     */
    omit?: OCRDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OCRDataInclude<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    currencyCode: 'currencyCode',
    createdAt: 'createdAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    managerId: 'managerId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    employeeId: 'employeeId',
    amountOriginal: 'amountOriginal',
    currencyOriginal: 'currencyOriginal',
    amountConverted: 'amountConverted',
    category: 'category',
    description: 'description',
    remarks: 'remarks',
    date: 'date',
    receiptUrl: 'receiptUrl',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ApprovalRuleScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    userId: 'userId',
    ruleName: 'ruleName',
    description: 'description',
    isManagerApprover: 'isManagerApprover',
    isSequential: 'isSequential',
    minApprovalPercentage: 'minApprovalPercentage',
    createdAt: 'createdAt'
  };

  export type ApprovalRuleScalarFieldEnum = (typeof ApprovalRuleScalarFieldEnum)[keyof typeof ApprovalRuleScalarFieldEnum]


  export const ApprovalStepScalarFieldEnum: {
    id: 'id',
    ruleId: 'ruleId',
    approverId: 'approverId',
    stepOrder: 'stepOrder',
    isRequired: 'isRequired'
  };

  export type ApprovalStepScalarFieldEnum = (typeof ApprovalStepScalarFieldEnum)[keyof typeof ApprovalStepScalarFieldEnum]


  export const ExpenseApprovalScalarFieldEnum: {
    id: 'id',
    expenseId: 'expenseId',
    approverId: 'approverId',
    stepOrder: 'stepOrder',
    status: 'status',
    comment: 'comment',
    actedAt: 'actedAt'
  };

  export type ExpenseApprovalScalarFieldEnum = (typeof ExpenseApprovalScalarFieldEnum)[keyof typeof ExpenseApprovalScalarFieldEnum]


  export const OCRDataScalarFieldEnum: {
    id: 'id',
    expenseId: 'expenseId',
    rawText: 'rawText',
    extractedJson: 'extractedJson',
    confidence: 'confidence',
    createdAt: 'createdAt'
  };

  export type OCRDataScalarFieldEnum = (typeof OCRDataScalarFieldEnum)[keyof typeof OCRDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ExpenseStatus'
   */
  export type EnumExpenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseStatus'>
    


  /**
   * Reference to a field of type 'ExpenseStatus[]'
   */
  export type ListEnumExpenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'ApprovalStatus[]'
   */
  export type ListEnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    country?: StringFilter<"Company"> | string
    currencyCode?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    expenses?: ExpenseListRelationFilter
    approvalRules?: ApprovalRuleListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    approvalRules?: ApprovalRuleOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    country?: StringFilter<"Company"> | string
    currencyCode?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    expenses?: ExpenseListRelationFilter
    approvalRules?: ApprovalRuleListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    country?: StringWithAggregatesFilter<"Company"> | string
    currencyCode?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    companyId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    managerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subordinates?: UserListRelationFilter
    expenses?: ExpenseListRelationFilter
    approvals?: ExpenseApprovalListRelationFilter
    approvalSteps?: ApprovalStepListRelationFilter
    rules?: ApprovalRuleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    manager?: UserOrderByWithRelationInput
    subordinates?: UserOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    approvals?: ExpenseApprovalOrderByRelationAggregateInput
    approvalSteps?: ApprovalStepOrderByRelationAggregateInput
    rules?: ApprovalRuleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    companyId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    managerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subordinates?: UserListRelationFilter
    expenses?: ExpenseListRelationFilter
    approvals?: ExpenseApprovalListRelationFilter
    approvalSteps?: ApprovalStepListRelationFilter
    rules?: ApprovalRuleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    companyId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    managerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    companyId?: StringFilter<"Expense"> | string
    employeeId?: StringFilter<"Expense"> | string
    amountOriginal?: FloatFilter<"Expense"> | number
    currencyOriginal?: StringFilter<"Expense"> | string
    amountConverted?: FloatFilter<"Expense"> | number
    category?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    remarks?: StringNullableFilter<"Expense"> | string | null
    date?: DateTimeFilter<"Expense"> | Date | string
    receiptUrl?: StringNullableFilter<"Expense"> | string | null
    status?: EnumExpenseStatusFilter<"Expense"> | $Enums.ExpenseStatus
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvals?: ExpenseApprovalListRelationFilter
    ocrData?: XOR<OCRDataNullableScalarRelationFilter, OCRDataWhereInput> | null
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    amountOriginal?: SortOrder
    currencyOriginal?: SortOrder
    amountConverted?: SortOrder
    category?: SortOrder
    description?: SortOrder
    remarks?: SortOrderInput | SortOrder
    date?: SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    employee?: UserOrderByWithRelationInput
    approvals?: ExpenseApprovalOrderByRelationAggregateInput
    ocrData?: OCRDataOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    companyId?: StringFilter<"Expense"> | string
    employeeId?: StringFilter<"Expense"> | string
    amountOriginal?: FloatFilter<"Expense"> | number
    currencyOriginal?: StringFilter<"Expense"> | string
    amountConverted?: FloatFilter<"Expense"> | number
    category?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    remarks?: StringNullableFilter<"Expense"> | string | null
    date?: DateTimeFilter<"Expense"> | Date | string
    receiptUrl?: StringNullableFilter<"Expense"> | string | null
    status?: EnumExpenseStatusFilter<"Expense"> | $Enums.ExpenseStatus
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvals?: ExpenseApprovalListRelationFilter
    ocrData?: XOR<OCRDataNullableScalarRelationFilter, OCRDataWhereInput> | null
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    amountOriginal?: SortOrder
    currencyOriginal?: SortOrder
    amountConverted?: SortOrder
    category?: SortOrder
    description?: SortOrder
    remarks?: SortOrderInput | SortOrder
    date?: SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    companyId?: StringWithAggregatesFilter<"Expense"> | string
    employeeId?: StringWithAggregatesFilter<"Expense"> | string
    amountOriginal?: FloatWithAggregatesFilter<"Expense"> | number
    currencyOriginal?: StringWithAggregatesFilter<"Expense"> | string
    amountConverted?: FloatWithAggregatesFilter<"Expense"> | number
    category?: StringWithAggregatesFilter<"Expense"> | string
    description?: StringWithAggregatesFilter<"Expense"> | string
    remarks?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    receiptUrl?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    status?: EnumExpenseStatusWithAggregatesFilter<"Expense"> | $Enums.ExpenseStatus
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type ApprovalRuleWhereInput = {
    AND?: ApprovalRuleWhereInput | ApprovalRuleWhereInput[]
    OR?: ApprovalRuleWhereInput[]
    NOT?: ApprovalRuleWhereInput | ApprovalRuleWhereInput[]
    id?: StringFilter<"ApprovalRule"> | string
    companyId?: StringFilter<"ApprovalRule"> | string
    userId?: StringFilter<"ApprovalRule"> | string
    ruleName?: StringFilter<"ApprovalRule"> | string
    description?: StringNullableFilter<"ApprovalRule"> | string | null
    isManagerApprover?: BoolFilter<"ApprovalRule"> | boolean
    isSequential?: BoolFilter<"ApprovalRule"> | boolean
    minApprovalPercentage?: IntFilter<"ApprovalRule"> | number
    createdAt?: DateTimeFilter<"ApprovalRule"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    steps?: ApprovalStepListRelationFilter
  }

  export type ApprovalRuleOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    ruleName?: SortOrder
    description?: SortOrderInput | SortOrder
    isManagerApprover?: SortOrder
    isSequential?: SortOrder
    minApprovalPercentage?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    steps?: ApprovalStepOrderByRelationAggregateInput
  }

  export type ApprovalRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalRuleWhereInput | ApprovalRuleWhereInput[]
    OR?: ApprovalRuleWhereInput[]
    NOT?: ApprovalRuleWhereInput | ApprovalRuleWhereInput[]
    companyId?: StringFilter<"ApprovalRule"> | string
    userId?: StringFilter<"ApprovalRule"> | string
    ruleName?: StringFilter<"ApprovalRule"> | string
    description?: StringNullableFilter<"ApprovalRule"> | string | null
    isManagerApprover?: BoolFilter<"ApprovalRule"> | boolean
    isSequential?: BoolFilter<"ApprovalRule"> | boolean
    minApprovalPercentage?: IntFilter<"ApprovalRule"> | number
    createdAt?: DateTimeFilter<"ApprovalRule"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    steps?: ApprovalStepListRelationFilter
  }, "id">

  export type ApprovalRuleOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    ruleName?: SortOrder
    description?: SortOrderInput | SortOrder
    isManagerApprover?: SortOrder
    isSequential?: SortOrder
    minApprovalPercentage?: SortOrder
    createdAt?: SortOrder
    _count?: ApprovalRuleCountOrderByAggregateInput
    _avg?: ApprovalRuleAvgOrderByAggregateInput
    _max?: ApprovalRuleMaxOrderByAggregateInput
    _min?: ApprovalRuleMinOrderByAggregateInput
    _sum?: ApprovalRuleSumOrderByAggregateInput
  }

  export type ApprovalRuleScalarWhereWithAggregatesInput = {
    AND?: ApprovalRuleScalarWhereWithAggregatesInput | ApprovalRuleScalarWhereWithAggregatesInput[]
    OR?: ApprovalRuleScalarWhereWithAggregatesInput[]
    NOT?: ApprovalRuleScalarWhereWithAggregatesInput | ApprovalRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApprovalRule"> | string
    companyId?: StringWithAggregatesFilter<"ApprovalRule"> | string
    userId?: StringWithAggregatesFilter<"ApprovalRule"> | string
    ruleName?: StringWithAggregatesFilter<"ApprovalRule"> | string
    description?: StringNullableWithAggregatesFilter<"ApprovalRule"> | string | null
    isManagerApprover?: BoolWithAggregatesFilter<"ApprovalRule"> | boolean
    isSequential?: BoolWithAggregatesFilter<"ApprovalRule"> | boolean
    minApprovalPercentage?: IntWithAggregatesFilter<"ApprovalRule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ApprovalRule"> | Date | string
  }

  export type ApprovalStepWhereInput = {
    AND?: ApprovalStepWhereInput | ApprovalStepWhereInput[]
    OR?: ApprovalStepWhereInput[]
    NOT?: ApprovalStepWhereInput | ApprovalStepWhereInput[]
    id?: StringFilter<"ApprovalStep"> | string
    ruleId?: StringFilter<"ApprovalStep"> | string
    approverId?: StringFilter<"ApprovalStep"> | string
    stepOrder?: IntFilter<"ApprovalStep"> | number
    isRequired?: BoolFilter<"ApprovalStep"> | boolean
    rule?: XOR<ApprovalRuleScalarRelationFilter, ApprovalRuleWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApprovalStepOrderByWithRelationInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    isRequired?: SortOrder
    rule?: ApprovalRuleOrderByWithRelationInput
    approver?: UserOrderByWithRelationInput
  }

  export type ApprovalStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalStepWhereInput | ApprovalStepWhereInput[]
    OR?: ApprovalStepWhereInput[]
    NOT?: ApprovalStepWhereInput | ApprovalStepWhereInput[]
    ruleId?: StringFilter<"ApprovalStep"> | string
    approverId?: StringFilter<"ApprovalStep"> | string
    stepOrder?: IntFilter<"ApprovalStep"> | number
    isRequired?: BoolFilter<"ApprovalStep"> | boolean
    rule?: XOR<ApprovalRuleScalarRelationFilter, ApprovalRuleWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApprovalStepOrderByWithAggregationInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    isRequired?: SortOrder
    _count?: ApprovalStepCountOrderByAggregateInput
    _avg?: ApprovalStepAvgOrderByAggregateInput
    _max?: ApprovalStepMaxOrderByAggregateInput
    _min?: ApprovalStepMinOrderByAggregateInput
    _sum?: ApprovalStepSumOrderByAggregateInput
  }

  export type ApprovalStepScalarWhereWithAggregatesInput = {
    AND?: ApprovalStepScalarWhereWithAggregatesInput | ApprovalStepScalarWhereWithAggregatesInput[]
    OR?: ApprovalStepScalarWhereWithAggregatesInput[]
    NOT?: ApprovalStepScalarWhereWithAggregatesInput | ApprovalStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApprovalStep"> | string
    ruleId?: StringWithAggregatesFilter<"ApprovalStep"> | string
    approverId?: StringWithAggregatesFilter<"ApprovalStep"> | string
    stepOrder?: IntWithAggregatesFilter<"ApprovalStep"> | number
    isRequired?: BoolWithAggregatesFilter<"ApprovalStep"> | boolean
  }

  export type ExpenseApprovalWhereInput = {
    AND?: ExpenseApprovalWhereInput | ExpenseApprovalWhereInput[]
    OR?: ExpenseApprovalWhereInput[]
    NOT?: ExpenseApprovalWhereInput | ExpenseApprovalWhereInput[]
    id?: StringFilter<"ExpenseApproval"> | string
    expenseId?: StringFilter<"ExpenseApproval"> | string
    approverId?: StringFilter<"ExpenseApproval"> | string
    stepOrder?: IntFilter<"ExpenseApproval"> | number
    status?: EnumApprovalStatusFilter<"ExpenseApproval"> | $Enums.ApprovalStatus
    comment?: StringNullableFilter<"ExpenseApproval"> | string | null
    actedAt?: DateTimeNullableFilter<"ExpenseApproval"> | Date | string | null
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExpenseApprovalOrderByWithRelationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    actedAt?: SortOrderInput | SortOrder
    expense?: ExpenseOrderByWithRelationInput
    approver?: UserOrderByWithRelationInput
  }

  export type ExpenseApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseApprovalWhereInput | ExpenseApprovalWhereInput[]
    OR?: ExpenseApprovalWhereInput[]
    NOT?: ExpenseApprovalWhereInput | ExpenseApprovalWhereInput[]
    expenseId?: StringFilter<"ExpenseApproval"> | string
    approverId?: StringFilter<"ExpenseApproval"> | string
    stepOrder?: IntFilter<"ExpenseApproval"> | number
    status?: EnumApprovalStatusFilter<"ExpenseApproval"> | $Enums.ApprovalStatus
    comment?: StringNullableFilter<"ExpenseApproval"> | string | null
    actedAt?: DateTimeNullableFilter<"ExpenseApproval"> | Date | string | null
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExpenseApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    actedAt?: SortOrderInput | SortOrder
    _count?: ExpenseApprovalCountOrderByAggregateInput
    _avg?: ExpenseApprovalAvgOrderByAggregateInput
    _max?: ExpenseApprovalMaxOrderByAggregateInput
    _min?: ExpenseApprovalMinOrderByAggregateInput
    _sum?: ExpenseApprovalSumOrderByAggregateInput
  }

  export type ExpenseApprovalScalarWhereWithAggregatesInput = {
    AND?: ExpenseApprovalScalarWhereWithAggregatesInput | ExpenseApprovalScalarWhereWithAggregatesInput[]
    OR?: ExpenseApprovalScalarWhereWithAggregatesInput[]
    NOT?: ExpenseApprovalScalarWhereWithAggregatesInput | ExpenseApprovalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpenseApproval"> | string
    expenseId?: StringWithAggregatesFilter<"ExpenseApproval"> | string
    approverId?: StringWithAggregatesFilter<"ExpenseApproval"> | string
    stepOrder?: IntWithAggregatesFilter<"ExpenseApproval"> | number
    status?: EnumApprovalStatusWithAggregatesFilter<"ExpenseApproval"> | $Enums.ApprovalStatus
    comment?: StringNullableWithAggregatesFilter<"ExpenseApproval"> | string | null
    actedAt?: DateTimeNullableWithAggregatesFilter<"ExpenseApproval"> | Date | string | null
  }

  export type OCRDataWhereInput = {
    AND?: OCRDataWhereInput | OCRDataWhereInput[]
    OR?: OCRDataWhereInput[]
    NOT?: OCRDataWhereInput | OCRDataWhereInput[]
    id?: StringFilter<"OCRData"> | string
    expenseId?: StringFilter<"OCRData"> | string
    rawText?: StringNullableFilter<"OCRData"> | string | null
    extractedJson?: JsonFilter<"OCRData">
    confidence?: FloatNullableFilter<"OCRData"> | number | null
    createdAt?: DateTimeFilter<"OCRData"> | Date | string
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
  }

  export type OCRDataOrderByWithRelationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    rawText?: SortOrderInput | SortOrder
    extractedJson?: SortOrder
    confidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expense?: ExpenseOrderByWithRelationInput
  }

  export type OCRDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    expenseId?: string
    AND?: OCRDataWhereInput | OCRDataWhereInput[]
    OR?: OCRDataWhereInput[]
    NOT?: OCRDataWhereInput | OCRDataWhereInput[]
    rawText?: StringNullableFilter<"OCRData"> | string | null
    extractedJson?: JsonFilter<"OCRData">
    confidence?: FloatNullableFilter<"OCRData"> | number | null
    createdAt?: DateTimeFilter<"OCRData"> | Date | string
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
  }, "id" | "expenseId">

  export type OCRDataOrderByWithAggregationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    rawText?: SortOrderInput | SortOrder
    extractedJson?: SortOrder
    confidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OCRDataCountOrderByAggregateInput
    _avg?: OCRDataAvgOrderByAggregateInput
    _max?: OCRDataMaxOrderByAggregateInput
    _min?: OCRDataMinOrderByAggregateInput
    _sum?: OCRDataSumOrderByAggregateInput
  }

  export type OCRDataScalarWhereWithAggregatesInput = {
    AND?: OCRDataScalarWhereWithAggregatesInput | OCRDataScalarWhereWithAggregatesInput[]
    OR?: OCRDataScalarWhereWithAggregatesInput[]
    NOT?: OCRDataScalarWhereWithAggregatesInput | OCRDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OCRData"> | string
    expenseId?: StringWithAggregatesFilter<"OCRData"> | string
    rawText?: StringNullableWithAggregatesFilter<"OCRData"> | string | null
    extractedJson?: JsonWithAggregatesFilter<"OCRData">
    confidence?: FloatNullableWithAggregatesFilter<"OCRData"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"OCRData"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    country: string
    currencyCode: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
    approvalRules?: ApprovalRuleCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    country: string
    currencyCode: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
    approvalRules?: ApprovalRuleUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
    approvalRules?: ApprovalRuleUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
    approvalRules?: ApprovalRuleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    country: string
    currencyCode: string
    createdAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId?: string | null
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    id?: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutExpensesInput
    employee: UserCreateNestedOneWithoutExpensesInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutExpenseInput
    ocrData?: OCRDataCreateNestedOneWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    companyId: string
    employeeId: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutExpenseInput
    ocrData?: OCRDataUncheckedCreateNestedOneWithoutExpenseInput
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    employee?: UserUpdateOneRequiredWithoutExpensesNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutExpenseNestedInput
    ocrData?: OCRDataUpdateOneWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutExpenseNestedInput
    ocrData?: OCRDataUncheckedUpdateOneWithoutExpenseNestedInput
  }

  export type ExpenseCreateManyInput = {
    id?: string
    companyId: string
    employeeId: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRuleCreateInput = {
    id?: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutApprovalRulesInput
    user: UserCreateNestedOneWithoutRulesInput
    steps?: ApprovalStepCreateNestedManyWithoutRuleInput
  }

  export type ApprovalRuleUncheckedCreateInput = {
    id?: string
    companyId: string
    userId: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
    steps?: ApprovalStepUncheckedCreateNestedManyWithoutRuleInput
  }

  export type ApprovalRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutApprovalRulesNestedInput
    user?: UserUpdateOneRequiredWithoutRulesNestedInput
    steps?: ApprovalStepUpdateManyWithoutRuleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: ApprovalStepUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type ApprovalRuleCreateManyInput = {
    id?: string
    companyId: string
    userId: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
  }

  export type ApprovalRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalStepCreateInput = {
    id?: string
    stepOrder: number
    isRequired?: boolean
    rule: ApprovalRuleCreateNestedOneWithoutStepsInput
    approver: UserCreateNestedOneWithoutApprovalStepsInput
  }

  export type ApprovalStepUncheckedCreateInput = {
    id?: string
    ruleId: string
    approverId: string
    stepOrder: number
    isRequired?: boolean
  }

  export type ApprovalStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    rule?: ApprovalRuleUpdateOneRequiredWithoutStepsNestedInput
    approver?: UserUpdateOneRequiredWithoutApprovalStepsNestedInput
  }

  export type ApprovalStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalStepCreateManyInput = {
    id?: string
    ruleId: string
    approverId: string
    stepOrder: number
    isRequired?: boolean
  }

  export type ApprovalStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseApprovalCreateInput = {
    id?: string
    stepOrder: number
    status?: $Enums.ApprovalStatus
    comment?: string | null
    actedAt?: Date | string | null
    expense: ExpenseCreateNestedOneWithoutApprovalsInput
    approver: UserCreateNestedOneWithoutApprovalsInput
  }

  export type ExpenseApprovalUncheckedCreateInput = {
    id?: string
    expenseId: string
    approverId: string
    stepOrder: number
    status?: $Enums.ApprovalStatus
    comment?: string | null
    actedAt?: Date | string | null
  }

  export type ExpenseApprovalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expense?: ExpenseUpdateOneRequiredWithoutApprovalsNestedInput
    approver?: UserUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ExpenseApprovalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseApprovalCreateManyInput = {
    id?: string
    expenseId: string
    approverId: string
    stepOrder: number
    status?: $Enums.ApprovalStatus
    comment?: string | null
    actedAt?: Date | string | null
  }

  export type ExpenseApprovalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseApprovalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OCRDataCreateInput = {
    id?: string
    rawText?: string | null
    extractedJson: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    createdAt?: Date | string
    expense: ExpenseCreateNestedOneWithoutOcrDataInput
  }

  export type OCRDataUncheckedCreateInput = {
    id?: string
    expenseId: string
    rawText?: string | null
    extractedJson: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    createdAt?: Date | string
  }

  export type OCRDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    extractedJson?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expense?: ExpenseUpdateOneRequiredWithoutOcrDataNestedInput
  }

  export type OCRDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    extractedJson?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OCRDataCreateManyInput = {
    id?: string
    expenseId: string
    rawText?: string | null
    extractedJson: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    createdAt?: Date | string
  }

  export type OCRDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    extractedJson?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OCRDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    extractedJson?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type ApprovalRuleListRelationFilter = {
    every?: ApprovalRuleWhereInput
    some?: ApprovalRuleWhereInput
    none?: ApprovalRuleWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ExpenseApprovalListRelationFilter = {
    every?: ExpenseApprovalWhereInput
    some?: ExpenseApprovalWhereInput
    none?: ExpenseApprovalWhereInput
  }

  export type ApprovalStepListRelationFilter = {
    every?: ApprovalStepWhereInput
    some?: ApprovalStepWhereInput
    none?: ApprovalStepWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExpenseApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumExpenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseStatusFilter<$PrismaModel> | $Enums.ExpenseStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OCRDataNullableScalarRelationFilter = {
    is?: OCRDataWhereInput | null
    isNot?: OCRDataWhereInput | null
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    amountOriginal?: SortOrder
    currencyOriginal?: SortOrder
    amountConverted?: SortOrder
    category?: SortOrder
    description?: SortOrder
    remarks?: SortOrder
    date?: SortOrder
    receiptUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amountOriginal?: SortOrder
    amountConverted?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    amountOriginal?: SortOrder
    currencyOriginal?: SortOrder
    amountConverted?: SortOrder
    category?: SortOrder
    description?: SortOrder
    remarks?: SortOrder
    date?: SortOrder
    receiptUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    amountOriginal?: SortOrder
    currencyOriginal?: SortOrder
    amountConverted?: SortOrder
    category?: SortOrder
    description?: SortOrder
    remarks?: SortOrder
    date?: SortOrder
    receiptUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amountOriginal?: SortOrder
    amountConverted?: SortOrder
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

  export type EnumExpenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseStatusFilter<$PrismaModel>
    _max?: NestedEnumExpenseStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ApprovalRuleCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    ruleName?: SortOrder
    description?: SortOrder
    isManagerApprover?: SortOrder
    isSequential?: SortOrder
    minApprovalPercentage?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalRuleAvgOrderByAggregateInput = {
    minApprovalPercentage?: SortOrder
  }

  export type ApprovalRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    ruleName?: SortOrder
    description?: SortOrder
    isManagerApprover?: SortOrder
    isSequential?: SortOrder
    minApprovalPercentage?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalRuleMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    ruleName?: SortOrder
    description?: SortOrder
    isManagerApprover?: SortOrder
    isSequential?: SortOrder
    minApprovalPercentage?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalRuleSumOrderByAggregateInput = {
    minApprovalPercentage?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ApprovalRuleScalarRelationFilter = {
    is?: ApprovalRuleWhereInput
    isNot?: ApprovalRuleWhereInput
  }

  export type ApprovalStepCountOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    isRequired?: SortOrder
  }

  export type ApprovalStepAvgOrderByAggregateInput = {
    stepOrder?: SortOrder
  }

  export type ApprovalStepMaxOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    isRequired?: SortOrder
  }

  export type ApprovalStepMinOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    isRequired?: SortOrder
  }

  export type ApprovalStepSumOrderByAggregateInput = {
    stepOrder?: SortOrder
  }

  export type EnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
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

  export type ExpenseScalarRelationFilter = {
    is?: ExpenseWhereInput
    isNot?: ExpenseWhereInput
  }

  export type ExpenseApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    actedAt?: SortOrder
  }

  export type ExpenseApprovalAvgOrderByAggregateInput = {
    stepOrder?: SortOrder
  }

  export type ExpenseApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    actedAt?: SortOrder
  }

  export type ExpenseApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    approverId?: SortOrder
    stepOrder?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    actedAt?: SortOrder
  }

  export type ExpenseApprovalSumOrderByAggregateInput = {
    stepOrder?: SortOrder
  }

  export type EnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type OCRDataCountOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    rawText?: SortOrder
    extractedJson?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type OCRDataAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type OCRDataMaxOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    rawText?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type OCRDataMinOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    rawText?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
  }

  export type OCRDataSumOrderByAggregateInput = {
    confidence?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ApprovalRuleCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput> | ApprovalRuleCreateWithoutCompanyInput[] | ApprovalRuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutCompanyInput | ApprovalRuleCreateOrConnectWithoutCompanyInput[]
    createMany?: ApprovalRuleCreateManyCompanyInputEnvelope
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ApprovalRuleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput> | ApprovalRuleCreateWithoutCompanyInput[] | ApprovalRuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutCompanyInput | ApprovalRuleCreateOrConnectWithoutCompanyInput[]
    createMany?: ApprovalRuleCreateManyCompanyInputEnvelope
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCompanyInput | ExpenseUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCompanyInput | ExpenseUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCompanyInput | ExpenseUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ApprovalRuleUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput> | ApprovalRuleCreateWithoutCompanyInput[] | ApprovalRuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutCompanyInput | ApprovalRuleCreateOrConnectWithoutCompanyInput[]
    upsert?: ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput | ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ApprovalRuleCreateManyCompanyInputEnvelope
    set?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    disconnect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    delete?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    update?: ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput | ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ApprovalRuleUpdateManyWithWhereWithoutCompanyInput | ApprovalRuleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCompanyInput | ExpenseUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCompanyInput | ExpenseUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCompanyInput | ExpenseUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ApprovalRuleUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput> | ApprovalRuleCreateWithoutCompanyInput[] | ApprovalRuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutCompanyInput | ApprovalRuleCreateOrConnectWithoutCompanyInput[]
    upsert?: ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput | ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ApprovalRuleCreateManyCompanyInputEnvelope
    set?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    disconnect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    delete?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    update?: ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput | ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ApprovalRuleUpdateManyWithWhereWithoutCompanyInput | ApprovalRuleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubordinatesInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ExpenseCreateWithoutEmployeeInput, ExpenseUncheckedCreateWithoutEmployeeInput> | ExpenseCreateWithoutEmployeeInput[] | ExpenseUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutEmployeeInput | ExpenseCreateOrConnectWithoutEmployeeInput[]
    createMany?: ExpenseCreateManyEmployeeInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseApprovalCreateNestedManyWithoutApproverInput = {
    create?: XOR<ExpenseApprovalCreateWithoutApproverInput, ExpenseApprovalUncheckedCreateWithoutApproverInput> | ExpenseApprovalCreateWithoutApproverInput[] | ExpenseApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ExpenseApprovalCreateOrConnectWithoutApproverInput | ExpenseApprovalCreateOrConnectWithoutApproverInput[]
    createMany?: ExpenseApprovalCreateManyApproverInputEnvelope
    connect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
  }

  export type ApprovalStepCreateNestedManyWithoutApproverInput = {
    create?: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput> | ApprovalStepCreateWithoutApproverInput[] | ApprovalStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutApproverInput | ApprovalStepCreateOrConnectWithoutApproverInput[]
    createMany?: ApprovalStepCreateManyApproverInputEnvelope
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
  }

  export type ApprovalRuleCreateNestedManyWithoutUserInput = {
    create?: XOR<ApprovalRuleCreateWithoutUserInput, ApprovalRuleUncheckedCreateWithoutUserInput> | ApprovalRuleCreateWithoutUserInput[] | ApprovalRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutUserInput | ApprovalRuleCreateOrConnectWithoutUserInput[]
    createMany?: ApprovalRuleCreateManyUserInputEnvelope
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ExpenseCreateWithoutEmployeeInput, ExpenseUncheckedCreateWithoutEmployeeInput> | ExpenseCreateWithoutEmployeeInput[] | ExpenseUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutEmployeeInput | ExpenseCreateOrConnectWithoutEmployeeInput[]
    createMany?: ExpenseCreateManyEmployeeInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseApprovalUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<ExpenseApprovalCreateWithoutApproverInput, ExpenseApprovalUncheckedCreateWithoutApproverInput> | ExpenseApprovalCreateWithoutApproverInput[] | ExpenseApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ExpenseApprovalCreateOrConnectWithoutApproverInput | ExpenseApprovalCreateOrConnectWithoutApproverInput[]
    createMany?: ExpenseApprovalCreateManyApproverInputEnvelope
    connect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
  }

  export type ApprovalStepUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput> | ApprovalStepCreateWithoutApproverInput[] | ApprovalStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutApproverInput | ApprovalStepCreateOrConnectWithoutApproverInput[]
    createMany?: ApprovalStepCreateManyApproverInputEnvelope
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
  }

  export type ApprovalRuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApprovalRuleCreateWithoutUserInput, ApprovalRuleUncheckedCreateWithoutUserInput> | ApprovalRuleCreateWithoutUserInput[] | ApprovalRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutUserInput | ApprovalRuleCreateOrConnectWithoutUserInput[]
    createMany?: ApprovalRuleCreateManyUserInputEnvelope
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutSubordinatesNestedInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    upsert?: UserUpsertWithoutSubordinatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubordinatesInput, UserUpdateWithoutSubordinatesInput>, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ExpenseCreateWithoutEmployeeInput, ExpenseUncheckedCreateWithoutEmployeeInput> | ExpenseCreateWithoutEmployeeInput[] | ExpenseUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutEmployeeInput | ExpenseCreateOrConnectWithoutEmployeeInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutEmployeeInput | ExpenseUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ExpenseCreateManyEmployeeInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutEmployeeInput | ExpenseUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutEmployeeInput | ExpenseUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseApprovalUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ExpenseApprovalCreateWithoutApproverInput, ExpenseApprovalUncheckedCreateWithoutApproverInput> | ExpenseApprovalCreateWithoutApproverInput[] | ExpenseApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ExpenseApprovalCreateOrConnectWithoutApproverInput | ExpenseApprovalCreateOrConnectWithoutApproverInput[]
    upsert?: ExpenseApprovalUpsertWithWhereUniqueWithoutApproverInput | ExpenseApprovalUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ExpenseApprovalCreateManyApproverInputEnvelope
    set?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    disconnect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    delete?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    connect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    update?: ExpenseApprovalUpdateWithWhereUniqueWithoutApproverInput | ExpenseApprovalUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ExpenseApprovalUpdateManyWithWhereWithoutApproverInput | ExpenseApprovalUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ExpenseApprovalScalarWhereInput | ExpenseApprovalScalarWhereInput[]
  }

  export type ApprovalStepUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput> | ApprovalStepCreateWithoutApproverInput[] | ApprovalStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutApproverInput | ApprovalStepCreateOrConnectWithoutApproverInput[]
    upsert?: ApprovalStepUpsertWithWhereUniqueWithoutApproverInput | ApprovalStepUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ApprovalStepCreateManyApproverInputEnvelope
    set?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    disconnect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    delete?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    update?: ApprovalStepUpdateWithWhereUniqueWithoutApproverInput | ApprovalStepUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ApprovalStepUpdateManyWithWhereWithoutApproverInput | ApprovalStepUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
  }

  export type ApprovalRuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutUserInput, ApprovalRuleUncheckedCreateWithoutUserInput> | ApprovalRuleCreateWithoutUserInput[] | ApprovalRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutUserInput | ApprovalRuleCreateOrConnectWithoutUserInput[]
    upsert?: ApprovalRuleUpsertWithWhereUniqueWithoutUserInput | ApprovalRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApprovalRuleCreateManyUserInputEnvelope
    set?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    disconnect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    delete?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    update?: ApprovalRuleUpdateWithWhereUniqueWithoutUserInput | ApprovalRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApprovalRuleUpdateManyWithWhereWithoutUserInput | ApprovalRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ExpenseCreateWithoutEmployeeInput, ExpenseUncheckedCreateWithoutEmployeeInput> | ExpenseCreateWithoutEmployeeInput[] | ExpenseUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutEmployeeInput | ExpenseCreateOrConnectWithoutEmployeeInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutEmployeeInput | ExpenseUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ExpenseCreateManyEmployeeInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutEmployeeInput | ExpenseUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutEmployeeInput | ExpenseUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseApprovalUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ExpenseApprovalCreateWithoutApproverInput, ExpenseApprovalUncheckedCreateWithoutApproverInput> | ExpenseApprovalCreateWithoutApproverInput[] | ExpenseApprovalUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ExpenseApprovalCreateOrConnectWithoutApproverInput | ExpenseApprovalCreateOrConnectWithoutApproverInput[]
    upsert?: ExpenseApprovalUpsertWithWhereUniqueWithoutApproverInput | ExpenseApprovalUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ExpenseApprovalCreateManyApproverInputEnvelope
    set?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    disconnect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    delete?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    connect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    update?: ExpenseApprovalUpdateWithWhereUniqueWithoutApproverInput | ExpenseApprovalUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ExpenseApprovalUpdateManyWithWhereWithoutApproverInput | ExpenseApprovalUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ExpenseApprovalScalarWhereInput | ExpenseApprovalScalarWhereInput[]
  }

  export type ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput> | ApprovalStepCreateWithoutApproverInput[] | ApprovalStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutApproverInput | ApprovalStepCreateOrConnectWithoutApproverInput[]
    upsert?: ApprovalStepUpsertWithWhereUniqueWithoutApproverInput | ApprovalStepUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ApprovalStepCreateManyApproverInputEnvelope
    set?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    disconnect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    delete?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    update?: ApprovalStepUpdateWithWhereUniqueWithoutApproverInput | ApprovalStepUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ApprovalStepUpdateManyWithWhereWithoutApproverInput | ApprovalStepUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
  }

  export type ApprovalRuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutUserInput, ApprovalRuleUncheckedCreateWithoutUserInput> | ApprovalRuleCreateWithoutUserInput[] | ApprovalRuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutUserInput | ApprovalRuleCreateOrConnectWithoutUserInput[]
    upsert?: ApprovalRuleUpsertWithWhereUniqueWithoutUserInput | ApprovalRuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApprovalRuleCreateManyUserInputEnvelope
    set?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    disconnect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    delete?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    update?: ApprovalRuleUpdateWithWhereUniqueWithoutUserInput | ApprovalRuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApprovalRuleUpdateManyWithWhereWithoutUserInput | ApprovalRuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExpensesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseApprovalCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseApprovalCreateWithoutExpenseInput, ExpenseApprovalUncheckedCreateWithoutExpenseInput> | ExpenseApprovalCreateWithoutExpenseInput[] | ExpenseApprovalUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseApprovalCreateOrConnectWithoutExpenseInput | ExpenseApprovalCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseApprovalCreateManyExpenseInputEnvelope
    connect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
  }

  export type OCRDataCreateNestedOneWithoutExpenseInput = {
    create?: XOR<OCRDataCreateWithoutExpenseInput, OCRDataUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: OCRDataCreateOrConnectWithoutExpenseInput
    connect?: OCRDataWhereUniqueInput
  }

  export type ExpenseApprovalUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseApprovalCreateWithoutExpenseInput, ExpenseApprovalUncheckedCreateWithoutExpenseInput> | ExpenseApprovalCreateWithoutExpenseInput[] | ExpenseApprovalUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseApprovalCreateOrConnectWithoutExpenseInput | ExpenseApprovalCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseApprovalCreateManyExpenseInputEnvelope
    connect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
  }

  export type OCRDataUncheckedCreateNestedOneWithoutExpenseInput = {
    create?: XOR<OCRDataCreateWithoutExpenseInput, OCRDataUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: OCRDataCreateOrConnectWithoutExpenseInput
    connect?: OCRDataWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumExpenseStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseStatus
  }

  export type CompanyUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExpensesInput
    upsert?: CompanyUpsertWithoutExpensesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutExpensesInput, CompanyUpdateWithoutExpensesInput>, CompanyUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type ExpenseApprovalUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseApprovalCreateWithoutExpenseInput, ExpenseApprovalUncheckedCreateWithoutExpenseInput> | ExpenseApprovalCreateWithoutExpenseInput[] | ExpenseApprovalUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseApprovalCreateOrConnectWithoutExpenseInput | ExpenseApprovalCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseApprovalUpsertWithWhereUniqueWithoutExpenseInput | ExpenseApprovalUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseApprovalCreateManyExpenseInputEnvelope
    set?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    disconnect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    delete?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    connect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    update?: ExpenseApprovalUpdateWithWhereUniqueWithoutExpenseInput | ExpenseApprovalUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseApprovalUpdateManyWithWhereWithoutExpenseInput | ExpenseApprovalUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseApprovalScalarWhereInput | ExpenseApprovalScalarWhereInput[]
  }

  export type OCRDataUpdateOneWithoutExpenseNestedInput = {
    create?: XOR<OCRDataCreateWithoutExpenseInput, OCRDataUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: OCRDataCreateOrConnectWithoutExpenseInput
    upsert?: OCRDataUpsertWithoutExpenseInput
    disconnect?: OCRDataWhereInput | boolean
    delete?: OCRDataWhereInput | boolean
    connect?: OCRDataWhereUniqueInput
    update?: XOR<XOR<OCRDataUpdateToOneWithWhereWithoutExpenseInput, OCRDataUpdateWithoutExpenseInput>, OCRDataUncheckedUpdateWithoutExpenseInput>
  }

  export type ExpenseApprovalUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseApprovalCreateWithoutExpenseInput, ExpenseApprovalUncheckedCreateWithoutExpenseInput> | ExpenseApprovalCreateWithoutExpenseInput[] | ExpenseApprovalUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseApprovalCreateOrConnectWithoutExpenseInput | ExpenseApprovalCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseApprovalUpsertWithWhereUniqueWithoutExpenseInput | ExpenseApprovalUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseApprovalCreateManyExpenseInputEnvelope
    set?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    disconnect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    delete?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    connect?: ExpenseApprovalWhereUniqueInput | ExpenseApprovalWhereUniqueInput[]
    update?: ExpenseApprovalUpdateWithWhereUniqueWithoutExpenseInput | ExpenseApprovalUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseApprovalUpdateManyWithWhereWithoutExpenseInput | ExpenseApprovalUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseApprovalScalarWhereInput | ExpenseApprovalScalarWhereInput[]
  }

  export type OCRDataUncheckedUpdateOneWithoutExpenseNestedInput = {
    create?: XOR<OCRDataCreateWithoutExpenseInput, OCRDataUncheckedCreateWithoutExpenseInput>
    connectOrCreate?: OCRDataCreateOrConnectWithoutExpenseInput
    upsert?: OCRDataUpsertWithoutExpenseInput
    disconnect?: OCRDataWhereInput | boolean
    delete?: OCRDataWhereInput | boolean
    connect?: OCRDataWhereUniqueInput
    update?: XOR<XOR<OCRDataUpdateToOneWithWhereWithoutExpenseInput, OCRDataUpdateWithoutExpenseInput>, OCRDataUncheckedUpdateWithoutExpenseInput>
  }

  export type CompanyCreateNestedOneWithoutApprovalRulesInput = {
    create?: XOR<CompanyCreateWithoutApprovalRulesInput, CompanyUncheckedCreateWithoutApprovalRulesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutApprovalRulesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRulesInput = {
    create?: XOR<UserCreateWithoutRulesInput, UserUncheckedCreateWithoutRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRulesInput
    connect?: UserWhereUniqueInput
  }

  export type ApprovalStepCreateNestedManyWithoutRuleInput = {
    create?: XOR<ApprovalStepCreateWithoutRuleInput, ApprovalStepUncheckedCreateWithoutRuleInput> | ApprovalStepCreateWithoutRuleInput[] | ApprovalStepUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutRuleInput | ApprovalStepCreateOrConnectWithoutRuleInput[]
    createMany?: ApprovalStepCreateManyRuleInputEnvelope
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
  }

  export type ApprovalStepUncheckedCreateNestedManyWithoutRuleInput = {
    create?: XOR<ApprovalStepCreateWithoutRuleInput, ApprovalStepUncheckedCreateWithoutRuleInput> | ApprovalStepCreateWithoutRuleInput[] | ApprovalStepUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutRuleInput | ApprovalStepCreateOrConnectWithoutRuleInput[]
    createMany?: ApprovalStepCreateManyRuleInputEnvelope
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutApprovalRulesNestedInput = {
    create?: XOR<CompanyCreateWithoutApprovalRulesInput, CompanyUncheckedCreateWithoutApprovalRulesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutApprovalRulesInput
    upsert?: CompanyUpsertWithoutApprovalRulesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutApprovalRulesInput, CompanyUpdateWithoutApprovalRulesInput>, CompanyUncheckedUpdateWithoutApprovalRulesInput>
  }

  export type UserUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<UserCreateWithoutRulesInput, UserUncheckedCreateWithoutRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRulesInput
    upsert?: UserUpsertWithoutRulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRulesInput, UserUpdateWithoutRulesInput>, UserUncheckedUpdateWithoutRulesInput>
  }

  export type ApprovalStepUpdateManyWithoutRuleNestedInput = {
    create?: XOR<ApprovalStepCreateWithoutRuleInput, ApprovalStepUncheckedCreateWithoutRuleInput> | ApprovalStepCreateWithoutRuleInput[] | ApprovalStepUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutRuleInput | ApprovalStepCreateOrConnectWithoutRuleInput[]
    upsert?: ApprovalStepUpsertWithWhereUniqueWithoutRuleInput | ApprovalStepUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: ApprovalStepCreateManyRuleInputEnvelope
    set?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    disconnect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    delete?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    update?: ApprovalStepUpdateWithWhereUniqueWithoutRuleInput | ApprovalStepUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: ApprovalStepUpdateManyWithWhereWithoutRuleInput | ApprovalStepUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
  }

  export type ApprovalStepUncheckedUpdateManyWithoutRuleNestedInput = {
    create?: XOR<ApprovalStepCreateWithoutRuleInput, ApprovalStepUncheckedCreateWithoutRuleInput> | ApprovalStepCreateWithoutRuleInput[] | ApprovalStepUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutRuleInput | ApprovalStepCreateOrConnectWithoutRuleInput[]
    upsert?: ApprovalStepUpsertWithWhereUniqueWithoutRuleInput | ApprovalStepUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: ApprovalStepCreateManyRuleInputEnvelope
    set?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    disconnect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    delete?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    update?: ApprovalStepUpdateWithWhereUniqueWithoutRuleInput | ApprovalStepUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: ApprovalStepUpdateManyWithWhereWithoutRuleInput | ApprovalStepUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
  }

  export type ApprovalRuleCreateNestedOneWithoutStepsInput = {
    create?: XOR<ApprovalRuleCreateWithoutStepsInput, ApprovalRuleUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutStepsInput
    connect?: ApprovalRuleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovalStepsInput = {
    create?: XOR<UserCreateWithoutApprovalStepsInput, UserUncheckedCreateWithoutApprovalStepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalStepsInput
    connect?: UserWhereUniqueInput
  }

  export type ApprovalRuleUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutStepsInput, ApprovalRuleUncheckedCreateWithoutStepsInput>
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutStepsInput
    upsert?: ApprovalRuleUpsertWithoutStepsInput
    connect?: ApprovalRuleWhereUniqueInput
    update?: XOR<XOR<ApprovalRuleUpdateToOneWithWhereWithoutStepsInput, ApprovalRuleUpdateWithoutStepsInput>, ApprovalRuleUncheckedUpdateWithoutStepsInput>
  }

  export type UserUpdateOneRequiredWithoutApprovalStepsNestedInput = {
    create?: XOR<UserCreateWithoutApprovalStepsInput, UserUncheckedCreateWithoutApprovalStepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalStepsInput
    upsert?: UserUpsertWithoutApprovalStepsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalStepsInput, UserUpdateWithoutApprovalStepsInput>, UserUncheckedUpdateWithoutApprovalStepsInput>
  }

  export type ExpenseCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<ExpenseCreateWithoutApprovalsInput, ExpenseUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutApprovalsInput
    connect?: ExpenseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ExpenseUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<ExpenseCreateWithoutApprovalsInput, ExpenseUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutApprovalsInput
    upsert?: ExpenseUpsertWithoutApprovalsInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutApprovalsInput, ExpenseUpdateWithoutApprovalsInput>, ExpenseUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    upsert?: UserUpsertWithoutApprovalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalsInput, UserUpdateWithoutApprovalsInput>, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type ExpenseCreateNestedOneWithoutOcrDataInput = {
    create?: XOR<ExpenseCreateWithoutOcrDataInput, ExpenseUncheckedCreateWithoutOcrDataInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutOcrDataInput
    connect?: ExpenseWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpenseUpdateOneRequiredWithoutOcrDataNestedInput = {
    create?: XOR<ExpenseCreateWithoutOcrDataInput, ExpenseUncheckedCreateWithoutOcrDataInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutOcrDataInput
    upsert?: ExpenseUpsertWithoutOcrDataInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutOcrDataInput, ExpenseUpdateWithoutOcrDataInput>, ExpenseUncheckedUpdateWithoutOcrDataInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumExpenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseStatusFilter<$PrismaModel> | $Enums.ExpenseStatus
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

  export type NestedEnumExpenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseStatusFilter<$PrismaModel>
    _max?: NestedEnumExpenseStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
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

  export type NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UserCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId?: string | null
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutCompanyInput = {
    id?: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    employee: UserCreateNestedOneWithoutExpensesInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutExpenseInput
    ocrData?: OCRDataCreateNestedOneWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutCompanyInput = {
    id?: string
    employeeId: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutExpenseInput
    ocrData?: OCRDataUncheckedCreateNestedOneWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput>
  }

  export type ExpenseCreateManyCompanyInputEnvelope = {
    data: ExpenseCreateManyCompanyInput | ExpenseCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalRuleCreateWithoutCompanyInput = {
    id?: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRulesInput
    steps?: ApprovalStepCreateNestedManyWithoutRuleInput
  }

  export type ApprovalRuleUncheckedCreateWithoutCompanyInput = {
    id?: string
    userId: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
    steps?: ApprovalStepUncheckedCreateNestedManyWithoutRuleInput
  }

  export type ApprovalRuleCreateOrConnectWithoutCompanyInput = {
    where: ApprovalRuleWhereUniqueInput
    create: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput>
  }

  export type ApprovalRuleCreateManyCompanyInputEnvelope = {
    data: ApprovalRuleCreateManyCompanyInput | ApprovalRuleCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    companyId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    managerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCompanyInput, ExpenseUncheckedUpdateWithoutCompanyInput>
    create: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCompanyInput, ExpenseUncheckedUpdateWithoutCompanyInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCompanyInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    companyId?: StringFilter<"Expense"> | string
    employeeId?: StringFilter<"Expense"> | string
    amountOriginal?: FloatFilter<"Expense"> | number
    currencyOriginal?: StringFilter<"Expense"> | string
    amountConverted?: FloatFilter<"Expense"> | number
    category?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    remarks?: StringNullableFilter<"Expense"> | string | null
    date?: DateTimeFilter<"Expense"> | Date | string
    receiptUrl?: StringNullableFilter<"Expense"> | string | null
    status?: EnumExpenseStatusFilter<"Expense"> | $Enums.ExpenseStatus
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ApprovalRuleWhereUniqueInput
    update: XOR<ApprovalRuleUpdateWithoutCompanyInput, ApprovalRuleUncheckedUpdateWithoutCompanyInput>
    create: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput>
  }

  export type ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ApprovalRuleWhereUniqueInput
    data: XOR<ApprovalRuleUpdateWithoutCompanyInput, ApprovalRuleUncheckedUpdateWithoutCompanyInput>
  }

  export type ApprovalRuleUpdateManyWithWhereWithoutCompanyInput = {
    where: ApprovalRuleScalarWhereInput
    data: XOR<ApprovalRuleUpdateManyMutationInput, ApprovalRuleUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ApprovalRuleScalarWhereInput = {
    AND?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
    OR?: ApprovalRuleScalarWhereInput[]
    NOT?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
    id?: StringFilter<"ApprovalRule"> | string
    companyId?: StringFilter<"ApprovalRule"> | string
    userId?: StringFilter<"ApprovalRule"> | string
    ruleName?: StringFilter<"ApprovalRule"> | string
    description?: StringNullableFilter<"ApprovalRule"> | string | null
    isManagerApprover?: BoolFilter<"ApprovalRule"> | boolean
    isSequential?: BoolFilter<"ApprovalRule"> | boolean
    minApprovalPercentage?: IntFilter<"ApprovalRule"> | number
    createdAt?: DateTimeFilter<"ApprovalRule"> | Date | string
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    country: string
    currencyCode: string
    createdAt?: Date | string
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
    approvalRules?: ApprovalRuleCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    country: string
    currencyCode: string
    createdAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
    approvalRules?: ApprovalRuleUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutSubordinatesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    expenses?: ExpenseCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubordinatesInput = {
    id?: string
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId?: string | null
    createdAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubordinatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
  }

  export type UserCreateWithoutManagerInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagerInput = {
    id?: string
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateManyManagerInputEnvelope = {
    data: UserCreateManyManagerInput | UserCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutEmployeeInput = {
    id?: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutExpensesInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutExpenseInput
    ocrData?: OCRDataCreateNestedOneWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutEmployeeInput = {
    id?: string
    companyId: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutExpenseInput
    ocrData?: OCRDataUncheckedCreateNestedOneWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutEmployeeInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutEmployeeInput, ExpenseUncheckedCreateWithoutEmployeeInput>
  }

  export type ExpenseCreateManyEmployeeInputEnvelope = {
    data: ExpenseCreateManyEmployeeInput | ExpenseCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseApprovalCreateWithoutApproverInput = {
    id?: string
    stepOrder: number
    status?: $Enums.ApprovalStatus
    comment?: string | null
    actedAt?: Date | string | null
    expense: ExpenseCreateNestedOneWithoutApprovalsInput
  }

  export type ExpenseApprovalUncheckedCreateWithoutApproverInput = {
    id?: string
    expenseId: string
    stepOrder: number
    status?: $Enums.ApprovalStatus
    comment?: string | null
    actedAt?: Date | string | null
  }

  export type ExpenseApprovalCreateOrConnectWithoutApproverInput = {
    where: ExpenseApprovalWhereUniqueInput
    create: XOR<ExpenseApprovalCreateWithoutApproverInput, ExpenseApprovalUncheckedCreateWithoutApproverInput>
  }

  export type ExpenseApprovalCreateManyApproverInputEnvelope = {
    data: ExpenseApprovalCreateManyApproverInput | ExpenseApprovalCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalStepCreateWithoutApproverInput = {
    id?: string
    stepOrder: number
    isRequired?: boolean
    rule: ApprovalRuleCreateNestedOneWithoutStepsInput
  }

  export type ApprovalStepUncheckedCreateWithoutApproverInput = {
    id?: string
    ruleId: string
    stepOrder: number
    isRequired?: boolean
  }

  export type ApprovalStepCreateOrConnectWithoutApproverInput = {
    where: ApprovalStepWhereUniqueInput
    create: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput>
  }

  export type ApprovalStepCreateManyApproverInputEnvelope = {
    data: ApprovalStepCreateManyApproverInput | ApprovalStepCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalRuleCreateWithoutUserInput = {
    id?: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutApprovalRulesInput
    steps?: ApprovalStepCreateNestedManyWithoutRuleInput
  }

  export type ApprovalRuleUncheckedCreateWithoutUserInput = {
    id?: string
    companyId: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
    steps?: ApprovalStepUncheckedCreateNestedManyWithoutRuleInput
  }

  export type ApprovalRuleCreateOrConnectWithoutUserInput = {
    where: ApprovalRuleWhereUniqueInput
    create: XOR<ApprovalRuleCreateWithoutUserInput, ApprovalRuleUncheckedCreateWithoutUserInput>
  }

  export type ApprovalRuleCreateManyUserInputEnvelope = {
    data: ApprovalRuleCreateManyUserInput | ApprovalRuleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
    approvalRules?: ApprovalRuleUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
    approvalRules?: ApprovalRuleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutSubordinatesInput = {
    update: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubordinatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    expenses?: ExpenseUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagerInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutEmployeeInput, ExpenseUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ExpenseCreateWithoutEmployeeInput, ExpenseUncheckedCreateWithoutEmployeeInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutEmployeeInput, ExpenseUncheckedUpdateWithoutEmployeeInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutEmployeeInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ExpenseApprovalUpsertWithWhereUniqueWithoutApproverInput = {
    where: ExpenseApprovalWhereUniqueInput
    update: XOR<ExpenseApprovalUpdateWithoutApproverInput, ExpenseApprovalUncheckedUpdateWithoutApproverInput>
    create: XOR<ExpenseApprovalCreateWithoutApproverInput, ExpenseApprovalUncheckedCreateWithoutApproverInput>
  }

  export type ExpenseApprovalUpdateWithWhereUniqueWithoutApproverInput = {
    where: ExpenseApprovalWhereUniqueInput
    data: XOR<ExpenseApprovalUpdateWithoutApproverInput, ExpenseApprovalUncheckedUpdateWithoutApproverInput>
  }

  export type ExpenseApprovalUpdateManyWithWhereWithoutApproverInput = {
    where: ExpenseApprovalScalarWhereInput
    data: XOR<ExpenseApprovalUpdateManyMutationInput, ExpenseApprovalUncheckedUpdateManyWithoutApproverInput>
  }

  export type ExpenseApprovalScalarWhereInput = {
    AND?: ExpenseApprovalScalarWhereInput | ExpenseApprovalScalarWhereInput[]
    OR?: ExpenseApprovalScalarWhereInput[]
    NOT?: ExpenseApprovalScalarWhereInput | ExpenseApprovalScalarWhereInput[]
    id?: StringFilter<"ExpenseApproval"> | string
    expenseId?: StringFilter<"ExpenseApproval"> | string
    approverId?: StringFilter<"ExpenseApproval"> | string
    stepOrder?: IntFilter<"ExpenseApproval"> | number
    status?: EnumApprovalStatusFilter<"ExpenseApproval"> | $Enums.ApprovalStatus
    comment?: StringNullableFilter<"ExpenseApproval"> | string | null
    actedAt?: DateTimeNullableFilter<"ExpenseApproval"> | Date | string | null
  }

  export type ApprovalStepUpsertWithWhereUniqueWithoutApproverInput = {
    where: ApprovalStepWhereUniqueInput
    update: XOR<ApprovalStepUpdateWithoutApproverInput, ApprovalStepUncheckedUpdateWithoutApproverInput>
    create: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput>
  }

  export type ApprovalStepUpdateWithWhereUniqueWithoutApproverInput = {
    where: ApprovalStepWhereUniqueInput
    data: XOR<ApprovalStepUpdateWithoutApproverInput, ApprovalStepUncheckedUpdateWithoutApproverInput>
  }

  export type ApprovalStepUpdateManyWithWhereWithoutApproverInput = {
    where: ApprovalStepScalarWhereInput
    data: XOR<ApprovalStepUpdateManyMutationInput, ApprovalStepUncheckedUpdateManyWithoutApproverInput>
  }

  export type ApprovalStepScalarWhereInput = {
    AND?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
    OR?: ApprovalStepScalarWhereInput[]
    NOT?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
    id?: StringFilter<"ApprovalStep"> | string
    ruleId?: StringFilter<"ApprovalStep"> | string
    approverId?: StringFilter<"ApprovalStep"> | string
    stepOrder?: IntFilter<"ApprovalStep"> | number
    isRequired?: BoolFilter<"ApprovalStep"> | boolean
  }

  export type ApprovalRuleUpsertWithWhereUniqueWithoutUserInput = {
    where: ApprovalRuleWhereUniqueInput
    update: XOR<ApprovalRuleUpdateWithoutUserInput, ApprovalRuleUncheckedUpdateWithoutUserInput>
    create: XOR<ApprovalRuleCreateWithoutUserInput, ApprovalRuleUncheckedCreateWithoutUserInput>
  }

  export type ApprovalRuleUpdateWithWhereUniqueWithoutUserInput = {
    where: ApprovalRuleWhereUniqueInput
    data: XOR<ApprovalRuleUpdateWithoutUserInput, ApprovalRuleUncheckedUpdateWithoutUserInput>
  }

  export type ApprovalRuleUpdateManyWithWhereWithoutUserInput = {
    where: ApprovalRuleScalarWhereInput
    data: XOR<ApprovalRuleUpdateManyMutationInput, ApprovalRuleUncheckedUpdateManyWithoutUserInput>
  }

  export type CompanyCreateWithoutExpensesInput = {
    id?: string
    name: string
    country: string
    currencyCode: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    approvalRules?: ApprovalRuleCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    country: string
    currencyCode: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    approvalRules?: ApprovalRuleUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutExpensesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
  }

  export type UserCreateWithoutExpensesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: string
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId?: string | null
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type ExpenseApprovalCreateWithoutExpenseInput = {
    id?: string
    stepOrder: number
    status?: $Enums.ApprovalStatus
    comment?: string | null
    actedAt?: Date | string | null
    approver: UserCreateNestedOneWithoutApprovalsInput
  }

  export type ExpenseApprovalUncheckedCreateWithoutExpenseInput = {
    id?: string
    approverId: string
    stepOrder: number
    status?: $Enums.ApprovalStatus
    comment?: string | null
    actedAt?: Date | string | null
  }

  export type ExpenseApprovalCreateOrConnectWithoutExpenseInput = {
    where: ExpenseApprovalWhereUniqueInput
    create: XOR<ExpenseApprovalCreateWithoutExpenseInput, ExpenseApprovalUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseApprovalCreateManyExpenseInputEnvelope = {
    data: ExpenseApprovalCreateManyExpenseInput | ExpenseApprovalCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type OCRDataCreateWithoutExpenseInput = {
    id?: string
    rawText?: string | null
    extractedJson: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    createdAt?: Date | string
  }

  export type OCRDataUncheckedCreateWithoutExpenseInput = {
    id?: string
    rawText?: string | null
    extractedJson: JsonNullValueInput | InputJsonValue
    confidence?: number | null
    createdAt?: Date | string
  }

  export type OCRDataCreateOrConnectWithoutExpenseInput = {
    where: OCRDataWhereUniqueInput
    create: XOR<OCRDataCreateWithoutExpenseInput, OCRDataUncheckedCreateWithoutExpenseInput>
  }

  export type CompanyUpsertWithoutExpensesInput = {
    update: XOR<CompanyUpdateWithoutExpensesInput, CompanyUncheckedUpdateWithoutExpensesInput>
    create: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutExpensesInput, CompanyUncheckedUpdateWithoutExpensesInput>
  }

  export type CompanyUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    approvalRules?: ApprovalRuleUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    approvalRules?: ApprovalRuleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpenseApprovalUpsertWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseApprovalWhereUniqueInput
    update: XOR<ExpenseApprovalUpdateWithoutExpenseInput, ExpenseApprovalUncheckedUpdateWithoutExpenseInput>
    create: XOR<ExpenseApprovalCreateWithoutExpenseInput, ExpenseApprovalUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseApprovalUpdateWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseApprovalWhereUniqueInput
    data: XOR<ExpenseApprovalUpdateWithoutExpenseInput, ExpenseApprovalUncheckedUpdateWithoutExpenseInput>
  }

  export type ExpenseApprovalUpdateManyWithWhereWithoutExpenseInput = {
    where: ExpenseApprovalScalarWhereInput
    data: XOR<ExpenseApprovalUpdateManyMutationInput, ExpenseApprovalUncheckedUpdateManyWithoutExpenseInput>
  }

  export type OCRDataUpsertWithoutExpenseInput = {
    update: XOR<OCRDataUpdateWithoutExpenseInput, OCRDataUncheckedUpdateWithoutExpenseInput>
    create: XOR<OCRDataCreateWithoutExpenseInput, OCRDataUncheckedCreateWithoutExpenseInput>
    where?: OCRDataWhereInput
  }

  export type OCRDataUpdateToOneWithWhereWithoutExpenseInput = {
    where?: OCRDataWhereInput
    data: XOR<OCRDataUpdateWithoutExpenseInput, OCRDataUncheckedUpdateWithoutExpenseInput>
  }

  export type OCRDataUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    extractedJson?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OCRDataUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: NullableStringFieldUpdateOperationsInput | string | null
    extractedJson?: JsonNullValueInput | InputJsonValue
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutApprovalRulesInput = {
    id?: string
    name: string
    country: string
    currencyCode: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutApprovalRulesInput = {
    id?: string
    name: string
    country: string
    currencyCode: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutApprovalRulesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutApprovalRulesInput, CompanyUncheckedCreateWithoutApprovalRulesInput>
  }

  export type UserCreateWithoutRulesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateWithoutRulesInput = {
    id?: string
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId?: string | null
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutApproverInput
    approvalSteps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutRulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRulesInput, UserUncheckedCreateWithoutRulesInput>
  }

  export type ApprovalStepCreateWithoutRuleInput = {
    id?: string
    stepOrder: number
    isRequired?: boolean
    approver: UserCreateNestedOneWithoutApprovalStepsInput
  }

  export type ApprovalStepUncheckedCreateWithoutRuleInput = {
    id?: string
    approverId: string
    stepOrder: number
    isRequired?: boolean
  }

  export type ApprovalStepCreateOrConnectWithoutRuleInput = {
    where: ApprovalStepWhereUniqueInput
    create: XOR<ApprovalStepCreateWithoutRuleInput, ApprovalStepUncheckedCreateWithoutRuleInput>
  }

  export type ApprovalStepCreateManyRuleInputEnvelope = {
    data: ApprovalStepCreateManyRuleInput | ApprovalStepCreateManyRuleInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutApprovalRulesInput = {
    update: XOR<CompanyUpdateWithoutApprovalRulesInput, CompanyUncheckedUpdateWithoutApprovalRulesInput>
    create: XOR<CompanyCreateWithoutApprovalRulesInput, CompanyUncheckedCreateWithoutApprovalRulesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutApprovalRulesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutApprovalRulesInput, CompanyUncheckedUpdateWithoutApprovalRulesInput>
  }

  export type CompanyUpdateWithoutApprovalRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutApprovalRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutRulesInput = {
    update: XOR<UserUpdateWithoutRulesInput, UserUncheckedUpdateWithoutRulesInput>
    create: XOR<UserCreateWithoutRulesInput, UserUncheckedCreateWithoutRulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRulesInput, UserUncheckedUpdateWithoutRulesInput>
  }

  export type UserUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type ApprovalStepUpsertWithWhereUniqueWithoutRuleInput = {
    where: ApprovalStepWhereUniqueInput
    update: XOR<ApprovalStepUpdateWithoutRuleInput, ApprovalStepUncheckedUpdateWithoutRuleInput>
    create: XOR<ApprovalStepCreateWithoutRuleInput, ApprovalStepUncheckedCreateWithoutRuleInput>
  }

  export type ApprovalStepUpdateWithWhereUniqueWithoutRuleInput = {
    where: ApprovalStepWhereUniqueInput
    data: XOR<ApprovalStepUpdateWithoutRuleInput, ApprovalStepUncheckedUpdateWithoutRuleInput>
  }

  export type ApprovalStepUpdateManyWithWhereWithoutRuleInput = {
    where: ApprovalStepScalarWhereInput
    data: XOR<ApprovalStepUpdateManyMutationInput, ApprovalStepUncheckedUpdateManyWithoutRuleInput>
  }

  export type ApprovalRuleCreateWithoutStepsInput = {
    id?: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutApprovalRulesInput
    user: UserCreateNestedOneWithoutRulesInput
  }

  export type ApprovalRuleUncheckedCreateWithoutStepsInput = {
    id?: string
    companyId: string
    userId: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
  }

  export type ApprovalRuleCreateOrConnectWithoutStepsInput = {
    where: ApprovalRuleWhereUniqueInput
    create: XOR<ApprovalRuleCreateWithoutStepsInput, ApprovalRuleUncheckedCreateWithoutStepsInput>
  }

  export type UserCreateWithoutApprovalStepsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovalStepsInput = {
    id?: string
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId?: string | null
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutEmployeeInput
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovalStepsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalStepsInput, UserUncheckedCreateWithoutApprovalStepsInput>
  }

  export type ApprovalRuleUpsertWithoutStepsInput = {
    update: XOR<ApprovalRuleUpdateWithoutStepsInput, ApprovalRuleUncheckedUpdateWithoutStepsInput>
    create: XOR<ApprovalRuleCreateWithoutStepsInput, ApprovalRuleUncheckedCreateWithoutStepsInput>
    where?: ApprovalRuleWhereInput
  }

  export type ApprovalRuleUpdateToOneWithWhereWithoutStepsInput = {
    where?: ApprovalRuleWhereInput
    data: XOR<ApprovalRuleUpdateWithoutStepsInput, ApprovalRuleUncheckedUpdateWithoutStepsInput>
  }

  export type ApprovalRuleUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutApprovalRulesNestedInput
    user?: UserUpdateOneRequiredWithoutRulesNestedInput
  }

  export type ApprovalRuleUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutApprovalStepsInput = {
    update: XOR<UserUpdateWithoutApprovalStepsInput, UserUncheckedUpdateWithoutApprovalStepsInput>
    create: XOR<UserCreateWithoutApprovalStepsInput, UserUncheckedCreateWithoutApprovalStepsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalStepsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalStepsInput, UserUncheckedUpdateWithoutApprovalStepsInput>
  }

  export type UserUpdateWithoutApprovalStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpenseCreateWithoutApprovalsInput = {
    id?: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutExpensesInput
    employee: UserCreateNestedOneWithoutExpensesInput
    ocrData?: OCRDataCreateNestedOneWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutApprovalsInput = {
    id?: string
    companyId: string
    employeeId: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    ocrData?: OCRDataUncheckedCreateNestedOneWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutApprovalsInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutApprovalsInput, ExpenseUncheckedCreateWithoutApprovalsInput>
  }

  export type UserCreateWithoutApprovalsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutEmployeeInput
    approvalSteps?: ApprovalStepCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovalsInput = {
    id?: string
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId?: string | null
    createdAt?: Date | string
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutEmployeeInput
    approvalSteps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
  }

  export type ExpenseUpsertWithoutApprovalsInput = {
    update: XOR<ExpenseUpdateWithoutApprovalsInput, ExpenseUncheckedUpdateWithoutApprovalsInput>
    create: XOR<ExpenseCreateWithoutApprovalsInput, ExpenseUncheckedCreateWithoutApprovalsInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutApprovalsInput, ExpenseUncheckedUpdateWithoutApprovalsInput>
  }

  export type ExpenseUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    employee?: UserUpdateOneRequiredWithoutExpensesNestedInput
    ocrData?: OCRDataUpdateOneWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ocrData?: OCRDataUncheckedUpdateOneWithoutExpenseNestedInput
  }

  export type UserUpsertWithoutApprovalsInput = {
    update: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutEmployeeNestedInput
    approvalSteps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutEmployeeNestedInput
    approvalSteps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpenseCreateWithoutOcrDataInput = {
    id?: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutExpensesInput
    employee: UserCreateNestedOneWithoutExpensesInput
    approvals?: ExpenseApprovalCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutOcrDataInput = {
    id?: string
    companyId: string
    employeeId: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
    approvals?: ExpenseApprovalUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutOcrDataInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutOcrDataInput, ExpenseUncheckedCreateWithoutOcrDataInput>
  }

  export type ExpenseUpsertWithoutOcrDataInput = {
    update: XOR<ExpenseUpdateWithoutOcrDataInput, ExpenseUncheckedUpdateWithoutOcrDataInput>
    create: XOR<ExpenseCreateWithoutOcrDataInput, ExpenseUncheckedCreateWithoutOcrDataInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutOcrDataInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutOcrDataInput, ExpenseUncheckedUpdateWithoutOcrDataInput>
  }

  export type ExpenseUpdateWithoutOcrDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    employee?: UserUpdateOneRequiredWithoutExpensesNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutOcrDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    managerId?: string | null
    createdAt?: Date | string
  }

  export type ExpenseCreateManyCompanyInput = {
    id?: string
    employeeId: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
  }

  export type ApprovalRuleCreateManyCompanyInput = {
    id?: string
    userId: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutExpensesNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutExpenseNestedInput
    ocrData?: OCRDataUpdateOneWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutExpenseNestedInput
    ocrData?: OCRDataUncheckedUpdateOneWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRuleUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRulesNestedInput
    steps?: ApprovalStepUpdateManyWithoutRuleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: ApprovalStepUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyManagerInput = {
    id?: string
    companyId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type ExpenseCreateManyEmployeeInput = {
    id?: string
    companyId: string
    amountOriginal: number
    currencyOriginal: string
    amountConverted: number
    category: string
    description: string
    remarks?: string | null
    date: Date | string
    receiptUrl?: string | null
    status?: $Enums.ExpenseStatus
    createdAt?: Date | string
  }

  export type ExpenseApprovalCreateManyApproverInput = {
    id?: string
    expenseId: string
    stepOrder: number
    status?: $Enums.ApprovalStatus
    comment?: string | null
    actedAt?: Date | string | null
  }

  export type ApprovalStepCreateManyApproverInput = {
    id?: string
    ruleId: string
    stepOrder: number
    isRequired?: boolean
  }

  export type ApprovalRuleCreateManyUserInput = {
    id?: string
    companyId: string
    ruleName: string
    description?: string | null
    isManagerApprover?: boolean
    isSequential?: boolean
    minApprovalPercentage?: number
    createdAt?: Date | string
  }

  export type UserUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutEmployeeNestedInput
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutApproverNestedInput
    approvalSteps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    rules?: ApprovalRuleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    approvals?: ExpenseApprovalUpdateManyWithoutExpenseNestedInput
    ocrData?: OCRDataUpdateOneWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: ExpenseApprovalUncheckedUpdateManyWithoutExpenseNestedInput
    ocrData?: OCRDataUncheckedUpdateOneWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    amountOriginal?: FloatFieldUpdateOperationsInput | number
    currencyOriginal?: StringFieldUpdateOperationsInput | string
    amountConverted?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseApprovalUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expense?: ExpenseUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ExpenseApprovalUncheckedUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseApprovalUncheckedUpdateManyWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalStepUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    rule?: ApprovalRuleUpdateOneRequiredWithoutStepsNestedInput
  }

  export type ApprovalStepUncheckedUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalStepUncheckedUpdateManyWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalRuleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutApprovalRulesNestedInput
    steps?: ApprovalStepUpdateManyWithoutRuleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: ApprovalStepUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    ruleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isManagerApprover?: BoolFieldUpdateOperationsInput | boolean
    isSequential?: BoolFieldUpdateOperationsInput | boolean
    minApprovalPercentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseApprovalCreateManyExpenseInput = {
    id?: string
    approverId: string
    stepOrder: number
    status?: $Enums.ApprovalStatus
    comment?: string | null
    actedAt?: Date | string | null
  }

  export type ExpenseApprovalUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approver?: UserUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ExpenseApprovalUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseApprovalUncheckedUpdateManyWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    actedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalStepCreateManyRuleInput = {
    id?: string
    approverId: string
    stepOrder: number
    isRequired?: boolean
  }

  export type ApprovalStepUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    approver?: UserUpdateOneRequiredWithoutApprovalStepsNestedInput
  }

  export type ApprovalStepUncheckedUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalStepUncheckedUpdateManyWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    approverId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
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