<template>
    <div id="enter-username" class="text-center">
        <p class="text-xs mb-2 select-none">Enter your Steam ID below. <span class="underline cursor-pointer">Need help?</span></p>
        <form @submit.prevent="checkID" class="flex items-center gap-4">
            <input type="text" v-model="id" class="ml-9 py-2 px-3 bg-slate-800 rounded-lg outline-none w-96 focus:bg-slate-900 focus:ring-2 ring-slate-800 duration-200">
            <button type="submit"><LoginIcon class="w-6 text-slate-600 hover:text-slate-500 active:text-slate-600 duration-100"/></button>
        </form>
    </div>
</template>

<script>
// modules
import axios from 'axios';

// components
import LoginIcon from '../Icons/Login.vue';

export default {
    name:"LoginEnterUsernameDialog",
    components:{
        LoginIcon
    },
    data() {
        return {
            id:""
        }
    },
    methods:{
        checkID() {
            // determine if id contains just numbers
            if (this.id.match(/^\d+$/)) {
                this.checkProfile(this.id);
            } 
            // if id has letters then try to find an ID via vanity api
            else {
                this.getIdFromVanity(this.id);
            }
        },
        getIdFromVanity(id) {
            // attempt to fetch an ID from the vanity url if possible
            axios.get(`${import.meta.env.VITE_STEAM_API_URL}/ISteamUser/ResolveVanityURL/v0001/?key=${import.meta.env.VITE_STEAM_API_KEY}&vanityurl=${id}`).then((res) => {
                if (res.data.response.success === 1) {
                    this.checkProfile(res.data.response.steamid);
                } else {
                    this.failedLogin();
                };
            }).catch(err => {
                console.error(err);
                this.failedLogin();
            });
        },
        checkProfile(id) {
            // Check if profile can be found with ID
            axios.get(`${import.meta.env.VITE_STEAM_API_URL}/ISteamUser/GetPlayerSummaries/v0002/?key=${import.meta.env.VITE_STEAM_API_KEY}&steamids=${id}`).then((res) => {
                if (res.data.response.players.length >= 1) {
                    localStorage.setItem("id", id);
                    this.$router.replace("/");
                } else {
                    this.failedLogin();
                };
            }).catch(err => {
                console.error(err);
                this.failedLogin();
            });
        },
        failedLogin() {
            // TODO: replace with better error later
            alert("Couldn't login with Steam ID provided")
        }
    }
}
</script>