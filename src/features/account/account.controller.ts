import { Request, Response, NextFunction } from "express";
import { AccountService } from "./account.service";
import { UpdateProfileDto } from "./account.dto";
import { UnauthorizedError } from "@/shared/errors";
import { ApiResponse } from "@/shared/utils/api-response";
import { UserTransformer } from "../users/user.transformer";

export class AccountController {
  private accountService = new AccountService();

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const dto: UpdateProfileDto = req.body;
      if (!req.user) throw new UnauthorizedError();

      const user = await this.accountService.updateProfile(
        req.user._id.toString(),
        dto
      );

      res
        .status(200)
        .json(ApiResponse.success(UserTransformer.toBriefUser(user)));
    } catch (error) {
      next(error);
    }
  }
}
