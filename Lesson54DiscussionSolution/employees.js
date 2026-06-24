let data;
async function init(){
  
  let link = "https://redesigned-orbit-4jv744rp6gvr37rx9-8300.app.github.dev/";
  let route= "employees"
  let info = await fetch(link+route);
  data = await info.json();
  generateCards(data)
}

function generateCards(data){
  let centerpanel = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<data.length; i++){
    let genres = data[i]

    build += `<div class="flip-card" >`
    build += `<div class="flip-card-inner">`;
    build += `<div class="flip-card-front">`;
    build += `<h3> First Name: ${genres.FirstName}</h3>`;
    build += `<h3> Last Name: ${genres.LastName}</h3>`;
    build += `<h3> Job Title: ${genres.JobTitle}</h3>`;
    build += `</div>`;
    build += `<div class="flip-card-back">`;
    build += `<h3> Age: ${genres.Age}</h3>`;
    build += `<h3> Employee ID: ${genres.EmployeeId}</h3>`;
    build += `<hr>`;
    build += `</div> </div> </div>`;
  }

  // Now inject the build content into the output container
  centerpanel.innerHTML = build;
  

}

function filter(){
  let name = document.getElementById("genres").value;
  
  let newData = []; //create a list of songs searched for
  
  for(let i=0; i<data.length;i++){
    let genres = data[i] //get each song
    //make sure the list is no
    if( genres.JobTitle  == name ) {
          //add to the new list
          newData.push(genres);
       }
  }
  generateCards(newData);
  
}