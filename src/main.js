import { createApp } from "vue";
import router from "./router/router";
import App from "./App.vue";
import directives from "./directives";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import components from './components/UI';
const app = createApp(App);

components.forEach(item => {
    app.component(item.name, item);
});

directives.forEach(item => {
    app.directive(item.name, item);
});



app
.use(router)
.use(store)
.mount("#app");
