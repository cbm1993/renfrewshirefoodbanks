// Wait until the document is loaded and ready



$(document).ready(function() {
// Add event listener to postcode input field
$('#postcode').on('keydown', function(event) {
if (event.keyCode === 13) {
event.preventDefault(); // Prevent page refresh
getFoodBanks(); // Call getFoodBanks function
}
});
});

var searched = false;

function getFoodBanks() {

// Get the postcode input value and convert to lowercase    
var postcode = $('#postcode').val().toLowerCase();

// Check if postcode starts with 'p'
    if (!postcode.startsWith('p')) {
$('#foodbanks').html("<h4>Enter a Renfrewshire postcode.</h4>");
return;
}
    
    
    
// Array of valid postcode areas
var validAreas = ["Bishopton", "Bridge of Weir", "Brookfield", "Carruthmuir", "Craigends", "Crosslee", "Elderslie", "Erskine", "Houston", "Howwood", "Inchinnan", "Johnstone", "Kilbarchan", "Langbank", "Linwood", "Lochwinnoch", "Paisley", "Windy Hill"];

// AJAX request to givefood.org.uk API to retrieve food bank locations    
$.ajax({
url: "https://www.givefood.org.uk/api/2/locations/search/",
method: "GET",
dataType: "json",
data: {address: postcode + ", Scotland", country: "Scotland"},
success: function(data) {
    
    
// Filter food banks by valid postcode areas
var filteredData = data.filter(function(fb) {
return validAreas.includes(fb.name);
});
    
// If no food banks found in valid areas
      if (filteredData.length == 0) {
    $('#foodbanks').html("<p>No food banks found.</p>");
  } else {
      
// If food banks found, generate HTML table with name, address, directions, and phone number along with clickable link for directions
var html = "<table class='table'><thead><tr><th>Area</th><th>Address</th><th>Directions</th><th>Phone</th></tr></thead><tbody>";
for (var i = 0; i < filteredData.length; i++) {
    var phoneNumber = filteredData[i].phone.replace(/\D/g, '');
    var address = "<span>" + filteredData[i].address + "</span><div class='popup'><p>Click to get directions</p></div>";
    var directionsLink = "";
    if (filteredData[i].address) {
        directionsLink = "<a href='https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(filteredData[i].address) + "' target='_blank'>Get Directions</a>";
    }

    html += "<tr><td>" + filteredData[i].name + "</td><td>" + address + "</td><td>" + directionsLink + "</td><td><a href='tel:" + phoneNumber + "'>" + filteredData[i].phone + "</a></td></tr>";
}
html += "</tbody></table><button type='button' class='btn btn-secondary' onclick='closeResults()'>Close</button>";
$('#foodbanks').html(html);
$('.popup').hide();
$('a[href^="https://www.google.com/maps/dir/"]').hover(

);


  }
  $('#postcode').removeAttr('disabled');
},
    
    
// This function handles any errors that occur while retrieving food bank data    
error: function() {
  $('#foodbanks').html("<p>An error occurred while retrieving food banks.</p>");
  $('#postcode').removeAttr('disabled');
}
});
}

// This function clears the food bank data from the page and enables the postcode input field
function closeResults() {
$('#foodbanks').html("");
$('#postcode').val("").removeAttr('disabled');
}