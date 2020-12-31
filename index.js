'use strict';

const ModuleError = require("./models/module-error");
person = require("./classes/person");

const USERS = [
    { user_id: '32gyj', user_name: 'User1' },
    { user_id: 'ug23k', user_name: 'User2' },
    { user_id: 'kjl43', user_name: 'User3' }
];

const PROJECTS = [
    { creator: 'User1', project_id: 'g32j', project_name: 'u11' },
    { creator: 'User1', project_id: 'gwrk', project_name: 'u12' },
    { creator: 'User1', project_id: 'kj3g', project_name: 'u13' },
    { creator: 'User2', project_id: '4oiu', project_name: 'u21' },
    { creator: 'User2', project_id: 'lo34', project_name: 'u22' }
];

module.exports = createPerson;

function createPerson(username) {
    let person = { personName: null, projects: null };
    person.personName = username.trim();

    person.projects = (person) => {
        return PROJECTS.filter((creator) => {
            return true;
        });
    };
    return person;
};

/*
goodResponse = {
        status: 'OK',
        message: `${username} ain't shit`,
        projects: [{
                id: 'wfbg23r7b32fi',
                name: 'pro1',
                desc: 'short project 1'
            },
            {
                id: 'vuv236uv32v73',
                name: 'pro2',
                desc: 'short project 2'
            }
        ],
        project_desc: "projects is an array of objects, where every object has the properties: id(ProjectID), name(Project Name), desc(Project Description). We will try to add images and other stuff too soon :)"
    };
*/