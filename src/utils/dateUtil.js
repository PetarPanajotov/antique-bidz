export function formatDuration(durationHours) {
    let date = new Date();
    date.setHours(date.getHours() + durationHours);
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = (`${date.getDate()} ${(month[date.getMonth()])}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    return formattedDate;
};

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