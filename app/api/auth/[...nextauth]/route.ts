import { fetchUser } from "@/app/lib/data";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

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
        id: { label: "id", type: "text" },
      },
      authorize: async (credentials) => {
        try {
          if (credentials) {
            const { email, contraseña } = credentials;
            const data = await fetchUser(email as string);
            if (data) {
              const dataUser = data[0];
              if (bcrypt.compareSync(contraseña, dataUser.password))
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
