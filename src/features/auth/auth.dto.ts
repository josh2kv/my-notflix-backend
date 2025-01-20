import { Plan, UserRole } from "@/types";
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";
import { BriefUser } from "../users/user.dto";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @IsNotEmpty()
  @IsString()
  tmdbApiKey: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole = UserRole.USER;

  @IsNotEmpty()
  @IsEnum(Plan)
  plan: Plan = Plan.STANDARD_WITH_ADS;
}

export class CheckIfEmailExistsDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class CheckIfTmdbApiKeyIsValidDto {
  @IsNotEmpty()
  @IsString()
  tmdbApiKey: string;
}

export class RefreshTokenDto {
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}

export type UserWithToken = {
  user: BriefUser;
  accessToken: string;
  refreshToken: string;
};
