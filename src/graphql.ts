
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Temp {
    temp?: Nullable<string>;
}

export abstract class IQuery {
    abstract doTemp(): Nullable<Temp> | Promise<Nullable<Temp>>;
}

type Nullable<T> = T | null;
