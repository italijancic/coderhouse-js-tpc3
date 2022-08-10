/**
 *	@summary file to implement code for 3rd complement challenge on js course
 *	@author Ivan Talijancic <italijancic@outlook.com>
 *
 *	Create at: 09/08/2022 - 19:45hs
 * **/

// Node js module to get an input from console
// const prompt = require('prompt-sync')()

const users = [
	{
		"username": "italijancic",
		"email": "italijancic@gmail.com",
		"password": "12345678",
		"devices": 2,
		"creationDate": "2022 - 08 - 09T23: 05: 38.244Z"
	},
	{
		"username": "cdomenje",
		"email": "cdomenje@dytsoluciones.com.ar",
		"password": "12345678",
		"devices": 3,
		"creationDate": "2022 - 08 - 09T23: 05: 38.244Z"
	},
	{
		"username": "espesot",
		"email": "espesot@dytsoluciones.com.ar",
		"password": "12345678",
		"devices": 0,
		"creationDate": "2022 - 08 - 09T23: 05: 38.244Z"
	}
]

const devices = [
	{
		"model": "T700",
		"id": "08:3a:f2:49:8d:7c",
		"name": "Sensor de Temperatura",
		"location": "Oficina dyt",
		"creationDate": "2022 - 08 - 09T23: 05: 38.241Z"
	},
	{
		"model": "CEM",
		"id": "cc:50:e3:82:f0:6a",
		"name": "Tablero General BT",
		"location": "AGENPIA",
		"creationDate": "2022 - 08 - 09T23: 05: 38.241Z"
	},
	{
		"model": "IoTgw-MT",
		"id": "8c:4b:14:10:a0:40",
		"name": "Celda MT Ensayo",
		"location": "Parque Industrial Avda",
		"creationDate": "2022 - 08 - 09T23: 05: 38.241Z"
	},
	{
		"model": "IoTgw-BT",
		"id": "8c:4b:14:0e:7f:58",
		"name": "TGBT",
		"location": "AGENPIA",
		"creationDate": "2022 - 08 - 09T23: 05: 38.241Z"
	}
]

localStorage.setItem('users', JSON.stringify(users))
localStorage.setItem('devices', JSON.stringify(devices))
// Render home tables
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


