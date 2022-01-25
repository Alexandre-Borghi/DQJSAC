window.addEventListener("load", main);

// 31st of October 2021, 00:47
const since = new Date(2021, 9, 31, 00, 47);

function main() {
    const textDiv = document.querySelector("div.center");

    function render() {
        const now = new Date();
        const elapsed = new Date(now - since);
        const years = elapsed.getFullYear() - 1970;
        const yearsUnit = years <= 1 ? "an" : "ans";
        const months = elapsed.getMonth();
        const days = elapsed.getDate();
        const daysUnit = days <= 1 ? "jour" : "jours";
        const hours = elapsed.getHours();
        const hoursUnit = hours <= 1 ? "heure" : "heures";
        const minutes = elapsed.getMinutes();
        const minutesUnit = minutes <= 1 ? "minute" : "minutes";
        const seconds = elapsed.getSeconds();
        const secondsUnit = seconds <= 1 ? "seconde" : "secondes";

        const sinceText = `${years} ${yearsUnit},<br>${months} mois,<br>${days} ${daysUnit},<br>${hours} ${hoursUnit},<br>${minutes} ${minutesUnit},<br>${seconds} ${secondsUnit}`;
        textDiv.innerHTML = sinceText;

        requestAnimationFrame(render);
    }
    render();
}