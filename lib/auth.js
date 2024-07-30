import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch("http://localhost:2222/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: credentials.email }),
        });
        if (!res.ok) return null;
        const user = await res.json();
        if (user.password !== credentials.password) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      
      if (user) {
        token.accessToken = user.accessToken;
        token.role = user.role
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.role = token.role;
      session.accessToken = token.accessToken;
      return session;
    },
    authorized: async ({ auth, request }) => {
      const isAuthorized = !!auth?.accessToken;
      const isPrivateRoute = request.nextUrl.pathname.startsWith("/admin");
      if (!isAuthorized && isPrivateRoute) {
        const url = new URL(request.nextUrl);
        url.pathname = "/login";
        return Response.redirect(url);
      }
      return true;
    },
  },
});
