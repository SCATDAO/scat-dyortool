export default {
  data() {
    return {
      numberQuestion: [0, 0],
      questionList: [
        {
          id: 1,
          tag: "TD1",
          category: "Team Development",
          name: "Anonymous",
          type: "Open",
          question: "Is the development team anonymous?",
          worksteps: [
            "A. Review project website to check if team is listed.",
            "B. List each member listed in box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 2,
          tag: "TD2",
          category: "Team Development",
          name: "Real persons",
          type: "Open",
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
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 3,
          tag: "TD3",
          category: "Team Development",
          name: "Team history",
          type: "Open",
          question:
            "Has the Dev team worked on any other projects in the past?",
          worksteps: [
            "A. Using the search information from Question 2, review if any team members are associated with any other projects in any capacity. If so, list each project and the associated team member",
            "B. If other projects are found perform a comprehensive review of any news or information available about them. If anything negative is listed, list it in the workstep",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 4,
          tag: "TD4",
          category: "Team Development",
          name: "Team experience",
          type: "Open",
          question:
            "Does the Dev team have the proper experience to bring this project to market?",
          worksteps: [
            "A. Review linkedIn profiles found in Question 2 for background and credentials of team",
            "B. For each position, check if education and work experience is relevant to role in project. If they have Education, work experience, or Code repositories to demonstrate their experience in their field, that is adequate for this question.",
            "C. List each team member in the box below along with a description of their experience and assessment if it is relevant.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 5,
          tag: "TD5",
          category: "Team Development",
          name: "Whitepaper plagarism",
          type: "Open",
          question: "Was there any plagiarism in the whitepaper?",
          worksteps: [
            "A. Upload a copy of the whitepaper to Grammerly using this link ( https://www.grammarly.com/plagiarism-checker ).",
            "B. Include a copy of the results into the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 6,
          tag: "TD6",
          category: "Team Development",
          name: "Whitepaper quality",
          type: "Open",
          question:
            "Are there grammer, spelling, and punctuation errors in the Whitepaper or webpage?",
          worksteps: [
            "A. Copy text from whitepaper and website and paste into Grammerly using this link (https://www.grammarly.com/plagiarism-checker).",
            "B. Include a summary of the results into the box below.",
            "C. In general a few small errors are OK. If there are large numbers of grammer spelling and punctuation errors, then answer this question No.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 7,
          tag: "TD7",
          category: "Team Development",
          name: "Whitepaper information",
          type: "Open",
          question: "What is the length of the Whitepaper?",
          worksteps: [
            "A. Open Whitepaper. Count number of pages.",
            "B. Note number of pages in box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "1 to 2 pages", value: 1 },
            { id: 2, name: "2 to 10 pages", value: 1 },
            { id: 3, name: "10+ Pages", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 8,
          tag: "TK1",
          category: "Tokenomics",
          name: "Token held",
          type: "Open",
          question:
            "What portion of the tokens are held by the Development team or early investors?",
          worksteps: [
            "A. Review whitepaper and website for token allocation information",
            "B. Provide a breakdown of what percent belongs to each major group in the box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "0% to 5%", value: 1 },
            { id: 2, name: "6% to 15%", value: 1 },
            { id: 3, name: "25%+", value: 1 },
            { id: 4, name: "Not Available", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 9,
          tag: "TK2",
          category: "Tokenomics",
          name: "Public hold",
          type: "Open",
          question:
            "What portion of tokens will be available to the general public either through sale or rewards ?",
          worksteps: [
            "A. Review whitepaper and website for token allocation information",
            "B. Sum all portions that are allocated for public sale or will be made to general public through rewards such as staking or providing liquidity",
          ],
          example: "example",
          options: [
            { id: 1, name: "0% to 29%", value: 1 },
            { id: 2, name: "30% to 49%", value: 1 },
            { id: 3, name: "50% to 74%", value: 1 },
            { id: 4, name: "75%+", value: 1 },
            { id: 5, name: "Not Available", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 10,
          tag: "TK3",
          category: "Tokenomics",
          name: "Token schedule",
          type: "Open",
          question:
            "For tokens reserved for development team and early investors, is there a vesting schedule for when tokens are allowed to be sold?",
          worksteps: [
            "A. Vesting means that all tokens are not immediately available. Instead they are held for a predetermined period of time.",
            "B. Review white paper, most likely in the tokenomics section, to see if development team or early investor tokens are immediately available to them or are held for a specified time",
            "C. If there is a vesting schedule, outline it in the box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 11,
          tag: "TK4",
          category: "Tokenomics",
          name: "Token policy",
          type: "Open",
          question:
            "Is the token minting policy locked so that no changes can be made?",
          worksteps: [
            "A. Obtain the policy ID from project website.",
            "B. Copy policy into pool.pm",
            "C. Under policy, unsure there is a lock symbol which signifies that policy is locked and cannot be changed (see example).",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 12,
          tag: "TK5",
          category: "Tokenomics",
          name: "Token use",
          type: "Open",
          question:
            "Do you clearly understand the use case after reading the whitepaper?",
          worksteps: [
            "A. Read the whitepaper.",
            "B. After reading the whitepaper, do you uderstand the purpose of this project and its token? Is it a governance token that is used to make chages to the protocol. Does it have some sort of functionality.",
            "C. Briefly summarize the use case in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 13,
          tag: "TK6",
          category: "Tokenomics",
          name: "Token staking",
          type: "Open",
          question:
            "If the project utilizes an Initial Stake Offering, what is the percentage they charge?",
          worksteps: [
            "A. Review the project website, twitter page, discord, or twitter. ISO information and ticker should be listed",
            "B. Look up ticker and check the costs listed for the stake pool.",
            "C. Summarize results in box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "0%", value: 1 },
            { id: 2, name: ">0%", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 14,
          tag: "TK7",
          category: "Tokenomics",
          name: "Business model",
          type: "Open",
          question:
            "Is the project an already existing business model or the first of its kind?",
          worksteps: [
            "A. Identify the type primary function of the project. This would be things such as a DEX, lending dApp. NFT minter, etc.",
            "B. If you are unfamilar with the function of the project, review BuiltonCardano.com and check if there is already a category created",
            "C. If it is an existing model,  please describe what the competition is like for this business model and list a few of the major competitors with market cap below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Existing", value: 1 },
            { id: 2, name: "New", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 15,
          tag: "CT1",
          category: "Community",
          name: "Twitter",
          type: "Open",
          question: "How many followers does the project have on Twitter?",
          worksteps: [
            "A. Check the project website to see if it includes a link to its twitter profile.",
            "B. If it does not, open twitter and type the project name",
            "C. Review results to determine if it is associated with the project or not.",
            "D. Note the number of followers in the box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1000", value: 1 },
            { id: 2, name: "1000 to 5000", value: 1 },
            { id: 3, name: "5000 to 10,000", value: 1 },
            { id: 4, name: "10K+", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 16,
          tag: "CT2",
          category: "Community",
          name: "Twitter community",
          type: "Open",
          question:
            "For the twitter account, does it appear to have actual followers or bots/paid followers?",
          worksteps: [
            "A. Review 10 or more tweets from the project and note the number of likes, comments, and retweets it has.",
            "B. Compare the total number of followers to the average number of likes or comments they receive on posts.",
            "C. If on average the nuber of likes is less than 1% of the followers, this suggests that the followers are not real.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Bots", value: 1 },
            { id: 2, name: "Real", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 17,
          tag: "CT3",
          category: "Community",
          name: "Reddit",
          type: "Open",
          question: "How many subscribers does the project have on Reddit?",
          worksteps: [
            "A. Check the project website to see if it includes a link to its Subreddit.",
            "B. If it does not, open Reddit and type the project name.",
            "C. Review results to determine if it is associated with the project or not.",
            "D. Note the number of followers in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1000", value: 1 },
            { id: 2, name: "1000 to 5000", value: 1 },
            { id: 3, name: "5000 to 10,000", value: 1 },
            { id: 4, name: "10K+", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 18,
          tag: "CT4",
          category: "Community",
          name: "Reddit community",
          type: "Open",
          question:
            "For the subreddit, does it appear to have an active environment?",
          worksteps: [
            "A. Review the subreddit several times over several days at different times. Note the nuber of people online vs the number of members. .1%  or more of members online at any given time is sufficient activity.",
            "B. Review the last 10 posts. If they are all recent (within the last 2 days) and by different accounts, this also suggests sufficient activity.",
            "C. Note the number of members below",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 19,
          tag: "CT5",
          category: "Community",
          name: "Telegram",
          type: "Open",
          question: "How many subscribers does the project have on Telegram?",
          worksteps: [
            "A. Check the project website to see if it includes a link to its Telegram",
            "B. If it does not, open Telegram and type the project name.",
            "C. Review results to determine if it is associated with the project or not.",
            "D. Note the number of members in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1000", value: 1 },
            { id: 2, name: "1000 to 5000", value: 1 },
            { id: 3, name: "5000 to 10,000", value: 1 },
            { id: 4, name: "10K+", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 20,
          tag: "CT5",
          category: "Community",
          name: "Telegram community",
          type: "Open",
          question:
            "For the Telegram, does it appear to have an active environment?",
          worksteps: [
            "A. Scan the recent activity. If there are several comments  by different accounts each day, this also suggests sufficient activity.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 21,
          tag: "CT6",
          category: "Community",
          name: "Discord",
          type: "Open",
          question: "How many members does the project have on discord?",
          worksteps: [
            "A. Check the project website to see if it includes an invite link to its Discord.",
            "B. If it does not, you will need to find an invite link to access the discord server. Check the projects twitter page for this",
            "C. Note the number of members in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1000", value: 1 },
            { id: 2, name: "1000 to 10K", value: 1 },
            { id: 3, name: "10K+", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 22,
          tag: "MT1",
          category: "Metrics",
          name: "Token access",
          type: "Open",
          question:
            "If project has the token had its initial offering yet (ISO, IDO, ICO, etc), was it a fair token launch ?",
          worksteps: [
            "A. Fair launch would desribe everyone having equal access to the token. Instances where certain countries are excluded for legal reasons would not apply.",
            "B. Google the project initial offering and read news articles and comments regarding how the launch was conducted and percieved.",
            "C. Summarize results in box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 23,
          tag: "MT2",
          category: "Metrics",
          name: "Market cap",
          type: "Open",
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
            { id: 1, name: "<50 million", value: 1 },
            { id: 2, name: "50 to 100 million", value: 1 },
            { id: 3, name: "100 million +", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 24,
          tag: "MT3",
          category: "Metrics",
          name: "Daily volumen",
          type: "Open",
          question:
            "What is the daily trading volume of the Token (if the token has launched and is actively traded).",
          worksteps: [
            "A. Utilize CoinGecko.com to obtain daily trading volume. Check 3 different days and use the average volume from those 3 days.",
            "B. Note the market cap in the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<1 million", value: 1 },
            { id: 2, name: "1 million to 5 million", value: 1 },
            { id: 3, name: "5 million +", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 25,
          tag: "MT4",
          category: "Metrics",
          name: "Exchanges",
          type: "Open",
          question: "Is the token listed on large  centralized exchanges?",
          worksteps: [
            "A. Utilize CoinGecko.com and type in the token ticker symbol.",
            "B. Scroll to the bottom of the page where it lists the top exchanges by volume.",
            "C. Review the exchanges listed. Large centralized exchanges would be Coinbase, KuCoin, Kraken, Binance, FTX, Huobi, Gate.io.",
            "D. Note the exchanges in the box.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 26,
          tag: "MT5",
          category: "Metrics",
          name: "Decentralized Exchanges",
          type: "Open",
          question: "Is the token only traded on Decentralized exchanges?",
          worksteps: [
            "A. Utilize CoinGecko.com and type in the token ticker symbol.",
            "B. Scroll to the bottom of the page where it lists the top exchanges by volume.",
            "C. Review the exchanges listed and check if any of them are centralized exchanges. Google if you do not recognize the exchange.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 27,
          tag: "MT6",
          category: "Metrics",
          name: "Decentralized Exchanges",
          type: "Open",
          question: "For decentralized exchanges, what is the total liquidity?",
          worksteps: [
            "A. TBD. Need to wait for Cardano do launch dapps before I can write the process.",
          ],
          example: "example",
          options: [
            { id: 1, name: "<10K ", value: 1 },
            { id: 2, name: "10K to 100K", value: 1 },
            { id: 3, name: "100K+", value: 1 },
          ],
          answer: null,
          textarea: "",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 28,
          tag: "MT7",
          category: "Metrics",
          name: "Dex liquity",
          type: "Open",
          question:
            "For decentralized exchanges, is the liquidity from the dev team locked for an extended period of time?",
          worksteps: [
            "A. TBD. Need to wait for Cardano do launch dapps before I can write the process.",
            "B. N/A would be if the Dev team has no liquidity pool.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 1 },
            { id: 2, name: "No", value: 1 },
          ],
          answer: null,
          textarea: "",
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
    },
    cleanCurrentQuestion() {
      this.currentQuestion = [];
    },
    nextAnswerQuestion() {
      if (this.checkCorrectQuestion()) {
        this.progressWorkData.push(this.currentQuestion[0].id);
        this.answeredQuestion[this.numberQuestion[0]] =
          this.currentQuestion.pop();
        this.numberQuestion[0] += 1;
        this.changeCurrentQuestion();
      }
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
      if (this.checkCorrectQuestion()) {
        this.progressWorkData.push(this.currentQuestion[0].id);
        this.answeredQuestion[this.numberQuestion[0]] = this.currentQuestion[0];
        this.evaluateQuestions();
      }
    },
    checkCorrectQuestion() {
      return this.currentQuestion[0].answer &&
        this.currentQuestion[0].textarea.length > 100
        ? true
        : false;
    },
    evaluateQuestions() {
      let acc = 0;
      for (const answer of this.answeredQuestion) {
        for (const option of answer.options) {
          if (option.id === answer.answer) {
            acc += option.value;
          }
        }
      }
      console.log(acc);
    },
    removeItemFromArr(arr, item) {
      var i = arr.indexOf(item);

      if (i !== -1) {
        arr.splice(i, 1);
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
          case "Team Development":
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
