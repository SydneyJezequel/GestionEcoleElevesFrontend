<template>
  <h3>{{titre}}</h3>

  <form @submit="submitForm" method="post">
    <div>
      <label for="id">Identifiant de l'élève :</label>
      <input type="number" id="id" v-model="id" required>
    </div>
    <button type="submit">Afficher</button>
  </form>
  <br>
  <br>
  <!--Affichage de l'élève-->
  <div v-if="this.data!=null" class="table-container">
    <table class="table">
      <tr>
        <th>No Eleve</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Maison</th>
        <th>Annee</th>
      </tr>
      <tr>
        <td>{{ data.no_eleve }}</td>
        <td>{{ data.nom }}</td>
        <td>{{ data.prenom }}</td>
        <td>{{ data.maison }}</td>
        <td>{{ data.annee }}</td>
      </tr>
        <th colspan="5">Liste des matières suivies</th>
        <tr v-for="cours in listeCours" v-bind:key="cours.id">
          <div>{{ cours.discipline }}</div>
        </tr>
    </table>
  </div>
  <br>
  <br>
</template>






<script>
import axios from "axios"

export default {
  name: "AfficherUnEleve",




  // ******************************* Données *******************************
  data(){
    return{
      data: null,
      titre:'Afficher un Elève',
      id: null,
      listeCours: null
    };
  },




  // ******************************* Méthodes *******************************
  methods:{

    // Méthode 1 : Afficher un élève.
    submitForm(event) {
      event.preventDefault();
      console.log("id : "+ this.id);
      axios.get('/api/eleve/get-one/'+this.id)
          .then(response => {
            console.log(response);
            this.data = response.data;
            this.getCoursSuivis(this.id);
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
    },

    // Méthode 2 : Chargement des cours suivis :
    getCoursSuivis: function (id) {
      axios.get("/api/discipline/cours_suivi_par_eleve/"+id).then((res) => {
        this.listeCours = res.data;
        console.log(this.listeCours);
      })
      .catch(error => {
        console.log(error);
      })
    },

  }

}







</script>

<style scoped>
/*Tableau centré*/

.table{
  border: 1px solid #ddd;
}

.table-container
{
  display: flex;
  justify-content: center;
  border-collapse: collapse;
  width: 100%;
}

.table-container th,
.table-container td,
.table-container tr
{
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table-container th {
  background-color: #f2f2f2;
}

</style>


