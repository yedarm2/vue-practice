import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import Sub from '../components/sub.vue';
import subProfile from '../components/sub-profile.vue';

Vue.use(VueRouter);
const routes = [
	{path: '/', component: Home},
	{path: '/home', alias: '/avb'},
	{
		path: `/(aaa/)?page1`,
		component: {
			template: `
				<div>
					aaa
				</div>
			`
		}
	},
	{
		path: '/sub/:title?',
		component: Sub,
		name: 'sub',
		children: [
			{
				path: 'profile',
				component: subProfile,
				props: true
			},
			{
				path: '/path2',
				component: {
					template: '<div>서브의 메인페이지 스파르타</div>'
				}
			},
			{
				path: '/',
				component: {
					name: 'ds-component',
					props: ['title'],
					template: '<div>{{title}}의 서브 페이지</div>'
				},
				props: (route) => ({
					title: route.hash.replace(/^\#/, '')
				})
			}
		]
	},
	{
		path: '*',
		component: {
			template: `<div>404 page <pre>{{routerInfo}}</pre></div>`,
			computed: {
				routerInfo() {
					let route = this.$route;
					let obj = {};
					for (let key in route) {
						if (key !== 'matched') {
							obj[key] = route[key];
						}
					}
					return JSON.stringify(obj, null, '  ');
				}
			}
		}
	}
];

let scroll = 0;
export default new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		scroll += 100;
		console.log(`scrollBehavior, scroll:`, savedPosition, scroll);
		// return {
		//     selector: '#scroll'
		// };
	}
});