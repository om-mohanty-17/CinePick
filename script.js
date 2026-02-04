// ==================== //
// Movie Data with IMDb Ratings
// ==================== //

const movies = [
    {
        title: "The Shawshank Redemption",
        genre: "drama",
        year: 1994,
        rating: 9.3,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80",
        progress: 0
    },
    {
        title: "Inception",
        genre: "sci-fi",
        year: 2010,
        rating: 8.8,
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=80",
        progress: 45
    },
    {
        title: "The Dark Knight",
        genre: "action",
        year: 2008,
        rating: 9.0,
        description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest tests to fight injustice.",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&q=80",
        progress: 67
    },
    {
        title: "Pulp Fiction",
        genre: "thriller",
        year: 1994,
        rating: 8.9,
        description: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80",
        progress: 23
    },
    {
        title: "Forrest Gump",
        genre: "drama",
        year: 1994,
        rating: 8.8,
        description: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.",
        poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=500&q=80",
        progress: 0
    },
    {
        title: "The Grand Budapest Hotel",
        genre: "comedy",
        year: 2014,
        rating: 8.1,
        description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.",
        poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&q=80",
        progress: 0
    },
    {
        title: "Spirited Away",
        genre: "animation",
        year: 2001,
        rating: 8.6,
        description: "During her family's move, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
        poster: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=500&q=80",
        progress: 0
    },
    {
        title: "Interstellar",
        genre: "sci-fi",
        year: 2014,
        rating: 8.7,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&q=80",
        progress: 89
    },
    {
        title: "Parasite",
        genre: "thriller",
        year: 2019,
        rating: 8.5,
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family.",
        poster: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2024/03/29150816/7IiTTgloJzvGI1TAYymCfbfl3vT-scaled.jpg",
        progress: 12
    },
    {
        title: "Mad Max: Fury Road",
        genre: "action",
        year: 2015,
        rating: 8.1,
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
        poster: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=500&q=80",
        progress: 0
    },
    {
        title: "The Grand Illusion",
        genre: "drama",
        year: 1937,
        rating: 8.1,
        description: "During WWI, two French soldiers are captured and imprisoned in a German POW camp. Several escape attempts follow.",
        poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=80",
        progress: 0
    },
    {
        title: "Your Name",
        genre: "animation",
        year: 2016,
        rating: 8.4,
        description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80",
        progress: 0
    },
    {
        title: "Superbad",
        genre: "comedy",
        year: 2007,
        rating: 7.6,
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&q=80",
        progress: 0
    },
    {
        title: "Blade Runner 2049",
        genre: "sci-fi",
        year: 2017,
        rating: 8.0,
        description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&q=80",
        progress: 34
    },
    {
        title: "Gone Girl",
        genre: "thriller",
        year: 2014,
        rating: 8.1,
        description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him.",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80",
        progress: 0
    },
    {
        title: "John Wick",
        genre: "action",
        year: 2014,
        rating: 7.4,
        description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        poster: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=500&q=80",
        progress: 56
    }
];

// ==================== //
// DOM Elements
// ==================== //

const heroSection = document.getElementById('heroSection');
const continueCarousel = document.getElementById('continueCarousel');
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const genreTags = document.querySelectorAll('.genre-tag');
const continuePrev = document.getElementById('continuePrev');
const continueNext = document.getElementById('continueNext');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.querySelector('.sidebar');

// ==================== //
// Hero Section
// ==================== //

function renderHero() {
    // Use the first movie as the hero
    const heroMovie = movies[0];
    
    heroSection.innerHTML = `
        <img src="${heroMovie.poster}" alt="${heroMovie.title}" class="hero-background">
        <div class="hero-overlay"></div>
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
                <div class="hero-language">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    ${heroMovie.year}
                </div>
                <div class="hero-language">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                    </svg>
                    ${capitalizeGenre(heroMovie.genre)}
                </div>
            </div>
            <div class="hero-actions">
                <button class="watch-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px; margin-right: 8px;">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Now
                </button>
            </div>
        </div>
    `;
}

// ==================== //
// Continue Watching Section
// ==================== //

function renderContinueWatching() {
    // Filter movies with progress > 0
    const continueMovies = movies.filter(movie => movie.progress > 0);
    
    continueMovies.forEach((movie, index) => {
        const continueCard = document.createElement('div');
        continueCard.className = 'continue-card';
        continueCard.style.animationDelay = `${index * 0.1}s`;
        
        continueCard.innerHTML = `
            <div class="continue-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${movie.progress}%"></div>
                </div>
            </div>
            <div class="continue-info">
                <h3 class="continue-title">${movie.title}</h3>
                <p class="continue-description">${movie.description}</p>
                <p class="continue-progress-text">${movie.progress}% completed</p>
            </div>
        `;
        
        continueCarousel.appendChild(continueCard);
    });
}

// Manual navigation for Continue Watching
continuePrev.addEventListener('click', () => {
    continueCarousel.scrollBy({
        left: -340,
        behavior: 'smooth'
    });
});

continueNext.addEventListener('click', () => {
    continueCarousel.scrollBy({
        left: 340,
        behavior: 'smooth'
    });
});

// Update button states based on scroll position
function updateCarouselButtons() {
    const scrollLeft = continueCarousel.scrollLeft;
    const maxScroll = continueCarousel.scrollWidth - continueCarousel.clientWidth;
    
    continuePrev.disabled = scrollLeft <= 0;
    continueNext.disabled = scrollLeft >= maxScroll - 1;
}

continueCarousel.addEventListener('scroll', updateCarouselButtons);

// ==================== //
// All Movies Grid
// ==================== //

function renderMovies(moviesToRender) {
    moviesGrid.innerHTML = '';
    
    if (moviesToRender.length === 0) {
        moviesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No movies found</p>';
        return;
    }
    
    moviesToRender.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.style.animationDelay = `${index * 0.05}s`;
        
        movieCard.innerHTML = `
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-rating">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    ${movie.rating}
                </div>
                <div class="movie-year">${movie.year}</div>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-genre">${capitalizeGenre(movie.genre)}</p>
                <p class="movie-description">${movie.description}</p>
            </div>
        `;
        
        moviesGrid.appendChild(movieCard);
    });
}

// ==================== //
// Genre Filter
// ==================== //

let currentGenre = 'all';
let searchQuery = '';

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
        // Remove active class from all tags
        genreTags.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tag
        tag.classList.add('active');
        
        // Update current genre
        currentGenre = tag.getAttribute('data-genre');
        
        // Filter and render
        filterAndRenderMovies();
    });
});

// ==================== //
// Search Functionality
// ==================== //

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    filterAndRenderMovies();
});

// ==================== //
// Helper Functions
// ==================== //

function capitalizeGenre(genre) {
    if (genre === 'sci-fi') return 'Sci-Fi';
    return genre.charAt(0).toUpperCase() + genre.slice(1);
}

// ==================== //
// Mobile Sidebar Toggle
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
// Smooth Scrolling
// ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only process if href is more than just '#'
        if (href && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== //
// Intersection Observer for Animations
// ==================== //

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.continue-section, .all-movies-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// ==================== //
// Initialize Everything
// ==================== //

document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderContinueWatching();
    renderMovies(movies);
    updateCarouselButtons();
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    updateCarouselButtons();
    
    // Close sidebar on desktop
    if (window.innerWidth >= 992) {
        sidebar.classList.remove('active');
    }
});

// ==================== //
// Keyboard Navigation
// ==================== //

document.addEventListener('keydown', (e) => {
    // Arrow keys for carousel navigation
    if (e.key === 'ArrowLeft' && document.activeElement.closest('.continue-carousel-wrapper')) {
        continuePrev.click();
    } else if (e.key === 'ArrowRight' && document.activeElement.closest('.continue-carousel-wrapper')) {
        continueNext.click();
    }
    
    // Escape to close sidebar
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// ==================== //
// Performance Optimization
// ==================== //

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => imageObserver.observe(img));
    });
}