<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  overflow-x: hidden;
  background-color: hsl(240, 5%, 71%);
  font-family: "Roboto", sans-serif;
}
</style>
