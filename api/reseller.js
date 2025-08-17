// File: /pages/api/reseller.js

export default function handler(req, res) {
  const packages = [
    // --- cPanel Packages ---
    { "api.version": 1, name: "cPanel Mini", quota: 2048, bwlimit: 20480, maxftp: 10, maxpop: 50, maxsql: 20 },
    { "api.version": 1, name: "cPanel Medium", quota: 5120, bwlimit: 51200, maxftp: 10, maxpop: 50, maxsql: 20 },
    { "api.version": 1, name: "cPanel Extra", quota: 10240, bwlimit: 102400, maxftp: 10, maxpop: 50, maxsql: 20 },
    { "api.version": 1, name: "cPanel Super", quota: 20480, bwlimit: 204800, maxftp: 10, maxpop: 50, maxsql: 20 },

    // --- WHM Packages ---
    { "api.version": 1, name: "WHM Mini", quota: 20480, bwlimit: 204800, maxftp: "unlimited", maxpop: "unlimited", maxsql: "unlimited" },
    { "api.version": 1, name: "WHM Medium", quota: 51200, bwlimit: 512000, maxftp: "unlimited", maxpop: "unlimited", maxsql: "unlimited" },
    { "api.version": 1, name: "WHM Extra", quota: 102400, bwlimit: 1048576, maxftp: "unlimited", maxpop: "unlimited", maxsql: "unlimited" },
    { "api.version": 1, name: "WHM Super", quota: 204800, bwlimit: 2097152, maxftp: "unlimited", maxpop: "unlimited", maxsql: "unlimited" },

    // --- MWHM Packages ---
    { "api.version": 1, name: "MWHM Mini", quota: 204800, bwlimit: 2097152, maxftp: "unlimited", maxpop: "unlimited", maxsql: "unlimited" },
    { "api.version": 1, name: "MWHM Medium", quota: 512000, bwlimit: 5242880, maxftp: "unlimited", maxpop: "unlimited", maxsql: "unlimited" },
    { "api.version": 1, name: "MWHM Extra", quota: 1024000, bwlimit: 10485760, maxftp: "unlimited", maxpop: "unlimited", maxsql: "unlimited" },
    { "api.version": 1, name: "MWHM Super", quota: 2048000, bwlimit: 20971520, maxftp: "unlimited", maxpop: "unlimited", maxsql: "unlimited" }
  ];

  res.status(200).json({
    status: "done",
    total: packages.length,
    results: packages
  });
}
