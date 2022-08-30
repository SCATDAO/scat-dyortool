<template>
  <div class="css-w-m-wrap">
    <header class="css-w-m-header">
      <router-link to="/">
        <img id="logo-blue" src="../assets/white-logo.svg" alt="" />
      </router-link>
      <div class="css-w-m-xks">
        <div class="css-c0923"></div>

        <router-link to="/dapp-scheme">
          <button class="css-w-m-xkb">Dapp</button>
        </router-link>

        <router-link to="/nft-scheme">
          <button class="css-w-m-xkb">NFT</button>
        </router-link>
        <a href="https://audits.dyortool.io" target="_blank">
          <button class="css-w-m-xkb">Scan QR</button>
        </a>
      </div>
      <div class="css-w-m-hah">
        <button class="css-w-m-hhb" @click="showMiniPanel()">
          <i class="pi pi-bars"></i>
        </button>
        <template v-if="miniPanel">
          <div class="css-w-m-hth">
            <ul>
              <li>
                <a href="https://www.scatdao.com/contact" target="blank">
                  <div><span>Contact</span></div>
                </a>
              </li>
              <li>
                <a href="https://www.scatdao.com/dyor-tool" target="blank">
                  <div><span>Learn</span></div>
                </a>
              </li>
              <li>
                <a href="https://www.scatdao.com/team" target="blank">
                  <div><span>About us</span></div>
                </a>
              </li>

              <li>
                <router-link to="/nft-scheme">
                  <div><span>NFT</span></div>
                </router-link>
              </li>

              <li>
                <router-link to="/dapp-scheme">
                  <div><span>Dapp</span></div>
                </router-link>
              </li>

              <li>
                <a href="https://audits.dyortool.io">
                  <div><span>Scan QR</span></div>
                </a>
              </li>
            </ul>
            <div class="css-w-m-swp" @click="touchZone()"></div>
          </div>
        </template>
      </div>
    </header>
    <div class="css-232a">
      <div class="css-436c">
        <div class="css-w-m-banner">
          <div class="css-w-m-bnt">
            <div class="css-w-m-bxs">
              <div class="css-w-m-bzs">
                <div class="css-w-m-biz"></div>
                <div class="css-w-m-bzi">
                  <div>NEW</div>
                </div>
              </div>
              <div class="css-w-m-bri">
                <div>
                  <a href="https://www.scatdao.com/contact" target="blank"
                    >Become a Smart Contract Auditor - ISPO live
                  </a>
                </div>
                <div>
                  <i class="pi pi-angle-double-right"></i>
                </div>
              </div>
            </div>
            <h1>
              <span>
                <span class="css-w-m-btx">
                  Do Your Own Research is a tool for evaluating
                </span>
                Dapps, Tokens, NFT and Blockchain projects</span
              >
            </h1>
          </div>
        </div>
        <div class="css-w-m-ses">
          <div class="css-w-m-sss">
            <LibraryWrap />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LibraryWrap from "../components/LibraryWrap.vue";

export default {
  data() {
    return {
      isMainPath: false,
      miniPanel: false,
    };
  },
  mounted() {
    this.isMainPath = true;
  },
  methods: {
    showMiniPanel() {
      this.miniPanel = !this.miniPanel;
    },
    touchZone() {
      this.miniPanel = false;
    },
    navToPath(path) {
      this.$router.push(path);
    },
  },
  components: { LibraryWrap },
};
</script>

<style scoped>
*::-webkit-scrollbar {
  width: 0px;
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

header {
  width: 100%;
  min-width: 100%;
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

.css-w-m-wrap {
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  background: linear-gradient(
    45deg,
    rgba(0, 105, 245, 1) 0%,
    rgba(64, 78, 237, 1) 100%
  );
  box-sizing: border-box;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.css-w-m-banner {
  width: 100%;
  height: 300px;
  min-height: 300px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  z-index: 1;
  justify-content: space-between;
}

.css-c0923 {
  display: flex;
  height: 30px;
  background: red;
  color: white;
  fill: white;
}
.css-w-m-bmh {
  display: none;
}
.css-w-m-qrw {
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  box-shadow: 1px 1px 1px 20px var(--shadow-blue);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  width: 120px;
  top: 100%;
  left: 50%;
  margin-left: -60px;
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.css-w-m-bxs {
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.css-w-m-bzs {
  display: flex;
  flex-direction: column;
}

.css-w-m-biz {
  height: 5px;
  width: 50px;
  background: #fff;
}

.css-w-m-bzi {
  margin-top: 10px;
  text-align: center;
  color: var(--text-color-primary);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  background: #abffdb;
  border-radius: 2px;
  padding: 0.3em;
}

.css-w-m-bzi div {
  margin-left: 0.3em;
}

.css-w-m-bwa {
  border-radius: 99px;
  padding: 10px 14px;
  margin-left: 1rem;
  background: var(--button-a);
  border: none;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.css-w-m-bwa:hover {
  transition: ease-in 0.3s;
  background: hsla(0, 0%, 100%, 0.4);
}

.css-w-m-bwa a {
  padding: 10px 14px;
  color: #fff;
  white-space: nowrap;
  text-decoration: none;
}
.css-w-m-bri {
  color: #fff;
  padding-left: 1rem;
  display: flex;
  margin-bottom: 0.15rem;
  align-items: center;
}

.css-w-m-bri a {
  text-decoration: none;
  color: #fff;
}

.css-w-m-btx {
  font-weight: 100 !important;
}

.css-w-m-bri div {
  color: #fff;
  padding-left: 1rem;
  display: flex;
  align-items: center;
}
.css-232a {
  justify-content: center;
  display: flex;
}
.css-436c {
  width: 100%;
  max-width: 1300px;
  height: 100%;
  padding: 0 10%;
}
.css-w-m-ses {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.css-w-m-sss {
  margin-top: auto;
  display: flex;
}

.css-w-m-xks {
  display: flex;
}

.css-w-m-xkb {
  padding: 0.75rem 1rem;
  border-radius: 99px;
  margin-left: 1rem;
  background: var(--button-a);
  color: #ffffff;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.css-w-m-xkb:hover {
  transition: var(--transition-a);
  background: rgba(61, 65, 68, 1);
}

#css-scanb {
  margin: 0;
  margin-right: 1rem;
}

.css-w-m-bnt {
  display: flex;
  text-align: center;
  flex-direction: column;
}

.css-w-m-bnt span {
  font-size: var(--text-size-sixth);
  line-height: 5rem;
  font-weight: 500;
  color: #ffffff;
}

.css-w-m-gtx {
  display: flex;
  text-align: center;
  flex-direction: column;
}

.css-w-m-gtx span {
  color: #fff;
  border: 1px solid var(--border-primary);
  padding: 14px 10px;
  margin-top: 1rem;
  border-radius: 6px;
  white-space: nowrap;
}

.css-w-m-header {
  height: 64px;
  padding: 0 3rem;
  justify-content: space-between;
}

.css-w-m-hah {
  display: none;
}

.custom-shape-divider-bottom-1640461385 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1640461385 .shape-fill {
  fill: #ffffff;
}

.custom-shape-divider-bottom-1640461385 svg {
  position: relative;
  display: block;
  width: calc(150% + 1.3px);
  height: 600px;
  transform: rotateY(180deg);
}

#slide-left1 {
  animation-name: slideLeft1;
  animation-duration: 1s;
}

#slide-left2 {
  animation-name: slideLeft2;
  animation-duration: 1s;
}

#slide-left3 {
  animation-name: slideLeft3;
  animation-duration: 1s;
}

@keyframes slideLeft1 {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideLeft2 {
  0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideLeft3 {
  0% {
    transform: translateX(-300px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideRight {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 600px) {
  #gradient-canvas {
    height: 100%;
  }

  #scat-book {
    width: 50px;
    height: 50px;
  }

  .css-w-m-bxs {
    display: none;
  }

  #mini-qr {
    width: 50px;
    height: 50px;
    image-rendering: pixelated;
  }

  .css-w-m-swp {
    width: 1000%;
    height: 500px;
    background: transparent;
    position: absolute;
    z-index: -1;
    left: auto;
    bottom: 0;
    top: 0;
    right: 0;
  }

  .css-w-m-ssi {
    color: #fff;
  }
  .css-w-m-bmh {
    display: flex;
    width: 100%;
    padding: 0 10%;
    margin-top: 2rem;
    box-sizing: border-box;
  }

  .css-w-m-bmh button {
    padding: 1rem;
    cursor: pointer;
    border-radius: 99px;
    border: none;
    color: #fff;
    font-size: var(--text-size-primary);
    letter-spacing: 0.2px;
    margin-right: 1rem;
    background: rgba(255, 255, 255, 0.2);
  }

  .css-w-m-banner {
    flex-direction: column;
    padding: 0;
    height: unset;
  }

  .css-w-m-hth {
    background: #ffffff;
    width: 200px;
    height: 300px;
    border-radius: 6px;
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: column;
    right: -25px;
    box-sizing: border-box;
    animation-name: slideRight;
    animation-duration: 0.5s;
  }

  .css-w-m-hth ul {
    padding: 5px 14px;
    width: inherit;
    height: inherit;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
  }

  .css-w-m-hth li {
    -webkit-tap-highlight-color: transparent;
  }

  .css-w-m-hth a {
    text-decoration: none;
    color: var(--text-color-primary);
    display: flex;
    align-items: center;
  }

  .css-w-m-hth span {
    margin-left: 10px;
  }

  .css-w-m-bnt {
    width: 100%;
    padding: 0 10%;
    margin-top: 1rem;
    box-sizing: border-box;
  }

  .css-w-m-bnt span {
    font-size: var(--text-size-fourth);
    line-height: 1.8em;
  }

  .css-w-m-xks {
    display: none;
  }

  .css-w-m-bri {
    margin-bottom: 0;
  }

  #gradient-canvas {
    height: 100vh !important;
  }
  .css-w-m-sss {
    border: none;
    background: var(--background-d);
    flex-direction: column;
  }

  .css-w-m-hah {
    display: initial;
    position: relative;
  }
  .css-w-m-hhb i {
    color: inherit;
  }
  .css-w-m-hhb {
    background: none;
    border: none;
    color: #ffffff;
    outline: none;
    cursor: pointer;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .css-w-m-hhb:hover {
    transition: ease-in 0.3s;
    opacity: 0.9;
  }

  .css-w-m-ses {
    padding: 0;
    border-radius: 0;
    background: var(--base-color-white-primary);
  }
}
</style>