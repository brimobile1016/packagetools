// File: /pages/api/ip.js
export default function handler(req, res) {
  const whm_servers = [
    "192.168.1.10",
    "188.166.209.198",
    "165.22.62.198",
    "103.150.93.12"
  ];

  const { check } = req.query;

  if (check) {
    if (whm_servers.includes(check)) {
      return res.status(200).json({
        status: "found",
        ip: check
      });
    } else {
      return res.status(404).json({
        status: "not_found",
        ip: check
      });
    }
  }

  // Kalau tidak ada ?check → tampilkan HTML
  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>404: NOT_FOUND</title>
        <style>
          body { font-family: sans-serif; text-align: center; padding: 50px; }
          h1 { font-size: 2em; color: #ff0080; }
          p { color: #333; }
        </style>
      </head>
      <body>
        <h1>⚠️ Website tidak ditemukan</h1>
        <p>Domain: expired-pi.vercel.app</p>
        <p>Silakan hubungi admin untuk registrasi.</p>
      </body>
    </html>
  `);
}
