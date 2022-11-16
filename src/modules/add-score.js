import { saveScore, allScores } from "./memory";
import { scoreList } from "./elements";

const addScore = () => {
    const scoreInput = document.querySelector('.score');
    const nameInput = document.querySelector('.name');
    let score = scoreInput.value;
    let name = nameInput.value;
    
    if (score === '' || name === '') {
        alert('Please fill in both fields');
        return;
    } else {
        score = parseInt(score);
        if (isNaN(score)) {
            alert('Please enter a number');
            return;
        }
        else {
            allScores.push({name, score});
            saveScore();
            const newScore = document.createElement('li');
            newScore.innerHTML = `${name}: ${score}`;
            scoreList.appendChild(newScore);
            scoreInput.value = '';
            nameInput.value = '';
            scoreList.appendChild(newScore);
        }
    }
}
export default addScore;