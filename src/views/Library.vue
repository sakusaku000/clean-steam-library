<template>
    <div class="flex flex-col items-center gap-20">
        <!-- User Profile -->
        <UserProfile/>

        <!-- Game List -->
        <GameList/>
    </div>
</template>

<script>
// UserProfile
import UserProfile from '../components/Library/UserProfile/UserProfile.vue';
// Game List
import GameList from '../components/Library/GameList/GameList.vue';

export default {
    name:"LibraryView",
    components:{
        UserProfile,
        GameList
    },
    mounted() {
        this.$store.dispatch("games/fetchGameLibrary");
    }
}
</script>