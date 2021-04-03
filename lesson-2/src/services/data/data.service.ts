import { HttpException, Injectable } from '@nestjs/common';
import { UserDto } from '../../dto/user.dto';
import * as uuid from 'uuid';
import {
    find as _find,
    filter as _filter,
    findIndex as _findIndex,
    cloneDeep as _cloneDeep,
    includes as _includes,
    slice as _slice,
    sortBy as _sortBy,
} from 'lodash';

const BAD_USER = new HttpException({ error: `Invalid user id` }, 400);
export interface ISuggestionParams {
    login: string;
    limit: number;
}

@Injectable()
export class DataService {

    private _users: UserDto[] = [];

    public createUser(user: UserDto): string {
        this._users = [ ...this._users, user ];
        return `New user with login ${user.login} was successfully added with id ${user.id}`;
    }

    public getAllUsers(): UserDto[] {
        return _filter(this._users, user => !user.isDeleted)
    }

    public getTotalUsers(): UserDto[] {
        return this._users;
    }

    public getAutoSuggestUser(login: string, limit: number): UserDto[] {
        return _sortBy(_slice(_filter(this._users, user => _includes(user.login, login)),0, limit), 'login');
    }

    public getUserById(id: string): UserDto {
        const responseUser = _find(this._users, user => user.id === id);
        if (!!responseUser && !responseUser.isDeleted) {
            return responseUser;
        } else {
            throw BAD_USER
        }
    }

    public updateUserById(updUser: UserDto): UserDto {
        const idx = _findIndex(this._users, user => user.id === updUser.id);
        if (idx >= 0 && !this._users[idx].isDeleted) {
            this._users[idx] = updUser;
            return this._users[idx];
        } else {
            throw BAD_USER
        }

    }

    public markAsDeletedById(id: string): string {
        const idx = _findIndex(this._users, user => user.id === id);
        if (idx >= 0 && !this._users[idx].isDeleted) {
            this._users[idx].isDeleted = true;
            return `User with id ${id} have deleted`;
        } else {
            throw BAD_USER
        }

    }

    public transformCreateUser(user: UserDto): UserDto {
        const tmpUser = _cloneDeep(user);
        tmpUser.id = uuid.v1();
        tmpUser.isDeleted = false;
        return tmpUser;
    }
}
