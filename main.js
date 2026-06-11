document.querySelectorAll('.sidebar-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;

    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    if (target === 'portofoliu') incarcaRepos();
  });
});

function incarcaRepos() {
  const grid    = document.getElementById('repo-grid');
  const loading = document.getElementById('repo-loading');
  const error   = document.getElementById('repo-error');

  if (grid.querySelector('.repo-card')) return;

  loading.style.display = 'block';
  error.style.display   = 'none';

  const apiPromise  = fetch('https://api.github.com/users/roberttatu9/repos')
    .then(res => { if (!res.ok) throw new Error(); return res.json(); })
    .then(repos => repos.filter(r => !r.fork))
    .catch(() => []);

  const jsonPromise = fetch('projects.json')
    .then(res => res.json())
    .catch(() => []);

  Promise.all([apiPromise, jsonPromise]).then(([apiRepos, jsonRepos]) => {
    loading.style.display = 'none';
    const apiSet = new Set(apiRepos.map(r => r.name));
    jsonRepos.forEach(r => r._isJson = true);
    const toate = [...apiRepos, ...jsonRepos];
    const coloane = grid.querySelectorAll('.repo-col');

    toate.forEach((repo, i) => {
      const card = document.createElement('div');
      card.className = 'repo-card';
      card.innerHTML = `
        <div class="repo-card-header">
          <span class="repo-name">${repo.name}</span>
          <span class="repo-lang">${repo.language || 'N/A'}</span>
        </div>
        <p class="repo-desc">${repo.description || 'Fără descriere disponibilă'}</p>
        <span class="repo-meta">Nr. Fork-uri: ${repo.forks_count ?? 0}</span>
        <span class="repo-meta">Nr. Stele: ${repo.stargazers_count ?? 0}</span>
        <div class="repo-footer">
          <a href="${repo.html_url}" target="_blank">Vezi pe GitHub →</a>
        </div>
        ${repo._isJson ? '<span class="repo-json-badge">Proiect importat din lista locală</span>' : ''}
      `;
      coloane[i % coloane.length].appendChild(card);
    });

    if (toate.length === 0) error.style.display = 'block';
  });
}
