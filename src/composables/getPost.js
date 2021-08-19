import { ref } from "vue";

let getPost=(id)=>{
    let post = ref(null);// give Null at First
    let error = ref('');

    let load=async()=>{
        try{

             //to Perform the Loading before Fetching Process
            await new Promise((resolve,reject)=>{
            setTimeout(resolve,1500);
             })

            //fetching a Single Data (with Id)
            let response = await fetch("http://localhost:3000/posts/" + id);

            if(response.status == 404){
                throw new Error("not Found URL");
            }
            let data = await response.json();
            post.value = data;
        }
        catch(err){
            error.value = err.message;
        }
    }

    return {post,error,load};
   
}

export default getPost;