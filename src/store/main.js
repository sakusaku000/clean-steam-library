import {createStore} from 'vuex';

// modules
import games from './games.js';

export default createStore({
    state:{
        app_ready:false
    },
    mutations:{
        setReady(state, ready) {
            state.ready = ready;
        }
    },
    modules:{
        games:games
    }
})