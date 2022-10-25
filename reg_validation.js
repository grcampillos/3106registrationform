function regValidation() {
    var fname = document.registration.fname;
    var mname = document.registration.mname;
    var lname = document.registration.lname;
    var studnumber = document.registration.studnumber;


    var passid = document.registration.passid;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;

    // Fucntion to check uid (min of 5 to max of 12)
    if (userid_validation(uid, 5, 12)) {
        if (passid_validation(passid, 5, 12)){
            if (allLetter(uname)) {
                alert("Name is OK")
            }
        }    
    }
    

    
function userid_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("User Id should not be empty / length be between "+mx+" to "+my);
        uid.focus();
        return false;
    }
    return true;
}


function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    return true;
}

function allLetter(fname, mname ,lname){ 
var letters = /^[A-Za-z]+$/;
    if(fname.value.match(letters)){
        return true;
    }
    if(mname.value.match(letters)){
        return true;
    }
    if(lname.value.match(letters)){
        return true;
    }
    else{
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
}
