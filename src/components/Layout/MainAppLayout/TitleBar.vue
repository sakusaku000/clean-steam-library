<template>
    <div class="flex items-center justify-between px-14 pt-14">
        <Logo/>
        <User/>
    </div>
</template>

<script>
import Logo from './Logo.vue';
import User from './User.vue';

export default {
    name:"LayoutTitleBar",
    components:{
        Logo,
        User
    }
}
</script>