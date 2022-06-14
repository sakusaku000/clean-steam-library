<template>
    <section id="game-list" class="w-full container mx-auto px-20" v-if="!$store.state.games.noGames">        
        <h1 class="font-bold text-xl mb-2">Library</h1>
        <Game v-for="game in $store.state.games.library"
        :key="game.appid"
        :id="game.appid" 
        :name="game.name" 
        :icon="game.img_icon_url"
        :playTime="game.playtime_forever"
        />
    </section>
    <section id="no-games" class="flex flex-col gap-3 items-center" v-else>
        <MissingIcon class="w-12 text-slate-500"/>
        <div class="text-center select-none">
            <p>No games could be found</p>
            <p class="text-slate-300 text-xs">This profile either has no games or their game list is set to private.</p>
        </div>
    </section>
</template>

<script>
import Game from './Game.vue';
import MissingIcon from '../../Icons/Missing.vue';

export default {
    name:"GameList",
    components:{
        Game,
        MissingIcon
    }
}
</script>