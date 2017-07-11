Vue.component('anchor-header', {
    render(createElement) {
        return createElement(
            'h' + this.level,
            this.$slots.default
        );
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        level: 1
    }
});