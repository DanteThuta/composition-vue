<template>
  <h1>Create</h1>
  <form @submit.prevent="addPost">

    <h1>Create Form</h1>
    <label>Title</label>
    <input type="text" required v-model="title">

    <label>Content</label>
    <textarea required v-model="content"></textarea>

    <label>Tags(Hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="enableKeyDown">
    <div class="pill" v-for="tag in tags" :key="tag" >
        {{tag}}
    </div>

    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
import {db,timestamp} from '../firebase/config'
export default {
    setup(){
        let router = useRouter();
        let title = ref('');
        let content = ref('');
        let tag = ref('');
        let tags = ref([]);

        let enableKeyDown =()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }
            tag.value = '';
        }
        

        let addPost=async()=>{
            
            let newPost = {
                 title:title.value,
                 content: content.value,
                 tags: tags.value,
                 created_at: timestamp() //Timestamp from firebase used Here
            }

            let res =  await db.collection("posts").add(newPost)
            // console.log(res.id);
            router.push("/");
            //JSON Server Fetching Code

            // await fetch('http://localhost:3000/posts',{
            //     method:"POST",
            //     headers:{
            //         "Content-type" : "application/json"
            //     },
            //     body:JSON.stringify(
            //         {
            //             title:title.value,
            //             content: content.value,
            //             tags: tags.value //[]As Array
            //         }
            //     )
            // })
            // // redirecting to Home Page
            // router.push("/");
        }

        return {title,content,tag,tags,enableKeyDown,addPost};
    }
}
</script>

<style>
    h1{
        text-align: center;
    }
    
    form{
        font-family: sans-serif;
        max-width: 480px;
        margin: 0 auto;
        text-align: left;
    }

    input,textarea{
        display: block;
        margin: 10px 0;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        /* border: 1px solid #eee; */
        border: 0;
        background-color: transparent;
        border-bottom: 1px solid #272727;
        
    }

    textarea{
        height: 160px;
    }

    label{
        display: inline-block;
        background-color: #ff8800;
        padding: 8px;
        border-radius: 20px;
        font-weight: bold;
        /* transform: rotate(2deg); */
    }
    
    
    button{
        
        display: block;
        margin-top: 30px;
        margin: 30px auto;
        background-color: #ff8800;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 8px 16px;
        font-size: 18px;

        text-align: center;

        cursor: pointer;
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