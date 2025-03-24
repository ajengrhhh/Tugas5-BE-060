import express from "express";
import cors from "cors";
import NoteRoute from "./routes/NoteRoute.js";
import db from "./config/Database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

// Cek koneksi database saat server start
async function startServer() {
    try {
        await db.authenticate();
        console.log("✅ Database connected");

        // Sync database (pilih opsi sesuai kebutuhan)
        await db.sync({ alter: true }); // Bisa diganti force: true untuk dev

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        console.error(error.stack); // Untuk debugging lebih detail
    }
}

startServer();
