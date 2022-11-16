import { allScores } from './memory.js';
import scoreList from './elements.js';

const renderScores = () => {
  allScores.forEach((score) => {
    const newScore = document.createElement('li');
    newScore.innerHTML = `${score.name}: ${score.score}`;
    scoreList.appendChild(newScore);
  });
};
export default renderScores;