<template>
  <b-row class="mx-auto">
    <b-col md="10" class="mt-3 mx-auto text-center text-white">
      <b-jumbotron id="jumbo">
        <b-row class="mx-auto">
          <b-col
            md="6"
            class="mx-auto p-3"
            style="background-color: rgba(128, 136, 144, .9); border-radius: 5px;"
          >
            <h1>Google Books Search</h1>
            <p>Search for and Save Books of Interest.</p>
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#jumbo {
  background-image: url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2306&q=80);
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 4rem 2rem;
  border-radius: 0.3rem;
}
</style>
