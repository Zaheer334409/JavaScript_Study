// let h1 = document.createElement("h1");

// let para = document.createTextNode("Heading Tag In jS");

// h1.appendChild(para);

// console.log(h1);

// _________

// let h1 = document.createElement("h1");

// let para = document.createTextNode("Create In jS");

// h1.appendChild(para);

// console.log(h1);

// _________

// let h1 = document.getElementById("h1_heading");

// console.log(h1.getAttribute("class"));

// console.log(h1.getAttribute("title"));

// console.log(h1.getAttribute("style"));

// has_Attribute just result "ture"_and_"false"_____.

// console.log(h1.hasAttribute("class"));

// console.log(h1.hasAttribute("title"));

// console.log(h1.hasAttribute("style"));

// _________

// let bodyEl = document.childNodes[1].childNodes[2];

// let p = document.createElement("p");

// let first_Text = document.createTextNode("This is ");

// let last_Text = document.createTextNode(" !");

// let em = document.createElement("em");

// let middle_Text = document.createTextNode("Important");

// em.appendChild(middle_Text);

// p.appendChild(first_Text);

// p.appendChild(em);

// p.appendChild(last_Text);

// bodyEl.appendChild(p); 

// console.log(p);

// _________

let input = document.getElementById("input");
let message = document.getElementById("msg");

let ul = document.childNodes[1].childNodes[2];

function add() {
    if (input.value === "") {
        message.innerHTML = "Input is Empty";
        message.style.color = "red";
    } else {
        let li = document.createElement("li");
        let text = document.createTextNode(input.value);

        let complateBtn = document.createElement("button");
        let complateBtnText = document.createTextNode("Complate");

        complateBtn.appendChild(complateBtnText);

        complateBtn.addEventListener("click", function () {
            li.style.textDecoration = "line-through";
            saveTasks(); //local Storage 
        })

        let button = document.createElement("button");
        let btnText = document.createTextNode("Delete");

        button.appendChild(btnText);


        button.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(text);
        li.append(complateBtn)
        li.appendChild(button);
        ul.appendChild(li);

    }
}

// local Storage 
function saveTasks() {
    let tasks = [];
    ul.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.style.textDecoration === "line-through"
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}