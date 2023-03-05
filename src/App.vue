<template>
  <div>
    <nav>
      <h1 class="nav__element">График</h1>
      <router-link class="nav__element" to="/graph">
        <gear-icon />
        Редактор
      </router-link>
      <router-link class="nav__element" to="/analytics">
        <analytics-icon />
        Аналитика
      </router-link>
      <div class='spacer-box'></div>
      <router-link class="nav__element" to="/branches">
        <branch-icon />
        Заведения
      </router-link>
      <router-link class="nav__element" to="/users">
        <users-icon />
        Сотрудники
      </router-link>
    </nav>
    <router-view class="pages" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;

}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #F2F1F0;
}

nav {
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  float: left;
  height: 100%;
  width: 100px;
  background-color: #fff;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
}

nav a:hover {
  border-radius: 10px;
  background-color: #DFD1C4;
}

nav a.router-link-exact-active {
  border-radius: 10px;
  background-color: #8A7062;
  color: #fff;
}

.spacer-box {
  flex-grow: 1;
}

.nav__element {
  margin: 4px;
  padding: 4px 0;
}

.nav__element:first-child {
  margin: 12px 0;
}

.pages {
  padding-left: 100px;
}
</style>
