import { createRouter, createWebHistory } from "vue-router";
import Home from "../../src/home.vue";
import Aboutus from "../components/dashboard/aboutus.vue";
import Clientsection from "../components/dashboard/clientsection.vue";
import Teamsection from "../components/dashboard/teamsection.vue";
import why from "../components/dashboard/why-section.vue";
import UserForm from "../components/Forms/userForm.vue";
import user from "../components/users/user.vue";
import Login from "../components/users/login.vue";
import SignUp from "../components/users/signup.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: Aboutus },
  { path: "/client", component: Clientsection },
  { path: "/team", component: Teamsection },
  { path: "/register", component: UserForm },
  { path: "/Login", component: Login },
  { path: "/user", component: user },
  { path: "/why", component: why },
  { path: "/signup", component: SignUp },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
