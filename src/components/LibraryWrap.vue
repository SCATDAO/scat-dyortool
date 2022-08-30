<template>
  <div class="css-546h">
    <div class="css-h7ek">
      <button @click="changeTab('library')">LIBRARY</button>
      <button @click="changeTab('dyor')">DYOR</button>
      <button @click="changeTab('info')">AUDIT</button>
      <div class="css-312h">
        <i class="pi pi-search"></i>
        <input
          name="query"
          autocomplete="off"
          type="text"
          placeholder="Search name"
          v-model="form.project_name"
        />
      </div>
    </div>
    <Transition>
      <div class="css-263b">
        <template v-if="navTab === 'library'">
          <div class="css-637c">
            <table>
              <thead>
                <tr class="css-trade-history-txz">
                  <th
                    v-for="key in columns"
                    :key="key"
                    @click="sortBy(key)"
                    class="css-234h"
                    :class="{ active: sort_key == key }"
                  >
                    {{ headify(key) }}
                    <span
                      class="arrow"
                      :class="sort_orders[key] > 0 ? 'asc' : 'dsc'"
                    >
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="entry in filteredCoins"
                  :key="entry"
                  @click="projectSelected(entry)"
                >
                  <td v-for="key in columns" :key="key">
                    <template v-if="key === 'scheme'">
                      <span
                        class="css-347i"
                        :class="{
                          nft: entry[key] === 'NFT',
                          dapp: entry[key] === 'DAPP',
                        }"
                        >{{ entry[key] }}</span
                      >
                    </template>

                    <template v-if="key !== 'scheme'">
                      {{ entry[key] }}
                    </template>

                    <template v-if="key === 'total_percentage'"> % </template>
                  </td>
                </tr>
              </tbody>
            </table>
            <template v-if="loading_visible">
              <div class="css-549h">
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script>
import axios from "axios";
const columns = [
  "project",
  "scheme",
  "total_score",
  "total_percentage",
  "author",
  "date",
];

export default {
  data() {
    return {
      form: {
        project_name: "",
      },
      filter_key: "",
      columns,
      sort_orders: columns.reduce((o, key) => ((o[key] = 1), o), {}),
      sort_key: "",
      navTab: "library",
      library: "library",
      project_data: [],
      loading_visible: true,
    };
  },
  created() {
    this.updateData();
    this.sortBy("total_percentage");
  },
  methods: {
    updateData() {
      this.$nextTick(() => {
        setTimeout(async () => {
          try {
            const response = await axios.get(
              `http://192.168.1.3:8000/1.1/report/search-all`
            );

            console.log(response.data);

            this.project_data = response.data.map((e) => {
              return {
                project: e.project,
                scheme: e.scheme.toUpperCase(),
                total_percentage: e.total_percentage,
                total_score: e.total_score,
                author: e.author,
                date: new Date(e.date).toISOString().split("T")[0],
              };
            });

            this.loading_visible = false;
          } catch (error) {
            console.error(error);
          }
        }, 0);
      });
    },
    sortBy(key) {
      this.sort_key = key;
      this.sort_orders[key] = this.sort_orders[key] * -1;
    },
    changeTab(e) {
      this.navTab = e;
    },
    headify(str) {
      const str_ = str.replace("_", " ");
      return str_.charAt(0).toUpperCase() + str_.slice(1);
    },
  },
  computed: {
    filteredCoins() {
      const sort_key = this.sort_key;

      const filter_key = this.filter_key && this.filter_key.toLowerCase();

      const order = this.sort_orders[sort_key] || 1;

      let project_data = this.project_data;

      if (filter_key) {
        project_data = project_data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filter_key) > -1;
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
  },
};
</script>

<style scoped>
tr,
th {
  color: #ffffff;
}
tr {
  text-transform: capitalize;
}

th {
  display: flex;
  align-items: center;
  overflow-wrap: normal;
  white-space: nowrap;
  background: rgba(61, 65, 68, 0.2);
}

.arrow.asc {
  color: green;
}
.css-347i {
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 5px;
}

.css-234h.active {
  text-decoration: underline;
}

.css-347i.nft {
  background: var(--red);
}

.css-347i.dapp {
  background: var(--blue);
}

.css-549h {
  display: flex;
  width: 100%;
  justify-content: center;
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
  width: 34px;
  height: 34px;
  margin: 8px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
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

.css-312h {
  border: 1px solid #3d4144;
  border-radius: 8px;
  display: flex;
  padding: 0 0.5rem;
  align-items: center;
  color: #ffffff;
  margin: 0.5rem;
  margin-right: 2rem;
  margin-left: auto;
}
.css-312h input {
  padding: 0.5rem;
  outline: none;
  background: transparent;
  border: none;
  color: inherit;
  caret-color: #ffffff;
}

.css-312h input::placeholder {
  color: inherit;
}

.css-263b .sb62 {
  font-weight: 600;
  margin: 1rem 0;
}
.css-h7ek button {
  padding: 0.75rem 2rem;
  background: transparent;
  border: none;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.css-h7ek button:hover {
  background: #303437;
}
.css-h7ek {
  width: 100%;
  height: auto;
  max-height: 50px;
  min-height: 50px;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #3a3b3c;
}

.css-546h {
  width: 100%;
  height: 100%;
  min-height: 500px;
  max-height: 550px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: var(--background-d);
  align-items: center;
  border-bottom: 10px solid transparent;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
}

.css-263b {
  color: #ffffff;
  height: 100%;
  width: 100%;
  display: inline-block;
  text-overflow: ellipsis;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.css-263b::-webkit-scrollbar {
  width: 8px;
}

.css-263b::-webkit-scrollbar-track {
  background: transparent;
}

.css-263b::-webkit-scrollbar-thumb {
  background: #3d4144;
}

.css-263b::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>