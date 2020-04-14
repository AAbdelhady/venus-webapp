import {Role} from './user.model';
import {Speciality} from './speciality.model';

export interface Artist {
    id: number;
    firstName: string;
    lastName: string;
    role: Role;
    profilePictureUrl;
    category;
    specialityList: Speciality[];
}