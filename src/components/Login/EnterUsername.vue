<template>
    <div id="enter-username" class="text-center">
        <p class="text-xs mb-2 select-none">Enter your Steam ID below. <span class="underline cursor-pointer">Need help?</span></p>
        <form class="flex items-center gap-4">
            <input type="text" class="ml-9 py-2 px-3 bg-slate-800 rounded-lg outline-none w-96 focus:bg-slate-900 focus:ring-2 ring-slate-800 duration-200">
            <button type="submit"><LoginIcon class="w-6 text-slate-600 hover:text-slate-500 active:text-slate-600 duration-100"/></button>
        </form>
    </div>
</template>

<script>
import LoginIcon from '../Icons/Login.vue';

export default {
    name:"LoginEnterUsernameDialog",
    components:{
        LoginIcon
    },
    methods:{
        async LoginToSteam() {

        }
    }
}
</script>