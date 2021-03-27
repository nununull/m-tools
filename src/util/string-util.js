const STRING_UTIL = {
    array2M3u8String(vodName, playVOList) {

        let result = "";

        for (let i = 1; i <= playVOList.length; i++) {

            let playVO = playVOList[i - 1];

            if (i === playVOList.length) {
                result = result.concat(vodName, playVO.title, ",", playVO.url);
            } else {
                result = result.concat(vodName, playVO.title, ",", playVO.url, "\n");
            }
        }

        return result;
    },
    array2PotPlayerM3u8String(vodName, playVOList) {

        let result = "#EXTM3U\n";

        for (let i = 1; i <= playVOList.length; i++) {

            let playVO = playVOList[i - 1];

            result = result.concat("#EXTINF:-1 ,", vodName + "-" + playVO.title, "\n", playVO.url, "\n")
        }

        return result;
    },
}
export default STRING_UTIL;