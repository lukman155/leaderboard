const SAVE_LOC = 'scores.list';
const allScores = JSON.parse(localStorage.getItem(SAVE_LOC)) || [];
const saveScore = () => {
    localStorage.setItem(SAVE_LOC, JSON.stringify(allScores));
}
export {allScores, saveScore};
