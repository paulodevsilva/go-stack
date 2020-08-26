import { Router } from 'express'

const routes = Router();

routes.get('/', async (req, res) => {
  return res.json({ message: 'ggasdg' });
})

export default routes;