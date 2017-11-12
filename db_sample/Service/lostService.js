const lostModel = require('../Models/lostModel');

const addLostItem = (newItem) => {
    return new Promise((resolve, reject) => {
        let mongoItem = new lostModel(newItem);
        mongoItem.save((err, item) => {
            if (err) {
                reject(err)
                console.log(err);
            }
            resolve(mongoItem);
        }
        );

    });
}

const getLostItems = () => {
    return new Promise((resolve, reject) => {
        lostModel.find({}, (err, items)=>{
            if (err) {
                console.log("mongo err");
                reject(err);
            }
            resolve(items);
        })
    });
}



module.exports = {
    addLostItem,
    getLostItems
}