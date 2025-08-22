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

  // Kalau tidak ada ?check → tampilkan HTML bawaan Vercel
  res.setHeader("Content-Type", "text/html");
  return res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>500: INTERNAL_SERVER_ERROR</title>
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    color: #111;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .container {
    max-width: 600px;
    padding: 2rem;
  }
  h1 {
    color: #e00;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    margin: 0.5rem 0;
  }
  code {
    background: #f4f4f4;
    padding: 2px 6px;
    border-radius: 4px;
  }
  .note {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #555;
  }
  a {
    color: #0070f3;
    text-decoration: none;
  }
</style>
</head>
<body>
  <div class="container">
    <h1>500: INTERNAL_SERVER_ERROR</h1>
    <p>Code: <code>FUNCTION_INVOCATION_FAILED</code></p>
    <p>ID: <code>sin1::m9ppk-1755880164492-c57973a0e774</code></p>
    <div class="note">
      <p>If you are a visitor, contact the website owner or try again later.</p>
      <p>If you are the owner, <a href="https://vercel.com/docs/error" target="_blank">learn how to fix the error</a> and check the logs.</p>
    </div>
  </div>
</body>
</html>
`);
}
