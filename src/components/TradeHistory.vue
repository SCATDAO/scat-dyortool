<template>
  <div class="css-trade-history-container">
    <div class="css-trade-history-subheader">
      <div id="demo">
        <form>
          <input
            id="tableTradeSearch"
            name="query"
            placeholder="Search Project"
            v-model="filterKey"
          />
        </form>
      </div>
    </div>
    <div class="css-trade-history-tablew">
      <table>
        <thead>
          <tr>
            <th
              v-for="key in columns"
              :key="key"
              @click="sortBy(key)"
              :class="{ active: sortKey == key }"
            >
              {{ capitalize(key) }}
              <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in filteredHeroes" :key="entry">
            <td v-for="key in columns" :key="key">
              <template v-if="key === 'logo'">
                <img :src="entry[key]" alt="" />
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

<script>
import axios from "axios";

const columns = ["logo", "name", "token"];

const sorted = {};
columns.forEach(function (key) {
  sorted[key] = 1;
});

export default {
  async mounted() {
    await this.updateCoins();
  },
  data() {
    return {
      tableData: [],
      columns: columns,
      sortKey: "",
      filterKey: "",
    };
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },

    async createNewAxios() {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${this.filterKey}`
      );
      this.tableData = res.data.coins.map((e) => {
        return {
          logo: e.thumb,
          name: e.name,
          token: e.symbol,
        };
      });
    },
    async updateCoins() {
      if (this.filterKey !== "") {
        try {
          const res = await axios.get(
            `https://api.coingecko.com/api/v3/search?query=${this.filterKey}`
          );
          this.tableData = res.data.coins.map((e) => {
            return {
              logo: e.thumb,
              name: e.name,
              token: e.symbol,
            };
          });
        } catch (error) {
          console.log(error);
          this.createNewAxios;
        }
      }
    },
  },
  watch: {
    async filterKey() {
      let timer;
      const waitTime = 500;

      const search = () => {
        this.updateCoins();
      };

      const input = document.querySelector("#tableTradeSearch");
      input.addEventListener("keyup", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          search();
        }, waitTime);
      });
    },
  },
  computed: {
    filteredHeroes() {
      const sortKey = this.sortKey;
      const filterKey = this.filterKey && this.filterKey.toLowerCase();
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
.css-trade-history-container {
  width: 1000px;
  height: 23vw;
  min-height: 23vw;
  max-height: 23vw;
  border: 1px solid var(--ui-base-border-secondary);
  border-left: none;
  background: white;
}

.css-trade-history-subheader {
  background: var(--color-base-third);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 40px;
}

.css-trade-history-tablew {
  overflow-x: scroll;
  height: 80%;
}

.css-trade-history-subheader ul {
  display: flex;
  color: var(--ui-base-color-primary);
  font-size: 0.8rem;
  list-style: none;
  padding: 0;
}

.css-trade-history-subheader li {
  display: flex;
  margin-right: 1rem;
}

table {
  font-size: 0.8rem;
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
  text-transform: uppercase;
}

th,
td {
  min-width: 150px;
  max-width: 150px;
  padding: 10px 1rem;
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

#tableTradeSearch {
  background: transparent;
  border: none;
  outline: none;
  color: var(--ui-text-primary);
  opacity: 0.5;
  height: 50px;
  border-radius: 8px;
  padding: 0 1rem;
  border: 1px solid var(--border-primary);
}

#tableTradeSearch::placeholder {
  margin-left: 10px;
}
</style>