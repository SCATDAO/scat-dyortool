<template>
  <div class="css-work-main-wrap">
    <canvas
      class="css-work-main-gradient"
      style="
        --gradient-color-1: #0069f5;
        --gradient-color-2: #339cff;
        --gradient-color-3: #0069f5;
        --gradient-color-4: #0050dc;
      "
      id="gradient-canvas"
      data-transition-in
    ></canvas>
    <header class="css-work-main-header">
      <img style="margin-left: 3px" src="./logo2.svg" alt="" />
    </header>
    <div class="css-work-main-banner">
      <div class="css-work-main-bnt">
        <h1>
          Do Your Own Research is a tool for evaluating Dapps in the Cardano
          ecosystem
        </h1>
      </div>

      <div class="css-work-main-gte">
        <div class="css-work-main-gtw">
          <div class="css-work-main-qrw">
            <img src="./book.svg" alt="" />
          </div>

          <div class="css-work-main-qrt">CREATE NEW REPORT</div>
        </div>
        <div class="css-work-main-gtw">
          <div class="css-work-main-qrw">
            <canvas id="qrd"></canvas>
          </div>

          <div class="css-work-main-qrt">SCAN QR CODE REPORT</div>
        </div>
      </div>
    </div>
    <div class="css-work-main-ses">
      <div class="css-work-main-sss">
        <div class="css-work-main-slc">
          <h2>
            Designed to teach you the knowledge and resources to properly
            evaluate a Dapp before investing in it.
          </h2>
          <h2>
            Useful for more experienced investors who to methodically research a
            project and share the results with others.
          </h2>
          <h2>
            $7.7 billion was stolen in crypto scams in 2021. Do Your Own
            Research so this doesn’t happen to you.
          </h2>
        </div>
        <div class="css-work-main-slr">
          <div class="css-work-main-sli">
            <h2>1. Select a project you want to research.</h2>
          </div>
          <div class="css-work-main-sli">
            <h2>1. Select a project you want to research.</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./WorkMainScript.js">
</script>

<style src="./WorkMainStyle.css" scoped>
</style>