export type StringType = string;
export type Integer = number;
export type DateString = string;
export type ValueOf<T extends object> = T[keyof T];
export type Pair<T> = [string, T];
export type Many<T> = T | T[];
export type ObjectRecord<T extends object, K extends string = 'id'> = Record<T[K], T>;
