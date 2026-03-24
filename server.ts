import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple in-memory storage for payments
// In a real app, use a database like Firestore
const payments = new Map<string, { status: string; createdAt: number }>();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Initialize a payment
  app.post("/api/payment/init", (req, res) => {
    const paymentId = Math.random().toString(36).substring(2, 15);
    payments.set(paymentId, { status: "pending", createdAt: Date.now() });
    console.log(`[Payment] Initialized: ${paymentId}`);
    res.json({ paymentId });
  });

  // Check payment status
  app.get("/api/payment/status/:id", (req, res) => {
    const { id } = req.params;
    const payment = payments.get(id);
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }
    res.json({ status: payment.status });
  });

  // Webhook endpoint for Banco XP (Simulated)
  // This could be called by an automation tool or a simulated bank
  app.post("/api/webhook/xp", (req, res) => {
    const { paymentId, secret } = req.body;
    
    // In a real app, verify the secret or signature
    if (secret !== "XP_SECRET_TOKEN") {
      // return res.status(401).json({ error: "Unauthorized" });
    }

    const payment = payments.get(paymentId);
    if (payment) {
      payment.status = "confirmed";
      console.log(`[Payment] Confirmed via XP Webhook: ${paymentId}`);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: "Payment not found" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
