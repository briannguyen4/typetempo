export const snippets = {
    1: {
        text: "Is this the real life? Is this just fantasy? Caught in a landslide, no escape from reality.",
        title: "Bohemian Rhapsody",
        genre: "Music",
        year: "1975"
    },

    2: {
        text: "Billie Jean is not my lover. She's just a girl who claims that I am the one, but the kid is not my son.",
        info: "'Billie Jean' by Michael Jackson - 1982"
    },

    3: {
        text: "And you can tell everybody this is your song. It may be quite simple but now that it's done.",
        info: "'Your Song' by Elton John - 1970"
    },

    4: {
        text: "If there's a bustle in your hedgerow, don't be alarmed now. It's just a spring clean for the May queen.",
        info: "'Stairway to Heaven' by Led Zeppelin - 1971"
    },

    5: {
        text: "If I should stay, I would only be in your way. So I'll go, but I know I'll think of you every step of the way.",
        info: "'I Will Always Love You' by Whitney Houston - 1992"
    },

    6: {
        text: "But I'm a creep. I'm a weirdo. What the hell am I doing here? I don't belong here.",
        info: "'Creep' by Radiohead - 1992"
    },

    7: {
        text: "Oh, my love, my darling. I've hungered for your touch a long, lonely time.",
        info: "'Unchained Melody' by The Righteous Brothers - 1965"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    9: {
        text: "I never thought through love we'd be making one as lovely as she. But isn't she lovely made from love?",
        info: "'Isn\'t She Lovely' by Stevie Wonder - 1976"
    },

    10: {
        text: "Life is a mystery. Everyone must stand alone. I hear you call my name and it feels like home.",
        info: "'Like A Prayer' by Madonna - 1989"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },
    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968"
    },
};

export const getSnippetsIdx = (n) => {
    let receivedSnippets = [];
    while (receivedSnippets.length < n) {
        let idx = [...Array(Object.keys(snippets).length).keys()][Math.floor(Math.random() * Object.keys(snippets).length)];
        if (!receivedSnippets.includes(idx)) {
            receivedSnippets.push(idx);
        }
    }
    return receivedSnippets;
};

export const totalWords = (idxs) => {
    let words = 0;
    for (let i = 0; i < idxs.length; i++) {
        let snippet = Object.values(snippets)[idxs[i]].text;
        words += getWordTotal(snippet);
    }

    return words;
};

function getWordTotal(snippet) {
    let words = snippet.split(" ");
    return words.length;
}
