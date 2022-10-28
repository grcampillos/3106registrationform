function validateName() {
	var name = document.getElementsByName("fname")[0].value;
	if (name.length < 2)
		return "Name is required";	
	return "";
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function agreeTerms(){
    var decider = document.getElementById('field_terms');
    if(submit = true && decider.checked == true){
        alert('Your registration has been successful. Thank you for joining us!')
        
    }else{
        alert('Please indicate that you have read and agree to the Terms and Conditions.');
    }
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();