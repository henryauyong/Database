let educationTableIndex = 0;
let expertiseTableIndex = 0;
let experienceTableIndex = 0;

function addEducationEntry() {
    if (document.getElementById("educationInput").value == "") {
        alert("請輸入學歷");
        return;
    }
    console.log("addEducationEntry");
    console.log(document.getElementById("educationInput").value);
    educationTable.innerHTML += '<tr><td><input type="hidden" name="educationTableEntry' + educationTableIndex + '" value="' + document.getElementById("educationInput").value + '">' + document.getElementById("educationInput").value + '</td><td><div class="flex w-full justify-end"><button class="btn btn-sm btn-outline btn-error educationTableDelButton" type="button">刪除</button></div></td></tr>';

    Array.from(document.getElementsByClassName("educationTableDelButton")).forEach((element) => {
        element.addEventListener("click", () => {
            element.parentElement.parentElement.parentElement.remove();
            console.log("delete");
        });
        // console.log("owo");
    });

    document.getElementById("educationInput").value = "";
    educationTableIndex++;
}

function addExpertiseEntry() {
    if (document.getElementById("expertiseInput").value == "") {
        alert("請輸入專長");
        return;
    }
    console.log("addExpertiseEntry");
    console.log(document.getElementById("expertiseInput").value);
    expertiseTable.innerHTML += '<tr><td><input type="hidden" name="expertiseTableEntry' + expertiseTableIndex + '" value="' + document.getElementById("expertiseInput").value + '">' + document.getElementById("expertiseInput").value + '</td><td><div class="flex w-full justify-end"><button class="btn btn-sm btn-outline btn-error expertiseTableDelButton" type="button">刪除</button></div></td></tr>'

    Array.from(document.getElementsByClassName("expertiseTableDelButton")).forEach((element) => {
        element.addEventListener("click", () => {
            element.parentElement.parentElement.parentElement.remove();
            console.log("delete");
        });
        // console.log("owo");
    });

    document.getElementById("expertiseInput").value = "";
    expertiseTableIndex++;
}

function addExperienceEntry() {
    if (document.getElementById("experienceInput").value == "") {
        alert("請輸入經歷");
        return;
    }
    let type = "校內";
    if(document.getElementById("experienceTypeInput").checked) type = "校外";
    
    experienceTable.innerHTML += '<tr><td><input type="hidden" name="experienceType' + experienceTableIndex + '" value="' + type + '" />' + type + '</td><td><input type="hidden" name="experienceEntry' + experienceTableIndex + '" value="' + document.getElementById("experienceInput").value + '" />' + document.getElementById("experienceInput").value + '</td><td><div class="flex w-full justify-end"><button class="btn btn-sm btn-outline btn-error experienceTableDelButton" type="button">刪除</button></div></td></tr>'

    Array.from(document.getElementsByClassName("experienceTableDelButton")).forEach((element) => {
        element.addEventListener("click", () => {
            element.parentElement.parentElement.parentElement.remove();
            console.log("delete");
        });
        // console.log("owo");
    });
    
    experienceInput.value = "";
    experienceTableIndex++;
}