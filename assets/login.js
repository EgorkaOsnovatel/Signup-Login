var login = new Vue({
    el: ".menu-autorization",
    data: {
        isLogin: true
    }
});

let isCreating = false;
if (isCreating) {
    mp.trigger('startingAccount');
}