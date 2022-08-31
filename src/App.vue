<template>
  <main>
    <router-view> </router-view>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  height: 100% !important;
}

@import "styles/theme.css";

@import "primevue/resources/primevue.min.css";

@import "primeicons/primeicons.css";

:root {
  --text-color-primary: rgb(15, 20, 25);
  --text-color-secondary: rgb(83, 100, 113);

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
  --complementary-color-blue: red;

  --blue-a: #0069f5;

  --color-soft-blue: rgba(0, 105, 245, 0.1);

  --border-primary: #e9f1fc;

  --shadow-blue: 0 0 25px rgba(26, 108, 225, 0.1);
  --blue: linear-gradient(
    45deg,
    rgba(0, 105, 245, 1) 0%,
    rgba(64, 78, 237, 1) 100%
  );

  --red: rgba(231, 54, 107, 1);

  --transition-a: ease-in 0.2s;

  --text-a: #0f1419;
  --text-b: #536471;
  --text-c: #7a7d82;
  --text-w: #ffffff;

  --background-a: #ffffff;
  --background-b: #fafafa;
  --background-c: linear-gradient(
    45deg,
    rgba(0, 105, 245, 1) 0%,
    rgba(64, 78, 237, 1) 100%
  );
  --background-d: #23272a;

  --shadow-a: 0 5px 10px rgba(0, 0, 0, 0.1);

  --border-a: #e9f1fc;

  --button-a: #23272a;
}

.theme-light {
  --text-a: #0f1419;
  --text-b: #536471;
  --text-c: #7a7d82;
  --text-w: #ffffff;

  --background-a: #ffffff;
  --background-b: #fafafa;
  --background-c: linear-gradient(
    45deg,
    rgba(0, 105, 245, 1) 0%,
    rgba(64, 78, 237, 1) 100%
  );

  --shadow-a: 0 5px 10px rgba(0, 0, 0, 0.1);

  --border-a: #e9f1fc;

  --button-a: #23272a;
}

.theme-dark {
  --text-a: #ffffff;
  --text-b: #b0b3b8;
  --text-c: #7a7d82;
  --text-w: #ffffff;

  --background-a: #1a1a1b;
  --background-b: #272729;
  --background-c: #1a1a1b;

  --shadow-a: 0 5px 40px rgba(0, 0, 0, 0.3);

  --border-a: #3a3b3c;

  --button-a: #404eed;
}

.theme-blue {
  --text-a: #ffffff;
  --text-b: #b0b3b8;
  --text-c: #7a7d82;
  --text-w: #ffffff;

  --background-a: #20242e;
  --background-b: #272b35;
  --background-c: #20242e;

  --shadow-a: 0 5px 40px rgba(0, 0, 0, 0.25);

  --border-a: rgba(255, 255, 255, 0.1);

  --button-a: #404eed;
}

* {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-rendering: geometricPrecision;
  caret-color: var(--text-a);
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: var(--background-b);
}

*::-webkit-scrollbar-thumb {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb:hover {
  background: #555;
}
textarea {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

ol {
  margin-left: 4rem;
}

li {
  margin-top: 0.5rem;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color-secondary);
  text-rendering: geometricPrecision;
  image-rendering: optimizeQuality;
  -webkit-tap-highlight-color: transparent;
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

@media (max-width: 1921px) {
  html {
    font-size: 100%;
  }
}

@media (max-width: 1441px) {
  html {
    font-size: 90%;
  }
}

@media (max-width: 1025px) {
  html {
    font-size: 80%;
  }
}

@media (max-width: 600px) {
  html {
    font-size: 90%;
  }
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
