<template>
  <div class="css-work-finished-wrap">
    <div class="css-work-finished">
      <div class="css-work-finished-tw">
        <div class="css-work-finished-ttw">
          <div class="css-work-finished-stw">
            <div class="css-work-finished-stt" @click="createNewCanvas()">SUNDAESWAP - DYOR REPORT</div>
            <div class="css-work-finished-sfw">
              <div class="css-work-finished-sta"></div>
              <div class="css-work-finished-std">
                <div>Total Score</div>
                <div class="css-work-finished-stx">
                  {{ totalScore }}
                </div>
                <div class="css-work-finished-stm">Made by Holder3289</div>
              </div>
            </div>
            <div class="css-work-finished-sfw">
              <div class="css-work-finished-sha">
                <div class="css-work-finished-shai">
                  <svg
                    id="SVGRoot"
                    width="20px"
                    height="20px"
                    version="1.1"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m13.918 6.2987-7.0549 4.4096a2.9881 2.9881 0 0 1 0.1197 1.2195l6.5447 2.4539a2.9925 2.9926 0 1 1-0.52519 1.4005l-6.5432-2.4539a2.9925 2.9926 0 1 1-0.38903-3.8873l7.0534-4.4096a2.9925 2.9926 0 1 1 0.79302 1.2688z"
                      fill="#0069f5"
                      stroke="#0069f5"
                      stroke-width=".023379"
                    />
                  </svg>
                </div>
                <div class="css-work-finished-shai">Generate Report</div>
              </div>
            </div>
          </div>
          <div class="css-work-finished-sts">
            <div class="css-work-finished-sti">
              Development Team <span>10.0</span>
            </div>
            <div class="css-work-finished-sti">Tokenomics<span>20.0</span></div>
            <div class="css-work-finished-sti">Community<span>40.0</span></div>
            <div class="css-work-finished-sti">
              Trading Metrics<span>50.0</span>
            </div>
          </div>
          <div class="css-work-finished-sr">
            <canvas class="camva" id="qr" style="image-rendering: pixelated">x</canvas>
          </div>
        </div>
        <div class="css-work-finished-ttt"></div>
      </div>
    </div>
  </div>
</template>

<script src="./WorkSummaryScript.js">
</script>

<style  src="./WorkSummaryStyle.css">
</style>