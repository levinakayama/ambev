import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';
import { User } from './entities/user.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createUserDto: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(user);
    await this.cacheManager.del('users');
    return user;
  }

  async findAll(): Promise<User[]> {
    const cachedUsers = await this.cacheManager.get<User[]>('users');
    if (cachedUsers) {
      return cachedUsers;
    }

    const users = await this.usersRepository.find();
    await this.cacheManager.set('users', users, 300); // Cache for 5 minutes
    return users;
  }

  async findOne(id: string): Promise<User | null> {
    const cachedUser = await this.cacheManager.get<User>(`user:${id}`);
    if (cachedUser) {
      return cachedUser;
    }

    const user = await this.usersRepository.findOne({ where: { id } });
    if (user) {
      await this.cacheManager.set(`user:${id}`, user, 300);
    }
    return user;
  }

  async update(id: string, updateUserDto: Partial<User>): Promise<User | null> {
    await this.usersRepository.update(id, updateUserDto);
    await this.cacheManager.del(`user:${id}`);
    await this.cacheManager.del('users');
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
    await this.cacheManager.del(`user:${id}`);
    await this.cacheManager.del('users');
  }
} 