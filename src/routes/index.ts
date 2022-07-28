import express, { Router, Request, Response } from 'express';
import { addTwoNumbers } from '../controller/mathController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

router.post('/add-two-numbers', function(req: Request, res: Response) {
  addTwoNumbers(req, res)
}); 

export default router;