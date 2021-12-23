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
