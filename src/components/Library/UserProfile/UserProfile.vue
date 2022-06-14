<template>
    <section id="user-profile" class="flex flex-col items-center gap-5">
        <!-- avatar -->
        <Avatar/>
        <!-- username -->
        <Name/>
    </section>
</template>

<script>
import Avatar from './Avatar.vue';
import Name from './Name.vue';

export default {
    name:"LibraryUserProfile",
    components:{
        Avatar,
        Name
    }
}
</script>