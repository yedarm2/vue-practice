var vm = new Vue({
    el: '#app',
    data: {
        show: true
    },
    methods: {
        beforeEnter(el) {
        },
        enter(el, done) {
            let startTime = Date.now();
            let enterRequest = () => {
                let now = Date.now();
                let percentage = (now - startTime) / 2000;
                if (percentage <= 1) {
                    el.style.transform = `translateX(${500 - (500 * percentage)}px)`;
                    el.style.opacity = percentage;
                    requestAnimationFrame(enterRequest);
                } else {
                    el.style.transform = `translateX(${0}px)`;
                    el.style.opacity = 1;
                    done();
                }
            };
            requestAnimationFrame(enterRequest);
        },
        afterEnter() {
            
        },
        enterCancelled() {
            
        },
        beforeLeave() {
            
        },
        leave(el, done) {
            let startTime = Date.now();
            let enterRequest = () => {
                let now = Date.now();
                let percentage = (now - startTime) / 2000;
                if (percentage <= 1) {
                    el.style.transform = `translateX(${500 * percentage}px)`;
                    el.style.opacity = 1 - percentage;
                    requestAnimationFrame(enterRequest);
                } else {
                    el.style.transform = `translateX(${500}px)`;
                    el.style.opacity = 1;
                    done();
                }
            };
            requestAnimationFrame(enterRequest);
        },
        afterLeave() {
            
        },
        leaveCancelled() {
            
        },
    }
});