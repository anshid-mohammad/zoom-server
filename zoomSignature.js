// const express = require("express");
// const crypto = require("crypto");
// const { log } = require("console");
// const router = express.Router();

// router.post("/generateSignature", (req, res) => {
//   const sdkKey = "MIaKK49FSKOKYZzl5frrew";
//   const sdkSecret ="QCybrXLHEwmH3X4wymUQ5DkPW2TAlgYe";
//   const { meetingNumber, role } = req.body;
// console.log(sdkKey,sdkSecret,"sdio")
//   const iat = Math.round(new Date().getTime() / 1000) - 30;
//   const exp = iat + 60 * 60 * 2;

//   const oHeader = { alg: "HS256", typ: "JWT" };
//   const oPayload = {
//     sdkKey,
//     mn: meetingNumber,
//     role,
//     iat,
//     exp,
//     appKey: sdkKey,
//     tokenExp: exp,
//   };

//   const sHeader = Buffer.from(JSON.stringify(oHeader)).toString("base64");
//   const sPayload = Buffer.from(JSON.stringify(oPayload)).toString("base64");
//   const signature = crypto
//     .createHmac("sha256", sdkSecret)
//     .update(`${sHeader}.${sPayload}`)
//     .digest("base64");

//   const sdkSignature = `${sHeader}.${sPayload}.${signature}`;

//   res.json({ signature: sdkSignature });
// });

// module.exports = router;
