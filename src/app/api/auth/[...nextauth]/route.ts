import NextAuth from 'next-auth'
import User from "../../../../../models/users";
import connectToDatabase from "../../../../../lib/mongodb";
import bcrypt from "bcryptjs";
import CredentialsProvider  from "next-auth/providers/credentials";
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [

        Github({
        clientId:process.env.GITHUB_ID as string,
        clientSecret:process.env.GITHUB_SECRET as string,

        }),
        Google({
            clientId:process.env.GOOGLE_ID as string,
            clientSecret:process.env.GOOGLE_SECRET as string,
            authorization: {
                params: {
                  prompt: "select_account",
                }
            }
            }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                try {
                    await connectToDatabase();
                    const user = await User.findOne({ email: credentials?.email });
                    if (!user) {
                        throw new Error("User not found");

                    }
                    const isValidPassword = await bcrypt.compare(
                        credentials?.password ?? " ", user.password as string
                    );
                    if (!isValidPassword) {
                        throw new Error("Invalid password");
                    }
                    return user;
                }
                catch {
                    return null;
                }
            }
        })
    ],
callbacks:{
    async redirect({ url, baseUrl }) {
        // Redirect user to a custom page after login
        return baseUrl + "/net"; // Change "/dashboard" to your desired page
    },//ahsan for testing 
    async jwt({token,user}) {
        if (user) {
            token.id=user.id;
            token.email=user.email;
        }
        return token;
    },
    async session({session,token}) {
        if(token){
            session.user={
                email:token.email,
                name:token.name,
                image:token.picture,
            };
        };
        return session;
    }
},
pages:{
    signIn: "/sign-in",
},
secret:process.env.NEXTAUTH_SECRET
});
export { handler as GET, handler as POST }


