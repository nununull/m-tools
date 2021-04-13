import httpApi from "../constant/http-api";
import httpUtil from "./http-util";

const MOVIE_UTILS = {
    async search(keywords, type, page = 1) {

        let result = {};

        // 百度云资源
        result.baidu = await this.baiduPage(keywords, type, page);

    },
    async detail(type, ids) {

        // 百度云资源
        if (httpApi.BASE.BAIDU.type === type) {

            return this.baiduDetail(ids);
        }
    },
    async baiduPage(keywords, type, page) {

        let params = {};

        if (type) {
            params.t = type;
        }

        if (page) {
            params.pg = page;
        }

        if (keywords) {
            params.wd = keywords;
        }

        let resp = await httpUtil.http(httpApi.SERVICE.BAIDU.page, params, false, true, httpApi.BASE.BAIDU.title + "加载中");

        if (1 === resp.code && 0 < resp.list.length) {

            let list = [];

            for (let item of resp.list) {

                let movieVO = {};

                movieVO.typeName = item.type_name;
                movieVO.vodName = item.vod_name;
                movieVO.vodTime = item.vod_time;
                movieVO.vodRemarks = item.vod_remarks;
                movieVO.rescType = httpApi.BASE.BAIDU.type;

                list.push(movieVO);
            }

            resp.list = list;

            return resp;
        }

        return null;
    },
    async baiduDetail(ids) {

        let resp = await httpUtil.http(httpApi.SERVICE.BAIDU.detail, {
            ids: ids
        }, false, true);

        console.log(resp);

        if (1 === resp.code && 0 < resp.list.length) {

            let list = [];

            for (let item of resp.list) {

                let movieVO = {};

                movieVO.typeName = item.type_name;
                movieVO.vodName = item.vod_name;
                movieVO.vodTime = item.vod_time;
                movieVO.vodRemarks = item.vod_remarks;
                movieVO.rescType = httpApi.BASE.BAIDU.type;

                list.push(movieVO);
            }

            resp.list = list;

            return resp;
        }

        return null;
    },
};

export default MOVIE_UTILS;