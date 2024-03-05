import Home from "../pages/Home";
import Login from "../pages/admin/login";
import paceProduct from "../pages/pace-product";
import config from "../config";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.productPace, component: paceProduct}
]

const privateRoutes = [
    { path: config.localRoutes.admin, component: Login }
]


export { publicRoutes, privateRoutes }