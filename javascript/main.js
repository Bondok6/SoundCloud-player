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
    soundCloudApi.renderTrack(tracks);
  });

}
soundCloudApi.getTrack('rilo kiley');

// display the cards 
soundCloudApi.renderTrack = function (tracks) {
  
  tracks.forEach(track => {

    let card = document.createElement('div');
    card.classList.add('card');

    let searchResault = document.querySelector('.js-search-results');
    searchResault.appendChild(card);

    let divImg = document.createElement('div');
    divImg.classList.add('image');

    let img = document.createElement('img');
    img.classList.add('image_img')
    img.setAttribute('src', track.artwork_url || 'http://lorempixel.com/100/100/' );

    divImg.appendChild(img);
    card.appendChild(divImg);

    let divContent = document.createElement('div');
    divContent.classList.add('content');
    
    let divHeader = document.createElement('div');
    divHeader.classList.add('header');

    let anchor = document.createElement('a');
    anchor.setAttribute('href', track.permalink_url);
    anchor.setAttribute('target', '_blank');
    anchor.innerHTML = track.title;

    divHeader.appendChild(anchor);
    divContent.appendChild(divHeader);
    card.appendChild(divContent);

    let divButton = document.createElement('div');
    divButton.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

    let i = document.createElement('i');
    i.classList.add('add', 'icon');
    let span = document.createElement('span');
    span.innerHTML = "Add to palylist";

    divButton.appendChild(i);
    divButton.appendChild(span);
    card.appendChild(divButton);

  });
  
}



// add to playlist and play .
SC.oEmbed('https://soundcloud.com/forss/flickermood', {
  auto_play: true
}).then(function(embed){
  console.log('oEmbed response: ', embed);
  let sideBar = document.querySelector('.js-playlist');
  sideBar.innerHTML = embed.html;
});