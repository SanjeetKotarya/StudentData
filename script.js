const data = 'people.json'

fetch(data)
	.then(response => response.json())
	.then(data => {
		const tableBody = document.querySelector('#students-table');
		data.forEach(student => {
			const row = document.createElement('tr');
			const rollNumber = document.createElement('td');
			rollNumber.innerText = student.rollNumber;
			const department = document.createElement('td');
			department.innerText = student.department;
			const hostelName = document.createElement('td');
			hostelName.innerText = student.hostelName;
			row.appendChild(rollNumber);
			row.appendChild(department);
			row.appendChild(hostelName);
			tableBody.appendChild(row);
		});
	})