<template>
    <div id="show-blogs">
        <h1>List blog titles</h1>
        <input type="text" v-model="search" placeholder="search box">
        <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
            <h2 v-rainbow>{{ blog.title | to - uppercase }}</h2>
        </div>
    </div>
</template>

<script>
import search from '../search'

export default {
    data() {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
            this.blogs = data.body.slice(0, 10);
        });
    },
    computed: {
    },
    filters: {
        'to-uppercase': function (value) {
            return value.toUpperCase()
        }
    },
    directives: {
        'theme': {
            bind(el, binding) {
                if (binding.value == "wide") {
                    el.style.maxWidth = "1200px"
                } else if (binding.value == "narrow") {
                    el.style.maxWidth = "560px"
                }
                if (binding.arg == "column") {
                    el.style.background = '#ddd';
                    el.style.padding = "20px"
                }
            }
        }
    },
    mixins: [search]
}
</script>

<style scoped>
#show-blogs {
    max-width: 800px;
    margin: 0px auto;
    text-align: left;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

input {
    width: 99%;
    padding: 10px 0 10px 15px;
    font-size: 1.1rem;
}
</style>