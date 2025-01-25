import React, { useEffect, useState } from 'react';
import WhatsAppIcon from '../assets/whatsapp.png'; // Replace with your image path
import { useSpring, animated } from '@react-spring/web'; // Import necessary hooks

const WhatsAppButton = () => {
    const [shake, setShake] = useState(false);

    // Create a spring animation with react-spring
    const shakeAnimation = useSpring({
        transform: shake ? 'translateX(-8px)' : 'translateX(8px)',
        reset: true,
        reverse: shake,
        onRest: () => {
            if (shake) setShake(false); // Reset shake state when animation finishes
        },
        config: { tension: 170, friction: 12 }, // Customize speed and ease of the shake
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setShake(true); // Trigger shake
            setTimeout(() => setShake(false), 100); // Reset after 500ms
        }, 3000); // Trigger every 3 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-button"
                className="relative"
            >
                <animated.img
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    className="w-16 h-16 cursor-pointer"
                    style={shakeAnimation} // Apply the spring animation
                />
            </a>
        </div>
    );
};

export default WhatsAppButton;
