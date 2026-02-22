document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('lang-selector');
    let currentLang = localStorage.getItem('site_lang') || 'en';
    
    if (langSelector) {
        langSelector.value = currentLang;
        langSelector.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('site_lang', currentLang);
            updateContent(currentLang);
        });
    }

    function updateContent(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key]; 
            }
        });
    }
    updateContent(currentLang);
});