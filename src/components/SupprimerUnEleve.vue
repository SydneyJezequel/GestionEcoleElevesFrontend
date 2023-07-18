<template>
  <h2>{{titre}}</h2>

  <form @submit="submitForm" method="post">
    <div>
      <label for="id">Renseigner l'identifiant de l'élève :</label>
      <input type="number" id="id" v-model="id" required>
    </div>
    <button type="submit">Supprimer</button>
  </form>

</template>










<script>
// import axios from "axios"
// import {parse, stringify} from "qs";

export default {

  name: "SupprimerUnEleve",


  // Data chargées au chargement de la page :
  data(){
    return{
      data: null,
      titre:'Supprimer un Elève',
      id:null
    };
  },


  // Méthodes :
  methods:{
    submitForm(event) {
      event.preventDefault();
      console.log(
          "id : "+ this.id,
      );
      // AJOUT DE L'API AXIOS :
      /*
      axios.post('/api/crud-delete-one/', {params:this.id, paramsSerializer: {
          encode: parse,
          serialize: stringify,}})
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
       */
    }
  }
}






</script>

<style scoped>

</style>