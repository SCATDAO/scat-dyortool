<template>
  <div class="css-main-flex-wrap">
    <header class="css-work-project-her" :class="{ active: workspace }">
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
      <div class="css-header-logo"></div>
    </header>
    <div class="css-work-tool-wrap">
      <template v-if="workspace">
        <div class="css-work-project-wpr">
          <div class="css-work-project-wrap" :class="{ active: workspace }">
            <div class="css-work-project-title" @click="workspace = !workspace">
              <b>Audit progress</b>
            </div>
            <div class="css-work-project-arw">
              <div class="css-work-project-ari"></div>
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
              class="css-work-project-sbe"
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
              class="css-work-project-sbe"
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
              class="css-work-project-sbe"
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
              class="css-work-project-sbe"
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

            <div class="css-work-project-scc"></div>
          </div>
        </div>
      </template>

      <div class="css-work-quest-wrap">
        <template v-if="!isFinished">
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
                  <img width="20" src="./dart.svg" alt="" />
                  <span class="dot"></span>
                </button>
                <template v-if="visualHelper['evaluate'] === 0">
                  <div class="css-work-quest-got">
                    <div class="box box--left"></div>
                    <div class="css-work-quest-gtt">
                      Click on the magnifying glass to evaluate this question.
                    </div>
                    <button
                      @click="
                        visualHelper['evaluate'] = !visualHelper['evaluate']
                      "
                    >
                      I got it
                    </button>
                  </div>
                </template>
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
                  placeholder="Edit here"
                ></textarea>
                <div>
                  <span
                    class="css-length-counter"
                    :class="{ active: knowTextareaLength() }"
                  >
                    {{ currentQuestion[0].textarea.length }}
                  </span>
                  <span>/</span>

                  <span>1000</span>
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
                      fill="#ffffff"
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
                      fill="#ffffff"
                      d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                    ></path>
                  </svg>
                </div>
              </template>
            </div>
          </div>
        </template>
        <template v-if="isFinished">
          <WorkSummary :answeredQuestion="answeredQuestion"></WorkSummary>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberQuestion: [0, 0],
      questionList: [
        {
          id: 1,
          tag: "TD1",
          category: "Development Team",
          name: "Anonymous Team",
          question: "Is the development team anonymous?",
          worksteps: [
            "A. Review project website to check if team is listed.",
            "B. List each member listed in box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 4.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Practically all exit scams and rup pulls are performed by anonymous teams. Why do you suppose that is? I think that the simplest answer is that if you are going to commit a crime, it is infinitely easier to get away with it if nobody knows who you are. The exact same reason that bank robbers choose to wear a mask. If you commit fraud and steal millions from investors, the police will hunt you down and you will face consequences for your actions. At the very least, you will be labeled a charlatan and will not be able to easily do the same thing in the future. If you commit fraud and steal millions of investors while remaining completely anonymous, you will never really face any consequences for your actions and will be able to continue doing it again and again. Now, does this mean that any dev team that chooses to remain anonymous is 100% going to commit fraud and steal? Of course not. There are lots of brilliant, hard working, and trustworthy developers out there that might prefer to be anonymous, and that is their right. But the good teams who choose to remain anonymous are normalizing the practice which leaves the door wide open for the bad teams to steal over and over again. We as a community should not be willing to invest in or use any dApp where the dev team has chosen to be anonymous, as this potential for fraud will always be present. We have no way to sort the trustworthy teams from the untrustworthy and are left in a situation where we are essentially just hoping that people do the right thing. If a dev team wants us to trust them enough to use and invest in their products, they must give us a reason to trust them. Revealing themselves is a loud and clear message to the investing community that they will do right by us and if they do not, they will suffer the consequences. The good teams who choose to remain anonymous are normalizing the practice which leaves the door wide open for the bad teams to steal over and over again.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 2,
          tag: "TD2",
          category: "Development Team",
          name: "Identity Verification",

          question:
            "Can you verify that each member of the Development team is a real person?",
          worksteps: [
            "A. List each person obtained in project website in box below.",
            "B. If links to LinkedIn Github, or other websites are provided, click through each link and review the information to determine if it looks genuine. Genuine profiles would likely have a long history, several contacts, current information, recommended skills, etc.",
            "C. If no links are provided, you will need to manually search. Begin with Google for general information. Check Linkedin, Facebook, Instagram, Github, and twitter to see if you can locate a profile that matches each person.",
            "D. Google each members names and see if you can find any profiles or information associated with them. Good sources to review are Linkedin, Facebook, Instagram, Github, and Twitter.",
            "E. Use google image serch for each profile picture that was provided. Instructions for using Google search can be found here -. https://support.google.com/websearch/answer/1325808. Ensure image is not a stock photo and can be traced to a matching social media platform.",
            "F. For any profiles found using workstep D or E, perform the review from Workstep B.",
            "G. Save links to supporting information in this workstep to support your review.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 2.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Simply verifying that there are people listed on the project website is insufficient. It is not unheard of for a team to list fake people on the website to give the appearance they have all revealed their identities when they have not. Becuase of this, you must do a little work verifying that each person listed is real. Ideally there will be links included with each name and photo in the teams section that direct you to each persons LinkedIn account, Github, Medium, or any other socials that are used to corroborate identiy and professional credentials. Many teams will provide these freely because they want to make it easy for you to verify them. If links are not provided, that is frustrating but not necessarilly a red flag. Go through the worksteps that are listed here to try to find various social media accounts to confirm thier identity and credentials.  Even if you do find a Linkedin account or social media account, that doesnt guarantee that the information is legitamite. Any good scammer would have gone through the trouble of creating a fake identity for each person they listed in the website. You will need to use some of your past experience and common sense to review what is available and determine if it is legitamite. You have likely seens hundreds of Linkedin profiles or Twitter/IG accounts and can spot things that look funny. Hardly any contacts. A ton of contacts but barely and activity. There are all kinds of things that can appear unusual and are too many to list here, but you will need to review the information and determine if you think it appears legitamite. And typically finding several sources online that can be compared and cross referenced to each other provides additional assurance that the person is real (e.g. has Linkedin profile with several connections and people who have attested to a certain skill the person has, has a Facebook or IG account with similar pictures that appears legitamite, has a few articles written about them from various third party puclications that you are familiar with). If you do determine that there are people listed in the website but they appear to be fake people, that is going to be a huge red flag. Honesty and reputation are extremely important and a team that is willing to mislead on this would likely be willing to mislead in other areas as well.  It is possible that there are reasaonble explanations or it is a rare instance where a person has no online presence, but anyone should proceed extremely caustiously if they are having trouble verifying the teams identities. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 3,
          tag: "TD3",
          category: "Development Team",
          name: "Prior Experience",

          question:
            "Does the Dev team have the proper experience to execute this project? ",
          worksteps: [
            "A. Review linkedIn profiles found in Question 2 for background and credentials of team",
            "B. For each position, check if education and work experience is relevant to role in project. If they have Education, work experience, or Code repositories to demonstrate their experience in their field, that is adequate for this question.",
            "C. List each team member in the box below along with a description of their experience and assessment if it is relevant.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 0.5 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Prior experience is extremely valuable in assessing if something is going to be successful going forward. As they say, the best way to predict the future is to study the past. So having a team that has a successful history with blockchain or previous start ups suggests that they will have success with the project you are currently researching. Blockchain is also a very new and fast paced industry, so having a team with experience navigating it makes it more likely that they will be successful. Now does this mean that just because someone was successful in the past it is a guarantee they will always be successful? Of course not. Each project needs to be assessed on its own mertis independent of the last, but having that prior experience to leverage will usually provide an edge and increase the chances of its success. It is also important to research prior experience becuase of anything negative that might turn up. Just like prior positive exerience being a good indicator that the current project will be successful, prior negative experience is just as good an indicator that you might want to avoid. Was someone on the team invovled in some type of fraud or illegal behavior in the past? Have they relseased a prdocut that is getting large amounts of complaints from thier users or investors? This is all information that you can use to assess if the current project they are working on will have a similar outcome. Just remember that the past helps us assess the future, but it doesnt gaurantee anything, positive or negative. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 4,
          tag: "TD4",
          category: "Development Team",
          name: "Audit",

          question:
            "Has the project successfully completed an audit by a reputable service provider?",
          worksteps: [
            "A. Scroll through the project website to see if they have a section on their audit status and if they have a link to the audit report.",
            "B. If it is not mentioned on the website, google the project name and the word audit. If it is popular, there are likely areticles written about it that will pop up.",
            "C. If nothing is found in the first two steps, try scrolling through their twitter feed, as it will usually be announced there.",
            "D. If nothing is found still, ask a direct question on their twitter, telegram, or discord and someone will be able to point you towards it.",
            "E. If the audit was found, list the name of the auditor and the date of completion in the box below. If the audit report is available include a link to it as well.",
            "F. If you are unfamilar with the auditor, Google them and see what results turn up to determine if they are reputable  (If there are complaints about them. If there are other projects you are familiar with audited by them. Etc.)",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 5,
          tag: "TD5",
          category: "Development Team",
          name: "Plagarism",

          question: "Was there any plagiarism in the whitepaper?",
          worksteps: [
            "A. Upload a copy of the whitepaper to Grammerly using this link ( https://www.grammarly.com/plagiarism-checker ).",
            "B. Include a copy of the results into the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 0.0 },
            { id: 2, name: "No", value: 1.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "As mentioned in #2, honesty and reputation are extremely important and a team that is willing to mislead or cheat in one area would likely be willing to mislead and cheat in other areas as well. Stealing someone's ideas and passing them off as your own is very similar to stealing money or assets. So people who have demonstrated they are willing to steal ideas are better off avoided as they might be willing to steal your money/crypto as well. Now does this mean that people should not be leveraging other ideas or knowledge? Of course not, that is one of the things that makes open source blockchain and tech in general so special. Everyone can learn from one another and build off each other which ultimately speeds. But blindly copying someone elses whitepaper does not really fall under this category. If a team ends up copying large sections of another teams whitepaper without citing thier source or giving credit, it is usually a bad sign and something you would want to consider while evaluating the project. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 6,
          tag: "TD6",
          category: "Development Team",
          name: "Spelling Errors",

          question:
            "Are there grammer, spelling, and punctuation errors in the Whitepaper or webpage?",
          worksteps: [
            "A. Copy text from whitepaper and website and paste into Grammerly using this link (https://www.grammarly.com/plagiarism-checker).",
            "B. Include a summary of the results into the box below.",
            "C. In general a few small errors are OK. If there are large numbers of grammer spelling and punctuation errors, then answer this question No.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 0.0 },
            { id: 2, name: "No", value: 1.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Most serious teams that are truly building something significant take a lot of pride in what they do. They like to make sure that everything is presented as the best version of itself and take the time and effort to review things multiple times with multiple people. As a result of this effort, there usually arent too many errors to be found. This is contrasted against teams that have hastilly put something together as fast as possible to exit scam or rug pull before quickly moving on to the next one. If a team has no real intention of brining this product to market or sticking around long enough to see it through, they usually arent spending all the time and energy to ensure everything is perfect. So if you are seeing a whitepaper that is full of spelling, grammar, and punctuation errors, that can be an indication that this team has not taken anything very seriously and may have bad intentions. Of course this is not a guarantee and its possible for an amazing project to have plenty of flaws in the whitepaper or a malicious project to have a flawless whitepaper. It is just one of the many things we look at when assessing a project on the whole. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 7,
          tag: "TD7",
          category: "Development Team",
          name: "Whitepaper Length",

          question: "What is the length of the Whitepaper?",
          worksteps: [
            "A. Open Whitepaper. Count number of pages.",
            "B. Note number of pages in box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "1 to 2 pages", value: 0.0 },
            { id: 2, name: "2 to 10 pages", value: 0.2 },
            { id: 3, name: "10+ Pages", value: 0.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This point should be taken with a large grain of salt and will also be subjective to the type of project. A next generation lending application with lots of features and specs should obviuosly be a longer whitepaper than whatever your favorite new dog coin is (if it even has a whitepaper). At the end of the day, quality over quantity is what is important and simply printing out a hundred pages of garbage is not very impressive or useful. But this is one of many data points that you can use to assess how serious or legitamite the project appears. Having a few pages of fluff is a warning sign that this might not be a very serious project, which increases the chances of an exit scam or rug pull. Having many pages that comprehensively explains all aspects of the project is a good sign that it is a serious project and the team is actually busy at work building something useful. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 8,
          tag: "TK1",
          category: "Tokenomics",
          name: "Insider Allocation",

          question:
            "What portion of the tokens are held by the Development team or early investors?",
          worksteps: [
            "A. Review whitepaper and website for token allocation information",
            "B. Provide a breakdown of what percent belongs to each major group in the box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "0% to 15%", value: 3.0 },
            { id: 2, name: "16% to 25%", value: 2.0 },
            { id: 3, name: "25%+", value: 0.0 },
            { id: 4, name: "Not Available", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Having huge portions of the token supply held by a small number of insiders is usually undesireable due to the selling pressure it can put on the token which can harm you as an inestor. Team members or venture capitalists who got in extremely early and were able to aquire tokens for 1/1000 of the price you are able to aquire them for are going to want to sell at some point and lock in thier gains. In order to sell these tokens, they will need sufficient liquidty from other people who are buying the token. Many projects can have large market caps, but if there is not a large amount of liquidity, any purchase or sale of the token can cause large fluctuations in price. In instances where teams and insiders want to exit thier positions and cash out, this can cause the price to crash on the smaller investors who purchased the tokens at higher prices. Having large portions of tokens held by the team and insiders is also undesireable due to the centralized control that it means for the project. Decentralization is an important concept in blockchain and there are many different layers and aspects of decentralization to consider. One of those aspects is having this control over a large amount of supply held by a small number of people. Many project have governance features where 1 token = 1 vote and holders can propose changes, vote on those changes, and essentially control the project going forward. If you have large numbers of tokens concentrated in a few hands, they will essentially be able to control the project going forward, which is the antithesis of what most crpyto projects are hoping to achieve. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 9,
          tag: "TK2",
          category: "Tokenomics",
          name: "Community Allocation",

          question:
            "What portion of tokens will be available to the general public either through sale or rewards ?",
          worksteps: [
            "A. Review whitepaper and website for token allocation information",
            "B. Sum all portions that are allocated for public sale or will be made to general public through rewards such as staking or providing liquidity",
            "C. Provide the information in the box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "0% to 49%", value: 0.0 },
            { id: 2, name: "50% to 74%", value: 0.5 },
            { id: 3, name: "75%+", value: 1.0 },
            { id: 4, name: "Not Available", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Go back and re-read step #8, as its essentially the same explanation, or I guess the mirror image of it. Just like having large numbers of tokens held by a few insiders can be bad, having a large number of tokens spread out accross a large number of people is good. Explanations of sell pressure and decentralization both apply. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 10,
          tag: "TK3",
          category: "Tokenomics",
          name: "Vesting",

          question:
            "For tokens reserved for development team and early investors, is there a vesting schedule?",
          worksteps: [
            "A. Vesting means that all tokens are not immediately available. Instead they are held for a predetermined period of time.",
            "B. Review white paper, most likely in the tokenomics section, to see if development team or early investor tokens are immediately available to them or are held for a specified time",
            "C. If there is a vesting schedule, outline it in the box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1.5 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Lets start by describing what vesting is. According to Investopedia 'Being fully vested means a person has rights to the full amount of some benefit, most commonly employee benefits such as stock options, profit sharing, or retirement benefits. Benefits that must be fully vested benefits often accrue to employees each year, but they only become the employee's property according to a vesting schedule.Vesting may occur on a gradual schedule, such as 25 percent per year, or on a 'cliff' schedule where 100 percent of benefits vest at a set time, such as four years after the award date. Fully vested may be compared with partially vested.' To give an example in the crpyrto world, the dev team might have 20% of all tokens reserved for themselves. As already discussed in #8, this can create a large amount of selling pressure if all the tokens were unlocked at once. It also can create concerns that there might be more work that needs to be done but now that the teams tokens are all unlocked, they could just take the money and run. To alleviate these concerns, a team can implement a vesting schedule so that not all of these tokens are available immediately. It can be vested over 4 years and 1/4 of the tokens are unlocked each year. It can be vested over 2 years where all the tokens are available at once at the end of the two years. Or anything that the team decides they want to do. By having a vesting schedule in place that makes sense, it is a clear signal to investors that tokens will not be massively dumped on them and that the team is in it for the long haul. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 11,
          tag: "TK4",
          category: "Tokenomics",
          name: "Locked Policy",

          question:
            "Is the token minting policy locked so that no changes can be made?",
          worksteps: [
            "A. Obtain the policy ID from project website.",
            "B. Copy policy into pool.pm",
            "C. Under policy, unsure there is a lock symbol which signifies that policy is locked and cannot be changed (see example).",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 2.5 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Ask an Bitcoin Maxi why they love Bitcoin so much and there is a good chance one of their respnoses will be 'fixed and unchanging monetary policy'. They are not wrong about this being a good feature, as it ensures that everyone know the rules and can plan accordingly. You know how many tokens exist and know if more can be created. Most people wouldn't be too thrilled if the makers of the token they just purchased decided to mint trillions more which dilute the value of the ones they currently hold. You can make sure this is not possible if the policy is locked and can no longer be changed. If that is the case, then whatever the rules are when the tokens were minted will always apply and you do not run the risk of this being altered later down the line.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 12,
          tag: "TK5",
          category: "Tokenomics",
          name: "Use Case",

          question:
            "Do you clearly understand the use case after reading the whitepaper?",
          worksteps: [
            "A. Read the whitepaper.",
            "B. After reading the whitepaper, do you uderstand the purpose of this project and its token? Is it a governance token that is used to make chages to the protocol. Does it have some sort of functionality.",
            "C. Briefly summarize the use case in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "In the end, the projects that will truly last and thrive are the ones with real utility (usefulness). Something that fills a real world need, solves a problem, does something better than anyone else, etc. Projects that do not can definetly go up a lot in value as we have seen time and time again, but most of the time thier shot term success is driven by hype which can be fleeting and can go as quickly as it comes. So for many, identifying a project with a solid use case is a good step in the research proccess in determining if it is something you should risk your hard earned money on. Even the most technical projects should be able to explain what they are doing in a way that the average person can understand, so if you read the whitepaper and you still have no idea what the use case of the token or project is, chances are it doesnt really have one.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 13,
          tag: "TK6",
          category: "Tokenomics",
          name: "ISO Fee",

          question:
            "If the project utilizes an Initial Stake Offering, what is the percentage they charge?",
          worksteps: [
            "A. Review the project website, twitter page, discord, or twitter. ISO information and ticker should be listed",
            "B. Look up ticker and check the costs listed for the stake pool.",
            "C. Summarize results in box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "0% to 3%", value: 0.5 },
            { id: 2, name: ">3%", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is another one of the more subjective points and shoud be taken with a grain of salt. Overall, if a pool is transparent about the fee structure they are charging and not misleading anybody, that is not a problem and each investor can decide for themselves if they want to proceed. So this is not really to punish the projects that decide to keep a larger percentage of the staking rewards for themselves, but more to reward the projects that try to make it as fair as possible. Many peopole in the crypto community care about fairness, and projects that conduct an ISO in a manner that helps smaller pools and doesnt gouge supporters are generally looked upon favorable and generate some positive attitudes towards it. So for that reason, we give a small number of bonus points to the projects which are extremely fair during thier ISO",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 14,
          tag: "TK7",
          category: "Tokenomics",
          name: "Originality",

          question:
            "Is the project an already existing business model or the first of its kind?",
          worksteps: [
            "A. Read the whitepaper.",
            "B. Identify the type primary function of the project. This would be things such as a DEX, lending dApp. NFT minter, etc.",
            "C. If you are unfamilar with the function of the project, review BuiltonCardano.com and check if there is already a category created",
            "D. If it is an existing model,  please describe what the competition is like for this business model and list a few of the major competitors with market cap below. ",
          ],
          example: "example",
          options: [
            { id: 1, name: "Existing", value: 0.0 },
            { id: 2, name: "New", value: 0.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This point has a few things to be considered. On the one hand, if a project is the first of its kind, it has a first mover advantage and has a better shot at cornering its market due to the fact that it’s the only game in town. As we have seen with Uniswap, Aave, Chainlink, and all the other projects that were the first of its kind, they usually have pretty good staying power and are typically one of if not the most popular project in its niche. On the other hand, being completely new can have negatives as its not really an established market, people might not fully understand what they are trying to do, the market might just not be ready for it yet, etc. Those are a lot of uncertainties that can make investing in a totally brand new product a bit risky. But in general, if you have read the whiteppaer and understand its use case, and beieve that it is fulfulling a reall need, there is a good chance that the positives outweigh the negatives when it comes to investing in something brand new.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 15,
          tag: "CT1",
          category: "Community",
          name: "Twitter",

          question: "How many followers does the project have on Twitter?",
          worksteps: [
            "A. Check the project website to see if it includes a link to its twitter profile.",
            "B. If it does not, open twitter and type the project name",
            "C. Review results to determine if it is associated with the project or not.",
            "D. Note the number of followers in the box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1000", value: 0.0 },
            { id: 2, name: "1000 to 5000", value: 0.5 },
            { id: 3, name: "5001 to 10,000", value: 1.0 },
            { id: 4, name: "10K+", value: 1.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesnt just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoptoin than ones with a couple hundred. Not to mantion the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invalubale information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 16,
          tag: "CT2",
          category: "Community",
          name: "Real Followers",

          question:
            "For the twitter account, does it appear to have actual followers or bots/paid followers?",
          worksteps: [
            "A. Review 10 or more tweets from the project and note the number of likes, comments, and retweets it has.",
            "B. Compare the total number of followers to the average number of likes or comments they receive on posts.",
            "C. If on average the nuber of likes is less than 1% of the followers, this suggests that the followers are not real.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Bots", value: 0.0 },
            { id: 2, name: "Real", value: 2.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "As discussed in the last point, community is important to a projects success. But simply looking at the number of followers is insufficient. This is because there are a LOT of projects out there that have recognized how important a community is to a project, and simply buy thousands of followers to give the appearance that they have a large organic community behind them. Now can a project buy followers and still end up being a good investment? Of course they can. But we have already covered honesty and integrity in the other points, and that still applies here. Most legitamite projets will gain a following organically because they are high quality and people can recognize that. Low quality projects that dont have much to offer will usually be the culprits in purchasing followers, which are typically the types of investments you would want to avoid. So doing a little extra leg work in reviewing the posts to see how much actual engagement they get will be a good indicator if the followers are real or not. Someone with 50K followers who gets 5 to 10 likes is probably purchainsg them. Someone who has no other people commenting or posting to thier page probably doenst have many real followers. And unfortunately, the really crafty projects who are on top of everything will also buy likes for thier posts to avoid being discovered. But those will typically be soething you can spot by looking through the people who engaged and seeing how many connections or followers they have. If they are all super low, its a good chance they are paid bots.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 17,
          tag: "CT3",
          category: "Community",
          name: "Reddit",

          question: "How many subscribers does the project have on Reddit?",
          worksteps: [
            "A. Check the project website to see if it includes a link to its Subreddit.",
            "B. If it does not, open Reddit and type the project name.",
            "C. Review results to determine if it is associated with the project or not.",
            "D. Note the number of followers in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1000", value: 0.0 },
            { id: 2, name: "1000 to 5000", value: 0.5 },
            { id: 3, name: "5001 to 10,000", value: 1.0 },
            { id: 4, name: "10K+", value: 1.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesnt just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoptoin than ones with a couple hundred. Not to mantion the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invalubale information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 18,
          tag: "CT4",
          category: "Community",
          name: "Subreddit Activity",

          question:
            "For the subreddit, does it appear to have an active environment?",
          worksteps: [
            "A. Review the subreddit several times over several days at different times. Note the nuber of people online vs the number of members. .1%  or more of members online at any given time is sufficient activity.",
            "B. Review the last 10 posts. If they are all recent (within the last 2 days) and by different accounts, this also suggests sufficient activity.",
            "C. Note the number of members below",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is a very similar concept to the one on Twitter I am copying it here again for your convenience.  As discussed in the last point, community is important to a projects success. But simply looking at the number of subscribers is insufficient. This is because there are a LOT of projects out there that have recognized how important a community is to a project, and simply buy thousands of subscribers to give the appearance that they have a large organic community behind them. Now can a project buy subscribers and still end up being a good investment? Of course they can. But we have already covered honesty and integrity in the other points, and that still applies here. Most legitamite projets will gain a following organically because they are high quality and people can recognize that. Low quality projects that dont have much to offer will usually be the culprits in purchasing subscribers, which are typically the types of investments you would want to avoid. So doing a little extra leg work in reviewing the posts to see how much actual engagement they get will be a good indicator if the subscribers are real or not. Someone with 50K subscribers who gets 5 to 10 upvotres is probably purchainsg them. Someone who has no other people commenting or posting to thier page probably doenst have many real subscribers. And if you only see the same person making posts, that is usually not a good sign. Ideally you want to look for a wide range of people posting and engaging on posts.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 19,
          tag: "CT5",
          category: "Community",
          name: "Telegram",

          question: "How many subscribers does the project have on Telegram?",
          worksteps: [
            "A. Check the project website to see if it includes a link to its Telegram",
            "B. If it does not, open Telegram and type the project name.",
            "C. Review results to determine if it is associated with the project or not.",
            "D. Note the number of members in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1000", value: 0.0 },
            { id: 2, name: "1000 to 5000", value: 0.5 },
            { id: 3, name: "5001 to 10,000", value: 1.0 },
            { id: 4, name: "10K+", value: 1.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesnt just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoptoin than ones with a couple hundred. Not to mantion the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invalubale information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 20,
          tag: "CT6",
          category: "Community",
          name: "Telegram Activity",

          question: "Does their Telegram appear to have an active environment?",
          worksteps: [
            "A. Scan the recent activity. If there are several comments  by different accounts each day, this also suggests sufficient activity.",
            "B. Comment on activity in box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 21,
          tag: "CT7",
          category: "Community",
          name: "Discord",

          question: "How many members does the project have on discord?",
          worksteps: [
            "A. Check the project website to see if it includes an invite link to its Discord.",
            "B. If it does not, you will need to find an invite link to access the discord server. Check the projects twitter page for this",
            "C. Note the number of members in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1000", value: 0.0 },
            { id: 2, name: "1000 to 10K", value: 0.5 },
            { id: 3, name: "10K+", value: 1.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesnt just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoptoin than ones with a couple hundred. Not to mantion the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invalubale information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 22,
          tag: "MT1",
          category: "Metrics",
          name: "Fair Launch",

          question:
            "If project has the token had its initial offering yet (ISO, IDO, ICO, etc), was it a fair token launch ?",
          worksteps: [
            "A. Fair launch would desribe everyone having equal access to the token. Instances where certain countries are excluded for legal reasons would not apply.",
            "B. Google the project initial offering and read news articles and comments regarding how the launch was conducted and percieved.",
            "C. Summarize results in box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 2.0 },
            { id: 2, name: "No", value: 0.0 },
            { id: 404, name: "Doesn't apply", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "We already touched on this a bit in the ISO percentage section when discussing projects that attempt to be as fair as possible in different aspects, and the launch is no different. So just like the ISO percentage, this is not really to punish the projects that do not have a fair launch, but more to reward the projects that try to make it as fair as possible. Many peopole in the crypto community care about fairness, and projects that conduct a fair launch  are generally looked upon favorable and generate some positive attitudes towards it. We also talked about tokens being concentrated in early investors/backers can create massive sell pressure at some point when they finally decide to sell. Well projects that had a fair launch have minimized the possibility of these VC/early investors and instead have tokens in the hands of the general community. So for those reasons, we give bonus points to the projects which are extremely fair during thier launch.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 23,
          tag: "MT2",
          category: "Metrics",
          name: "Market cap",

          question:
            "What is the current market cap of the project (if the token has launched and is actively traded)?",
          worksteps: [
            "A. Utilize CoinGecko.com to obtain market cap. Cross reference against CoinMarketcap.com to nensure they match.",
            "B. If they do not match, review several sources as use what the majority of sources are reporting.",
            "C. Smaller market cap projects are typically riskier than larger market cap projects. However, smaller market cap projects also have the potential for greater returns, especially if its an established business model where competitors have significantly larger market caps. Both factors should be considered by potential investors to meet their specific goals.",
            "D. Note the market cap in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<50 million", value: 0.0 },
            { id: 2, name: "50 to 100 million", value: 0.5 },
            { id: 3, name: "100 million +", value: 1.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is another one of those double edged swords that can go in either direction. The smaller a projects market cap, the more room it has to grow. Getting in early on a project when the market cap is at 1 Million means you have the potential for those massive 1000X gains simply due to the fact that the project starts off so small. Similarly, it would be a bit silly to be getting into Bitcoin at a 1 Trillion dollar market cap and be expecting it to 1000X into a quadrillion dollar market cap and be worth more than there are dollars in existence. So when you are researching new projects, paying attention to the market cap can give you an idea of how much room it has to grow. Now the other side of the coin is that extremely small market caps are going to be much riskier invetments than the larger and more established ones. Going back to our example, the 1 million market cap project has a lot of room to grow, but there is a good chance that your investment can fall to zero and be worth nothing. While Bitcoin isnt going to have its massive gains anymore, the chances of it dropping to zero are much lower (although it is still possible). Different investors will have different goals, but that is the general thought proces when looking at a projects market cap. For the purposes of this assessment, we gave more points to the higher market cap becuase we are more focused on not losing money than we are in gaining money. But when doing your own personal assessments, it would be ok if you care more about the larger gain potential and lean towards a smaller market cap preference.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 24,
          tag: "MT3",
          category: "Metrics",
          name: "Volumen",

          question:
            "What is the daily trading volume of the Token (if the token has launched and is actively traded).",
          worksteps: [
            "A. Utilize CoinGecko.com to obtain daily trading volume. Check 3 different days and use the average volume from those 3 days.",
            "B. Note the market cap in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1 million", value: 0.0 },
            { id: 2, name: "1 million to 5 million", value: 0.5 },
            { id: 3, name: "5 million +", value: 1.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Instead of writing my own take, I have copied this informatio from learncrypto.com as I think it explains it pretty well (https://learncrypto.com/knowledge-base/how-to-trade-crypto/understanding-crypto-trading-volume) Volume is important because it has such a significant impact on price from both an absolute and relative perspective. The total volume traded for a given cryptocurrency has a direct relationship with how volatile it is. Remember, price represents the balance of opinions between buyers and sellers. If an equal amount (in terms of volume) is being bought and sold then price will be stable, but stability suggests that people’s opinion about the price are well informed; this is known as market efficiency. Mature markets with significant volume and good price discovery have less volatility. Cryptocurrency is inherently volatile because it is immature and its adoption path is uncertain. Market participants are an unusual mix of recreational investors (hodlers), miners, speculators and institutional investors each with varying opinions and motivations, with those opinions subject to significant outside influences. So when looking at trading a given cryptocurrency, the total volume traded will immediately tell you how volatile it is likely to be. The change in volume over time will also give you a sense of interest in the project. It may seem a bit obvious but in order to trade a particular cryptocurrency it has to be listed on an exchange. Exchanges choose which coins to trade, and being listed on the bigger exchanges can make a huge difference to volume. If, for example, you have an opinion about an obscure cryptocurrency and want to buy it at a specific price. The absence of volume is going to make that really hard - there won’t  be enough buyers and sellers, so the difference between the available Offers (buyers) and Bids (sellers) - known as the Spread - will be wide. The wider the spread, the less efficient a market and therefore the more volatile. Websites like Coinmarketcap provide historical volume data. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 25,
          tag: "MT4",
          category: "Metrics",
          name: "Exchanges",

          question: "Is the token listed on large  centralized exchanges?",
          worksteps: [
            "A. Utilize CoinGecko.com and type in the token ticker symbol.",
            "B. Scroll to the bottom of the page where it lists the top exchanges by volume.",
            "C. Review the exchanges listed. Large centralized exchanges would be Coinbase, KuCoin, Kraken, Binance, FTX, Huobi, Gate.io.",
            "D. Note the exchanges in the box.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1.5 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "We talked about valume in the last point. Well where do you think most of the volume is coming from in crypto markets? I'd like to tell you it is from decentralized exchanges, but that is just not the case. Perhaps someday it will be, but for now the tokens and coins listed on centralized exchanges have access to the most liquidity and volume of all the tokens. For this reason, checking if a token is listed on centralized exchanges or not is always worth the effort. If you have found one that is only listed on a decentralized exchange this can be a good thing as the price might get some upward movement if and when it ever gets listed on one. But this is also something that you should take caution of. The shadiest projects out there that are trying to scam you will usually be found exclusively on decentralized exchanges, as they will not meet the more strict criteria to get listed on the centralized ones. So to summarize, being only on a DEX can have some upside if it is a solid project, but you should definetly exercise caution as it can be riskier as well. Tokens that have been listed on the big centralized exchagnes such as Coinbase, Kraken, Binance, etc will have access to more liquidy, be more well vetted, and oftentimes have less risk than a project that only lives on a DEX.",
          files: [],
          images: [],
          video: [],
        },
      ],
      workspace: true,
      workProgramCategory: {
        developmentTeam: [],
        tokenomics: [],
        community: [],
        metrics: [],
      },
      progressWorkData: [],
      isRetrayed: [0, 1, 1, 1],
      currentQuestion: [],
      answeredQuestion: [],
      checkedOption: "",
      visualHelper: {
        purpose: 0,
        evaluate: 0,
        example: 0,
      },
      isFinished: false,
      result: "",
      error: "",
    };
  },
  created() {
    this.numberQuestion[1] = this.questionList.length;
    this.answeredQuestion = this.questionList;
    this.changeCurrentQuestion();
    this.chargeListQuestion();
  },
  methods: {
    changeCurrentQuestion() {
      this.currentQuestion.push(this.questionList[this.numberQuestion[0]]);
    },
    changeAnswerQuestion(answer) {
      this.currentQuestion[0].answer = answer;
      console.log(JSON.stringify(this.currentQuestion[0].options));
      console.log(this.currentQuestion[0].answer);
    },
    cleanCurrentQuestion() {
      this.currentQuestion = [];
    },
    nextAnswerQuestion() {
      if (this.currentQuestion[0].answer === 404) {
        this.createNewReport();
      }

      this.checkCorrectQuestion();
      this.answeredQuestion[this.numberQuestion[0]] =
        this.currentQuestion.pop();
      this.numberQuestion[0] += 1;
      this.changeCurrentQuestion();
    },
    backAnswerQuestion() {
      this.cleanCurrentQuestion();
      this.numberQuestion[0] -= 1;
      this.currentQuestion.push(this.answeredQuestion[this.numberQuestion[0]]);
    },
    clickCurrentQuestion(num) {
      let number = num - 1;
      for (const n in this.answeredQuestion) {
        if (n.id === number) {
          this.cleanCurrentQuestion();
          this.currentQuestion.push(this.answeredQuestion[number]);
          this.numberQuestion[0] = this.currentQuestion[0].id - 1;
        }
        if (n.id != number) {
          this.cleanCurrentQuestion();
          this.currentQuestion.push(this.questionList[number]);
          this.numberQuestion[0] = this.currentQuestion[0].id - 1;
        }
      }
    },
    createNewReport() {
      this.checkCorrectQuestion();
      this.progressWorkData.push(this.currentQuestion[0].id);
      this.answeredQuestion[this.numberQuestion[0]] = this.currentQuestion[0];
      this.isFinished = !this.isFinished;
      this.workspace = !this.workspace;
    },
    checkCorrectQuestion() {
      return this.currentQuestion[0].answer
        ? this.progressWorkData.push(this.currentQuestion[0].id)
        : false;
    },
    knowCompleteness() {
      let isComplete = false;
      let checkAnswers = [];
      this.answeredQuestion.forEach((e) => checkAnswers.push(e.answer));
      if (checkAnswers.includes(null)) {
        isComplete = false;
      }
      if (!checkAnswers.includes(null)) {
        isComplete = true;
      }
      console.log(checkAnswers);
      return isComplete;
    },

    removeItemFromArr(array, item) {
      let e = array.indexOf(item);

      if (e !== -1) {
        array.splice(e, 1);
      }
    },
    backToWorksteps() {
      this.currentQuestion[0].answer = null;
      this.removeItemFromArr(this.progressWorkData, this.currentQuestion[0].id);
    },
    knowWorkProgress(step) {
      let acc = 0;
      this.workProgramCategory[step].forEach((s) => {
        this.progressWorkData.includes(s.id) ? (acc += 1) : false;
      });
      return acc;
    },
    knowTextareaLength() {
      return this.currentQuestion[0].textarea.length <= 100 ? true : false;
    },
    chargeListQuestion() {
      for (const element of this.questionList) {
        switch (element.category) {
          case "Development Team":
            this.workProgramCategory["developmentTeam"].push({
              id: element.id,
              name: element.name,
            });
            break;
          case "Tokenomics":
            this.workProgramCategory["tokenomics"].push({
              id: element.id,
              name: element.name,
            });
            break;
          case "Community":
            this.workProgramCategory["community"].push({
              id: element.id,
              name: element.name,
            });
            break;
          case "Metrics":
            this.workProgramCategory["metrics"].push({
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
textarea {
  width: 100%;
  max-width: 100%;
  height: 230px;
  line-height: 1.5;
  outline: none;
  border: none;
  resize: none;
  font-family: "Nunito", sans-serif;
  color: var(--text-color-secondary);
  caret-color: transparent;
}

textarea:focus-within {
  caret-color: black;
}

#css-work-quest-panel-bl {
  display: flex;
  align-items: flex-start;
}

#css-work-quest-panel-bl:hover {
  background: initial;
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

@keyframes pulse {
  0% {
    box-shadow: 0px 0px 1px 0px var(--color-soft-blue);
  }
  100% {
    box-shadow: 0px 0px 1px 5px var(--color-soft-blue);
  }
}

.css-work-quest-panel-ta {
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding: 10px 1rem;
  background: #fff;
  border-top: none;
  position: relative;
}

.css-work-quest-panel-ta div {
  right: 0%;
  bottom: 0%;
  margin-bottom: 1rem;
  margin-right: 1.4rem;
  position: absolute;
  font-size: var(--text-size-secondary);
  display: flex;
}

.css-work-quest-panel-ta span {
  margin-left: 2px;
}

.textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.css-work-quest-top {
  padding: 0 15%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.css-work-quest-back {
  display: flex;
  width: 200px;
  align-items: center;
  opacity: 0;
  caret-color: none;
  border: none;
  color: transparent;
  cursor: default;
}

.css-work-quest-gtt {
  color: #fff;
  font-weight: 500;
  font-size: var(--text-size-secondary);
}
.css-work-quest-got {
  width: 200px;
  height: 100px;
  max-width: 200px;
  max-height: 100px;
  padding: 1%;
  box-sizing: border-box;
  z-index: 10;
  right: -222px;
  position: absolute;
  background: var(--text-color-primary);
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 20px var(--border-primary);
}

.css-work-quest-got button {
  padding: 5px 10px;
  border: none;
  background: var(--complementary-color-blue);
  border-radius: 4px;
  color: #ffffff;
  margin-top: 1rem;
  cursor: pointer;
}

.css-work-quest-got::before {
  content: "";
  position: absolute;
  transition: all 0s ease-in;
}

.css-work-quest-got::before {
  left: -21px;
  bottom: 40px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 6px solid var(--text-color-primary);
}

.css-work-quest-got:hover {
  border: 1px solid var(--text-color-primary);
}

.css-work-quest-panel {
  background: var(--base-color-white-primary);
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: 4px;
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

.css-work-quest-panel-b {
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.css-work-quest-panel-b:hover {
  background: var(--color-soft-blue);
}

.css-work-quest-back.active {
  opacity: 1;
  cursor: pointer;
  color: var(--complementary-color-blue);
}

.css-work-quest-back div {
  width: 40px;
  height: 40px;
  background: var(--color-soft-blue);
  border-radius: 4px;
  display: flex;
  justify-content: center;
}

.css-work-quest-back span {
  font-weight: bold;
  margin-left: 1rem;
}

.css-work-quest-header {
  width: auto;
  height: 50vh;
}

.css-work-quest-page {
  justify-content: center;
  display: flex;
  margin-top: 1rem;
  font-weight: bold;
}

.css-work-quest-evaluate {
  background: var(--complementary-color-blue) !important;
  border: none;
  border-radius: 4px;
  padding: 10px 14px;
  height: 40px;
  color: white;
  cursor: pointer;
  margin-left: auto !important;
  margin-right: 1rem !important;
}

.css-work-project-her {
  background: var(--base-color-white-primary);
  height: 64px;
  display: flex;
  align-items: center;
}

.css-work-quest-legend {
  font-weight: bold;
  padding: 0 20%;
  line-height: 2rem;
  text-align: center;
  color: var(--text-color-primary);
  font-size: var(--text-size-title);
  margin-top: 2rem;
}

.css-work-quest-pag {
  color: var(--complementary-color-blue);
}

.css-work-quest-div {
  margin: 0 0.5rem;
}

.css-work-quest-answer {
  padding: 0 15%;
}

.css-work-quest-answer-item {
  background: #ffffff;
  height: 72px;
  min-height: 72px;
  max-height: 72px;
  border-radius: 4px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 1px 1px 20px var(--border-primary);
  border: 1px solid transparent;
}

.css-work-quest-answer-item.active {
  background: var(--color-soft-blue);
  border: 1px solid rgba(48, 99, 238, 0.5);
}

.css-work-quest-item-label {
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

.control input {
  z-index: -1;
  opacity: 0;
}

.control__indicator {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border-primary);
  border-radius: 4px;
}

.control--radio .control__indicator {
  border-radius: 50%;
}

/* Checked state */
.control input:checked ~ .control__indicator {
  background: var(--complementary-color-blue);
}

/* Hover state whilst checked */
.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: var(--complementary-color-blue);
}

/* Disabled state */
.control input:disabled ~ .control__indicator {
  pointer-events: none;
  opacity: 0.6;
  background: #e6e6e6;
}

/* Check mark */
.control__indicator:after {
  position: absolute;
  display: none;
  content: "";
}

/* Show check mark */
.control input:checked ~ .control__indicator:after {
  display: block;
}

/* Checkbox tick */
.control--checkbox .control__indicator:after {
  top: 8px;
  left: 14px;
  width: 8px;
  height: 16px;
  transform: rotate(45deg);
  border: solid #fff;
  border-width: 0 2px 2px 0;
}

/* Disabled tick colour */
.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}

/* Radio button inner circle */
.control--radio .control__indicator:after {
  top: 7px;
  left: 7px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
}

/* Disabled circle colour */
.control--radio input:disabled ~ .control__indicator:after {
  background: #7b7b7b;
}

.css-work-quest-suggest {
  text-align: center;
  line-height: 4rem;
}

.css-work-quest-note {
  padding: 1rem;
  margin-top: 3rem;
  background: var(--color-soft-blue);
  border-radius: 4px;
  color: var(--complementary-color-blue);
  display: block;
  line-height: 1.75;
  overflow-y: auto;
  cursor: url;
}

.css-work-quest-note span {
  cursor: pointer;
}

.css-work-quest-id {
  padding: 5px;
  background: var(--color-soft-blue);
  border-radius: 4px;
  color: var(--complementary-color-blue);
}

.css-work-quest-bpf {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 20%;
}

.css-work-quest-nav {
  display: flex;
  width: 600px;
  justify-content: space-around;
}

.css-work-quest-arrow {
  display: flex;
  padding: 1rem;
  background: white;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  box-shadow: 1px 1px 20px var(--border-primary);
}

#right-arrow {
  background: linear-gradient(
    22.58deg,
    rgba(0, 80, 220, 1) 0%,
    rgba(0, 105, 245, 1) 100%
  );
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

.css-menu-svg-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.css-work-project-title {
  padding: 0 2rem;
  margin-top: 1rem;
  font-size: var(--text-size-title);
  opacity: 0;
}

.css-work-project-ul.active {
  height: 0;
  overflow: hidden;
}

.css-work-project-dar {
  margin-right: 5px;
  width: 0.6rem;
  height: 0.6rem;
}

.css-work-project-dar.active {
  transform: rotate(90deg);
}

.css-work-project-sbe {
  padding: 0 2rem;
  margin-top: 1rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: var(--text-size-secondary);
  text-transform: uppercase;
}

.css-work-project-sbe span {
  margin-left: 30px;
  margin-left: auto;
}

.css-work-project-arw {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.css-work-project-ari {
  height: 100px;
  width: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-size: contain;
  box-shadow: var(--shadow-blue);
}

.css-work-project-upl {
  opacity: 0.5;
  margin-top: 10px;
  width: 40px;
  height: 40px;
  border: 1.1px dashed var(--complementary-color-blue);
  border-radius: 4px;
}

.css-work-project-upl:hover {
  opacity: 0.7;
}

.css-work-project-upli {
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

.css-work-project-legend {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.css-work-project-scc {
  height: 200px;
}
.css-work-project-name {
  text-align: center;
}

.css-work-project-ul {
  cursor: pointer;
}

.css-work-project-uli {
  padding-left: 4rem;
  border-left: 2px solid rgba(255, 255, 255, 0);
  transition: ease 0.3s;
}

.css-work-project-ul:active {
  background: transparent;
}

.css-work-project-uli:active {
  background: transparent;
}

.css-work-project-uli:hover {
  font-weight: bold;
  border-left: 2px solid rgba(255, 255, 255, 0.3);
}

.css-work-project-uli.active::before {
  list-style-type: none;
  color: #00f569;
  display: inline-block;
  content: "\2713";
  width: 1.5em;
  margin-left: -1em;
}

.css-work-project-avatar-des {
  display: block;
  text-align: center;
}

.css-work-project-project {
  display: flex;
  color: var(--base-color-black-primary);
}

.css-work-project-tag {
  display: flex;
  justify-content: center;
}

.css-work-tool-wrap {
  display: flex;
  padding-bottom: 10%;
}

.css-left-panel-button {
  top: 1rem;
  left: 1rem;
}
</style>