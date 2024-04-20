function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    document.getElementById('clock').textContent = `${formattedHours}:${minutes}:${seconds}.${milliseconds} ${ampm}`;
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

setInterval(updateTime, 1); // Update every millisecond

document.getElementById('lockButton').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'block';
});
