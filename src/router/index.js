import {createRouter, createWebHashHistory} from 'vue-router'
import AfficherTousEleve from "@/components/eleve/AfficherTousEleve"
import AfficherUnEleve from "@/components/eleve/AfficherUnEleve"
import CreateEleve from "@/components/eleve/CreateEleve"
import ModifierUnEleve from "@/components/eleve/ModifierUnEleve";
import AfficherToutesDisciplines from "@/components/discipline/AfficherToutesDisciplines";
import CreateDiscipline from "@/components/discipline/CreateDiscipline";
import InscrireUnEleveAUneDiscipline from "@/components/eleveEtDiscipline/InscrireUnEleveAUneDiscipline";
import ListeElevesCours from "@/components/eleveEtDiscipline/ListeElevesCours";
import AjouterUneNote from "@/components/notes/AjouterUneNote";
import DetailDesNotes from "@/components/notes/DetailDesNotes";



const routes = [
    {
        path: '/afficher_all_eleve',
        name:'afficher_all_eleve',
        component: AfficherTousEleve
    },
    {
        path: '/afficher_un_eleve',
        name:'afficher_un_eleve',
        component: AfficherUnEleve
    },
    {
        path: '/create_un_eleve',
        name:'create_un_eleve',
        component: CreateEleve
    },
    {
        path: '/update_un_eleve',
        name:'update_un_eleve',
        component: ModifierUnEleve
    },
    {
        path: '/afficher_discipline',
        name:'afficher_discipline',
        component: AfficherToutesDisciplines
    },
    {
        path: '/create_discipline',
        name:'create_discipline',
        component: CreateDiscipline
    },
    {
        path: '/inscrire_eleve_discipline',
        name:'inscrire_eleve_discipline',
        component: InscrireUnEleveAUneDiscipline
    },
    {
        path: '/liste_eleve_cours',
        name:'liste_eleve_cours',
        component: ListeElevesCours
    },
    {
        path: '/ajouter_note',
        name:'ajouter_note',
        component: AjouterUneNote
    },
    {
        path: '/details_notes',
        name:'detail_notes',
        component: DetailDesNotes
    }
];



const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    })



export default router



