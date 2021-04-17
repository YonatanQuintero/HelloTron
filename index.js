const express = require('express')
const path = require('path');
const router = express.Router();
const app = express();
const port = 3000;

const TronWeb = require('tronweb');

router.get('/', (req, res) => {
//  res.send('Hello World!')
//    res.sendFile('src/index.html');

  /*const fullNode = 'https://api.shasta.trongrid.io';
  const solidityNode = 'https://api.shasta.trongrid.io';
  const eventServer = 'https://api.shasta.trongrid.io';
  const privateKey = '1c9b180e9a6182529a8d60949385e8a5a914be71f8a27e4fa041951102aea0ce';
  const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);*/
  const tronWeb = new TronWeb({
    fullHost: 'https://api.shasta.trongrid.io',
    headers: { "TRON-PRO-API-KEY": 'abb09ece-74db-4a15-8297-2e1d1c940bb2' },
    privateKey: '1c9b180e9a6182529a8d60949385e8a5a914be71f8a27e4fa041951102aea0ce'
})
  console.log("tronweb",tronWeb);
  res.sendFile(path.join(__dirname+'/src/index.html'));
});

app.use(express.static(path.join(__dirname,'/src/public')));
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

