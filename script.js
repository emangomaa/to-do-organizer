// add event listener to add button
//select add button
var addbtn = document.getElementsByTagName("input")[1];
//select input text value
inputvalue = document.getElementsByTagName("input")[0];
//select table
var t = document.getElementsByTagName("table")[0];

addbtn.addEventListener("click", function () {

    //create tr
    createdtr = document.createElement("tr");

    //2- create td
    createdtd1 = document.createElement("td");
    createdtd2 = document.createElement("td");
    createdtd3 = document.createElement("td");
    var image = document.createElement("img");
    image.src = "images/1.jfif";
    // create input type check box
    var checkinput = document.createElement("input");
    checkinput.type = "checkbox";
    checkinput.name = "done";

    //append first td
    createdtd1.appendChild(checkinput);
    createdtr.appendChild(createdtd1);

    //append second td
    createdtd2.innerText = inputvalue.value;
    createdtr.appendChild(createdtd2);

    //append third td
    createdtd3.appendChild(image);
    createdtr.appendChild(createdtd3);
    t.appendChild(createdtr);
}); //end of addbtn event

//add event listener on table
t.addEventListener("click", function (e) {

    if (e.target.nodeName == "INPUT") {
        if (e.target.checked == true)
            //select td two of target row

            e.target.parentElement.parentElement.children[1].classList.add("linethrough");
        else
            e.target.parentElement.parentElement.children[1].classList.remove("linethrough");
    }
    if (e.target.nodeName == "IMG") {
        var conf = confirm("Are You Sure Delete This Task?")
        if (conf == true)
            e.target.parentElement.parentElement.remove();
    }
});//end of table event 