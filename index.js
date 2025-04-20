import express from "express";
import cors from "cors";
import NoteRoute from "./routes/NoteRoute.js";
import db from "./config/Database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

// Tambahkan endpoint root
app.get("/api/notes", (req, res) => {
  const notes = [
    { id: 1, title: "Note 1", content: "Isi note 1" },
    { id: 2, title: "Note 2", content: "Isi note 2" },
  ];
  res.json(notes); // ini akan kirim array
});

// Cek koneksi database saat server start
async function startServer() {
    try {
        await db.authenticate();
        console.log("✅ Database connected");

        // Sync database (pilih opsi sesuai kebutuhan)
        await db.sync({ alter: true }); // Bisa diganti force: true untuk dev

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        console.error(error.stack); // Untuk debugging lebih detail
    }
}

startServer();
