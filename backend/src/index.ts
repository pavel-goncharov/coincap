import express, {Application} from 'express';
import cors from 'cors';
import {tRPCMiddleware} from '@/routes';

const PORT: number = 5000;
const app: Application = express();
app.use(cors());
app.use('/trpc', tRPCMiddleware);

async function start() {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch(e) {
    console.log(e);
  }
}

start();