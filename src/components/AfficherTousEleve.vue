<template>
  <h2>{{titre}}</h2>
  <button @click="getAll">getAll</button>
  <br>
  <div v-if="data!=null">
    <div v-for="item in data" v-bind:key="item.id">
      <p>{{ item }}</p>
      <p>{{ item.id }}</p>
      <p>{{ item.nom }}</p>
      <p>{{ item.prenom }}</p>
      <p>{{ item.maison }}</p>
      <p>{{ item.annee }}</p>
      <button @click="afficherUpdate">Modifier</button>
      <button @click="afficherSupprimer">Supprimer</button>
    </div>
  </div>
</template>








<script>
import axios from "axios"
import router from "@/router";

export default {
  name: 'AccueilAppli',




  // Data chargées au chargement de la page :
  data(){
    return{
      data: null,
      titre:'Afficher tous les Elèves'
    };
  },




  // Méthodes :
  methods:{
    getAll:function()
    {
      axios.get("/api/crud-get-all").then((res)=>
      {
        console.log(res);
        this.data  = res;
        return this.data;
      })
      .catch(error =>{
        console.log(error);
      })
    },

    // Routage vers la page de modification :
    afficherUpdate:function()
    {
      router.push({ name: 'update_un_eleve' });
    },

    // Routage vers la page de suppression :
    afficherSupprimer:function()
    {
      router.push({ name: 'delete_un_eleve' });
    }
  }


}
</script>






<style scoped>

</style>