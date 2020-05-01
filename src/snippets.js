export const snippets = {
    1: {
        text: "Is this the real life? Is this just fantasy? Caught in a landslide, no escape from reality.",
        info: "'Bohemian Rhapsody' by Queen - 1975",
        category: "Music"
    },

    2: {
        text: "Billie Jean is not my lover. She's just a girl who claims that I am the one, but the kid is not my son.",
        info: "'Billie Jean' by Michael Jackson - 1982",
        category: "Music"
    },

    3: {
        text: "And you can tell everybody this is your song. It may be quite simple but now that it's done.",
        info: "'Your Song' by Elton John - 1970",
        category: "Music"
    },

    4: {
        text: "If there's a bustle in your hedgerow, don't be alarmed now. It's just a spring clean for the May queen.",
        info: "'Stairway to Heaven' by Led Zeppelin - 1971",
        category: "Music"
    },

    5: {
        text: "If I should stay, I would only be in your way. So I'll go, but I know I'll think of you every step of the way.",
        info: "'I Will Always Love You' by Whitney Houston - 1992",
        category: "Music"
    },

    6: {
        text: "But I'm a creep. I'm a weirdo. What the hell am I doing here? I don't belong here.",
        info: "'Creep' by Radiohead - 1992",
        category: "Music"
    },

    7: {
        text: "Oh, my love, my darling. I've hungered for your touch a long, lonely time.",
        info: "'Unchained Melody' by The Righteous Brothers - 1965",
        category: "Music"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        info: "'Blackbird' by The Beatles - 1968",
        category: "Music"
    },

    9: {
        text: "I never thought through love we'd be making one as lovely as she. But isn't she lovely made from love?",
        info: "'Isn\'t She Lovely' by Stevie Wonder - 1976",
        category: "Music"
    },

    10: {
        text: "Life is a mystery. Everyone must stand alone. I hear you call my name and it feels like home.",
        info: "'Like A Prayer' by Madonna - 1989",
        category: "Music"
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

