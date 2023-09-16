import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/users.entitiy';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('api/users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get()
    getAll():Promise<User[]> {
        return this.userService.findAll()
    }

    @Get('/:id')
    getOne(@Param('id') userid: string): Promise<User> {
        return this.userService.findById(userid);
    }
    // DTO 쓰는 이유: 들어오는 데이터 유효성 검사 용이, API버전관리(변경이나업데이트) 용이, 읽기 쓰기및 분리
    @Post()
    createUser(@Body() user:CreateUserDTO) {
        console.log(user)
        return this.userService.create(user)
    }

    @Patch('/:id')
    updateUser(@Param('id') userid: string, @Body() updateData: UpdateUserDTO) {
        return this.userService.update(userid, updateData);
    }

    @Delete('/:id')
    deleteUser(@Param('id') userid: string) {
        return this.userService.delete(userid);
    }
    
}
