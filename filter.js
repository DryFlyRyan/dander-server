var crud = require('./crud_functions')

function filterDogs(responseData, checkID) {
  return new Promise(function(resolve, reject) {
    var returnData = [];
    for(i=0; i<responseData.petfinder.pets[0].pet.length; i++){
      var data = responseData.petfinder.pets[0].pet[i]
      if(data.status[0]==="A"){
        var newDog          = {};
        newDog.userid       = checkID;
        newDog.name         = data.name[0];
        newDog.age          = data.age[0];
        newDog.sex          = data.sex[0];
        newDog.size         = data.size[0];
        newDog.description  = data.description[0];
        newDog.petfinder_id = data.id[0];
        newDog.photo        = data.media[0].photos[0].photo[2]["_"];
        newDog.contact      = data.contact[0];
        returnData.push(newDog);
        }
    }
    resolve(returnData);
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      if(data[0].userid){
        return onlynewDogs(data)
      } else {
        return data;
        }
    })
  })
}


function filterReturnArray(responseData) {
  return new Promise(function(resolve, reject) {
    var returnData = [];
    for(i=0; i<responseData.length; i++){
      if(responseData[i].petfinder.pet){
      var data = responseData[i].petfinder.pet[0]
        var newDog          = {};
        newDog.name         = data.name[0];
        newDog.age          = data.age[0];
        newDog.sex          = data.sex[0];
        newDog.size         = data.size[0];
        newDog.description  = data.description[0];
        newDog.petfinder_id = data.id[0];
        newDog.photo        = data.media[0].photos[0].photo[2]["_"];
        newDog.contact      = data.contact[0];
        returnData.push(newDog)
      }
    }
    resolve(returnData);
  });
}

module.exports = {
  filter: filterDogs,
  format: filterReturnArray
}

function knexPromise(userID, petID){
  return new Promise(function(resolve, reject){
    resolve(crud.checkConnection());
  })
}

function onlyNewDogs(dogArray){
  return new Promise(function(resolve, reject){
    var petfinderArray = [];
    for(i=0; i<dogArray.length; i++){
      petfinderArray.push([dogArray[i].petfinder_id, dogArray[i].userid]);
    }
    resolve(petfinderArray);
  })
  .then(function(petfinderArray){
    var promiseStack = [];
    for(i=0; i<petfinderArray.length; i++){
      promiseStack.push(crud.checkConnection(petfinderArray[i][1], petfinderArray[i][0]))
    }
    return Promise.all(promiseStack)
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      var newArray = [];
      for(i=0; i<data.length; i++){
        if(data[i].length>1){
          newArray.push(data[i]);
        }
      }
      resolve(newArray);
    })
  })
}
