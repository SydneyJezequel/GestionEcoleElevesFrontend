<template>
  <h3>{{titre}}</h3>
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
    <br>

    <div class="second-div">
      <label for="eleves">Elève :</label>
      <select v-model="selectEleve">
        <option v-for="eleve in listeEleves" v-bind:key="eleve.key">
          {{ eleve.no_eleve }} {{ eleve.nom }}  {{ eleve.prenom }}
        </option>
      </select>
    </div>
    <br>

    <div>
      <label for="note">Note :</label>
      <input type="text" id="note" v-model="note" required>
    </div>
    <button type="submit">Ajouter</button>
  </form>
  <br>
  <br>
</template>






<script>
import axios from "axios";
import router from "@/router";
import apiAxios from "@/service/apiAxios";

export default {
  name: "AjouterUneNote",



  // ******************************* Données *******************************
  data(){
    return{
      titre: "Ajouter une Note",
      listeDisciplines: this.getAllDisciplines(),
      listeEleves: this.getAllEleves(),
      note : null,
      selectDiscipline: null,
      selectEleve: null,
      eleveChoisi:null,
      disciplineChoisie: null
    }
  },



  // ******************************* Méthodes *******************************
  methods: {

    // Méthode 1 : Ajout d'une nouvelle Note :
    submitForm(event) {
      event.preventDefault();
      this.eleveChoisi = this.getId(this.selectEleve);
      this.disciplineChoisie = this.getId(this.selectDiscipline);
      // Contrôle :
      console.log(this.eleveChoisi);
      console.log(this.disciplineChoisie);
      console.log(this.note);

      axios.post('/api/eleve/ajout_note/'+this.eleveChoisi+"/"+this.disciplineChoisie+"/"+this.note)
          .then(response => {
            console.log(response);
            this.routageDetailDesNotes();
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
    },

    // Méthode 2 : Récupérer l'identifiant de l'élève et du cours :
    getId:function(stringATraiter)
    {
      let arrayId = stringATraiter.split(' ');
      return arrayId[0];
    },

    // Méthode 3 : Charger la liste des cours :
    getAllDisciplines: function () {
      apiAxios.getAllDisciplines().then((response) => {
        this.listeDisciplines = response.data;
        console.log(this.listeDisciplines);
      })
          .catch(error => {
            console.log(error);
          })
    },

    // Méthode 4 : Charger la liste des élèves :
    getAllEleves: function () {
      apiAxios.getAllEleves().then((response) => {
        this.listeEleves = response.data;
        console.log(this.listeEleves);
      })
      .catch(error => {
        console.log(error);
      })
    },

    // Méthode 5 : Routage vers la page d'affichage de tous les élèves :
    routageDetailDesNotes:function()
    {
      router.push({ name: 'detail_notes' });
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