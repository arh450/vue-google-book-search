<template>
  <div>
    <b-row class="mx-auto mt-2">
      <b-col md="10" class="mt-3 mx-auto text-white">
        <b-jumbotron style="background-color: #485870">
          <b-row class="mx-auto">
            <b-col md="12">
              <h2 class="mb-2">Book Search</h2>
              <b-form>
                <b-form-group>
                  <b-form-input placeholder="Search for Book" />
                </b-form-group>
                <b-button class="float-right" style="background-color: #808890">
                  Search
                </b-button>
              </b-form>
            </b-col>
          </b-row>
        </b-jumbotron>
      </b-col>
    </b-row>

    <Results />
  </div>
</template>

<script>
import Results from "@/components/Results.vue";

export default {
  name: "SearchComponent",
  components: {
    Results,
  },
};
</script>

<style></style>
