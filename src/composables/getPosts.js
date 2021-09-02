import { ref } from "vue";
import { db,timestamp } from "../firebase/config"

let getPosts=()=>{
    let posts = ref([]);
    let error = ref("");
    //New Async Function Methods
    let load=async()=>{
      try{

      //Fetching Records from Firebase Server
      let res =  await db.collection("posts").orderBy("created_at","desc").get()
      
      //to put Firebase Records into arrays
       posts.value = res.docs.map((doc)=>{
         return {id:doc.id,... doc.data()}
        // console.log(doc.data())
       })

      
      // console.log(res.docs); //checking arrays 
      
        //JSON Sever Fetching Code

        // //to Perform the Loading before Fetching Process
        //   // await new Promise((resolve,reject)=>{
        //   //   setTimeout(resolve,1500);
        //   // })
        //   let response = await fetch("http://localhost:3000/posts")

        //   if(response.status == 404){
        //     throw new Error("not Found URL");
        //   }

        //   let datas = await response.json();
        //   // console.log(datas);
        //   posts.value = datas;
      }catch(err){
            // console.log(error.message);
            error.value = err.message;
      }
      
    }

    return {posts,error,load}; //need return to provide Function at the others
}

export default getPosts;