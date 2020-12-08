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

soundCloudApi.renderTrack = function () {
  
  let card = document.createElement('div');
  card.classList.add('card');

  let searchResault = document.querySelector('.js-search-results');
  searchResault.appendChild(card);

  let divImg = document.createElement('div');
  divImg.classList.add('image');

  let img = document.createElement('img');
  img.setAttribute('src', 'http://www.placekitten.com/290/290');

  divImg.appendChild(img);
  card.appendChild(divImg);

  let divContent = document.createElement('div');
  divContent.classList.add('content');
  
  let divHeader = document.createElement('div');
  divHeader.classList.add('header');

  let anchor = document.createElement('a');
  anchor.setAttribute('href', 'https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance');
  anchor.setAttribute('target', '_blank');
  anchor.innerHTML = "Science Vs. Romance";

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


}
soundCloudApi.renderTrack();


// display the cards 



// add to playlist and play .