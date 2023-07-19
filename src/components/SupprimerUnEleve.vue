<template>
  <h2>{{titre}}</h2>

  <form @submit="submitForm" method="post">
    <div>
      <label for="id">Renseigner l'identifiant de l'élève :</label>
      <input type="number" id="id" v-model="id" required>
    </div>
    <button type="submit">Supprimer</button>
  </form>

  <div v-if="data!=null">
      <p>{{ data.resultat }}</p>
  </div>

</template>










<script>
import axios from "axios";

export default {

  name: "SupprimerUnEleve",


  // Data chargées au chargement de la page :
  data(){
    return{
      data: null,
      titre:'Supprimer un Elève',
      id:null,
      resultat:null
    };
  },


  // Méthodes :
  methods:{
    submitForm(event) {
      event.preventDefault();
      console.log(
          "id : "+ this.id,
      );
      axios.get('/api/crud-delete-one/'+this.id)
          .then(response => {
            console.log(response);
            this.resultat = response;
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
    }
  }
}






</script>

<style scoped>

</style>