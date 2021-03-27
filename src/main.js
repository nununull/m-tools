import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { ElMessage } from 'element-plus';

const app = createApp(App);

app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app');

// 设置全局配置
app.config.globalProperties.$message = ElMessage;