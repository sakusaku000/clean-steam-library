import axios from 'axios';

export default {
    namespaced:true,
    state:{
        ready:false,
        user:null
    },
    mutations:{
        setUser(state, user) {
            state.user = user;
        },
        setReady(state, ready) {
            state.ready = ready;
        }
    },
    actions:{
        async fetchUserProfile(state) {
            if (state.ready) return;

            try {
                const profileRequest = await axios.get(`${import.meta.env.VITE_STEAM_API_URL}/ISteamUser/GetPlayerSummaries/v0002/?key=${import.meta.env.VITE_STEAM_API_KEY}&steamids=${localStorage.getItem("id")}`);
                if (profileRequest.data.response.players.length >= 1) {
                    state.commit("setUser", profileRequest.data.response.players[0]);
                    state.commit("setReady", true);
                } else {
                    state.commit("setReady", true);
                }
            } catch (err) {
                console.error(err);
                state.commit("setReady", true);
            };
        }
    }
}