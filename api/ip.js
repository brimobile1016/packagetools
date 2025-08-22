// File: /pages/api/ip.js
export default async function handler(req, res) {
  const whm_servers = [
    "192.168.1.10",
    "188.166.209.198",
    "165.22.62.198",
    "103.150.93.12"
  ];

  const { check } = req.query;

  if (check) {
    if (whm_servers.includes(check)) {
      return res.status(200).json({ status: "found", ip: check });
    } else {
      return res.status(404).json({ status: "not_found", ip: check });
    }
  }

  try {
    // Ambil HTML asli
    const response = await fetch("https://expired-pi.vercel.app/");
    let html = await response.text();

    // Ganti semua request ke /config.json → /api/config
    html = html.replace(/\/config\.json/g, "/config");

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send(`
      <html>
        <body>
          <h1>⚠️ Gagal memuat konten</h1>
          <p>${error.message}</p>
        </body>
      </html>
    `);
  }
}
