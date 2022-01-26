<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin:0 auto;
    background: -webkit-linear-gradient(left, #510086, #750094); 
    background: -o-linear-gradient(right, #510086, #750094); 
    background: -moz-linear-gradient(right, #510086, #750094); 
    background: linear-gradient(to right, #510086, #750094); 
  min-width: 100%;
  min-height: 800px;
}
  .shine-button {
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  margin: 10px 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid #ac33f1;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #ac33f1;
  font-weight: bolder;
  transition: .2s ease-in-out;
}
.shine-button:before {
  content: "";
  background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
  height: 50px;
  width: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
.shine-button:hover {
  background: #ac33f1;
  color: #fff;
}
.shine-button:hover:before {
  left: 150px;
  transition: .5s ease-in-out;
}
</style>
