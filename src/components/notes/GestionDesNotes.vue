<template>
  <h3>{{ titre }}</h3>
  <br>
  <br>
  <button @click="routageAjouterDesNotes">Ajouter des notes</button>
  <br>
  <br>
  <button @click="routageDetailDesNotes">Afficher le détail des notes</button>
  <br>
  <br>
  <br>
  <br>
</template>






<script>
import router from "@/router";

export default {
  name: "GestionDesNotes",



  // ******************************* Données *******************************
  data() {
    return {
      data: null,
      titre: 'Gestion des Notes'
    }
  },



  // ******************************* Méthodes *******************************

  methods: {

    // Méthode 1 : Routage vers Diagramme des Notes :
    routageAjouterDesNotes: function () {
      router.push({name: 'ajouter_note'});
    },

    // Méthode 2 : Routage vers la page de détail des notes :
    routageDetailDesNotes:function ()
    {
      router.push({ name: 'detail_notes' })
    }

  }

}

</script>






<style scoped>

</style>