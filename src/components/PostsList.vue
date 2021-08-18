<template>
  
    <h1>Post Lists</h1>

    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
    
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props: ["posts"],

    //require props Parameters to Process
    setup(props){
        // console.log(props.posts);

        //lifeCycle Methods
        // onMounted(()=>console.log("Mounted Component"));
        // onUnmounted(()=>console.log("Unmounted Component"));
        // onUpdated(()=>console.log("Updated Component"));
    }
}
</script>

<style>

</style>