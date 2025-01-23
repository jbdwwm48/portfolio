document.addEventListener("DOMContentLoaded", () => {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('projects-container');
            data.projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'card p-6 bg-white/5 backdrop-filter backdrop-blur-lg border-2 border-sky-50 rounded-lg shadow-lg m-4 w-5/12 hover:shadow-lg transition-shadow duration-200';

                const techList = project.techno.map(tech => {
                    let colorClass;
                    switch(tech) {
                        case 'HTML5':
                            colorClass = 'font-semibold bg-red-400';
                            break;
                        case 'CSS':
                            colorClass = 'font-semibold bg-sky-500';
                            break;
                        case 'TailwindCSS':
                            colorClass = 'font-semibold bg-teal-500';
                            break;
                        case 'JavaScript':
                            colorClass = 'font-semibold bg-yellow-500';
                            break;
                        default:
                            colorClass = 'font-semibold bg-gray-900';
                    }
                    return `<span class="text-white text-xs py-1 px-2 rounded ${colorClass} mr-2 mb-2">${tech}</span>`;
                }).join('');

                card.innerHTML = `
                    <div class="w-full h-48 mb-4 flex items-center justify-center overflow-hidden">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full rounded-sm">
                    </div>
                    <h2 class="text-2xl font-bold text-sky-50 mb-2">${project.title}</h2>
                    <p class="text-gray-50 text-sm mb-4 hover:font-medium transition-all duration-200">${project.description}</p>
                    <div class="flex flex-wrap mb-4">${techList}</div>
                    <a href="${project.demoLink}" class="text-gray-50 hover:underline mb-2 block"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M352 224l-46.5 0c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8l-2.5 0c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144l80 0 0-61.3C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2l-3.7 0c-17.7 0-32-14.3-32-32l0-64zM80 96c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 112C0 67.8 35.8 32 80 32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 96z"/></svg></a>
                    <a href="${project.githubLink}" class="text-gray-50 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 496 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                `;

                container.appendChild(card);
            });
        });
});
