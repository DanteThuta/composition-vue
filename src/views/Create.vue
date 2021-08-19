<template>
  <h1>Create</h1>
  <form>
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
export default {
    setup(){
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

        return {title,content,tag,tags,enableKeyDown};
    }
}
</script>

<style>

    
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
        border: 1px solid #eee;
    }

    textarea{
        height: 160px;
    }

    label{
        display: inline-block;
        background-color: #ff8800;
        
        transform: rotate(2deg);
    }
    button{
        
        display: block;
        margin-top: 30px;
        background-color: #ff8800;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 8px 16px;
        font-size: 18px;

        text-align: center;
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