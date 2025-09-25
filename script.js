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
    const contactText = `Email: khayredinegabsi@gmail.com
GitHub: https://github.com/KhayredineG
LinkedIn: https://www.linkedin.com/in/khayredine-gabsi`;

    const aboutMeElement = document.getElementById('about-me');
    const skillsElement = document.getElementById('skills');
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
            typeWriter(contactElement, contactText);
        });
    });
});
