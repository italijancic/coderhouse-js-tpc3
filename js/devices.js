
const devices = JSON.parse(localStorage.getItem('devices'))

// Render devices list
let deviceRowData = ''

devices.forEach((device, index) => {
	deviceRowData += `
	<tr>
		<th scope="row">${index + 1}</th>
		<td>${device.model}</td>
		<td>${device.id}</td>
		<td>${device.name}</td>
		<td>${device.location}</td>
		<td>${new Date().toLocaleString()}</td>
	</tr>`
})

document.querySelector('#devices-data').innerHTML = deviceRowData


