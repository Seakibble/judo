const judoTerms = {
    ashi: { name: 'foot, leg' },
    'ashi waza': { name: 'foot techniques' },
    arashi: { name: 'storm' },

    dan: { name: 'black belt grade' },
    de: { name: 'advanced' },
    dojo: { name: 'training room' },

    eri: { name: 'lapel or collar' },

    gaeshi: { name: 'counter' },
    gake: { name: 'hooking, propping' },
    garami: { name: 'lock'},
    gari: { name: 'reaping'},
    gatame: { name: 'hold'},
    goshi: { name: 'hip'},
    guruma: { name: 'wheel'},
    gyaku: { name: 'reverse'},
    go: { name: 'five'},
    gi: { name: 'uniform'},

    ha: { name: 'wing'},
    hajime: { name: 'start'},
    hadaka: { name: 'naked'},
    hane: { name: 'springing'},
    harai: { name: 'sweeping'},
    hiza: { name: 'knee'},
    hachi: { name: 'eight'},
    
    ichi: { name: 'one'},
    ippon: { name: 'single-handed, point'},

    jigoku: { name: 'hell'},
    jime: { name: 'strangle'},
    juji: { name: 'cross'},
    juu: { name: 'ten'},
    judogi: { name: 'Judo uniform'},
    judoka: { name: 'Judo practitioner'},
    
    kami: { name: 'upper'},
    kata: { name: 'single, form or pattern, shoulder, half'},
    kazure: { name: 'modified'},
    kazushi: { name: "judo principle meaning 'off-balancing an opponent'"},
    keikoku: { name: 'warning'},
    keiotsuke: { name: 'attention'},
    kesa: { name: 'scarf'},
    kibisu: { name: 'heel'},
    ko: { name: 'small'},
    komi: { name: 'pulling'},
    kyu: { name: 'nine, coloured belt grade'},

    makikomi: { name: 'wraparound'},
    mata: { name: 'thigh'},
    maitta: { name: 'I surrender'},
    mate: { name: 'wait'},
    morote: { name: 'two-handed'},
    
    nage: { name: 'throw'},
    nami: { name: 'normal'},
    'ne waza': { name: 'ground techniques' },
    ni: { name: 'two'},

    o: { name: 'big, full, great'},
    obi: { name: 'belt'},
    okuri: { name: 'sliding'},
    otoshi: { name: 'drop'},

    randori: { name: 'free sparring'},
    roku: { name: 'six'},
    rei: { name: 'bow'},
    
    sankaku: { name: 'entangled, triangle'},
    san: { name: 'three'},
    sensei: { name: 'teacher'},
    sesae: { name: 'propping'},
    sode: { name: 'sleeve'},
    soto: { name: 'outer'},
    shiho: { name: 'four quarter'},
    shiai: { name: 'contest, tournament, sparring match'},
    shido: { name: 'instruction, light penalty'},
    shodan: { name: 'promotion, black belt'},
    sukui: { name: 'scooping'},
    sutemi: { name: 'sacrifice'},
    sumi: { name: 'corner'},
    shi: { name: 'four'},
    shichi: { name: 'seven'},
    'seiryoku-zenyo': { name: "judo principle meaning 'good use of energy'" },
    
    tatami: { name: 'training mat'},
    te: { name: 'hand'},
    tate: { name: 'vertical'},
    'tachi waza': { name: 'standing techniques' },
    tai: { name: 'body'},
    tomoe: { name: 'circle'},
    tsuri: { name: 'lifting'},
    tori: { name: 'attacking partner'},

    uchi: { name: 'inner'},
    uchikomi: { name: 'repetition training'},
    ude: { name: 'arm'},
    uki: { name: 'floating'},
    ukemi: { name: 'breakfall'},
    uke: { name: 'receiving partner'},
    ura: { name: 'rear, back'},
    utsuri: { name: 'shift'},

    waza: { name: 'technique'},

    yama: { name: 'mountain'},
    yoko: { name: 'side'},

    'zempo-kaiten': { name: 'forward (breakfall)'},
    zarei: { name: 'kneeling bow'},



    // Techniques
    
    // ************** Te Waza ************************************
    'ippon seoinage': {
        belt: 'yellow',
        type: 'te-waza',
        name: 'one-hand shoulder throw',
        links: {
            'KODOKAN': 'https://youtu.be/FQnOlCxo4oI',
            'Shintaro Nakano': 'https://youtu.be/VAjJMtVl8Ow'
        },
    },
    'kata garuma': {
        belt: 'green',
        type: 'te-waza',
        name: 'shoulder wheel',
        links: {
            'KODOKAN': 'https://youtu.be/cnHRhSy8yi4',
            'Shintaro Higashi': 'https://youtu.be/6tSOm33R6VA'
        },
    },
    'kibisu gaeshi': {
        belt: '',
        type: 'te-waza',
        name: 'heel counter (a.k.a. ankle pick, heel trip, one-hand reversal)',
        links: {
            'KODOKAN': 'https://youtu.be/tJylJYfBliA'
        },
    },
    'morote gari': {
        belt: '',
        type: 'te-waza',
        name: 'two-hand reap',
        links: {
            'KODOKAN': 'https://youtu.be/BHLQS4K85bs'
        },
    },
    'obi otoshi': {
        belt: '',
        type: 'te-waza',
        name: 'belt drop',
        links: {
            'KODOKAN': 'https://youtu.be/BHLQS4K85bs'
        },
    },
    'seoi nage': {
        belt: '',
        type: 'te-waza',
        name: 'shoulder throw',
        aka: 'morote seoinage (two-hand shoulder throw)',
        links: {
            'KODOKAN': 'https://youtu.be/zIq0xI0ogxk'
        },
    },
    'seoi otoshi': {
        belt: '',
        type: 'te-waza',
        name: 'shoulder drop',
        links: {
            'KODOKAN': 'https://youtu.be/vu1TMVNnq34'
        },
    },
    'sukui nage': {
        belt: '',
        type: 'te-waza',
        name: 'scoop throw',
        links: {
            'KODOKAN': 'https://youtu.be/vU6aJ2kFxoI'
        },
    },
    'sumi otoshi': {
        belt: '',
        type: 'te-waza',
        name: 'corner drop',
        links: {
            'KODOKAN': 'https://youtu.be/lLU9wv52ni0'
        },
    },
    'tai otoshi': {
        belt: '',
        type: 'te-waza',
        name: 'body drop',
        links: {
            'KODOKAN': 'https://youtu.be/4x6S3Q-Ktv8'
        },
    },
    'uchi mata sukashi': {
        belt: '',
        type: 'te-waza',
        name: 'inner thigh void throw',
        links: {
            'KODOKAN': 'https://youtu.be/V-RS3uhtVWM'
        },
    },
    'uki otoshi': {
        belt: '',
        type: 'te-waza',
        name: 'floating drop',
        links: {
            'KODOKAN': 'https://youtu.be/6H5tmncOY4Q'
        },
    },
    'yama arashi': {
        belt: '',
        type: 'te-waza',
        name: 'mountain storm',
        links: {
            'KODOKAN': 'https://youtu.be/MGlyKmSuzdc'
        },
    },
    'kouchi gaeshi': {
        belt: '',
        type: 'te-waza',
        name: 'small inner counter',
        links: {
            'KODOKAN': 'https://youtu.be/_MWAdYi_LC4'
        },
    },
    'kuchiki taoshi': {
        belt: '',
        type: 'te-waza',
        name: 'single leg takedown',
        links: {
            'KODOKAN': 'https://youtu.be/ZNL47q1aJNY'
        },
        aka: 'dead tree drop'
    },

    // ************** Koshi Waza ************************************
    'daki age': {
        belt: '',
        type: 'koshi-waza',
        name: 'hugging high lift',
    },
    'hane goshi': {
        belt: '',
        type: 'koshi-waza',
        name: 'springing hip',
    },
    'harai goshi': {
        belt: '',
        type: 'koshi-waza',
        name: 'sweeping hip',
    },
    'koshi guruma': {
        belt: '',
        type: 'koshi-waza',
        name: 'hip wheel',
    },
    'o goshi': {
        belt: '',
        type: 'koshi-waza',
        name: 'full hip',
    },
    'sode tsurikomi goshi': {
        belt: '',
        type: 'koshi-waza',
        name: 'sleeve lifting-and-pulling hip',
    },
    'tsuri goshi': {
        belt: '',
        type: 'koshi-waza',
        name: 'lifting hip',
    },
    'tsurikomi goshi': {
        belt: '',
        type: 'koshi-waza',
        name: 'lifting-and-pulling hip',
    },
    'uki goshi': {
        belt: '',
        type: 'koshi-waza',
        name: 'floating hip',
    },
    'ushiro goshi': {
        belt: '',
        type: 'koshi-waza',
        name: 'rear hip',
    },
    'utsuri goshi': {
        belt: '',
        type: 'koshi-waza',
        name: 'shifting hip',
    },

    // ************** Ashi Waza ************************************
    'ashi guruma': {
        belt: '',
        type: 'ashi-waza',
        name: 'leg wheel',
    },
    'de ashi barai': {
        belt: '',
        type: 'ashi-waza',
        name: 'advanced foot sweep',
    },
    'hane goshi gaeshi': {
        belt: '',
        type: 'ashi-waza',
        name: 'hip spring counter',
    },
    'harai goshi gaeshi': {
        belt: '',
        type: 'ashi-waza',
        name: 'hip sweep counter',
    },
    'harai tsurikomi ashi': {
        belt: '',
        type: 'ashi-waza',
        name: 'lifting-and-pulling foot sweep',
    },
    'hiza guruma': {
        belt: '',
        type: 'ashi-waza',
        name: 'knee wheel',
    },
    'kosoto gake': {
        belt: '',
        type: 'ashi-waza',
        name: 'small outer hook',
    },
    'kosoto gari': {
        belt: '',
        type: 'ashi-waza',
        name: 'small outer reap',
    },
    'o guruma': {
        belt: '',
        type: 'ashi-waza',
        name: 'big wheel',
    },
    'okuri ashi harai': {
        belt: '',
        type: 'ashi-waza',
        name: 'sliding foot sweep',
    },
    'osoto gaeshi': {
        belt: '',
        type: 'ashi-waza',
        name: 'big outer (reap) counter',
    },
    'osoto gari': {
        belt: '',
        type: 'ashi-waza',
        name: 'big outer reap',
    },
    'osoto guruma': {
        belt: '',
        type: 'ashi-waza',
        name: 'bigg outer wheel',
    },
    'osoto otoshi': {
        belt: '',
        type: 'ashi-waza',
        name: 'big outer drop',
    },
    'ouchi gaeshi': {
        belt: '',
        type: 'ashi-waza',
        name: 'big inner (reap) counter',
    },
    'ouchi gari': {
        belt: '',
        type: 'ashi-waza',
        name: 'big inner reap',
    },
    'sasae tsurikomi ashi': {
        belt: '',
        type: 'ashi-waza',
        name: 'propping lifting-and-pulling leg',
    },
    'tsubame gaeshi': {
        belt: '',
        type: 'ashi-waza',
        name: 'swallow counter',
    },
    'uchi mata': {
        belt: '',
        type: 'ashi-waza',
        name: 'inner thigh',
    },
    'uchi mata gaeshi': {
        belt: '',
        type: 'ashi-waza',
        name: 'inner thigh counter',
    },
}
