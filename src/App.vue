<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap");

:root {
  --text-color-primary: #001737;
  --text-color-secondary: #727384;

  --text-size-secondary: 0.8rem;
  --text-size-primary: 1rem;
  --text-size-title: 1.25rem;
  --text-size-third: 1.563rem;
  --text-size-fourth: 1.953rem;
  --text-size-fifth: 2.441rem;
  --text-size-sixth: 3.052rem;
  --text-size-seventh: 3.815rem;

  --base-color-black-primary: #070a0e;
  --base-color-black-secondary: #86898d;

  --base-color-white-primary: #ffffff;
  --base-color-white-secondary: rgba(26, 108, 225, 0.03);

  --complementary-color-green: #7fedca;
  --complementary-color-yellow: #fac292;
  --complementary-color-blue: #0069f5;

  --color-soft-blue: rgba(0, 105, 245, 0.1);

  --border-primary: #e9f1fc;

  --shadow-blue: 0 0 25px rgba(26, 108, 225, 0.1);
}

* {
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  min-width: 100%;
  height: 64px;
  min-height: 64px;
  max-height: 64px;
  display: flex;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.5rem;
  z-index: 10;
  padding: 0 10%;
}

ol {
  margin-left: 4rem;
}

li {
  margin-top: 0.5rem;
}

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: var(--text-color-secondary);
  text-rendering: geometricPrecision;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  line-height: 1.5;
  animation-name: deploy;
  animation-duration: 1s;
}

@keyframes deploy {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#code-layout {
  width: 888px;
  height: 1080px;
}

#css-green-button {
  background: var(--complementary-color-green);
}

#css-blue-button {
  background: rgba(7, 16, 52, 0.1);
}

.css-main-panel-button.active {
  background: #0050dc;
}

#css-yellow-button {
  background: var(--complementary-color-yellow);
}

#css-black-button {
  background: var(--base-color-black-primary);
}

#css-last-button {
  margin-top: 15rem;
}

.css-header-avatar-img {
  border-radius: 50%;
  object-fit: cover;
  width: 2.1vw;
  height: 2.1vw;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.fade-enter-active,
.fade-leave-to {
  transition: opacity 0.3s, transform 0.5s;
}

.css-main-flex-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.css-logo {
  cursor: pointer;
}

.css-header-become {
  color: #ffffff;
  background: var(--complementary-color-blue);
  border-radius: 4px;
  cursor: pointer;
  padding: 0 10px;
  text-align: center;
  display: flex;
  height: 40px;
  align-items: center;
  word-break: normal;
  min-width: fit-content;
  min-height: 40px;
}

.css-main-panel-button {
  width: inherit;
  height: 72px;
  min-height: 72px;
  max-height: 72px;
  margin-top: 1rem;
  cursor: pointer;
  justify-content: center;
  display: flex;
}

.css-header-avatar-wrap {
  width: 10vw;
  height: 2.1vw;
  color: white;
  text-align: center;
  display: flex;
  border-radius: 6px;
}

.css-header-avatar-con {
  width: 2.1vw;
  height: 2.1vw;
  font-size: var(--text-size-primary);
  border-radius: 50%;
}

.css-header-avatar-desc {
  height: inherit;
  display: block;
  margin-left: 10px;
  text-align: start;
}

.css-header-avatar-desc-n {
  color: var(--text-color-primary);
}

.css-header-avatar-desc-r {
  color: var(--text-color-secondary);
  font-size: var(--text-size-secondary);
}

.css-left-panel-button button {
  opacity: 0;
}

@media (-webkit-device-pixel-ratio: 1.1) {
  :root {
    zoom: 0.9999;
  }
}

@media (-webkit-device-pixel-ratio: 1.14) {
  :root {
    zoom: 0.8;
  }
}

@media (-webkit-device-pixel-ratio: 1.25) {
  :root {
    zoom: 0.8;
  }
}

@media (max-width: 1921px) {
  html {
    font-size: 100%;
  }
}

@media (max-width: 1441px) {
  html {
    font-size: 80%;
  }
}

@media (max-width: 1025px) {
  html {
    font-size: 90%;
  }
}

@media (max-width: 600px) {
  header {
  }
  .css-header.active {
    display: none;
  }

  .css-left-panel-button button {
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    opacity: 1;
  }
}
</style>
