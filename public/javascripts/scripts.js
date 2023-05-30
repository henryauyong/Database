let editMode = 0;

async function getTeacherInfo() {
    const response = await fetch("/api/getMain");
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        teacherCardTable.innerHTML += `
    <div class="indicator hover:scale-110 duration-100" id="indicator${data[i].Professor_ID}">
    <input type="hidden" value="${data[i].Professor_ID}" id="deleteInput${data[i].Professor_ID}" class="deleteInput"/>
        <input type="checkbox" 
            class="checkbox checkbox-error indicator indicator-item badge badge-error deleteCheckbox invisible" id="deleteCheckbox${data[i].Professor_ID}"/>
        <div class="flex w-full justify-center h-cardPhoto">
            <div class="card w-48 bg-primary shadow-xl teacherCard" id="${data[i].Professor_ID}">
                <figure>
                    <div class="avatar">
                        <div class="w-48 rounded">
                        <img src="/uploads/${data[i].Professor_ID}"/>
                        </div>
                    </div>
                </figure>
                <div class="card-body">
                    <div class="grid w-full justify-items-center">
                        <h2 class="card-title text-neutral">${data[i].Name}</h2>
                        <p class="text-neutral">${data[i].Position}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }

    Array.from(document.getElementsByClassName("teacherCard")).forEach((element) => {
        element.addEventListener("click", () => {
            if (editMode) {
                window.location.href = "/edit?id=" + element.id;
            }
        });
    });

    Array.from(document.getElementsByClassName("deleteCheckbox")).forEach((element) => {
        element.addEventListener("click", () => {
            if (element.checked) {
                console.log("Delete: " + element.id.replace("deleteCheckbox", ""));
                document.getElementById("deleteInput" + element.id.replace("deleteCheckbox", "")).setAttribute("name", "teacherId");
            } else {
                console.log("Cancel: " + element.id.replace("deleteCheckbox", ""));
                document.getElementById("deleteInput" + element.id.replace("deleteCheckbox", "")).removeAttribute("name");
            }
        });
    });

    console.log(data.length);
}

function toggleEdit() {
    Array.from(document.getElementsByClassName("deleteCheckbox")).forEach((element) => {
        element.classList.toggle("invisible");
    });

    if (document.getElementById("mainPageToggleEditBtn").innerHTML == "取消") {
        document.getElementById("mainPageToggleEditBtn").innerHTML = "編輯";
        mainPageDeleteBtn.classList.add("btn-disabled");
        Array.from(document.getElementsByClassName("deleteCheckbox")).forEach((element) => {
            element.checked = false;
        });
        Array.from(document.getElementsByClassName("deleteInput")).forEach((element) => {
            element.removeAttribute("name");
        });
        mainPageSelectAllCheckbox.checked = false;
        mainPageSelectAllCheckbox.setAttribute("disabled", "");
        mainPageSelectAll.classList.add("invisible");
        editMode = 0;
    } else {
        document.getElementById("mainPageToggleEditBtn").innerHTML = "取消";
        mainPageDeleteBtn.classList.remove("btn-disabled");
        mainPageSelectAllCheckbox.removeAttribute("disabled");
        mainPageSelectAll.classList.remove("invisible");
        editMode = 1;
    }

    console.log("toggleEdit");
}

function redirectToAddPage() {
    window.location.href = "/add"
}

function selectAll() {
    
}

mainPageSelectAllCheckbox.addEventListener("click", () => {
    if (mainPageSelectAllCheckbox.checked) {
        Array.from(document.getElementsByClassName("deleteCheckbox")).forEach((element) => {
            element.checked = true;
            document.getElementById("deleteInput" + element.id.replace("deleteCheckbox", "")).setAttribute("name", "teacherId");
        });
    } else {
        Array.from(document.getElementsByClassName("deleteCheckbox")).forEach((element) => {
            element.checked = false;
            document.getElementById("deleteInput" + element.id.replace("deleteCheckbox", "")).removeAttribute("name");
        });
    }
});

getTeacherInfo();