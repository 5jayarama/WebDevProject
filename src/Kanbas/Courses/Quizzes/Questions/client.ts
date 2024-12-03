import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;
export const deleteQuestion = async (quizId: string) => {
    // create new database collection for questions maybe
    const response = await axios.delete(`${QUESTIONS_API}/${question._id}`);
    return response.data;
};
export const updateQuestion = async (quiz: any) => {
    const { data } = await axios.put(`${QUESTIONS_API}/${question._id}`, question);
    return data;
};
