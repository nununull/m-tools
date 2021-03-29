import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import {ElMessage} from 'element-plus';
import Vant from 'vant';
import 'vant/lib/index.css';
import HTTP_API from "./constant/http-api";
import httpUtil from "@/util/http-util";
import cnzzAnalytics from "vue-cnzz-analytics";

const app = createApp(App);

app.use(store)
    .use(router)
    .use(ElementPlus, {locale})
    .use(Vant)
    .use(cnzzAnalytics,{
        router: router,
        siteIdList: [
            1279792411
        ],
        isDebug: false
    })
    .mount('#app');

// 设置全局配置
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$httpApi = HTTP_API;
app.config.globalProperties.$httpUtil = httpUtil;