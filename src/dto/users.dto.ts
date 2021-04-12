export class UserDto {
    readonly username: String;
    readonly password: String;
    readonly firstName: String;
    readonly lastName: String;
    readonly birthDate: Date;
}

export class EditUserDto {
    readonly id: String;
    readonly username: String;
    readonly password: String;
    readonly firstName: String;
    readonly lastName: String;
    readonly birthDate: Date;
}

