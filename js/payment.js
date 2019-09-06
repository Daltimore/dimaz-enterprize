const raveURL = "https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay";
const data = ({
    "txref": "MC-1520443531487",
    "PBFPubKey": "FLWPUBK-9e654405a33f9043f61578f07e71d0e6-X",
    "customer_email": "",
    "amount": "",
    "currency": "", 
    "redirect_url": "https://your-website.com/urltoredirectto"
});

fetch(raveURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{ 'Content-Type': 'application/json' },
    dataType: 'json'
}).then(
    res => res.json()
).then(
    res => console.log(res)
).catch(
    err => console.log(err)
);