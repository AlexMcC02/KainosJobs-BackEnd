const axios = require('axios');

module.exports.getJobRoles = async function() {
    try {
        
        const response = await axios.get('http://localhost:8080/api/job_roles')
        return response.data
    } catch (e) {
        throw new Error('Could not get job roles.')
    }
}

module.exports.getSpecificationById = async function (id: number) { 
    try {
        const URL = process.env.UI_URL || 'http://localhost:8080';
        const response = await axios.get(URL + '/api/job_roles/' + id)
        
        return response.data;
    } catch (e) {
        console.log(URL + '/api/job_roles/' + id);
        console.log('Could not get specification with ID ' + id + '.');
        throw new Error('Could not find specification with the given ID.');

    }
}

