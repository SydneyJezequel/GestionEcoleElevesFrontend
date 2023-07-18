<template>
  <h2>{{titre}}</h2>

  <form @submit="submitForm" method="post">
    <div>
      <label for="id">Identifiant de l'élève :</label>
      <input type="number" id="id" v-model="id" required>
    </div>
    <button type="submit">Afficher</button>
  </form>

</template>










<script>
import axios from "axios"
import {parse, stringify} from "qs";

export default {

  name: "AfficherUnEleve",


  // Data chargées au chargement de la page :
  data(){
    return{
      data: null,
      titre:'Afficher un Elève',
      id:null
    };
  },


  // Méthode
  methods:{
    submitForm(event) {
      event.preventDefault();
      console.log("id : "+ this.id);
      axios.get('/api/crud-get-one/', {params:this.id, paramsSerializer: {
          encode: parse,
          serialize: stringify,}})
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
    }
  }




  // AVANT :
  /*
    methods:{
    submitForm(event) {
      event.preventDefault();
      console.log("id : "+ this.id);
      axios.get('/api/crud-get-one/', {params:this.id})
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
    }
  }
  */





}






</script>

<style scoped>

</style>