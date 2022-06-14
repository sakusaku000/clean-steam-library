<template>
    <div id="logout">
        <Logout class="w-7 text-slate-600 hover:text-slate-500 active:text-slate-600 duration-100 cursor-pointer"/>
    </div>
</template>

<script>
import Logout from '../Icons/Logout.vue';

export default {
    name:"TitleBarLogout",
    components:{
        Logout
    }
}
</script>