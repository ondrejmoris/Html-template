var s_time;
var modal;

window.addEventListener("load", function(event){
  s_time = new Date();
  timeEdit();

  setInterval(timeEdit, 1000);
});

function updateTimeString(){
  document.getElementById("hodiny").innerText = new Date(time-s_time).getSeconds().toLocaleString();
  document.getElementById("time").innerText = time.toLocaleString();
}

function timeEdit(){
  time = new Date();

  updateTimeString(time);
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
function show(event){
  // Get the modal
  modal = document.getElementById("myModal");
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(event.target.id);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

}

function hide(){
  modal.style.display = "none";
}

function validateForm(){
  var nameReg = /^[a-zA-Z ]{2,30}$/;
  var emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;

  if(nameReg.test(name) == true && emailReg.test(email) == ture){
    return true;
  }
  alert("Incorrect mail or name!");
  return false;
}