<template class="container">
  <div class="app-container">
    <router-link class="home-container" to="/">Home</router-link> |
    <router-link class="about-container" to="/About">About</router-link>
  </div>
  <router-view/>
</template>

<style>
.router-link-exact-active {
  color: red
}

*{
  background-color:#60bbf0;

}


.app-container{
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:#0093e9;
  

}

.home-container{
  font-size: 30px;
  padding: 20px 40px;
  color: #fff;
  /* border: 1px solid #fff; */
  text-decoration:none;
  margin:30px;
}

.about-container{
  font-size: 30px;
  padding: 20px 40px;
  color: #fff;
  /* border: 1px solid #fff; */
  text-decoration:none;
}
</style>