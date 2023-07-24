<template>
  <h4>{{titre}}</h4>
  <div v-if="this.data!=null" class="table-container">
    <table class="my-table">
      <tr>
        <th>Discipline</th>
        <th>Professeur</th>
        <th>Liste des Elèves inscrits</th>
      </tr>
      <tr v-for="item in data" v-bind:key="item.id">
        <td>{{ item.discipline }}</td>
        <td>{{ item.nomProfesseur }}</td>
        <td>
          <br>
          <div v-for="eleve in item.eleves" v-bind:key="eleve.no_eleve">
            {{ eleve.nom }} {{ eleve.prenom }}
            <br>
          </div>
          <br>
        </td>
      </tr>
    </table>
</div>
<br>
<br>
<br>
<br>
</template>






<script>
import axios from "axios";

export default {
name: "ListeElevesCours",



// ******************************* Données *******************************
data() {
  return {
    data: this.getAll(),
    titre: 'Liste des élèves inscrits'
  }
},



// ******************************* Méthodes *******************************

methods: {

  // Méthode 1 : Affichage des cours avec les élève qui y assistent :
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
}

}




</script>

<style scoped>
.my-table {
  border-collapse: collapse;
  width: 90%;
}

.table-container {
   display: flex;
   justify-content: center;
   border-collapse: collapse;
   width: 100%;
 }

.my-table th,
.my-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.my-table th {
  background-color: #f2f2f2;
}

</style>