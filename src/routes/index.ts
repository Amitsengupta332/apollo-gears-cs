import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  //   {
  //     path: '/users',
  //     route: UserRoutes,
  //   },
  //   {
  //     path: '/cars',
  //     route: CarRoutes,
  //   },
  //   {
  //     path: '/bids',
  //     route: BidRoutes,
  //   },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  //   {
  //     path: '/rents',
  //     route: RentRoutes,
  //   },
  //   {
  //     path: '/payments',
  //     route: PaymentRoutes,
  //   },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
