window.onload = init;
function init(){
    if(localStorage.getItem("token")){
        headers = {
            'Authorization': "bearer " + localStorage.getItem("token")
        };
        document.querySelector('.btn-primary').addEventListener('click', add);
        document.querySelector('.btn-secondary').addEventListener('click', function() {
          window.location.href = "menu.html"
        });
    } else{
        window.location.href = "employees.html";
    }
}

function add(){
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var phone = document.getElementById('input-phone').value;
    var email = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;

    console.log(name, lastname, phone, email, address);

    data = {employee_name : name,
        employee_lastnames: lastname,
        employee_phone: phone,
        employee_email: email,
        employee_address: address};

    axios.post('http://localhost:3000/routes/employee/add', data, {headers:headers}
    ).then(function(res) {
        console.log(res);
        alert("Empleado registrado exitosamente");
        window.location.href = "menu.html"
    }).catch(function(err){
        console.log(err);
    })
}
