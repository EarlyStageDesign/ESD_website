const locale = "en";

const translations = {
    "en": {
        "li-feature-geogen": "Geometry Generation",
        "li-feature-shadowcast": "Shadow Diagram",
        "li-feature-areas": "Analysis of Areas",
        "li-feature-costs": "Cost Calculation",
        "li-feature-construction": "Energy and CO2 Construction",
        "li-feature-operational": "Energy and CO2 Operation",
        "li-feature-certifications": "ESG, SNBS and Minergie",
        "li-feature-daylight": "Daylight and Overheating",
        "li-feature-pv": "Solar Radiation and PV Simulation",
        "li-feature-noise": "Noise Evaluation",
        "li-feature-report": "Automatic Report",
    },
};


document.addEventListener("DOMContentLoaded", () => {
    document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});