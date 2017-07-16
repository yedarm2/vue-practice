<template>
    <div>
        <header>
            <h1>
                <router-link to="/">홈페이지</router-link>
            </h1>
            <h1>
                <router-link to="/sub">서브 페이지</router-link>
            </h1>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import router from '../route/route.js';
export default {
    router
}
</script>

<style lang="less">

</style>