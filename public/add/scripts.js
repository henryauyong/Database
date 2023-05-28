function addEducationEntry() {
    if (document.getElementById("educationInput").value == "") {
        alert("請輸入學歷");
        return;
    }
    console.log("addEntry");
    console.log(document.getElementById("educationInput").value);
    educationTable.innerHTML += '<tr><td>' + document.getElementById("educationInput").value + '</td><td><button class="btn btn-sm btn-ghost educationTableDelButton">刪除</button></td></tr>';

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
    if (document.getElementById("expertiseInput").value == "") {
        alert("請輸入專長");
        return;
    }
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

// document.getElementById("addForm").addEventListener("submit", async function(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const name = formData.get("name");
//     const title = formData.get("title");
//     const email = formData.get("email");
//     const phone = formData.get("phone");
//     const photo = formData.get("photo");
//     const education = Array.from(document.getElementById("educationTable").getElementsByTagName("tr")).map((element) => {
//         return element.getElementsByTagName("td")[0].innerHTML;
//     });
//     const expertise = Array.from(document.getElementById("expertiseTable").getElementsByTagName("tr")).map((element) => {
//         return element.getElementsByTagName("td")[0].innerHTML;
//     });

//     console.log(name, title, email, phone, photo, education, expertise);

//     const res = await fetch("/add", { method: "POST", body: JSON.stringify({ name, title, email, phone, photo, education, expertise }), headers: { "Content-Type": "application/json" } });

//     if(res.status == 200) {
//         alert("新增成功");
//         window.location.href = "/success";
//     } else {
//         alert("新增失敗");
//     }
// });

async function submitForm() {

    if (document.getElementById("teacherNameInput").value == "") {
        alert("請輸入姓名");
        return;
    }
    if (document.getElementById("teacherTitleInput").value == "") {
        alert("請輸入職稱");
        return;
    }
    if (document.getElementById("teacherEmailInput").value == "") {
        alert("請輸入信箱");
        return;
    }
    if (document.getElementById("teacherPhoneInput").value == "") {
        alert("請輸入電話");
        return;
    }
    if (document.getElementById("teacherPhotoInput").value == "") {
        alert("請上傳照片");
        return;
    }
    if (document.getElementById("educationTable").getElementsByTagName("tr").length == 0) {
        alert("請新增學歷");
        return;
    }
    if (document.getElementById("expertiseTable").getElementsByTagName("tr").length == 0) {
        alert("請新增專長");
        return;
    }
    const name = document.getElementById("teacherNameInput").value;
    const title = document.getElementById("teacherTitleInput").value;
    const email = document.getElementById("teacherEmailInput").value;
    const phone = document.getElementById("teacherPhoneInput").value;
    const photo = document.getElementById("teacherPhotoInput").value;
    const education = Array.from(document.getElementById("educationTable").getElementsByTagName("tr")).map((element) => {
        return element.getElementsByTagName("td")[0].innerHTML;
    });
    const expertise = Array.from(document.getElementById("expertiseTable").getElementsByTagName("tr")).map((element) => {
        return element.getElementsByTagName("td")[0].innerHTML;
    });

    console.log(name, title, email, phone, photo, education, expertise);

    const res = await fetch("http://localhost:3000/api/add", { method: "POST", body: JSON.stringify({ name, title, email, phone, photo, education, expertise }), headers: { "Content-Type": "application/json" } })

    if (res.status == 200) {
        alert("新增成功");
        window.location.href = "/success";
    }
}