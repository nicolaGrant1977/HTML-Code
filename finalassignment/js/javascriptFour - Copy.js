// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}


var sundayFunction = function(){
	
	return "This is my text on sunday";
}


var prompt = "Hello - What is your name?";
alert(prompt);
alert(prompt);


// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function count_Function() {
	
	document.getElementById("name").innerHTML = count();
	
	function count(){
		
		var Starting_point = 9;
		function Plus_one() {Starting_point += 1;}
		Plus_one();
		return Starting_point;
	}
}

	function countdown() {
		
		var seconds = document.getElementById('seconds').value;
		
		function tick() {
			seconds = seconds - 1;
			timer.innerHTML = seconds;
			var time = setTimeout(tick, 1000);
			
		if(seconds== -1)
			
			{
				alert("Time is up");
				clearTimeout(time);
				timer.innerHTML = "";
				
			}
			
			
			
		}
		
		
		tick();
		
	}
	


function Time_function(){
	
	var Time = new Date().getHours();
	alert(Time);
	var Reply;
	
	if(Time < 12 && Time > 0) {
		
		Reply = "Its morning time";
		
	}
	
	else if(Time >=12 && Time < 18){
		Reply="It is afternoon";
		
	}
	
	else {
		
		Reply="It's evening time";
		
	}
	
	
	document.getElementById("Time").innerHTML = Time;
}

function myFunction() {
document.getElementById('friday').innerHTML = "This is a test to see if this function is working properly";

}







function Ride_function() {
	
	
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
	document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function Can_vote() {
	
	var Vote, Can_vote;
	Vote = document.getElementById("Vote").value;
	Can_vote = (Vote < 18) ? "You are too young ": "You are old enough ";
	document.getElementById("Voting").innerHTML = Can_vote + " to vote";
	
	
	
}

function Vehicle(Make, Model, Year, Color) {
	
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color
	
	
} 

var Jack = new Vehicle("Renault", "clio", 2034, "Blue");


function my_Function() {
	
	document.getElementById("keyword").innerHTML = Jack.Vehicle_Make +Jack.Vehicle_Model; 
	
	
}


function newFunction(){
	
	var read = document.getElementById('readnew').value;
	can_read = (read <10)? "You can read " : "You can't read";
	document.getElementById('testnew').innerHTML = can_read;
	
	
}



function newOne() {
	
	
	document.write(Bigger =(6<5) ? "Left is bigger": "Right is bigger");
	
	
}
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
}

// This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )