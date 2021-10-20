window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
  if (localStorage.getItem("token")) {
        headers = {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    };
    document.querySelector('.add').addEventListener('click', function() {
      window.location.href = "add.html"
    });
    document.querySelector('.mod').addEventListener('click', function() {
      window.location.href = "mod.html"
    });
    document.querySelector('.del').addEventListener('click', function() {
      window.location.href = "del.html"
    });
    document.querySelector('.find').addEventListener('click', function() {
      window.location.href = "find.html"
    });
  }
  else {
    window.location.href = "login.html"
  }
}

function loadPokemon() {
  axios.get(url + "/pokemon", headers)
  .then(function(res) {
    console.log(res);
    displayPokemon(res.data.message);
  }).catch(function(err) {
    console.log(err);
  })
}

function displayPokemon(pokemon) {
  var body = document.querySelector("body");
  for(var i=0; i < pokemon.length; i++) {
    body.innerHTML += `<h3>${pokemon[i].pok_name}</h3>`
  }
}
