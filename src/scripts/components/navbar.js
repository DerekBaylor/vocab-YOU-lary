const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class= "card logo-card">
    <div class="logo-body">
    <img src="https://thumbs.dreamstime.com/b/vocabulary-text-written-red-grungy-zig-zag-borders-round-stamp-vocabulary-text-written-red-grungy-round-stamp-220919694.jpg" alt="vocabulary logo" class="card-image">
    </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="all-vocab">All Vocab</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" id="add-vocab">Add Vocab</a>
      </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <div id="logout-button" class="logout-btn"></div>
  </div>
</nav>`;
};

export default navBar;
