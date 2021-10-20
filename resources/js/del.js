window.onload = init;
function init(){

    if(localStorage.getItem("token")){
        document.querySelector('.btn-primary').addEventListener('click', del);
        document.querySelector('.btn-secondary').addEventListener('click', function() {
          window.location.href = "menu.html"
        });
    } else{
        window.location.href = "index.html";
    }
}

function del(){
    var id = document.getElementById('id').value;

    console.log(id);

    axios({
        method: 'delete',
        url: 'http://localhost:3000/routes/employee/delete',
        data: {
            employee_id : id
        }
    }).then(function(res) {
        console.log(res);
        alert("Empleado eliminado")
        window.location.href = "find.html"
    }).catch(function(err){
        console.log(err);
    })
}
