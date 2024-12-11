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

      // Convert YouTube link to embed link
      const videoId = project.video.split("youtu.be/")[1]; // Extract video ID
      const embedLink = `https://www.youtube.com/embed/${videoId}`;

      // Populate project details
      projectElement.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <iframe 
          width="560" 
          height="315" 
          src="${embedLink}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
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

// Call loadProjects when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadProjects);