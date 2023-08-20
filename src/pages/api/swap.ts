const axios = require('axios');

export default async function handler(req: any, res: any) {

    try {
        if (req.method === "POST") {

            let data = JSON.stringify({
                "userPublicKey": "71iYGDjHhv6XLBD2XP5AHkoThVtfB13u2kxZPSRHdVk6",
                "quoteResponse": req.body.quote.data
            });

            let config = {
                method: 'post',
                url: 'https://quote-api.jup.ag/v6/swap',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data: data
            };

            let response = await axios.request(config)
            console.log(response, 'res')
            res.status(200).json(response.data)

        };

    }

    catch (err) { console.log(err) }

}