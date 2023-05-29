let educationTableIndex = 0;
let expertiseTableIndex = 0;
let experienceTableIndex = 0;
let projectTableIndex = 0;
let paperTableIndex = 0;

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
    if (document.getElementById("experienceTypeInput").checked) type = "校外";

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

function addProjectEntry() {
    if (document.getElementById("projectNameInput").value == "") {
        alert("請輸入計畫名稱");
        return;
    }
    if (document.getElementById("projectTimeInput").value == "") {
        alert("請輸入計畫時間");
        return;
    }
    if (document.getElementById("projectSerialInput").value == "") {
        alert("請輸入計畫編號");
        return;
    }
    if (document.getElementById("projectIdentityInput").value == "") {
        alert("請輸入計畫身份");
        return;
    }

    console.log("addProjectEntry");
    projectTable.innerHTML += '<tr><td><input type="hidden" name="projectName' + projectTableIndex + '" value="' + document.getElementById("projectNameInput").value + '" />' + document.getElementById("projectNameInput").value + '</td><td><input type="hidden" name="projectTime' + projectTableIndex + '" value="' + document.getElementById("projectTimeInput").value + '" />' + document.getElementById("projectTimeInput").value + '</td><td><input type="hidden" name="projectSerial' + projectTableIndex + '" value="' + document.getElementById("projectSerialInput").value + '" />' + document.getElementById("projectSerialInput").value + '</td><td><input type="hidden" name="projectIdentity' + projectTableIndex + '" value="' + document.getElementById("projectIdentityInput").value + '" />' + document.getElementById("projectIdentityInput").value + '</td><td><div class="flex w-full justify-end"><button class="btn btn-sm btn-outline btn-error projectTableDelButton" type="button">刪除</button></div></td></tr>'

    Array.from(document.getElementsByClassName("projectTableDelButton")).forEach((element) => {
        element.addEventListener("click", () => {
            element.parentElement.parentElement.parentElement.remove();
            console.log("delete");
        });
        // console.log("owo");
    });

    projectNameInput.value = "";
    projectTimeInput.value = "";
    projectSerialInput.value = "";
    projectIdentityInput.value = "";

    projectTableIndex++;
}

function addPaperEntry() {
    if (document.getElementById("paperAuthorInput").value == "") {
        alert("請輸入論文作者");
        return;
    }
    if (document.getElementById("paperTitleInput").value == "") {
        alert("請輸入論文名稱");
        return;
    }
    if (document.getElementById("paperLocationInput").value == "") {
        alert("請輸入論文刊登位置");
        return;
    }
    if (document.getElementById("paperTimeInput").value == "") {
        alert("請輸入論文刊登時間");
        return;
    }

    console.log("addPaperEntry");
    paperTable.innerHTML += '<tr><td><input type="hidden" name="paperAuthor' + paperTableIndex + '" value="' + document.getElementById("paperAuthorInput").value + '" />' + document.getElementById("paperAuthorInput").value + '</td><td><input type="hidden" name="paperTitle' + paperTableIndex + '" value="' + document.getElementById("paperTitleInput").value + '" />' + document.getElementById("paperTitleInput").value + '</td><td><input type="hidden" name="paperLocation' + paperTableIndex + '" value="' + document.getElementById("paperLocationInput").value + '" />' + document.getElementById("paperLocationInput").value + '</td><td><input type="hidden" name="paperTime' + paperTableIndex + '" value="' + document.getElementById("paperTimeInput").value + '" />' + document.getElementById("paperTimeInput").value + '</td><td><div class="flex w-full justify-end"><button class="btn btn-sm btn-outline btn-error paperTableDelButton" type="button">刪除</button></div></td></tr>'

    Array.from(document.getElementsByClassName("paperTableDelButton")).forEach((element) => {
        element.addEventListener("click", () => {
            element.parentElement.parentElement.parentElement.remove();
            console.log("delete");
        });
        // console.log("owo");
    });

    paperAuthorInput.value = "";
    paperTitleInput.value = "";
    paperLocationInput.value = "";
    paperTimeInput.value = "";

    paperTableIndex++;
}