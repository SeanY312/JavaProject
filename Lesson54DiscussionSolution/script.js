let data,customers;
async function init(){
  
  
  let link = "https://redesigned-orbit-4jv744rp6gvr37rx9-8300.app.github.dev/";
  let route= "customers";
  let info = await fetch(link+route);
  customers = await info.json();
  generateCards(customers);
}

function generateCards(customers){
  let centerpanel = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<customers.length; i++){
    let customer = customers[i];
    build += `<div class="flip-card" >`
    build += `<div class="flip-card-inner">`;
    build += `<div class="flip-card-front">`;
    build += `<h3> Account Number : ${customer.AccountNumber}</h3>`;
    build += `<div> First Name : ${customer.FirstName}</div>`;
    build += `<div> Last Name : ${customer.LastName}</div>`;
    build += `</div>`;
    build += `<div class="flip-card-back">`;
    build += `<div> Country : ${customer.Country}</div>`;
    build += `<p> Email : ${customer.Email}</p>`;
    build += `<hr>`;
    build += `</div> </div> </div>`;
  }

  // Now inject the build content into the output container
  centerpanel.innerHTML = build;
  

}

function filter(){
  let country = document.getElementById("country").value;

  let customerList = []; //create a list of songs searched for
  for(let i=0; i < customers.length;i++){
    let customer = customers[i];
    if(customer.Country == country) {
        customerList.push(customer);
       }
  }
  // console.log(`number found ${customerList.length}`);
  generateCards(customerList);
  
}