import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
    database: new Pool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
    trustedOrigins: ["http://localhost:3000"],
    /*  advanced: {
         defaultCookieAttributes: {
             sameSite: "lax",
         },
         crossSubDomainCookies: {
             enabled: false,
         },
     }, */
    user: {
        deleteUser: {
            enabled: true
        }
    }
})