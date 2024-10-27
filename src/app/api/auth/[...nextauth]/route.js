import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email here',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
       if(email){
         const currentUser = users.find(user => user.email === email)
         if (currentUser.password === password) {
           console.log(currentUser)
           
           return currentUser;
         }
         return null;
       }
      },
    }),
  ],
});

const users = [
  {
    id: 1,
    name: "Mehedi",
    email: "m@gmail.com",
    password: "password"
  },
  {
    id: 2,
    name: "Arefin",
    email: "a@gmail.com",
    password: "password"
  },
  {
    id: 3,
    name: "Shashwoto",
    email: "s@gmail.com",
    password: "password"
  }
]


export { handler as GET, handler as POST }
