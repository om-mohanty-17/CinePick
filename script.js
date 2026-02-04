// ==================== //
// Movie Data with IMDb Ratings
// ==================== //

const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: "drama",
        year: 1994,
        rating: 9.3,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
        progress: 0,
        featured: true
    },
    {
        id: 2,
        title: "Inception",
        genre: "sci-fi",
        year: 2010,
        rating: 8.8,
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=80",
        progress: 45,
        featured: true
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "action",
        year: 2008,
        rating: 9.0,
        description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest tests to fight injustice.",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&q=80",
        progress: 67,
        featured: true
    },
    {
        id: 4,
        title: "Pulp Fiction",
        genre: "thriller",
        year: 1994,
        rating: 8.9,
        description: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80",
        progress: 23,
        featured: true
    },
    {
        id: 5,
        title: "Forrest Gump",
        genre: "drama",
        year: 1994,
        rating: 8.8,
        description: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.",
        poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=500&q=80",
        progress: 0,
        featured: false
    },
    {
        id: 6,
        title: "The Grand Budapest Hotel",
        genre: "comedy",
        year: 2014,
        rating: 8.1,
        description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.",
        poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&q=80",
        progress: 0,
        featured: false
    },
    {
        id: 7,
        title: "Spirited Away",
        genre: "animation",
        year: 2001,
        rating: 8.6,
        description: "During her family's move, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
        poster: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=500&q=80",
        progress: 0,
        featured: false
    },
    {
        id: 8,
        title: "Interstellar",
        genre: "sci-fi",
        year: 2014,
        rating: 8.7,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&q=80",
        progress: 89,
        featured: true
    },
    {
        id: 9,
        title: "Parasite",
        genre: "thriller",
        year: 2019,
        rating: 8.5,
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family.",
        poster: "https://images.unsplash.com/photo-1574267432644-f610a52f60e9?w=500&q=80",
        progress: 12,
        featured: true
    },
    {
        id: 10,
        title: "Mad Max: Fury Road",
        genre: "action",
        year: 2015,
        rating: 8.1,
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
        poster: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=500&q=80",
        progress: 0,
        featured: false
    },
    {
        id: 11,
        title: "The Grand Illusion",
        genre: "drama",
        year: 1937,
        rating: 8.1,
        description: "During WWI, two French soldiers are captured and imprisoned in a German POW camp. Several escape attempts follow.",
        poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=80",
        progress: 0,
        featured: false
    },
    {
        id: 12,
        title: "Your Name",
        genre: "animation",
        year: 2016,
        rating: 8.4,
        description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80",
        progress: 0,
        featured: false
    },
    {
        id: 13,
        title: "Superbad",
        genre: "comedy",
        year: 2007,
        rating: 7.6,
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&q=80",
        progress: 0,
        featured: false
    },
    {
        id: 14,
        title: "Blade Runner 2049",
        genre: "sci-fi",
        year: 2017,
        rating: 8.0,
        description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&q=80",
        progress: 34,
        featured: false
    },
    {
        id: 15,
        title: "Gone Girl",
        genre: "thriller",
        year: 2014,
        rating: 8.1,
        description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him.",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80",
        progress: 0,
        featured: false
    },
    {
        id: 16,
        title: "John Wick",
        genre: "action",
        year: 2014,
        rating: 7.4,
        description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        poster: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=500&q=80",
        progress: 56,
        featured: false
    }
];

// ==================== //
// State Management
// ==================== //

let currentHeroIndex = 0;
let heroAutoScrollInterval;
let currentView = 'browse'; // browse, watchlist, coming-soon, profile, all-movies, genres, top-rated
let currentGenre = 'all';
let searchQuery = '';
let watchlist = [];
let comingSoonMovies = [5, 6, 7, 12]; // Movie IDs for coming soon

// ==================== //
// DOM Elements
// ==================== //

const heroSection = document.getElementById('heroSection');
const continueCarousel = document.getElementById('continueCarousel');
const recommendationsCarousel = document.getElementById('recommendationsCarousel');
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const genreTags = document.querySelectorAll('.genre-tag');
const navLinks = document.querySelectorAll('.nav-link');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.querySelector('.sidebar');

// Carousel controls
const continuePrev = document.getElementById('continuePrev');
const continueNext = document.getElementById('continueNext');
const recommendPrev = document.getElementById('recommendPrev');
const recommendNext = document.getElementById('recommendNext');

// ==================== //
// Hero Section with Auto-Scroll
// ==================== //

function renderHero() {
    const featuredMovies = movies.filter(m => m.featured);
    const heroMovie = featuredMovies[currentHeroIndex];
    
    heroSection.innerHTML = `
        <div class="hero-background-wrapper">
            <img src="${heroMovie.poster}" alt="${heroMovie.title}" class="hero-background">
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <h1 class="hero-title">${heroMovie.title}</h1>
            <p class="hero-description">${heroMovie.description}</p>
            <div class="hero-meta">
                <div class="imdb-rating">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    ${heroMovie.rating}
                </div>
                <div class="hero-year">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    ${heroMovie.year}
                </div>
                <div class="hero-genre">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                    </svg>
                    ${capitalizeGenre(heroMovie.genre)}
                </div>
            </div>
            <div class="hero-actions">
                <button class="watch-btn" onclick="playMovie(${heroMovie.id})">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Now
                </button>
                <button class="add-to-watchlist-btn" onclick="toggleWatchlist(${heroMovie.id})">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    ${watchlist.includes(heroMovie.id) ? 'In Watchlist' : 'Add to Watchlist'}
                </button>
            </div>
        </div>
        <div class="hero-indicators">
            ${featuredMovies.map((_, index) => `
                <button class="hero-indicator ${index === currentHeroIndex ? 'active' : ''}" 
                        onclick="goToHeroSlide(${index})"></button>
            `).join('')}
        </div>
    `;
}

function nextHeroSlide() {
    const featuredMovies = movies.filter(m => m.featured);
    currentHeroIndex = (currentHeroIndex + 1) % featuredMovies.length;
    renderHero();
}

function goToHeroSlide(index) {
    currentHeroIndex = index;
    renderHero();
    resetHeroAutoScroll();
}

function startHeroAutoScroll() {
    heroAutoScrollInterval = setInterval(nextHeroSlide, 5000); // Change every 5 seconds
}

function resetHeroAutoScroll() {
    clearInterval(heroAutoScrollInterval);
    startHeroAutoScroll();
}

// ==================== //
// Continue Watching Section
// ==================== //

function renderContinueWatching() {
    const continueMovies = movies.filter(movie => movie.progress > 0);
    
    if (continueMovies.length === 0) {
        continueCarousel.innerHTML = '<p class="empty-message">No movies in progress. Start watching something!</p>';
        return;
    }
    
    continueCarousel.innerHTML = '';
    
    continueMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'continue-card';
        card.onclick = () => playMovie(movie.id);
        
        card.innerHTML = `
            <div class="continue-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${movie.progress}%"></div>
                </div>
                <div class="play-overlay">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
            <div class="continue-info">
                <h4>${movie.title}</h4>
                <p>${movie.progress}% watched</p>
            </div>
        `;
        
        continueCarousel.appendChild(card);
    });
}

// Scroll controls for Continue Watching
continuePrev.addEventListener('click', () => {
    continueCarousel.scrollBy({ left: -350, behavior: 'smooth' });
});

continueNext.addEventListener('click', () => {
    continueCarousel.scrollBy({ left: 350, behavior: 'smooth' });
});

// ==================== //
// Recommended Section
// ==================== //

function renderRecommendations() {
    const recommendedMovies = movies.filter(m => m.rating >= 8.0);
    
    recommendationsCarousel.innerHTML = '';
    
    recommendedMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'recommend-card';
        card.onclick = () => showMovieDetails(movie.id);
        
        card.innerHTML = `
            <div class="recommend-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-rating">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    ${movie.rating}
                </div>
            </div>
            <div class="recommend-info">
                <h4>${movie.title}</h4>
                <p>${movie.year} • ${capitalizeGenre(movie.genre)}</p>
            </div>
        `;
        
        recommendationsCarousel.appendChild(card);
    });
}

// Scroll controls for Recommendations
recommendPrev.addEventListener('click', () => {
    recommendationsCarousel.scrollBy({ left: -350, behavior: 'smooth' });
});

recommendNext.addEventListener('click', () => {
    recommendationsCarousel.scrollBy({ left: 350, behavior: 'smooth' });
});

// ==================== //
// All Movies Grid
// ==================== //

function renderMovies(moviesToRender) {
    moviesGrid.innerHTML = '';
    
    if (moviesToRender.length === 0) {
        moviesGrid.innerHTML = '<p class="empty-message" style="grid-column: 1/-1;">No movies found</p>';
        return;
    }
    
    moviesToRender.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.onclick = () => showMovieDetails(movie.id);
        
        card.innerHTML = `
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-rating">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    ${movie.rating}
                </div>
                <div class="movie-year">${movie.year}</div>
                <div class="play-overlay">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-genre">${capitalizeGenre(movie.genre)}</p>
            </div>
        `;
        
        moviesGrid.appendChild(card);
    });
}

// ==================== //
// Navigation Functions
// ==================== //

function setActiveNav(clickedLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');
}

function showBrowse() {
    currentView = 'browse';
    document.querySelector('.hero-section').style.display = 'block';
    document.querySelector('.continue-section').style.display = 'block';
    document.querySelector('.recommendations-section').style.display = 'block';
    document.querySelector('.all-movies-section').style.display = 'block';
    
    renderMovies(movies);
}

function showWatchlist() {
    currentView = 'watchlist';
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.continue-section').style.display = 'none';
    document.querySelector('.recommendations-section').style.display = 'none';
    document.querySelector('.all-movies-section').style.display = 'block';
    
    const watchlistMovies = movies.filter(m => watchlist.includes(m.id));
    
    if (watchlistMovies.length === 0) {
        moviesGrid.innerHTML = '<p class="empty-message" style="grid-column: 1/-1; padding: 60px; text-align: center;">Your watchlist is empty. Add some movies!</p>';
    } else {
        renderMovies(watchlistMovies);
    }
}

function showComingSoon() {
    currentView = 'coming-soon';
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.continue-section').style.display = 'none';
    document.querySelector('.recommendations-section').style.display = 'none';
    document.querySelector('.all-movies-section').style.display = 'block';
    
    const comingSoon = movies.filter(m => comingSoonMovies.includes(m.id));
    renderMovies(comingSoon);
}

function showProfile() {
    currentView = 'profile';
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.continue-section').style.display = 'none';
    document.querySelector('.recommendations-section').style.display = 'none';
    document.querySelector('.all-movies-section').style.display = 'block';
    
    moviesGrid.innerHTML = `
        <div class="profile-view" style="grid-column: 1/-1; padding: 40px;">
            <h2 style="margin-bottom: 20px;">My Profile</h2>
            <div class="profile-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px;">
                <div class="stat-card" style="background: var(--card-bg); padding: 20px; border-radius: 12px;">
                    <h3>Movies Watched</h3>
                    <p style="font-size: 2rem; font-weight: 700; color: var(--primary-red);">${movies.filter(m => m.progress === 100 || m.progress > 90).length}</p>
                </div>
                <div class="stat-card" style="background: var(--card-bg); padding: 20px; border-radius: 12px;">
                    <h3>In Progress</h3>
                    <p style="font-size: 2rem; font-weight: 700; color: var(--primary-red);">${movies.filter(m => m.progress > 0 && m.progress < 90).length}</p>
                </div>
                <div class="stat-card" style="background: var(--card-bg); padding: 20px; border-radius: 12px;">
                    <h3>Watchlist</h3>
                    <p style="font-size: 2rem; font-weight: 700; color: var(--primary-red);">${watchlist.length}</p>
                </div>
            </div>
        </div>
    `;
}

function showAllMovies() {
    currentView = 'all-movies';
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.continue-section').style.display = 'none';
    document.querySelector('.recommendations-section').style.display = 'none';
    document.querySelector('.all-movies-section').style.display = 'block';
    
    renderMovies(movies);
}

function showGenres() {
    currentView = 'genres';
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.continue-section').style.display = 'none';
    document.querySelector('.recommendations-section').style.display = 'none';
    document.querySelector('.all-movies-section').style.display = 'block';
    
    // Group movies by genre
    const genres = {};
    movies.forEach(movie => {
        if (!genres[movie.genre]) {
            genres[movie.genre] = [];
        }
        genres[movie.genre].push(movie);
    });
    
    moviesGrid.innerHTML = Object.entries(genres).map(([genre, genreMovies]) => `
        <div class="genre-section" style="grid-column: 1/-1; margin-bottom: 40px;">
            <h2 style="margin-bottom: 20px;">${capitalizeGenre(genre)}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
                ${genreMovies.map(movie => `
                    <div class="movie-card" onclick="showMovieDetails(${movie.id})">
                        <div class="movie-poster">
                            <img src="${movie.poster}" alt="${movie.title}">
                            <div class="movie-rating">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                </svg>
                                ${movie.rating}
                            </div>
                        </div>
                        <div class="movie-info">
                            <h3>${movie.title}</h3>
                            <p>${movie.year}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function showTopRated() {
    currentView = 'top-rated';
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.continue-section').style.display = 'none';
    document.querySelector('.recommendations-section').style.display = 'none';
    document.querySelector('.all-movies-section').style.display = 'block';
    
    const topRated = [...movies].sort((a, b) => b.rating - a.rating);
    renderMovies(topRated);
}

// ==================== //
// Genre Filter
// ==================== //

function filterAndRenderMovies() {
    let filteredMovies = movies;
    
    // Filter by genre
    if (currentGenre !== 'all') {
        filteredMovies = filteredMovies.filter(movie => movie.genre === currentGenre);
    }
    
    // Filter by search query
    if (searchQuery) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    renderMovies(filteredMovies);
}

genreTags.forEach(tag => {
    tag.addEventListener('click', () => {
        genreTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        
        currentGenre = tag.getAttribute('data-genre');
        filterAndRenderMovies();
    });
});

// ==================== //
// Search Functionality
// ==================== //

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    
    // If in browse mode, filter the current view
    if (currentView === 'browse' || currentView === 'all-movies') {
        filterAndRenderMovies();
    }
});

// ==================== //
// Navigation Event Listeners
// ==================== //

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveNav(link);
        
        const linkText = link.textContent.trim();
        
        switch(linkText) {
            case 'Browse':
                showBrowse();
                break;
            case 'Watchlist':
                showWatchlist();
                break;
            case 'Coming Soon':
                showComingSoon();
                break;
            case 'My Profile':
                showProfile();
                break;
            case 'All Movies':
                showAllMovies();
                break;
            case 'Genres':
                showGenres();
                break;
            case 'Top Rated':
                showTopRated();
                break;
        }
        
        // Close sidebar on mobile
        if (window.innerWidth < 992) {
            sidebar.classList.remove('active');
        }
    });
});

// ==================== //
// Movie Actions
// ==================== //

function playMovie(movieId) {
    const movie = movies.find(m => m.id === movieId);
    alert(`Playing: ${movie.title}\n\nThis would start the movie player in a real app.`);
}

function showMovieDetails(movieId) {
    const movie = movies.find(m => m.id === movieId);
    alert(`${movie.title}\n\nRating: ${movie.rating}/10\nYear: ${movie.year}\nGenre: ${capitalizeGenre(movie.genre)}\n\n${movie.description}\n\n(In a real app, this would open a detailed view)`);
}

function toggleWatchlist(movieId) {
    const index = watchlist.indexOf(movieId);
    
    if (index > -1) {
        watchlist.splice(index, 1);
        alert('Removed from watchlist!');
    } else {
        watchlist.push(movieId);
        alert('Added to watchlist!');
    }
    
    // Re-render if in hero
    if (document.querySelector('.hero-content')) {
        renderHero();
    }
}

// ==================== //
// Mobile Menu
// ==================== //

hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth < 992) {
        if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ==================== //
// Helper Functions
// ==================== //

function capitalizeGenre(genre) {
    if (genre === 'sci-fi') return 'Sci-Fi';
    return genre.charAt(0).toUpperCase() + genre.slice(1);
}

// ==================== //
// Initialize Everything
// ==================== //

document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderContinueWatching();
    renderRecommendations();
    renderMovies(movies);
    startHeroAutoScroll();
    
    // Pause hero auto-scroll on hover
    heroSection.addEventListener('mouseenter', () => {
        clearInterval(heroAutoScrollInterval);
    });
    
    heroSection.addEventListener('mouseleave', () => {
        startHeroAutoScroll();
    });
});

// ==================== //
// Smooth Scrolling
// ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});