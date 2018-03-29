const _ = {};


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

_.each = function(list, callback) {

    if (Array.isArray(list)){
        // Loop through array
        for(var i = 0; i<list.length; i++){
            callback(list[i], i, list);
        }
    }
    else {
        // Loop through object
        for(var key in list){
            callback(list[key], key, list)
        }
    }
    // Loop through the list
        // Call the callback with a list item

}

_.each(["Sally","georgie","porgie"], function(name, i, list){
    if(list[i + 1]){
        console.log(name[i], "is younger than", list[i+1]);
    }
    else {
        console.log(name, "is oldest")
    }
});

