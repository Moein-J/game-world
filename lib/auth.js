import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        phone: {},
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch("http://localhost:2222/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            phone: credentials.phone,
          }),
        });

        if (!res.ok) return null;
        const user = await res.json();
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!passwordMatch) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.accessToken = user.accessToken;
        token.role = user.role;
        token.phone = user.phone;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.role = token.role;
      session.user.phone = token.phone;
      session.user.accessToken = token.accessToken;
      return session;
    },
    authorized: async ({ auth, request }) => {
      const isAuthorized = !!auth?.user.accessToken;
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
