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
/*
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <head>
        <title>WHM IP Database</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #333; }
          ul { line-height: 1.8; }
          code { background: #f4f4f4; padding: 2px 6px; border-radius: 4px; }
        </style>
      </head>
      <body>
        <h1>Daftar WHM Servers</h1>
        <ul>
          ${whm_servers.map(ip => `<li>${ip}</li>`).join("")}
        </ul>
        <p>Gunakan query <code>?check=IP_ADDRESS</code> untuk cek ketersediaan IP.</p>
      </body>
    </html>
  `);
}
}
*/

try {
    const response = await fetch("https://expired-pi.vercel.app/");
    const html = await response.text();

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
