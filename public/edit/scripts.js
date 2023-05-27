let urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.get('id'));

async function getTeacherInfo() {
    const response = await fetch('/api/get?id=' + urlParams.get('id'));
    const data = await response.json();

    document.getElementById('teacherId').value = data[0].Professor_ID;
    document.getElementById('teacherName').value = data[0].Name;
    document.getElementById('teacherTitle').value = data[0].Position;
    document.getElementById('teacherEmail').value = data[0].Email;
    document.getElementById('teacherPhone').value = data[0].Phone;
    document.getElementById('teacherImage').src = '/uploads/' + data[0].Professor_ID + ".png";
}

getTeacherInfo();