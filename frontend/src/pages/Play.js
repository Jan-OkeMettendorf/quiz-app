import styled from "styled-components";
import Question from "../components/Question";
import * as React from "react";
import * as PropTypes from "prop-types";
import {checkAnswer} from "../service/devQuizApiService";

Play.propTypes = {
    question: PropTypes.object
}

const checkIfCorrect = (question, chosenId) => {
    checkAnswer(question, chosenId).then((data) => console.log("data: " + data))
};

export default function Play({question}){

    return(
        <div>
            <QuestionsContainer>
                <Question question={question} checkIfCorrect={checkIfCorrect}/>
            </QuestionsContainer>
        </div>
    )
}

const QuestionsContainer = styled.section`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #424B54;
  padding: 50px;
  `