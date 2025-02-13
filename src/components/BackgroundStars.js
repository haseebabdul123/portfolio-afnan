import React, { useEffect } from 'react';
import './style/global.css'

const BackgroundStars = () => {
    useEffect(() => {
        const starContainer = document.querySelector(".stars");

        // ⭐ Adjusted: Fewer Stars (Reduced from 100 to 40)
        for (let i = 0; i < 100; i++) {  
            let star = document.createElement("div");
            star.classList.add("star");
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;
            starContainer.appendChild(star);
        }

        // 🌠 Shooting Star Function
        const createShootingStar = () => {
            let shootingStar = document.createElement("div");
            shootingStar.classList.add("shooting-star");

            let tail = document.createElement("div");
            tail.classList.add("shooting-tail");

            // 🔥 Random Start Position
            let startX = Math.random() * 100;
            let startY = Math.random() * 50;

            shootingStar.style.top = `${startY}vh`;
            shootingStar.style.left = `${startX}vw`;

            tail.style.top = `${startY}vh`;
            tail.style.left = `${startX}vw`;

            starContainer.appendChild(tail);
            starContainer.appendChild(shootingStar);

            // Remove after animation ends
            setTimeout(() => {
                shootingStar.remove();
                tail.remove();
            }, 2000);

            // **Recursive setTimeout to control delay dynamically**
            setTimeout(createShootingStar, Math.random() * (9000 - 7000) + 7000); // 7s - 9s
        };

        // **First shooting star appears after random delay**
        setTimeout(createShootingStar, Math.random() * (9000 - 7000) + 7000);

    }, []);

    return <div className="stars"></div>;
};

export default BackgroundStars;
