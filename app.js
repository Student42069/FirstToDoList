function add() {
    let text = document.getElementById("input-task").value;
    if (text != "") {
        var ul = document.getElementById("task-list");
        var li = document.createElement("li");

        var inp = document.createElement("input");
        inp.setAttribute("type", "checkbox");
        inp.setAttribute("onchange", "line(this)")
        li.appendChild(inp);

        var spa = document.createElement("span");
        spa.setAttribute("class", "task");
        spa.appendChild(document.createTextNode(text));
        li.appendChild(spa);

        var bu = document.createElement("button");
        bu.setAttribute("class", "delete-btn");
        bu.setAttribute("onclick", "remove(this)")
        bu.appendChild(document.createTextNode("X"));
        li.appendChild(bu);
        
        ul.appendChild(li);

        document.getElementById("input-task").value = "";
        save();
    }
    
}

function line(ele) {
    let li = ele.parentNode;
    li.childNodes[1].classList.toggle("line");
    save();
}

function remove(ele) {
    let li = ele.parentNode;
    let par = li.parentNode;
    par.removeChild(li);
    save();
}

function save() {
    let taskList = document.querySelector("ul").innerHTML;
    localStorage.setItem("task", JSON.stringify(taskList));
}

window.onload = function() {
    let taskList = JSON.parse(localStorage.getItem("task")) || [];
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    ul.insertAdjacentHTML("afterbegin", taskList);
    let lis = ul.children;
    for (let i = 0; li = lis[i]; i++){
        if (li.childNodes[1].classList.contains("line")) {
            li.childNodes[0].checked = true;
        } else {
            li.childNodes[0].checked = false;
        }
    }
}

let r = 0;
setInterval(function() {
    r += 1;
    document.querySelector("body").style.backgroundColor = "rgb(" + r + ",0,0)";
}, 100)