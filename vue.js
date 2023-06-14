Vue.component('counter-btn', {
    data() {
        return {
            count: 0
        }
    },
    methods: {
    },
    template: '<div><p>{{count}}</p><button @click="count++">Increment</button><button @click="count--">Decrement</button</div>'
})

let app = new Vue({
    el: '#app',
    data: {
        fname: '',
        lname: '',
        a: 'Male',
        b: 'Female',
        listItems: ['Apple', 'Mango', 'Banana', 'Grape', 'Orange'],
        isActive: true,
        changeStyle: true
    },
    methods: {
    },
    computed: {
        fullName: function() {
            return `${this.fname} ${this.lname}`
        }
    }
})