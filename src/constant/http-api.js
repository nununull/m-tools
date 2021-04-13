const HTTP_API = {
        BASE: {
            OK: {
                title: "OK资源网",
                name: "OK资源网",
                domain: "https://api.okzy.tv/api.php/provide/vod/at/json",
                type: "ok"
            },
            BAIDU:{
                title: "百度云资源",
                name: "百度云资源",
                domain: "http://help.apibdzy.com/#wlcome",
                type: "baidu"
            }
        },
        SERVICE: {
            OK: {
                page: {
                    name: "资源列表",
                    url: "https://api.okzy.tv/api.php/provide/vod/at/json",
                    method: "get"
                },
                detail: {
                    name: "资源明细",
                    url: "https://api.okzy.tv/api.php/provide/vod/at/json",
                    method: "get"
                }
            },
            BAIDU: {
                page: {
                    name: "资源列表",
                    url: "https://api.apibdzy.com/api.php/provide/vod/?ac=list",
                    method: "get"
                },
                detail: {
                    name: "资源明细",
                    url: "https://api.apibdzy.com/api.php/provide/vod/?ac=detail",
                    method: "get"
                }
            },
            config: {
                name: "系统设置",
                url: "https://cdn.jsdelivr.net/gh/ufun-app/static@latest/json/config.json",
                method: "get"
            }
        }
    }
;

export default HTTP_API;