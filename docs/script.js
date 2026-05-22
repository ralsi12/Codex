const storyProjects = {
    healthcare: {
        title: 'Personal Wellness Trend Tracker',
        desc: 'Collect daily mood, sleep, and study data, then visualize patterns and suggest healthier routines.',
        skills: ['CSV', 'Charts', 'Data Cleaning', 'Reflection'],
        steps: [
            'Build the basic tracker and save entries locally.',
            'Add charts, filters, and summary statistics.',
            'Write the application story: problem, initiative, impact, next step.'
        ],
        link: 'lesson-preview.html?module=8'
    },
    sports: {
        title: 'Team Performance Scout',
        desc: 'Analyze game stats to find player trends, compare matchups, and recommend practice priorities.',
        skills: ['APIs', 'Dictionaries', 'Functions', 'Visualization'],
        steps: [
            'Import or enter match statistics for a team or player.',
            'Rank strengths, weaknesses, and improvement areas.',
            'Explain how the tool turns sports curiosity into data-backed insight.'
        ],
        link: 'lesson-preview.html?module=8'
    },
    music: {
        title: 'Practice Session Analyzer',
        desc: 'Track practice time, piece difficulty, and confidence scores to reveal what actually improves performance.',
        skills: ['Files', 'OOP', 'Charts', 'UX'],
        steps: [
            'Log sessions with instrument, piece, duration, and notes.',
            'Create weekly summaries and progress charts.',
            'Frame the project around discipline, iteration, and creative problem-solving.'
        ],
        link: 'lesson-preview.html?module=6'
    },
    climate: {
        title: 'Local Climate Data Dashboard',
        desc: 'Fetch public weather or air-quality data and turn it into a readable dashboard for your community.',
        skills: ['Requests', 'JSON', 'APIs', 'Deployment'],
        steps: [
            'Pull real data from a public API and clean the response.',
            'Build filters for date, location, and metric comparisons.',
            'Show impact by connecting the dashboard to a local question.'
        ],
        link: 'lesson-preview.html?module=8'
    },
    school: {
        title: 'Homework Load Planner',
        desc: 'Estimate assignment workload, deadline risk, and study blocks so students can plan a healthier week.',
        skills: ['Control Flow', 'Lists', 'Testing', 'Documentation'],
        steps: [
            'Create a planner that stores assignments and deadlines.',
            'Add priority scoring, reminders, and edge-case tests.',
            'Describe the user problem and how feedback changed the design.'
        ],
        link: 'lesson-preview.html?module=4'
    }
};

// Scroll reveal

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((e, i) => {

    if (e.isIntersecting) {

        setTimeout(() => e.target.classList.add('visible'), i * 80);

        observer.unobserve(e.target);

    }

    });

}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));



// Choose-your-story project finder

const storyControls = document.getElementById('storyControls');
const storyTitle = document.getElementById('storyTitle');
const storyDesc = document.getElementById('storyDesc');
const storySkills = document.getElementById('storySkills');
const storyCard = document.getElementById('storyCard');

function renderStory(storyKey) {
    const project = storyProjects[storyKey];
    if (!project || !storyCard) return;

    storyTitle.textContent = project.title;
    storyDesc.textContent = project.desc;
    storySkills.innerHTML = project.skills.map(skill => `<span>${skill}</span>`).join('');
    storyCard.querySelectorAll('.story-steps p').forEach((step, index) => {
        step.textContent = project.steps[index];
    });
    storyCard.querySelector('.preview-link').href = project.link;
}

if (storyControls) {
    storyControls.addEventListener('click', (event) => {
        const button = event.target.closest('.story-chip');
        if (!button) return;

        storyControls.querySelectorAll('.story-chip').forEach(chip => chip.classList.remove('active'));
        button.classList.add('active');
        renderStory(button.dataset.story);
    });
}



// Module card click → lesson preview

const moduleIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

document.querySelectorAll('.module-card').forEach((card, i) => {

    const id = moduleIds[i] ?? i + 1;

    card.addEventListener('click', () => {

    window.location.href = `lesson-preview.html?module=${id}`;

    });

});
