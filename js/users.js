
const users = JSON.parse(localStorage.getItem('users'))

// Render users list
let usersRowData = ''

users.forEach((user, index) => {
	usersRowData += `
	<tr>
		<th scope="row">${index + 1}</th>
		<td>${user.username}</td>
		<td>${user.email}</td>
		<td>${user.password}</td>
		<td>${user.devices}</td>
		<td>${new Date().toLocaleString()}</td>
	</tr>`
})

document.querySelector('#users-data').innerHTML = usersRowData
