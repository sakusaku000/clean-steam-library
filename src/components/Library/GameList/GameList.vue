<template>
    <section id="game-list" class="w-full container mx-auto px-20">
        <h1 class="font-bold text-xl mb-2">Library</h1>
        <Game id="1" 
        name="Beat Saber" 
        :icon="`http://media.steampowered.com/steamcommunity/public/images/apps/620980/d2922f271fca9579ecdcc07408cee13d87ca4148.jpg`"
        :playTime="2345"
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