<template>
  <div>
    <b-navbar id="mainNav" toggleable="lg" type="dark">
      <b-navbar-brand href="/">
        <h4>Google Books</h4>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse is-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item
            class="nav-link"
            v-for="routes in links"
            :key="routes.id"
            :to="routes.path"
          >
            {{ routes.name }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        {
          id: 0,
          name: "Search",
          path: "/",
        },
        {
          id: 1,
          name: "Saved",
          path: "/saved",
        },
      ],
    };
  },
};
</script>

<style>
#mainNav {
  padding: 15px;
  background-color: #082038;
}

.nav-link {
  font-size: 20px;
}
</style>
