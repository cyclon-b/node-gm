import { IsAlphanumeric, IsNotEmpty, Matches, Max, Min } from "class-validator";


const PASSWORD_PATTERN = /(?=.*\d)(?=.*[a-z])/;

enum MinMaxAge {
    Min = 4,
    Max = 130,
}

export class UserDto {
    id: string;
    @IsNotEmpty({
        message: 'Login is required',
    })
    login: string;
    @IsNotEmpty({
        message: 'Password is required',
    })
    @Matches(PASSWORD_PATTERN, {
        message: 'Password must contains letters and numbers'
    })
    password: string;
    @IsNotEmpty({
        message: 'Age is required',
    })
    @Min(MinMaxAge.Min, {
        message: 'Age should be more than 4',
    })
    @Max(MinMaxAge.Max, {
        message: 'Age should be less than 130'
    })
    age: number;
    isDeleted: boolean;
}