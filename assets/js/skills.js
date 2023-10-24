const container_dos_skills = document.getElementById('skills');

const arraySkillFront = [
    {
        nome: 'JavaScript',
        porcentagem: '80%'
    },
    {
        nome: 'React',
        porcentagem: '50%'
    },
    {
        nome: 'Angular',
        porcentagem: '60%'
    },
    {
        nome: 'Vue',
        porcentagem: '40%'
    },
    {
        nome: 'Bootstrap',
        porcentagem: '80%'
    },
    {
        nome: 'ApexCharts',
        porcentagem: '40%'
    }
];

const arraySkillBack = [
    {
        nome: 'PHP',
        porcentagem: '70%',
    },
    {
        nome: 'Laravel',
        porcentagem: '40%'
    },
    {
        nome: 'MySQL',
        porcentagem: '70%'
    },
    {
        nome: 'Node',
        porcentagem: '80%'
    },
    {
        nome: 'API restFull',
        porcentagem: '80%'
    },
    {
        nome: 'Git',
        porcentagem: '80%'
    }
];

container_dos_skills.innerHTML += 
`   
    <div class='container-skill'>
        <div id='skill-front' class='skill-front'>
            <h2>Front End</h2>
        </div>
        <div id='skill-back' class='skill-back'>
            <h2>Back End</h2>
        </div>
    </div>
`;

const frontContainer = document.getElementById('skill-front');

const mandarSkillFront = () => {
    arraySkillFront.map((skill) => {
        const skill_div = document.createElement('div');
        skill_div.classList.add('skill-item');

        const skill_titulo = document.createElement('p');
        skill_titulo.textContent = skill.nome;

        const skill_barra = document.createElement('div');
        skill_barra.classList.add('skill-bar');
        
        const skill_progress = document.createElement('div');
        skill_progress.classList.add('skill-progress');
        skill_progress.style.width = skill.porcentagem;

        skill_barra.appendChild(skill_progress);

        skill_div.appendChild(skill_titulo);
        skill_div.appendChild(skill_barra);

        frontContainer.appendChild(skill_div);
    });
};

mandarSkillFront();

const backContainer = document.getElementById('skill-back');

const mandarSkillBack = () => {
    arraySkillBack.map((skill) => {
        const skill_div = document.createElement('div');
        skill_div.classList.add('skill-item');

        const skill_titulo = document.createElement('p');
        skill_titulo.textContent = skill.nome;

        const skill_barra = document.createElement('div');
        skill_barra.classList.add('skill-bar');
        
        const skill_progress = document.createElement('div');
        skill_progress.classList.add('skill-progress');
        skill_progress.style.width = skill.porcentagem;

        skill_barra.appendChild(skill_progress);

        skill_div.appendChild(skill_titulo);
        skill_div.appendChild(skill_barra);

        backContainer.appendChild(skill_div);
    });
};

mandarSkillBack();