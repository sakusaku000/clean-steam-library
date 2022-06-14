<template>
    <!-- Title bar -->
    <TitleBar/>

    <!-- Main app layout -->
    <div class="p-14">
        <router-view/>
    </div>
</template>

<script>
import TitleBar from './TitleBar.vue';

export default {
    name:"AppLayout",
    components:{
        TitleBar
    }
}
</script>