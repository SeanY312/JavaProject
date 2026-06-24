let data,customers;
async function init(){
  
  
  let link = "https://redesigned-orbit-4jv744rp6gvr37rx9-8300.app.github.dev/";
  let route= "products";
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
    build += `<img src='countries/${customer.Name}.jpg'>`;
    build += `<h3>${customer.Name}</h3>`;
    build += `<div>${customer.Stock} Left in Stock</div>`;
    build += `</div>`;
    build += `<div class="flip-card-back">`;
    build += `<div> Type: ${customer.ItemType}</div>`;
    build += `<div> Warehouse : ${customer.Warehouse}</div>`;
    // build += `<p> Email : ${customer.Email}</p>`;
    // build += `<img src='countries/${customer.Country}.PNG'>`;
    build += `<hr>`;
    build += `</div> </div> </div>`;
  }

  // Now inject the build content into the output container
  centerpanel.innerHTML = build;
  

}

function filter(){
  let country = document.getElementById("items").value;

  let customerList = []; //create a list of songs searched for
  for(let i=0; i < customers.length;i++){
    let customer = customers[i];
    if(customer.ItemType == country) {
        customerList.push(customer);
       }
  }
  // console.log(`number found ${customerList.length}`);
  generateCards(customerList);
  
}