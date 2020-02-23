import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import Work from './views/Work.vue';
import Skil from './views/Skil.vue';
import SkilFront from './views/SkilFront.vue';
import SkilBack from './views/SkilBack.vue';
import SkilOther from './views/SkilOther';
import ContactForm from './views/ContactForm.vue';

Vue.use(Router)

export default new Router({
    mode: "history",
   routes: [
       { path: '/', component: Home},
       { path: '/skil', 
         component: Skil,
         children: [
             { path: "Front", component: SkilFront},
             { path: "Back", component: SkilBack},
             { path: "Other", component: SkilOther,}
         ]},
        { path: '/profile', component: Profile},
        { path: '/work', component: Work},
        { path: '/contact', component: ContactForm},
        ]
});