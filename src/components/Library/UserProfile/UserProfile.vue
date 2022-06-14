<template>
    <section id="user-profile" class="flex flex-col items-center gap-5 select-none">
        <!-- avatar -->
        <Avatar/>
        <!-- username -->
        <Name/>
        <!-- stats list -->
        <StatsList/>
    </section>
</template>

<script>
import Avatar from './Avatar.vue';
import Name from './Name.vue';
import StatsList from './Stats/UserStatsList.vue';

export default {
    name:"LibraryUserProfile",
    components:{
        Avatar,
        Name,
        StatsList
    },
    mounted() {
        document.title = `${this.$store.state.profile.user.personaname}'s library - Clean Steam Library`;
    }
}
</script>