/* Express App */
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

/* My express App */
export default function expressApp(functionName) {
  const app = express()
  const router = express.Router()

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`;

  /* define routes */
  router.get('/', (req, res) => {
    res.send('Hello World!!!')
  })

  router.get('/users', (req, res) => {
    res.json({
      users: [
        {
          name: 'steve',
        },
        {
          name: 'joe',
        },
      ],
    })
  });

  // Setup routes
  app.use(routerBasePath, router)

  // Apply express middlewares
  router.use(cors())
  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: true }))

  return app
}