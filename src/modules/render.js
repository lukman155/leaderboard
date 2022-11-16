import { allScores } from './memory';
import { scoreList } from './elements';

const renderScores = () => {
    allScores.forEach(score => {
        const newScore = document.createElement('li');
        newScore.innerHTML = `${score.name}: ${score.score}`;
        scoreList.appendChild(newScore);
    });
}
export default renderScores;