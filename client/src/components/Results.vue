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
                <b-button
                  style="background-color: #082038; border: none;"
                  v-bind:href="data.volumeInfo.infoLink"
                  target="_blank"
                  >View</b-button
                >
                <b-button
                  style="border: none; margin-left: 5px;"
                  variant="success"
                  v-bind:id="data.id"
                  @click="postNewBook"
                  v-b-popover="{
                    title: 'Book Saved!',
                    placement: 'right',
                    trigger: 'click',
                  }"
                  >Save</b-button
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
  name: "Results",
  props: ["bookData"],
  data: function() {
    return {};
  },
  methods: {
    postNewBook: function(event) {
      event.preventDefault();

      let book = this.bookData.filter((data) => data.id === event.target.id);

      book = book[0].volumeInfo;

      const bookObject = {
        title: book.title,
        authors: book.authors[0],
        description: book.description,
        image: book.imageLinks.thumbnail,
        link: book.infoLink,
      };

      axios
        .post("/api/saveBook", bookObject)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
