import { RefreshToken } from "@/features/auth/refresh-token.model";
import { User } from "@features/users/user.model";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.DB_URI,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: process.env.NODE_ENV === "development",
  logging: process.env.NODE_ENV === "development",
  // dropSchema: process.env.NODE_ENV === "development",
  entities: [User, RefreshToken],
  subscribers: [],
  migrations: [],
});

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("✅ Database connection has been established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    throw error;
  }
};
