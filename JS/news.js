//Since I am using a free API, can't use this more than 100 times a day

fetch(
  "https://gnews.io/api/v3/search?q=Manchester%20United&token=2916add9732293d3321924e1eb354fda"  //token="YOUR-API-KEY"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    HTML(data);
  });

const HTML = (data) => {
  console.log(data);
  document.getElementById("news").innerHTML = `      <div class="cards">
  <div class="card">
    <h1>${data.articles[0].title}</h1>
    <p>
      <img
        src="${data.articles[0].image}"
        alt="image"
      />${data.articles[0].description}
    </p>
    <a href="${data.articles[0].url}" target="_blank">Read More</a>
  </div>
  <div class="card">
    <h1>${data.articles[1].title}</h1>
    <p>
      <img src="${data.articles[1].image}" alt="image" />
      ${data.articles[1].description}
    </p>
    <a href="${data.articles[1].url}" target="_blank">Read More</a>
  </div>
  <div class="card">
    <h1>${data.articles[2].title}</h1>
    <p><img src="${data.articles[2].image}" alt="image" />${data.articles[2].description}</p>    <a href="${data.articles[2].url}" target="_blank">Read More</a>
  </div>
  <div class="card">
    <h1>${data.articles[3].title}</h1>
    <p><img src="${data.articles[3].image}" alt="image" />${data.articles[3].description}</p>    <a href="${data.articles[3].url}" target="_blank">Read More</a>
  </div>
  <div class="card">
    <h1>${data.articles[4].title}</h1>
    <p><img src="${data.articles[4].image}" alt="image" />${data.articles[4].description}</p>    <a href="${data.articles[4].url}" target="_blank">Read More</a>
  </div>
  <div class="card">
    <h1>${data.articles[5].title}</h1>
    <p><img src="${data.articles[5].image}" alt="image" />${data.articles[5].description}</p>    <a href="${data.articles[5].url}" target="_blank">Read More</a>
  </div>
  <div class="card">
    <h1>${data.articles[6].title}</h1>
    <p><img src="${data.articles[6].image}" alt="image" />${data.articles[6].description}</p>    <a href="${data.articles[6].url}" target="_blank">Read More</a>
  </div>
  <div class="card">
    <h1>${data.articles[7].title}</h1>
    <p><img src="${data.articles[7].image}" alt="image" />${data.articles[7].description}</p>    <a href="${data.articles[7].url}" target="_blank">Read More</a>
  </div>
  <div class="card">
    <h1>${data.articles[8].title}</h1>
    <p><img src="${data.articles[8].image}" alt="image" />${data.articles[8].description}</p>    <a href="${data.articles[8].url}" target="_blank">Read More</a>
  </div>
  <div class="card">
    <h1>${data.articles[9].title}</h1>
    <p><img src="${data.articles[9].image}" alt="image" />${data.articles[9].description}</p>    <a href="${data.articles[9].url}" target="_blank">Read More</a>
  </div>
</div>`;
};
