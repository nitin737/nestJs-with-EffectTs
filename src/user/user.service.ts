import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      await this.userRepository.save(createUserDto);
    } catch (e) {
      console.log(e);
    }
  }

  findAll() {
    const users = this.userRepository.find();
    if (users === undefined) throw Error('No users found');
    return users;
  }

  findOne(id: number) {
    const user = this.userRepository.findOneBy({ id });
    if (user === undefined) throw Error('User not found');
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
