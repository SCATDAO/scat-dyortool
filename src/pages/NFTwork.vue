<template>
  <div
    class="css-mf-wrap"
    :class="{ active: summary_visible || helpers.purpose }"
  >
    <header class="css-w-p-her">
      <router-link to="/" style="display: flex; align-items: baseline">
        <img src="../assets/logo-white.png" alt="" />
      </router-link>

      <div class="css-work-tool-haw">
        <div class="css-8801">
          {{ selected }}
          <label
            for="filex"
            class="css-8802"
            style="
              background: transparent;
              border: 1px solid #0069f5;
              color: #0069f5;
            "
          >
            Load Draft
          </label>
          <input
            style="display: none"
            type="file"
            id="filex"
            @change="handleFileUpload($event)"
            accept=".json"
          />
          <label class="css-8802" @click="saveDraftReport()"> Save </label>
        </div>
        <div class="css-identicon-wrp">
          <div class="css-identicon" id="identicon">
            <img :src="avatar_seed" alt="" />
          </div>
        </div>
        <span class="css-identicon-wrx">{{ audit_info.nickname }}</span>
      </div>
    </header>
    <div class="css-wt-wrap">
      <div class="css-w-p-wpr">
        <div class="css-w-p-wrap">
          <div class="css-w-p-title">
            <b>Audit progress</b>
          </div>
          <div class="css-w-p-arw">
            <div class="css-w-p-ari">
              <div class="css-w-p-awp">
                <img :src="audit_info.project_logo" alt="" />
              </div>
            </div>
          </div>
          <div class="css-w-p-legend">
            <div class="css-w-p-name">
              <b>{{ audit_info.project_name }}</b>
            </div>
            <div class="css-w-p-tag">
              <span>NFT</span>
            </div>
            <div class="css-w-p-tag" style="text-transform: lowercase">
              <span>{{ audit_info.website }}</span>
            </div>
          </div>
          <div
            class="css-w-p-sbe"
            @click="category_visible[0] = !category_visible[0]"
          >
            <svg
              class="css-w-p-dar"
              :class="{ active: !category_visible[0] }"
              viewBox="0 0 1024 1024"
              data-v-365b8594=""
            >
              <path
                fill="currentColor"
                d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
              ></path>
            </svg>

            <b>Development Team</b>
            <span
              >{{ knowWorkProgress("development_team") }} /
              {{ scheme_category["development_team"].length }}
            </span>
          </div>
          <ul class="css-w-p-ul" :class="{ active: category_visible[0] }">
            <li
              v-for="category in scheme_category['development_team']"
              :key="category"
              class="css-w-p-uli"
              :class="{
                active: scheme_progress.includes(category.id),
              }"
              @click="
                clickCurrentQuestion(category.id) & (summary_visible = false)
              "
            >
              {{ category.name }}
            </li>
          </ul>
          <div
            class="css-w-p-sbe"
            @click="category_visible[1] = !category_visible[1]"
          >
            <svg
              class="css-w-p-dar"
              :class="{ active: !category_visible[1] }"
              viewBox="0 0 1024 1024"
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
              {{ scheme_category["community"].length }}</span
            >
          </div>
          <ul class="css-w-p-ul" :class="{ active: category_visible[1] }">
            <li
              v-for="category in scheme_category['community']"
              :key="category"
              class="css-w-p-uli"
              :class="{
                active: scheme_progress.includes(category.id),
              }"
              @click="
                clickCurrentQuestion(category.id) & (summary_visible = false)
              "
            >
              {{ category.name }}
            </li>
          </ul>
          <div
            class="css-w-p-sbe"
            @click="category_visible[2] = !category_visible[2]"
          >
            <svg
              class="css-w-p-dar"
              :class="{ active: !category_visible[2] }"
              viewBox="0 0 1024 1024"
              data-v-365b8594=""
            >
              <path
                fill="currentColor"
                d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
              ></path>
            </svg>
            <b>Mint Metrics</b>
            <span
              >{{ knowWorkProgress("mint_metrics") }} /
              {{ scheme_category["mint_metrics"].length }}</span
            >
          </div>
          <ul class="css-w-p-ul" :class="{ active: category_visible[2] }">
            <li
              v-for="category in scheme_category['mint_metrics']"
              :key="category"
              class="css-w-p-uli"
              :class="{
                active: scheme_progress.includes(category.id),
              }"
              @click="
                clickCurrentQuestion(category.id) & (summary_visible = false)
              "
            >
              {{ category.name }}
            </li>
          </ul>
          <div
            class="css-w-p-sbe"
            @click="category_visible[3] = !category_visible[3]"
          >
            <svg
              class="css-w-p-dar"
              :class="{ active: !category_visible[3] }"
              viewBox="0 0 1024 1024"
              data-v-365b8594=""
            >
              <path
                fill="currentColor"
                d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
              ></path>
            </svg>
            <b>Secondary Market</b>
            <span
              >{{ knowWorkProgress("secondary_market") }} /
              {{ scheme_category["secondary_market"].length }}</span
            >
          </div>
          <ul class="css-w-p-ul" :class="{ active: category_visible[3] }">
            <li
              v-for="category in scheme_category['secondary_market']"
              :key="category"
              class="css-w-p-uli"
              :class="{
                active: scheme_progress.includes(category.id),
              }"
              @click="
                clickCurrentQuestion(category.id) & (summary_visible = false)
              "
            >
              {{ category.name }}
            </li>
          </ul>

          <div class="css-w-p-scc"></div>
        </div>
      </div>
      <div
        class="css-wq-wrap"
        :class="{ active: summary_visible || helpers.purpose }"
      >
        <template v-if="helpers.purpose">
          <div class="css-wq-fpl" @click="helpers.purpose = !helpers.purpose">
            <div class="css-wq-fps">
              <div class="css-wq-fph">
                <div>
                  <span> Why This Matters?</span>
                  <svg
                    id="SVGRoot"
                    width="16px"
                    height="16px"
                    version="1.1"
                    viewBox="0 0 16 16"
                  >
                    <g
                      id="Stockholm-icons-/-General-/-Shield-protected"
                      transform="matrix(.65766 0 0 .65766 .082673 .13227)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <rect id="bound" width="24" height="24" />
                      <path
                        d="m3.4259 2.7346 8.3765-1.5706c0.26738-0.050133 0.54175-0.050133 0.80912 0l8.3765 1.5706v10.189c0 3.2209-1.6592 6.2145-4.3905 7.9216l-3.8088 2.3805c-0.35593 0.22246-0.80756 0.22246-1.1635 0l-3.8088-2.3805c-2.7313-1.7071-4.3905-4.7007-4.3905-7.9216z"
                        fill="#0069f5"
                        opacity=".3"
                        stroke-width="1.0976"
                      />
                      <path
                        id="Combined-Shape"
                        d="m14.951 10.418c0.6062 0 1.0976 0.49143 1.0976 1.0976v3.2929c0 0.6062-0.49143 1.0976-1.0976 1.0976h-5.4882c-0.6062 0-1.0976-0.49143-1.0976-1.0976v-3.2929c0-0.60621 0.49143-1.0976 1.0976-1.0976v-0.54882c0-1.5155 1.2286-2.7441 2.7441-2.7441 1.5155 0 2.7441 1.2286 2.7441 2.7441zm-2.7441-2.1953c-0.90931 0-1.6464 0.73714-1.6464 1.6464v0.54882h3.2929v-0.54882c0-0.90931-0.73714-1.6464-1.6464-1.6464z"
                        fill="#0069f5"
                        stroke-width="1.0976"
                      />
                    </g>
                  </svg>
                </div>
                <button>
                  <svg
                    id="SVGRoot"
                    width="16px"
                    height="16px"
                    version="1.1"
                    viewBox="0 0 16 16"
                  >
                    <g
                      id="Stockholm-icons-/-Navigation-/-Close"
                      transform="translate(-4.016 -3.7816)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Group"
                        transform="rotate(-45 14.828 5.1716)"
                        fill="#727384"
                      >
                        <rect y="7" width="16" height="2" rx="1" />
                        <rect
                          id="Rectangle-185-Copy"
                          transform="rotate(90,8,8)"
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="css-wq-fpx">
                <span
                  class="css-wq-fpz"
                  v-for="item in splitPurpose()"
                  :key="item"
                >
                  {{ item }}
                </span>
                <div class="css-wq-fxp">
                  <div>SCATDAO</div>
                  <span>www.scatdao.com</span>
                </div>
                <div class="css-wq-cso"></div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="summary_visible">
          <div class="css-wq-fpl">
            <div class="css-wq-fyy">
              <div class="css-wq-fph">
                <div>
                  <span>Summary</span>
                  <svg
                    id="SVGRoot"
                    width="16px"
                    height="16px"
                    version="1.1"
                    viewBox="0 0 16 16"
                  >
                    <g
                      id="Stockholm-icons-/-General-/-Shield-protected"
                      transform="matrix(.65766 0 0 .65766 .082673 .13227)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <rect id="bound" width="24" height="24" />
                      <g
                        id="Stockholm-icons-/-General-/-Shield-check"
                        transform="matrix(1.1027 0 0 1.1027 -.96743 -1.7585)"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect width="24" height="24" />
                        <path
                          d="m4 4 7.6314-1.4309c0.2436-0.045674 0.49356-0.045674 0.73715 0l7.6314 1.4309v9.283c0 2.9344-1.5117 5.6618-4 7.217l-3.47 2.1688c-0.32427 0.20267-0.73573 0.20267-1.06 0l-3.47-2.1688c-2.4883-1.5552-4-4.2826-4-7.217z"
                          fill="#0069f5"
                          opacity=".3"
                        />
                        <path
                          id="check-path"
                          d="m11.175 14.75c-0.23958 0-0.47917-0.09583-0.67083-0.2875l-1.9167-1.9167c-0.38333-0.38333-0.38333-0.95833 0-1.3417 0.38333-0.38333 1.0062-0.38333 1.3417 0l1.2458 1.2458 3.1625-3.1625c0.38333-0.38333 0.95833-0.38333 1.3417 0s0.38333 0.95833 0 1.3417l-3.8333 3.8333c-0.19167 0.19167-0.43125 0.2875-0.67083 0.2875z"
                          fill="#0069f5"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <button @click="summary_visible = !summary_visible">
                  <svg
                    id="SVGRoot"
                    width="16px"
                    height="16px"
                    version="1.1"
                    viewBox="0 0 16 16"
                  >
                    <g
                      id="Stockholm-icons-/-Navigation-/-Close"
                      transform="translate(-4.016 -3.7816)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Group"
                        transform="rotate(-45 14.828 5.1716)"
                        fill="#727384"
                      >
                        <rect y="7" width="16" height="2" rx="1" />
                        <rect
                          id="Rectangle-185-Copy"
                          transform="rotate(90,8,8)"
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>

              <div class="css-wq-fpx">
                <div class="css-wq-fyx">
                  <span class="css-wq-fzz">List of remaining questions</span>
                  <span>{{ remainingQuestion().length }}</span>
                </div>
                <div
                  class="css-wq-fpb"
                  v-for="element in remainingQuestion()"
                  :key="element"
                  @click="
                    clickCurrentQuestion(element.id) &
                      (summary_visible = !summary_visible)
                  "
                >
                  <span> {{ element.a }} </span> <span> {{ element.b }} </span>
                  <span> {{ element.c }} </span>
                  <span
                    ><svg
                      id="SVGRoot"
                      width="16px"
                      height="16px"
                      version="1.1"
                      viewBox="0 0 16 16"
                    >
                      <g
                        id="Stockholm-icons-/-Communication-/-Reply-all"
                        transform="matrix(.65974 0 0 .65974 .18642 .10193)"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect width="24" height="24" />
                        <path
                          id="Shape"
                          d="m21.022 18.094c0-0.82031 0.17578-4.0576-2.3779-6.626-1.7188-1.7285-4.291-2.0283-7.3672-2.165v-4.3069c0-0.41421-0.33579-0.75-0.75-0.75-0.18631 0-0.36595 0.069345-0.50394 0.19453l-7.1401 6.4777c-0.30678 0.27832-0.32985 0.75263-0.051533 1.0594 0.014608 0.0161 0.029909 0.03156 0.045861 0.04633l7.1401 6.6125c0.30391 0.28145 0.77843 0.26324 1.0599-0.04066 0.1284-0.13864 0.19973-0.32064 0.19973-0.50961v-4.2832c1.9531 0.05371 3.3444 0.17795 4.6084 0.58008 1.82 0.57902 3.2266 2.2218 4.2196 4.9283l-1.6e-5 6e-6c0.10836 0.29534 0.38952 0.49166 0.70412 0.49166h0.21786c0-0.49316-0.0049-1.2744-0.0049-1.709z"
                          fill="#86898d"
                          fill-rule="nonzero"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <template v-if="remainingQuestion().length === 0">
                  <div class="css-wq-fcc">
                    <div class="css-wq-fsc">
                      <svg
                        class="css-w-p-dar"
                        viewBox="0 0 1024 1024"
                        data-v-365b8594=""
                        data-v-51f114e2=""
                      >
                        <path
                          fill="currentColor"
                          d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
                          data-v-51f114e2=""
                        ></path>
                      </svg>
                      <span class="css-wq-koc">
                        What was your overall impression of the project?
                      </span>
                    </div>
                    <div class="css-wq-fko">
                      <button
                        @click="modifyPersonal('Positive')"
                        class="positiveb"
                        :class="{ active: audit_opinion.answer === 'Positive' }"
                      >
                        Positive
                      </button>
                      <button
                        @click="modifyPersonal('Negative')"
                        class="negativeb"
                        :class="{ active: audit_opinion.answer === 'Negative' }"
                      >
                        Negative
                      </button>
                      <button
                        @click="modifyPersonal('Neutral')"
                        class="neutralb"
                        :class="{ active: audit_opinion.answer === 'Neutral' }"
                      >
                        Neutral
                      </button>
                    </div>
                  </div>
                  <div class="css-wq-fcc" style="margin-top: 1rem">
                    After researching all of these different areas, you will
                    usually have a strong feeling or impression of a project
                    that will influence your decision to invest in it or use it.
                    We wanted to leave a space where you can share that with
                    others. There are no points assigned, you do not have to
                    write anything. Literally anything goes here.
                  </div>

                  <div class="css-wq-cko">
                    <textarea
                      v-model="audit_opinion.textarea"
                      placeholder="Final Thoughts..."
                    ></textarea>
                  </div>
                </template>
              </div>

              <div class="css-wq-xsc">
                <template v-if="remainingQuestion().length !== 0">
                  <div class="css-wq-xcq">
                    <span>Please complete the remaining questions.</span>
                  </div>
                </template>

                <template v-if="remainingQuestion().length === 0">
                  <div class="css-wq-bfw">
                    <template v-if="error_to_send">
                      <div class="css-wq-xcq">
                        <span
                          >There was a problem with the request, please try
                          again</span
                        >
                      </div>
                    </template>
                    <template v-if="!report_created">
                      <button
                        class="css-wq-xkx"
                        id="create-report"
                        @click="createNewReport()"
                      >
                        {{ send_msg }}
                      </button></template
                    >
                    <template v-if="report_created">
                      <button class="css-wq-xkx" id="css-blue-button">
                        <a
                          :href="report_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          >Go to Report</a
                        >
                      </button>
                    </template>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>
        <div class="css-wq-top">
          <div
            class="css-wq-back"
            v-for="item in current_"
            :key="item"
            :class="{ active: item.answer != null }"
            @click="backToWorksteps()"
          >
            <div>
              <svg
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
          <div class="css-wq-id" v-for="item in current_" :key="item">
            #{{ item.tag }}
          </div>
        </div>

        <div class="css-wq-page">
          <div>
            <span class="css-wq-pag" v-for="item in current_" :key="item">{{
              item.id
            }}</span
            ><span class="css-wq-div">/</span>{{ scheme_counter[1] }}
          </div>
        </div>

        <div class="css-wq-legend" v-for="item in current_" :key="item">
          {{ item.question }}
        </div>
        <div class="css-wq-answer" v-for="item in current_" :key="item">
          <template v-if="item.answer != null">
            <div class="css-wq-suggest">Select an option</div>
          </template>
          <template v-if="item.answer === null">
            <div class="css-wq-note">
              <b>Worksteps:</b>
              <div v-for="step in item.worksteps" :key="step">
                {{ step }}
              </div>
            </div>
          </template>

          <template v-if="item.answer != null">
            <div class="css-wq-note">
              <b>Last step:</b>
              <div>Select an option according to the information collected</div>
            </div>
          </template>
          <template v-if="item.answer === null">
            <div class="css-wq-panel">
              <button
                class="css-wq-panel-b"
                @click="helpers.purpose = !helpers.purpose"
              >
                <svg
                  id="SVGRoot"
                  width="16px"
                  height="16px"
                  version="1.1"
                  viewBox="0 0 16 16"
                >
                  <g
                    id="Stockholm-icons-/-General-/-Clipboard"
                    transform="matrix(.66381 0 0 .66381 -.021402 .031252)"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <rect width="24" height="24" />
                    <g fill="#0069f5">
                      <path
                        d="m8 3v0.5c0 0.82843 0.67157 1.5 1.5 1.5h5c0.82843 0 1.5-0.67157 1.5-1.5v-0.5h2c1.1046 0 2 0.89543 2 2v16c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2v-16c0-1.1046 0.89543-2 2-2z"
                        opacity=".3"
                      />
                      <path
                        d="m11 2c0-0.55228 0.44772-1 1-1s1 0.44772 1 1h1.5c0.27614 0 0.5 0.22386 0.5 0.5v1c0 0.27614-0.22386 0.5-0.5 0.5h-5c-0.27614 0-0.5-0.22386-0.5-0.5v-1c0-0.27614 0.22386-0.5 0.5-0.5z"
                      />
                      <rect
                        x="7"
                        y="10"
                        width="5"
                        height="2"
                        rx="1"
                        opacity=".3"
                      />
                      <rect
                        id="Rectangle-152-Copy"
                        x="7"
                        y="14"
                        width="9"
                        height="2"
                        rx="1"
                        opacity=".3"
                      />
                    </g>
                  </g>
                </svg>
              </button>

              <button
                class="css-wq-panel-b"
                id="css-wq-panel-bl"
                @click="nextGlassButton()"
              >
                <svg
                  id="SVGRoot"
                  width="20px"
                  height="20px"
                  version="1.1"
                  viewBox="0 0 16 16"
                >
                  <g transform="matrix(.033329 0 0 .033329 -.67907 -.47141)">
                    <path
                      d="m193.69 281.29v0.61225c-3.9514 3.6214-6.4904 8.9988-9.3937 13.469-6.3349 9.7518-12.571 19.569-18.802 29.388-19.461 30.667-38.761 61.51-58.745 91.837-7.8557 11.922-15.456 24.044-23.068 36.123-3.0857 4.8961-8.4123 10.646-9.1837 16.531-1.6396 12.496 17.411 23.13 27.356 26.058 3.9318 1.1578 9.2768 1.7002 12.833-0.77387 3.908-2.7196 6.3735-8.4624 8.8555-12.427 5.512-8.8041 11.077-17.589 16.695-26.327 21.696-33.747 43.188-67.645 64.505-101.63 6.5498-10.443 13.303-20.762 19.821-31.225 3.1764-5.1 7.4076-10.302 9.5363-15.918 35.249 13.671 73.6 16.071 109.59 3.2498 74.411-26.507 116.95-110.12 93.27-185.7-5.8751-18.756-14.964-36.071-27.27-51.429-13.476-16.819-30.906-30.149-50.082-39.879-56.39-28.612-130.64-16.379-174.43 29.48-46.21 48.392-56.042 122.3-22.88 180.6 7.8172 13.744 18.33 28.763 31.397 37.959m88.163-221.45c11.736-1.6723 25.305-0.21992 36.735 2.5869 24.813 6.0932 46.799 20.059 62.156 40.699 29.667 39.871 28.22 100.72-5.7771 137.76-7.7988 8.4949-16.675 16.599-26.991 21.992-12.171 6.3612-24.798 11.596-38.571 13.408-23.125 3.0428-47.991-0.41022-68.571-11.713-55.751-30.618-73.431-104.46-38.368-157.16 7.5826-11.396 17.79-21.884 29.184-29.541 15.14-10.175 32.297-15.478 50.204-18.03m9.8774 39.632c-4.6653 2.6155-0.26082 9.2535 4.1137 6.6974 4.2649-2.4918 0.17875-9.1041-4.1137-6.6974m-33.143 3.6576c-3.6772 0.0539-3.5162 5.5206 0 5.7845 3.8137 0.28592 3.6845-5.8378 0-5.7845m69.814-0.0545c-3.8761 0.34959-3.1629 6.281 0.57674 5.888 3.7678-0.39613 3.3031-6.2388-0.57674-5.888m-61.24 13.937c-5.9407 1.0555-4.7652 10.421 1.2214 9.5247 6.1402-0.91899 4.7638-10.588-1.2214-9.5247m52.041 0.0251c-6.4218 0.68265-5.1049 10.536 1.219 9.502 5.8365-0.95327 4.6775-10.129-1.219-9.502m-25.716 3.6337c-7.4547 0.41571-6.9025 11.883 0.61163 11.363 7.2031-0.49898 6.5412-11.761-0.61163-11.363m-56.873 10.638c-4.4082 2.4178-0.90859 9.259 3.54 7.1063 4.7768-2.3112 1.1988-9.7059-3.54-7.1063m110.23 0c-4.2882 2.4692-0.23019 9.6882 4.1045 6.7929 4.0941-2.7355 0.21857-9.2829-4.1045-6.7929m-66.213 5.1894c-13.139 1.9286-9.4592 21.379 3.6735 19.143 11.719-1.9947 8.1135-20.873-3.6735-19.143m23.878 0c-13.135 1.8435-10.18 21.234 3.0612 19.15 11.794-1.8557 8.5665-20.782-3.0612-19.15m-46.528 4.3586c-7.2172 1.1755-5.4912 12.31 1.8337 11.106 7.29-1.1982 5.3688-12.28-1.8337-11.106m69.794 0c-7.3794 1.1559-5.67 12.362 1.8336 11.106 7.1064-1.1896 5.1429-12.199-1.8336-11.106m-60.612 16.544c-11.772 3.5676-6.2915 21.88 5.5096 18.617 12.487-3.4518 6.8455-22.362-5.5096-18.617m47.142-0.0557c-11.959 3.1414-6.3802 22.133 5.5102 18.673 12.313-3.5829 6.8596-21.923-5.5102-18.673m-74.658 5.1863c-5.1019 2.7643-1.088 11.118 4.2226 8.4349 5.8231-2.9412 1.3806-11.472-4.2226-8.4349m103.47-4.6e-4c-5.1036 2.7833-1.0182 11.064 4.2226 8.4355 5.8158-2.9174 1.4517-11.531-4.2226-8.4355m-120 1.1896c-3.5553 0.79469-2.3467 6.2467 1.1584 5.7839 3.7427-0.49347 2.4398-6.5884-1.1584-5.7839m139.62-0.0735c-3.6765 1.1388-1.9157 6.8449 1.7082 5.7778 3.6766-1.0824 1.977-6.919-1.7082-5.7778m-83.33 13.887c-12.326 2.9761-7.208 21.862 4.898 18.939 12.32-2.9749 7.3672-21.901-4.898-18.939m23.265 0.071c-11.916 3.5951-6.5835 22.339 5.5102 18.705 12.16-3.6539 6.5865-22.355-5.5102-18.705m-45.909 3.731c-6.9196 2.6914-2.6669 13.439 4.2649 10.723 6.7837-2.6578 2.6479-13.411-4.2649-10.723m69.796 2e-3c-6.9166 2.6308-2.6939 13.502 4.2502 10.558 6.6257-2.8096 2.4018-13.088-4.2502-10.558m-89.928 13.645c-4.3029 2.4122-1.0059 9.3368 3.5253 7.1082 4.7584-2.34 1.1792-9.7457-3.5253-7.1082m110.21 0c-4.3041 2.4784-0.20999 9.5608 4.1045 6.7776 4.1437-2.6737 0.20387-9.2584-4.1045-6.7776m-55.184 6.5578c-6.8994 2.6835-2.6915 13.503 4.2502 10.559 6.671-2.8292 2.5365-13.199-4.2502-10.559m-25.697 5.512c-5.7336 2.2512-2.1594 11.151 3.6196 8.8824 5.7337-2.2512 2.1594-11.151-3.6196-8.8824m51.437 0.17326c-5.3455 2.8757-1.1608 11.268 4.2166 8.4416 5.583-2.9345 1.26-11.388-4.2166-8.4416m-59.39 17.107c-3.5553 0.7947-2.3467 6.2468 1.1584 5.7839 3.7427-0.49408 2.4398-6.5884-1.1584-5.7839m69.827-0.0735c-3.6686 1.1363-1.939 6.8222 1.7082 5.6927 3.6686-1.1363 1.939-6.8223-1.7082-5.6927m-36.105 2.5598c-4.2318 2.381-0.92449 9.2155 3.5553 7.1064 4.8392-2.2782 1.1204-9.7378-3.5553-7.1064z"
                      fill="#3063ef"
                    />
                    <g fill="#3063ee">
                      <path
                        d="m291.73 226.82c-4.2318 2.381-0.92449 9.2155 3.5553 7.1064 4.8392-2.2782 1.1204-9.7378-3.5553-7.1064z"
                      />
                      <path
                        d="m327.84 224.26c-3.6686 1.1363-1.939 6.8222 1.7082 5.6927 3.6686-1.1363 1.939-6.8223-1.7082-5.6927"
                      />
                      <path
                        d="m258.01 224.33c-3.5553 0.7947-2.3467 6.2468 1.1584 5.7839 3.7427-0.49408 2.4398-6.5884-1.1584-5.7839"
                      />
                      <path
                        d="m317.4 207.22c-5.3455 2.8757-1.1608 11.268 4.2166 8.4416 5.583-2.9345 1.26-11.388-4.2166-8.4416"
                      />
                      <path
                        d="m265.97 207.05c-5.7336 2.2512-2.1594 11.151 3.6196 8.8824 5.7337-2.2512 2.1594-11.151-3.6196-8.8824"
                      />
                      <path
                        d="m291.66 201.54c-6.8994 2.6835-2.6915 13.503 4.2502 10.559 6.671-2.8292 2.5365-13.199-4.2502-10.559"
                      />
                      <path
                        d="m346.85 194.98c-4.3041 2.4784-0.20999 9.5608 4.1045 6.7776 4.1437-2.6737 0.20387-9.2584-4.1045-6.7776"
                      />
                      <path
                        d="m236.63 194.98c-4.3029 2.4122-1.0059 9.3368 3.5253 7.1082 4.7584-2.34 1.1792-9.7457-3.5253-7.1082"
                      />
                      <path
                        d="m326.56 181.34c-6.9166 2.6308-2.6939 13.502 4.2502 10.558 6.6257-2.8096 2.4018-13.088-4.2502-10.558"
                      />
                      <path
                        d="m256.76 181.33c-6.9196 2.6914-2.6669 13.439 4.2649 10.723 6.7837-2.6578 2.6479-13.411-4.2649-10.723"
                      />
                      <path
                        d="m302.67 177.6c-11.916 3.5951-6.5835 22.339 5.5102 18.705 12.16-3.6539 6.5865-22.355-5.5102-18.705"
                      />
                      <path
                        d="m279.41 177.53c-12.326 2.9761-7.208 21.862 4.898 18.939 12.32-2.9749 7.3672-21.901-4.898-18.939"
                      />
                      <path
                        d="m362.74 163.65c-3.6765 1.1388-1.9157 6.8449 1.7082 5.7778 3.6766-1.0824 1.977-6.919-1.7082-5.7778"
                      />
                      <path
                        d="m223.11 163.72c-3.5553 0.79469-2.3467 6.2467 1.1584 5.7839 3.7427-0.49347 2.4398-6.5884-1.1584-5.7839"
                      />
                      <path
                        d="m343.12 162.53c-5.1036 2.7833-1.0182 11.064 4.2226 8.4355 5.8158-2.9174 1.4517-11.531-4.2226-8.4355"
                      />
                      <path
                        d="m239.65 162.53c-5.1019 2.7643-1.088 11.118 4.2226 8.4349 5.8231-2.9412 1.3806-11.472-4.2226-8.4349"
                      />
                      <path
                        d="m314.31 157.34c-11.959 3.1414-6.3802 22.133 5.5102 18.673 12.313-3.5829 6.8596-21.923-5.5102-18.673"
                      />
                      <path
                        d="m267.16 157.4c-11.772 3.5676-6.2915 21.88 5.5096 18.617 12.487-3.4518 6.8455-22.362-5.5096-18.617"
                      />
                      <path
                        d="m327.78 140.86c-7.3794 1.1559-5.67 12.362 1.8336 11.106 7.1064-1.1896 5.1429-12.199-1.8336-11.106"
                      />
                      <path
                        d="m257.98 140.86c-7.2172 1.1755-5.4912 12.31 1.8337 11.106 7.29-1.1982 5.3688-12.28-1.8337-11.106"
                      />
                      <path
                        d="m304.51 136.5c-13.135 1.8435-10.18 21.234 3.0612 19.15 11.794-1.8557 8.5665-20.782-3.0612-19.15"
                      />
                      <path
                        d="m280.63 136.5c-13.139 1.9286-9.4592 21.379 3.6735 19.143 11.719-1.9947 8.1135-20.873-3.6735-19.143"
                      />
                      <path
                        d="m346.85 131.31c-4.2882 2.4692-0.23019 9.6882 4.1045 6.7929 4.0941-2.7355 0.21857-9.2829-4.1045-6.7929"
                      />
                      <path
                        d="m236.62 131.31c-4.4082 2.4178-0.90859 9.259 3.54 7.1063 4.7768-2.3112 1.1988-9.7059-3.54-7.1063"
                      />
                      <path
                        d="m293.49 120.67c-7.4547 0.41571-6.9025 11.883 0.61163 11.363 7.2031-0.49898 6.5412-11.761-0.61163-11.363"
                      />
                      <path
                        d="m319.21 117.04c-6.4218 0.68265-5.1049 10.536 1.219 9.502 5.8365-0.95327 4.6775-10.129-1.219-9.502"
                      />
                      <path
                        d="m267.17 117.01c-5.9407 1.0555-4.7652 10.421 1.2214 9.5247 6.1402-0.91899 4.7638-10.588-1.2214-9.5247"
                      />
                      <path
                        d="m328.41 103.07c-3.8761 0.34959-3.1629 6.281 0.57674 5.888 3.7678-0.39613 3.3031-6.2388-0.57674-5.888"
                      />
                      <path
                        d="m258.59 103.13c-3.6772 0.0539-3.5162 5.5206 0 5.7845 3.8137 0.28592 3.6845-5.8378 0-5.7845"
                      />
                      <path
                        d="m291.73 99.47c-4.6653 2.6155-0.26082 9.2535 4.1137 6.6974 4.2649-2.4918 0.17875-9.1041-4.1137-6.6974"
                      />
                    </g>
                  </g>
                </svg>

                <span class="dot"></span>
              </button>
              <template v-if="!helpers.evaluate">
                <div
                  class="css-wq-got"
                  @click="helpers.evaluate = !helpers.evaluate"
                >
                  <div class="box box--left"></div>
                  <div class="css-wq-gtt">
                    <svg
                      class="icon"
                      width="16"
                      height="16"
                      viewBox="0 0 1024 1024"
                      data-v-042ca774=""
                    >
                      <path
                        fill="currentColor"
                        d="M512 64a448 448 0 110 896.064A448 448 0 01512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 01-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 017.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
                      ></path>
                    </svg>
                    <span>Click here to evaluate the question.</span>
                  </div>
                </div>
              </template>
            </div>
          </template>
          <template v-if="item.answer === null">
            <div class="css-wq-pta">
              <textarea
                class="css-wq-tex"
                v-model="current_[0].textarea"
              ></textarea>
              <template v-if="item.id === 10">
                <div class="css-wq-thl">
                  <div
                    class="css-wq-ths"
                    v-for="element in item.input"
                    :key="element"
                    :class="{
                      active: knowInputDelete(element.id),
                    }"
                  >
                    <input
                      v-model="current_[0].input[element.id].name"
                      class="css-wq-tss"
                      type="text"
                      placeholder="E.g. Development team"
                    />
                    <input
                      v-model="current_[0].input[element.id].per"
                      class="css-wq-tss"
                      style="width: 50%"
                      type="text"
                      placeholder="%"
                    />

                    <template v-if="!token_phases[element.id]">
                      <button
                        class="css-wq-bta"
                        @click="createNewInput(element.id)"
                      >
                        <svg
                          id="SVGRoot"
                          width="8px"
                          height="8px"
                          version="1.1"
                          viewBox="0 0 8 8"
                        >
                          <g
                            id="Stockholm-icons-/-Navigation-/-Plus"
                            transform="matrix(.49767 0 0 .49767 -1.9907 -1.9639)"
                            fill="#727384"
                            fill-rule="evenodd"
                          >
                            <rect x="4" y="11" width="16" height="2" rx="1" />
                            <rect
                              id="Rectangle-185-Copy"
                              transform="rotate(90,12,12)"
                              x="4"
                              y="11"
                              width="16"
                              height="2"
                              rx="1"
                            />
                          </g>
                        </svg>
                      </button>
                    </template>

                    <template v-if="token_phases[element.id]">
                      <button
                        class="css-wq-bta"
                        @click="removeAddedInput(element.id)"
                      >
                        <svg
                          id="SVGRoot"
                          width="8px"
                          height="8px"
                          version="1.1"
                          viewBox="0 0 8 8"
                        >
                          <g
                            id="Stockholm-icons-/-Navigation-/-Plus"
                            transform="matrix(.49767 0 0 .49767 -1.9907 -1.9639)"
                            fill="#727384"
                            fill-rule="evenodd"
                          >
                            <rect x="4" y="11" width="16" height="2" rx="1" />
                          </g>
                        </svg>
                      </button>
                    </template>
                  </div>
                </div>
              </template>

              <template v-if="item.id === 17">
                <div class="css-wq-thl">
                  <div class="css-wq-txs">
                    <input
                      v-model="current_[0].input"
                      class="css-wq-tss"
                      type="text"
                      placeholder="Nº Followers"
                    />
                  </div>
                </div>
              </template>

              <template v-if="item.id === 19">
                <div class="css-wq-thl">
                  <div class="css-wq-txs">
                    <input
                      v-model="current_[0].input"
                      class="css-wq-tss"
                      type="text"
                      placeholder="Nº Followers"
                    />
                  </div>
                </div>
              </template>

              <template v-if="item.id === 21">
                <div class="css-wq-thl">
                  <div class="css-wq-txs">
                    <input
                      v-model="current_[0].input"
                      class="css-wq-tss"
                      type="text"
                      placeholder="Nº Members"
                    />
                  </div>
                </div>
              </template>

              <template v-if="item.id === 23">
                <div class="css-wq-thl">
                  <div class="css-wq-txs">
                    <input
                      v-model="current_[0].input"
                      class="css-wq-tss"
                      type="text"
                      placeholder="Nº Members"
                    />
                  </div>
                </div>
              </template>
            </div>
          </template>

          <template v-for="option in item.options" :key="option">
            <div
              class="css-wq-answer-item"
              :class="{ active: item.answer === option.id }"
              v-if="item.answer != null"
            >
              <label
                class="control control--checkbox"
                @click="changeAnswerQuestion(option.id)"
              >
                <div class="css-wq-item-label">{{ option.name }}</div>
              </label>
            </div>
          </template>
        </div>

        <div class="css-wq-bpf">
          <div class="css-wq-nav">
            <div
              class="css-wq-arrow"
              id="left-arrow"
              @click="scheme_counter[0] > 0 ? backAnswerQuestion() : false"
            >
              <svg
                id="SVGRoot"
                width="24px"
                height="24px"
                data-v-51f114e2=""
                version="1.1"
                style="transform: rotate(180deg)"
                viewBox="0 0 24 24"
              >
                <g
                  transform="translate(-5.7242 -.032203)"
                  fill="#727384"
                  stroke-width="1.0666"
                  data-v-51f114e2=""
                >
                  <path
                    d="m11.967 17.73c-0.41656 0.41656-0.41656 1.092 0 1.5085 0.41656 0.41656 1.092 0.41656 1.5085 0l6.4-6.4c0.40382-0.40382 0.41795-1.0541 0.03206-1.475l-5.8667-6.4c-0.39808-0.43426-1.0729-0.4636-1.5071-0.065525-0.43426 0.39807-0.4636 1.0728-0.06552 1.5071l5.1766 5.6472z"
                    fill="#727384"
                    fill-opacity=".0"
                    data-v-51f114e2=""
                  />
                </g>
                <g fill="#727384" stroke-width="1.0666" data-v-51f114e2="">
                  <path
                    d="m11.967 17.73c-0.41656 0.41656-0.41656 1.092 0 1.5085 0.41656 0.41656 1.092 0.41656 1.5085 0l6.4-6.4c0.40382-0.40382 0.41795-1.0541 0.03206-1.475l-5.8667-6.4c-0.39808-0.43426-1.0729-0.4636-1.5071-0.065525-0.43426 0.39807-0.4636 1.0728-0.06552 1.5071l5.1766 5.6472z"
                    fill="#727384"
                    data-v-51f114e2=""
                  />
                </g>
              </svg>
              <span>Back</span>
            </div>
            <template v-if="current_[0].id < question_list.length">
              <div
                class="css-wq-arrow"
                id="right-arrow"
                @click="
                  scheme_counter[0] < scheme_counter[1] - 1
                    ? nextAnswerQuestion()
                    : false
                "
              >
                <span>Next</span>
                <svg
                  id="SVGRoot"
                  width="24px"
                  height="24px"
                  data-v-51f114e2=""
                  version="1.1"
                  viewBox="0 0 24 24"
                >
                  <g
                    transform="translate(-5.7242 -.032203)"
                    fill="#fff"
                    stroke-width="1.0666"
                    data-v-51f114e2=""
                  >
                    <path
                      d="m11.967 17.73c-0.41656 0.41656-0.41656 1.092 0 1.5085 0.41656 0.41656 1.092 0.41656 1.5085 0l6.4-6.4c0.40382-0.40382 0.41795-1.0541 0.03206-1.475l-5.8667-6.4c-0.39808-0.43426-1.0729-0.4636-1.5071-0.065525-0.43426 0.39807-0.4636 1.0728-0.06552 1.5071l5.1766 5.6472z"
                      fill="#fff"
                      fill-opacity=".0"
                      data-v-51f114e2=""
                    />
                  </g>
                  <g fill="#fff" stroke-width="1.0666" data-v-51f114e2="">
                    <path
                      d="m11.967 17.73c-0.41656 0.41656-0.41656 1.092 0 1.5085 0.41656 0.41656 1.092 0.41656 1.5085 0l6.4-6.4c0.40382-0.40382 0.41795-1.0541 0.03206-1.475l-5.8667-6.4c-0.39808-0.43426-1.0729-0.4636-1.5071-0.065525-0.43426 0.39807-0.4636 1.0728-0.06552 1.5071l5.1766 5.6472z"
                      fill="#fff"
                      data-v-51f114e2=""
                    />
                  </g>
                </svg>
              </div>
            </template>
            <template v-if="current_[0].id === question_list.length">
              <div
                class="css-wq-arrow"
                id="right-arrow"
                @click="summaryLayout()"
              >
                <span>Next</span>
                <svg
                  id="SVGRoot"
                  width="24px"
                  height="24px"
                  data-v-51f114e2=""
                  version="1.1"
                  viewBox="0 0 24 24"
                >
                  <g
                    transform="translate(-5.7242 -.032203)"
                    fill="#fff"
                    stroke-width="1.0666"
                    data-v-51f114e2=""
                  >
                    <path
                      d="m11.967 17.73c-0.41656 0.41656-0.41656 1.092 0 1.5085 0.41656 0.41656 1.092 0.41656 1.5085 0l6.4-6.4c0.40382-0.40382 0.41795-1.0541 0.03206-1.475l-5.8667-6.4c-0.39808-0.43426-1.0729-0.4636-1.5071-0.065525-0.43426 0.39807-0.4636 1.0728-0.06552 1.5071l5.1766 5.6472z"
                      fill="#fff"
                      fill-opacity=".0"
                      data-v-51f114e2=""
                    />
                  </g>
                  <g fill="#fff" stroke-width="1.0666" data-v-51f114e2="">
                    <path
                      d="m11.967 17.73c-0.41656 0.41656-0.41656 1.092 0 1.5085 0.41656 0.41656 1.092 0.41656 1.5085 0l6.4-6.4c0.40382-0.40382 0.41795-1.0541 0.03206-1.475l-5.8667-6.4c-0.39808-0.43426-1.0729-0.4636-1.5071-0.065525-0.43426 0.39807-0.4636 1.0728-0.06552 1.5071l5.1766 5.6472z"
                      fill="#fff"
                      data-v-51f114e2=""
                    />
                  </g>
                </svg>
              </div>
            </template>
          </div>
        </div>
        <div class="css-wq-nac" :class="{ active: helpers.purpose }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { saveAs } from "file-saver";
import { nft_scheme } from "./nft-scheme";
import { BestialEncoder } from "bestial-encoder";

const bestialEncoder = new BestialEncoder();

export default {
  data() {
    return {
      audit_info: null,
      audit_opinion: {
        answer: "",
        textarea: "",
      },
      selected: "",
      send_msg: "Create Report",
      error_to_send: false,
      avatar_seed: "",
      scheme_counter: [0, 0],
      question_list: nft_scheme,
      token_phases: [0],
      inputDelete: [],
      scheme_category: {
        developmentTeam: [],
        community: [],
        tokenomics: [],
        metrics: [],
        development_team: [],
        mint_metrics: [],
        secondary_market: [],
      },
      scheme_progress: [],
      category_visible: [0, 1, 1, 1],
      current_: [],
      answered: [],
      helpers: {
        purpose: false,
        evaluate: false,
        example: false,
      },
      report_created: false,
      report_link: "",
      before_encode: [],
      queryInput: [],
      summary_visible: false,
    };
  },
  created() {
    this.configureCounter();
    this.chargeEmptyAnswered();
    this.changeCurrentQuestion();
    this.chargeListQuestion();
    this.getAuditInfo();
    this.createNewIdenticon();
  },
  watch: {
    summary_visible() {
      this.report_created = false;
    },
  },
  methods: {
    configureCounter() {
      this.scheme_counter[1] = this.question_list.length;
    },
    chargeEmptyAnswered() {
      this.answered = this.question_list;
    },
    saveDraftReport() {
      const drafts = [this.answered, this.audit_info, this.scheme_progress];

      const today = new Date();
      const date =
        today.getFullYear() +
        "." +
        (today.getMonth() + 1) +
        "." +
        today.getDate();
      const time = today.getHours() + "h-" + today.getMinutes() + "m-";

      const fileName = `${this.audit_info.project_name.toUpperCase()} - ${
        date + "--" + time
      }.json`;

      const fileToSave = new Blob([JSON.stringify(drafts, null, 4)], {
        type: "application/json",
      });

      saveAs(fileToSave, fileName);
    },
    handleFileUpload(event) {
      const reader = new FileReader();
      reader.readAsText(event.target.files[0]);
      reader.onload = (e) => {
        const [questions, general, progress] = JSON.parse(e.target.result);

        this.question_list = questions;
        this.answered = questions;
        this.audit_info = general;
        this.scheme_progress = progress;
        this.$store.commit("modifyAuditData", general);
        this.clickCurrentQuestion(1);
      };
    },
    modifyPersonal(element) {
      this.audit_opinion.answer = element;
    },
    summaryLayout() {
      this.summary_visible = !this.summary_visible;
    },
    remainingQuestion() {
      let remaining = [];
      for (const element of this.answered) {
        if (element.answer === 405) {
          this.answered[element.id - 1].answer = null;
        }
        if (element.answer === null) {
          remaining.push({
            id: element.id,
            a: element.tag,
            b: element.name,
            c: element.category,
          });
        }
      }
      if (remaining.length === 0) {
        return [];
      } else {
        return remaining;
      }
    },
    splitPurpose() {
      return this.current_[0].purpose.split(/\r?\n/);
    },
    async nextGlassButton() {
      this.current_[0].answer = 405;
    },
    createNewIdenticon() {
      const hashCode = function (s) {
        return s.split("").reduce(function (a, b) {
          a = (a << 5) - a + b.charCodeAt(0);
          return a & a;
        }, 0);
      };
      const base = this.audit_info.nickname + this.audit_info.nickname.length;

      this.avatar_seed = `https://avatars.dicebear.com/api/identicon/${hashCode(
        base
      )}.svg`;
    },
    getAuditInfo() {
      this.audit_info = this.$store.getters.getAuditInfo;
    },
    changeCurrentQuestion() {
      this.current_.push(this.question_list[this.scheme_counter[0]]);
    },
    changeAnswerQuestion(answer) {
      this.current_[0].answer = answer;
    },
    cleanCurrentQuestion() {
      this.current_ = [];
    },
    setCustomQuestion() {
      if (this.answered[23].answer === 404) {
        this.answered[23].answer = 404;
        this.answered[24].answer = 404;
        this.answered[25].answer = 404;
        this.answered[26].answer = 404;
        this.answered[27].answer = 404;
      }
    },
    nextAnswerQuestion() {
      this.setCustomQuestion();
      this.updateProgress();
      this.answered[this.scheme_counter[0]] = this.current_.pop();
      this.scheme_counter[0] += 1;
      this.changeCurrentQuestion();
    },
    backAnswerQuestion() {
      this.cleanCurrentQuestion();
      this.scheme_counter[0] -= 1;
      this.current_.push(this.answered[this.scheme_counter[0]]);
    },
    clickCurrentQuestion(num) {
      let number = num - 1;
      for (const n in this.answered) {
        if (n.id === number) {
          this.cleanCurrentQuestion();
          this.current_.push(this.answered[number]);
          this.scheme_counter[0] = this.current_[0].id - 1;
        }
        if (n.id != number) {
          this.cleanCurrentQuestion();
          this.current_.push(this.question_list[number]);
          this.scheme_counter[0] = this.current_[0].id - 1;
        }
      }
    },
    addAnswered() {
      this.answered[this.scheme_counter[0]] = this.current_[0];
    },
    createNewReport() {
      this.setCustomQuestion();
      this.updateProgress();
      this.addAnswered();
      this.pushNewReport();
    },
    updateProgress() {
      return this.current_[0].answer
        ? this.scheme_progress.push(this.current_[0].id)
        : false;
    },
    createNewInput(element) {
      this.token_phases[element] = !this.token_phases[element];
      this.token_phases.push(0);
      this.current_[0].input.push({
        id: element + 1,
        name: "",
        per: "",
      });
    },
    knowInputDelete(element) {
      return this.inputDelete.includes(element);
    },
    removeAddedInput(element) {
      this.inputDelete.push(element);
      this.current_[0].input[element] = {
        id: element,
        name: "",
        per: "",
      };
    },
    async pushNewReport() {
      this.before_encode = [];
      this.error_to_send = false;
      this.report_link = "";

      this.audit_info["audit_opinion"] = this.audit_opinion;

      this.audit_info["nid"] = Math.floor(Math.random() * 10000);

      this.before_encode.push(this.audit_info);

      this.answered.forEach((e) => {
        this.before_encode.push({
          id: e.id,
          an: e.answer,
          ta: e.textarea,
          ed: e.input,
        });
      });

      const resultEncoder = bestialEncoder.encodeByValue(
        JSON.stringify(this.before_encode)
      );

      console.log(this.before_encode);

      try {
        const params = {
          hex: `${resultEncoder}`,
        };

        this.send_msg = "Uploading";
        document.getElementById("create-report").disabled = true;
        await axios({
          method: "post",
          url: "http://localhost:8000/v1/report/send",
          data: params,
          headers: { "content-type": "application/json" },
        })
          .then((response) => {
            this.report_created = !this.report_created;
            this.report_link = `https://audits.dyortool.io/report/${response.data.report_id}`;
            this.send_msg = "Create Report";
          })
          .catch((error) => {
            this.error_to_send = !this.error_to_send;
            console.log(error.response);
            this.send_msg = "Create Report";
          });
      } catch (error) {
        console.log(error);
      }
    },

    knowCompleteness() {
      let isComplete = false;
      let checkAnswers = [];
      this.answered.forEach((e) => checkAnswers.push(e.answer));
      if (checkAnswers.includes(null)) {
        isComplete = false;
      }
      if (!checkAnswers.includes(null)) {
        isComplete = true;
      }
      return isComplete;
    },

    removeItemFromArr(array, item) {
      let e = array.indexOf(item);

      if (e !== -1) {
        array.splice(e, 1);
      }
    },
    backToWorksteps() {
      this.current_[0].answer = null;
      this.removeItemFromArr(this.scheme_progress, this.current_[0].id);
    },
    knowWorkProgress(step) {
      let acc = 0;
      this.scheme_category[step].forEach((s) => {
        this.scheme_progress.includes(s.id) ? (acc += 1) : false;
      });
      return acc;
    },
    chargeListQuestion() {
      for (const element of this.question_list) {
        switch (element.category) {
          case "Development Team":
            this.scheme_category["development_team"].push({
              id: element.id,
              name: element.name,
            });
            break;
          case "Community":
            this.scheme_category["community"].push({
              id: element.id,
              name: element.name,
            });
            break;
          case "Mint Metrics":
            this.scheme_category["mint_metrics"].push({
              id: element.id,
              name: element.name,
            });
            break;
          case "Secondary Market":
            this.scheme_category["secondary_market"].push({
              id: element.id,
              name: element.name,
            });
            break;

          default:
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
#css-wq-panel-bl {
  display: flex;
  align-items: flex-start;
  background: initial;
}

#css-wq-panel-bl:hover {
  background: initial;
}

#right-arrow {
  background: linear-gradient(
    22.58deg,
    rgba(0, 80, 220, 1) 0%,
    rgba(0, 105, 245, 1) 100%
  );
}
#right-arrow:hover {
  transition: ease-in 0.1s;
  opacity: 0.9;
}

#right-arrow span {
  color: #ffffff;
  font-weight: bold;
  margin-right: 50px;
}

#left-arrow span {
  color: var(--text-color-primary);
  font-weight: bold;
  margin-left: 50px;
}

.negativeb {
  border: 1px solid rgba(248, 73, 96, 0.3);
  color: rgba(248, 73, 96, 1);
}

.positiveb {
  border: 1px solid rgba(0, 211, 149, 0.3);
  color: rgba(0, 211, 149, 1);
}

.neutralb {
  color: var(--complementary-color-blue);
  border: 1px solid var(--color-soft-blue);
}

.css-8801 {
  display: flex;
  align-items: center;
  margin-right: 3rem;
}

.css-8801 label {
  padding: 0.4rem 1rem;
  margin-right: 1rem;
}

.css-8802 {
  border-radius: 8px;
  cursor: pointer;
  padding: 0.75rem;
  background: #23272a;
  color: #ffffff;
  border: none;
}

.negativeb:hover {
  background: rgba(248, 73, 96, 1);
  color: #fff;
}

.positiveb:hover {
  color: #fff;
  background: rgba(0, 211, 149, 1);
}

.neutralb:hover {
  color: #fff;
  background: var(--complementary-color-blue);
}

.negativeb.active {
  background: rgba(248, 73, 96, 1);
  color: #fff;
}

.positiveb.active {
  color: #fff;
  background: rgba(0, 211, 149, 1);
}

.neutralb.active {
  color: #fff;
  background: var(--complementary-color-blue);
}

.dot {
  background: var(--complementary-color-blue);
  height: 6px;
  width: 6px;
  margin-left: 5px;
  border-radius: 50%;
  display: inline-block;
  animation-name: pulse;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  transition: ease 0.3s;
}

#logo-blue {
  fill: var(--complementary-color-blue);
  margin-bottom: 5px;
}

@keyframes pulse {
  0% {
    box-shadow: 0px 0px 1px 0px var(--color-soft-blue);
  }
  100% {
    box-shadow: 0px 0px 1px 5px var(--color-soft-blue);
  }
}

.css-identicon-wrp {
  border: 1px solid var(--border-primary);
  padding: 10px;
  border-radius: 50%;
  background: var(--base-color-white-primary);
}

.css-wq-koc {
  display: flex;
}

.css-wq-koc svg {
  margin-left: 0.25rem;
}

.css-identicon {
  width: 20px;
  height: 20px;
}

.css-wq-tex {
  width: 100%;
  border: none;
  height: 300px;
  font-size: var(--text-size-primary);
  overflow: auto;
  scroll-behavior: smooth;
  outline: none;
  white-space: pre-line;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  caret-color: var(--text-color-primary);
  color: var(--text-color-primary);
  resize: none;
  font-weight: lighter;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid transparent;
}

.css-wq-xcq {
  background: var(--base-color-white-secondary);
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--complementary-color-blue);
}
.css-w-p-awp {
  display: flex;
  justify-content: center;
}

.css-wq-bfw {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
}
.css-w-p-awp img {
  width: 80px;
  height: 80px;
}
.css-wq-fcc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-primary);
}
.css-wq-fko button {
  padding: 10px 14px;
  border-radius: 8px;
  margin-left: 1rem;
  cursor: pointer;
  background: transparent;
  transition: 0.3s ease-out;
}
.css-wq-fsc {
  color: var(--text-color-primary);
  font-weight: 600;
  display: flex;
  align-items: center;
}

.css-wq-pta {
  border: 1px solid var(--border-primary);
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding: 10px 1rem;
  border-top: none;
  height: 300px;
  min-height: 300px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background: var(--base-color-white-primary);
  display: flex;
  flex-direction: column;
}

.css-wq-txs {
  display: flex;
  padding: 0 1rem;
  margin: 1rem 20%;
  align-items: center;
  border-radius: 5px;
}
.css-wq-thl {
  width: 100%;
  height: 100%;
  background: var(--base-color-white-primary);
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  padding: 1 2rem;
  box-sizing: border-box;
}

.css-wq-xsc {
  width: 100%;
  display: flex;
  align-items: center;
  bottom: 200px;
  background: var(--base-color-white-primary);
  padding: 1rem 2rem;
  box-sizing: border-box;
  margin-top: auto;
  border-top: 1px solid var(--border-primary);
}

.css-wq-xkx {
  background: var(--color-soft-blue);
  border: none;
  cursor: pointer;
  letter-spacing: 0.3px;
  outline: none;
  margin-left: 1rem;
  font-weight: 700;
  white-space: nowrap;
  border-radius: 8px;
  color: var(--complementary-color-blue);
}

#create-report {
  padding: 10px 14px;
}

#css-blue-button {
  background: var(--complementary-color-blue);
}

.css-wq-xkx a {
  text-decoration: none;
  color: #fff;
  padding: 10px 14px;
  display: flex;
}

.css-wq-fpb {
  border: 1px solid var(--border-primary);
  color: var(--text-color-primary);
  padding: 1rem;
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  display: flex;
  font-size: var(--text-size-secondary);
  margin-top: 1rem;
}

.css-wq-fpb span {
  width: 200px;
  text-align: center;
}

.css-wq-bta {
  padding: 0 1rem;
  background: transparent;
  border: 1px solid var(--border-primary);
  border-radius: 5px;
  height: 40px;
  cursor: pointer;
  opacity: 0.9;
  margin: 0 0.25rem;
}

.css-wq-ths.active {
  display: none;
}

.css-wq-tss {
  border: 1px solid var(--border-primary);
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 5px;
  padding: 0 1rem;
  margin: 0 1rem;
  color: var(--text-color-secondary);
}

.css-wq-tss::placeholder {
  color: var(--text-color-secondary);
  letter-spacing: 0.2px;
  opacity: 0.5;
}

.css-wq-fyx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  color: var(--complementary-color-blue);
  border: 1px solid var(--border-primary);
}

.css-wq-fxx {
  color: var(--text-color-primary);
  font-size: var(--text-size-third);
  font-weight: 600;
}

.css-wq-fzz {
}

.css-wq-ths {
  display: flex;
  padding: 0 1rem;
  margin: 1rem 20%;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
}

.css-wq-wrap {
  width: 100%;
  height: 100vh;
  caret-color: transparent;
  padding-bottom: 10%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  box-sizing: border-box;
  position: relative;
}

.css-wq-wrap.active {
  overflow: unset;
}

.css-wq-fpl {
  width: 100%;
  height: 100%;
  background: rgba(114, 115, 132, 0.2);
  z-index: 11;
  display: flex;
  position: absolute;
  justify-content: center;
  animation-name: faded;
  animation-duration: 1s;
  transition: ease 0.3s;
  box-sizing: border-box;
}

.css-wq-fph {
  height: 4rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  color: var(--text-color-primary);
  font-weight: bold;
  justify-content: space-between;
}

.css-wq-fph button {
  cursor: pointer;
}

.css-wq-fph div {
  display: flex;
  align-items: center;
}

.css-wq-fph svg {
  margin-left: 5px;
}

.css-wq-fph button {
  background: transparent;
  border: none;
}

.css-wq-fpx {
  border-top: 1px solid var(--border-primary);
  padding: 0 2rem;
  padding-bottom: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  word-break: break-word;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
}

.css-wq-fpz {
  margin-top: 1rem;
}

.css-wq-fxp {
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
}

.css-wq-fxp span {
  font-size: var(--text-size-secondary);
}

.css-wq-cko {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin-top: 2rem;
}

.css-wq-cko textarea {
  width: 100%;
  border: none;
  height: 300px;
  font-size: var(--text-size-primary);
  overflow: auto;
  scroll-behavior: smooth;
  outline: none;
  white-space: pre-line;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  caret-color: var(--text-color-primary);
  color: var(--text-color-secondary);
  resize: none;
  font-family: "Nunito", sans-serif;
  font-weight: lighter;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--border-primary);
}

.css-wq-fps,
.css-wq-fyy {
  width: 70%;
  position: absolute;
  z-index: 1;
  margin-top: 3rem;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background: var(--base-color-white-primary);
}

.css-wq-fyy {
  height: 70%;
}

@keyframes faded {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.css-wq-nac {
  height: 100px;
}

.css-wq-top {
  padding: 0 13%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.css-wq-back {
  display: flex;
  width: 200px;
  align-items: center;
  opacity: 0;
  caret-color: none;
  border: none;
  color: transparent;
  cursor: default;
}

.css-wq-gtt {
  color: var(--complementary-color-blue);
  display: flex;
  align-items: center;
  font-size: var(--text-size-secondary);
}

.css-wq-gtt svg {
  min-width: 16px;
  max-width: 16px;
}

.css-wq-gtt span {
  margin-left: 0.5rem;
}

.css-work-tool-haw {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 2px 14px;
}

.css-work-tool-haw span {
  margin-left: 10px;

  text-transform: lowercase;
  color: var(--text-color-primary);
}

.css-wq-got {
  padding: 0.5rem;
  box-sizing: border-box;
  z-index: 10;
  right: 0;
  margin-right: 1rem;
  position: absolute;
  background: #deecfd;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px var(--border-primary);
}
.css-w-p-wrap {
  width: 320px;
  max-width: 320px;
  min-width: 320px;
  caret-color: transparent;
  color: #ffffff;
  line-height: 1.9;
  height: 100vh;
  background: linear-gradient(
    22.58deg,
    rgba(0, 80, 220, 1) 0%,
    rgba(0, 105, 245, 1) 100%
  );
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: auto;
}

.css-wq-got::before {
  content: "";
  position: absolute;
  transition: all 0s ease-in;
}

.css-wq-panel {
  background: var(--base-color-white-primary);
  height: 3rem;
  padding: 0 1rem;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-top: 1rem;
  display: flex;
  border: 1px solid var(--border-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.css-wq-panel-b {
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background: var(--color-soft-blue);
}

.css-wq-back.active {
  opacity: 1;
  cursor: pointer;
  color: var(--complementary-color-blue);
}

.css-wq-back div {
  width: 40px;
  height: 40px;
  background: var(--color-soft-blue);
  border-radius: 5px;
  display: flex;
  justify-content: center;
}

.css-wq-back span {
  margin-left: 1rem;
}

.css-wq-header {
  width: auto;
  height: 50vh;
}

.css-wq-page {
  justify-content: center;
  display: flex;
  margin-top: 1rem;
  font-weight: bold;
}

.css-wq-evaluate {
  background: var(--complementary-color-blue) !important;
  border: none;
  border-radius: 5px;
  padding: 10px 14px;
  height: 40px;
  color: white;
  cursor: pointer;
  margin-left: auto !important;
  margin-right: 1rem !important;
}

.css-w-p-her {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  border: 1px solid var(--border-primary);
}

.css-wq-legend {
  font-weight: 500;
  padding: 0 20%;
  line-height: 2rem;
  text-align: center;
  color: var(--text-color-primary);
  font-size: var(--text-size-title);
  margin-top: 2rem;
}

.css-wq-pag {
  color: var(--complementary-color-blue);
}

.css-wq-div {
  margin: 0 0.5rem;
}

.css-wq-answer {
  padding: 0 13%;
}

.css-wq-answer-item {
  background: #ffffff;
  height: 72px;
  min-height: 72px;
  max-height: 72px;
  border-radius: 5px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 1px 1px 20px var(--border-primary);
  border: 1px solid transparent;
}

.css-wq-answer-item.active {
  background: var(--color-soft-blue);
  border: 1px solid rgba(48, 99, 238, 0.5);
}

.css-wq-item-label {
  color: var(--text-color-primary);
  font-weight: bold;
}

.control {
  position: relative;
  display: block;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.control--checkbox:after {
  top: 8px;
  left: 14px;
  width: 8px;
  height: 16px;
  transform: rotate(45deg);
  border: solid #fff;
  border-width: 0 2px 2px 0;
}

.css-wq-suggest {
  text-align: center;
  line-height: 4rem;
}

.css-wq-note {
  padding: 1rem;
  margin-top: 3rem;
  border-radius: 5px;
  background: var(--color-soft-blue);
  color: var(--complementary-color-blue);
  display: block;
  line-height: 1.75;
  overflow-y: auto;
  scroll-behavior: smooth;
  cursor: url;
}

.css-wq-note span {
  cursor: pointer;
}

.css-wq-id {
  padding: 5px;
  background: var(--color-soft-blue);
  border-radius: 5px;
  color: var(--complementary-color-blue);
}

.css-wq-bpf {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 20%;
}

.css-wq-nav {
  display: flex;
  width: 600px;
  justify-content: space-around;
}

.css-wq-arrow {
  display: flex;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  align-items: center;
  position: relative;
  cursor: pointer;
  box-shadow: 1px 1px 20px var(--border-primary);
}

.css-w-p-title {
  padding: 0 2rem;
  margin-top: 1rem;
  font-size: var(--text-size-title);
  opacity: 0;
}

.css-w-p-ul.active {
  height: 0;
  overflow: hidden;
}

.css-w-p-dar {
  margin-right: 5px;
  width: 0.6rem;
  height: 0.6rem;
}

.css-w-p-dar.active {
  transform: rotate(90deg);
}

.css-w-p-sbe {
  padding: 0 2rem;
  margin-top: 1rem;
  display: flex;
  cursor: pointer;
  align-items: center;
}

.css-w-p-sbe span {
  margin-left: 30px;
  margin-left: auto;
}

.css-w-p-arw {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.css-w-p-ari {
  height: 100px;
  width: 100px;
  background: var(--base-color-white-primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-blue);
}

.css-w-p-upl {
  opacity: 0.5;
  margin-top: 10px;
  width: 40px;
  height: 40px;
  border: 1.1px dashed var(--complementary-color-blue);
  border-radius: 5px;
}

.css-w-p-upl:hover {
  opacity: 0.7;
}

.css-w-p-upli {
  width: 200px;
  height: 80px;
  z-index: 15;
  cursor: pointer;
  position: relative;
  left: 5px;
  left: -80px;
  top: -60px;
  opacity: 0;
}

.css-w-p-legend {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.css-w-p-scc {
  height: 130px;
}
.css-w-p-name {
  text-align: center;
  text-transform: capitalize;
}

.css-w-p-ul {
  cursor: pointer;
  list-style: none;
}

.css-w-p-uli {
  padding-left: 3.5rem;
  border-left: 4px solid rgba(255, 255, 255, 0);
  transition: 0.1s;
}

.css-w-p-uli:focus {
  background: transparent;
  font-weight: bold;
}

.css-w-p-uli:hover {
  font-weight: bold;
  border-left: 4px solid rgba(255, 255, 255, 0.3);
  animation-name: xtrans;
  animation-duration: 1s;
}

@keyframes xtrans {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.css-w-p-uli.active::before {
  list-style-type: none;
  color: #00f569;
  display: inline-block;
  content: url("data:image/svg+xml,%3Csvg id='SVGRoot' width='16px' height='16px' version='1.1' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m12.43 6.0664c0.27037-0.31809 0.74741-0.35677 1.0655-0.086392 0.31809 0.27037 0.35677 0.74741 0.08639 1.0655l-6.4251 7.5589c-0.27462 0.32308-0.76122 0.35711-1.0781 0.07541l-3.4015-3.0236c-0.31202-0.27735-0.34012-0.75513-0.062777-1.0672 0.27735-0.31202 0.75513-0.34012 1.0672-0.06277l2.8239 2.5101z' fill='%2300f569' stroke-width='.7559'/%3E%3C/svg%3E ");
  width: 1.5em;
  margin-left: -1em;
}

.css-w-p-avatar-des {
  display: block;
  text-align: center;
}

.css-w-p-project {
  display: flex;
  color: var(--base-color-black-primary);
}

.css-w-p-tag {
  display: flex;
  justify-content: center;
  text-transform: capitalize;
}

.css-wt-wrap {
  display: flex;
}

@media (max-width: 600px) {
  .css-wq-back span {
    opacity: 0;
  }

  .css-wq-wrap {
    height: 100% !important;
  }

  .css-wq-fko {
    display: flex;
    flex-direction: column;
  }

  .css-wq-fko button {
    margin-top: 1rem;
  }
  .css-wq-fcc {
    flex-direction: column;
  }

  .css-wq-note {
    font-size: var(--text-size-primary);
  }

  .css-wq-txs {
    margin: 1rem 2rem;
  }
  .css-wq-xsc {
    width: 100%;
    bottom: 600px;
  }

  .css-wq-fpb {
    padding: 0.5rem;
  }

  .css-wq-fyy {
    width: 90%;
  }
  .css-wq-tss {
    margin: 0 0.25rem;
  }

  .css-wq-bta {
    margin-top: 0.5rem;
  }
  .css-wq-ths {
    margin: 0;
  }
  #right-arrow span {
    color: #ffffff;
    font-weight: bold;
    margin-right: 40px;
  }

  #left-arrow span {
    color: var(--text-color-primary);
    font-weight: bold;
    margin-left: 40px;
  }
  .css-wq-fpl {
    top: 0;
    bottom: 0;
    left: 0;
    top: 0;
    position: fixed;
  }

  .css-wq-nac.active {
    display: none;
  }
  .css-wq-fps {
    width: 90%;
    height: 90%;
    text-align: justify;
  }
  .css-wq-top {
    padding: 0 10%;
  }

  .css-identicon-wrp {
    border: 1px solid transparent;
  }

  #logo-blue {
    fill: #fff;
  }

  .css-w-p-wpr {
    display: none;
  }

  .css-wt-wrap {
    background: var(--complementary-color-blue);
  }

  .css-identicon-wrx {
    display: none;
  }

  .css-w-p-her {
    background: var(--complementary-color-blue);
    border: none;
  }

  .css-wq-wrap {
    margin-left: 0;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    overflow: unset;
    background: var(--base-color-white-primary);
  }

  .css-mf-wrap {
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  .css-mf-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }

  .css-mf-wrap.active {
    overflow-y: hidden;
  }
  .css-wq-gtt span {
    white-space: nowrap;
  }

  .css-wq-tss {
    margin-top: 0.5rem;
    width: 100%;
  }

  .css-wq-thl {
    width: 100%;
  }

  .css-wq-got {
    right: 0;
    top: 50px;
  }

  .css-w-p-wrapper {
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    z-index: 40;
  }

  .css-w-p-wrap {
    width: 280px;
    min-width: 280px;
    z-index: 20;
    padding-top: 0px;
    position: fixed;
    background: var(--base-color-white-primary);
    color: var(--text-color-primary);
  }

  .css-wq-answer {
    padding: 0 10%;
  }
}
</style>