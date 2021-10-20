window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
  if (localStorage.getItem("token")) {
        headers = {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
        document.querySelector('#add').addEventListener('click', function() {
          window.location.href = "add.html"
        });
        document.querySelector('#mod').addEventListener('click', function() {
          window.location.href = "mod.html"
        });
        document.querySelector('#del').addEventListener('click', function() {
          window.location.href = "del.html"
        });
        document.querySelector('#find').addEventListener('click', function() {
          window.location.href = "find.html"
        });
    }else {
    window.location.href = "login.html"
  }
}
