function check() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var pw = document.getElementById("password").value;
    var cpw = document.getElementById("cpassword").value;

    if (nameCheck(name, 5, 10)) {
        if (emailCheck(email)) {
            if (numberCheck(number, 10)) {
                if (pwCheck(pw, cpw)) {
                    alert("Form Succesfully Submitted");
                }
            }
        }
    }
}

function nameCheck(name, low, up) {
    if (name.length < low || name.length > up) {
        alert("Error in validating name");
        return false;
    }
    return true;
}

function emailCheck(email) {
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // ^ = match beginning of the line
    // \w = find a word char
    // + = match at least that char
    // \. = match full stop
    // () = group the search
    // .? = optional (question mark)
    // {x,y} = match from number x to y
    // .* = AND, it is used to AND many groups
    // | = OR, to use for many groups

    if (email.match(emailformat)) {
        return true;
    }

    alert("Error in validating mail.");
    return false;
}

function numberCheck(number, limit) {
    if (number.length != limit) {
        alert("error in validating phone number");
        return false;
    }
    return true;
}

function pwCheck(pw, cpw) {
    if (pw != cpw) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}
