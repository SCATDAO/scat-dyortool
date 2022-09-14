<template>
  <div class="css-546h">
    <div class="css-h7ek">
      <button @click="changeTab('library')">
        <i class="pi pi-folder-open"></i>
      </button>
      <button @click="changeTab('info')">
        <i class="pi pi-shield"></i>
      </button>
      <div class="css-312h">
        <i class="pi pi-search"></i>
        <input
          name="query"
          autocomplete="off"
          type="text"
          placeholder="Search name"
          v-model="filter_key"
        />
      </div>
    </div>
    <Transition>
      <div class="css-263b">
        <template v-if="navTab === 'library'">
          <div class="css-637c">
            <table>
              <thead>
                <tr>
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
                  v-for="entry in filteredProjects"
                  :key="entry"
                  @click="selectProject(entry)"
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
                      {{ entry[key] }}</template
                    >

                    <template v-if="key === 'total_percentage'"> % </template>
                  </td>
                </tr>
              </tbody>

              <template v-if="loading_visible">
                <div class="css-549h">
                  <div class="lds-abf">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </template>
            </table>
          </div>
        </template>

        <template v-if="navTab === 'info'">
          <div class="css-637c c732">
            <p class="sb62">What is DYOR?</p>
            <p>
              Designed to give you the knowledge and resources to holistically
              assess a project. Useful for all investors who want to
              methodically research a project and share the results with others.
              $7.7 billion was stolen in crypto scams in 2021. Do Your Own
              Research so this doesn’t happen to you. Do your own research is a
              phrase that gets thrown around a lot in the crypto world. And
              while it’s a crucial step before making any investment or using
              any new product, it’s also confusing for a beginner as it is
              completely lacking in any specific details or instructions. Many
              people have been told DYOR but are likely unsure of what exactly
              doing your own research entails. Have you done sufficient research
              if you review the project website, read the whitepaper, or spent
              some time on their Telegram? The answer is extremely subjective
              and will vary from person to person. Wouldn’t it be nice if there
              was a resource that could guide someone through the research
              process from start to finish? Look no further.
            </p>
            <p class="sb62">What’s Our Solution?</p>
            <p>
              We have developed an online tool that walks you through 27
              different evaluation points and assists with the following: It
              provides an explanation of why each point matters so that you can
              understand what you are researching. It gives you clearly written
              steps to follow to perform the evaluation. It calculates a score
              based on the information you entered so that you have a
              standardized basis for comparison across different projects.
              Lastly, it generates a report that you can share on social media
              so that others can benefit from the research you have performed.
            </p>
            <p class="sb62">Who Can Use it?</p>

            <p>
              It is designed with the total beginner in mind to properly
              evaluate a project PRIOR to investing in or using it. So no prior
              experience or knowledge is required. And while it is designed for
              a total beginner to use, it is also a useful resource for crypto
              veterans as well. Even if they do not need to learn how or why to
              do to research, it provides a platform that assists with
              documentation and generates reports that will greatly benefit the
              community.
            </p>

            <p class="sb62">How to use?</p>

            <p>
              1. Select a project you want to research. / 2. Read each explanation
              to understand what you are assessing. / 3. Perform all steps. / 4.
              Generate a report and share the results with the crypto community.
            </p>
            <p class="sb62">About the ISPO - &#9889;</p>

            <p>
              The ADA raised through the ISPO will be used to provide liquidity
              to DEXs. The fees that are earned from providing liquidity will be
              used to fund AUDITS that are voted on by our token holders (see
              how it's funded section of whitepaper for more information). The
              target of 1.5 million was selected as we expect that to be a
              sufficient amount of liquidity for the foreseeable future (would
              put our token in the top 10 on Minswap in terms of liquidity which
              have seemed sufficient for other tokens listed there). The ADA
              that is raised in the ISPO will be in a wallet controlled by the
              Dev team. We are currently unable to have the funds automatically
              deposited into the multi-sig wallet. The funds will be transferred
              every epoch from the ISPO wallet to the multi-sig wallet
              controlled by the DAO.
            </p>
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
  },
  methods: {
    updateData() {
      this.$nextTick(() => {
        setTimeout(async () => {
          try {
            const response = await axios.get(
              `https://api.dyortool.io/1.1/report/search-all`
            );

            this.project_data = response.data.map((e) => {
              return {
                id: e.id,
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
    selectProject(e) {
      window.open(`https://audits.dyortool.io/report/${e.id}`, "_blank");
    },
  },
  computed: {
    filteredProjects() {
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

.c732 {
  padding: 2rem;
  padding-top: 0rem;
}

.css-843s.positive {
  color: #00f569;
}
.css-843s.neutral {
  color: var(--blue-a);
}
.css-843s.negative {
  color: var(--red);
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
  background: var(--blue-a);
}

.css-549h {
  display: flex;
  width: 100%;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  align-items: center;
  background: var(--blue);
  justify-content: center;
}

.lds-abf {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-abf div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 10px;
  border-radius: 8px;
  background: #fff;
  animation: lds-abf 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-abf div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-abf div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-abf div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-abf {
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

.css-312h {
  border: 1px solid #3d4144;
  border-radius: 8px;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  color: #ffffff;
  margin: 0.4rem 0.5rem;
  margin-left: auto;
}
.css-312h input {
  width: 100%;
  max-width: 300px;
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
  transition: var(--transition-a);
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
  min-height: 550px;
  max-height: 550px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: var(--background-d);
  align-items: center;
  border-bottom: 20px solid transparent;
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

@media (max-width: 600px) {
  .css-312h {
    margin: 0.5rem;
  }

  .css-546h {
    max-height: 600px;
    box-shadow: initial;
    border-bottom: 50px solid transparent;
  }
}
</style>