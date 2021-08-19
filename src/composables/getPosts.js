import { ref } from "vue";

let getPosts=()=>{
    let posts = ref([]);
    let error = ref("");
    //New Async Function Methods
    let load=async()=>{
      try{
          let response = await fetch("http://localhost:3000/posts")

          if(response.status == 404){
            throw new Error("not Found URL");
          }

          let datas = await response.json();
          // console.log(datas);
          posts.value = datas;
      }catch(err){
            // console.log(error.message);
            error.value = err.message;
      }
      
    }

    return {posts,error,load};
}

export default getPosts;