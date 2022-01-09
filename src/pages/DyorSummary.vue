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
                <div>Total Percentage</div>
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
                      stroke="#ffffff"
                      stroke-width=".001"
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
                      stroke="#0069f5"
                      stroke-width="0.3"
                    />
                  </svg>
                </div>
                <div class="css-work-finished-shai">Show Full Report</div>
              </div>
            </div>
          </div>
          <div class="css-work-finished-sts">
            <div class="css-work-finished-sti">
              Development Team
              <span>{{ evaluateCategory("Development Team") }}</span>
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
          <div
            class="css-work-finished-qai"
            @click="openDownCategory[0] = !openDownCategory[0]"
          >
            Development Team
            <button>
              <svg
                class="css-work-finished-arrow"
                :class="{ active: openDownCategory[0] === true }"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-365b8594=""
              >
                <path
                  fill="currentColor"
                  d="M104.704 338.752a64 64 0 0190.496 0l316.8 316.8 316.8-316.8a64 64 0 0190.496 90.496L557.248 791.296a64 64 0 01-90.496 0L104.704 429.248a64 64 0 010-90.496z"
                ></path>
              </svg>
            </button>
          </div>
          <template v-if="openDownCategory[0] === true">
            <div class="css-work-finished-qao">
              <div class="css-work-finished-qah">
                <div style="font-weight: bold">Total Score:</div>
                <div>
                  {{ evaluateCategory("Development Team") }} /
                  {{ KnowMaxCategory("Development Team") }}
                </div>
              </div>
              <div
                class="css-work-finished-qah"
                v-for="element in filterByCategory('Development Team')"
                :key="element"
              >
                {{ element.question }}

                <div>
                  {{ showAnswerData(element) }} / {{ knowMaxValue(element).toFixed(2) }}
                </div>
              </div>
            </div>
          </template>

          <div
            class="css-work-finished-qai"
            @click="openDownCategory[1] = !openDownCategory[1]"
          >
            Tokenomics
            <button>
              <svg
                class="css-work-finished-arrow"
                :class="{ active: openDownCategory[1] === true }"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-365b8594=""
              >
                <path
                  fill="currentColor"
                  d="M104.704 338.752a64 64 0 0190.496 0l316.8 316.8 316.8-316.8a64 64 0 0190.496 90.496L557.248 791.296a64 64 0 01-90.496 0L104.704 429.248a64 64 0 010-90.496z"
                ></path>
              </svg>
            </button>
          </div>
          <template v-if="openDownCategory[1] === true">
            <div class="css-work-finished-qao">
              <div class="css-work-finished-qah">
                <div style="font-weight: bold">Total Score:</div>
                <div>{{ evaluateCategory("Tokenomics") }} /  {{ KnowMaxCategory("Tokenomics") }}</div>
              </div>
              <div
                class="css-work-finished-qah"
                v-for="element in filterByCategory('Tokenomics')"
                :key="element"
              >
                {{ element.question }}

                <div>
                  {{ showAnswerData(element) }} / {{ knowMaxValue(element).toFixed(2) }}
                </div>
              </div>
            </div>
          </template>

          <div
            class="css-work-finished-qai"
            @click="openDownCategory[2] = !openDownCategory[2]"
          >
            Community
            <button>
              <svg
                class="css-work-finished-arrow"
                :class="{ active: openDownCategory[2] === true }"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-365b8594=""
              >
                <path
                  fill="currentColor"
                  d="M104.704 338.752a64 64 0 0190.496 0l316.8 316.8 316.8-316.8a64 64 0 0190.496 90.496L557.248 791.296a64 64 0 01-90.496 0L104.704 429.248a64 64 0 010-90.496z"
                ></path>
              </svg>
            </button>
          </div>
          <template v-if="openDownCategory[2] === true">
            <div class="css-work-finished-qao">
              <div class="css-work-finished-qah">
                <div style="font-weight: bold">Total Score:</div>
                <div>{{ evaluateCategory("Community") }} /  {{ KnowMaxCategory("Community") }}</div>
              </div>
              <div
                class="css-work-finished-qah"
                v-for="element in filterByCategory('Community')"
                :key="element"
              >
                {{ element.question }}

                <div>
                  {{ showAnswerData(element) }} / {{ knowMaxValue(element).toFixed(2) }}
                </div>
              </div>
            </div>
          </template>

          <div
            class="css-work-finished-qai"
            @click="openDownCategory[3] = !openDownCategory[3]"
          >
            Metrics
            <button>
              <svg
                class="css-work-finished-arrow"
                :class="{ active: openDownCategory[3] === true }"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-365b8594=""
              >
                <path
                  fill="currentColor"
                  d="M104.704 338.752a64 64 0 0190.496 0l316.8 316.8 316.8-316.8a64 64 0 0190.496 90.496L557.248 791.296a64 64 0 01-90.496 0L104.704 429.248a64 64 0 010-90.496z"
                ></path>
              </svg>
            </button>
          </div>
          <template v-if="openDownCategory[3] === true">
            <div class="css-work-finished-qao">
              <div class="css-work-finished-qah">
                <div style="font-weight: bold">Total Score:</div>
                <div>{{ evaluateCategory("Metrics") }} /  {{ KnowMaxCategory("Metrics") }}</div>
              </div>
              <div
                class="css-work-finished-qah"
                v-for="element in filterByCategory('Metrics')"
                :key="element"
              >
                {{ element.question }}

                <div>
                  {{ showAnswerData(element) }} / {{ knowMaxValue(element).toFixed(2) }}
                </div>
              </div>
            </div>
          </template>

          <div class="css-work-finished-qac"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Blackhole } from "blackhole-qr";

export default {
  props: {
    answeredQuestion: Object,
  },
  mounted() {
    this.createNewCanvas();
  },
  created() {
    this.evaluateQuestions();
    this.createBeforeProcess();
  },
  data() {
    return {
      totalScore: 0,
      beforeEncodeProcess: [],
      afterEncodeProcess: [],
      openDownCategory: [0, 0, 0, 0],
    };
  },
  methods: {
    evaluateQuestions() {
      let acc = 0;
      for (const answer of this.answeredQuestion) {
        for (const option of answer.options) {
          if (option.id === answer.answer) {
            acc += option.value;
          }
        }
      }
      this.totalScore = acc.toFixed(2);
    },
    evaluateCategory(e) {
      let acc = 0;
      for (const element of this.answeredQuestion) {
        if (element.category === e) {
          for (const option of element.options) {
            if (option.id === element.answer) {
              acc += option.value;
            }
          }
        }
      }
      return acc.toFixed(2);
    },
    showAnswerData(e) {
      for (let o of e.options) {
        if (o.id === e.answer) {
          return o.value.toFixed(2);
        }
        return (0.0).toFixed(2);
      }
    },
    knowMaxValue(e) {
      let acc = [];
      for (let o of e.options) {
        acc.push(o.value);
      }
      return Math.max(...acc);
    },
    KnowMaxCategory(e) {
      let acc = 0.0;
      for (const element of this.answeredQuestion) {
        if (element.category === e) {
          acc += this.knowMaxValue(element);
        }
      }
      return acc.toFixed(2);
    },
    filterByCategory(category) {
      let byCategory = [];
      for (let e of this.answeredQuestion) {
        if (e.category === category) {
          byCategory.push(e);
        }
      }
      return byCategory;
    },
    createBeforeProcess() {
      this.answeredQuestion.forEach((e) =>
        this.beforeEncodeProcess.push({
          id: e.id,
          an: e.answer,
          ta: e.textarea,
        })
      );
    },
    createNewCanvas() {
      const QR = new Blackhole();
      QR.newQr("qr", this.beforeEncodeProcess, 300);
    },
  },
};
</script>

<style escoped>
.css-work-finished-wrap {
  width: 100%;
  caret-color: transparent;
  display: flex;
  justify-content: center;
  background: var(--base-color-white-secondary);
  box-shadow: 1px 1px 20px var(--border-primary);
}

.css-work-finished {
  width: 100%;
  height: 100%;
  margin: 0 15%;
  z-index: 2;
}

.css-work-finished-qac {
  height: 300px;
}

.css-work-finished-tw {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-primary);
  border-top: none;
  background: var(--base-color-white-primary);
}

.css-work-finished-ttt {
  margin: 3rem;
  color: var(--text-color-primary);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
}

.css-work-finished-qai {
  margin-top: 1rem;
  font-weight: bold;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  cursor: pointer;
}

.css-work-finished-qah {
  height: 3rem;
  display: flex;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-primary);
  justify-content: space-between;
}

.css-work-finished-qai button {
  background: transparent;
  border: none;
}

.css-work-finished-stw {
  width: 100%;
  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.css-work-finished-stm {
  color: var(--text-color-secondary);
}

.css-work-finished-sts {
  flex-direction: column;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.css-work-finished-sha {
  color: var(--complementary-color-blue);
  display: flex;
  align-items: center;
}

.css-work-finished-shai {
  padding: 1rem;
  margin-right: 1rem;
  border: 1px solid var(--complementary-color-blue);
  border-radius: 4px;
  display: flex;
  cursor: pointer;
}

.css-work-finished-qao {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.css-work-finished-sti {
  margin: 0 2rem;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid var(--color-soft-blue);
  display: flex;
}

.css-work-finished-arrow.active {
  transform: rotate(180deg);
}

.css-work-finished-sti span {
  margin-left: auto;
  font-weight: bold;
}

.css-work-finished-stt {
  font-size: var(--text-size-title);
  text-transform: uppercase;
  font-weight: bold;
}

.css-work-finished-sfw {
  width: 100%;
  display: flex;
}

.css-work-finished-std {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  text-align: start;
}

.css-work-finished-stx {
  font-size: var(--text-size-fifth);
}

.css-work-finished-sta {
  height: 100px;
  width: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-image: url("https://uploads-ssl.webflow.com/60d83e3c6cf84748f7d0a62b/6117f689ce4c7529d5850b8a_sundae.png");
  background-size: contain;
  box-shadow: var(--shadow-blue);
  border: 1px solid var(--border-primary);
}

.css-work-finished-sr {
  width: 300px;
  max-width: 300px;
  height: 300px;
  max-height: 300px;
  font-size: var(--text-size-fifth);
  text-transform: uppercase;
  margin: 1rem 2rem;
  font-weight: bold;
  border: 1px solid var(--border-primary);
}
.custom-shape-divider-top-1640324069 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1640324069 svg {
  position: relative;
  display: block;
  width: calc(173% + 1.3px);
  height: 259px;
}

.custom-shape-divider-top-1640324069 .shape-fill {
  fill: rgba(255, 255, 255, 0.1);
}
</style>