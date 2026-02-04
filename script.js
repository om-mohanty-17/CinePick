// ==================== //
// Movie Data
// ==================== //

const movies = [
    {
        title: "The Shawshank Redemption",
        genre: "drama",
        year: 1994,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&q=80"
    },
    {
        title: "Inception",
        genre: "sci-fi",
        year: 2010,
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=80"
    },
    {
        title: "The Dark Knight",
        genre: "action",
        year: 2008,
        description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest tests to fight injustice.",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&q=80"
    },
    {
        title: "Pulp Fiction",
        genre: "thriller",
        year: 1994,
        description: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80"
    },
    {
        title: "Forrest Gump",
        genre: "drama",
        year: 1994,
        description: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.",
        poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=500&q=80"
    },
    {
        title: "The Grand Budapest Hotel",
        genre: "comedy",
        year: 2014,
        description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.",
        poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&q=80"
    },
    {
        title: "Spirited Away",
        genre: "animation",
        year: 2001,
        description: "During her family's move, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
        poster: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=500&q=80"
    },
    {
        title: "Interstellar",
        genre: "sci-fi",
        year: 2014,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&q=80"
    },
    {
        title: "Parasite",
        genre: "thriller",
        year: 2019,
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family.",
        poster: "https://images.unsplash.com/photo-1574267432644-f610a52f60e9?w=500&q=80"
    },
    {
        title: "Mad Max: Fury Road",
        genre: "action",
        year: 2015,
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
        poster: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=500&q=80"
    },
    {
        title: "The Grand Illusion",
        genre: "drama",
        year: 1937,
        description: "During WWI, two French soldiers are captured and imprisoned in a German POW camp. Several escape attempts follow.",
        poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=80"
    },
    {
        title: "Your Name",
        genre: "animation",
        year: 2016,
        description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80"
    },
    {
        title: "Superbad",
        genre: "comedy",
        year: 2007,
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&q=80"
    },
    {
        title: "Blade Runner 2049",
        genre: "sci-fi",
        year: 2017,
        description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&q=80"
    },
    {
        title: "Gone Girl",
        genre: "thriller",
        year: 2014,
        description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him.",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80"
    },
    {
        title: "John Wick",
        genre: "action",
        year: 2014,
        description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        poster: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=500&q=80"
    }
];

// ==================== //
// DOM Elements
// ==================== //

const moviesGrid = document.getElementById('moviesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const featuredCarousel = document.getElementById('featuredCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// ==================== //
// Render Movies Function
// ==================== //

function renderMovies(moviesToRender) {
    // Clear existing content
    moviesGrid.innerHTML = '';
    
    // Check if there are movies to render
    if (moviesToRender.length === 0) {
        moviesGrid.innerHTML = '<div class="no-results">No movies found for this genre 🎬</div>';
        return;
    }
    
    // Create and append movie cards
    moviesToRender.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.style.animationDelay = `${index * 0.1}s`;
        
        movieCard.innerHTML = `
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <span class="genre-badge">${movie.genre}</span>
                <span class="year-badge">${movie.year}</span>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-description">${movie.description}</p>
            </div>
        `;
        
        moviesGrid.appendChild(movieCard);
    });
}

// ==================== //
// Carousel Functions
// ==================== //

let currentSlide = 0;
let autoScrollInterval;
const slideWidth = 315; // card width (300px) + gap (15px)

function renderCarousel() {
    // Select first 8 movies for featured carousel
    const featuredMovies = movies.slice(0, 8);
    
    featuredCarousel.innerHTML = '';
    
    featuredMovies.forEach(movie => {
        const carouselCard = document.createElement('div');
        carouselCard.className = 'carousel-card';
        
        carouselCard.innerHTML = `
            <div class="carousel-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
            </div>
            <div class="carousel-info">
                <h3 class="carousel-title">${movie.title}</h3>
                <div class="carousel-meta">
                    <span class="carousel-genre">${movie.genre}</span>
                    <span>•</span>
                    <span>${movie.year}</span>
                </div>
            </div>
        `;
        
        featuredCarousel.appendChild(carouselCard);
    });
}

function scrollCarousel(direction) {
    const maxSlide = Math.max(0, featuredCarousel.children.length - Math.floor(featuredCarousel.parentElement.offsetWidth / slideWidth));
    
    if (direction === 'next') {
        currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
    } else {
        currentSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1;
    }
    
    featuredCarousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        scrollCarousel('next');
    }, 3000); // Auto-scroll every 3 seconds
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// ==================== //
// Filter Functionality
// ==================== //

function filterMovies(genre) {
    let filteredMovies;
    
    if (genre === 'all') {
        filteredMovies = movies;
    } else {
        filteredMovies = movies.filter(movie => movie.genre === genre);
    }
    
    // Add fade-out effect
    moviesGrid.style.opacity = '0';
    moviesGrid.style.transform = 'translateY(20px)';
    
    // Render filtered movies after animation
    setTimeout(() => {
        renderMovies(filteredMovies);
        
        // Add fade-in effect
        setTimeout(() => {
            moviesGrid.style.opacity = '1';
            moviesGrid.style.transform = 'translateY(0)';
        }, 50);
    }, 300);
}

// ==================== //
// Event Listeners
// ==================== //

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the genre and filter movies
        const genre = button.getAttribute('data-genre');
        filterMovies(genre);
    });
});

// ==================== //
// Initialize - Render all movies on load
// ==================== //

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth transition properties to movies grid
    moviesGrid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    // Render carousel
    renderCarousel();
    
    // Render all movies initially
    renderMovies(movies);
    
    // Start auto-scroll
    startAutoScroll();
    
    // Pause auto-scroll on hover
    featuredCarousel.parentElement.addEventListener('mouseenter', stopAutoScroll);
    featuredCarousel.parentElement.addEventListener('mouseleave', startAutoScroll);
});

// Carousel Navigation Buttons
prevBtn.addEventListener('click', () => {
    stopAutoScroll();
    scrollCarousel('prev');
    startAutoScroll();
});

nextBtn.addEventListener('click', () => {
    stopAutoScroll();
    scrollCarousel('next');
    startAutoScroll();
});

// ==================== //
// Add scroll animation for header
// ==================== //

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.transform = 'translateY(-10px)';
        header.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.7)';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    }
});

// ==================== //
// Add parallax effect to header
// ==================== //

window.addEventListener('mousemove', (e) => {
    const header = document.querySelector('.header-content');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    header.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
});