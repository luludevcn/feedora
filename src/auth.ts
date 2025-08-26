import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
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