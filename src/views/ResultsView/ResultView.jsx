import React from 'react';
import Container from '../../components/Container';
import Diagramm from '../../components/Diagramm';

export default function ResultView() {
  const correctAnswers = 9;
  const totalAnswers = 12;

  function markResult(correctAnswers, totalAnswers) {
    if (correctAnswers === totalAnswers) {
      return 5;
    } else if (correctAnswers > totalAnswers / 2) {
      return 3;
    } else if (correctAnswers <= totalAnswers / 2) {
      return 2;
    }
  }

  const mark = markResult(correctAnswers, totalAnswers);

  let mainText = '';
  let secondaryText = '';
  if (mark === 5) {
    mainText = 'Excellent!!!';
    secondaryText = 'You are the best of the best of the best!';
  } else if (mark === 3) {
    mainText = 'Not bad!';
    secondaryText = 'But you still need to learn some materials.';
  } else if (mark === 2) {
    mainText = 'Bad!';
    secondaryText = 'You need to learn materials again.';
  }

  return (
    <Container>
      <h1>Results</h1>
      {/* переменная с именем теста */}
      <p>[TESTING THEORY_]</p>
      <Diagramm />
      <span>{`Correct answers - ${correctAnswers}`}</span>
      <span>{`Total answers - ${totalAnswers}`}</span>
      <div className="catImage"></div>
      <h2>{mainText}</h2>
      <p>{secondaryText}</p>
      <button>Try again</button>
    </Container>
  );
}
