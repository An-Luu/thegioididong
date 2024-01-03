import Home from "../pages/Home";
import config from "../config";

const publicRoutes = [
    { path: config.routes.home, component: Home },
]

const privateRoutes = [

]


export { publicRoutes, privateRoutes }