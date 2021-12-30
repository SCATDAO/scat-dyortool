<template>
  <div class="css-work-finished-wrap">
    <div class="custom-shape-divider-top-1640324069">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
      </svg>
    </div>
    <div class="css-work-finished">
      <div class="css-work-finished-tw">
        <div class="css-work-finished-ttw">
          <div class="css-work-finished-stw">
            <div class="css-work-finished-stt" @click="createNewCanvas()">
              SUNDAESWAP - DYOR REPORT
            </div>
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
                      d="m1.7473 17.601h16.505a0.75024 0.75024 0 1 1 0 1.5005h-16.505a0.75024 0.75024 0 1 1 0-1.5005zm9.0028-5.9479 5.5397-5.5412 1.0608 1.0608-7.4258 7.4273-7.4273-7.4273 1.0608-1.0608 5.6913 5.6913v-10.707h1.5005z"
                      fill="#0069f5"
                      stroke-width=".023445"
                    />
                  </svg>
                </div>
                <div class="css-work-finished-shai">Generate Report</div>
              </div>
            </div>
          </div>
          <div class="css-work-finished-sts">
            <div class="css-work-finished-sti">
              Development Team
              <span>{{ evaluateCategory("Team Development") }}</span>
            </div>
            <div class="css-work-finished-sti">
              Tokenomics<span>{{ evaluateCategory("Tokenomics") }}</span>
            </div>
            <div class="css-work-finished-sti">
              Community<span>{{ evaluateCategory("Community") }}</span>
            </div>
            <div class="css-work-finished-sti">
              Trading Metrics<span>{{ evaluateCategory("Metrics") }}</span>
            </div>
          </div>
          <div class="css-work-finished-sr">
            <canvas
              class="camva"
              id="qr"
              style="image-rendering: pixelated"
            ></canvas>
          </div>
        </div>
        <div class="css-work-finished-ttt">
          <div class="css-work-finished-qai">Development Team</div>
          <div class="css-work-finished-qai">Tokenomics</div>
          <div class="css-work-finished-qai">Community</div>
          <div class="css-work-finished-qai">Trading Metrics</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./WorkSummaryScript.js">
</script>

<style  src="./WorkSummaryStyle.css">
</style>