let swapi = [
    {
        "no": 1,
        "name": "Alderaan", 
        "rotation_period": "24", 
        "orbital_period": "364", 
        "diameter": "12500", 
        "climate": "temperate", 
        "gravity": "1 standard", 
        "terrain": "grasslands, mountains", 
        "surface_water": "40", 
        "population": "2000000000", 
    },

    {
        "no": 2,
        "name": "Yavin IV", 
        "rotation_period": "24", 
        "orbital_period": "4818", 
        "diameter": "10200", 
        "climate": "temperate, tropical", 
        "gravity": "1 standard", 
        "terrain": "jungle, rainforests", 
        "surface_water": "8", 
        "population": "1000", 
    }, 

    {
        "no": 3,
        "name": "Hoth", 
        "rotation_period": "23", 
        "orbital_period": "549", 
        "diameter": "7200", 
        "climate": "frozen", 
        "gravity": "1.1 standard", 
        "terrain": "tundra, ice caves, mountain ranges", 
        "surface_water": "100", 
        "population": "unknown", 
    }, 

    {
        "no": 4,
        "name": "Dagobah", 
        "rotation_period": "23", 
        "orbital_period": "341", 
        "diameter": "8900", 
        "climate": "murky", 
        "gravity": "N/A", 
        "terrain": "swamp, jungles", 
        "surface_water": "8", 
        "population": "unknown",  
    }, 

    {
        "no": 5,
        "name": "Bespin", 
        "rotation_period": "12", 
        "orbital_period": "5110", 
        "diameter": "118000", 
        "climate": "temperate", 
        "gravity": "1.5 (surface), 1 standard (Cloud City)", 
        "terrain": "gas giant", 
        "surface_water": "0", 
        "population": "6000000", 
    }, 

    {
        "no": 6,
        "name": "Endor", 
        "rotation_period": "18", 
        "orbital_period": "402", 
        "diameter": "4900", 
        "climate": "temperate", 
        "gravity": "0.85 standard", 
        "terrain": "forests, mountains, lakes", 
        "surface_water": "8", 
        "population": "30000000",  
    }, 

    {
        "no": 7,
        "name": "Naboo", 
        "rotation_period": "26", 
        "orbital_period": "312", 
        "diameter": "12120", 
        "climate": "temperate", 
        "gravity": "1 standard", 
        "terrain": "grassy hills, swamps, forests, mountains", 
        "surface_water": "12", 
        "population": "4500000000", 
    }, 

    {
        "no": 8,
        "name": "Coruscant", 
        "rotation_period": "24", 
        "orbital_period": "368", 
        "diameter": "12240", 
        "climate": "temperate", 
        "gravity": "1 standard", 
        "terrain": "cityscape, mountains", 
        "surface_water": "unknown", 
        "population": "1000000000000", 
    }, 

    {
        "no": 9,
        "name": "Kamino", 
        "rotation_period": "27", 
        "orbital_period": "463", 
        "diameter": "19720", 
        "climate": "temperate", 
        "gravity": "1 standard", 
        "terrain": "ocean", 
        "surface_water": "100", 
        "population": "1000000000", 
    }, 
    
    {
        "no": 10,
        "name": "Geonosis", 
        "rotation_period": "30", 
        "orbital_period": "256", 
        "diameter": "11370", 
        "climate": "temperate, arid", 
        "gravity": "0.9 standard", 
        "terrain": "rock, desert, mountain, barren", 
        "surface_water": "5", 
        "population": "100000000000", 
    }
]


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}


function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
  let table = document.querySelector("table");
  let data = Object.keys(swapi[0]);
  generateTableHead(table, data);
  generateTable(table, swapi);


function myFunction() { 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }