import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/users.entitiy';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('api/users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get()
    getAll():Promise<User[]> {
        return this.userService.findAll()
    }
    // DTO 쓰는 이유: 들어오는 데이터 유효성 검사 용이, API버전관리(변경이나업데이트) 용이, 읽기 쓰기및 분리
    @Post()
    createUser(@Body() user:CreateUserDTO) {
        console.log(user)
        return this.userService.create(user)
    }
}
