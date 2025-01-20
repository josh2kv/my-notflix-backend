import swaggerJsdoc from "swagger-jsdoc";
import { API_PREFIX, API_VERSION } from "./routes";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Notflix API",
      version: "1.0.0",
      description: "API documentation for My Notflix Backend",
    },
    servers: [
      {
        url: `https://my-notflix-backend.onrender.com${API_PREFIX}${API_VERSION}`,
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      responses: {
        UnauthorizedError: {
          description: "Access token is missing or invalid",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        NotFoundError: {
          description: "The requested resource was not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/config/swagger-schemas.ts", "./src/features/**/*.routes.ts"],
};

export const specs = swaggerJsdoc(options);
