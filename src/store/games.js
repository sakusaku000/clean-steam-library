import axios from 'axios';

export default {
    namespaced:true,
    state:{
        ready:false,
        library:[],
        noGames:false
    },
    mutations:{
        setGameLibrary(state, list) {
            state.library = list;
        },
        orderGameLibrary(state) {
            state.library = state.library.sort((a, b) => a.name.localeCompare(b.name));
        },
        setReady(state, ready) {
            state.ready = ready;
        },
        setNoGames(state, noGames) {
            state.noGames = noGames;
        }
    },
    actions:{
        async fetchGameLibrary(state) {
            if (state.ready) return;
            
            try {
                const gamesRequest = await axios.get(`${import.meta.env.VITE_STEAM_API_URL}/IPlayerService/GetOwnedGames/v0001/?key=${import.meta.env.VITE_STEAM_API_KEY}&steamid=${localStorage.getItem("id")}&include_appinfo=true&include_played_free_games=true`);
                if (gamesRequest.data.response?.games) {
                    state.commit("setGameLibrary", gamesRequest.data.response?.games)
                    state.commit("orderGameLibrary");
                    state.commit("setReady", true);
                } else {
                    state.commit("setNoGames", true);
                    state.commit("setReady", true);
                }
            } catch (err) {
                console.error(err);
                state.commit("setNoGames", true);
                state.commit("setReady", true);
            }
        }
    }
}