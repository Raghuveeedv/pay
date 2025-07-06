require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

// Middleware


app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'https://sprightly-gumdrop-c46663.netlify.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // ✅ Required to send cookies
}));


app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://raghuveermustimalla:12112002@cluster0.g7ti9vt.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("DB Connected Successfully");
}).catch((err) => {
  console.error("DB Connection Failed:", err);
});

// Routes
const routes = require("./Routes/routes");
app.use("/api/v1", routes);

// Start Server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
