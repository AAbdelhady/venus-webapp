import {Role} from './user.model';
import {Speciality} from './speciality.model';

export class Artist {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    role: Role = Role.UNSPECIFIED;
    profilePictureUrl: string = '';
    category: string = '';
    specialityList: Speciality[] = []
}