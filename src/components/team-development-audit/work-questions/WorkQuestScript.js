export default {
  data() {
    return {
      numberQuestion: [0, 0],
      questionList: [
        {
          number: 1,
          id: "TD1",
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
            { id: 1, name: "Yes", value: 4 },
            { id: 2, name: "No", value: 0 },
          ],
          answer: null,
          textarea: null,
          files: [],
          images: [],
          video: [],
        },
        {
          number: 2,
          id: "TD2",
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
            "E.Use google image serch for each profile picture that was provided. Instructions for using Google search can be found here -. https://support.google.com/websearch/answer/1325808. Ensure image is not a stock photo and can be traced to a matching social media platform.",
            "F. For any profiles found using workstep D or E, perform the review from Workstep B.",
            "G. Save links to supporting information in this workstep to support your review.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 4 },
            { id: 2, name: "No", value: 0 },
          ],
          answer: null,
          textarea: null,
          files: [],
          images: [],
          video: [],
        },
        {
          number: 3,
          id: "TD3",
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
            { id: 1, name: "Yes", value: 4 },
            { id: 2, name: "No", value: 0 },
          ],
          answer: null,
          textarea: null,
          files: [],
          images: [],
          video: [],
        },
        {
          number: 4,
          id: "TD4",
          category: "Team Development",
          name: "Team experience",
          type: "Open",
          question:
            "Does the Dev team have the proper experience to bring this project to market?",
          worksteps: [
            "A. Review linkedIn profiles found in Question 2 for background and credentials of team",
            "B. For each position, check if education and work experience is relevant to role in project. If they have Education, work experience, or Code repositories to demonstrate their experience in their field, that is adequate for this question.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 4 },
            { id: 2, name: "No", value: 0 },
          ],
          answer: null,
          textarea: null,
          files: [],
          images: [],
          video: [],
        },
        {
          number: 5,
          id: "TD5",
          category: "Team Development",
          name: "Whitepaper Plagarism",
          type: "Open",
          question: "Was there any plagiarism in the whitepaper?",
          worksteps: [
            "A. Upload a copy of the whitepaper to Grammerly using this link ( https://www.grammarly.com/plagiarism-checker ).",
            "B. Include a copy of the results into the box below.",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 4 },
            { id: 2, name: "No", value: 0 },
          ],
          answer: null,
          textarea: null,
          files: [],
          images: [],
          video: [],
        },
        {
          number: 6,
          id: "TD6",
          category: "Team Development",
          name: "Whitepaper Quality",
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
            { id: 1, name: "Yes", value: 4 },
            { id: 2, name: "No", value: 0 },
          ],
          answer: null,
          textarea: null,
          files: [],
          images: [],
          video: [],
        },
        {
          number: 7,
          id: "TD7",
          category: "Team Development",
          name: "Whitepaper Information",
          type: "Open",
          question: "What is the length of the Whitepaper?",
          worksteps: [
            "A. Open Whitepaper. Count number of pages.",
            "B. Note number of pages in box below",
          ],
          example: "example",
          options: [
            { id: 1, name: "Yes", value: 4 },
            { id: 2, name: "No", value: 0 },
          ],
          answer: null,
          textarea: null,
          files: [],
          images: [],
          video: [],
        },
      ],
      workspace: true,
      developmentTeam: [
        { id: 1, name: "Anonymous" },
        { id: 2, name: "Real persons" },
        { id: 3, name: "Team history" },
        { id: 4, name: "Team experience" },
        { id: 5, name: "Whitepaper" },
      ],
      tokenomics: [
        "Token Held",
        "Public supply",
        "Exchanges",
        "Progresive minting",
        "Initial offering",
        "Stake pool",
        "Minting policy",
        "Token use cases",
        "Business model",
        "Market cap",
      ],
      community: [
        { id: 1, name: "Subreddit" },
        { id: 2, name: "Twitter" },
        { id: 3, name: "Telegram" },
        { id: 4, name: "Discord" },
      ],
      metrics: ["Initial Offering", "Market Cap", "Volume", "Discord"],
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
    this.addCurrentQuestion();
  },
  methods: {
    addCurrentQuestion() {
      this.currentQuestion.push(this.questionList[this.numberQuestion[0]]);
    },
    addAnswerQuestion(answer) {
      this.currentQuestion[0].answer = answer;
    },
    backToWorksteps(answer) {
      this.currentQuestion[0].answer = answer;
      this.progressWorkData.pop(this.currentQuestion[0].name)
    },
    cleanCurrentQuestion() {
      this.currentQuestion = [];
    },
    nextAnswerQuestion() {
      if (
        this.currentQuestion[0].answer &&
        this.currentQuestion[0].textarea.length > 100
      ) {
        this.progressWorkData.push(this.currentQuestion[0].name);
        this.answeredQuestion[this.numberQuestion[0]] =
          this.currentQuestion.pop();
        this.numberQuestion[0] += 1;
        this.addCurrentQuestion();
      } else {
        if (this.currentQuestion === []) {
          this.cleanCurrentQuestion();
          this.currentQuestion.push(this.questionList[this.numberQuestion[0]]);
        }
      }
    },

    backAnswerQuestion() {
      this.cleanCurrentQuestion();
      this.numberQuestion[0] -= 1;
      this.currentQuestion.push(this.answeredQuestion[this.numberQuestion[0]]);
    },
    clickCurrentQuestion(num) {
      let number = num - 1;
      for (const n of this.answeredQuestion) {
        if (n.number === number) {
          this.cleanCurrentQuestion();
          this.currentQuestion.push(this.answeredQuestion[number]);
          this.numberQuestion[0] = this.currentQuestion[0].number - 1;
        }
        if (n.number != number) {
          this.cleanCurrentQuestion();
          this.currentQuestion.push(this.questionList[number]);
          this.numberQuestion[0] = this.currentQuestion[0].number - 1;
        }
      }
    },
  },
};
