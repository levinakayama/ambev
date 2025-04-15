"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const cache_manager_1 = require("@nestjs/cache-manager");
let UsersService = class UsersService {
    constructor(usersRepository, cacheManager) {
        this.usersRepository = usersRepository;
        this.cacheManager = cacheManager;
    }
    async create(createUserDto) {
        const user = this.usersRepository.create(createUserDto);
        await this.usersRepository.save(user);
        await this.cacheManager.del('users');
        return user;
    }
    async findAll() {
        const cachedUsers = await this.cacheManager.get('users');
        if (cachedUsers) {
            return cachedUsers;
        }
        const users = await this.usersRepository.find();
        await this.cacheManager.set('users', users, 300);
        return users;
    }
    async findOne(id) {
        const cachedUser = await this.cacheManager.get(`user:${id}`);
        if (cachedUser) {
            return cachedUser;
        }
        const user = await this.usersRepository.findOne({ where: { id } });
        if (user) {
            await this.cacheManager.set(`user:${id}`, user, 300);
        }
        return user;
    }
    async update(id, updateUserDto) {
        await this.usersRepository.update(id, updateUserDto);
        await this.cacheManager.del(`user:${id}`);
        await this.cacheManager.del('users');
        return this.findOne(id);
    }
    async remove(id) {
        await this.usersRepository.delete(id);
        await this.cacheManager.del(`user:${id}`);
        await this.cacheManager.del('users');
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], UsersService);
//# sourceMappingURL=users.service.js.map