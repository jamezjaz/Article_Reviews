const navbar = (() => {
  const nav = document.querySelector('#nav');
  nav.innerHTML = `
                <nav class="navbar navbar-light bg-dark header">
                    <a class="navbar-brand text-light" href="#">
                      <i class="fas fa-newspaper"></i>
                    </a>
                    <a class="navbar-brand text-light" href="#">
                      <span class="px-4">
                        <i class="fas fa-atlas"></i>
                      </span
                      <span>
                        <i class="fas fa-book-open"></i>
                      </span
                    </a>
                </nav>
                `;
})();

export default navbar;