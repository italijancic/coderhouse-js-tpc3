/**
 *	@summary file to implement code for 3rd complement challenge on js course
 *	@author Ivan Talijancic <italijancic@outlook.com>
 *
 *	Create at: 09/08/2022 - 19:45hs
 * **/


// Node js module to get an input from console
// const prompt = require('prompt-sync')()


// localStorage.setItem('users', JSON.stringify(users))
// localStorage.setItem('devices', JSON.stringify(devices))

import { User, Users, users, renderUsersList } from "./usersServices.js"
import { Device, Devices, devices, renderDevicesList  } from "./devicesServices.js"

document.addEventListener('DOMContentLoaded', () => {

	// Render users table
	renderUsersList(users.getUsers())
	// Render devices table
	renderDevicesList(devices.getDevices())

})

