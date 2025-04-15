// diretors page
// Function to handle the "Show More" button click

     document.getElementById("showMoreCastBtn").addEventListener("click", function () {
  const castContainer = document.getElementById("directorContainer");

  // Example of additional cast members
  const newCards =`<div class="col-md-6" data-category="scifi" data-aos="fade-up">
    <div class="director-card">
      <div class="director-card-inner">
        <div class="director-image">
          <img src="/asset/actor/Christopher Nolan.png" alt="Christopher Nolan">
          <div class="director-overlay"></div>
        </div>
        <div class="director-info">
          <h3 class="director-name">
            <a href="/main-work/direactor-page.html">Christopher Nolan</a>
          </h3>
          <div class="director-stats">
            <span><i class="bi bi-film"></i> 12 Films</span>
            <span><i class="bi bi-star-fill"></i> 4.9</span>
          </div>
          <p class="director-movies">Notable Works: Inception, Interstellar, The Dark Knight</p>
          <div class="director-genres">
            <span class="genre-tag">Sci-Fi</span>
            <span class="genre-tag">Action</span>
            <span class="genre-tag">Thriller</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  newsContainer.insertAdjacentHTML("beforeend", newCards);
});

  