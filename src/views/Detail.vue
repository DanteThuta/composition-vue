<template>
  <h1>Detail - {{id}}</h1>

    <div v-if="post" class="post">
        <h2>{{post.title}}</h2>
        <p>{{post.content}}</p>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
  
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import {useRoute} from 'vue-router'

export default {
  components: { Spinner },
    props: ["id"],
    setup(props){
        let route = useRoute();
        console.log(route.params.id);
        //carrying id from props METHOD
        // let {post,error,load} = getPost(props.id);// require carry id from props

        //carrying id from useRoute METHOD
        let{post,error,load} = getPost(route.params.id);// 
        load();
        return {post,error};
    }

}
</script>

<style>

.post{
        margin: 0 80px 30px;
        padding-bottom: 30px;
        border-bottom: 1px dashed #e7e7e7;

    }

    .post h2{
        display: inline-block;
        position: relative;
        font-size: 26px;
        color: white;
        margin-bottom: 10px;
        max-width: 400px;
    }

    .post h2::before{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: #ff8800;
        
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        transform: rotateZ(-1deg);

    }
    .pill{
        display: inline-block;
        margin: 10px 10px 0 0;
        color: #444;
        background-color: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 16px;
    }
</style>