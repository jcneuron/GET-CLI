// Exercise 6:
// Use ‘axios’ and the ClickUp API to display each user’s name
//refers to yargs module
const yargs = require('yargs');
const chalk = require('chalk');

//refers to js file
const getUser = require('./clickup.js');

//refers to axios module
const axios = require('axios');

//POST request url --> https://jsapi.apiary.io/apis/clickup20/reference/0/tasks/create-task.html
//link to use:            https://api.clickup.com/api/v2/list/list_id/task
//list_id = 25214909 from https://app.clickup.com/2331408/v/l/li/25214909
const url = 'https://api.clickup.com/api/v2/list/25214909/member';

//API token in settings->Apps->generate
//https://jsapi.apiary.io/apis/clickup20/introduction/authentication.html
const token = 'pk_4235004_1QFR20XOHXEFJ4ZHXN2JYOVQFW0OQF56';
// const oauth = '1495561_42300b34085acc663053454536924508a6cd70c2'
// "id": 4235004,
//             "username": "Juan Uribe",

yargs
	.command({
		// '{"name":"Section 6","content":"description","tags":["tag"],"status":"Accepted","priority":2}',
		// node index.js add 'Section 6' 'description' 'tag' 'Accepted' '2'
		command: 'get',
		desc: 'display each user’s id and name',

		handler: (argv) => {
			this.members = argv;
			this.members = argv;
			getUser(url, token);
			// console.log(chalk.red('Users displayed ' + argv));
			setTimeout(function() {}, 10000);
		}
	})
	.demandCommand(1, 'Please choose at least one command:')
	.help()
	.wrap(72).argv;

//references and passes params to the function in index.js

yargs.parse();
