export const snippets = {
    1: {
        text: "Is this the real life? Is this just fantasy? Caught in a landslide, no escape from reality.",
        title: "Bohemian Rhapsody",
        genre: "Music",
        year: "1975"
    },

    2: {
        text: "She's just a girl who claims that I am the one, but the kid is not my son.",
        title: "'Billie Jean' by Michael Jackson - 1982"
    },

    3: {
        text: "And you can tell everybody this is your song. It may be quite simple but now that it's done.",
        title: "'Your Song' by Elton John - 1970"
    },

    4: {
        text: "If there's a bustle in your hedgerow, don't be alarmed now. It's just a spring clean for the May queen.",
        title: "'Stairway to Heaven' by Led Zeppelin - 1971"
    },

    5: {
        text: "Been working so hard, I'm punching my card. Eight hours, for what?",
        title: "Footloose"
    },

    6: {
        text: "But I'm a creep. I'm a weirdo. What the hell am I doing here? I don't belong here.",
        title: "'Creep' by Radiohead - 1992"
    },

    7: {
        text: "Oh, my love, my darling I've hungered for your touch a long, lonely time.",
        title: "'Unchained Melody' by The Righteous Brothers - 1965"
    },

    8: {
        text: "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
        title: "'Blackbird' by The Beatles - 1968"
    },

    9: {
        text: "I never thought through love we'd be making one as lovely as she. But isn't she lovely made from love?",
        title: "'Isn\'t She Lovely' by Stevie Wonder - 1976"
    },

    10: {
        text: "Life is a mystery. Everyone must stand alone. I hear you call my name and it feels like home.",
        title: "'Like A Prayer' by Madonna - 1989"
    },

    8: {
        text: "A singer in a smoky room, the smell of wine and cheap perfume.",        
        title: "Don't Stop Believin'"
    },

    8: {
        text: "Oh! I wanna dance with somebody. I wanna feel the heat with somebody.",
        title: "I Wanna Dance With Somebody (Who Loves Me)"
    },
    8: {
        text: "Oh momma dear, we're not the fortunate ones. And girls, they wanna have fun.",
        title: "Girls Just Want to Have Fun"
    },

    8: {
        text: "Don't you know now is the perfect time. We can make it right, hit the city lights.",
        title: "P.Y.T. (Pretty Young Thing)"
    },

    8: {
        text: "Jessie is a friend. Yeah, I know, he's been a good friend of mine.",
        title: "Jessie's Girl"
    },

    8: {
        text: "I've been waiting for so long, now I've finally found someone to stand by me.",
        title: "(I’ve Had) The Time of My Life"
    },

    8: {
        text: "A scrub is a guy that thinks he's fly. He's also known as a busta.",
        title: "No Scrubs"
    },

    8: {
        text: "It's tearin' up my heart when I'm with you. But when we are apart, I feel it too.",
        title: "Tearin' Up My Heart"
    },

    8: {
        text: "Load up on guns, bring your friends. It's fun to lose and to pretend.",
        title: "Smells Like Teen Spirit"
    },

    8: {
        text: "It's like the more money we come across, the more problems we see.",
        title: "Mo’ Money Mo’ Problems"
    },

    8: {
        text: "That's just the way it is. Things will never be the same.",
        title: "Changes"
    },

    8: {
        text: "Oh baby, baby, how was I supposed to know that something wasn't right here?",
        title: "...Baby One More Time"
    },

    8: {
        text: "Come on, vogue. Let your body go with the flow. You know you can do it.",
        title: "Vogue"
    },

    8: {
        text: "I thought I saw a man brought to life. He was warm, he came around like he was dignified.",
        title: "Torn"
    },

    8: {
        text: "Near, far, wherever you are, I believe that the heart does go on.",
        title: "My Heart Will Go On"
    },

    8: {
        text: 'Say my name, say my name. If no one is around you, say “baby I love you"',
        title: "Say My Name"
    },

    8: {
        text: "You are my fire, the one desire. Believe when I say I want it that way",
        title: "I Want It That Way"
    },

    8: {
        text: "Time can't erase a feeling this strong. No way you're never gonna shake me.",
        title: "Always Be My Baby"
    },

    8: {
        text: "I want something else to get me through this semi-charmed kind of life, baby, baby.",
        title: "Semi-Charmed Life"
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
