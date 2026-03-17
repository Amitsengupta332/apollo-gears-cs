import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './middlewares/globalErrorhandler';
import notFound from './middlewares/notfound';
import router from './routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Apollo Gears World!');
});

//! global error handler
//! not found route handler

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
