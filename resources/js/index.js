window.onload = init;

function init(){
    if(localStorage.getItem("token")){
        document.querySelector('.enter').addEventListener('click', function() {
            alert('Pásele a lo barrido');
            window.location.href = "menu.html"
        });
    } else{
        document.querySelector('.enter').addEventListener('click', function() {
            alert('Nel, sáquese');
            window.location.href = "login.html"
        });
    };
};
