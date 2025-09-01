// // console.log("Hello World");


// let input = document.getElementById("input");

// let para = document.getElementById("para");

// let ul = document.childNodes[1].childNodes[2];

// function add() {
//     if (input.value == "") {
//         para.innerHTML = "Empty Item";
//         para.style.color = "red";
//     }

//     else {
//         let li = document.createElement("li");
//         let liText = document.createTextNode(input.value);

//         // delete btn
//         let button = document.createElement("button");
//         let btnText = document.createTextNode("Delete");

//         button.appendChild(btnText);

//         // edit btn
//         let Editbutton = document.createElement("button");
//         let EditbtnText = document.createTextNode("Edit");

//         Editbutton.appendChild(EditbtnText);

//         // delete btn work
//         button.addEventListener("click", function () {
//             li.remove();
//         });

//         // edit btn work
//         Editbutton.addEventListener("click", function () {
//             let edittext = li.innerText
//             if (edittext) {
//                 input.innerText = edittext
//             }
//         });

//         li.appendChild(liText);
//         li.appendChild(button);
//         li.appendChild(Editbutton);
//         ul.appendChild(li);


//         input.value = ""
//     }
// }
// sir ka code ________>>



// let h1 = document.createElement("h1");

// let para = document.createTextNode("This is a paragraph");

// h1.appendChild(para);


// let bodyEl = document.childNodes[1].childNodes[2];

// bodyEl.appendChild(h1);


/* 
    <p>
        This is
        <em>Important</em>
        !
    </p>
*/


// let bodyEl = document.childNodes[1].childNodes[2];
// let p = document.createElement("p");

// let firstText = document.createTextNode("This is ");
// let lastText = document.createTextNode(" !");

// let em = document.createElement("em");
// let middleText = document.createTextNode("Important");
// em.appendChild(middleText);

// p.appendChild(firstText)
// p.appendChild(em)
// p.appendChild(lastText)

// bodyEl.appendChild(p);

// console.log(p)








/* 

h1 Shopping Cart
input create a button with the input with the name Add
create a ul
check if the user has left the input field empty show error
whatever is in the input add it to the ul

*/
/*
let input = document.getElementById("input");
let para = document.getElementById("para");
let ul = document.childNodes[1].childNodes[2].childNodes[11];



function add(){
    if(input.value === ""){
        para.innerHTML = "input is empty";
        para.style.color = "red";
    }else {
        let li = document.createElement("li");
        let text = document.createTextNode(input.value)

        let deleteButton = document.createElement("button")
        let deleteButtonText = document.createTextNode("Delete");
        button.setAttribute("onClick", "removeItem(this)");

        let EditButton = document.createElement("button")
        let EditButtonText = document.createTextNode("Edit");
        button1.setAttribute("onClick", "updateItem(this)");

        deleteButton.appendChild(deleteButtonText);
        EditButton.appendChild(EditButtonText);
        li.appendChild(text);
        li.appendChild(deleteButton);
        li.appendChild(EditButton);
        ul.appendChild(li);

        input.value = ""
    }
}

function removeItem (targetEl) {
    let li = targetEl.parentNode;
    let parentUl = targetEl.parentNode.parentNode;
    parentUl.removeChild(li);
}

function updateItem () {

}

// ------------------ Task -------
// CRUD Create, Read, Update, Delete




// remove 
// EventFire



// let h1 = document.getElementById("heading");
// h1.hasAttribute("class")
// h1.getAttribute("title")
// h1.setAttribute("onClick", "alert('This is a heading')")
// console.log();


// let div1 = document.getElementById("div-1");
// let special = document.getElementById("special");
// let div2 = div1.childNodes[1];

// let h1 = document.createElement("h1");
// let text = document.createTextNode("Hello DOM");

// let fullH1 = h1.appendChild(text);



// div2.firstChild.appendChild(fullH1);

// div2.insertBefore(fullH1, special);

// div2.removeChild(div2.lastChild.previousSibling)

// console.log(special.parentNode.parentNode.parentNode.nodeName = "Talal");


// console.log(div2.firstChild.nextSibling.nextSibling.nextSibling);
// console.log(div2.lastChild.previousSibling.previousSibling.previousSibling);

// ai__________gpt

// let button = document.createElement("button");
// let btnText = document.createTextNode("JS Main");

// // Text ko button me add kiya
// button.appendChild(btnText);

// // Attribute add karna hai (string me likhna hoga)
// button.setAttribute("title", "This me btn");

// // Ab button ko document me show karna hoga// let input = document.getElementById("input");
// let msgEl = document.getElementById("message");
// let ul = document.childNodes[1].childNodes[2].childNodes[11];



// function add(){
//     if(input.value === ""){
//         msgEl.innerHTML = "input is empty";
//         msgEl.style.color = "red";
//     }else {
//         let li = document.createElement("li");
//         let text = document.createTextNode(input.value)

//         let deleteButton = document.createElement("button")
//         let deleteButtonText = document.createTextNode("Delete");
//         button.setAttribute("onClick", "removeItem(this)");

//         let EditButton = document.createElement("button")
//         let EditButtonText = document.createTextNode("Edit");
//         button1.setAttribute("onClick", "updateItem(this)");

//         deleteButton.appendChild(deleteButtonText);
//         EditButton.appendChild(EditButtonText);
//         li.appendChild(text);
//         li.appendChild(deleteButton);
//         li.appendChild(EditButton);
//         ul.appendChild(li);

//         input.value = ""
//     }
// }

// function removeItem (targetEl) {
//     let li = targetEl.parentNode;
//     let parentUl = targetEl.parentNode.parentNode;
//     parentUl.removeChild(li);
// }

// function updateItem () {

// }

// document.body.appendChild(button);


// ---
*/

let input = document.getElementById("input");
let msgEl = document.getElementById("message");
let ul = document.childNodes[1].childNodes[2].childNodes[11];



function add(){
    if(input.value === ""){
        msgEl.innerHTML = "input is empty";
        msgEl.style.color = "red";
    }else {
        let li = document.createElement("li");
        let text = document.createTextNode(input.value)

        let deleteButton = document.createElement("button")
        let deleteButtonText = document.createTextNode("Delete");
        button.setAttribute("onClick", "removeItem(this)");

        let EditButton = document.createElement("button")
        let EditButtonText = document.createTextNode("Edit");
        button1.setAttribute("onClick", "updateItem(this)");

        deleteButton.appendChild(deleteButtonText);
        EditButton.appendChild(EditButtonText);
        li.appendChild(text);
        li.appendChild(deleteButton);
        li.appendChild(EditButton);
        ul.appendChild(li);

        input.value = ""
    }
}

function removeItem (targetEl) {
    let li = targetEl.parentNode;
    let parentUl = targetEl.parentNode.parentNode;
    parentUl.removeChild(li);
}

function updateItem () {

}
