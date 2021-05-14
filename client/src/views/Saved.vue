<template>
  <div>
    <Header />
    <SavedBooks />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SavedBooks from "@/components/SavedBooks.vue";
export default {
  name: "Saved",
  components: {
    Header,
    SavedBooks,
  },
};
</script>
