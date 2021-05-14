<template>
  <div>
    <b-row class="mx-auto mt-2">
      <b-col md="10" class="mt-3 mx-auto">
        <b-jumbotron id="resultsJumbo">
          <h1 v-if="!savedBooks.length" class="text-center text-white">
            No Saved Books to Display
          </h1>
          <b-card
            v-else
            v-for="(data, index) in savedBooks"
            v-bind:key="index"
            class="mb-1 p-2"
          >
            <b-row>
              <b-col md="2">
                <b-card-img
                  v-bind:src="data.image"
                  img-alt="Card image"
                  img-left
                />
              </b-col>
              <b-col md="10">
                <b-card-title>
                  {{ data.title }}
                </b-card-title>
                <b-card-sub-title>
                  Written by: {{ data.authors }}
                </b-card-sub-title>
                <b-card-text class="overflow-auto" style="max-height: 200px;">{{
                  data.descript
                }}</b-card-text>
                <b-button
                  style="background-color: #082038; border: none;"
                  v-bind:href="data.link"
                  target="_blank"
                  >View</b-button
                >
                <b-button
                  style="border: none; margin-left: 5px;"
                  variant="danger"
                  @click="removeBook"
                  v-bind:id="data.id"
                  >Remove</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SavedBooks",
  data: function() {
    return {
      savedBooks: [],
    };
  },
  mounted: function() {
    this.getSavedBooks();
  },
  methods: {
    removeBook: function(event) {
      event.preventDefault();

      let book = this.savedBooks.filter(
        (data) => data.id === parseInt(event.target.id)
      );

      book = book[0];

      axios
        .delete(`/api/removeBook/${book.id}`)
        .then((response) => {
          console.log(response);
          this.getSavedBooks();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getSavedBooks: function() {
      axios
        .get("/api/getSavedBooks")
        .then((response) => {
          this.savedBooks = response.data.books;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
