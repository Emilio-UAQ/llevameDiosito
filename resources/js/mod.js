window.onload = init;
function init(){

    if(localStorage.getItem("token")){
          headers = {
              'Authorization': "bearer " + localStorage.getItem("token")
          }
        document.querySelector('.btn-primary').addEventListener('click', edit);
        document.querySelector('.btn-secondary').addEventListener('click', function() {
          window.location.href = "menu.html"
        });
    } else{

          document.querySelector('.btn-primary').addEventListener('click', edit);
          document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = "menu.html"
          });
        window.location.href = "index.html";
    };
};

function edit(){
    var id = document.getElementById('input-id').value;
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;

    console.log(id, name, lastname, phone, mail, address);

    axios.patch('http://localhost:3000/routes/employee/edit', {
            employee_id : id,
            employee_name : name,
            employee_lastnames: lastname,
            employee_phone: phone,
            employee_email: mail,
            employee_address: address
        }, {headers:headers}).then(function(res) {
        console.log(res);
        alert("Información de empleado actualizada exitosamente");
        window.location.href = "menu.html"
    }).catch(function(err){
        console.log(err);
    });
};
