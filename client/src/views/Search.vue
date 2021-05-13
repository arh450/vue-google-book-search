<template>
  <div>
    <Header />
    <SearchComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  name: "Search",
  components: {
    Header,
    SearchComponent,
  },
};
</script>
