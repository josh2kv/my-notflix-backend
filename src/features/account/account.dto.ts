import { Plan } from "@/types";
import { UserRole } from "@/types";
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateProfileDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsOptional()
  username?: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  tmdbApiKey?: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @IsEnum(Plan)
  @IsOptional()
  plan?: Plan;
}
