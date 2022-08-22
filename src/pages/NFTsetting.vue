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
        <img src="../assets/logo-blue.png" alt="" />
      </router-link>
    </header>
    <div class="css-cp-ndw">
      <div class="css-cp-ndf">
        <router-link class="logo-blue" to="/">
          <img id="logo-blue" src="../assets/logo-white.png" alt="" />
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
              Project Name:
              <span class="css-cp-xsa" :class="{ active: errors.project_name }"
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
              v-model="form.project_name"
            />
            <template v-if="dropdown_visible">
              <div class="css-t-h-wrp" id="tableD">
                <div
                  class="css-trade-history-scl"
                  @click="deployDropdown(false)"
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
              Description:
              <span class="css-cp-xsa" :class="{ active: errors.description }"
                >Must not be empty or greater than 200 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.description"
              type="text"
              placeholder="Short description"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Website:
              <span class="css-cp-xsa" :class="{ active: errors.website }"
                >Must not be empty or greater than 50 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.website"
              type="text"
              placeholder="www.example.com"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Discord:
              <span class="css-cp-xsa" :class="{ active: errors.discord }"
                >Must not be empty or greater than 50 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.discord"
              type="text"
              placeholder="Project's Discord"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Twitter:
              <span class="css-cp-xsa" :class="{ active: errors.twitter }"
                >Must not be empty or greater than 50 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.twitter"
              type="text"
              placeholder="Project's Twitter"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Number in Circulation:
              <span
                class="css-cp-xsa"
                :class="{ active: errors.number_in_circulation }"
                >Must not be empty or greater than 50 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.number_in_circulation"
              type="text"
              placeholder="Number in Circulation"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Whitelist:
              <span class="css-cp-xsa" :class="{ active: errors.whitelist }"
                >Must not be empty or greater than 100 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.whitelist"
              type="text"
              placeholder="About NFT Whitelisting"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Number per Mint:
              <span
                class="css-cp-xsa"
                :class="{ active: errors.number_per_mint }"
                >Must not be empty or greater than 100 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.number_per_mint"
              type="text"
              placeholder="Number per Mint"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Mint Date:
              <span class="css-cp-xsa" :class="{ active: errors.mint_date }"
                >Must not be empty or greater than 100 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.mint_date"
              type="text"
              placeholder="Minting Date"
            />
          </div>
          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Your Nickname:
              <span class="css-cp-xsa" :class="{ active: errors.nickname }"
                >Must not be empty or greater than 50 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.nickname"
              type="text"
              placeholder="Your nickname for the report..."
            />
          </div>
          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Logo
              <span class="css-cp-xsa" :class="{ active: errors.project_logo }"
                >Please upload the logo of the project</span
              >
            </div>
            <div class="css-cp-sla">
              <my-upload
                field="img"
                @crop-success="cropSuccess"
                @crop-upload-success="cropUploadSuccess"
                @crop-upload-fail="cropUploadFail"
                v-model="uploading_logo"
                :width="80"
                :height="80"
                noSquare
                :langType="editer_lang"
                img-format="png"
              ></my-upload>

              <div class="css-cp-ixw">
                <div class="css-cp-stx" :class="{ active: pl }">
                  <div class="css-cp-str" id="canvas-wrapper">
                    <template v-if="!isFetching">
                      <img
                        :src="this.form.project_logo || defaultLogo"
                        alt=""
                      />
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
                  <button class="css-upload-button" @click="uploadLogo">
                    Upload logo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="css-cp-nsl"></div>
        </div>
        <button class="css-cp-asa" @click="checkDataIntegrity()">
          Let's go !
        </button>
        <template v-if="disclaimer === false">
          <div class="css-cp-cgj">
            <span class="css-cp-cjs">DISCLAIMER</span>
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
              <button @click="changeDisclaimer(null)">Decline</button>
              <button @click="createNewReport()">Accept</button>
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
  components: {
    "my-upload": myUpload,
  },
  mounted() {
    this.RunDropdown();
  },
  created() {
    this.updateDropdownData();
  },
  data() {
    return {
      errors: {
        project_name: false,
        description: false,
        website: false,
        discord: false,
        twitter: false,
        number_in_circulation: false,
        whitelist: false,
        number_per_mint: false,
        mint_date: false,
        nickname: false,
        project_logo: false,
      },
      form: {
        project_name: "",
        description: "",
        website: "",
        discord: "",
        twitter: "",
        number_in_circulation: "",
        whitelist: "",
        number_per_mint: "",
        mint_date: "",
        nickname: "",
        project_logo: "",
      },
      disclaimer: null,
      uploading_logo: false,
      editer_lang: "en",
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
      dropdown_visible: false,
      isUploaded: false,
      isLoading: false,
      isFetching: false,
      defaultLogo:
        "data:image/svg+xml;base64,PHN2ZyBpZD0iU1ZHUm9vdCIgd2lkdGg9IjgwcHgiIGhlaWdodD0iODBweCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgODAgODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iU3RvY2tob2xtLWljb25zLS8tRmlsZXMtLy1VcGxvYWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjUzNSAyNS45NjkpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogIDxyZWN0IGlkPSJib3VuZCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CiAgPGcgZmlsbD0iIzAwNjlmNSI+CiAgIDxwYXRoIGQ9Im0yIDEzYzAtMC41IDAuNS0xIDEtMXMxIDAuNSAxIDF2NWMwIDEuMTA0NiAwLjg5NTQzIDIgMiAyaDEyYzEuMTA0NiAwIDItMC44OTU0MyAyLTJ2LTVjMC0wLjU1MjI4IDAuNDQ3NzItMSAxLTFzMSAwLjQ0NzcyIDEgMXY1YzAgMi4yMDkxLTEuNzkwOSA0LTQgNGgtMTJjLTIuMjA5MSAwLTQtMS43OTA5LTQtNHYtNXoiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMiLz4KICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTEiIHk9IjIiIHdpZHRoPSIyIiBoZWlnaHQ9IjE0IiByeD0iMSIgb3BhY2l0eT0iLjMiLz4KICAgPHBhdGggZD0ibTEyLjAzNiAzLjM3OC00LjMyOTEgNC4zMjkxYy0wLjM5MDUyIDAuMzkwNTItMS4wMjM3IDAuMzkwNTItMS40MTQyIDBzLTAuMzkwNTItMS4wMjM3IDAtMS40MTQybDUtNWMwLjM3NjA4LTAuMzc2MDggMC45ODA3NC0wLjM5MTk4IDEuMzc2MS0wLjAzNjE4N2w1IDQuNWMwLjQxMDUxIDAuMzY5NDYgMC40NDM3OSAxLjAwMTcgMC4wNzQzMyAxLjQxMjMtMC4zNjk0NiAwLjQxMDUxLTEuMDAxNyAwLjQ0Mzc5LTEuNDEyMyAwLjA3NDMyOXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==",
    };
  },
  methods: {
    updateDropdownData() {
      this.$nextTick(() => {
        setTimeout(async () => {
          let data = [];
          try {
            const response = await axios.get(
              `https://us-central1-builtoncardano.cloudfunctions.net/api/projects`
            );
            data = response.data.map((e) => {
              return {
                logo: e.logoUrl,
                name: e.name,
                description: e.description,
                category: e.industries[0],
              };
            });

            this.tableData = data;

            this.isLoading = false;
          } catch (error) {
            console.log(error);
          }
        }, 0);
      });
    },
    uploadLogo() {
      this.uploading_logo = !this.uploading_logo;
    },
    cropSuccess(img, field) {
      this.form.project_logo = img;
      this.isUploaded = true;
      console.log("Image loaded", field);
    },

    cropUploadSuccess(jsonData, field) {
      console.log(jsonData);
      console.log("field: " + field);
    },
    cropUploadFail(status, field) {
      this.form.project_logo = "";
      console.log(status);
      console.log("field: " + field);
    },
    RunDropdown() {
      let timer;

      const waitTime = 500;

      const dropdownInput = document.querySelector("#tableTradeSearch");

      const tableD = document.querySelector("#tableTradeSearch");

      dropdownInput.addEventListener("keyup", () => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          this.deployDropdown(true);

          tableD.blur();
          dropdownInput.focus();
        }, waitTime);
      });

      dropdownInput.addEventListener("click", () => {
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
      this.form.project_name = element.name;
      this.form.description = element.description;
      this.updateLogo(element.name);
    },

    updateLogo(element) {
      this.isFetching = true;

      this.$nextTick(() => {
        setTimeout(async () => {
          try {
            const response = await axios.get(
              `https://api.dyortool.io/v1/logo/searchId/${element}`
            );
            this.form.project_logo = response.data.logo;
            this.isFetching = false;
          } catch (error) {
            console.log(error);
          }
        }, 1000);
      });
    },
    deployDropdown(b) {
      this.dropdown_visible = b;
    },
    checkDataIntegrity() {
      if (this.dataValidator()) {
        this.disclaimer = false;
      }
    },
    changeDisclaimer(e) {
      this.disclaimer = e;
    },
    dataValidator() {
      this.errors = {
        project_name: false,
        description: false,
        website: false,
        discord: false,
        twitter: false,
        number_in_circulation: false,
        whitelist: false,
        number_per_mint: false,
        mint_date: false,
        nickname: false,
        project_logo: false,
      };
      const __ = (a, b) => a.length > 0 && a.length < b;

      if (!__(this.form.project_name, 50)) this.errors.project_name = true;
      if (!__(this.form.description, 200)) this.errors.description = true;
      if (!__(this.form.website, 50)) this.errors.website = true;
      if (!__(this.form.discord, 50)) this.errors.discord = true;
      if (!__(this.form.twitter, 50)) this.errors.twitter = true;
      if (!__(this.form.number_in_circulation, 50))
        this.errors.number_in_circulation = true;
      if (!__(this.form.whitelist, 100)) this.errors.whitelist = true;
      if (!__(this.form.number_per_mint, 100))
        this.errors.number_per_mint = true;
      if (!__(this.form.mint_date, 100)) this.errors.mint_date = true;
      if (!__(this.form.nickname, 50)) this.errors.nickname = true;
      if (!this.form.project_logo) this.errors.project_logo = true;

      if (!this.isFetching) {
        return !Object.values(this.errors).includes(true) ? true : false;
      }
    },
    createNewReport() {
      this.$store.commit("configureNFT", this.form);
      this.$router.push("/nft");
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
  bottom: 10%;
  box-sizing: border-box;
  padding: 2rem;
  text-align: justify;
  background: #fff;
  border: 1px solid var(--border-primary);
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
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
.css-t-h-wrp {
  width: calc(625px - 6rem);
  border: 1px solid var(--border-primary);
  height: 600px;
  background: var(--base-color-white-primary);
  border-radius: 6px;
  position: absolute;
  margin-top: 6rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
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
  .css-t-h-wrp {
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