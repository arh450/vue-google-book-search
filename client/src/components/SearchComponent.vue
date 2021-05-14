<template>
  <div>
    <b-row class="mx-auto mt-2">
      <b-col md="10" class="mt-3 mx-auto text-white">
        <b-jumbotron id="searchJumbo">
          <b-row class="mx-auto">
            <b-col md="12">
              <h2 class="mb-2">Book Search</h2>
              <b-form>
                <b-form-group>
                  <b-form-input
                    placeholder="Search for Book"
                    v-model="searchInput"
                  />
                </b-form-group>
                <b-button id="searchBtn" @click="handleSearch">
                  Search
                </b-button>
              </b-form>
            </b-col>
          </b-row>
        </b-jumbotron>
      </b-col>
    </b-row>

    <Results v-bind:bookData="bookData" />
    <b-modal ref="alert-modal" hide-header-close>
      <template v-slot:modal-header>
        <h5 class="mx-auto" style="font-size: 24px">ERROR!</h5>
      </template>
      <p class="text-center" style="font-size: 18px">
        {{ modalText }}
      </p>
      <template v-slot:modal-footer>
        <b-button type="button" class="btn mx-auto" @click="hideModal"
          >Close</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import Results from "@/components/Results.vue";
import axios from "axios";
export default {
  name: "SearchComponent",
  components: {
    Results,
  },
  data: function() {
    return {
      searchInput: "",
      bookData: [],
      title: "",
      modalText: "",
    };
  },
  methods: {
    handleSearch: function(event) {
      event.preventDefault();
      if (!this.searchInput) {
        this.modalText = "Please enter an input!";
        this.$refs["alert-modal"].show();
      } else {
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${this.searchInput}`
          )
          .then((response) => {
            if (response.data.totalItems == 0) {
              this.modalText = "No results, please try a different search!";
              this.$refs["alert-modal"].show();
              this.searchInput = "";
            } else {
              this.bookData = response.data.items;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    hideModal: function() {
      this.$refs["alert-modal"].hide();
    },
  },
};
</script>

<style scoped>
#searchJumbo {
  background-color: #485870;
  padding: 4rem 2rem;
  border-radius: 0.3rem;
}

#searchBtn {
  float: right;
  background-color: #808890;
  margin-top: 1rem;
}
</style>
