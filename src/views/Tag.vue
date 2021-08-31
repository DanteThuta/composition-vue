<template>
  <div v-if="error">{{error}}</div>
  <div v-if="posts.length">
      <PostsList :posts="filteredPosts"></PostsList>
  </div>

  <div v-else>
      Loading...
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import {computed} from 'vue'
import getPosts from '../composables/getPosts'
export default {
  components: { PostsList },
    props: ["tag"],
    setup(props){   
        // console.log(props.tag);
        let {posts,error,load} =  getPosts();
        load();
        let filteredPosts =  computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
            })
        })
        return {posts,error,filteredPosts};

    }
}
</script>

<style>

</style>