const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.post("/api/mm", upload.single("image"), async (req, res) => {
  try {
    const prompt = req.body.prompt;
    if (!prompt || !req.file) {
      return res.status(400).json({ error: "Missing prompt or image" });
    }

    const imageBase64 = req.file.buffer.toString("base64");

    const ollamaResp = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llava",
        prompt,
        images: [imageBase64],
        stream: false
      })
    });

    const data = await ollamaResp.json();
    res.json({ response: data.response });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
