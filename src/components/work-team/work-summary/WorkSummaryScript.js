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
      for (const element of this.answeredQuestion) {
        if (element.category === e) {
          for (const option of element.options) {
            if (option.id === element.answer) {
              console.log();
            }
          }
        }
      }
    },
    filterByCategory(category) {
      let byCategory = [];
      for (let e of this.answeredQuestion) {
        console.log(e.category)
        if (e.category === category) {
          byCategory.push(e);
        }
      }
      console.log(byCategory)
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
