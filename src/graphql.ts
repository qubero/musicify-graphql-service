
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateGenreInput {
    name: string;
    description: string;
    country: string;
    year: number;
}

export class UpdateGenreInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class RegisterUserInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export class Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export abstract class IQuery {
    abstract genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;

    abstract genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createGenre(createGenreInput?: Nullable<CreateGenreInput>): Genre | Promise<Genre>;

    abstract updateGenre(updateGenreInput?: Nullable<UpdateGenreInput>): Genre | Promise<Genre>;

    abstract deleteGenre(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;

    abstract register(registerUserInput?: Nullable<RegisterUserInput>): User | Promise<User>;
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

type Nullable<T> = T | null;
