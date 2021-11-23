function cookies (functions) {
    const container = document.querySelector('.cookies-container');
    const save = document.querySelector('.cookies-save');
    const cookiesDescription = document.querySelector('.cookies-description');

    if(!container || !save || !cookiesDescription) return null;

    const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));

    if(localPref) ativateFunctions(localPref);

    function getFormPref() {
        // return [...document.querySelector('[data-function]')]
        // .filter(el => el.checked)
        // .map(el => el.getAttribute('data-function'));
    }
    
    function handleCookiesDescription() {
        const showCookiesDescription = document.querySelector('.show-cookies-description');
        showCookiesDescription.classList.toggle('show');
    }

    function ativateFunctions(pref) {
        // pref.forEach(f => functions[f]());
        container.style.display = 'none';
        // window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
        window.localStorage.setItem('cookies-pref', JSON.stringify('accepted'));
    }

    function handleSave() {
        const pref = getFormPref();
        ativateFunctions(pref);
    }

    cookiesDescription.addEventListener('click', handleCookiesDescription);
    save.addEventListener('click', handleSave);
}

function analytics() {
    // script
}

cookies({
    analytics
});