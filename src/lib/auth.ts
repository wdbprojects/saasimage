import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { polar, checkout, portal, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import { routes } from "@/config/routes";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter: adapter,
});

const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  server: "sandbox",
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    autoSignIn: false,
  },
  plugins: [
    nextCookies(),
    admin({ defaultRole: "USER", adminRoles: ["ADMIN"] }),
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "f13b7b8d-bb80-4ccd-9c94-5a730f2ca47c",
              slug: "small",
            },
            {
              productId: "0bd2a4d5-9538-4a09-bf79-47c996bdfa71",
              slug: "medium",
            },
            {
              productId: "70b44651-fdae-4087-b799-496bccbe0ade",
              slug: "large",
            },
          ],
          successUrl: routes.dashboard,
          authenticatedUsersOnly: true,
        }),
        webhooks({
          secret: process.env.POLAR_WEBHOOK_SECRET!,
          onOrderPaid: async (order) => {
            const externalCustomerId = order.data.customer.externalId;
            if (!externalCustomerId) {
              console.error("No external customer ID found");
              throw new Error("No external customer ID found");
            }
            const productId = order.data.productId;
            let creditsToAdd = 0;
            switch (productId) {
              case "f13b7b8d-bb80-4ccd-9c94-5a730f2ca47c":
                creditsToAdd = 50;
                break;
              case "0bd2a4d5-9538-4a09-bf79-47c996bdfa71":
                creditsToAdd = 200;
                break;
              case "70b44651-fdae-4087-b799-496bccbe0ade":
                creditsToAdd = 400;
                break;
              default:
                break;
            }
            await prisma.user.update({
              where: { id: externalCustomerId },
              data: {
                credits: { increment: creditsToAdd },
              },
            });
          },
        }),
      ],
    }),
  ],
});
