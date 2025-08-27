import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Github],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return '/admin/dashboard'
        },

        async jwt({ token, user }) {
            // console.log(token, user)
            return token;
        },

        async session({ session, token }) {
            // console.log(token, session)
            return session;
        }
    },
})