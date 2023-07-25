import axios from "axios";


// Base de l'URL :
const apiClient = axios.create({
    baseURL: "http://localhost:8080",
});


// Liste des requêtes de l'API :
export default {




    // *************************** Requêtes relatives aux élèves  ***************************

    // Requête 1 : Récupérer tous les élèves :
    getAllEleves() {
        return apiClient.get("/api/eleve/get-all");
    },

    // Requête 2 : Supprimer un élève
    deleteEleve(no_eleve) {
        return apiClient.post("/api/eleve/delete-one/"+no_eleve);
    },

    // Requête 3 : Afficher un élève
    getOneEleve(no_eleve) {
        return apiClient.post("/api/eleve/get-one/"+no_eleve);
    },

    // Requête 4 : Afficher un élève
    getCoursSuivis(no_eleve) {
        return apiClient.post("/api/discipline/cours_suivi_par_eleve/"+no_eleve);
    },

    // Requête 5 : Récupérer la liste des maisons
    getListeMaisons() {
        return apiClient.get("/api/eleve/get-maisons");
    },

    // Requête 6 : Créer un élève
    createEleve(eleve) {
        console.log(eleve);
        return apiClient.post("/api/eleve/create-one"+eleve);
    },

    // Requête 7 : Modifier un élève
    updateEleve(eleve) {
        return apiClient.put("/api/eleve/update-one"+eleve);
    },




    // *************************** Requêtes relatives aux disciplines  ***************************

    // Requête 1 : Afficher les disciplines :
    getAllDisciplines(){
        return apiClient.get("/api/discipline/get-all");
    },

    // Requête  2 : Supprimer une discipline :
    deleteDiscipline(id) {
        return apiClient.post('/api/discipline/delete-one/'+ id);
    },

    // Requête  3 : Supprimer une discipline :
    createDiscipline(discipline) {
        return apiClient.post('/api/discipline/create-one'+ discipline);
    },

    // Requête  4 : Inscrire un élève à une discipline :
    inscrireEleveADiscipline(eleveChoisi, disciplineChoisie) {
        return apiClient.post('/api/discipline/inscription/' +eleveChoisi+"/"+disciplineChoisie)
    },

    // Requête  5 : Récupérer le détail des notes de chaque élève :
    getDetailsNotes() {
        return apiClient.post('/api/eleve/detail_notes')
    },




    // *************************** Requêtes relatives aux notes  ***************************

    // Requête 1 : Ajouter une note à un élève :
    ajouterUneNoteAUnEleve(eleveChoisi, disciplineChoisie, note){
        return apiClient.post('/api/eleve/ajout_note/'+eleveChoisi+"/"+disciplineChoisie+"/"+note);
    },





};

