import express from "express";
import { PaymentController } from "./payment.controller";

const router = express.Router();

// Define routes
router.post(
  "/create-payment-intent",
  // auth(USER_ROLE.user), // Add auth middleware if needed
  PaymentController.createPaymentIntent,
);

router.post(
  "/confirm",
  // auth(USER_ROLE.user),
  PaymentController.confirmPayment,
);
export const PaymentRoutes = router;
