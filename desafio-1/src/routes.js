const routes = require('express').Router()


const projects = []

const verify = (req, res, next) => {
  const { id } = req.params
  const func = projects.find(item => item.id === id)
  if (!func) return res.json({ status: 'error' })

  next()

}

const logger = (req, res, next) => {
  const msg = `${req.method} - ${req.originalUrl}`
  console.log(msg)
  next()
}

routes.use(logger)

routes.post('/projects', async (req, res) => {
  projects.push(req.body)

  res.json(req.body)
})

routes.get('/projects', async (req, res) => {
  console.log(projects)
  res.json(projects)
})

routes.delete('/projects/:id', verify, async (req, res) => {
  const { id } = req.params
  const index = projects.indexOf(id)
  projects.splice(index, 1)
  res.json('ok')
})

routes.put('/projects/:id', verify, async (req, res) => {
  const { id } = req.params
  const func = projects.find(item => item.id === id);
  func.title = req.body.title

  res.json(func)

})

routes.post('/projects/:id/tasks', verify, async (req, res) => {
  const { id } = req.params
  const func = projects.find(item => item.id === id);
  func.tasks.push(req.body.title)

  res.json(func)
})

module.exports = routes