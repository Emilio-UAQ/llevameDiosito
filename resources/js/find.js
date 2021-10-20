window.onload = init;

function init(){
    if(localStorage.getItem("token")){
        headers = {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
        document.querySelector('.btn-primary').addEventListener('click', search);
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = "menu.html"
        });
    } else{
        window.location.href = "index.html";
    };
};

async function search(){
    const name = document.getElementById('input-name');
    const {data} = await axios.post("http://localhost:3000/routes/employee/search",
        {
            employee_name : name.value,
        },
        {headers:headers}
    );
    console.log(data);
    displayemployees(data.employee);
};

function displayemployees(employees){
    const results = document.querySelector(".results");
    employees.forEach(employee => {
        results.innerHTML += `<h5> id: ${employee.employee_id}, name: ${employee.employee_name} </h5>`;
    });
};
