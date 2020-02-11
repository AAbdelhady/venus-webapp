export interface Page<T> {
    content: T[];
    totalElements: number,
    totalPages: number,
    first: boolean,
    last: boolean,
    empty: boolean,
}