import { createApp } from "vue";
import App from "@/App.vue";
import { createPinia } from "pinia";
// import router from "router";
import i18n from "./translation/i18n";
import router from "./routers/router.js";

const pinia = createPinia();
const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(pinia);
app.mount("#app");
