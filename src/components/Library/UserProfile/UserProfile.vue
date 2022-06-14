<template>
    <section id="user-profile" class="flex flex-col items-center gap-5">
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
    }
}
</script>