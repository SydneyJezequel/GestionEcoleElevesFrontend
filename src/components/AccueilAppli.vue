<template>
  <h2>Bienvenue sur notre application de gestion des élèves</h2>
  <h3>Menu des actions</h3>
  <router-link to="/afficher_all_eleve">Afficher tous les élèves</router-link>
  | <router-link to="/afficher_un_eleve">Afficher un élève</router-link>
  | <router-link to="/create_un_eleve">Inscrire un élève à Poudlard</router-link>
  | <router-link to="/update_un_eleve">Modifier un élève</router-link>
  | <router-link to="/afficher_discipline">Afficher la liste des disciplines</router-link>
  | <router-link to="/liste_eleve_cours">Liste des élèves par cours</router-link>
  | <router-link to="/ajouter_note">Ajouter une note</router-link>
  <br>
  <br>
</template>



<script>
export default {
  name: "AccueilAppli"
}
</script>




<style scoped>

</style>