// Nav menu button functionality

console.log("nav.js loaded");

const navLinktreeBtn = document.getElementById("nav-linktree");
const navAboutBtn = document.getElementById("nav-about");
const navExperienceBtn = document.getElementById("nav-experience");
const navSkillsBtn = document.getElementById("nav-skills");
const navProjectsBtn = document.getElementById("nav-projects");
const navContactBtn = document.getElementById("nav-contact");

// bootstrap tab buttons
const experienceTab = document.getElementById("experience-tab");
const skillsTab = document.getElementById("skills-tab");

navLinktreeBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

navAboutBtn.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

navExperienceBtn.addEventListener("click", () => {
    const experienceSkillsSection = document.getElementById("experience-skills");
    experienceSkillsSection.scrollIntoView({ behavior: 'smooth' });
    experienceTab.click();
});

navSkillsBtn.addEventListener("click", () => {
    const experienceSkillsSection = document.getElementById("experience-skills");
    experienceSkillsSection.scrollIntoView({ behavior: 'smooth' });
    skillsTab.click();
});

navProjectsBtn.addEventListener("click", () => {
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

navContactBtn.addEventListener("click", () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: 'smooth' });
});