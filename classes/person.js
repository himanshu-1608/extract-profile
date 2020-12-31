const projectsById = require('../')

export default class person {
    constructor(username) {
        this.personName = username;
        this.projects = [];
    }

    getPersonName() {
        return this.personName;
    }

    getProjects() {
        return this.projects;
    }

    getProjectById() {
        return
    }
}