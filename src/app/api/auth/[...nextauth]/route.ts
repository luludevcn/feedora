import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: 'openid email profile',
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
            authorization: {
                params: {
                    scope: 'read:user user:email'
                }
            },
            httpOptions: {
                agent: new (require('https')).Agent({ rejectUnauthorized: false })
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider) {
                user.provider = account.provider
            }
            return true
        },
        async jwt({ token, account, user }) {
            if (user) {
                token.provider = user.provider
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.provider = token.provider
            }
            return session
        },
        async redirect({ url, baseUrl }) {
            return '/admin/dashboard'
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }