


 const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'YOUR_API_KEY_HERE', // 🔑 Replace with your API key
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', options)
    .then(response => response.json())
    .then(data => {
      const matchesContainer = document.getElementById('matches');
      const matches = data.response;

      if (matches.length === 0) {
        matchesContainer.innerHTML = "<p>No live matches right now.</p>";
        return;
      }

      matches.forEach(match => {
        const home = match.teams.home;
        const away = match.teams.away;
        const score = match.goals;

        const div = document.createElement('div');
        div.className = 'match';
        div.innerHTML = `
          <div class="teams">
            <div class="team">
              <img src="${home.logo}" alt="${home.name} logo">
              <span>${home.name}</span>
            </div>
            <div class="score">${score.home} - ${score.away}</div>
            <div class="team">
              <img src="${away.logo}" alt="${away.name} logo">
              <span>${away.name}</span>
            </div>
          </div>
        `;
        matchesContainer.appendChild(div);
      });
    })
    .catch(err => {
      console.error(err);
      document.getElementById('matches').innerHTML = "<p>Error fetching matches.</p>";
    });