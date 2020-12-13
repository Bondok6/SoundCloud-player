// search
let UI = {};
UI.pressEnter = function (e) {

  document.querySelector('.js-search').addEventListener('keyup', (e) => {

    let input = document.querySelector('.js-search');
    let inputValue = input.value;
    
    if (e.which === 13) {
      soundCloudApi.getTrack(inputValue);
    }
  })
}

UI.click = function () {

  document.querySelector('.js-submit').addEventListener('click', () => {
    let input = document.querySelector('.js-search');
    let inputValue = input.value;
    soundCloudApi.getTrack(inputValue);
  })
}

UI.pressEnter();
UI.click();

// soundCloud Api
var soundCloudApi = {};                //object 
soundCloudApi.init = function () {        //annonymous function 
  
  SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  });

}
soundCloudApi.init();                 // call annoymous func

soundCloudApi.getTrack = function (inputValue) {  //get data from api
  
  SC.get('/tracks', {
    q: inputValue
  }).then(function(tracks) {
    //console.log(tracks);

    var searchResult = document.querySelector('.js-search-results');
    searchResult.innerHTML = "";

    soundCloudApi.renderTrack(tracks);
  });

}

// display the cards 
soundCloudApi.renderTrack = function (tracks) {  // show data in cards
  
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
    // anchor.setAttribute('href', track.permalink_url);
    // anchor.setAttribute('target', '_blank');
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

    divButton.addEventListener('click',()=>{
      soundCloudApi.getEmbed(track.permalink_url)
    })

  });
  
}

// add to playlist and play .
soundCloudApi.getEmbed = function(trackUrl) {

    SC.oEmbed(trackUrl, {
    auto_play: true
  }).then(function(embed){
    console.log('oEmbed response: ', embed);
    let sideBar = document.querySelector('.js-playlist');
    
    let box = document.createElement('div');
    box.innerHTML = embed.html;

    sideBar.insertBefore(box, sideBar.firstChild);

    localStorage.setItem('key', sideBar.innerHTML);    // save(set) playlist in local storage
  });

}

let sideBar = document.querySelector('.js-playlist'); 
sideBar.innerHTML = localStorage.getItem('key');       // show(get) the playlist  

// Reset local-storage
document.querySelector('button').addEventListener('click', () => {

  localStorage.clear();
  location.reload();

})
