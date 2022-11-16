import { saveScore, allScores } from './memory.js';
import scoreList from './elements.js';

const addScore = () => {
  const scoreInput = document.querySelector('.score');
  const nameInput = document.querySelector('.name');
  const score = scoreInput.value;
  const name = nameInput.value;

  if (score === '' || name === '') {
    alert('Please fill in both fields');
  } else if (Number.isNaN(Number(score))) {
    alert('Please enter a number');
  } else {
    allScores.push({ name, score });
    saveScore();
    const newScore = document.createElement('li');
    newScore.innerHTML = `${name}: ${score}`;
    scoreList.appendChild(newScore);
    scoreInput.value = '';
    nameInput.value = '';
    scoreList.appendChild(newScore);
  }
};
export default addScore;