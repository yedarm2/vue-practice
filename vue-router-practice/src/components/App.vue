<template>
    <div id="app">
        <header>
            <h1>
                <router-link to="/">홈페이지</router-link>
            </h1>
            <h1>
								<router-link tag="span" to="/sub">
									<a href="#">서브 페이지 링크(외부 엘리먼트에 active 클래스 적용)</a>
								</router-link>
						</h1>
            <h1>
                <router-link to="/sub">서브 페이지 링크 2</router-link>
						</h1>
						<h1>
							<router-link to="hello" append>base 링크</router-link>
						</h1>
            <p>
                {{$route.hash}}
						</p>
						<div id="scroll">sdfas</div>
        </header>
        <p>
            <a @click.prevent="$router.push('/')" href="#">push 링크</a>
            <a @click.prevent="$router.push({path: '/sub', query: {'aa': 123}})" href="#">push 링크(??)</a>
            <a @click.prevent="$router.push({name: 'sub', params: {title: 'dfdf'}})" href="#">sub 페이지</a>
            <a @click.prevent="$router.go(-1)" href="#">뒤로</a>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
#app {
	height: 2000px;
	& .fixed-menu {
		position: fixed;
	}
}

#scroll {
	position: absolute;
	left: 0;
	top: 700px;
}
</style>