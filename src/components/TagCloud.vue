<template>
  <div class="tag-cloud">
      <h2>TagCloud</h2>
      <div v-for="tag in uniquetags" :key="tag">
        <router-link :to="{name:'Tag',params:{tag}}">{{tag}}</router-link>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ["posts"],
    setup(props){
      let tags = ref([]);//creating new Array
      props.posts.forEach((post)=>{
        // console.log(post);
        post.tags.forEach((tag)=>{
          // console.log(tag);
          tags.value.push(tag);
        })
      })

      // console.log(tags.value);
      let uniquetags = tags.value.filter((tag,index,array)=>{
        return array.indexOf(tag) === index
      })
      // console.log(uniquetags);
      return {uniquetags};
    }
}
</script>

<style>

 .tag-cloud{
   padding: 10px;
 }
 .tag-cloud h2{
   align-self: center;
   justify-content: center;
   border-bottom: 1px solid #eee;
   padding: 16px 8px;
   color: #444;
 }
 .tag-cloud div{
   display: inline-block;
   padding: 10px;
 }

 .tag-cloud a{
   color: #ccc;
   text-decoration: none;
 }

 .tag-cloud a.router-link-active{
   color: #ff8800;
   font-weight: bold;
    background-color: #ddd;
    padding: 10px;
    border-radius: 10px;
 }
</style>