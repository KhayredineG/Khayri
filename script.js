document.addEventListener('DOMContentLoaded', () => {
    const aboutMeText = "Hello, I'm Mohamed Khayredine Gabsi, a data scientist and web developer. Welcome to my portfolio.";
    const skillsText = `Languages:
- Python, JavaScript, SQL, Rust

Data Science:
- Numpy, Pandas, Scikit-learn

Web Development:
- Next.js, Tailwind CSS, React.js

Data Visualization:
- Power BI, Matplotlib`;
    const projectsText = `Featured Projects:

CLI Todo:
- Command-line todo application built with Rust
- Features task management, persistence, and filtering
- <button onclick="window.open('https://github.com/KhayredineG/CLITodo', '_blank')" class="project-button">View on GitHub</button>

Data Analysis Dashboard:
- Python-based data visualization
- Interactive charts and graphs
- Real-time data processing

Machine Learning Model:
- Predictive analytics project
- Scikit-learn implementation
- Data preprocessing and feature engineering`;
    const contactText = `Email: <a href="mailto:khayredinegabsi@gmail.com">khayredinegabsi@gmail.com</a>
GitHub: <a href="https://github.com/KhayredineG" target="_blank">GitHub Profile</a>
LinkedIn: <a href="https://www.linkedin.com/in/khayredine-gabsi" target="_blank">LinkedIn Profile</a>`;

    const aboutMeElement = document.getElementById('about-me');
    const skillsElement = document.getElementById('skills');
    const projectsElement = document.getElementById('projects');
    const contactElement = document.getElementById('contact');

    function typeWriter(element, text, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 25);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    typeWriter(aboutMeElement, aboutMeText, () => {
        typeWriter(skillsElement, skillsText, () => {
            projectsElement.innerHTML = projectsText;
            contactElement.innerHTML = contactText;
        });
    });
});
