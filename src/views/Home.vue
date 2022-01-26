<template>
    <div class="homePage">
        <h2 class="homePageH">Это начальная страница сайта</h2>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, dolores dignissimos. Distinctio quisquam mollitia laudantium ab ipsam voluptatem laborum vero.</p>
        <button class="shine-button" @click="$router.push('employees')">Сотрудники</button>
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<style scoped>

.homePage{
    height: 750px;
}
.homePageH{
    padding-top: 20px;
}

*{box-sizing:border-box}
body {
  margin: 0;
  display: block;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
@keyframes loader {
  0% {transform:rotate(-45deg)}
  50%{transform:rotate(-135deg)}
  100%{transform:rotate(-225deg)}}
@keyframes span-1 {
  0% {transform:translate(0);}
  50%{transform:translate(-50px, 0);border-color:#EE4D68}
  100%{transform:translate(0);}}
@keyframes span-2 {
  0%{transform:translate(0);}
  50%{transform:translate(50px, 0);border-color:#c032e4}
  100%{transform:translate(0);}}
@keyframes span-3 {
  0%{transform:translate(0);}
  50%{transform:translate(0, -50px);border-color:#FF9900}
  100%{transform:translate(0);}}
@keyframes span-4 {
  0%{transform:translate(0);}
  50%{transform:translate(0, 50px);border-color:#00E4F6}
  100%{transform:translate(0);}}
.loader {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 300px;
  animation: loader 2s infinite ease-in-out;
}
.loader span {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  border: 4px solid #0B1B48;
}
.loader span:nth-child(1) {
  animation: span-1 2s ease-in-out infinite;
}
.loader span:nth-child(2) {
  animation: span-2 2s ease-in-out infinite;
}
.loader span:nth-child(3) {
  animation: span-3 2s ease-in-out infinite;
}
.loader span:nth-child(4) {
  animation: span-4 2s ease-in-out infinite;
}
</style>