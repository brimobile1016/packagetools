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
<title>Vercel Error</title>
<style>
    :root {
        --color-foreground: #111;
        --color-background: #fff;
        --color-code: #f4f4f4;
        --color-muted: #555;
        --color-link: #0070f3;
        --color-error: #e00;
        --color-ok: #008000;
        --color-status-error: #e00;
        --color-status-ok: #008000;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        color: var(--color-foreground);
        background: var(--color-background);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: left;
    }
    .container {
        max-width: 600px;
        padding: 2rem;
    }
    .status-item {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
    }
    .status-item::before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 1.5em;
        margin-right: 0.75rem;
    }
    .status-error::before {
        background-color: var(--color-status-error);
    }
    .status-ok::before {
        background-color: var(--color-status-ok);
    }
    h1 {
        font-weight: 500;
        font-size: 1.25rem;
    }
    .error-box {
        background: #f8f8f8;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        border: 1px solid #eaeaea;
    }
    .error-box p {
        margin: 0.25rem 0;
    }
    .error-code {
        font-weight: bold;
        color: var(--color-error);
        font-size: 0.875rem;
    }
    code {
        font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', 'Menlo', 'Consolas', monospace;
        background: #f4f4f4;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.875em;
    }
    .note {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: var(--color-muted);
        border-top: 1px solid #eaeaea;
        padding-top: 1.5rem;
    }
    .note p {
        margin: 0.5rem 0;
    }
    a {
        color: var(--color-link);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
</head>
<body>
    <div class="container">
        <div class="status-item status-error">
            This Serverless Function has crashed.
        </div>
        <div class="status-item status-ok">
            Your connection is working correctly.
        </div>
        <div class="status-item status-ok">
            Vercel is working correctly.
        </div>

        <div class="error-box">
            <p class="error-code">500: INTERNAL_SERVER_ERROR</p>
            <p>Code: <code>FUNCTION_INVOCATION_FAILED</code></p>
            <p>ID: <code>sin1::m9ppk-1755880164492-c57973a0e774</code></p>
        </div>

        <div class="note">
            <p>If you are a visitor, contact the website owner or try again later.</p>
            <p>If you are the owner, <a href="https://vercel.com/docs/error" target="_blank">learn how to fix the error</a> and <a href="https://vercel.com/dashboard/logs" target="_blank">check the logs.</a></p>
        </div>
    </div>
</body>
</html>
`);
}
