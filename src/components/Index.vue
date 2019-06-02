<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
       <div class="card-content">
         <h2 class="indigo-text">
           {{smoothie.title}}
         </h2>
         <ul class="ingredients">
           <li v-for="(ing,index) in smoothie.ingredients" :key="index">
             <span class="chip">
               {{ing}}
             </span>
           </li>
         </ul>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      smoothies: [
        {
          title: "TrexBrew",
          slug: "Trex-Brew",
          ingredients: [
            "apple",
            "strawberry",
            "coffe",
            "honey",
            "coconut",
            "milk"
          ],
          id: "1"
        },
        {
          title: "AngryHulk",
          slug: "Angry-Hulk",
          ingredients: [
            "apple",
            "espresso",
            "cinnamon",
            "sugarcane",
            "honeydew",
            "milk"
          ],
          id: "2"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top:60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}
.index .ingredients{
  margin: 30px auto;
}
.index .ingredients li{
  display:inline-block;
}
</style>
