<template>
    <div id="user-stat" class="text-center">
        <h2 class="font-light text-slate-300">{{name}}</h2>
        <h1 class="text-xl font-bold">{{count}}</h1>
    </div>
</template>

<script>
export default {
    name:"StatsListStat",
    props:{
        name:String,
        count:Number
    }
}
</script>