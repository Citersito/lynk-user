<template>
  <nav class="navbar">
    <!-- Logo Section -->
    <div class="navbar-logo">
      <router-link to="/" class="button-link"
        ><h1>{{ siteName }}</h1></router-link
      >
    </div>

    <!-- Dropdown Menu -->
    <div class="navbar-dropdown">
      <select id="categories">
        <option value="" disabled selected>Categories</option>
        <option value="1">Category 1</option>
        <option value="2">Category 2</option>
        <option value="3">Category 3</option>
      </select>
    </div>

    <!-- Search Box -->
    <div class="navbar-search">
      <input type="text" placeholder="Search" />
    </div>

    <!-- Right Buttons -->
    <div class="navbar-buttons">
      <router-link to="/login"><button>Account</button></router-link>
      <router-link to="/cart"><button>Cart</button></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      siteName: "Shasa",
    };
  },
};
</script>
