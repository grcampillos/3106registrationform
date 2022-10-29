
//Next Button function
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
// STEP 1
function personalValidation(){ 
    var fname = document.getElementsById("fname")[0].value;
    var mname = document.getElementsById("mname")[0].value;
    var lname = document.getElementsById("lname")[0].value;
    var studno = document.getElementsById("studno").value;
    var ueemail = document.getElementById("ueemail").value;

    //Incremental Checking
    if (firstName(fname)){
        if(lastName(lname)){
            if(studnoCheck(studno)){
                if(ueemailCheck(ueemail)){
                    return true;
                }

            }
        }
    }

function firstName(fname){
    var letters = /^[A-Za-z]+$/;
    if(fname.value.match(letters)){
        return true;
    }
    else{
        alert('Name must have alphabet characters only');
        fname.focus();
        return false;
    }
}
function lastName(lname){
    var letters = /^[A-Za-z]+$/;
    if(lname.value.match(letters)){
        return true;
    }
    else{
        alert('Name must have alphabet characters only');
        lname.focus();
        return false;
    }
}
function studnoCheck(studno){
    var studno_len = studno.value.length;
    if (studno_len == 0 || studno_len > 11 || studno_len < 11) {
        alert("Student number should not be empty / length should be 11 digits.");
        studno.focus();
        return false;
    }
    return true;
}
function ueemailCheck(ueemail){
    var format = /\S+@\S+\.\S+/;
    if(ueemail.value.match(format)){
            return true;
    }
    else{
        alert('Incorrect Email Format!');
        return false;
    }
}
}
// STEP 2
function contactValidation(){
    var pemail = document.getElementById("pemail").value;
    var cnum = document.getElementsById("cnum").value;
    var addressa = document.getElementsById("addressa").value;

    //Incremental Checking
    if(pemailCheck(pemail)){
        if(cnumCheck(cnum)){
            if(addressaCheck(addressa)){
                return true;
            }
        }
    }

}

function pemailCheck(pemail){
    var format = /\S+@\S+\.\S+/;
    if(pemail.value.match(format)){
            return true;
    }
    else{
        alert('Incorrect Email Format!');
        return false;
    }
}
function cnumCheck(cnum){
    var cnum_len = cnum.value.length;
    if (cnum_len == 0 || cnum_len > 11 || cnum_len < 11) {
        alert("Contact number should not be empty / length should be 11 digits.");
        cnum.focus();
        return false;
    }
    return true;
}
function addressaCheck(addressa){
    var regex = /[,#-\/\s\!\@\$.....]/gi;
    if (addressa.value.match(regex)) {
        return true;
    }else{
        alert("Incorrect Address format!")
        return false;
    }
    
}

// STEP 3
function emergencyValidation(){
    var full = document.getElementById("full").value;
    var rs = document.getElementById("rs").value;
    var cnum = document.getElementsById("cnum").value;
    var haddress = document.getElementsById("haddress").value;

    //Incremental Checking
    if(fullNameCheck(full)){
        if(rsCheck(rs)){
            if(cnumCheck(cnum)){
                if(haddressCheck(haddress)){
                    return true;
                }
            }
        }
    }


function fullNameCheck(full){
    var letters = /^[A-Za-z]+$/;
    if(full.value.match(letters)){
        return true;
    }
    else{
        alert('Name must have alphabet characters only');
        full.focus();
        return false;
    }
}

function rsCheck(rs){
    var letters = /^[A-Za-z]+$/;
    if(rs.value.match(letters)){
        return true;
    }
    else{
        alert('Invalid input.');
        rs.focus();
        return false;
    }
}
function cnumCheck(cnum){
    var cnum_len = cnum.value.length;
    if (cnum_len == 0 || cnum_len > 11 || cnum_len < 11) {
        alert("Contact number should not be empty / length should be 11 digits.");
        cnum.focus();
        return false;
    }
    return true;
}
function haddressCheck(haddress){
    var regex = /[,#-\/\s\!\@\$.....]/gi;
    if (haddress.value.match(regex)) {
        return true;
    }else{
        alert("Incorrect Address format!")
        return false;
    }
    
}
}

// STEP 4
function membershipValidation(){
    
}

// STEP 5
function agreeTerms(){
    var decider = document.getElementById('field_terms');
    if(submit = true && decider.checked == true){
        alert('Your registration has been successful. Thank you for joining us!');
        
    }else{
        alert('Please indicate that you have read and agree to the Terms and Conditions.');
    }
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
