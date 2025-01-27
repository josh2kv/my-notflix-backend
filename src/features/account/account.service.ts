import { AppDataSource } from "@/config/db";
import { User } from "@/features/users/user.model";
import { ObjectId } from "mongodb";
import { UpdateProfileDto } from "./account.dto";
import { NotFoundError } from "@/shared/errors";

export class AccountService {
  private userRepository = AppDataSource.getRepository(User);

  async updateProfile(id: string, dto: UpdateProfileDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
    if (!user) throw new NotFoundError("User not found");
    console.log(dto);
    this.updateDefinedProperties(user, dto);
    return this.userRepository.save(user);
  }

  private updateDefinedProperties<T>(target: T, source: Partial<T>): void {
    Object.keys(source).forEach((key) => {
      const typedKey = key as keyof T;
      if (source[typedKey] !== undefined && source[typedKey] !== null) {
        target[typedKey] = source[typedKey]!;
      }
    });
  }
}
