// Simulated Job Data (You can replace this with real API data)
const jobs = [
    {
      title: "Software Developer",
      company: "Tech Innovators",
      location: "Lagos, Nigeria",
      salary: "₦200,000 - ₦300,000",
      description: "Looking for a skilled software developer with 3+ years experience."
    },
    {
      title: "Marketing Manager",
      company: "BlueSky Corp",
      location: "Abuja, Nigeria",
      salary: "₦150,000 - ₦250,000",
      description: "Experienced marketing manager needed for a leading firm."
    },
    {
      title: "Data Analyst",
      company: "DataPros",
      location: "Port Harcourt, Nigeria",
      salary: "₦100,000 - ₦200,000",
      description: "Seeking a data analyst with proficiency in SQL and Python."
    }
  ];
  
  // Function to display jobs
  function displayJobs() {
    const jobContainer = document.getElementById('jobs-container');
    
    jobs.forEach((job) => {
      // Create a job card div
      const jobCard = document.createElement('div');
      jobCard.classList.add('job-card');
      
      // Add job details
      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p>Company: ${job.company} | Location: ${job.location} | Salary: ${job.salary}</p>
        <p>${job.description}</p>
        <a href="#" class="apply-btn">Apply Now</a>
      `;
      
      // Append job card to the container
      jobContainer.appendChild(jobCard);
    });
  }
  
  // Call the function to load jobs when the page loads
  document.addEventListener('DOMContentLoaded', displayJobs);