<template>
  <h2>{{titre}}</h2>
  <button @click="getAll">getAll</button>
  <br>
  <div v-if="this.data!=null" class="table-container">
    <table>
      <tr>
        <th>No Eleve</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Maison</th>
        <th>Annee</th>
        <th>Actions</th>
      </tr>
      <tr v-for="item in data" v-bind:key="item.no_eleve">
        <td>{{ item.no_eleve }}</td>
        <td>{{ item.nom }}</td>
        <td>{{ item.prenom }}</td>
        <td>{{ item.maison }}</td>
        <td>{{ item.annee }}</td>
        <td>
          <button @click="afficherUpdate">Modifier</button>
          <button @click="afficherSupprimer">Supprimer</button>
        </td>
      </tr>
    </table>
  </div>
</template>








<script>
import axios from "axios"
import router from "@/router";

export default {
  name: 'AccueilAppli',




  // Data chargées au chargement de la page :
  data(){
    return{
      data: null,
      titre:'Afficher tous les Elèves'
    };
  },




  // Méthodes :
  methods:{
    getAll:function()
    {
      axios.get("/api/crud-get-all").then((res)=>
      {
        console.log(res);
        this.data  = res.data;
        return this.data;
      })
      .catch(error =>{
        console.log(error);
      })
    },

    // Routage vers la page de modification :
    afficherUpdate:function()
    {
      router.push({ name: 'update_un_eleve' });
    },

    // Routage vers la page de suppression :
    afficherSupprimer:function()
    {
      router.push({ name: 'delete_un_eleve' });
    }
  }
}
</script>










<style scoped>



/*Tableau centré*/
.table-container {
  display: flex;
  justify-content: center;
}



</style>






