const jobs = [
  {
    title: "Frontend Developer",
    company: "Amazon",
    location: "Bangalore",
    description: "Build and maintain web interfaces with HTML, CSS, JavaScript."
  },
  {
    title: "Backend Developer",
    company: "Google",
    location: "Bangalore",
    description: "Work on APIs and server-side logic using Node.js."
  },
  {
    title: "Network Engineer",
    company: "NetSecure Solutions",
    location: "Hyderabad",
    description: "Maintain and troubleshoot network infrastructure, ensure connectivity and security."
  }
    
];

window.onload = function() {
  const jobSection = document.getElementById("job-listings");

  if (jobSection) {
    jobs.forEach(job => {
      const div = document.createElement("div");
      div.className = "job-card";
      div.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
        <a href="apply.html" class="btn">Apply Now</a>
      `;
      jobSection.appendChild(div);
    });
  }
};
