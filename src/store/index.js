import {createStore} from 'vuex'

export default createStore({
    state: {
        playVO: ""
    },
    mutations: {

        // 更新视频信息
        updatePlayVO(state, value) {

            state.playVO = value;
            localStorage.setItem("playVO", JSON.stringify(value));
        },
    },
    actions: {},
    modules: {}
})
