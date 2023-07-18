import {createRouter, createWebHashHistory} from 'vue-router'
import AfficherTousEleve from "@/components/AfficherTousEleve"
import AfficherUnEleve from "@/components/AfficherUnEleve"
import CreateEleve from "@/components/CreateEleve"
import SupprimerUnEleve from "@/components/SupprimerUnEleve";
import ModifierUnEleve from "@/components/ModifierUnEleve";


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
        path: '/delete_un_eleve',
        name:'delete_un_eleve',
        component: SupprimerUnEleve
    },
    {
        path: '/update_un_eleve',
        name:'update_un_eleve',
        component: ModifierUnEleve
    }
];



const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    })



export default router



