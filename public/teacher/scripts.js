let urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id'));

async function getTeacherInfo() {
    const response = await fetch('/api/getAll?id=' + urlParams.get('id'));
    const data = await response.json();

    document.getElementById("teacherName").innerHTML = data[0][0].Name;
    document.getElementById("teacherTitle").innerHTML += data[0][0].Position;
    document.getElementById("teacherEmail").innerHTML += data[0][0].Email;
    document.getElementById("teacherPhone").innerHTML += data[0][0].Phone;
    document.getElementById("teacherImage").src = '/uploads/' + data[0][0].Professor_ID;

    for (i = 0; i < data[1].length; i++) {
        educationTable.innerHTML += `
        <tr>
            <td class="text-center bg-base-200">
                ${data[1][i].Content}
            </td>
        </tr>
        `
    }

    for (i = 0; i < data[2].length; i++) {
        expertiseTable.innerHTML += `
        <tr>
            <td class="text-center bg-base-200">
                ${data[2][i].Content}
            </td>
        </tr>
        `
    }

    for(i = 0; i < data[3].length; i++) {
        if(data[3][i].Type == "校內") {
            experienceInSchoolTable.innerHTML += `
            <tr>
                <td class="text-center bg-base-200">
                    ${data[3][i].Content}
                </td>
            </tr>
            `
        } else {
            experienceOutSchoolTable.innerHTML += `
            <tr>
                <td class="text-center bg-base-200">
                    ${data[3][i].Content}
                </td>
            </tr>
            `
        }
    }

    for(i = 0; i < data[4].length; i++) {
        projectTable.innerHTML += `
        <tr>
            <td class="text-center bg-base-200">
                ${data[4][i].Name}/${data[4][i].Time}/${data[4][i].Serial_Code}/${data[4][i].Identity}
            </td>
        </tr>
        `
    }

    for(i = 0; i < data[5].length; i++) {
        paperTable.innerHTML += `
        <tr>
            <td class="text-center bg-base-200">
                ${data[5][i].Author}/${data[5][i].Title}/${data[5][i].Location}/${data[5][i].Time}
            </td>
        </tr>
        `
    }
}

getTeacherInfo();