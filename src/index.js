import './style.css';

const gameId = 'XWZaQZBPVullch0IYVvl';
const list = document.querySelector('.score-list');

const render = (data) => {
  const li = document.createElement('li');
  li.innerHTML = `${data.user} : ${data.score}`;
  li.className = 'list-item';
  list.appendChild(li);
};

const postData = async (data) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const fetchData = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'GET',
  });
  return response.json();
};

document.querySelector('form').onsubmit = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const score = e.target.score.value;
  if (score === '' || name === '') {
    alert('Please fill in both fields');
  } else if (Number.isNaN(Number(score))) {
    alert('Please enter a number');
  } else {
    postData({ user: name, score })
      .then((data) => {
        if (data) {
          render({ user: name, score });
          e.target.name.value = '';
          e.target.score.value = '';
        }
      });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
    .then((data) => {
      data.result.forEach((item) => { render(item); });
    });
});

document.querySelector('.refresh').onclick = () => {
  list.innerHTML = '';
  fetchData()
    .then((data) => {
      data.result.forEach((item) => { render(item); });
    });
};