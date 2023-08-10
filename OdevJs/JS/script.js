let ulList = document.getElementById("list")
let inputText = document.getElementById("task")
let bosToast = document.getElementsByClassName("toast-body")







function newElement(event) {
    event.preventDefault();
    if(inputText.value.length > 0 && inputText.value.trim() != "") { 
        const newLi = document.createElement("li");
        newLi.innerHTML = inputText.value;
        newLi.classList.add(`mb-1`)
        const delBtn = document.createElement("button");
        delBtn.innerHTML = ("X")
        delBtn.className =("delBtn")
        ulList.appendChild(newLi);
        newLi.appendChild(delBtn);
        inputText.value = ("");
        newLi.addEventListener(`click`, () => {
            if(newLi.classList.contains(`active`)) {
                newLi.classList.remove(`active`, `bg-info`, `fw-bold`, `text-light`);
            }else {
                newLi.classList.add(`active`, `bg-info`, `fw-bold`, `text-light`);
            }
        })
        delBtn.addEventListener("click", function(){
            newLi.remove();
        })
    }else {
        console.log("Boş Ekleme Yapılamaz")
    }
}




