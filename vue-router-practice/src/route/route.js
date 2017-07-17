import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import Sub from '../components/sub.vue';
import subProfile from '../components/sub-profile.vue';

Vue.use(VueRouter);
const routes = [
	{path: '/', component: Home},
	{
		path: '/sub/:title?',
        component: Sub,
        name: 'sub',
		children: [
			{
				path: 'profile',
				component: subProfile
			},
			{
				path: '/path2',
				component: {
					template: '<div>서브의 메인페이지 스파르타</div>'
				}
			},
            {
                path: '/',
                name: 'dscomponent',
                component: {
                    template: '<div>404 {{$route.params.title}}의 서브 페이지</div>'
                }
            }
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;