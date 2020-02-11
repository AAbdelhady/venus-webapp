import {Role} from './user.model';

export interface Artist {
    id: number,
    firstName: string,
    lastName: string,
    role: Role,
    profilePictureUrl: string
}