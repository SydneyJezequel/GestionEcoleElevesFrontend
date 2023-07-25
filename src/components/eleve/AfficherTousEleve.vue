<template>
  <h3>{{titre}}</h3>
  <br>
  <div v-if="this.data!=null" class="table-container">
    <table>
      <tr>
        <th>No Eleve</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Maison</th>
        <th>Annee</th>
        <th>Moyenne Générale</th>
        <th colspan="4">Actions</th>
      </tr>
      <tr v-for="item in data" v-bind:key="item.no_eleve">
        <td>{{ item.no_eleve }}</td>
        <td>{{ item.nom }}</td>
        <td>{{ item.prenom }}</td>
        <td>{{ item.maison }}</td>
        <td>{{ item.annee }}</td>
        <td>{{ item.moyenneGenerale }}</td>
        <td>
          <button @click="deleteEleve(item.no_eleve)">Supprimer</button>
          <button @click="routageAfficherUpdate">Modifier</button>
          <button @click="routageAjouterUneDiscipline">Inscrire à un cours</button>
          <button @click="routageDetailDesNotes">Afficher le détail des notes</button>
        </td>
      </tr>
    </table>
  </div>
  <br>
  <br>
</template>






<script>
import router from "@/router";
import apiAxios from "@/service/apiAxios";

export default {
  name: 'AccueilAppli',




  // ******************************* Données *******************************
  data(){
    return{
      data: this.getAll(),
      titre:'Liste des Elèves',
      moyenneGenerale: null
    };
  },




  // ******************************* Méthodes *******************************
  methods:{

    // Méthode 1 : Affichage de tous les élèves
    getAll:function()
    {
      apiAxios.getAllEleves().then((res)=>
      {
        console.log(res);
        this.data  = res.data;
        return this.data;
      })
      .catch(error =>{
        console.log(error);
      })
    },

    // Méthode 2 : Supprimer un Elève :
    deleteEleve: function(no_eleve) {
      apiAxios.deleteEleve(no_eleve)
          .then(response => {
            console.log(response);
            this.getAll();
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
          });
    },

    // Méthode 3 : Routage vers la page de modification :
    routageAfficherUpdate:function()
    {
      router.push({ name: 'update_un_eleve' });
    },

    // Méthode 4 : Routage vers la page de suppression :
    routageAjouterUneDiscipline:function()
    {
      router.push({ name: 'inscrire_eleve_discipline' });
    },

    // Méthode 5 : Routage vers la page de détail des notes :
    routageDetailDesNotes:function ()
    {
      router.push({ name: 'detail_notes' })
    }


  }
}
</script>






<style scoped>

/*Tableau centré*/
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




