<template>
  <div class="flex">
    <sidebar-menu-vue></sidebar-menu-vue>
    <navbar-vue></navbar-vue>
  </div>
</template>

<script>
import SidebarMenuVue from './components/SidebarMenu.vue';
import NavbarVue from './components/Navbar.vue';


export default {
  name: "App",
  components: {
    SidebarMenuVue,
    NavbarVue
  },
};
</script>

<style>
</style>
