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
          DYOR is a tool for community curation of Dapps in the Cardano
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
          <h2>Knowing your Dapp before investing in it is the first step.</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./WorkMainScript.js">
</script>

<style src="./WorkMainStyle.css" scoped>
</style>