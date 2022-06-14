<template>
    <div class="flex flex-col items-center">
        <!-- User Profile -->
        <UserProfile/>
    </div>
</template>

<script>
// UserProfile
import UserProfile from '../components/Library/UserProfile/UserProfile.vue';

export default {
    name:"LibraryView",
    components:{
        UserProfile
    }
}
</script>