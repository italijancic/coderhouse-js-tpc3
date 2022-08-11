import { User, Users, users, renderUsersList } from "./usersServices.js";
import { Device, Devices, devices, renderDevicesList} from "./devicesServices.js"

document.addEventListener('DOMContentLoaded', () => {

	renderUsersList(users.getUsers())

})