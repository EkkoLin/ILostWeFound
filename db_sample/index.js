const express = require('express');
const app = express();

const mongoose = require('mongoose');
const promise = mongoose.connect('mongodb://ilost:ifound@ds259085.mlab.com:59085/lost', {
    useMongoClient: true
});
const lostModel = require('./Models/lostModel');
const { addLostItem, getLostItems, original } = require('./Service/lostService');

let lostItems = [
    {
        "name": "Kitty - Cat",
        "imageUrl": "https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg",
        "where": "1720 80th Street, Brooklyn NY",
        "contact": "646-123-1234",
        "reward": "a hug"
    },
    {
        "name": "B.guest Wifi",
        "imageUrl": "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/494/771/datas/original.png",
        "where": "B Building # 22 Warrington Ave Brooklyn New York 11205",
        "contact": "cunyhackathon2017f.slack.com",
        "reward": "none"
    },
    {
        "name": "yellow glove",
        "imageUrl": "http://turtleskin.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/0/0/0000052_aramid-insider-ts-300-heat-glove.jpeg",
        "where": "Brooklyn College Learning Center",
        "contact": "232-123-1234",
        "reward": "$1"
    },
    {
        "name": "sunglass",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0756/5623/products/DSC_5567_copy.jpg?v=1499539688",
        "where": "CUNY Graduate Center",
        "contact": "123@gmail.com",
        "reward": "$0.99"
    },
    {
        "name": "yellow doggie",
        "imageUrl": "http://imgs.soufun.com/news/2015_08/17/esf/1439791061044_000.png",
        "where": "9 Ave and 39 street Brooklyn",
        "contact": "sensei@gmail.com",
        "reward": "some snacks"
    },
    {
        "name": "mad cat",
        "imageUrl": "http://moziru.com/images/grumpy-cat-clipart-mad-cat-10.jpg",
        "where": "80 Street & 18 ave",
        "contact": "jiesika@hotmail.com",
        "reward": "$20"
    },
    {
        "name": "black scraf",
        "imageUrl": "https://www.cosstores.com/Content/ProductContent/0302963004/0302963004_12_0.jpg",
        "where": "Atlantic Avenue Station",
        "contact": "718-232-7645",
        "reward": "none"
    },
    {
        "name": "iphoneX, metro card, school ID",
        "imageUrl": "https://cdn.macrumors.com/article-new/2017/09/iphonexdesign.jpg",
        "where": "Coney Island Train Station",
        "contact": "kk@gmail.com",
        "reward": "$50"
    },
    {
        "name": "Hamster",
        "imageUrl": "https://i.ytimg.com/vi/xkxjNZComZg/maxresdefault.jpg",
        "where": "622 11th Ave",
        "contact": "876-342-122",
        "reward": "$10"
    },
    {
        "name": "lizard",
        "imageUrl": "https://az616578.vo.msecnd.net/files/2016/08/06/636060542071224507558709495_LLizard.jpg",
        "where": "Queens College",
        "contact": "alberto@gmail.com",
        "reward": "$10"
    }

]

/*lostItems.forEach(item => {
    addLostItem(item)
    .then((item) => {
        console.log(item);
    })
    .catch(()=>{
        console.log("cannot add item");
    });
});*/


app.get('/', (req, res) =>{
    getLostItems()
        .then((items) => {
            console.log(items);
            res.json(items);
        })
        .catch((err) =>{
            //console.log(err);
            res.sendStatus(404);
        })
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});