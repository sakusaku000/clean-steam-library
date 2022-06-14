<template>
    <router-link :to="`/game/${id}`" id="game" class="p-3 flex items-center gap-5 select-none hover:bg-slate-800 rounded-xl duration-200 group">
        <!-- game icon -->
        <img id="game-icon" class="rounded-lg w-10" :src="icon" :alt="`${name} game icon`">

        <!-- game name & hours -->
        <div id="game-name">
            <p>{{name}}</p>
            <p class="text-xs">{{calculatedPlayTime}}</p>
        </div>

        <!-- Info button -->
        <div id="info-button" class="ml-auto mr-2">
            <InfoIcon class="w-5 text-slate-500 opacity-0 group-hover:opacity-100 duration-200"/>
        </div>
    </router-link>
</template>

<script>
import InfoIcon from '../../Icons/Info.vue';

export default {
    name:"GameListGame",
    components:{
        InfoIcon
    },
    props:{
        id:String,
        name:String,
        icon:String,
        playTime:Number
    },
    data() {
        return {
            calculatedPlayTime:""
        }
    },
    mounted() {
        const hours = Math.floor(this.playTime / 60);
        this.calculatedPlayTime = `${hours} hours`;
    }
}
</script>