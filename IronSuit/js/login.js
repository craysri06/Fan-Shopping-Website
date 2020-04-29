function check() {
    var name = document.getElementById("name").value;
    var pw = document.getElementById("password").value;

    if (nameCheck(name, "admin")) {
        if (pwCheck(pw, "password123")) {
            alert("Logged in");
        }
    }
}

function nameCheck(name, cname) {
    if (name != cname) {
        alert("Error");
        return false;
    }
    return true;
}

function pwCheck(pw, cpw) {
    if (pw != cpw) {
        alert("Error");
        return false;
    }
    return true;
}
