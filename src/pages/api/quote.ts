const axios = require('axios');

export default async function handler(req: any, res: any) {

  try {
    if (req.method === "POST") {

      let config = {
        method: 'get',
        url: `https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=${req.body.amount*1_000_000_000}`,
        headers: {
          'Accept': 'application/json'
        }
      };

      let {data} = await axios.request(config)

      res.status(200).json(data)

    };

  }

  catch (err) { console.log(err) }

}