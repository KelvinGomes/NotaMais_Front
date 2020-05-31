import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import Detalhes_pedido from "views/Detalhes.jsx";
import Detalhes_Prestador from "views/Detalhes_Prestador.jsx";
import Publicar_Proposta from "views/Publicar_Proposta.jsx";
import Pedidos from "views/Pedidos.jsx";
import UserPage from "views/User.jsx";
import Adicionar_Pedido from "views/Adicionar_Pedido.jsx";
import Login from "views/Login.jsx";
import Cadastro from "views/Cadastro.jsx";
import Quiz_Descricao from "views/Quiz_Descricao";
import Not_Found from "views/Not_Found";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/icons",
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
    pro: true,
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
    path: "/quiz_descricao",
    component: Quiz_Descricao,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/not_found",
    component: Not_Found,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/detalhes_pedido/:id",
    component: Detalhes_pedido,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/detalhes_prestador/:id",
    component: Detalhes_Prestador,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/proposta",
    component: Publicar_Proposta,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/typography",
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
