import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';
import { validateRequest } from '../../middlewares/validateRequest';
import { createCarValidationSchema, updateCarValidationSchema } from './car.validation';
import { CarController } from './car.controller';

const router = express.Router();
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(createCarValidationSchema),
  CarController.createCar,
);

router.get('/', CarController.getAllCars);

router.get('/:id', CarController.findCarById);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(updateCarValidationSchema),
  CarController.updateCarById,
);

router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  CarController.deleteCarById,
);

export const CarRoutes = router;
