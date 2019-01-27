export class Question {
    private id: number;
    private question: string;
    public constructor (id, question) {
        this.id = id;
        this.question = question;
    }
}

export class Answer {
    private id: number;
    private answer: string;
    private vote: number;
    private persent: number;

    public constructor(id, answer) {
        this.id = id;
        this.answer = answer;
    }

    public increaseVote () {
        this.vote++;
    }
}

export class Poll {
    private id: number;
    private question: Question;
    private answers: Answer[];

    public addAnswer(answer: Answer) {
        this.answers.push(answer);
    }

   /* public addQuestion (id, question) {
        this.id = id;
        this.question = question;
    }*/

}

/*
export class Poll {
    constructor(
        public Id: number,
        public Question: string,
        public Answers: {
            Id: number;
            Answer: string;
            Vote: number;
            Persent: number;
          }
    ) { }
}
*/