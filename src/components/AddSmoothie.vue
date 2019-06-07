<template>
   <div class="add-smoothie container">
       <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
       <form @submit.prevent="AddSmoothie">
           <div class="field title">
               <label for="title">Smoothie Title</label>
               <input type="text" name="title" v-model="title" >
           </div>
           <div v-for="(ing,index) in ingredients" :key="index">
               <label for="ingredients">ingredients:</label>
               <input type="text" name="ingredients" v-model="ingredients[index]">
           </div>
           <div class="field add-ingredient">
               <label for="add-ingredient">Add an ingredient:</label>
               <input input="text" name="add-ingredient" @keydown.enter.prevent="addIng" v-model="another">
           </div>
           <div class="field center align">
               <p class="red-text" v-if="feedback">{{feedback}}</p>
               <button class="btn pink">Add Smoothie</button>
           </div>
       </form>
   </div>
</template>

</<script>
import db from '@/firebase/init'
//use slugify to handle the slug
import slugify from 'slugify'
export default {
    name:'addsmoothie',
    data(){
        return{
            title:null,
            another:null,
            ingredients:[],
            feedback:null, 
            slug:null,
        }
    },
    methods:{
        AddSmoothie(){
            if(this.title){
                this.feedback = null
                //slug need to go here
                //create a slug
                this.slug = slugify(this.title,{
                    replacement:'-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower:true
                })
                db.collection('smoothie').add({
                    title:this.title,
                    ingredients:this.ingredients,
                    slug:this.slug
                }).then(()=>{
                    this.$router.push({name:'Index'})
                }).catch(error=>{
                    console.log('error in adding smoothie',error)
                })
            }else{
                this.feedback = "your must enter a title"
            }
        },
        addIng(){
            if(this.another){
                this.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            }else{
                this.feedback = 'You Must Enter A Ingredients'
            }
        }
    }
}
</script>

<style>
.add-smoothie{
    margin-top:60px;
    padding: 20px;
    max-width: 500px;
}

.add-smoothie h2{
    font-size: 2em;
    margin: 20px auto;
}
.add-smoothie .field{
    margin:20px auto;
}
</style>
