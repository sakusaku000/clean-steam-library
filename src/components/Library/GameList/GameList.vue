<template>
    <section id="game-list" class="w-full container mx-auto px-20" v-if="$store.state.games.ready">        
        <h1 class="font-bold text-xl mb-2">Library</h1>
        <Game v-for="game in $store.state.games.library"
        :key="game.appid"
        :id="game.appid" 
        :name="game.name" 
        :icon="game.img_icon_url"
        :playTime="game.playtime_forever"
        />
    </section>
</template>

<script>
import Game from './Game.vue';

export default {
    name:"GameList",
    components:{
        Game
    }
}
</script>