function showSchedule(){

let departure = document.getElementById("departure").value.trim().toLowerCase();
let destination = document.getElementById("destination").value.trim().toLowerCase();
let scheduleDiv = document.getElementById("schedule");

if(departure === "" || destination === ""){
alert("Please enter both departure and destination");
return;
}

/* Define routes */
const routes = [
{ from: "bellville campus", to: "dgh" },
{ from: "dgh", to: "bellville campus" }
];



/* Check if route exists */
let validRoute = routes.some(route => 
route.from === departure && route.to === destination
);

if(validRoute){

let table = `
<h2>${capitalize(departure)} → ${capitalize(destination)}</h2>
<table>
<tr>
<th>Departure</th>
<th>Arrival</th>
</tr>
`;

/* Generate hourly schedule */
for(let hour = 7; hour <= 22; hour++){

let dep = formatTime(hour, 0);
let arr = formatTime(hour, 30);

table += `
<tr>
<td>${dep}</td>
<td>${arr}</td>
</tr>
`;
}

table += "</table>";

scheduleDiv.innerHTML = table;

}else{

scheduleDiv.innerHTML = `
<p class="error">
Route not available.<br><br>
Available routes:<br>
• Bellville Campus → DGH<br>
• DGH → Bellville Campus

</p>
`;
}

}

/* Helper: format time */
function formatTime(hour, minutes){
return hour.toString().padStart(2,'0') + ":" + minutes.toString().padStart(2,'0');
}

/* Helper: capitalize words */
function capitalize(text){
return text.replace(/\b\w/g, char => char.toUpperCase());
}