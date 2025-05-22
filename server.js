const express = require('express');
const cors = require('cors');
const { KJUR } = require('jsrsasign');

const app = express();
const port = 4000;
app.use(cors({
  origin: 'https://57ed-2401-4900-1cdf-7f86-d939-1d78-3423-e5e0.ngrok-free.app ',
  credentials: true 
}));

app.use(express.json());

app.post('/', (req, res) => {
  const { meetingNumber, role } = req.body;
console.log(req.body,"xzxcc")
  const sdkKey = "MIaKK49FSKOKYZzl5frrew";
  const sdkSecret = "QCybrXLHEwmH3X4wymUQ5DkPW2TAlgYe";

  const iat = Math.floor(Date.now() / 1000) - 30;
  const exp = iat + 60 * 60 * 2;

  const payload = {
    sdkKey,
    appKey: sdkKey,
    mn: meetingNumber,
    role,
    iat,
    exp,
    tokenExp: exp,
  };

  const header = { alg: 'HS256', typ: 'JWT' };
  const signature = KJUR.jws.JWS.sign(
    'HS256',
    JSON.stringify(header),
    JSON.stringify(payload),
    sdkSecret
  );

  res.json({ signature });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
