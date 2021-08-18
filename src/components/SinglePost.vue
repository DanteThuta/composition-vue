<template>
      <h2> {{post.title}}</h2>
      <h3>{{cutContent}}</h3>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props: ['post'],
    setup(props){

        //to Cut out the Paragraph to only 100 
        let cutContent = computed(()=>{
            return props.post.content.substring(0,50)+ "...";
        })

        return {cutContent};
    }
}
</script>

<style>

</style>