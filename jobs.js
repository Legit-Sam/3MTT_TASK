// Simulated Job Data (You can replace this with real API data)
const jobs = [
    {
        title: "Software Developer",
        company: "Tech Innovators",
        location: "Kogi State, Nigeria",
        salary: "₦200,000 - ₦300,000",
        description: "Looking for a skilled software developer with 3+ years experience.",
        categories: ["Software & Data", "Engineering & Technology"]
    },
    {
        title: "Marketing Manager",
        company: "BlueSky Corp",
        location: "Kogi State, Nigeria",
        salary: "₦150,000 - ₦250,000",
        description: "Experienced marketing manager needed for a leading firm.",
        categories: ["Marketing & Communications", "Management & Business Development"]
    },
    {
        title: "Data Analyst",
        company: "DataPros",
        location: "Kogi State, Nigeria",
        salary: "₦100,000 - ₦200,000",
        description: "Seeking a data analyst with proficiency in SQL and Python.",
        categories: ["Software & Data", "Research, Teaching & Training"]
    },
    {
        title: "Accountant",
        company: "FinServe Ltd.",
        location: "Kogi State, Nigeria",
        salary: "₦120,000 - ₦180,000",
        description: "Looking for a certified accountant with experience in taxation.",
        categories: ["Accounting, Auditing & Finance"]
    },
    {
        title: "Project Manager",
        company: "BuildRight",
        location: "Kogi State, Nigeria",
        salary: "₦150,000 - ₦250,000",
        description: "Project manager needed for construction projects.",
        categories: ["Product & Project Management", "Building & Architecture"]
    },
    {
        title: "Customer Support Specialist",
        company: "ServicePlus",
        location: "Kogi State, Nigeria",
        salary: "₦80,000 - ₦120,000",
        description: "Seeking a customer support specialist to enhance client relations.",
        categories: ["Customer Service & Support"]
    },
    {
        title: "Graphic Designer",
        company: "Creative Hub",
        location: "Kogi State, Nigeria",
        salary: "₦100,000 - ₦150,000",
        description: "Creative graphic designer with experience in branding.",
        categories: ["Creative & Design"]
    },
    {
        title: "Agronomist",
        company: "AgriTech Co.",
        location: "Kogi State, Nigeria",
        salary: "₦120,000 - ₦200,000",
        description: "Looking for an agronomist to lead farming projects.",
        categories: ["Farming & Agriculture"]
    },
    {
        title: "Sales Executive",
        company: "Market Solutions",
        location: "Kogi State, Nigeria",
        salary: "₦90,000 - ₦150,000",
        description: "Sales executive needed for expanding market presence.",
        categories: ["Sales", "Marketing & Communications"]
    },
    {
        title: "Web Developer",
        company: "Webify Solutions",
        location: "Kogi State, Nigeria",
        salary: "₦180,000 - ₦250,000",
        description: "Seeking a web developer with expertise in HTML, CSS, and JavaScript.",
        categories: ["Software & Data", "Engineering & Technology"]
    },
    {
        title: "Content Writer",
        company: "Content Creators Ltd.",
        location: "Kogi State, Nigeria",
        salary: "₦70,000 - ₦100,000",
        description: "Creative content writer needed for various online publications.",
        categories: ["Creative & Design", "Marketing & Communications"]
    },
    {
        title: "Human Resources Officer",
        company: "PeopleFirst",
        location: "Kogi State, Nigeria",
        salary: "₦100,000 - ₦150,000",
        description: "Looking for an HR officer to manage recruitment and employee relations.",
        categories: ["Human Resources"]
    },
    {
        title: "Electrical Engineer",
        company: "PowerGrid",
        location: "Kogi State, Nigeria",
        salary: "₦200,000 - ₦300,000",
        description: "Electrical engineer needed for renewable energy projects.",
        categories: ["Engineering & Technology"]
    },
    {
        title: "SEO Specialist",
        company: "Optimize Now",
        location: "Kogi State, Nigeria",
        salary: "₦90,000 - ₦130,000",
        description: "SEO specialist to improve website rankings and visibility.",
        categories: ["Marketing & Communications", "Software & Data"]
    },
    {
        title: "Nurse",
        company: "HealthCare Services",
        location: "Kogi State, Nigeria",
        salary: "₦100,000 - ₦150,000",
        description: "Registered nurse needed for a busy healthcare facility.",
        categories: ["Medical & Pharmaceutical"]
    },
    {
        title: "Logistics Coordinator",
        company: "Transport Solutions",
        location: "Kogi State, Nigeria",
        salary: "₦80,000 - ₦120,000",
        description: "Logistics coordinator to manage transportation and distribution.",
        categories: ["Supply Chain & Procurement", "Customer Service & Support"]
    },
    {
        title: "Quality Assurance Tester",
        company: "Tech Innovations",
        location: "Kogi State, Nigeria",
        salary: "₦100,000 - ₦150,000",
        description: "QA tester needed for software testing and validation.",
        categories: ["Software & Data", "Engineering & Technology"]
    },
    {
        title: "Social Media Manager",
        company: "Digital Brands",
        location: "Kogi State, Nigeria",
        salary: "₦90,000 - ₦130,000",
        description: "Manage social media accounts and develop engagement strategies.",
        categories: ["Marketing & Communications"]
    },
    {
        title: "Business Analyst",
        company: "Insight Consultants",
        location: "Kogi State, Nigeria",
        salary: "₦120,000 - ₦180,000",
        description: "Business analyst needed to assess company processes and performance.",
        categories: ["Consulting & Strategy"]
    },
    {
        title: "Pharmaceutical Sales Rep",
        company: "Pharma Sales Co.",
        location: "Kogi State, Nigeria",
        salary: "₦100,000 - ₦150,000",
        description: "Sales representative to promote pharmaceutical products.",
        categories: ["Sales", "Medical & Pharmaceutical"]
    },
    {
        title: "Chef",
        company: "Gourmet Kitchen",
        location: "Kogi State, Nigeria",
        salary: "₦70,000 - ₦100,000",
        description: "Creative chef needed for a leading restaurant.",
        categories: ["Food Services & Catering", "Hospitality & Leisure"]
    },
    {
        title: "Construction Manager",
        company: "BuildRight",
        location: "Kogi State, Nigeria",
        salary: "₦200,000 - ₦300,000",
        description: "Construction manager needed for large-scale projects.",
        categories: ["Building & Architecture", "Management & Business Development"]
    },
    {
        title: "Technical Support Engineer",
        company: "TechAssist",
        location: "Kogi State, Nigeria",
        salary: "₦80,000 - ₦120,000",
        description: "Looking for a technical support engineer to assist customers with technical issues.",
        categories: ["Customer Service & Support", "Software & Data"]
    },
    {
        title: "Data Scientist",
        company: "DataVision",
        location: "Kogi State, Nigeria",
        salary: "₦200,000 - ₦350,000",
        description: "Data scientist needed to analyze data trends and provide insights.",
        categories: ["Software & Data"]
    },
    {
        title: "HR Manager",
        company: "People Solutions",
        location: "Kogi State, Nigeria",
        salary: "₦150,000 - ₦250,000",
        description: "HR manager required to oversee HR functions and employee relations.",
        categories: ["Human Resources"]
    },
    {
        title: "Digital Marketing Specialist",
        company: "MarketSmart",
        location: "Kogi State, Nigeria",
        salary: "₦90,000 - ₦140,000",
        description: "Digital marketing specialist needed to execute online marketing strategies.",
        categories: ["Marketing & Communications"]
    },
    {
        title: "Civil Engineer",
        company: "ConstructCo",
        location: "Kogi State, Nigeria",
        salary: "₦200,000 - ₦300,000",
        description: "Civil engineer needed for infrastructure development projects.",
        categories: ["Engineering & Technology", "Building & Architecture"]
    },
    {
        title: "E-commerce Manager",
        company: "ShopEase",
        location: "Kogi State, Nigeria",
        salary: "₦150,000 - ₦250,000",
        description: "E-commerce manager needed to manage online sales strategies.",
        categories: ["Sales", "Marketing & Communications"]
    },
    {
        title: "Pharmacist",
        company: "HealthPlus Pharmacy",
        location: "Kogi State, Nigeria",
        salary: "₦120,000 - ₦180,000",
        description: "Registered pharmacist needed for a busy pharmacy.",
        categories: ["Medical & Pharmaceutical"]
    },
    {
        title: "SEO Content Writer",
        company: "Content Masters",
        location: "Kogi State, Nigeria",
        salary: "₦70,000 - ₦110,000",
        description: "SEO content writer to create engaging and optimized content.",
        categories: ["Creative & Design", "Marketing & Communications"]
    },
    {
        title: "Field Sales Representative",
        company: "SalesForce",
        location: "Kogi State, Nigeria",
        salary: "₦80,000 - ₦130,000",
        description: "Field sales representative needed for customer outreach and sales.",
        categories: ["Sales"]
    },
    {
        title: "Network Administrator",
        company: "Tech Networks",
        location: "Kogi State, Nigeria",
        salary: "₦100,000 - ₦150,000",
        description: "Network administrator required to maintain and manage network systems.",
        categories: ["Engineering & Technology", "Software & Data"]
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
            <p>Categories: ${job.categories.join(', ')}</p>
            <a href="#" class="apply-btn">Apply Now</a>
        `;
        
        // Append job card to the container
        jobContainer.appendChild(jobCard);
    });
}

// Call the function to load jobs when the page loads
document.addEventListener('DOMContentLoaded', displayJobs);
