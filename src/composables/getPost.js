import { ref } from "vue";
import {db} from "../firebase/config"

let getPost=(id)=>{
    let post = ref(null);// give Null at First
    let error = ref('');

    let load=async()=>{
        try{

            //Fetching a Single Record from Firebase Server
            let doc =  await db.collection("posts").doc(id).get()
            post.value = {id:doc.id,...doc.data()}//Retrieving from data 

            // console.log(doc.data());




             //to Perform the Loading before Fetching Process
            // await new Promise((resolve,reject)=>{
            // setTimeout(resolve,1500);
            //  })

            //fetching a Single Data (with Id)
            // let response = await fetch("http://localhost:3000/posts/" + id);

            // if(response.status == 404){
            //     throw new Error("not Found URL");
            // }
            // let data = await response.json();
            // post.value = data;
        }
        catch(err){
            error.value = err.message;
        }
    }

    return {post,error,load};
   
}

export default getPost;