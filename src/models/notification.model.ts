import {User} from './user.model';

export interface Notification {
    id: number;
    receiver: User;
    sender: User;
    title: string;
    body: string;
    type: string;
}