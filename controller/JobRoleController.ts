import { Application, Request, Response } from "express";

const jobRoleService = require('../service/JobRoleService')

module.exports = function(app: Application) {
    app.get('/job_roles', async (req, res) => {
        let data = [];

        try {
              data = await jobRoleService.getJobRoles() 
          } catch (e) {
              console.error(e);
              res.locals.errormessage = "Failed to fetch JobRoles"
              return res.render('list-jobroles', req.body)
          }
          res.render('list-jobroles', { jobRoles: data } )
    })
}

module.exports = function(app: Application) {
    app.get('/capability', async (req, res) => {
        let data = [];

        try {
                data = await jobRoleService.getCapability() 
            } catch (e) {
                console.error(e);
                res.locals.errormessage = "Failed to fetch capabilities"
                return res.render('list-capabilities', req.body);
            }
            res.render('list-capabilities', { capabilities: data } )
    })
}