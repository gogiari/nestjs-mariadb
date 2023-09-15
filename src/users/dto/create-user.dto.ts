import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator'

export class CreateUserDTO {
    @IsString()
    userid: string;
    
    @IsString()
    password: string;

    @IsString()
    username: string;

    @IsEmail()
    @IsOptional() // IsOptional은  유효성 검사를 뛰어넘을수 있음
    email: string;
}