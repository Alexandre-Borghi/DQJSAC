window.addEventListener("load", main);

// 31st of October 2021, 00:47
const since = new Date(2021, 9, 31, 00, 47);

function main() {
    const textDiv = document.querySelector("div.center");

    function render() {
        const now = new Date();
        let seconds = now.getSeconds() - since.getSeconds();
        let minutes = now.getMinutes() - since.getMinutes();
        let hours = now.getHours() - since.getHours();
        let days = now.getDate() - since.getDate();
        let months = now.getMonth() - since.getMonth();
        let years = now.getFullYear() - since.getFullYear();

        console.log(`${years}/${months}/${days} ${hours}:${minutes}:${seconds}`);

        if (seconds < 0) {
            seconds = 60 + seconds;
            minutes -= 1;
        }

        if (minutes < 0) {
            minutes = 60 + minutes;
            hours -= 1;
        }

        if (hours < 0) {
            hours = 24 + hours;
            days -= 1;
        }

        if (days < 0) {
            // 31 here is a shortcut because we know October contains 31 days
            days = 31 + days;
            months -= 1;
        }

        if (months < 0) {
            months = 12 + months;
            years -= 1;
        }

        const yearsUnit = years <= 1 ? "an" : "ans";
        const daysUnit = days <= 1 ? "jour" : "jours";
        const hoursUnit = hours <= 1 ? "heure" : "heures";
        const minutesUnit = minutes <= 1 ? "minute" : "minutes";
        const secondsUnit = seconds <= 1 ? "seconde" : "secondes";

        const sinceText = `${years} ${yearsUnit},<br>${months} mois,<br>${days} ${daysUnit},<br>${hours} ${hoursUnit},<br>${minutes} ${minutesUnit},<br>${seconds} ${secondsUnit}`;
        textDiv.innerHTML = sinceText;

        requestAnimationFrame(render);
    }
    render();
}