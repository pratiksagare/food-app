import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub; // Add GitHub user ID to session
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export const GET = handler;
export const POST = handler;
