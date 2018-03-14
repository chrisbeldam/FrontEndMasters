const _ = {};

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