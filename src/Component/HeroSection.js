import { useEffect } from 'react';
import './HeroSection.css';

// Import images
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';

const images = [image1, image2, image3, image4, image5, image6];

const HeroSection = () => {
  useEffect(() => {
    const stack = document.querySelector('.stack');
    const cards = Array.from(stack.children).reverse().filter((child) => child.classList.contains('card'));

    cards.forEach((card) => stack.appendChild(card));

    const moveCard = () => {
      const lastCard = stack.lastElementChild;
      if (lastCard.classList.contains('card')) {
        lastCard.classList.add('swap');
        setTimeout(() => {
          lastCard.classList.remove('swap');
          stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
      }
    };

    const autoplayInterval = setInterval(moveCard, 4000);

    const handleClick = (e) => {
      const card = e.target.closest('.card');
      if (card && card === stack.lastElementChild) {
        card.classList.add('swap');
        setTimeout(() => {
          card.classList.remove('swap');
          stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
      }
    };

    stack.addEventListener('click', handleClick);

    return () => {
      clearInterval(autoplayInterval);
      stack.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <main>
      <div className="content">
        <h1>FrontEnd Ace...</h1>
        <p>
          "Created a hero section with a Bootstrap `col-6` layout, featuring a 3D carousel on one side, providing a dynamic and visually immersive experience that draws users' attention."
        </p>
        <a href="https://nigammishra.github.io/Nigam_Portfolio2/">
          <button className="btn">Explore More</button>
        </a>
      </div>
      <div className="stack">
        {images.map((src, index) => (
          <div key={index} className="card">
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default HeroSection;
