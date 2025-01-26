// Ajouter un événement qui se déclenche lorsque le contenu de la page est complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Utiliser fetch() pour obtenir le fichier JSON contenant les informations des projets
    fetch('projects.json')
        // Convertir la réponse en format JSON
        .then(response => response.json())
        // Traiter les données JSON
        .then(data => {
            // Obtenir la div qui contiendra les cartes des projets
            const container = document.getElementById('projects-container');
            // Parcourir chaque projet dans les données
            data.projects.forEach(project => {
                // Créer une nouvelle div pour chaque projet
                const card = document.createElement('div');
                card.className = 'card flex flex-wrap p-6 bg-white/10 backdrop-filter backdrop-blur-lg border border-sky-900 rounded-lg shadow-lg m-4 w-5/12 hover:shadow-lg transition-shadow duration-200';

                // Créer la liste des technologies utilisées dans chaque projet
                const techList = project.techno.map(tech => {
                    let colorClass;
                    // Assigner une classe de couleur en fonction de la technologie
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
                        case 'Figma':
                            colorClass = 'font-semibold bg-purple-600';
                            break;
                        default:
                            colorClass = 'font-semibold bg-gray-800';
                    }
                    // Retourner une balise span contenant la technologie
                    return `<span class="text-white text-xs py-1 px-2 rounded ${colorClass} mr-2 mb-2">${tech}</span>`;
                }).join('');

                // Insérer le contenu HTML de la carte du projet
                card.innerHTML = `
                    <div class="w-full flex flex-wrap h-48 mb-4 flex items-center justify-center overflow-hidden">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full rounded-lg">
                    </div>
                    <h2 class="text-2xl font-bold text-sky-50 mb-2">${project.title}</h2>
                    <p class="text-gray-50 text-sm mb-4 hover:font-medium transition-all duration-200">${project.description}</p>
                    <div class="flex flex-wrap w-full mb-4">${techList}</div>
                    <div class="flex flex-wrap w-full justify-around mb-2">
                        <a href="${project.demoLink}" target="blank" class="text-gray-50 hover:underline">
                            <img src="./assets/logos/smallLink.svg" alt="Demo Link">
                        </a>
                        <a href="${project.githubLink}" target="blank" class="text-gray-50 hover:underline">
                            <img src="./assets/logos/smallGithub.svg" alt="GitHub Link">
                        </a>
                    </div>
                `;
                // Ajouter la carte au conteneur
                container.appendChild(card);
            });
        });
});
