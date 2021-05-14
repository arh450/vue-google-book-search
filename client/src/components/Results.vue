<template>
  <div>
    <b-row class="mx-auto">
      <b-col md="10" class="mt-3 mx-auto">
        <b-jumbotron style="background-color: #283850">
          <h1 v-if="!bookData.length" class="text-center text-white">
            No Results to Display
          </h1>
          <b-card
            v-else
            v-for="(data, index) in bookData"
            v-bind:key="index"
            class="mb-1 p-2"
          >
            <b-row>
              <b-col md="2">
                <b-card-img
                  v-bind:src="data.volumeInfo.imageLinks.thumbnail"
                  img-alt="Card image"
                  img-left
                />
              </b-col>
              <b-col md="10">
                <b-card-title>
                  {{ data.volumeInfo.title }}
                </b-card-title>
                <b-card-sub-title>
                  Written by: {{ data.volumeInfo.authors[0] }}
                </b-card-sub-title>
                <b-card-text class="overflow-auto" style="max-height: 200px;">{{
                  data.volumeInfo.description
                }}</b-card-text>
              </b-col>
            </b-row>
          </b-card>
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["bookData"],
  data: function() {
    return {};
  },
  methods: {},
};
</script>
