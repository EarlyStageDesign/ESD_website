const defaultLocale = "de"

let locale;

let translations = {};

document.addEventListener("DOMContentLoaded", () => {
    setLocale(defaultLocale);
    bindLocaleSwitcher(defaultLocale);
});

async function setLocale(newLocale) {
    if (newLocale === locale) return;
    const newTranslations = 
        await fetchTranslationsFor(newLocale);
    locale = newLocale;
    translations = newTranslations;
    translatePage();
}

async function fetchTranslationsFor(newLocale) {
    const response = await fetch(`/assets/lang/${newLocale}.json`);
    return await response.json();
}

function translatePage() {
    document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
}

function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = translations[key];
    element.innerText = translation;
}

function bindLocaleSwitcher(initialValue) {
    const switcher = 
        document.querySelector("[data-i18n-switcher]");
    switcher.value = initialValue;
    switcher.onchange = (e) => {
        setLocale(e.target.value);
    };
}

//Explanation in here: https://phrase.com/blog/posts/step-step-guide-javascript-localization/