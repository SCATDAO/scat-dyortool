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
                    class="css-trade-history-tzx"
                    :class="{ active: sort_key == key }"
                  >
                    {{ headify(key) }}
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
                      <img class="css-783x" :src="entry[key]" alt="" />
                    </template>
                    <template v-if="key !== 'logo'">
                      {{ entry[key] }}
                    </template>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script>
const columns = [
  "logo",
  "name",
  "total_percentage",
  "total_score",
  "date",
  "author",
  "description",
];

const sorted = {};
columns.forEach(function (key) {
  sorted[key] = 1;
});

export default {
  data() {
    return {
      form: {
        project_name: "",
      },
      columns: columns,
      navTab: "library",
      library: "library",
      sort_key: "",
      project_data: [
        {
          name: "MNKR",
          description: "DEX with artificial intelligence",
          total_percentage: "59.34%",
          total_score: "89.00",
          author: "Charles278",
          date: "Aug 17 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Fnmkr%2F1660817873024.jpeg?alt=media&token=85167411-9bf4-4e65-aa44-18fb84aefce0",
        },
        {
          name: "Paribus",
          description: "DEX with artificial intelligence",
          total_percentage: "59.34%",
          total_score: "69.00",
          author: "Anonymous87",
          date: "Jul 23 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Fparibus%2F1655315905814.png?alt=media&token=3c09ae93-a694-4f00-ae46-cf3ae19c7c81",
        },

        {
          name: "Hoskinson Street bets",
          description: "DEX with artificial intelligence",
          total_percentage: "29.34%",
          total_score: "19.00",
          author: "Ivana278",
          date: "Aug 19 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Fada-street-bets%2F1660086985874.jpeg?alt=media&token=08d85926-1050-4661-9ab1-3a359db24a32",
        },

        {
          name: "Cexplorer.io",
          description: "DEX with artificial intelligence",
          total_percentage: "99.34%",
          total_score: "59.00",
          author: "Parca278",
          date: "Aug 29 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Fcexplorer-io%2F1659695454579.png?alt=media&token=93d5e04c-90e0-4051-b925-a99308f0a5fc",
        },

        {
          name: "Summon Platform",
          description: "DEX with artificial intelligence",
          total_percentage: "79.34%",
          total_score: "39.00",
          author: "Reditor34",
          date: "Aug 29 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Fsummon-platform%2F1658501129056.png?alt=media&token=a50adfcd-f4b2-4812-94a0-8248b46f07c1",
        },

        {
          name: "Tangem",
          description: "DEX with artificial intelligence",
          total_percentage: "29.34%",
          total_score: "39.00",
          author: "Social22c",
          date: "Aug 29 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Ftangem%2F1654894472895.png?alt=media&token=83b817b1-65ac-4b46-9858-cd12fb299d3b",
        },
        {
          name: "Tangem",
          description: "DEX with artificial intelligence",
          total_percentage: "29.34%",
          total_score: "39.00",
          author: "Social22c",
          date: "Aug 29 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Ftangem%2F1654894472895.png?alt=media&token=83b817b1-65ac-4b46-9858-cd12fb299d3b",
        },
        {
          name: "Tangem",
          description: "DEX with artificial intelligence",
          total_percentage: "29.34%",
          total_score: "39.00",
          author: "Social22c",
          date: "Aug 29 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Ftangem%2F1654894472895.png?alt=media&token=83b817b1-65ac-4b46-9858-cd12fb299d3b",
        },
        {
          name: "Tangem",
          description: "DEX with artificial intelligence",
          total_percentage: "29.34%",
          total_score: "39.00",
          author: "Social22c",
          date: "Aug 29 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Ftangem%2F1654894472895.png?alt=media&token=83b817b1-65ac-4b46-9858-cd12fb299d3b",
        },
        {
          name: "Tangem",
          description: "DEX with artificial intelligence",
          total_percentage: "29.34%",
          total_score: "39.00",
          author: "Social22c",
          date: "Aug 29 2022",
          logo: "https://firebasestorage.googleapis.com/v0/b/builtoncardano.appspot.com/o/uploads%2Ftangem%2F1654894472895.png?alt=media&token=83b817b1-65ac-4b46-9858-cd12fb299d3b",
        },
      ],
    };
  },
  methods: {
    sortBy(key) {
      this.sort_key = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
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

<style scoped>
tr,
th {
  color: #ffffff;
}

th {
  display: flex;
  align-items: center;
  overflow-wrap: normal;
  white-space: nowrap;
  background: #3d4144;
}
.css-783x {
  width: 30px;
  height: 30px;
  border-radius: 8px;
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