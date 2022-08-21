<template>
  <div class="css-cp-wrap">
    <template v-if="isLoading">
      <div class="css-kq2 k0c">
        <div class="lds-fcs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </template>
    <header class="css-cp-hdc">
      <router-link to="/" style="display: flex; align-items: baseline">
       <img src="../assets/logo-blue.png" alt="">
      </router-link>
    </header>
    <div class="css-cp-ndw">
      <div class="css-cp-ndf">
        <router-link class="logo-blue" to="/">
               <img id="logo-blue" src="../assets/logo-white.png" alt="">
        </router-link>
        <div class="css-cp-nxs">
          <div class="css-cp-nsk">
            <div class="css-cp-sdt">
              Fill out the following form with details of the project you want.
            </div>
          </div>
        </div>
        <div class="css-cp-faw">
          <div class="css-cp-nsc">
            <div class="css-cp-nst">
              Name:
              <span class="css-cp-xsa" :class="{ active: errors.pn }"
                >Must not be empty or greater than 50 length</span
              >
            </div>
            <input
              id="tableTradeSearch"
              name="query"
              autocomplete="off"
              class="css-cp-nii"
              type="text"
              placeholder="Project's name"
              v-model="pn"
            />
            <template v-if="isDeployed">
              <div class="css-trade-history-wrp" id="tableD">
                <div
                  class="css-trade-history-scl"
                  @click="isDeployed = false"
                ></div>
                <div class="css-trade-history-sub">
                  <span></span>
                  <span>Powered by builtoncardano.com</span>
                </div>
                <div class="css-trade-history-tablew">
                  <table>
                    <thead>
                      <tr class="css-trade-history-txz">
                        <th
                          v-for="key in columns"
                          :key="key"
                          @click="sortBy(key)"
                          class="css-trade-history-tzx"
                          :class="{ active: sortKey == key }"
                        >
                          {{ capitalize(key) }}
                          <span
                            class="arrow"
                            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
                          >
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="entry in filteredCoins"
                        :key="entry"
                        @click="configProject(entry)"
                      >
                        <td v-for="key in columns" :key="key">
                          <template v-if="key === 'logo'">
                            <img
                              style="width: 50px; height: 50px"
                              :src="entry[key]"
                              alt=""
                            />
                          </template>
                          <template v-if="key !== 'logo'">
                            {{ entry[key] }}
                          </template>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </template>
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Symbol:
              <span class="css-cp-xsa" :class="{ active: errors.ps }"
                >Must not be empty or greater than 20 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="ps"
              type="text"
              placeholder="Token Symbol"
            />
          </div>
          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Description:
              <span class="css-cp-xsa" :class="{ active: errors.pd }"
                >Must not be empty or greater than 200 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="pd"
              type="text"
              placeholder="Short description"
            />
          </div>
          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Category:
              <span class="css-cp-xsa" :class="{ active: errors.pc }"
                >Must not be empty or greater than 100 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="pc"
              type="text"
              placeholder="DEX, NFT, stablecoin, etc..."
            />
          </div>
          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Website:
              <span class="css-cp-xsa" :class="{ active: errors.pw }"
                >Must not be empty or greater than 50 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="pw"
              type="text"
              placeholder="www.example.com"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Repository:
              <span class="css-cp-xsa" :class="{ active: errors.pr }"
                >Must not be empty or greater than 100 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="pr"
              type="text"
              placeholder="Code repository link"
            />
          </div>
          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Your Nickname:
              <span class="css-cp-xsa" :class="{ active: errors.an }"
                >Must not be empty or greater than 16 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="an"
              type="text"
              placeholder="Your name ..."
            />
          </div>
          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Logo
              <span class="css-cp-xsa" :class="{ active: errors.pl }"
                >Please upload the logo of the project</span
              >
            </div>
            <div class="css-cp-sla">
              <my-upload
                field="img"
                @crop-success="cropSuccess"
                @crop-upload-success="cropUploadSuccess"
                @crop-upload-fail="cropUploadFail"
                v-model="show"
                :width="80"
                :height="80"
                noSquare
                :langType="langType"
                :params="params"
                :headers="headers"
                img-format="png"
              ></my-upload>

              <div class="css-cp-ixw">
                <div class="css-cp-stx" :class="{ active: pl }">
                  <div class="css-cp-str" id="canvas-wrapper">
                    <template v-if="!isFetching">
                      <img :src="pl" alt="" />
                    </template>

                    <template v-if="isFetching">
                      <div class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </template>
                  </div>
                </div>
                <div class="css-cp-bwp">
                  <button class="css-upload-button" @click="toggleShow">
                    Upload logo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="css-cp-nsl"></div>
        </div>
        <button class="css-cp-asa" @click="nextResearch()">Let's go !</button>
        <template v-if="isDisclaimerKnown === false">
          <div class="css-cp-cgj">
            <span class="css-cp-cjs">Disclaimer</span>
            <span>
              DYOR Tool is meant to help users learn about investing. Using the
              tool does not guarantee that your investments will be profitable
              or that the information will be accurate or comprehensive. It is
              meant for informational purposes only. The information contained
              in the DYOR Tool is not intended as, and shall not be understood
              or construed as, financial advice. The makers of the tool are not
              financial advisors or attorneys, and the information contained on
              the website is not a substitute for financial advice from a
              professional who is aware of the facts and circumstances of your
              individual situation. The creators of the tool accept no liability
              whatsoever for any loss or damage you may incur. We expressly
              recommend that you seek advice from a professional before making
              any investments.
            </span>
            <div class="css-cp-csj">
              <button @click="isDisclaimerKnown = null">Decline</button>
              <button @click="newReportNext()">Accept</button>
            </div>
          </div>
        </template>
        <div class="css-cp-csh"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import myUpload from "vue-image-crop-upload-responsive";

const columns = ["logo", "name", "description"];

const sorted = {};
columns.forEach(function (key) {
  sorted[key] = 1;
});

export default {
  mounted() {
    this.inputScanner();
  },
  async created() {
    //this.updateData();
  },
  components: {
    "my-upload": myUpload,
  },
  data() {
    return {
      errors: {
        pn: false,
        ps: false,
        pd: false,
        pc: false,
        pw: false,
        pr: false,
        an: false,
      },
      isDisclaimerKnown: null,
      show: false,
      dataRaw: null,
      params: {
        token: "123456798",
        name: "avatar",
      },
      langType: "en",
      headers: {
        smail: "*_~",
      },
      imgDataUrl: "",
      tableData: [],
      columns: columns,
      sortKey: "",
      pn: "",
      ps: "",
      pd: "",
      pc: "",
      pw: "",
      pr: "",
      an: "",
      pl: "data:image/svg+xml;base64,PHN2ZyBpZD0iU1ZHUm9vdCIgd2lkdGg9IjgwcHgiIGhlaWdodD0iODBweCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgODAgODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iU3RvY2tob2xtLWljb25zLS8tRmlsZXMtLy1VcGxvYWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjUzNSAyNS45NjkpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogIDxyZWN0IGlkPSJib3VuZCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CiAgPGcgZmlsbD0iIzAwNjlmNSI+CiAgIDxwYXRoIGQ9Im0yIDEzYzAtMC41IDAuNS0xIDEtMXMxIDAuNSAxIDF2NWMwIDEuMTA0NiAwLjg5NTQzIDIgMiAyaDEyYzEuMTA0NiAwIDItMC44OTU0MyAyLTJ2LTVjMC0wLjU1MjI4IDAuNDQ3NzItMSAxLTFzMSAwLjQ0NzcyIDEgMXY1YzAgMi4yMDkxLTEuNzkwOSA0LTQgNGgtMTJjLTIuMjA5MSAwLTQtMS43OTA5LTQtNHYtNXoiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMiLz4KICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTEiIHk9IjIiIHdpZHRoPSIyIiBoZWlnaHQ9IjE0IiByeD0iMSIgb3BhY2l0eT0iLjMiLz4KICAgPHBhdGggZD0ibTEyLjAzNiAzLjM3OC00LjMyOTEgNC4zMjkxYy0wLjM5MDUyIDAuMzkwNTItMS4wMjM3IDAuMzkwNTItMS40MTQyIDBzLTAuMzkwNTItMS4wMjM3IDAtMS40MTQybDUtNWMwLjM3NjA4LTAuMzc2MDggMC45ODA3NC0wLjM5MTk4IDEuMzc2MS0wLjAzNjE4N2w1IDQuNWMwLjQxMDUxIDAuMzY5NDYgMC40NDM3OSAxLjAwMTcgMC4wNzQzMyAxLjQxMjMtMC4zNjk0NiAwLjQxMDUxLTEuMDAxNyAwLjQ0Mzc5LTEuNDEyMyAwLjA3NDMyOXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==",
      isDeployed: false,
      isSelected: false,
      isUploaded: false,
      isLoading: false,
      isFetching: false,
    };
  },
  methods: {
    async updateData() {
      this.$nextTick(() => {
        setTimeout(async () => {
          let data = [];
          try {
            const res = await axios.get(
              `https://us-central1-builtoncardano.cloudfunctions.net/api/projects`
            );
            data = res.data.map((e) => {
              return {
                logo: e.logoUrl,
                name: e.name,
                description: e.description,
                category: e.industries[0],
              };
            });

            this.tableData = data;

            console.log(this.tableData);

            this.isLoading = false;
          } catch (error) {
            console.log(error);
          }
        }, 1000);
      });
    },
    resetInputs() {
      this.ps = "";
      this.pl = "";
    },
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      this.pl = imgDataUrl;
      this.isUploaded = true;
      console.log("IMAGE LOADED", field);
    },

    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    },
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      this.pl = "";
      console.log(status);
      console.log("field: " + field);
    },
    inputScanner() {
      let timer;

      const waitTime = 500;

      const input = document.querySelector("#tableTradeSearch");

      const tableD = document.querySelector("#tableTradeSearch");

      input.addEventListener("keyup", () => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          this.deployDropdown(true);

          tableD.blur();
          input.focus();
        }, waitTime);
      });

      input.addEventListener("click", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.deployDropdown(true);
        }, waitTime);
      });
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    configProject(element) {
      this.deployDropdown(false);
      this.pn = element.name;
      this.pd = element.description;
      this.pc = element.category.toUpperCase();
      this.updateLogo(element.name);
      this.isSelected = true;
    },

    async updateLogo(element) {
      this.isFetching = true;

      this.$nextTick(() => {
        setTimeout(async () => {
          try {
            const res = await axios.get(
              `https://api.dyortool.io/v1/logo/searchId/${element}`
            );
            this.pl = res.data.logo;
            this.isFetching = false;
            return res.data.logo;
          } catch (error) {
            console.log(error);
          }
        }, 1000);
      });
    },
    deployDropdown(b) {
      this.isDeployed = b;
    },
    nextResearch() {
      if (this.checkData()) {
        this.isDisclaimerKnown = false;
      }
    },
    acceptDisclaimer() {
      this.isDisclaimerKnown = true;
    },
    newReportNext() {
      this.$store.commit("modifyAuditData", {
        pn: this.pn,
        ps: this.ps,
        pd: this.pd,
        pc: this.pc,
        pw: this.pw,
        pr: this.pr,
        an: this.an,
        pl: this.pl,
        pp: "",
      });
      this.$router.push("/research");
    },
    checkData() {
      (this.errors = {
        pn: false,
        ps: false,
        pd: false,
        pc: false,
        pw: false,
        pr: false,
        an: false,
        pl: false,
      }),
        this.pn.length > 0 ? true : (this.errors.pn = true);
      this.pn.length < 50 ? true : (this.errors.pn = true);

      this.ps.length > 0 ? true : (this.errors.ps = true);
      this.ps.length < 20 ? true : (this.errors.ps = true);

      this.pd.length > 0 ? true : (this.errors.pd = true);
      this.pd.length < 200 ? true : (this.errors.pd = true);

      this.pc.length > 0 ? true : (this.errors.pc = true);
      this.pc.length < 100 ? true : (this.errors.pc = true);

      this.pw.length > 0 ? true : (this.errors.pw = true);
      this.pw.length < 50 ? true : (this.errors.pw = true);

      this.pr.length > 0 ? true : (this.errors.pr = true);
      this.pr.length < 100 ? true : (this.errors.pr = true);

      this.an.length > 0 ? true : (this.errors.an = true);
      this.an.length < 16 ? true : (this.errors.an = true);

      if (!this.isSelected) {
        this.isUploaded ? true : (this.errors.pl = true);
      }

      if (!this.isFetching) {
        return !Object.values(this.errors).includes(true) ? true : false;
      }
    },
  },
  computed: {
    filteredCoins() {
      const sortKey = this.sortKey;
      const filterKey = this.pn && this.pn.toLowerCase();
      const order = this.sortOrders[sortKey] || 1;
      let tableData = this.tableData;
      if (filterKey) {
        tableData = tableData.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
          });
        });
      }
      if (sortKey) {
        tableData = tableData.slice().sort(function (a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return tableData;
    },
    sortOrders() {
      const columnSortOrders = {};

      this.columns.forEach(function (key) {
        columnSortOrders[key] = 1;
      });

      return columnSortOrders;
    },
  },
};
</script>

<style scoped>
#logo-blue {
  fill: var(--complementary-color-blue);
}

.css-cp-cgj {
  width: calc(100% - 6rem);
  margin-top: 10%;
  box-sizing: border-box;
  padding: 2rem;
  text-align: justify;
  background: #fff;
  border: 1px solid var(--complementary-color-blue);
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  color: var(--text-color-secondary);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px var(--border-primary);
}

.css-cp-csj {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-top: 1rem;
}

.css-cp-csj button {
  padding: 10px 14px;
  margin-left: 1rem;
  cursor: pointer;
  letter-spacing: 0.3px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: var(--complementary-color-blue);
  color: #fff;
}

.css-cp-cjs {
  font-weight: 700;
  color: var(--text-color-primary);
  margin-bottom: 1rem;
}

.css-cp-nfd {
  display: flex;
  justify-content: space-between;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 3px solid #0069f5;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #0069f5 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.css-upload-button {
  background: var(--color-soft-blue);
  padding: 1rem 4rem;
  color: var(--complementary-color-blue);
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
.css-kq2 {
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.5);
}

.k0c {
  z-index: 30;
  position: fixed;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
}

.lds-fcs {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-fcs div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #ffffff;
  animation: lds-fcs 1.1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-fcs div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-fcs div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-fcs div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-fcs {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
.css-cp-ixw {
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
}

.css-cp-hdc {
  display: none;
}

.css-cp-bwp {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.css-cp-ari {
  height: 100px;
  width: 100px;
  border-radius: 6px;
  display: flex;
  background-size: contain;
  border: 1px solid var(--border-primary);
}

.css-trade-history-scl {
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
  position: fixed;
  cursor: text;
  z-index: -1;
}

.css-cp-wrap {
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  box-sizing: border-box;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.css-cp-sla {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.css-cp-header {
  background: var(--base-color-white-primary);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  height: 64px;
  display: flex;
  padding: 0 2rem;
  align-items: center;
}

.css-cp-ndw {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem 0;
  background: linear-gradient(
    45deg,
    rgba(0, 105, 245, 1) 0%,
    rgba(64, 78, 237, 1) 100%
  );
}

.css-logo {
  cursor: pointer;
}
.css-cp-asa {
  height: 3rem;
  min-height: 3rem;
  max-height: 3rem;
  background: var(--complementary-color-blue);
  border: var(--complementary-color-blue);
  border-radius: 6px;
  color: #ffffff;
  font-weight: 600;
  font-size: var(--text-size-primary);
  cursor: pointer;
  margin-top: 2rem;
}

.css-cp-asa:hover {
  transition: ease-in 0.3s;
  opacity: 0.9;
}

.css-cp-ndf {
  width: auto;
  min-width: 625px;
  max-width: 625px;
  height: 100%;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background: var(--base-color-white-primary);
  box-sizing: border-box;
  padding: 2rem 3rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.css-cp-sdt {
  font-size: var(--text-size-third);
}

.css-cp-nst {
  display: flex;
  align-items: flex-end;
}

.css-cp-str {
  width: 100px;
  height: 100px;
  border-radius: 6px;
  border: 1px solid var(--border-primary);
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  align-items: center;
}

.css-cp-str img {
  width: 80px;
  height: 80px;
}
.css-trade-history-tzx.active {
  color: var(--complementary-color-blue);
}

.css-cp-xsa {
  display: none;
  margin-left: auto;
}
.css-cp-xsa.active {
  color: red;
  opacity: 0.8;
  display: initial;
  font-size: var(--text-size-secondary);
}

.css-cp-nxs {
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  justify-content: space-between;
}

.css-cp-stx {
  border-radius: 6px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='SVGRoot' width='100px' height='100px' version='1.1' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cfilter id='filter3322' x='-.00012001' y='-.00012' width='1.0002' height='1.0002' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='0.005'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='%230069f5'%3E%3Crect x='-.18634' y='5e-7' width='99.999' height='100' filter='url(%23filter3322)' opacity='.1' stroke-width='0'/%3E%3Cpath d='m36.529 33.792h26.117c3.6061 0 6.5294 2.9233 6.5294 6.5294v19.588c0 3.6061-2.9233 6.5294-6.5294 6.5294h-26.117c-3.6061 0-6.5294-2.9233-6.5294-6.5294v-19.588c0-3.6061 2.9233-6.5294 6.5294-6.5294zm-2.1765 26.117h19.588l-9.7941-13.059zm23.941-6.5294c3.6061 0 6.5294-2.9233 6.5294-6.5294 0-3.6061-2.9233-6.5294-6.5294-6.5294-3.6061 0-6.5294 2.9233-6.5294 6.5294 0 3.6061 2.9233 6.5294 6.5294 6.5294z' opacity='.8' stroke-width='2.1765'/%3E%3C/g%3E%3C/svg%3E%0A");
}
.css-cp-stx.active {
  border-radius: 6px;
  background: none;
  cursor: default;
}

.css-cp-nsi,
.css-cp-nsc {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

.css-cp-nsc {
  position: relative;
  box-sizing: border-box;
}

.css-cp-nsl {
  margin-top: 2rem;
}

.css-cp-faw {
  margin-top: 1rem;
}

.css-cp-nii {
  width: auto;
  height: 3rem;
  padding: 0 1rem;
  color: var(--text-color-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  margin-top: 0.5rem;
  outline: none;
}

.css-cp-nii::placeholder {
  opacity: 0.5;
  letter-spacing: 0.01em;
  font-size: var(--text-size-secondary);
}

.css-cp-nii::-moz-placeholder {
  opacity: 0.5;
  font-size: var(--text-size-secondary);
}
.css-cp-nii::-webkit-input-placeholder {
  opacity: 0.5;
  font-size: var(--text-size-secondary);
}

.css-cp-nii:focus-within::placeholder {
  opacity: 0;
}
.css-trade-history-wrp {
  width: calc(625px - 6rem);
  border: 1px solid var(--border-primary);
  height: 600px;
  background: var(--base-color-white-primary);
  border-radius: 6px;
  position: absolute;
  margin-top: 6rem;
  z-index: 1;
  animation-name: deploy;
  animation-duration: 0.5s;
  transition: ease 0.1s;
}

th,
td {
  padding: 10px 2rem;
  width: 100%;
}

@media (max-width: 600px) {
  .css-trade-history-wrp {
    width: 100%;
    position: inherit;
    margin-top: 1rem;
  }

  th,
  td {
    padding: 1rem;
    width: 100%;
  }

  .css-cp-ndw {
    width: 100%;
    display: flex;
    background: var(--complementary-color-blue);
    padding: 0;
    box-sizing: border-box;
  }

  #logo-white {
    fill: #fff;
  }
  #logo-blue {
    display: none;
  }
  .logo-blue {
    background: red;
  }

  .css-cp-nxs {
    margin-top: 0;
  }

  .css-cp-hdc {
    background: var(--complementary-color-blue);
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
  }

  .css-cp-csh {
    width: 100%;
    height: 100px;
    display: flex;
  }
  .css-cp-ndf {
    min-width: 300px;
    box-sizing: content-box;
    box-shadow: none;
    padding: 10%;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }

  .css-cp-header {
    background: var(--complementary-color-blue);
    box-shadow: none;
  }
}

/* */

@keyframes deploy {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.css-trade-history-sub {
  background: var(--color-base-third);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: var(--text-size-secondary);
  color: var(--text-color-secondary);
  height: 40px;
  border-bottom: 1px solid var(--border-primary);
}

.css-trade-history-tablew {
  scroll-behavior: smooth;
  overflow-x: scroll;
  height: 85%;
  background: var(--base-color-white-secondary);
}

.css-trade-history-sub ul {
  display: flex;
  color: var(--ui-base-color-primary);
  font-size: 0.8rem;
  list-style: none;
  padding: 0;
}

.css-trade-history-sub li {
  display: flex;
  margin-right: 1rem;
}

table {
  font-size: 0.8rem;
  width: 100%;
}

th {
  color: var(--text-color-primary);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: start;
}

td {
  text-align: start;
}

th.active {
  color: #fff;
}

tr {
  color: var(--text-color-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
}

tr:hover {
  background: var(--color-soft-blue);
}
th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
  border: 1px solid transparent;
  border-radius: 4px;
}

.css-logo-width {
  width: 50px !important;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

#tableTradeSearch::placeholder {
  margin-left: 10px;
}
</style>