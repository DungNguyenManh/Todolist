import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async create(dto: CreateUserDto) {
    const exists = await this.userModel.findOne({ email: dto.email }).lean();
    if (exists) throw new ConflictException('Email already used');
    const passwordHash = await bcrypt.hash(dto.password, 10);
    const user = await this.userModel.create({ email: dto.email, passwordHash, role: 'user' });
    return { id: user.id, email: user.email, role: user.role };
  }

  async findAll() {
    return this.userModel.find({}, { email: 1 }).lean();
  }

  async findOne(id: number) {
    // controller đang truyền số; nếu bạn dùng Mongo, đổi controller nhận string
    const doc = await this.userModel.findById(id as unknown as string, { email: 1 }).lean();
    if (!doc) throw new NotFoundException('User not found');
    return doc;
  }

  async update(id: number, dto: UpdateUserDto) {
    const $set: Record<string, unknown> = {};
    if (dto.email !== undefined) $set.email = dto.email;
    if ((dto as any).password !== undefined) {
      $set.passwordHash = await bcrypt.hash((dto as any).password, 10);
    }
    const doc = await this.userModel
      .findByIdAndUpdate(id as unknown as string, { $set }, { new: true, projection: { email: 1 } })
      .lean();
    if (!doc) throw new NotFoundException('User not found');
    return doc;
  }

  async remove(id: number) {
    const doc = await this.userModel.findByIdAndDelete(id as unknown as string, { projection: { email: 1 } }).lean();
    if (!doc) throw new NotFoundException('User not found');
    return doc;
  }

  // Dùng cho Auth
  findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }


  async setRole(userId: string, role: 'user' | 'admin') {
    return this.userModel.findByIdAndUpdate(userId, { $set: { role } }, { new: true, projection: { email: 1, role: 1 } }).lean();
  }
}