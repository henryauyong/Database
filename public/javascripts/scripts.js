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
                window.location.href = "/teacher?id=" + element.id;
        });
    });

    console.log(data.length);
}

function login() {
    if (username.value == "admin" && password.value == "admin") {
        window.location.href = "/admin";
    } else {
        alert("使用者名稱或密碼錯誤！");
    }
}

getTeacherInfo();