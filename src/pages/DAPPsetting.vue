<template>
  <div class="css-cp-wrap">
    <template v-if="loader_visible">
      <div class="k0c">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </template>
    <header class="css-cp-hdc">
      <router-link to="/" style="display: flex; align-items: baseline">
        <img src="../assets/white-logo.svg" alt="" />
      </router-link>
    </header>
    <div class="css-cp-ndw">
      <div class="css-cp-ndf">
        <router-link class="logo-blue" to="/">
          <img src="../assets/logo.svg" alt="" />
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
              Project name:
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
                          :class="{ active: sort_key == key }"
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
              Category:
              <span class="css-cp-xsa" :class="{ active: errors.category }"
                >Must not be empty or greater than 50 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.category"
              type="text"
              placeholder="Project's Category"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Symbol:
              <span class="css-cp-xsa" :class="{ active: errors.symbol }"
                >Must not be empty or greater than 30 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.symbol"
              type="text"
              placeholder="Project's Symbol"
            />
          </div>

          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Repository:
              <span class="css-cp-xsa" :class="{ active: errors.repository }"
                >Must not be empty or greater than 50 length</span
              >
            </div>
            <input
              class="css-cp-nii"
              v-model="form.repository"
              type="text"
              placeholder="Project's Repository"
            />
          </div>
          <div class="css-cp-nsi">
            <div class="css-cp-nst">
              Your nickname:
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
                <div class="css-cp-stx" :class="{ active: form.project_logo }">
                  <div class="css-cp-str" id="canvas-wrapper">
                    <template v-if="!fetching_image">
                      <img
                        :src="this.form.project_logo || defaultLogo"
                        alt=""
                      />
                    </template>

                    <template v-if="fetching_image">
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
    this.enableDropdown();
  },
  created() {
    this.updateData();
  },
  data() {
    return {
      errors: {
        project_name: false,
        description: false,
        website: false,
        category: false,
        symbol: false,
        repository: false,
        nickname: false,
        project_logo: false,
      },
      form: {
        project_name: "",
        description: "",
        website: "",
        category: "",
        symbol: "",
        repository: "",
        nickname: "",
        project_logo: "",
      },
      disclaimer: null,
      uploading_logo: false,
      editer_lang: "en",
      project_data: [],
      columns: columns,
      sort_key: "",
      dropdown_visible: false,
      loader_visible: true,
      fetching_image: false,
      defaultLogo:
        "data:image/svg+xml;base64,PHN2ZyBpZD0iU1ZHUm9vdCIgd2lkdGg9IjgwcHgiIGhlaWdodD0iODBweCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgODAgODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iU3RvY2tob2xtLWljb25zLS8tRmlsZXMtLy1VcGxvYWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjUzNSAyNS45NjkpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogIDxyZWN0IGlkPSJib3VuZCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CiAgPGcgZmlsbD0iIzAwNjlmNSI+CiAgIDxwYXRoIGQ9Im0yIDEzYzAtMC41IDAuNS0xIDEtMXMxIDAuNSAxIDF2NWMwIDEuMTA0NiAwLjg5NTQzIDIgMiAyaDEyYzEuMTA0NiAwIDItMC44OTU0MyAyLTJ2LTVjMC0wLjU1MjI4IDAuNDQ3NzItMSAxLTFzMSAwLjQ0NzcyIDEgMXY1YzAgMi4yMDkxLTEuNzkwOSA0LTQgNGgtMTJjLTIuMjA5MSAwLTQtMS43OTA5LTQtNHYtNXoiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iLjMiLz4KICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTEiIHk9IjIiIHdpZHRoPSIyIiBoZWlnaHQ9IjE0IiByeD0iMSIgb3BhY2l0eT0iLjMiLz4KICAgPHBhdGggZD0ibTEyLjAzNiAzLjM3OC00LjMyOTEgNC4zMjkxYy0wLjM5MDUyIDAuMzkwNTItMS4wMjM3IDAuMzkwNTItMS40MTQyIDBzLTAuMzkwNTItMS4wMjM3IDAtMS40MTQybDUtNWMwLjM3NjA4LTAuMzc2MDggMC45ODA3NC0wLjM5MTk4IDEuMzc2MS0wLjAzNjE4N2w1IDQuNWMwLjQxMDUxIDAuMzY5NDYgMC40NDM3OSAxLjAwMTcgMC4wNzQzMyAxLjQxMjMtMC4zNjk0NiAwLjQxMDUxLTEuMDAxNyAwLjQ0Mzc5LTEuNDEyMyAwLjA3NDMyOXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==",
    };
  },
  methods: {
    updateData() {
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

            this.project_data = data;

            this.loader_visible = false;
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
    enableDropdown() {
      let timer;

      const wait_time = 500;

      const dropdown_input = document.querySelector("#tableTradeSearch");

      dropdown_input.addEventListener("keyup", () => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          this.deployDropdown(true);

          dropdown_input.blur();
          dropdown_input.focus();
        }, wait_time);
      });

      dropdown_input.addEventListener("click", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.deployDropdown(true);
        }, wait_time);
      });
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    sortBy(key) {
      this.sort_key = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    configProject(element) {
      this.deployDropdown(false);
      this.form.project_name = element.name;
      this.form.description = element.description;
      this.updateLogo(element.name);
    },

    updateLogo(element) {
      this.fetching_image = true;

      this.$nextTick(() => {
        setTimeout(async () => {
          try {
            const response = await axios.get(
              `http://192.168.1.3:8000/1.1/logo/report-logo/${element}`
            );
            this.form.project_logo = response.data.logo;
            this.fetching_image = false;
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
        category: false,
        symbol: false,
        repository: false,
        nickname: false,
        project_logo: false,
      };
      const __ = (a, b) => a.length > 0 && a.length < b;

      if (!__(this.form.project_name, 50)) this.errors.project_name = true;
      if (!__(this.form.description, 200)) this.errors.description = true;
      if (!__(this.form.website, 50)) this.errors.website = true;
      if (!__(this.form.category, 50)) this.errors.category = true;
      if (!__(this.form.symbol, 30)) this.errors.symbol = true;
      if (!__(this.form.repository, 100)) this.errors.repository = true;
      if (!__(this.form.nickname, 50)) this.errors.nickname = true;
      if (!this.form.project_logo) this.errors.project_logo = true;

      if (!this.fetching_image) {
        return !Object.values(this.errors).includes(true) ? true : false;
      }
    },
    createNewReport() {
      this.$store.commit("configureDAPP", this.form);
      this.$router.push("/dapp");
    },
  },
  computed: {
    filteredCoins() {
      const sort_key = this.sort_key;
      const filterKey =
        this.form.project_name && this.form.project_name.toLowerCase();
      const order = this.sortOrders[sort_key] || 1;
      let project_data = this.project_data;
      if (filterKey) {
        project_data = project_data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
          });
        });
      }
      if (sort_key) {
        project_data = project_data.slice().sort(function (a, b) {
          a = a[sort_key];
          b = b[sort_key];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return project_data;
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

