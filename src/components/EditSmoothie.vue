<template>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2>Edit a smoothie {{this.smoothie.title}}</h2>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {  
    name:'EditSmoothie',
    data(){
        return{
            smoothie: null,
        }
    },
    created(){
        let ref = db.collection('smoothie').where('slug','==',this.$route.params.smoothie_slug)
        ref.get().then(snapeshot=>{
            snapeshot.forEach(doc=>{
                this.smoothie = doc.data()
                this.smoothie.id = doc.id
            })
        })
    }
}
</script>

<style>

</style>

