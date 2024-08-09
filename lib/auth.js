import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        phone: {},
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch(
          process.env.NODE_ENV === "production"
            ? `${process.env.BACKEND_URL}/users/login`
            : "http://localhost:3000/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              phone: credentials.phone,
            }),
          }
        );

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
    // signIn: async ({ user }) => {
    //   console.log(5);
    //   console.log(user);
    //   if (user.role === "ADMIN") {
    //     console.log("NIGAAAAAAA");
    //     return "/admin/dashboard";
    //   }
    //   return true;
    // },
    jwt: async ({ user, token, account }) => {
      switch (account?.provider) {
        case "credentials":
          if (user) {
            token.accessToken = user.accessToken;
            token.role = user.role;
            token.phone = user.phone;
          }
          break;
        case "google":
          token.accessToken = account.access_token;
          token.role = "USER";
          break;
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
      if (
        isAuthorized &&
        (request.nextUrl.pathname.startsWith("/login") ||
          request.nextUrl.pathname.startsWith("/register"))
      ) {
        const url = new URL(request.nextUrl);
        url.pathname = "/profile";
        return Response.redirect(url);
      }
      // if (
      //   auth?.user.role === "USER" &&
      //   request.nextUrl.pathname.startsWith("/admin")
      // ) {
      //   const url = new URL(request.nextUrl);
      //   url.pathname = "/profile";
      //   return NextResponse.redirect(url);
      // }
      return true;
    },
  },
});
