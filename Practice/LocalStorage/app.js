
const form = document.getElementById('student-form');
const nameInput = document.getElementById('student-name');
const rollInput = document.getElementById('roll-no');
const list = document.getElementById('students-list');

function loadStudents() {
    const stored = localStorage.getItem('studentInfo');
    const students = stored ? JSON.parse(stored) : [];
    list.innerHTML = '';
    students.forEach((s, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${s.studentName} — Roll: ${s.rollNo}`;
        list.appendChild(li);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const studentName = nameInput.value.trim();
    const rollNo = rollInput.value.trim();

    if (!studentName || !rollNo) {
        alert('Please fill all fields');
        return;
    }

    const stored = localStorage.getItem('studentInfo');
    const allStudents = stored ? JSON.parse(stored) : [];

    const student = { studentName, rollNo: Number(rollNo) };
    allStudents.push(student);
    localStorage.setItem('studentInfo', JSON.stringify(allStudents));

    loadStudents();
    nameInput.value = '';
    rollInput.value = '';
});

loadStudents();
