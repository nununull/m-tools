import axios from "axios";
import httpApi from "@/constant/http-api";
import {ElLoading, ElMessage} from "element-plus";

let axiosInstance = axios.create({
    baseURL: httpApi.BASE.domain,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 启用cookie功能
axiosInstance.defaults.withCredentials = false;

// 包裹请求方法容器
const http = {
    http: async function (api, params, isFormData = false, isNeedLoading = true, loadingMsg = "加载中", config = {}) {

        let url = api.url;
        let method = api.method;
        let newParams = {};

        // 如果是表单请求
        if (params && isFormData) {

            newParams = new FormData();

            for (let param in params) {
                newParams.append(param, params[param]);
            }
        } else {
            newParams = params;
        }

        // 请求前放一个loading
        if (isNeedLoading) {
            // 请求前放一个loading
            loading = ElLoading.service({
                fullscreen: true,
                text: loadingMsg
            });
        }

        // 开始请求
        let response = {};

        try {
            // post
            if ("post" === method
                || "put" === method
                || "patch" === method) {
                response = await axiosInstance[method](url, newParams, config);
            } else {

                // get请求将参数放到config的params
                config.params = newParams;

                response = await axiosInstance[method](url, config);
            }

        } catch (e) {
            response = e;
        }

        return response;
    }
};

// 网络请求拦截器
let loading = null;

axiosInstance.interceptors.request.use(
    config => {

        return config;
    }, error => {

        // 关闭loading
        loading.close();

        ElMessage.error("请求发送失败！");

        console.log(error);

        return Promise.reject(error);
    });

axiosInstance.interceptors.response.use(
    response => {
        // 关闭loading
        loading.close();

        return response.data;
    }, error => {

        // 关闭loading
        loading.close();

        ElMessage.error("请求失败！");

        console.log(error);

        return Promise.reject(error);
    });

export default http;