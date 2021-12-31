function getRadioValue() {
    for (var i = 0; i < document.getElementsByName('gender').length; i++) {
        if (document.getElementsByName('gender')[i].checked) {
            return document.getElementsByName('gender')[i].value;
        }
    }
}

function getCheckBox() {
    var markedCheckbox = document.getElementsByName('food');
    let res = [];
    for (var checkbox of markedCheckbox) {
        if (checkbox.checked)
            res.push((checkbox.value + ' '));
    }
    if (res.length < 2) {
        return alert("please select atleast 2 types of food");
    } else {
        return res.join(',');
    }
}

let fname = document.getElementById("first-name");
let lname = document.getElementById("last-name");
let address = document.getElementById("address");
let pincode = document.getElementById("pincode");
let state = document.getElementById("state");
let country = document.getElementById("country");


function getDetails() {
    if (getCheckBox().valueOf() == 'undefined') {
        return false;
    } else {
        let table = document.getElementById("mytable")
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        let cell5 = row.insertCell();
        let cell6 = row.insertCell();
        let cell7 = row.insertCell();
        let cell8 = row.insertCell();
        cell1.innerHTML = fname.value;
        cell2.innerHTML = lname.value;
        cell3.innerHTML = address.value;
        cell4.innerHTML = pincode.value;
        cell5.innerHTML = getRadioValue();
        cell6.innerHTML = getCheckBox();
        cell7.innerHTML = state.value;
        cell8.innerHTML = country.value;

        document.getElementById("myForm").reset();
    }
}