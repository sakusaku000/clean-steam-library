<template>
    <div class="flex flex-col justify-center items-center gap-20 h-screen -m-14">
        <!-- logo -->
        <LoginLogo/>
        <!-- enter username dialog -->
        <EnterUsername/>
        <!-- footer credits -->
        <Credit/>
    </div>
</template>

<script>
import LoginLogo from '../components/Login/Logo.vue';
import EnterUsername from '../components/Login/EnterUsername.vue';
import Credit from '../components/Login/Credit.vue';

export default {
    name:"LoginView",
    components:{
        LoginLogo,
        EnterUsername,
        Credit
    }
}
</script>