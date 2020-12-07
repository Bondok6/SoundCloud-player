// search



// soundCloud Api
var soundCloudApi = {};
soundCloudApi.init = function () {
  
  SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  });

}

soundCloudApi.init();

soundCloudApi.getTrack = function (inputValue) {
  
  SC.get('/tracks', {
    q: inputValue
  }).then(function(tracks) {
    console.log(tracks);
  });

}

soundCloudApi.getTrack('rilo kiley');


// display the cards 



// add to playlist and play .