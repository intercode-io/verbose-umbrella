/* Express App */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { send } from "./emailService";

/* My express App */
export default function expressApp(functionName) {
  const app = express();
  const router = express.Router();

  // Apply express middlewares
  router.use(cors())
  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: true }));


  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`;

  /* define routes */
  router.get('/', (req, res) => {
    res.status(200).json({ ok: true });
  });

  router.post('/', async (req, res) => {
    const result = await send(req.body);
    res.status(200).json({ sent: result });
  })

  // Setup routes
  app.use(routerBasePath, router);


  return app;
};