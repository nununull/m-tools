const HTTP_API = {
        BASE: {
            OK: {
                title: "OK资源网",
                name: "OK资源网",
                domain: "https://api.okzy.tv/api.php/provide/vod/at/json"
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
            config: {
                name: "系统设置",
                url: "https://cdn.jsdelivr.net/gh/ufun-app/static@latest/json/config.json",
                method: "get"
            }
        }
    }
;

export default HTTP_API;