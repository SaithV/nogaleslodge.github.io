// Typing Effect for the Carousel Captions
const typingEffects = [
    {
        elementId: "typing-text",
        texts: [
            "is a charitable, benevolent, educational, and religious society.",
            "teaching the great principles of Brotherly Love, Relief, and Truth.",
            "find ways in which to serve God, family, country, neighbors, and self."
        ]
    },
    {
        elementId: "typing-text-2",
        texts: [
            "embracing diversity and inclusion in all forms.",
            "a community united through shared values.",
            "dedicated to improving ourselves and our society."
        ]
    }
];

const typingSpeed = 100; // Speed of typing in ms
const delayBetweenTexts = 2000; // Delay before starting the next text

function typeText(elementId, texts, index = 0, charIndex = 0) {
    const element = document.getElementById(elementId);

    if (charIndex < texts[index].length) {
        element.innerHTML += texts[index][charIndex];
        charIndex++;
        setTimeout(() => typeText(elementId, texts, index, charIndex), typingSpeed);
    } else {
        setTimeout(() => {
            element.innerHTML = ""; // Clear the text
            const nextIndex = (index + 1) % texts.length; // Move to the next text
            typeText(elementId, texts, nextIndex);
        }, delayBetweenTexts);
    }
}

typingEffects.forEach(effect => {
    typeText(effect.elementId, effect.texts);
});
