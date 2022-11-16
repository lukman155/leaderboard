import './style.css';
import renderScores from './modules/render.js';
import addScore from './modules/add-score.js';

const addScoreBtn = document.querySelector('.submit');
addScoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
});

const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

renderScores();