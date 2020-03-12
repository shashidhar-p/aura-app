import { Role } from './role';

export class User {
    id: number;
    email: string;
    usn: string;
    phone: string;
    uid: string;
    password: string;
    name: string;
    role: Role;
    token?: string;
}
