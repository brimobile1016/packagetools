export default function handler(req, res) {
  const plans = {
    "WHM Mini": {
      resnumlimitamt: 17,
      "acctlim-cPanel Mini": 7, "respkg-cPanel Mini": 1,
      "acctlim-cPanel Medium": 4, "respkg-cPanel Medium": 1,
      "acctlim-cPanel Extra": 3, "respkg-cPanel Extra": 1,
      "acctlim-cPanel Super": 1, "respkg-cPanel Super": 1
    },
    "WHM Medium": {
      resnumlimitamt: 20,
      "acctlim-cPanel Mini": 10, "respkg-cPanel Mini": 1,
      "acctlim-cPanel Medium": 5, "respkg-cPanel Medium": 1,
      "acctlim-cPanel Extra": 3, "respkg-cPanel Extra": 1,
      "acctlim-cPanel Super": 2, "respkg-cPanel Super": 1
    },
    "WHM Extra": {
      resnumlimitamt: 25,
      "acctlim-cPanel Mini": 13, "respkg-cPanel Mini": 1,
      "acctlim-cPanel Medium": 5, "respkg-cPanel Medium": 1,
      "acctlim-cPanel Extra": 4, "respkg-cPanel Extra": 1,
      "acctlim-cPanel Super": 3, "respkg-cPanel Super": 1
    },
    "WHM Super": {
      resnumlimitamt: 30,
      "acctlim-cPanel Mini": 15, "respkg-cPanel Mini": 1,
      "acctlim-cPanel Medium": 6, "respkg-cPanel Medium": 1,
      "acctlim-cPanel Extra": 5, "respkg-cPanel Extra": 1,
      "acctlim-cPanel Super": 4, "respkg-cPanel Super": 1
    },
    "MWHM Mini": {
      resnumlimitamt: 50,
      "acctlim-cPanel Mini": 12, "respkg-cPanel Mini": 1,
      "acctlim-cPanel Medium": 8, "respkg-cPanel Medium": 1,
      "acctlim-cPanel Extra": 8, "respkg-cPanel Extra": 1,
      "acctlim-cPanel Super": 8, "respkg-cPanel Super": 1,
      "acctlim-WHM Mini": 4, "respkg-WHM Mini": 1,
      "acctlim-WHM Medium": 4, "respkg-WHM Medium": 1,
      "acctlim-WHM Extra": 3, "respkg-WHM Extra": 1,
      "acctlim-WHM Super": 3, "respkg-WHM Super": 1
    },
    "MWHM Medium": {
      resnumlimitamt: 70,
      "acctlim-cPanel Mini": 18, "respkg-cPanel Mini": 1,
      "acctlim-cPanel Medium": 12, "respkg-cPanel Medium": 1,
      "acctlim-cPanel Extra": 10, "respkg-cPanel Extra": 1,
      "acctlim-cPanel Super": 10, "respkg-cPanel Super": 1,
      "acctlim-WHM Mini": 6, "respkg-WHM Mini": 1,
      "acctlim-WHM Medium": 6, "respkg-WHM Medium": 1,
      "acctlim-WHM Extra": 4, "respkg-WHM Extra": 1,
      "acctlim-WHM Super": 4, "respkg-WHM Super": 1
    },
    "MWHM Extra": {
      resnumlimitamt: 90,
      "acctlim-cPanel Mini": 22, "respkg-cPanel Mini": 1,
      "acctlim-cPanel Medium": 16, "respkg-cPanel Medium": 1,
      "acctlim-cPanel Extra": 14, "respkg-cPanel Extra": 1,
      "acctlim-cPanel Super": 14, "respkg-cPanel Super": 1,
      "acctlim-WHM Mini": 8, "respkg-WHM Mini": 1,
      "acctlim-WHM Medium": 8, "respkg-WHM Medium": 1,
      "acctlim-WHM Extra": 4, "respkg-WHM Extra": 1,
      "acctlim-WHM Super": 4, "respkg-WHM Super": 1
    },
    "MWHM Super": {
      resnumlimitamt: 110,
      "acctlim-cPanel Mini": 28, "respkg-cPanel Mini": 1,
      "acctlim-cPanel Medium": 20, "respkg-cPanel Medium": 1,
      "acctlim-cPanel Extra": 16, "respkg-cPanel Extra": 1,
      "acctlim-cPanel Super": 16, "respkg-cPanel Super": 1,
      "acctlim-WHM Mini": 10, "respkg-WHM Mini": 1,
      "acctlim-WHM Medium": 10, "respkg-WHM Medium": 1,
      "acctlim-WHM Extra": 5, "respkg-WHM Extra": 1,
      "acctlim-WHM Super": 5, "respkg-WHM Super": 1
    }
  };

  res.status(200).json({ status: "ok", data: plans });
}
