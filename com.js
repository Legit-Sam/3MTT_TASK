document.addEventListener('DOMContentLoaded', function() {
    const companyData = {
        overview: "Welcome to Confluence Career, a dynamic job portal founded by the innovative 3MTT Cohort 2 Fellows in October 2024. Located at Startechone ALC in Lokoja, Kogi State, Nigeria, we are dedicated to connecting job seekers within Kogi State’s 21 local government areas with their dream opportunities and employers with their ideal candidates.",
        mission: "Our mission is to bridge the gap between talent and opportunity within Kogi State, ensuring everyone in our local communities finds a fulfilling career path. We envision a future where job searching is seamless and efficient, helping both job seekers and employers thrive.",
        history: "Founded in October 2024, Confluence Career emerged from the creative minds of the 3MTT Cohort 2 Fellows. Recognizing the need for a more effective job platform, they established Confluence Career at Startechone ALC. Today, we proudly serve a growing community of job seekers and employers within Kogi State, facilitating numerous successful matches.",
        services: "We specialize in job offerings and seeking services, exclusively for candidates from Kogi State’s 21 local government areas:\n\n- Job Listings: A comprehensive database of job opportunities across various industries within Kogi State.\n- Resume Building: Tools and resources to help job seekers create standout resumes.\n- Career Advice: Expert tips and guidance on job searching, interview preparation, and career development.",
        values: "At Confluence Career, we value:\n\n- Innovation: Continuously improving our platform to better serve our users.\n- Integrity: Ensuring transparency and honesty in all our interactions.\n- Community: Building a supportive network for job seekers and employers within Kogi State.\n\nOur culture is centered around collaboration, creativity, and a commitment to making a positive impact in the job market.",
        team: "Meet our team of dedicated professionals:\n\n- Founder: 3MTT Cohort 2 Fellows - A group of visionary individuals with a passion for career development and technology.\n- Team Members: Our team of 8 skilled professionals works tirelessly to ensure the success of our platform and the satisfaction of our users.",
        contact: "Interested in finding your dream job or hiring the perfect candidate within Kogi State? Contact us at info@confluencecareer.com or follow us on social media for the latest updates and opportunities."
    };

    document.getElementById('overview-content').textContent = companyData.overview;
    document.getElementById('mission-content').textContent = companyData.mission;
    document.getElementById('history-content').textContent = companyData.history;
    document.getElementById('services-content').textContent = companyData.services;
    document.getElementById('values-content').textContent = companyData.values;
    document.getElementById('team-content').textContent = companyData.team;
    document.getElementById('contact-content').textContent = companyData.contact;
});