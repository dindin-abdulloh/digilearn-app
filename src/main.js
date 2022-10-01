import { createApp } from "vue";
import App from "./App.vue";
import './assets/css/index.css'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


createApp(App).component('v-select', vSelect)
createApp(App).component('Datepicker', Datepicker)
createApp(App).use(VueSweetalert2)
createApp(App).mount("#app");
