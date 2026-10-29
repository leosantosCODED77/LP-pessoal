import React, { useEffect, useState } from 'react';
import type { GitHubRepo } from '../types';

const FALLBACK_PROJECTS: GitHubRepo[] = [
  {
    id: 1,
    name: 'LP-pessoal',
    clone_url: 'https://github.com/leosantosCODED77/LP-pessoal.git',
    html_url: 'https://github.com/leosantosCODED77/LP-pessoal',
    description: 'Landing page pessoal desenvolvida para apresentação de perfil e projetos.',
  },
  {
    id: 2,
    name: 'landingPages',
    clone_url: 'https://github.com/leosantosCODED77/landingPages.git',
    html_url: 'https://github.com/leosantosCODED77/landingPages',
    description: 'Coleção de landing pages desenvolvidas com foco em boas práticas e responsividade.',
  },
  {
    id: 3,
    name: 'videos-ttk',
    clone_url: 'https://github.com/leosantosCODED77/videos-ttk.git',
    html_url: 'https://github.com/leosantosCODED77/videos-ttk',
    description: 'Projeto de exibição e manipulação de vídeos.',
  },
];

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const urlGithub = 'https://api.github.com/users/leosantosCODED77/repos';

    fetch(urlGithub, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: GitHubRepo[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(FALLBACK_PROJECTS);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar projetos do GitHub:', err);
        setProjects(FALLBACK_PROJECTS);
        setLoading(false);
      });
  }, []);

  return (
    <section id="my-projects" className="fourth-section">
      <h2 className="title">Meus projetos</h2>

      {loading && <p id="loading">Carregando...</p>}

      {!loading && (
        <div id="projects-list">
          {projects.map((repo) => (
            <a
              key={repo.id}
              href={repo.clone_url || repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              title={repo.description || repo.name}
            >
              <span>{repo.name}</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};
