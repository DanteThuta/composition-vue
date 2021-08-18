<template>
  <div class="home">
    <h1>Home</h1>

    <!-- <p>I am {{name}} and I am {{age}} years old.</p>
    <input type="text" v-model="name">
    <button @click="handleClick">Click</button>
    <button @click="age++">Age Increase</button> -->
    
    <!-- Lesson (3) -->
    <!-- <h2>Person 1</h2>
    <p>{{person1}}-{{person1.age}}</p>
    <button @click="changePer1">Click</button>


    <h2>Person 2</h2>
   <p>User Two - {{person2}}</p>
    <button @click="changePer2">Click</button>-->

    <!-- Lesson (3) -->

    <!-- <h1>Search</h1>
    <input type="text" v-model="search">
    <! <p>Search Items - {{search}}</p> -->
    <!--<div v-for="name in filteredNames" :key="name">

      {{name}}
    </div> -->
    
        <PostsList :posts="posts"></PostsList>
    

  
  

  </div> 


</template>
                    
<script>
import PostsList from '../components/PostsList'
import { computed, reactive, ref } from '@vue/reactivity';
// @ is an alias to /src


export default {
  components: { PostsList },
  // Lesson (1)

  // setup(){
  //   let name= ref("kothu"); // used ref to create an Object List for Composition Api
  //   let age = ref(20);

  //   let handleClick = ()=>{
  //     // console.log("U clicked me");
  //     name.value = "Daniel";
  //   }
    // console.log(name);

  // Lesson (3)

  // setup(){
  //   let person1 = ref('Daniel');

  //   let changePer1 = ()=>{
  //     person1.value =  "Perman";
  //   }

  //   let person2 = reactive('Anthony');

  //   let changePer2 = ()=>{
  //     person2.value = "Henry";
  //   }
  
    // Lesson (4)

  // setup(){
  //   let search = ref("");
  //   let names = ref(["Daniel","Key","Peele"]);

  //   // computed method to Perform the Search Process(names)
  //   let filteredNames=computed(()=>{
  //     return names.value.filter(name=>{
  //       return name.includes(search.value);
  //     })
  //   })
     
  // Lesson(5)

  setup(){

    // let showPosts = ref(true);
    let posts = ref([
      {"title": "post title 1" , "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laudantium esse maiores molestiae ab iste a quis nesciunt labore iure minima, maxime facilis nisi error. Doloremque cum accusamus vero eius quasi excepturi exercitationem, sequi dignissimos? Ea iusto amet neque. Accusamus sed ad facere distinctio voluptate sunt omnis tempora odit consectetur, similique illo error porro, voluptatem quibusdam deleniti? Commodi, beatae, eos rem ducimus cum consequatur totam, velit blanditiis deserunt repellat quidem alias sapiente. Praesentium provident saepe reprehenderit impedit cupiditate qui quasi itaque alias vel repellendus? Sunt maiores dicta harum in alias id quibusdam, ullam blanditiis voluptates sit placeat officia. Rem, odit", "id": 1},
      {"title": "post title 2" , "content": " Ea iusto amet neque. Accusamus sed ad facere distinctio voluptate sunt omnis tempora odit consectetur, similique illo error porro, voluptatem quibusdam deleniti? Commodi, beatae, eos rem ducimus cum consequatur totam, velit blanditiis deserunt repellat quidem alias sapiente.", "id": 2}
    ]);
    // console.log(posts.value);
    //need to return to activate Composition API Methodd
    // return {person1,person2,changePer1,changePer2};
    // return {names,search,filteredNames};
    return {posts};
  }
}
</script>
