/**
 * =========================================================================
 * STORY CONTENT MANAGEMENT
 * All editable text, memories, timeline entries, photos, and messages are here.
 * You can easily customize any text or replace image paths below.
 * =========================================================================
 */

export const storyData = {
  // Names
  herName: "Kalaiselvi", // Her name
  herNick: "Angel",      // Nickname / short name
  myName: "Yuvan",        // Your name

  // 01 — OPENING
  opening: {
    smallText: "A little something I wanted you to see.",
    mainHeading: "Some memories deserve\na place of their own.",
    subheading: "The story of a person\nwho became very special to me.",
    buttonText: "Begin Our Story →"
  },

  // 02 — IT STARTED IN COLLEGE
  college: {
    sectionNum: "01",
    title: "It Started In College",
    leadText: "College-la dhaan first time namma meet pannom.\n\nAppo namakku future-la ivlo memories create aagum-nu yaarukkum theriyadhu.",
    subTitle: "From Classmates To Friends",
    bodyText: "Class-la fun pannumbodhu serndhu sirippom.\n\nKonjam konjam-ah pesi, namma friendship naturally develop aachu.\n\nAppo nee just oru classmate illa...\nslowly, one of my favourite people-a maaritta.",
    // Timeline steps (add, edit, or remove entries anytime)
    timeline: [
      {
        step: "01",
        title: "Class Fun & Memories 🤭",
        desc: "Laughter between lectures, teasing, and memories right in front of the board.",
        image: "./images/classroom-together.png"
      },
      {
        step: "02",
        title: "Friendship 📸",
        desc: "Bus-la nee notice pannama, naan edutha oru little photo… unakku theriyama capture aana oru simple memory.",
        image: "./images/bus-mirror.jpg"
      },
      {
        step: "03",
        title: "More Conversations 📱",
        desc: "Conversations that naturally carried past college hours.",
        image: "./images/chat-padips.jpg"
      },
      {
        step: "04",
        title: "More Memories ✨",
        desc: "Realizing you had quietly become someone irreplaceable.",
        image: "./images/selvi-smile.jpg"
      }
    ]
  },

  // 03 — LITTLE THINGS
  littleThings: {
    sectionNum: "02",
    title: "Little Things I Still Remember",
    subtitle: "Sometimes the smallest moments become the memories we remember the longest.",
    cards: [
      {
        id: 1,
        tag: "Memory 01",
        title: "The Hall Ticket 🎫",
        text: "Kalai-oda MCA Common Entrance Test Hall Ticket — 26.07.2025.\n\nExam tense, Dhanalakshmi Srinivasan College centre… First Time Paththan. 🎓✨",
        image: "./images/hall-ticket.jpg"
      },
      {
        id: 2,
        tag: "Memory 02",
        title: "That Food 🥣👩‍🍳",
        text: "One Day, Namba Serndhu Opma Senjom.\n\nAdhu romba simple-aana moment dhaan...\nbut somehow, I still remember it.",
        image: "./images/chat-food.jpg"
      },
      {
        id: 3,
        tag: "Memory 03",
        title: "Ice Cream 🍦",
        text: "Small thing...\nbut it became another little memory.",
        image: "./images/chat-icecream.jpg"
      },
      {
        id: 4,
        tag: "Memory 04",
        title: "The Birthday Frame 🎂",
        text: "A special digital frame with roses and memories, crafted for Kalaiselvi.\n\nSomehow those small things became special memories.",
        image: "./images/birthday-frame-hd.png"
      },
      {
        id: 5,
        tag: "Memory 05",
        title: "Just 'Selvi' 🌸",
        text: "Naan en friend baby-kku oru name vaikkanum-nu sonnen… nee naan nenacha athe name-ah apdiye sollitta. Andha little coincidence romba memorable-ah irundhuchu.",
        image: "./images/chat-name.jpg"
      },
      {
        id: 6,
        tag: "Memory 06",
        title: "Handwritten Card 💌",
        text: "Kalai's handwritten card marking June 24 on the calendar.\n\nWritten with a sincerity that digital words can never match.",
        image: "./images/kalai-letter.jpg"
      }
    ]
  },

  // 04 — THE CALLS
  calls: {
    sectionNum: "03",
    title: "The Calls That Became Memories",
    leadText: "College-la pesunadhu mattum illa...\n\nVeetukku pona pinnadiyum namma conversations continue aachu.\n\nOru call start pannina, eppadi time pogudhunu theriyama rendu perum pesittu iruppom.\n\nThose calls slowly became some of my favourite memories.",
    callerName: "Kalai",
    callDuration: "3 hr 28 mins"
  },

  // 05 — YOU WERE THERE (EMOTIONAL ANCHOR)
  support: {
    sectionNum: "04",
    title: "You Were There.",
    subtitle: "When the noise faded and everything felt heavy.",
    sentences: [
      "When I wasn't at my best...",
      "You didn't disappear.",
      "You called.",
      "You listened.",
      "You reminded me of good memories.",
      "You comforted me.",
      "And you told me...",
      "“Naan irukken.”"
    ],
    reflectionPause: "Maybe you don't realize how much that meant to me.",
    anchorStatement: "At a time when I felt broken, you helped me find myself again."
  },

  // 06 — WE WERE THERE FOR EACH OTHER
  mutual: {
    sectionNum: "05",
    title: "We Were There For Each Other",
    content: "Enakku problem vandha nerathula, mudinja alavukku enakku help pannirukka.\n\nAana unakku problem vandhaalum, nee first-la en kitta sollama iruppa.\n\nEnakku enna problem-nu kooda theriyadhu. Nee sollumbodhu dhaan enakku theriyum.",
    thought1: "Appo dhaan naan yosippen...",
    thought2: "“Naan avalukku support-ah irukka mudiyuma?”",
    statement: "Friendship-na just pesuradhu mattum illa.\n\nOruvarukku oruvar irukkuradhum friendship dhaan. ❤️",
    cards: [
      {
        title: "When I Needed You",
        text: "You were there.",
        subtext: "Without hesitation, without questions. You showed up."
      },
      {
        title: "When You Needed Someone",
        text: "I wanted to be there.",
        subtext: "To listen, to ease your mind, to stand by your side."
      }
    ]
  },

  // 07 — THINGS I GENUINELY LIKE ABOUT YOU
  appreciation: {
    sectionNum: "06",
    title: "Things I Genuinely Like About You",
    subtitle: "Qualities that made you uniquely you, and irreplaceable to me.",
    cards: [
      {
        num: "01",
        title: "Your Smile 😄",
        text: "Nee eppovume smile pannittu irukkuradhu enakku romba pidikkum."
      },
      {
        num: "02",
        title: "Your Simplicity 🕊️",
        text: "Nee simple-ah dress pannikkuradhu, un hair style-um enakku romba pidikkum."
      },
      {
        num: "03",
        title: "The Way You Think 💭",
        text: "Nee enna madhiriye yosikkura. Sometimes ennoda thought process-a vida fast-ah yosikkura maadhiri irukkum."
      },
      {
        num: "04",
        title: "Your Trust 🔐",
        text: "Unakku yedhavadhu problem na, en kitta edhuvum maraikkama share pannuva. And that trust means a lot to me."
      },
      {
        num: "05",
        title: "Your Kindness 🤍",
        text: "Unakku mudinja alavukku others-ku help panna try pannura."
      },
      {
        num: "06",
        title: "The Little Things 💡",
        text: "Sometimes the smallest things you do become the memories I remember the most."
      },
      {
        num: "07",
        title: "Food 🍲",
        text: "Murungai sambar, white rice, and beetroot poriyal — a simple meal that became a memorable little moment.❤️"
      },
      {
        num: "08",
        title: "Your Dreams 🌟",
        text: "You once said you wanted to go on a Ladakh trip on a Bullet bike after marriage. I truly hope this little wish of yours comes true someday. May you get to live this beautiful dream. ❤️"
      },
      {
        num: "09",
        title: "A Comfortable Ride 🚙",
        text: "College function-kku en kooda car-la vandha andha journey, nee romba comfortable-ah irundhadhu enakku oru memorable moment. Aana andha naal unakku food vaangi thara mudiyala… adhukku really sorry. Appove unakku edhavadhu vaangi thandhirukkanum-nu ippo ninaikkiren. 🥺"
      },
      {
        num:"10",
        title:"That Song 🎶",
        text:"Oru naal nee ‘Honny Honny’ song paadi enakku send pannina… honestly, romba nalla irundhuchu. Nee paadina way romba nice-ah irundhuchu 🤍..."
      }
    ]
  },

  // 08 — WHAT ARE WE?
  whatAreWe: {
    sectionNum: "07",
    title: "What Are We?",
    lines: [
      "Maybe we're just friends...",
      "Maybe we're something a little more special...",
      "Maybe we don't need a name yet."
    ],
    doubt: "Honestly... I don't know the answer.",
    buttonLabel: "One Thing I Know →",
    revealedTitle: "You're someone I genuinely don't want to lose.",
    revealedNote: "And whatever this bond is, I'm grateful for it."
  },

  // 09 — A LETTER FOR YOU
  letter: {
    sectionNum: "08",
    teaser: "There's something I wanted to tell you.",
    buttonText: "Open This Letter 💌",
    salutation: "My Diamond Angel 💎🪽,",
    paragraphs: [
      "Namma friendship eppadi start aachunu yosicha, adhu romba simple-a dhaan irundhuchu.",
      "College-la meet pannom. Class-la serndhu sirichom. Small small memories create pannom.",
      "Apparam calls, random conversations, food, spiral, and so many little moments...",
      "But one thing I can never forget is the time when I was broken.",
      "Appo nee enna vittutu pogala. Call panni pesina. Nalla memories-a remind pannina. Enna samathanapaduthina. 'Naan irukken' nu solli enakku aarudhala irundha.",
      "Andha time-la nee enakku kudutha support-a naan life-long marakka maaten.",
      "Nee en life-la enna place-la irukka-nu oru exact name kudukka enakku theriyala. But one thing I know... You became someone very important to me.",
      "Thank you for being there. Thank you for the memories. Thank you for being you.",
      "Whatever this bond becomes, I hope it always stays special. ❤️"
    ],
    signOff: "— Yuvan",
    handwrittenImage: "./images/kalai-letter.jpg",
    handwrittenTitle: "Kalai's Handwritten Wish & June 24 Memory",
    handwrittenNote: "The special card with the handwritten wish and June 24 marked on the calendar."
  },

  // 10 — FINAL MESSAGE
  finalMessage: {
    sectionNum: "09",
    line1: "Some people change your life without even realizing it.",
    line2: "You are one of those people.",
    line3: "I may not know what to call what we have...\n\nbut I know I'm grateful that I found you.",
    finalLine: "❤️ Thank you for being part of my story.\n\n👋 \"Ta Ta\"... ",
    replayButton: "Replay Our Story ↻"
  }
};
