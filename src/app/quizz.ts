export class Quizz {
  id: number;
  question: string;
  rep: string;
  correct: string;

  constructor(id: number, question: string, rep: string, correct: string) {
    this.id = id;
    this.question = question;
    this.rep = rep;
    this.correct = correct;
  }
}
