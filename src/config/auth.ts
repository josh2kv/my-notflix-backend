import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { User } from "@/features/users/user.model";
import { AppDataSource } from "./db";
import { JwtPayload } from "jsonwebtoken";
import { ObjectId } from "mongodb";

export const JWT_SECRET = process.env.JWT_SECRET || "1234567890";
export const JWT_EXPIRES_IN = "24h";
export const JWT_REFRESH_EXPIRES_IN = 60 * 60 * 24 * 7 * 1000; // 7 days

export const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
  },
  async (payload: JwtPayload, done) => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({
        where: { _id: new ObjectId(payload.sub) },
      });

      if (!user) return done(null, false);

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
);
