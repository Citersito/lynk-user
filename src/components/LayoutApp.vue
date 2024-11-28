<template>
  <div class="layout">
    <Navbar />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
