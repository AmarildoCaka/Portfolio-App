interface projectsListInterface {

  id: number;

  projectImg: string;

  projectName: string;

  projectDescription: string;

  projectRepoLink: string;

};

export const projectsList: projectsListInterface[] = [
  
  { 

    id: 1,

    projectImg: '/public/images/ProjectsImages/portfolioAppImg.jpg',

    projectName: 'Restaurant App',

    projectDescription: 'Responsive online restaurant website with interactive menu management, real-time dish selection, search functionality, and simulated payment workflow built using HTML, CSS, and JavaScript.',

    projectRepoLink: 'https://github.com/AmarildoCaka/Restaurant-Website'

  },

  { 

    id: 2,

    projectImg: '/public/images/ProjectsImages/portfolioAppImg.jpg',

    projectName: 'Card Dealership Website',

    projectDescription: 'Responsive car dealership website featuring real-time cart functionality, dynamic vehicle listings, and grid-based layout built with HTML, CSS, and JavaScript.',

    projectRepoLink: 'https://github.com/AmarildoCaka/Car-Dealership-Website'

  },

  { 

    id: 3,

    projectImg: '/public/images/ProjectsImages/portfolioAppImg.jpg',

    projectName: 'Impact Website',

    projectDescription: 'Impact is a responsive frontend demonstration website developed to showcase core web development competencies using modern, standards-compliant technologies. The project emphasizes structured layout design, reusable UI components, and responsive behavior across multiple device types.',

    projectRepoLink: 'https://github.com/AmarildoCaka/Impact-Website'

  },

  { 

    id: 4,

    projectImg: '/public/images/ProjectsImages/portfolioAppImg.jpg',

    projectName: 'BizLand Website',

    projectDescription: 'Frontend Demo Website – Showcasing HTML, CSS & JavaScript fundamentals and UI components.',

    projectRepoLink: 'https://github.com/AmarildoCaka/BizLand-App'

  },

  { 

    id: 5,

    projectImg: '/public/images/ProjectsImages/portfolioAppImg.jpg',

    projectName: 'Todo List App',

    projectDescription: 'A modern and responsive To-Do List application built with React, Vite, and Tailwind CSS. Features include adding tasks, viewing task details, marking tasks as completed, deleting tasks, clearing the task list, and clearing the input field. Perfect for managing daily tasks efficiently.',

    projectRepoLink: 'https://github.com/AmarildoCaka/To-Do-List-App'

  },

  { 

    id: 6,

    projectImg: '/public/images/ProjectsImages/portfolioAppImg.jpg',

    projectName: 'Banking App',

    projectDescription: 'Frontend banking app handling deposits, withdrawals, balances, bills, and credit cards with a modern UI, built in ReactJS and TailwindCSS.',

    projectRepoLink: 'https://github.com/AmarildoCaka/frontend-banking-site'

  },

  { 

    id: 7,

    projectImg: '/public/images/ProjectsImages/portfolioAppImg.jpg',

    projectName: 'Password Validator App',

    projectDescription: 'A Password Validator App built with React, TypeScript, and Tailwind CSS. It checks passwords in real time for lowercase, uppercase, numbers, and symbols, shows a strength bar, and gives positive or negative feedback based on password strength.',

    projectRepoLink: 'https://github.com/AmarildoCaka/password-validator-app'

  }

];