import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
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
        console.log(user);
        return user;
      },
    }),
  ],
});
