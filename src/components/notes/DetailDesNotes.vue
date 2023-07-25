<template>
  <h3>{{ titre }}</h3>
  <div v-if="this.listeNotesParEleve!=null" class="table-container">
    <table class="my-table">
      <tr>
        <th>Elève</th>
        <th colspan="3">Notes</th>
      </tr>
      <tr v-for="element in listeNotesParEleve" v-bind:key="element.id">
        <td>{{ element.nom }} {{ element.prenom }} {{ element.maison }}</td>
        <div class="note">
          <div v-for="note in element.listeNotes" v-bind:key="note.id">
            {{ note.note }}
          </div>
        </div>
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
  name: "DetailDesNotes",



  // ******************************* Données *******************************
  data() {
    return {

      titre: 'Detail des notes par élèves',
      listeNotesParEleve: this.getNotes()
    }
  },



  // ******************************* Méthodes *******************************

  methods: {

    // Méthode 1 : Chargement des élèves et de leurs notes :
    getNotes:function () {
      axios.get('/api/eleve/detail_notes').then((res)=>
      {
        console.log(res);
        this.listeNotesParEleve  = res.data;
        console.log(this.listeNotesParEleve);
        return this.listeNotesParEleve;
      })
      .catch(error =>{
        console.log(error);
      })

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
  width: 90%;
}

.note{
  border: 1px solid #ddd;
  padding: 8px;
}

.table-container th,
.table-container td,
.table-container tr {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table-container th {
  background-color: #f2f2f2;
}

</style>