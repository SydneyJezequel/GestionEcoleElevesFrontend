<template>
  <h2>{{titre}}</h2>
  <button @click="getAll">getAll</button>
  <br>
  <div v-if="data">
    <div v-for="eleve in data" :key="eleve.id">
      <p>{{ eleve }}</p>
      <p>{{ eleve.nom }}</p>
      <p>{{ eleve.prenom }}</p>
      <p>{{ eleve.dateNaissance }}</p>
      <p>{{ eleve.classe }}</p>
    </div>
  </div>
</template>








<script>
import axios from "axios"

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
    }
  }


}
</script>






<style scoped>

</style>