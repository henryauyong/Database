function addEntry() {
    console.log("addEntry");
    console.log(document.getElementById("educationInput").value);
    educationTable.innerHTML += '<tr><td>' + document.getElementById("educationInput").value + '</td><td><button class="btn btn-sm btn-ghost educationTableDelButton">刪除</button></td></tr>'
    
    Array.from(document.getElementsByClassName("educationTableDelButton")).forEach((element) => {
        element.addEventListener("click", () => {
            element.parentElement.parentElement.remove();
            console.log("delete");
        });
        // console.log("owo");
    });

    document.getElementById("educationInput").value = "";
}

function addExpertiseEntry() {
    console.log("addEntry");
    console.log(document.getElementById("expertiseInput").value);
    expertiseTable.innerHTML += '<tr><td>' + document.getElementById("expertiseInput").value + '</td><td><button class="btn btn-sm btn-ghost expertiseTableDelButton">刪除</button></td></tr>'
    
    Array.from(document.getElementsByClassName("expertiseTableDelButton")).forEach((element) => {
        element.addEventListener("click", () => {
            element.parentElement.parentElement.remove();
            console.log("delete");
        });
        // console.log("owo");
    });

    document.getElementById("expertiseInput").value = "";
}