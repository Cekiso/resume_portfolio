// ============================================
// PROJECT DATA
// ============================================
const projects = [
  {
    id: 1,
    title: "Basic Webpage",
    category: "frontend",
    image: "img/portfolio/Basic.png",
    liveLink: "https://cekiso.github.io/basic-webpage/",
    githubLink: "https://github.com/Cekiso/basic-webpage",
    overview: "A foundational web development project showcasing HTML and CSS fundamentals.",
    idea: "The goal was to create a clean, responsive webpage that demonstrates core web development principles and best practices in semantic HTML and modern CSS.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    challenges: [
      "Understanding CSS box model and layout principles",
      "Making the design responsive across different screen sizes",
      "Ensuring cross-browser compatibility"
    ],
    solutions: "Learned to use flexbox for layouts, implemented media queries for responsive design, and tested across multiple browsers to ensure consistency."
  },
  {
    id: 2,
    title: "First Portfolio",
    category: "frontend",
    image: "img/portfolio/myweb.png",
    liveLink: "https://cekiso.github.io/new-portfolio/#Portfolio/",
    githubLink: "https://github.com/Cekiso/new-portfolio",
    overview: "My initial portfolio website showcasing early web development projects and skills.",
    idea: "Create a personal portfolio to showcase my work and establish an online presence as a developer.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    challenges: [
      "Designing an attractive and professional layout",
      "Organizing portfolio items effectively",
      "Implementing smooth scrolling and navigation"
    ],
    solutions: "Used Bootstrap framework for consistent styling, implemented JavaScript for interactive elements, and gathered feedback to improve the design iteratively."
  },
  {
    id: 5,
    title: "Pomodoro App",
    category: "frontend",
    image: "img/portfolio/pomodoro.png",
    liveLink: "https://cekiso.github.io/pomodoro_timer/",
    githubLink: "https://github.com/Cekiso/pomodoro_timer",
    overview: "A web application that greets users in different languages with name persistence.",
    idea: "Create an interactive app that counts down pomodoro so that you can stay focused for 25 mins or more the user can set their own time and break",
    tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap 4", "Bootstrap Icons"],
    challenges: [
      "Implementing the timer to work in realtime",
      "Implementing the settings toggle so that the user can choose their own time",
      "Creating a smooth user experience"
    ],
    solutions: "Utilized browser local storage API, created a language mapping system, and implemented form validation for better UX."
  },
  {
    id: 6,
    title: "Calculator App",
    category: "frontend",
    image: "img/portfolio/calculator.png",
    liveLink: "https://cekiso.github.io/calculator_app/",
    githubLink: "https://github.com/Cekiso/calculator_app",
    overview: "A functional calculator web application with basic arithmetic operations.",
    idea: "Build a calculator that performs standard mathematical operations with a clean, intuitive interface.",
    tech: ["JavaScript", "HTML5", "CSS3", "Math Operations"],
    challenges: [
      "Handling complex calculation logic and operator precedence",
      "Managing calculator state across operations",
      "Creating an intuitive button layout"
    ],
    solutions: "Implemented a state machine for calculator operations, used JavaScript's built-in Math functions, and designed a grid-based button layout."
  },
  {
    id: 7,
    title: "To do list",
    category: "backend",
    image: "img/portfolio/to-do.png",
    liveLink: "https://github.com/cekiso.github.io/todo-list/",
    githubLink: "https://github.com/Cekiso/todo-list",
    overview: "A feature-rich, object-oriented to-do list application with persistent storage, priority management, due dates, and data export/import capabilities.",
    idea: "Create a to do list that can store my to do list in the json file and also to filter which task is more important",
    tech: ["Html", "Css", "Javascript"],
    challenges: [
      "was to store data after the user have added a task",
      "To make a task based on how important it is",
      "using JavaScript (ES6+): Object-oriented programming"
    ],
    solutions: "Implemented local storage for data persistence, created priority-based filtering system, and used ES6 classes for better code organization."
  },
  {
    id: 8,
    title: "Weather App",
    category: "backend",
    image: "img/portfolio/weather.png",
    liveLink: "https://weather-app-nzj7.onrender.com/",
    githubLink: "https://github.com/Cekiso/weather-app",
    overview: "A modern weather application that displays current weather conditions, 5-day forecast, and detailed highlights including humidity, wind speed, visibility, and sunrise/sunset times.",
    idea: "Create a beautiful and functional weather app to practice API integration, async JavaScript, and responsive design while providing real-time weather information for any city worldwide.",
    tech: ["Node.js", "Express.js", "JavaScript", "HTML5", "CSS3", "OpenWeatherMap API"],
    challenges: [
      "Integrating multiple API endpoints for current weather and forecast data",
      "Creating a responsive layout that fits all information in one screen",
      "Handling API errors and invalid city names gracefully",
      "Managing environment variables securely for API keys"
    ],
    solutions: "Implemented async/await for API calls, used CSS Grid for responsive two-column layout, added comprehensive error handling with user-friendly messages, and utilized dotenv for secure API key management. Deployed on Render with environment variables configured in the platform."
  },
  {
    id: 9,
    title: "Movie App",
    category: "backend",
    image: "img/portfolio/movie.png",
    liveLink: "https://weather-app-nzj7.onrender.com/",
    githubLink: "https://github.com/Cekiso/movie-with-alphine",
    overview: "A boilerplate Express.js application with common configurations and middleware.",
    idea: "Create a reusable starter template for Express.js projects with best practices already configured.",
    tech: ["Node.js", "Express.js", "Javascript", "html5", "css3"],
    challenges: [
      "Structuring the project for scalability",
      "Configuring essential middleware",
      "Creating reusable patterns"
    ],
    solutions: "Established MVC architecture, configured common middleware like body-parser and session management, and documented setup instructions."
  }
];

// ============================================
// RENDER PROJECTS FOR SHUFFLE.JS
// ============================================
function renderProjects() {
  const grid = document.getElementById('portfolioGrid');
  
  if (!grid) {
    console.error('Portfolio grid not found');
    return;
  }
  
  // Clear existing content
  grid.innerHTML = '';
  
  // Render each project
  projects.forEach(function(project) {
    const figure = document.createElement('figure');
    figure.className = 'item';
    
    // IMPORTANT: Add data-groups attribute for Shuffle.js filtering
    figure.setAttribute('data-groups', '["all","' + project.category + '"]');
    
    figure.style.cursor = 'pointer';
    
    figure.innerHTML = `
      <div class="portfolio-item-img">
        <img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%23ecf0f1%22 width=%22300%22 height=%22200%22/%3E%3Ctext fill=%22%237f8c8d%22 font-family=%22Arial%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${project.title}%3C/text%3E%3C/svg%3E'" />
      </div>
      <span class="category">${project.title}</span>
    `;
    
    // Add click handler for modal
    figure.addEventListener('click', function() {
      openModal(project.id);
    });
    
    grid.appendChild(figure);
  });
  
  // Trigger Shuffle.js update if it's initialized
  if (typeof $ !== 'undefined' && $('.portfolio-grid').data('shuffle')) {
    $('.portfolio-grid').shuffle('update');
  }
}

// ============================================
// MODAL FUNCTIONS - IMPROVED MOBILE SUPPORT
// ============================================
function openModal(projectId) {
  const project = projects.find(function(p) {
    return p.id === projectId;
  });
  
  if (!project) {
    console.error('Project not found:', projectId);
    return;
  }

  // Populate modal content
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalOverview = document.getElementById('modalOverview');
  const modalIdea = document.getElementById('modalIdea');
  const modalSolutions = document.getElementById('modalSolutions');
  const modalLiveLink = document.getElementById('modalLiveLink');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const modalTech = document.getElementById('modalTech');
  const modalChallenges = document.getElementById('modalChallenges');
  
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalImage) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
  }
  if (modalOverview) modalOverview.textContent = project.overview;
  if (modalIdea) modalIdea.textContent = project.idea;
  if (modalSolutions) modalSolutions.textContent = project.solutions;
  if (modalLiveLink) modalLiveLink.href = project.liveLink;
  if (modalGithubLink) modalGithubLink.href = project.githubLink;

  // Populate tech list
  if (modalTech) {
    modalTech.innerHTML = project.tech.map(function(tech) {
      return '<li>' + tech + '</li>';
    }).join('');
  }

  // Populate challenges list
  if (modalChallenges) {
    modalChallenges.innerHTML = project.challenges.map(function(challenge) {
      return '<li>' + challenge + '</li>';
    }).join('');
  }

  // Show modal
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('active');
  }
  
  // IMPROVED: Better body scroll locking for mobile
  // Save current scroll position
  const scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = '-' + scrollY + 'px';
  document.body.style.width = '100%';
  
  // Store scroll position for restoration
  document.body.setAttribute('data-scroll-position', scrollY);
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
  }
  
  // IMPROVED: Restore body scroll position for mobile
  const scrollY = document.body.getAttribute('data-scroll-position');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  
  // Restore scroll position
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY));
  }
}

// Make functions globally accessible
window.openModal = openModal;
window.closeModal = closeModal;

// ============================================
// INITIALIZATION
// ============================================
function init() {
  // Render projects
  renderProjects();
  
  // Setup modal close handlers
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target.id === 'projectModal') {
        closeModal();
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeModal();
    }
  });
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}