<template>
  <h2>{{titre}}</h2>

  <form @submit="submitForm" method="post">
    <div>
      <label for="maison">maison :</label>
      <input type="text" id="maison" v-model="maison" required>
    </div>
    <div>
      <label for="annee">annee :</label>
      <input type="number" id="annee" v-model="annee" required>
    </div>
    <div>
      <label for="date_naissance">date de naissance :</label>
      <input type="date" id="date_naissance" v-model="date_naissance" required>
    </div>
    <div>
      <label for="nom">Nom :</label>
      <input type="text" id="nom" v-model="nom" required>
    </div>
    <div>
      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" v-model="prenom" required>
    </div>
    <button type="submit">Enregistrer</button>
  </form>
</template>

<script>
// import axios from "axios";
// import {parse, stringify} from "qs";

import axios from "axios";

export default {
  name: "CreateEleve",

  // Data chargées au chargement de la page :
  data(){
    return{
      data: null,
      // Attributs du formulaires :
      titre:'Créer un Elève',
      maison: null,
      annee: null,
      date_naissance: null,
      nom:null,
      prenom:null,
    };
  },


  // Méthodes :
  methods:{
    submitForm(event) {
      event.preventDefault();
      console.log(
          "id : "+ this.no_eleve,
          "maison: "+ this.maison,
          "date_naissance:" + this.date_naissance,
          "annee:" + this.annee,
          "nom:" + this.nom,
          "prenom:"+ this.prenom
      );
      let eleve = {};
      {
        eleve.no_eleve = this.no_eleve,
            eleve.maison = this.maison,
            eleve.annee = this.annee,
            eleve.date_naissance = this.date_naissance,
            eleve.nom = this.nom,
            eleve.prenom = this.prenom
      }
      console.log("eleve : "
          +eleve.no_eleve
          +eleve.maison
          +eleve.annee
          +eleve.date_naissance
          +eleve.nom
          +eleve.prenom
      );
      axios.post('/api/crud-create-one/'+eleve)
          .then(response => {
            console.log(response);
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