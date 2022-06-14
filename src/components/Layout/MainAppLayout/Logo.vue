<template>
    <div id="steam-logo" class="flex items-center gap-4">
        <div id="back-button" v-if="$route.path !== '/'">
            <Back class="w-7 text-slate-600 hover:text-slate-500 duration-100 cursor-pointer" @click="BackToLibrary"/>
        </div>
        <Steam class="w-12 text-slate-500"/>
    </div>
</template>

<script>
import Steam from '../../Icons/SteamMain.vue';
import Back from '../../Icons/Back.vue';
export default {
    name:"TitleBarLogo",
    components:{
        Steam,
        Back
    },
    methods:{
        BackToLibrary() {
            this.$router.push("/");
        }
    }
}
</script>