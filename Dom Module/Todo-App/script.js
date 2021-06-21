let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

//add event listener ek event ka wait kr rha h - click event,ki jb ye event hoga side me likha function chla dunga
btn.addEventListener("click", function() {
    //input box se value nikal rhe h
    let task = input.value;
    //ek new li element create kr rhe hai

    //input box se jo value nikali thi wo is li element me dal rhe hai
    if (task) {
        let li = document.createElement("li");
        li.innerText = task;
        input.value = "";
        li.addEventListener("dblclick", () => {
                li.remove();
            })
            //   us li element ko jo abhi create kra just ul ke ander dal rhe hai
        ul.append(li);
    }

});

input.addEventListener("keyup", (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key == "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btn.click();
    }
});