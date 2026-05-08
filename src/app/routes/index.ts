import { Router } from "express";
import { UserRoute } from "../modules/user/user.route.js";
import { ClientRouter } from "../modules/client/client.route.js";
import { LawyerRouter } from "../modules/lawyer/lawyer.route.js";

const router = Router();

const moduleRoutes = [
    {
        path : "/users",
        route : UserRoute
    },
    {
        path : "/clients",
        route : ClientRouter
    },
     {
        path: "/lawyers",
        route: LawyerRouter
    }
   
]

moduleRoutes.forEach(route =>  router.use(route.path, route.route))

export default router;