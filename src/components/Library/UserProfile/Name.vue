<template>
    <div id="username">
        <h1 class="text-5xl font-bold">{{$store.state.profile.user.personaname}}</h1>
    </div>
</template>

<script>
export default {
    name:"UserProfileName"
}
</script>