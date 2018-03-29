const _ = {};

const weapons = ['candlestick','lead pipe','revolver'];

const makeBroken = function(item){
    return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken);

brokenWeapons;

_.map = function(list, callback){
    //create empty array
    var storage = [];
    // loop through
    for(var i = 0; i < list.length; i++){
        storage.push(callback(list[i], i, list))
        // callback(element)
        // push to array
    }
    _.each(list, function(v,i,list){ // Functional way of doing it with es6
        storage.push(callback(v,i,list));
    });
    // return
    return storage;

}

_.map([1,2,3], function(val){return val+1;})