import express, {Application} from 'express';
import cors from 'cors';
import router from '@/routes';

const PORT: number = 5000;
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('api', router);

async function start() {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch(e) {
    console.log(e);
  }
}

start();