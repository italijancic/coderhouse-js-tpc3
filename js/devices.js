import { Device, Devices, devices, renderDevicesList } from "./devicesServices.js";
import { User, Users, users, renderUsersList } from "./usersServices.js";


document.addEventListener('DOMContentLoaded', () => {

	renderDevicesList(devices.getDevices())

})