import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { LoginDto, RefreshTokenDto, RegisterDto } from "./auth.dto";
import { ApiResponse } from "@/shared/utils/api-response";
import { UserTransformer } from "../users/user.transformer";

export class AuthController {
  private authService = new AuthService();

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password }: LoginDto = req.body;
      const userWithToken = await this.authService.login(email, password);

      res.json(
        ApiResponse.success({
          ...userWithToken,
          user: UserTransformer.toBriefUser(userWithToken.user),
        })
      );
    } catch (error) {
      next(error);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const registerDto: RegisterDto = req.body;
      const userWithToken = await this.authService.register(registerDto);

      res.status(201).json(
        ApiResponse.success({
          ...userWithToken,
          user: UserTransformer.toBriefUser(userWithToken.user),
        })
      );
    } catch (error) {
      next(error);
    }
  }

  async checkIfEmailExists(req: Request, res: Response, next: NextFunction) {
    try {
      const email: string = req.params.email;
      const exists = await this.authService.checkIfEmailExists(email);
      res.json(ApiResponse.success(exists));
    } catch (error) {
      next(error);
    }
  }

  async checkIfTmdbApiKeyIsValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const tmdbApiKey: string = req.params.tmdbApiKey;
      const isValid = await this.authService.checkIfTmdbApiKeyIsValid(
        tmdbApiKey
      );
      res.json(ApiResponse.success(isValid));
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken }: RefreshTokenDto = req.body;
      const userWithToken = await this.authService.refreshToken(refreshToken);

      res.json(
        ApiResponse.success({
          ...userWithToken,
          user: UserTransformer.toBriefUser(userWithToken.user),
        })
      );
    } catch (error) {
      next(error);
    }
  }
}
