import React, { useEffect, useState } from 'react';
import mountain from '../assets/mountain.png';
import bear from '../assets/bear-ski.png';

const SkiingBear: React.FC = () => {
    const [bearPosition, setBearPosition] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate percentage of screen width (0 to 1)
            const percentage = e.clientX / window.innerWidth;
            setBearPosition(percentage);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // --- CONFIGURATION ---
    const CONTAINER_WIDTH = '300px'; // Width of the mountain container
    const BEAR_WIDTH = '170px';      // Width of the bear

    // Position of the entire scene (moves both mountain and bear)
    const SCENE_OFFSET_X = '-100px'; // Positive moves right, negative moves left
    const SCENE_OFFSET_Y = '40px'; // Positive moves down, negative moves up 

    // Bear Movement Range (Percentages relative to container)
    // Left: 0% is far left, 100% is far right
    // Top: 0% is top, 100% is bottom
    const MIN_LEFT = 25; // Bear start horizontal position
    const MAX_LEFT = 70; // Bear end horizontal position
    const MAX_TOP = 60;  // Bear start vertical position (bottom)
    const MIN_TOP = 30;  // Bear end vertical position (top)

    // Trajectory calculation based on mouse position (0 to 1)
    const left = MIN_LEFT + (bearPosition * (MAX_LEFT - MIN_LEFT));
    const top = MAX_TOP - (bearPosition * (MAX_TOP - MIN_TOP));

    return (
        <div
            className="relative mb-4"
            style={{
                width: CONTAINER_WIDTH,
                minWidth: CONTAINER_WIDTH,
                transform: `translate(${SCENE_OFFSET_X}, ${SCENE_OFFSET_Y})`
            }}
        >
            {/* Mountain Background */}
            <img
                src={mountain}
                alt="Mountain"
                className="w-full h-auto block"
            />

            {/* Skiing Bear */}
            <img
                src={bear}
                alt="Skiing Bear"
                className="absolute h-auto object-contain transition-transform duration-75 ease-linear"
                style={{
                    width: BEAR_WIDTH,
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </div>
    );
};

export default SkiingBear;
