<template>
  <h2>{{titre}}</h2>

  <form @submit="submitForm" method="post">
    <!-- ************** LISTE DEROULANTE DYNAMIQUE ************** -->
    <!--
        <label for="maison">Test liste maison :</label>
        <select v-model="eleve.maisonChoisie">
          <option v-for="option in options" v-bind:key="option.value">
            {{ option.text }}
          </option>
        </select>
    <br>
    -->
    <!-- ************** LISTE DEROULANTE DYNAMIQUE ************** -->

    <label for="maison">liste maison :</label>
    <select v-model="eleve.maison">
      <option v-for="option in options1" v-bind:key="option.value">
        {{ option.text }}
      </option>
    </select>
    <div>
      <label for="annee">annee :</label>
      <input type="number" id="annee" v-model="eleve.annee" required>
    </div>
    <div>
      <label for="date_naissance">date de naissance :</label>
      <input type="date" id="date_naissance" v-model="eleve.dateNaissance" required>
    </div>
    <div>
      <label for="nom">Nom :</label>
      <input type="text" id="nom" v-model="eleve.nom" required>
    </div>
    <div>
      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" v-model="eleve.prenom" required>
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
        titre:'Créer un Elève',
        eleve:{

           annee: null,
           dateNaissance: null,
           nom: null,
           prenom: null,
           maison: null,
      },
      // Liste non dynamique temporaire :
      options1: [{text:'Gryfondor', value:'1'},{text:'Serdaigle', value:'2'},{text:'Poufsoufle', value:'3'},{text:'Serpentard', value:'4'}],
      // ********************** Liste dynamique : Non fonctionnelle **********************
      options:
        axios.get('api/crud-get-maisons')
        .then(response => {
          console.log("response.data : "+response.data);
          let arrayMaison;
          arrayMaison = response.data;
          console.log("variable arrayMaison : "+arrayMaison);
          return arrayMaison;
        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
        }),
      // ********************** Liste dynamique : Non fonctionnelle **********************
  };
},

// Méthodes :
methods: {
  submitForm(event) {
    event.preventDefault();
    // *********************** Contrôle :  ***********************
    console.log(this.eleve);
    // *********************** Contrôle :  ***********************
    axios.post('/api/crud-create-one', this.eleve)
          .then(response => {
            console.log(response);
        })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
        });
    },
  }




}





</script>

<style scoped>

</style>