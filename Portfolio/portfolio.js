// Load projects from the JSON file
async function loadProjects() {
    const container = document.getElementById("portfolio-container");
    container.innerHTML = ""; // Clear existing content
  
    try {
      // Fetch the projects JSON file
      const response = await fetch("./projects.json");
      const projects = await response.json();
  
      // Loop through each project and dynamically add to the container
      projects.forEach((project, index) => {
        const projectId = `project${index + 1}`;
        const projectElement = document.createElement("section");
        projectElement.className = "project";
        projectElement.id = projectId;
  
        // Populate project details
        projectElement.innerHTML = `
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <video controls>
            <source src="${project.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p>Technologies: ${project.technologies.join(", ")}</p>
        `;
  
        // Add the project to the container
        container.appendChild(projectElement);
      });
    } catch (error) {
      console.error("Error loading projects:", error);
      container.innerHTML = "<p>Failed to load projects. Please try again later.</p>";
    }
  }
  
  // Highlight active navigation link
  function highlightActiveLink() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }
  
  // Call loadProjects when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
    highlightActiveLink();
  });
  