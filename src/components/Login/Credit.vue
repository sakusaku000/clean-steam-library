<template>
    <footer id="credits" class="fixed bottom-4 flex flex-col items-center gap-2">
        <p class="text-xs text-slate-500">created by <a href="https://saku.dev" target="_blank" class="underline">saku</a></p>
        <a href="https://github.com/sakusaku000/clean-steam-library" target="_blank">
            <GithubLogo class="w-5 text-slate-600 hover:text-slate-500 active:text-slate-600 duration-100"/>
        </a>
    </footer>
</template>

<script>
import GithubLogo from '../Icons/Github.vue';

export default {
    name:"LoginCredits",
    components:{
        GithubLogo
    }
}
</script>