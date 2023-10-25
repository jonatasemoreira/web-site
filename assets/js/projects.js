const container_central_projects = document.getElementById('project');

arrayProjects = [
    {
        nome: 'Projeto 1',
        imagem: 'https://placehold.co/200x200',
        link: 'https://exemplo.com'
    },
    {
        nome: 'Projeto 2',
        imagem: 'https://placehold.co/200x200',
        link: 'https://exemplo.com'
    },
    {
        nome: 'Projeto 3',
        imagem: 'https://placehold.co/200x200',
        link: 'https://exemplo.com'
    },
    {
        nome: 'Projeto 4',
        imagem: 'https://placehold.co/200x200',
        link: 'https://exemplo.com'
    },
    {
        nome: 'Projeto 5',
        imagem: 'https://placehold.co/200x200',
        link: 'https://exemplo.com'
    },
    {
        nome: 'Projeto 6',
        imagem: 'https://placehold.co/200x200',
        link: 'https://exemplo.com'
    }
];

const enviarProjetosParaFront = () => {
    arrayProjects.forEach((project) => {
        const container_projects = document.createElement('div');
        const nome_project = document.createElement('details');
        const summary_project = document.createElement('summary');
        const imagem = document.createElement('img');
        const link = document.createElement('a');
        
        nome_project.classList.add('title-project');

        summary_project.textContent = project.nome;

        link.href = project.link;

        imagem.src = project.imagem;
        imagem.style.display = 'none'; // Oculta a imagem inicialmente
        imagem.classList.add('imagem-project')

        summary_project.addEventListener('click', () => {
            if (imagem.style.display === 'none') {
                imagem.style.display = 'block'; // Exibe a imagem quando o summary é clicado
            } else {
                imagem.style.display = 'none'; // Oculta a imagem quando o summary é clicado
            }
        });

        container_projects.appendChild(nome_project);
        nome_project.appendChild(summary_project);
        container_projects.appendChild(link);
        link.appendChild(imagem);
        container_central_projects.appendChild(container_projects);
    });
};

enviarProjetosParaFront();