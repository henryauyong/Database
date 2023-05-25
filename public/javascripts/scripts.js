function toggleEdit() {
    Array.from(document.getElementsByClassName("teacherCard")).forEach((element) => {
        element.classList.toggle("hover:scale-110");
    });

    Array.from(document.getElementsByClassName("mainPageEditBtn")).forEach((element) => {
        element.classList.toggle("invisible");
    });

    if(document.getElementById("mainPageToggleEditBtn").innerHTML == "DONE") {
        document.getElementById("mainPageToggleEditBtn").innerHTML = "EDIT";
    } else {
        document.getElementById("mainPageToggleEditBtn").innerHTML = "DONE";
    }

    console.log("toggleEdit");
}

function redirectToAddPage() {
    table = document.getElementById("teacherCardTable");

    url = 'https://static1.personality-database.com/profile_images/7dc21e53b91342679cc66131b60ea8b4.png';
    teacherName = 'せんせい';
    teacherTitle = '教授';

    table.innerHTML += '<div class="w-60"><div class="mainPageEditBtn flex w-full justify-between invisible"><button class="btn btn-circle btn-accent"><p>Edit</p></button><button class="btn btn-circle btn-outline btn-error"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button></div><div class="flex w-full justify-center h-cardPhoto"><div class="card w-48 bg-primary shadow-xl hover:scale-110 duration-100 teacherCard" onclick="redirectToEditPage()"><figure><img src="' + url + '" alt=""/></figure><div class="card-body"><div class="grid w-full justify-items-center"><h2 class="card-title text-neutral">' + teacherName + '</h2><p class="text-neutral">' + teacherTitle + '</p></div></div></div></div></div>';
    console.log(table.innerHTML);
}

function redirectToEditPage() {
    console.log("reDirectToEditPage");
}