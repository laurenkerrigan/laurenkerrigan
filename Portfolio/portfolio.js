// Fetch JSON and build projects
async function loadProjects() {
    const container = document.getElementById("portfolio-container");
    container.innerHTML = ""; // Clear existing projects
  
    try {
      const response = await fetch("projects.json");
      const projects = await response.json();
  
      projects.forEach((project, index) => {
        const projectId = `project${index + 1}`;
        const projectElement = document.createElement("section");
        projectElement.className = "project";
        projectElement.id = projectId;
  
        projectElement.innerHTML = `
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <video controls>
            <source src="${project.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="carousel">
            ${project.images
              .map(image => `<img src="${image}" alt="${project.title} image">`)
              .join("")}
          </div>
        `;
  
        container.appendChild(projectElement);
      });
    } catch (error) {
      console.error("Error loading projects:", error);
      container.innerHTML = "<p>Failed to load projects. Please try again later.</p>";
    }
  }
  
  // Load all projects on page load
  document.addEventListener("DOMContentLoaded", loadProjects);