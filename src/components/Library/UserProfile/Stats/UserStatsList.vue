<template>
    <div id="user-stats" class="flex items-center gap-5">
        <Stat name="games" :count="$store.state.games.library.length"/>
    </div>
</template>

<script>
import Stat from './Stat.vue';

export default {
    name:"UserProfileStats",
    components:{
        Stat
    }
}
</script>