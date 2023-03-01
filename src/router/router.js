import Main from "../pages/Main.vue";
import PostPage from "../pages/PostPage.vue";
import About from "../pages/About.vue";
import PostId from "../pages/PostId.vue";
import PostPageWithStore from "../pages/PostPageWithStore.vue";
import PostPageCompostion from "../pages/PostPageCompostion.vue";
import PostPageApi2 from "../pages/PostPageApi2.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/post',
        component: PostPage,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/post/:id',
        component: PostId,
    },
    {
        path: '/store',
        component: PostPageWithStore,
    },
    {
        path: '/composition',
        component: PostPageCompostion,
    },
    {
        path: '/api',
        component: PostPageApi2,
    },
]




const router = createRouter({
    routes,
    history: createWebHistory()
});


export default router;