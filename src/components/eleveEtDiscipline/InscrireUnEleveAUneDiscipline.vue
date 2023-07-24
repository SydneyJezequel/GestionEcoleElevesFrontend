<template>
  <h3> {{titre}}</h3>

  <form @submit="submitForm" method="post">

    <div class="first-div">
      <label for="disciplines">Discipline :</label>
      <select v-model="selectDiscipline">
        <option v-for="discipline in listeDisciplines" v-bind:key="discipline.key">
          {{ discipline.id }}
          {{ discipline.discipline }}
        </option>
      </select>
    </div>

    <div class="second-div">
      <label for="eleves">Elève :</label>
      <select v-model="selectEleve">
        <option v-for="eleve in listeEleves" v-bind:key="eleve.key">
          {{ eleve.no_eleve }} {{ eleve.nom }}  {{ eleve.prenom }}
        </option>
      </select>
    </div>
    <br>
    <br>
    <button type="submit">Inscrire l'élève au cours</button>
  </form>
  <br>
  <br>
</template>






<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "InscrireUnEleveAUneDiscipline",



  // ******************************* Données *******************************
  data(){
    return{
      data: null,
      titre:'Inscrire un élève à un cours',
      listeDisciplines: this.getAllDisciplines(),
      listeEleves: this.getAllEleves(),
      selectDiscipline: null,
      selectEleve: null,
      eleveChoisi:null,
      disciplineChoisie: null
    }
  },



  // ******************************* Méthodes *******************************
  methods: {


    // Méthode 1 : Charger la liste des cours :
    getAllDisciplines: function () {
      axios.get("/api/discipline/get-all").then((response) => {
        this.listeDisciplines = response.data;
        console.log(this.listeDisciplines);
      })
      .catch(error => {
        console.log(error);
      })
    },


    // Méthode 2 : Charger la liste des élèves :
    getAllEleves: function () {
      axios.get("/api/eleve/get-all").then((response) => {
        this.listeEleves = response.data;
        console.log(this.listeEleves);
      })
      .catch(error => {
        console.log(error);
      })
    },


    // Méthode 3 : Inscrire un élève à un cours :
    submitForm(event) {
      event.preventDefault();
      this.eleveChoisi = this.getId(this.selectEleve);
      this.disciplineChoisie = this.getId(this.selectDiscipline);
      // Contrôle :
      console.log(this.eleveChoisi);
      console.log(this.disciplineChoisie);

      axios.post('/api/discipline/inscription/' + this.eleveChoisi+"/"+this.disciplineChoisie)
          .then(response => {
            console.log(response);
            this.routageListeEleveCours();
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
    },


    // Méthode 4 : Récupérer l'identifiant de l'élève et du cours :
    getId:function(stringATraiter)
    {
      let arrayId = stringATraiter.split(' ');
      return arrayId[0];
    },


    // Méthode 5 : Routage vers les listes d'élèves par cours :
    routageListeEleveCours:function()
    {
      router.push({ name: 'liste_eleve_cours' });
    },



  }




}






</script>

<style scoped>
.first-div {
  padding-right: 20px; /* Adjust the value to control the horizontal space */
}
.second-div {
  padding-left: 20px; /* Adjust the value to control the horizontal space */
}

</style>



