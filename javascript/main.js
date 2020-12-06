// search



// soundCloud Api

SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {
  q: 'rilo kiley'
}).then(function(tracks) {
  console.log(tracks);
});

// display the cards 



// add to playlist and play .