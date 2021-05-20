<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/history">Historial</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app{
  background-color: gray;
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
