import {createStore} from 'vuex';

// modules
import profile from './profile.js';
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
        profile:profile,
        games:games
    }
})