export function dateConvert(endDate) {
    const now = new Date();
    const target = new Date(endDate);
    const diffInMs = target.getTime() - now.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;
    const formattedTime = [hours, minutes, seconds];
    return formattedTime;
};