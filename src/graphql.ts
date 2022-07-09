
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class RegisterUserInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export class Delete {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export class JWT {
    jwt?: Nullable<string>;
}

export class User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export abstract class IQuery {
    abstract jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract register(registerUserInput?: Nullable<RegisterUserInput>): User | Promise<User>;
}

type Nullable<T> = T | null;
