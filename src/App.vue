<template>
  <div class="css-main-container">
    <header>
      <div class="css-header-logo">
        <img src="./assets/logo.svg" alt="" />
      </div>
      <template v-if="login === true">
        <div class="css-header-status">
          <span>&#8226;</span> Available for audit
        </div>
      </template>
    </header>
    <div class="css-main-flex-wrap">
      <WorkQuest></WorkQuest>
    </div>
  </div>
</template>

<script src="./AppScript.js"></script>

<style src="./AppStyle.css"></style>
