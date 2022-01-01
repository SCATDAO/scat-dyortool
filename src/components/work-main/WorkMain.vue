<template>
  <div class="css-work-main-wrap">
    <canvas
      class="css-work-main-gradient"
      style="
        --gradient-color-1: #0069f5;
        --gradient-color-2: #339cff;
        --gradient-color-3: #0069f5;
        --gradient-color-4: #0050dc;
        height:initial;
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
          Do Your Own Research is a tool for evaluating Dapps in the crypto
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
            Useful for all investors who to methodically research a
            project and share the results with others.
          </h2>
          <h2>
            $7.7 billion was stolen in crypto scams in 2021. Do Your Own
            Research so this doesn’t happen to you.
          </h2>
        </div>
        <div class="css-work-main-slr">
          <div class="css-work-main-sli">
            <div class="css-work-main-sii">
              <div class="css-work-main-ssi">1.</div>
              <span>Select a project you want to research.</span>
            </div>
            <div class="css-work-main-sii">
              <div class="css-work-main-ssi">3.</div>
              <span>
                Generate a report and share the results with the crypto
                community.</span
              >
            </div>
          </div>
          <div class="css-work-main-sli">
            <div class="css-work-main-sii">
              <div class="css-work-main-ssi">2.</div>
              <span>
                Perform all steps with each explanation to understand what you
                are assessing.</span
              >
            </div>
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