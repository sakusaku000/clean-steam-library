<template>
    <div id="user-stats" class="flex items-center gap-5">
        <Stat name="games" count="50"/>
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