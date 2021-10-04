const createUser = require('../functions/createUser/index');
// const getUser = require('../functions/getUserProfile/index');
const mock = require('./mock.json');

const createUserEvent = {
    body: JSON.stringify(mock.createUser)
}

createUser.handler(createUserEvent).then(console.log);

// getUser.handler().then(console.log)