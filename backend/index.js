import "dotenv/config";
import express from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "./auth.ts";
import { fromNodeHeaders } from "better-auth/node";


const app = express();
const port = 3005;
// Configure CORS middleware
app.use(
    cors({
        origin: "http://localhost:3000", // Replace with your frontend's origin
        methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
        credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    })
);
app.all("/api/auth/*splat", toNodeHandler(auth));
// Mount express json middleware after Better Auth handler
// or only apply it to routes that don't interact with Better Auth
app.use(express.json());



app.get("/api/me", async (req, res) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    return res.json(session);
}
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

