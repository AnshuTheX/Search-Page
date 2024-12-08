const data = [
    { title: "The Dark Knight", category: "action", content: "A superhero action movie with intense drama and action.", image: "https://via.placeholder.com/200x300.png?text=The+Dark+Knight" },
    { title: "The Hangover", category: "comedy", content: "A comedy about a bachelor party gone wrong.", image: "https://via.placeholder.com/200x300.png?text=The+Hangover" },
    { title: "The Pursuit of Happyness", category: "drama", content: "An emotional story about a man striving for success.", image: "https://via.placeholder.com/200x300.png?text=The+Pursuit+of+Happyness" },
    { title: "Mad Max: Fury Road", category: "action", content: "A post-apocalyptic action movie with high-speed chases.", image: "https://via.placeholder.com/200x300.png?text=Mad+Max+Fury+Road" },
    { title: "Superbad", category: "comedy", content: "A coming-of-age comedy about high school life.", image: "https://via.placeholder.com/200x300.png?text=Superbad" },
    { title: "Forrest Gump", category: "drama", content: "A man's extraordinary life as seen through his experiences.", image: "https://via.placeholder.com/200x300.png?text=Forrest+Gump" }
];

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('category');
const resultsContainer = document.getElementById('results');

function searchAndFilter() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredData = data.filter(item => {
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm) || item.content.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearchTerm;
    });

    displayResults(filteredData);
}

function displayResults(results) {
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <img src="${result.image}" alt="${result.title}">
                <h3>${result.title}</h3>
                <p>${result.content.substring(0, 100)}...</p>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }
}

searchInput.addEventListener('input', searchAndFilter);
categoryFilter.addEventListener('change', searchAndFilter);

searchAndFilter();
