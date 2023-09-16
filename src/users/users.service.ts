import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entitiy';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  options: any;
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ) {}
    
    findAll(): Promise<User[]> {
      return this.usersRepository.find();
    }
    
    findById(userid: string): Promise<User> {
      return this.usersRepository.findOne({ where: {userid}});
    }
    
    async create(user:CreateUserDTO) {
      await this.usersRepository.save(user)
    }
    async update(userid: string, updateData: UpdateUserDTO) {
      return await this.usersRepository.update(userid, updateData);
    }
    async delete(userid: string) {
      return await this.usersRepository.delete(userid);
    }
  }
