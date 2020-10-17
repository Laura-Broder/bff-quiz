const evan = {
  name: "evan",
  quizAnswers: [
    {
      q: 1,
      a: 1,
    },
    {
      q: 2,
      a: 3,
    },
    {
      q: 3,
      a: 3,
    },
    {
      q: 4,
      a: 2,
    },
  ],
};

class Profile {
  constructor({ name = "no name", quizAnswers = {}, id = 0 }) {
    this.id = id;
    this.name = name;
    this.quizAnswers = quizAnswers;
  }

  setAnswers = (quizAnswers) => {
    this.quizAnswers = quizAnswers;
  };
  getProfile = () => {
    return { name: this.name, quizAnswers: this.quizAnswers, id: this.id };
  };

  getAnswers = () => {
    return this.quizAnswers;
  };
  getAnswer = (qNum) => {
    return this.quizAnswers[`q${qNum}`];
  };
}

module.exports = Profile;
