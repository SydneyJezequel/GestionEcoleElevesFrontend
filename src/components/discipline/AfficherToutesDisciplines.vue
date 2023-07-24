<template>
  <h3>{{titre}}</h3>
  <button @click="getAll">Charger toutes les disciplines</button>
  <br>
  <br>
  <div v-if="this.data!=null" class="table-container">
    <table>
      <tr>
        <th>no_discipline</th>
        <th>Discipline</th>
        <th>Nom Professeur</th>
        <th>Prenom Professeur</th>
        <th>Supprimer</th>
        <th>Gérer les inscriptions</th>
        <th>Elèves inscrits</th>
      </tr>
      <tr v-for="item in data" v-bind:key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.discipline }}</td>
        <td>{{ item.nomProfesseur }}</td>
        <td>{{ item.prenomProfesseur }}</td>
        <td><button @click="deleteDiscipline(item.id)">Supprimer cette discipline</button></td>
        <td><button @click="routageInscrireEleve">Inscrire à un cours</button></td>
        <td><button @click="listeEleves()">Liste des élèves inscrits</button></td>
      </tr>
    </table>
  </div>
  <br>
  <div>
    <button @click="routageAjouterUneDiscipline">Ajouter une discipline</button>
  </div>
  <br>
  <br>
</template>






<script>
import axios from "axios";
import router from "@/router";



export default {
  name: "AfficherToutesDisciplines",



  // ******************************* Données *******************************
  data() {
    return {
      data: null,
      titre: 'Liste des disciplines'
    };
  },



  // ******************************* Méthodes *******************************
  methods: {

    // Méthode 1 : Afficher les disciplines :
    getAll: function () {
      axios.get("/api/discipline/get-all").then((res) => {
        console.log(res);
        this.data = res.data;
        return this.data;
      })
          .catch(error => {
            console.log(error);
          })
    },

    // Méthode 2 : Supprimer une discipline :
    deleteDiscipline: function(id) {
      axios.post('/api/discipline/delete-one/'+ id)
          .then(response => {
            console.log(response);
            this.getAll();
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
    },

    // Méthode 3 : Routage vers la page qui affiche les élèves inscrits par cours :
    listeEleves:function()
    {
      router.push({ name: 'liste_eleve_cours' });
    },

    // Méthode 4 : Routage vers la page de d'inscription à une discipline :
    routageInscrireEleve:function()
    {
      router.push({ name: 'inscrire_eleve_discipline' });
    },

    // Méthode 5 :
    routageAjouterUneDiscipline:function()
    {
      router.push({ name: 'create_discipline' });
    },




  }


}






</script>


<style scoped>

.table-container {
  display: flex;
  justify-content: center;
  border-collapse: collapse;
  width: 100%;
}

.table-container th,
.table-container td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table-container th {
  background-color: #f2f2f2;
}


</style>



