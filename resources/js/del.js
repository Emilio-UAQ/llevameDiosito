window.onload = init;
function init(){
    if(localStorage.getItem("token")){
        headers = {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
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
    console.log(headers);

    data = {employee_id: id}

    axios.delete('http://localhost:3000/routes/employee/delete', {headers, data}).then(function(res) {
        console.log(res);
        alert("Empleado eliminado")
        window.location.href = "find.html"
    }).catch(function(err){
        console.log(err);
    })
}
