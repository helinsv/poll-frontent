export class Questions {
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

/*public Answers?: Array<Object>,*/