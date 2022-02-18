export interface Question {
    id?: number;
    questionnaire?: string;
    questionType?: QuestionType;
    options?: Option[];
    activeStatus: boolean;
}
export interface Option{
    label:string,
    weightage: number
}

export enum QuestionType{
    text=1,
    mcq=2
}