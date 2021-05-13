<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            active-class="active"
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
