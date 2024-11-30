// Add hover effects with JavaScript
document.querySelectorAll('.contact ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        const platform = link.textContent.trim();
        link.title = `Visit my ${platform} profile!`;
    });

    link.addEventListener('click', () => {
        const platform = link.textContent.trim();
        alert(`You are being redirected to my ${platform} profile.`);
    });
});
