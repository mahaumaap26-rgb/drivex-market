import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // TEMP LOGIN (we will replace with DB later)
        if (
          credentials.email === "admin@drivex.com" &&
          credentials.password === "123456"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@drivex.com",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: "drivex-secret-key",
};