import { createStore } from 'vuex'
import axios from 'axios'

const service  = axios.create({
    baseURL: 'http://39.96.48.33/write',
    timeout: 5000
})

const store = createStore({
    state: {
        keysData: [],
        allData: [],
    },
    mutations: {
        
    },
    actions: {
        getData(context){
            service.get('/keys.json').then(res => {
                context.commit('keysData',res)
            })
        }
    },
    modules: {},
})

export default store