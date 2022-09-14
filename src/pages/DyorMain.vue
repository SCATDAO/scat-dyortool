<template>
  <div class="css-w-m-wrap">
    <header class="css-w-m-header">
      <router-link to="/">
        <img id="logo-blue" src="../assets/white-logo.svg" alt="" />
      </router-link>

      <div class="css-28c0">
        <a href="https://dyortool.io/dapp-scheme" target="_blank">
          <i class="pi pi-folder-open"></i> Dapp resume
        </a>

        <a href="https://dyortool.io/nft-scheme" target="_blank">
          <i class="pi pi-folder-open"></i> NFT resume
        </a>
        <a href="https://medium.com/@scatdao" target="_blank"> Learn </a>
        <a
          href="https://twitter.com/SCATDAO"
          target="_blank"
          style="margin-top: 4px"
        >
          <i class="pi pi-twitter"></i>
        </a>
      </div>

      <div class="css-w-m-xks">
        <router-link to="/dapp-setting">
          <button class="css-w-m-xkb">Dapp</button>
        </router-link>

        <router-link to="/nft-setting">
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
                  <div>
                    <span>Contact<i class="pi pi-external-link"></i></span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.scatdao.com/dyor-tool" target="blank">
                  <div>
                    <span>Learn<i class="pi pi-external-link"></i> </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.scatdao.com/team" target="blank">
                  <div>
                    <span>About us<i class="pi pi-external-link"></i></span>
                  </div>
                </a>
              </li>

              <li>
                <router-link to="/nft-setting">
                  <div>
                    <span>NFT create<i class="pi pi-external-link"></i></span>
                  </div>
                </router-link>
              </li>

              <li>
                <router-link to="/dapp-setting">
                  <div>
                    <span>Dapp create<i class="pi pi-external-link"></i></span>
                  </div>
                </router-link>
              </li>

              <li>
                <a href="https://audits.dyortool.io">
                  <div>
                    <span>Scan QR<i class="pi pi-external-link"></i></span>
                  </div>
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
                <span class="css-w-m-btx" style="font-weight: 100">
                  Do Your Own Research is a tool for evaluating
                </span>
                dapps, tokens, NFT's and blockchain projects</span
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

a {
  text-decoration: none;
  color: inherit;
}

.css-28c0 {
  color: var(--text-a);
  padding: 0.75rem;
  align-items: center;
  color: #ffffff;
  display: flex;
  white-space: nowrap;
  border-radius: 99px;
  margin-right: auto;
  margin-left: 2rem;
}

.css-28c0 a {
  margin-right: 2rem;
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
  max-width: 1400px;
  margin: 0 3%;
  height: 100%;
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
  background: #23272a;
  color: #ffffff;
  border: none;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
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

@media (max-width: 600px) {
  .css-28c0 {
    display: none;
  }

  .css-w-m-header {
    padding: 0 2rem;
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
    background: var(--background-d);
    width: 200px;
    height: 300px;
    color: inherit;
    border-radius: 3px;
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: column;
    right: -25px;
    box-sizing: border-box;
    animation-name: slideRight;
    animation-duration: 0.3s;
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
    color: #ffffff;
  }

  .css-w-m-hth i {
    margin-left: 10px;
    color: #ffffff;
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
    font-size: var(--text-size-third);
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