$(document).ready(function() {
    new Vue({
        el: '#app',
        data: {
            selectedPeople: [],

            //test data
            test: null,
            users: [],
        },
        methods: {
            getTestValue: function() {
                var vm = this;
                var dfd = new $.Deferred();

                $pnp.setup({
                    sp: {
                        baseUrl: 'https://niftitusa.sharepoint.com/sites/khoa/vusppeoplepicker'
                    }
                })

                $pnp.sp.web.lists.getByTitle('Test').items.select('*,Single/Title, Single/Id, Multiple/Title, Multiple/Id').expand('Single, Multiple').top(1).get().then(function(data) {
                    vm.test = data[0];
                    //vm.users = [data[0].Single];
                    vm.users = data[0].Multiple;
                })
            }
        },
        filters: {
        },
        components: {
        },
        computed: {
        },
        created: function() {
            var vm = this;
            console.log('get test value');
            vm.getTestValue();



        }
    });
})