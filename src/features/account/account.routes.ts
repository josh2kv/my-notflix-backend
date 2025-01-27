import { validateDto } from "@/shared/middlewares/validation.middleware";
import { Router } from "express";
import { AccountController } from "./account.controller";
import { ROUTE_SEGMENT } from "@/config/routes";
import { UpdateProfileDto } from "./account.dto";

const router = Router();
const accountController = new AccountController();

router.patch(
  ROUTE_SEGMENT.ACCOUNT.PROFILE,
  validateDto(UpdateProfileDto),
  accountController.updateProfile.bind(accountController)
);

export default router;
