const request = require('request');
module.exports = (app) => {
    app.get('/api/nytimes', (req,res)=>{
        request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
            'api-key': "336eecdecdde4994aacc4b46f062c7a7",
            'q': "Obama",
            'begin_date:': "20050101",
            'end_date:': "20050101",
            'sort': "newest"
        }            
        }, (err, response, body) =>{
            if(err){
                return console.log(err);
            }
            const parseBody = JSON.parse(body);
            res.json(parseBody);
        })

    });
}