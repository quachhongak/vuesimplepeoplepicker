Vue.component('peoplepicker', {
    data: function() {
        return {
            results: [],
            selected: [],
            search: null,
            type_control: '',
            items_to_display: '',
        }
    },
    methods: {
        //Fn: setup the pnp
        setupPNP: function() {
            var vm = this;

            $pnp.setup({
                sp: {
                    baseUrl: vm.baseurl
                }
            });
            console.log('mounted PNP');
        },
        //Fn: Search people using the search api. Permissions needs to be provided at the search center
        searchPeople: function(query) {
            var vm = this;
            var dfd = new $.Deferred();

            $pnp.sp.profiles.clientPeoplePickerSearchUser({ // return a promise
                AllowEmailAddresses: true,
                AllowMultipleEntities: false,
                MaximumEntitySuggestions: 25,
                QueryString: query
              }).then(function(results) {
                  dfd.resolve(results);
              }).catch(function(err) {
                  dfd.reject(err);
              })

              return dfd.promise();
        },
        //Fn: This executes when the SELECT change
        changePeoplePicker: function() {
            var vm = this;
            console.log('test');
            if(vm.search && vm.baseurl) {
                vm.searchPeople(vm.search).then(function(results) {
                    vm.results = results;
                }).fail(function(err) {
                    toastr.error(err);
                });
            }
        },
        //Fn: send back to parent app the value of the selected using the rootdata
        sendSelectedParent: function() {
            var vm = this;
            vm.$root[vm.rootdata] = vm.selected;

            if(vm.multiple) {
                vm.items_to_display = $.map(vm.selected, function(el,i) {
                    return el.DisplayText
                }).join('; ');
            } else {
                //If the display is a single, then we replace the items_to_display
                vm.items_to_display = vm.selected.DisplayText;
            }
        }
    },
    filters: {
    },
    components: {
    },
    computed: {

    },
    props: ['baseurl', 'label', 'multiple', 'displaydesc', 'rootdata', 'defaultdata'],
    template: /*html*/`
        <div>
            <div>
                <label>{{label}}</label>
            </div>
            <div>
                <input type="text" class="form-control" readonly v-model="items_to_display" />
            </div>
            
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" v-model="search">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="changePeoplePicker()">Search</button>
                </div>
            </div>
            <!-- results -->
            <div>
                <ul v-if="results && results.length > 0">
                    <li class="row" v-for="(result, $i) in results">
                        <div class="float-left pr-2"><input :type="type_control" class="input-text" v-model="selected" :value="result" @change="sendSelectedParent()"></div>
                        <div class="float-right">{{result.DisplayText}} <span v-if="displaydesc">({{result.Description}})</span></div>
                    </li>
                </ul>


            </div>
        </div>
    `,
    beforeMount: function() {
        var vm = this;
        vm.setupPNP();


        if(vm.multiple) {
            vm.type_control = 'checkbox'
        } else {
            vm.type_control = 'radio'
            
        }
    },
    created: function() {
        var vm = this;
        //Let's check if there is any default data and if there is then display that
        //default data should always be an array of user(s)
        if(vm.defaultdata && vm.defaultdata.length > 0) {
            vm.items_to_display = $.map(vm.defaultdata, function(el,i) {
                return el.Title
            }).join('; ');
        }

    }
});