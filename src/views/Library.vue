<template>
    <div class="flex flex-col items-center gap-20">
        <!-- User Profile -->
        <UserProfile v-if="$store.state.profile.ready"/>

        <!-- Game List -->
        <GameList v-if="$store.state.games.ready"/>
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
        this.$store.dispatch("profile/fetchUserProfile");
    }
}
</script>