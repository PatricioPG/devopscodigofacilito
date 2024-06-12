import { useState, useEffect } from "react";

const Hours = () => {
    const [currentUTCTime, setCurrentUTCTime] = useState('');

    useEffect(() => {
        updateCurrentDate();
        
        const intervalId = setInterval(updateCurrentDate, 1000);

        return () => clearInterval(intervalId);
    });

    const updateCurrentDate = () => {
        const now = new Date();
        const utcDay = now.getUTCDate();
        const utcMonth = now.getUTCMonth() + 1; // Los meses comienzan desde 0 en JavaScript
        const utcYear = now.getUTCFullYear();
        const hour = now.getHours();
        const mins = now.getMinutes();
        const sec = now.getSeconds();
       
        setCurrentUTCTime(`${utcYear}-${formatNumber(utcMonth)}-${formatNumber(utcDay)} ${formatNumber(hour)}:${formatNumber(mins)}:${formatNumber(sec)}`);
    }

    return <p>{currentUTCTime}</p>
}

const formatNumber = (num) => num.toString().padStart(2, '0');

export default Hours;