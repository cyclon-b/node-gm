import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { DataService, ISuggestionParams } from "../../services/data/data.service";
import { UserDto } from "../../dto/user.dto";

@Controller('api/user')
export class UserController {

    constructor(private data: DataService) {
    }

    @Get()
    public findUsers(@Query() query): UserDto[] {
        if ( Object.keys(query).length ) {
            console.dir(query);
            return this.data.getAutoSuggestUser(query.login, query.limit);
        } else {
            return this.data.getAllUsers();
        }

    }

    @Get(':id')
    public findUser(@Param() params): UserDto {
        return this.data.getUserById(params.id);
    }

    @Post()
    public addUser(@Body() newUser: UserDto): string {
        return this.data.createUser(newUser);
    }

    @Delete(':id')
    public deleteUser(@Param() params): string {
        return this.data.markAsDeletedById(params.id);
    }

    @Patch()
    public updateUser(@Body() updUser: UserDto): UserDto {
        return this.data.updateUserById(updUser);
    }

}
