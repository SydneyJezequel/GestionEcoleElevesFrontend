<template>
  <h2>Bienvenue sur notre application de gestion des élèves</h2>
  <h4>Menu des actions</h4>
  <br>
  <br>
  <router-link to="/afficher_all_eleve">Afficher tous les élèves</router-link>
  | <router-link to="/afficher_un_eleve">Afficher un élève</router-link>
  | <router-link to="/create_un_eleve">Inscrire un élève</router-link>
  | <router-link to="/update_un_eleve">Modifier un élève</router-link>
  | <router-link to="/delete_un_eleve">Suprimer un élève</router-link>
</template>



<script>
export default {
  name: "AccueilAppli"
}
</script>




<style scoped>

</style>