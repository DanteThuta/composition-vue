<template>
  <h1>Detail - {{id}}</h1>

    <div v-if="post">
        <h3>{{post.title}}</h3>
        <h3>{{post.content}}</h3>
    </div>
    <div v-else>
        Loading....
    </div>
  
</template>

<script>
import getPost from '../composables/getPost'

export default {
    props: ["id"],
    setup(props){
        let {post,error,load} = getPost(props.id);// require carry id from props
        load();
        return {post,error};
    }

}
</script>

<style>

</style>