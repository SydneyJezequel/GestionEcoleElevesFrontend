<template>
  <h3>{{titre}}</h3>
  <form @submit="submitForm" method="post">
    <div>
      <label for="discipline">discipline :</label>
      <input type="text" id="discipline" v-model="discipline.discipline" required>
    </div>
    <div>
      <label for="nom_professeur ">nom professeur :</label>
      <input type="text" id="nom_professeur " v-model="discipline.nomProfesseur" required>
    </div>
    <div>
      <label for="prenom_professeur ">prénom professeur :</label>
      <input type="text" id="prenom_professeur " v-model="discipline.prenomProfesseur" required>
    </div>
    <button type="submit">Ajouter</button>
  </form>
  <br>
</template>






<script>
import axios from "axios";
import router from "@/router";


export default {
  name: "CreateDiscipline",




  // ******************************* Données *******************************
  data() {
    return {
      data: null,
      titre: 'Ajouter une nouvelle discipline',
      discipline: {
        discipline: null,
        nomProfesseur: null,
        prenomProfesseur: null
      },
    }
  },




  // ******************************* Méthodes *******************************
  methods: {

    // Méthode 1 : Ajout d'une nouvelle discipline :
    submitForm(event) {
      event.preventDefault();
      axios.post('/api/discipline/create-one', this.discipline)
        .then(response => {
          console.log(response);
         this.routageAfficherToutesLesDisciplines();
        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
        });
    },

    // Méthode 2 : Routage vers la page d'affichage de tous les élèves :
    routageAfficherToutesLesDisciplines:function()
    {
      router.push({ name: 'afficher_discipline' });
    }

  },




}






</script>

<style scoped>

</style>