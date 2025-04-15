import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    private cacheManager;
    constructor(usersRepository: Repository<User>, cacheManager: Cache);
    create(createUserDto: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    update(id: string, updateUserDto: Partial<User>): Promise<User | null>;
    remove(id: string): Promise<void>;
}
