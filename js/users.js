import { User, Users, users, renderUsersList } from "./usersServices.js";


document.addEventListener('DOMContentLoaded', () => {

	renderUsersList(users.getUsers())

	// Show password
	document.querySelector('#showPassword').addEventListener('click', () => {
		if ( document.querySelector('#password-text-input').type === 'password' ) {
			document.querySelector('#password-text-input').type = 'text'
		} else {
			document.querySelector('#password-text-input').type = 'password'
		}
	})


	document.querySelector('#btnAddUser').addEventListener('click', (event) => {
		event.preventDefault()

		// Create new User class instance
		const newUser = {
			"username": document.querySelector('#username-text-input').value,
			"email": document.querySelector('#email-text-input').value,
			"password": document.querySelector('#password-text-input').value,
			"devices": []
		}

		users.addUser(new User(newUser.username, newUser.email, newUser.password, []))

		// Render new users list
		renderUsersList(users.getUsers())

		sessionStorage.setItem('users', JSON.stringify(users))
	})

})