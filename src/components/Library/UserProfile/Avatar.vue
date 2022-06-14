<template>
    <div id="user-avatar">
        <img class="rounded-full select-none" :src="$store.state.profile.user.avatarfull" :alt="`${$store.state.profile.user.personaname} avatar`" draggable="false">
    </div>
</template>

<script>
export default {
    name:"UserProfileAvatar"
}
</script>