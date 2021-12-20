<template>
  <div class="css-main-flex-wrap">
    <header class="css-header" :class="{ active: workspace }">
      <div class="css-left-panel-button">
        <button @click="workspace = !workspace">
          <svg
            class=".css-menu-svg-icon"
            focusable="false"
            width="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
      </div>
      <div class="css-header-logo">
        <img src="./logo.svg" alt="" />
      </div>
    </header>
    <div class="css-work-tool-wrap">
      <template v-if="workspace">
        <div class="css-work-project-wrapper">
          <div class="css-work-project-wrap" :class="{ active: workspace }">
            <div class="css-work-project-title" @click="workspace = !workspace">
              <b>Audit progress</b>
            </div>
            <div class="css-work-project-avatar-wrap">
              <div class="css-work-project-avatar-img"></div>
            </div>
            <div class="css-work-project-legend">
              <div class="css-work-project-name">
                <b>Name</b>
              </div>
              <div class="css-work-project-tag">
                <span>Category</span>
              </div>
              <div class="css-work-project-tag">
                <span>www.example.com</span>
              </div>
            </div>
            <div
              class="css-work-project-subtitle"
              @click="isRetrayed[0] = !isRetrayed[0]"
            >
              <svg
                class="css-work-project-dar"
                :class="{ active: !isRetrayed[0] }"
                isRetrayed
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-365b8594=""
              >
                <path
                  fill="currentColor"
                  d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
                ></path>
              </svg>

              <b>Development Team</b>
              <span
                >{{ knowWorkProgress("developmentTeam") }} /
                {{ workProgramCategory["developmentTeam"].length }}
              </span>
            </div>
            <ul class="css-work-project-ul" :class="{ active: isRetrayed[0] }">
              <li
                v-for="category in workProgramCategory['developmentTeam']"
                :key="category"
                class="css-work-project-uli"
                :class="{
                  active: progressWorkData.includes(category.id),
                }"
                @click="clickCurrentQuestion(category.id)"
              >
                {{ category.name }}
              </li>
            </ul>
            <div
              class="css-work-project-subtitle"
              @click="isRetrayed[1] = !isRetrayed[1]"
            >
              <svg
                class="css-work-project-dar"
                :class="{ active: !isRetrayed[1] }"
                isRetrayed
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-365b8594=""
              >
                <path
                  fill="currentColor"
                  d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
                ></path>
              </svg>
              <b>Tokenomics</b>
              <span
                >{{ knowWorkProgress("tokenomics") }} /
                {{ workProgramCategory["tokenomics"].length }}</span
              >
            </div>
            <ul class="css-work-project-ul" :class="{ active: isRetrayed[1] }">
              <li
                v-for="category in workProgramCategory['tokenomics']"
                :key="category"
                class="css-work-project-uli"
                :class="{
                  active: progressWorkData.includes(category.id),
                }"
                @click="clickCurrentQuestion(category.id)"
              >
                {{ category.name }}
              </li>
            </ul>
            <div
              class="css-work-project-subtitle"
              @click="isRetrayed[2] = !isRetrayed[2]"
            >
              <svg
                class="css-work-project-dar"
                :class="{ active: !isRetrayed[2] }"
                isRetrayed
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-365b8594=""
              >
                <path
                  fill="currentColor"
                  d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
                ></path>
              </svg>
              <b>Community</b>
              <span
                >{{ knowWorkProgress("community") }} /
                {{ workProgramCategory["community"].length }}</span
              >
            </div>
            <ul class="css-work-project-ul" :class="{ active: isRetrayed[2] }">
              <li
                v-for="category in workProgramCategory['community']"
                :key="category"
                class="css-work-project-uli"
                :class="{
                  active: progressWorkData.includes(category.id),
                }"
                @click="clickCurrentQuestion(category.id)"
              >
                {{ category.name }}
              </li>
            </ul>
            <div
              class="css-work-project-subtitle"
              @click="isRetrayed[3] = !isRetrayed[3]"
            >
              <svg
                class="css-work-project-dar"
                :class="{ active: !isRetrayed[3] }"
                isRetrayed
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-365b8594=""
              >
                <path
                  fill="currentColor"
                  d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
                ></path>
              </svg>
              <b>ICO Trading Metrics</b>
              <span
                >{{ knowWorkProgress("metrics") }} /
                {{ workProgramCategory["metrics"].length }}</span
              >
            </div>
            <ul class="css-work-project-ul" :class="{ active: isRetrayed[3] }">
              <li
                v-for="category in workProgramCategory['metrics']"
                :key="category"
                class="css-work-project-uli"
                :class="{
                  active: progressWorkData.includes(category.id),
                }"
                @click="clickCurrentQuestion(category.id)"
              >
                {{ category.name }}
              </li>
            </ul>
          </div>
        </div>
      </template>

      <div class="css-work-quest-wrap">
        <template v-if="isFinished">
          <div class="css-work-quest-top">
            <div
              class="css-work-quest-back"
              v-for="item in currentQuestion"
              :key="item"
              :class="{ active: item.answer != null }"
              @click="backToWorksteps()"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  data-v-066465b6=""
                  width="24"
                  style="transform: rotate(180deg)"
                >
                  <path
                    fill="var(--complementary-color-blue)"
                    d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                  ></path>
                </svg>
              </div>
              <span>Back to Worksteps</span>
            </div>
            <div
              class="css-work-quest-id"
              v-for="item in currentQuestion"
              :key="item"
            >
              #{{ item.tag }}
            </div>
          </div>

          <div class="css-work-quest-page">
            <div>
              <span
                class="css-work-quest-pag"
                v-for="item in currentQuestion"
                :key="item"
                >{{ item.id }}</span
              ><span class="css-work-quest-div">/</span>{{ numberQuestion[1] }}
            </div>
          </div>

          <div
            class="css-work-quest-legend"
            v-for="item in currentQuestion"
            :key="item"
          >
            {{ item.question }}
          </div>
          <div
            class="css-work-quest-answer"
            v-for="item in currentQuestion"
            :key="item"
          >
            <template v-if="item.answer != null">
              <div class="css-work-quest-suggest">Select an option</div>
            </template>
            <template v-if="item.answer === null">
              <div class="css-work-quest-note">
                <b>Worksteps:</b>
                <div v-for="step in item.worksteps" :key="step">
                  {{ step }}
                </div>
              </div>
            </template>
            <template v-if="item.answer != null">
              <div class="css-work-quest-note">
                <b>Last step:</b>
                <div>
                  Select an option according to the information collected
                </div>
              </div>
            </template>
            <template v-if="item.answer === null">
              <div class="css-work-quest-panel">
                <div>
                  <button
                    class="css-work-quest-panel-b"
                    style="cursor: not-allowed"
                  >
                    <img src="./file.svg" alt="" />
                  </button>
                  <button class="css-work-quest-panel-b">
                    <img src="./image.svg" alt="" />
                  </button>
                  <button
                    class="css-work-quest-panel-b"
                    style="cursor: not-allowed"
                  >
                    <img src="./video.svg" alt="" />
                  </button>
                </div>
                <button
                  class="css-work-quest-panel-b"
                  id="css-work-quest-panel-bl"
                  @click="item.answer = 0"
                >
                  <img src="./dart.svg" alt="" />
                  <span class="dot"></span>
                </button>
              </div>
            </template>
            <template v-if="item.answer === null">
              <div class="css-work-quest-panel-ta">
                <textarea
                  id="story"
                  name="story"
                  v-model="item.textarea"
                  rows="5"
                  cols="33"
                  placeholder="Write here"
                ></textarea>
                <div>
                  <span
                    class="css-length-counter"
                    :class="{ active: knowTextareaLength() }"
                  >
                    {{ currentQuestion[0].textarea.length }}
                  </span>
                  <span>/</span>

                  <span>100</span>
                </div>
              </div>
            </template>

            <template v-for="option in item.options" :key="option">
              <div
                class="css-work-quest-answer-item"
                :class="{ active: item.answer === option.id }"
                v-if="item.answer != null"
              >
                <label
                  class="control control--checkbox"
                  @click="changeAnswerQuestion(option.id)"
                >
                  <div class="css-work-quest-item-label">{{ option.name }}</div>
                </label>
              </div>
            </template>
          </div>

          <div class="css-work-quest-bpf">
            <div class="css-work-quest-nav">
              <div
                class="css-work-quest-arrow"
                id="left-arrow"
                @click="numberQuestion[0] > 0 ? backAnswerQuestion() : false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  data-v-066465b6=""
                  width="24"
                  style="transform: rotate(180deg)"
                >
                  <path
                    fill="var(--base-color-black-primary)"
                    d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                  ></path>
                </svg>
                <span>Back</span>
              </div>
              <template v-if="currentQuestion[0].id < questionList.length">
                <div
                  class="css-work-quest-arrow"
                  id="right-arrow"
                  @click="
                    numberQuestion[0] < numberQuestion[1] - 1
                      ? nextAnswerQuestion()
                      : false
                  "
                >
                  <span>Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    data-v-066465b6=""
                    width="24"
                  >
                    <path
                      fill="#fff"
                      d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                    ></path>
                  </svg>
                </div>
              </template>
              <template v-if="currentQuestion[0].id === questionList.length">
                <div
                  class="css-work-quest-arrow"
                  id="right-arrow"
                  @click="createNewReport()"
                >
                  <span>Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    data-v-066465b6=""
                    width="24"
                  >
                    <path
                      fill="#fff"
                      d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                    ></path>
                  </svg>
                </div>
              </template>
            </div>
          </div>
        </template>
        <template v-if="!isFinished">
          <div class="css-work-finished-wrap">
            <div class="css-work-finished">
              <div class="css-work-finished-tw">
                <div class="css-work-finished-ttw">
                  <div class="css-work-finished-stw">
                    <div class="css-work-finished-stt" @click="generateNewQr()">
                      SUNDAESWAP - DYOR REPORT
                    </div>
                    <div class="css-work-finished-sfw">
                      <div class="css-work-finished-sta"></div>
                      <div class="css-work-finished-std">
                        <div>Total Score</div>
                        <div class="css-work-finished-stx">50.00</div>
                        <div class="css-work-finished-stm">Made by Holder3289</div>
                      </div>
                    </div>
                    <div class="css-work-finished-sfw">
                      <div class="css-work-finished-sha">
                        <div class="css-work-finished-shai">x</div>
                        <div class="css-work-finished-shai">
                          Generate full report
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="css-work-finished-sts">
                    <div class="css-work-finished-sti">
                      Development Team <span>10.0</span>
                    </div>
                    <div class="css-work-finished-sti">
                      Tokenomics<span>20.0</span>
                    </div>
                    <div class="css-work-finished-sti">
                      Community<span>40.0</span>
                    </div>
                    <div class="css-work-finished-sti">
                      Trading Metrics<span>50.0</span>
                    </div>
                  </div>
                  <div class="css-work-finished-sr">
                    <canvas id="qr" style="image-rendering: pixelated"></canvas>
                  </div>
                </div>
                <div class="css-work-finished-ttt"></div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./WorkQuestScript.js"></script>

<style  src="./WorkQuestStyle.css"></style>