<template>
    <div class="flex items-center justify-between px-14 pt-14 select-none">
        <Logo/>
        <User/>
    </div>
</template>

<script>
import Logo from './Logo.vue';
import User from './Logout.vue';

export default {
    name:"LayoutTitleBar",
    components:{
        Logo,
        User
    }
}
</script>