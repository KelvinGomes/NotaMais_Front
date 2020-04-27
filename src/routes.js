import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import Detalhes_pedido from "views/Detalhes.jsx";
import Detalhes_Prestador from "views/Detalhes_Prestador.jsx";
import Pedidos from "views/Pedidos.jsx";
import UserPage from "views/User.jsx";
import Adicionar_Pedido from "views/Adicionar_Pedido.jsx";
import Login from "views/Login.jsx";
import Cadastro from "views/Cadastro.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/pedidos",
    name: "Pedidos",
    icon: "nc-icon nc-paper",
    component: Pedidos,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/perfil",
    name: "Perfil",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/detalhes_pedido",
    component: Detalhes_pedido,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/detalhes_prestador",
    component: Detalhes_Prestador,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/adicionar_pedido",
    component: Adicionar_Pedido,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/login",
    component: Login,
    layout: "/general"
  },
  {
    pro: true,
    path: "/cadastro",
    component: Cadastro,
    layout: "/general"
  }
];
export default routes;
