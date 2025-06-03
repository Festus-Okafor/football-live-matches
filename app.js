

apikey = '8f8a1af5271e2dc962bf6d6077cf90e3';
url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;


fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    articles = data.articles;
     console.log(articles)
    for (i = 0; i < articles.length; i++) {
      // for articles, we got articles[i].title
      console.log("Title: " + articles[i]['title']);
      //for description, we got articles[i].description
      console.log("Description: " + articles[i]['description']);

      // You can replace {property} below with any of the article properties returned by the API.
      // articles[i].{property}
      // console.log(articles[i]['{property}']);

      break;
    }
  });
    /*   if (matches.length === 0) {
        matchesContainer.innerHTML = "<p>No live matches right now.</p>";
        return;
    }})

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
    }}); 
    
    */