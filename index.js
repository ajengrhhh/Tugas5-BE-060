import express from "express";
import cors from "cors";
import NoteRoute from "./routes/NoteRoute.js";
import db from "./config/Database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// Cek koneksi database saat server start
async function startServer() {
    try {
        await db.authenticate();
        console.log("✅ Database connected");

        // Sync database
        await db.sync({ alter: true }); // Ubah ke force: true jika ingin reset tabel

        const PORT = process.env.PORT || 8080; // default ke 3000
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        console.error(error.stack);
    }
}

startServer();
