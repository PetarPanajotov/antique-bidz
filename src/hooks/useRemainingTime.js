import { useEffect, useState } from "react";

export function useRemainingTime(initialDate) {
    const [remainingTime, setRemainingTime] = useState(initialDate);

    useEffect(() => {
        const interval = setInterval(() => {
            let [hours, minutes, seconds] = remainingTime;
            if (seconds === 0) {
                minutes--;
                seconds = 60;
            };
            if (minutes === 0) {
                hours--;
                minutes = 59;
            };
            seconds--;
            setRemainingTime([hours, minutes, seconds]);
        }, 1000);
        return () => clearInterval(interval);
    }, [remainingTime]);

    const formattedTime = `${remainingTime[0].toString().padStart(2, "0")}:${remainingTime[1].toString().padStart(2, "0")}:${remainingTime[2].toString().padStart(2, "0")}`;

    return {formattedTime, setRemainingTime};
};