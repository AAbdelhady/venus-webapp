export interface User {
    id: number,
    firstName: string,
    lastName: string,
    role: Role
}

export enum Role {
    ARTIST = 'ARTIST',
    CUSTOMER = 'CUSTOMER',
    UNSPECIFIED = 'UNSPECIFIED'
}