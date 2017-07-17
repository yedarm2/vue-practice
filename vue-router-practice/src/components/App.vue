<template>
    <div>
        <header>
            <h1>
                <router-link to="/">홈페이지</router-link>
            </h1>
            <h1>
                <router-link to="/sub">서브 페이지</router-link>
            </h1>
            <p>
                {{$route.hash}}
            </p>
        </header>
        <p>
            <a @click.prevent="$router.push('/')" href="#">push 링크</a>
            <a @click.prevent="$router.push({path: '/sub', query: {'aa': 123}})" href="#">push 링크(??)</a>
            <a @click.prevent="$router.push({name: 'sub', params: {title: 'dfdf'}})" href="#">sub 페이지</a>
            <a @click.prevent="$router.go(-10)" href="#">뒤로</a>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">

</style>