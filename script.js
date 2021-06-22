// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   console.log(response);
   response.json().then( function(json) {
    const div = document.getElementById("missionTarget")
    console.log(json[5])
   
    div.innerHTML =
`<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[5].name}</li>
   <li>Diameter: ${json[5].diameter}</li>
   <li>Star: ${json[5].star}</li>
   <li>Distance from Earth: ${json[5].distance}</li>
   <li>Number of Moons: ${json[5].moons}</li>
</ol>
<img src="${json[5].image}"></img>`
   });
   });
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("PLEASE CHECK YOUR ENTRIES, ALL FIELDS ARE REQUIRED!");

                 
      }

      if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false){
         alert("PLEASE ENTER ALPHA CHARACTERS ONLY");
       
      }

      if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true){
         alert("PLEASE ENTER NUMBERS ONLY IN THE FUEL AND CARGO FIELDS");
       
      }

      if (fuelLevelInput.value < 10000 || cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.setProperty("visibility","visible")
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
         document.getElementById("launchStatus").style.setProperty("color","red")
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is Ready`
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotNameInput.value} is Ready`

         if (fuelLevelInput.value < 10000) {
            document.getElementById("fuelStatus").innerHTML = "NEED MORE PETRO"
         }

         if (cargoMassInput.value > 10000) {
            document.getElementById("cargoStatus").innerHTML = "NOPE! TOO HEAVY!"
         }
        
      } else {
         document.getElementById("launchStatus").innerHTML = "SHUTTLE IS READY FOR LAUNCH"
         document.getElementById("launchStatus").style.setProperty("color","green")
         document.getElementById("fuelStatus").innerHTML = "FUEL LEVEL IS READY FOR LAUNCH"
         document.getElementById("cargoStatus").innerHTML = "CARGO MASS IS LOW ENOUGH FOR LAUNCH"
      }
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
