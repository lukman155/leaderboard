import './style.css';
import { allScores } from './modules/memory';
import addScore from './modules/add-score';

const scoreList = document.querySelector('.score-list');


const renderScores = () => {
    allScores.forEach(score => {
        const newScore = document.createElement('li');
        newScore.innerHTML = `${score.name}: ${score.score}`;
        scoreList.appendChild(newScore);
    });
}

const addScoreBtn = document.querySelector('.submit');
addScoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addScore();
});

renderScores();