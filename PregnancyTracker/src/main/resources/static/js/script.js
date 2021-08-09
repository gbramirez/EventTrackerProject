window.addEventListener('load', function (e) {
	console.log('script.js loaded');
	init();
});

function init() {
	loadPregnancies();
	document.newPregnancyForm.submit.addEventListener('click', function (e) {
		e.preventDefault();
		let fm = document.getElementById('newPregnancyForm')
		let pregnancy = {

			weeks: fm.weeks.value,
			milestones: fm.milestones.value,
			dueDate: fm.dueDate.value
		};
		createPregnancy(pregnancy);
	});
}

function loadPregnancies() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/pregnancies');
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let pregnancies = JSON.parse(xhr.responseText);
				countPregnancies(pregnancies);
				displayPregnancies(pregnancies);
			} else {
				console.error('Request failed:' + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayPregnancies(pregnancies) {
	let table = document.getElementById("pregnancyListTable");
	let tr = document.createElement('tr');
	let td = document.createElement('td');
	let th = document.createElement('th');

	th.textContent = 'ID';
	tr.appendChild(th);
	th = document.createElement('th');

	th.textContent = 'Weeks';
	tr.appendChild(th);
	th = document.createElement('th');

	th.textContent = 'Milestones';
	tr.appendChild(th);
	th = document.createElement('th');

	th.textContent = 'Due Date';
	tr.appendChild(th);
	th = document.createElement('th');

	table.appendChild(tr);


	for (const pregnancy of pregnancies) {
		tr = document.createElement('tr');
		let td = document.createElement('td');
		td.textContent = pregnancy.id;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = pregnancy.weeks;
		tr.appendChild(td);
		td = document.createElement('td');
		let btn = document.createElement('button');
		btn.textContent = 'View Details';
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			loadDetails(pregnancy.id);
		});
		td.appendChild(btn);
		tr.appendChild(td);
		td = document.createElement('td');
		btn = document.createElement('button');
		btn.textContent = 'Delete';
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			deletePregnancy(pregnancy.id);
		});
		td.appendChild(btn);
		tr.appendChild(td);
		table.appendChild(tr);
	}
}

function countPregnancies(pregnancies) {
	let count = 0;
	let div = document.getElementById('count');
	for (const pregnancy of pregnancies) {
		count++;
	}
	let p = document.createElement('p');
	p.textContent = 'The Database contains ' + count + ' pregnancies.';
	div.appendChild(p);
}

function createPregnancy(pregnancy) {
	let xhr = new XMLHttpRequest();

	xhr.open('POST', 'api/pregnancy');

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('Request Successful');
				console.log(xhr.responseText);
				let newPregnancy = JSON.parse(xhr.responseText);
				loadPregnancies();
				location.reload();
			} else {
				console.error('Request Failed: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	let pregnancyJson = JSON.stringify(pregnancy);
	xhr.send(pregnancyJson);
}

function viewDetails(pregnancy) {
	let div = document.getElementById('pregnancyDetails');
	if (div.firstElementChild !== null) {
		div.firstElementChild.remove();
	}
	let fm = document.createElement('form');

	let input = document.createElement('input');
	input.type = 'hidden';
	input.name = 'id';
	input.id = 'id';
	input.value = pregnancy.id;
	fm.appendChild(input);

	let label = document.createElement('label');
	label.for = 'weeks';
	label.textContent = 'weeks:'
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'text';
	input.name = 'weeks';
	input.id = 'weeks';
	input.value = pregnancy.weeks;
	fm.appendChild(input);
	let br = document.createElement('br');
	fm.appendChild(br);

	label = document.createElement('label');
	label.for = 'milestones';
	label.textContent = 'milestones:'
	fm.appendChild(label);
	br = document.createElement('br');
	fm.appendChild(br);
	input = document.createElement('textarea');
	input.name = 'milestones';
	input.id = 'milestones';
	input.textContent = pregnancy.milestones;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	label = document.createElement('label');
	label.for = 'dueDate';
	label.textContent = 'Due Date:'
	fm.appendChild(label);
	input = document.createElement('input');
	input.type = 'date';
	input.name = 'dueDate';
	input.id = 'dueDate';
	input.value = pregnancy.dueDate;
	fm.appendChild(input);
	br = document.createElement('br');
	fm.appendChild(br);

	let btn = document.createElement('button');
	btn.name = 'update';
	btn.textContent = 'Update';
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		updatePregnancy(pregnancy);
	});
	fm.appendChild(btn);

	div.appendChild(fm);
}

function loadDetails(id) {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', `api/pregnancies/${id}`);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('Request Succesful');
				console.log(xhr.responseText);
				let pregnancy = JSON.parse(xhr.responseText);
				viewDetails(pregnancy);
			} else {
				console.error('Request Failed: ' + xhr.status);
			}
		}
	};
	xhr.send();
}

function deletePregnancy(id) {
	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', `api/pregnancy/${id}`);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				console.log('Request Successful');
				// let pregnancy = JSON.parse(xhr.responseText);
				loadPregnancies();
				location.reload();
			} else {
				console.error('Request Failed: ' + xhr.status);
			}
		}
	};
	xhr.send();
}

function updatePregnancy(pregnancy) {
	let pregnancyJson = {
		id: parseInt(document.getElementById('id').value),
		weeks: parseInt(document.getElementById('weeks').value),
		milestones: document.getElementById('milestones').value,
		dueDate: document.getElementById('dueDate').value
	}
	let xhr = new XMLHttpRequest();

	xhr.open('PUT', 'api/pregnancy');

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('Request Successful');
				console.log(xhr.responseText);
				let updatedPregnancy = JSON.parse(xhr.responseText);
				console.log(updatedPregnancy);
				loadPregnancies();
				location.reload();
			} else {
				console.error('Request Failed: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(pregnancyJson));
}