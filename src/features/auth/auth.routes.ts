import { Router } from "express";
import { AuthController } from "./auth.controller";
import {
  CheckIfEmailExistsDto,
  CheckIfTmdbApiKeyIsValidDto,
  LoginDto,
  RefreshTokenDto,
  RegisterDto,
} from "./auth.dto";
import { validateDto } from "@/shared/middlewares/validation.middleware";
import { ROUTE_SEGMENT } from "@/config/routes";

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */
const router = Router();
const authController = new AuthController();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginDto'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       $ref: '#/components/schemas/User'
 *                     tokens:
 *                       $ref: '#/components/schemas/AuthTokens'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router.post(
  ROUTE_SEGMENT.AUTH.LOGIN,
  validateDto(LoginDto),
  authController.login.bind(authController)
);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterDto'
 *     responses:
 *       201:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Email already exists
 */
router.post(
  ROUTE_SEGMENT.AUTH.REGISTER,
  validateDto(RegisterDto),
  authController.register.bind(authController)
);

/**
 * @swagger
 * /auth/check-email:
 *   get:
 *     summary: Check if email exists
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exists:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Invalid input
 */
router.get(
  ROUTE_SEGMENT.AUTH.CHECK_EMAIL + ROUTE_SEGMENT.EMAIL_PARAM,
  validateDto(CheckIfEmailExistsDto, "params"),
  authController.checkIfEmailExists.bind(authController)
);

/**
 * @swagger
 * /auth/check-tmdb-api-key:
 *   get:
 *     summary: Check if TMDB API key is valid
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: tmdbApiKey
 *         required: true
 *         schema:
 *           type: string
 */
router.get(
  ROUTE_SEGMENT.AUTH.CHECK_TMDB_API_KEY + ROUTE_SEGMENT.TMDB_API_KEY_PARAM,
  validateDto(CheckIfTmdbApiKeyIsValidDto, "params"),
  authController.checkIfTmdbApiKeyIsValid.bind(authController)
);

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token refresh successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: Invalid refresh token
 */
router.post(
  ROUTE_SEGMENT.AUTH.REFRESH_TOKEN,
  validateDto(RefreshTokenDto),
  authController.refreshToken.bind(authController)
);

export default router;
