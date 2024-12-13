import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@/views/MainPage.vue';
import PlacesTable from '@/views/PlacesPage.vue';
import ExpensesPage from '@/views/ExpensesPage.vue';
import BeginningPage from '@/views/BeginningPage.vue';
import SantaPage from '@/views/SantaPage.vue';
import PresentsPage from "@/views/PresentsPage.vue";
import StartPage from "@/views/StartPage.vue";
import TreePage from "@/views/TreePage.vue";
import PoemsPage from "@/views/PoemsPage.vue";
import LetterPage from "@/views/LetterPage.vue";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/start',
        name: 'StartPage',
        component: StartPage,
    },
    {
        path: '/expenses',
        name: 'ExpensesPage',
        component: ExpensesPage,
    },
    {
        path: '/places',
        name: 'PlacesTable',
        component: PlacesTable,
    },

    {
        path: '/poems',
        name: 'Poems',
        component: PoemsPage,
    },
    {
        path: '/beginning',
        name: 'BeginningPage',
        component: BeginningPage,
    },
    {
        path: '/tree',
        name: 'TreePage',
        component: TreePage,
    },

    {
        path: '/presents',
        name: 'PresentsPage',
        component: PresentsPage,
    },
    {
        path: '/santa',
        name: 'SantaPage',
        component: SantaPage,
    },
    {
        path: '/letter',
        name: 'LetterPage',
        component: LetterPage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
