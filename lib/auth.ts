import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "./db";
import { compare } from "bcrypt";


export const authOption: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/sign-in"
    },
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "Email", type: "email", placeholder: "user@mail.com" },
            password: { label: "Palavra-Passe", type: "password" }
          },
          async authorize(credentials) {
            // Add logic here to look up the user from the credentials supplied
            
            if(!credentials?.email || !credentials?.password) {
                return null;
            }

            const user = await db.user.findUnique({
                where: {
                    email: credentials.email
                }
            })
      
           if (!user) {
            return null
           } 

           const passwordMach = await compare(credentials.password, user.password);

           if(!passwordMach) {
            return null;
           }

           return {
            id:  `${user.id}`,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
           }

          }
        })
      ]
}