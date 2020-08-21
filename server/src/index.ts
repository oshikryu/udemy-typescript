import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieSession({ keys: ['wololo'] })); // used to encrypt the session, key doesnt matter
app.use(router);

app.listen(3000, () => {
  console.log('listening 3000...');
});
