<template>
  <h3>{{titre}}</h3>

  <form @submit="submitForm" method="post">
    <div>
      <label for="no_eleve">Matricule de l'élève :</label>
      <input type="number" id="no_eleve" v-model="eleve.no_eleve" required>
    </div>
    <label for="maison">liste maison :</label>
    <select v-model="eleve.maison">
      <option v-for="maison in listeMaison" v-bind:key="maison.value">
        {{ maison }}
      </option>
    </select>
    <!--
    <div>
      <label for="maison">maison :</label>
      <input type="text" id="maison" v-model="maison" required>
    </div>
    -->
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
    <button type="submit">Enregistrer les modifications</button>
  </form>
</template>






<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "ModifierUnEleve",



  // ******************************* Données *******************************
  data(){
    return{
      data: null,
      titre:'Modifier un Elève',
      // Attributs du formulaires :
      eleve:{
        no_eleve: null,
        annee: null,
        dateNaissance: null,
        nom: null,
        prenom: null,
        maison: null,
      },
      listeMaison: this.getListeMaisons(),

    };
  },



  // ******************************* Méthodes *******************************
  methods:{

    // Méthode 1 : Modifier un élève :
    submitForm(event) {
      event.preventDefault();
      console.log("eleve : "
      +this.eleve.no_eleve
      +this.eleve.maison
      +this.eleve.annee
      +this.eleve.dateNaissance
      +this.eleve.nom
      +this.eleve.prenom
      );
      axios.put('/api/eleve/update-one', this.eleve)
          .then(response => {
            console.log(response);
            this.routageAfficherTousEleves();
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
    },

    // Méthode 2 : Chargement de la liste dynamique des maisons :
    getListeMaisons: function () {
      axios.get('/api/eleve/get-maisons')
          .then(response => {
            console.log("response.data : " + response.data);
            this.listeMaison = response.data;
            console.log("response.data : " + response.data + "liste des maisons : " + this.listeMaison);
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          })
    },

    // Méthode 3 : Routage vers la page d'affichage de tous les élèves :
    routageAfficherTousEleves:function()
    {
      router.push({ name: 'afficher_all_eleve' });
    }


  }
}






</script>

<style scoped>

</style>




