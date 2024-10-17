import { fetchUser } from "@/app/lib/data";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        contraseña: {
          label: "contraseña",
          type: "password",
          placeholder: "******",
        },
      },
      authorize: async (credentials) => {
        try {
          if (credentials) {
            const { email } = credentials;
            const data = await fetchUser(email as string);
            if (data) {
              const dataUser = data[0];

              return dataUser;
            }
            return null;
          }

          return null;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_URL,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
