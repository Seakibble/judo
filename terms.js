const judoTerms = {
    ashi: { name: 'foot, leg' },
    'ashi-waza': { name: 'foot techniques' },
    arashi: { name: 'storm' },

    barai: { name: 'sweeping (alternatively harai)'},

    dan: { name: 'black belt grade' },
    de: { name: 'advanced' },
    dojo: { name: 'training room' },

    eri: { name: 'lapel or collar' },

    gaeshi: { name: 'counter' },
    gake: { name: 'hooking, propping' },
    garami: { name: 'lock'},
    gari: { name: 'reaping'},
    gatame: { name: 'hold  (alternatively katame)'},
    goshi: { name: 'hip'},
    guruma: { name: 'wheel'},
    gyaku: { name: 'reverse'},
    go: { name: 'five'},
    gi: { name: 'uniform'},

    ha: { name: 'wing'},
    hara: { name: 'stomach'},
    hajime: { name: 'start'},
    hadaka: { name: 'naked'},
    hane: { name: 'springing'},
    hishigi: { name: 'crushing'},
    harai: { name: 'sweeping (alternatively barai)'},
    hiji: { name: 'elbow'},
    hiza: { name: 'knee'},
    hachi: { name: 'eight'},
    
    ichi: { name: 'one'},
    ippon: { name: 'one-arm, single-handed, victory in one point'},

    jigoku: { name: 'hell'},
    jikan: { name: 'referee call to stop the clock'},
    jime: { name: 'strangle, choke'},
    joseki: { name: 'place of honour, upper seat'},
    'jita-kyoei': { name: 'principle of mutual prosperity'},
    juji: { name: 'cross'},
    juu: { name: 'ten'},
    judogi: { name: 'judo uniform'},
    judoka: { name: 'judo practitioner'},
    
    kami: { name: 'upper'},
    kata: { name: 'single, form or pattern, shoulder, half'},
    kazushi: { name: "judo principle meaning 'off-balancing an opponent'" },
    katame: { name: 'hold (alternatively gatame)' },
    'katame-waza': { name: 'grappling techniques: comprises oasekomi-waza, shime-waza, and kansetsu waza' },
    keikoku: { name: 'warning'},
    keiotsuke: { name: 'attention'},
    kesa: { name: 'scarf'},
    kibisu: { name: 'heel'},
    kiai: { name: 'to gather spirit with a shout'},
    ko: { name: 'small' },
    koshi: { name: 'hip (alternatively koshi)' },
    komi: { name: 'pulling'},
    kubi: { name: 'neck' },
    kuzure: { name: 'modified' },
    kyu: { name: 'nine, coloured belt grade'},

    makikomi: { name: 'wraparound'},
    mata: { name: 'thigh'},
    maitta: { name: 'I surrender'},
    mate: { name: 'wait'},
    mae: { name: 'forward, front'},
    morote: { name: 'two-arm, two-handed'},
    mune: { name: 'chest'},
    
    nage: { name: 'throw'},
    nagekomi: { name: 'throwing repetition training'},
    nami: { name: 'normal'},
    'ne-waza': { name: 'ground techniques' },
    'nage-waza': { name: 'throw techniques: comprises te-waza, koshi-waza, ashi-waza, ma-sutemi-waza, and yoko-sutemi-waza' },
    ni: { name: 'two'},

    o: { name: 'big, full, great'},
    obi: { name: 'belt'},
    okuri: { name: 'sliding'},
    osaikomi: { name: 'pinning hold, referee call to begin timing'},
    otoshi: { name: 'drop'},
    osai: { name: 'slow, time-consuming, late'},

    randori: { name: 'free practice, sparring'},
    roku: { name: 'six'},
    ritsurei: { name: 'standing bow'},
    rei: { name: 'bow'},
    
    sankaku: { name: 'entangled, triangle'},
    san: { name: 'three'},
    sensei: { name: 'teacher'},
    sesae: { name: 'propping'},
    seiza: { name: 'formal kneeling posture'},
    sode: { name: 'sleeve'},
    'sore-made': { name: 'finished, time is up'},
    soto: { name: 'outer'},
    shiho: { name: 'four quarter'},
    shiai: { name: 'contest, tournament, sparring match'},
    shido: { name: 'instruction, light penalty'},
    shinpan: { name: 'referee'},
    shisei: { name: 'posture'},
    shodan: { name: 'promotion, black belt'},
    shomen: { name: 'front of dojo'},
    sukui: { name: 'scooping'},
    sutemi: { name: 'sacrifice'},
    sumi: { name: 'corner'},
    shi: { name: 'four'},
    shichi: { name: 'seven'},
    'seiryoku-zenyo': { name: "judo principle meaning 'good use of energy'" },
    
    tatami: { name: 'training mat'},
    te: { name: 'hand'},
    tate: { name: 'vertical'},
    'tachi-waza': { name: 'standing techniques' },
    tai: { name: 'body'},
    tomoe: { name: 'circle'},
    tsuri: { name: 'lifting' },
    tsubame: {name: 'swallow'},
    tori: { name: 'attacking partner'},

    uchi: { name: 'inner'},
    uchikomi: { name: 'repetition training'},
    ude: { name: 'arm'},
    uki: { name: 'floating'},
    ukemi: { name: 'breakfall'},
    uke: { name: 'receiving partner'},
    ura: { name: 'rear, back'},
    utsuri: { name: 'shift'},

    waki: { name: 'armpit'},
    waza: { name: 'technique'},

    yama: { name: 'mountain'},
    yoko: { name: 'side'},
    yoshi: { name: 'resume action, continue'},
    yubi: { name: 'finger'},
    
    zanshin: { name: 'awareness'},
    'zempo-kaiten': { name: 'forward roll'},
    zarei: { name: 'kneeling bow'},
    zubon: { name: 'pants'},



    // Techniques
    
    // ************** Te Waza ************************************
    'ippon-seoinage': {
        type: 'te-waza',
        name: 'one-hand shoulder throw',
        links: {
            'KODOKAN': 'https://youtu.be/FQnOlCxo4oI',
            'Shintaro Nakano': 'https://youtu.be/VAjJMtVl8Ow'
        },
    },
    'kata-garuma': {
        type: 'te-waza',
        name: 'shoulder wheel',
        links: {
            'KODOKAN': 'https://youtu.be/cnHRhSy8yi4',
            'Shintaro Higashi': 'https://youtu.be/6tSOm33R6VA'
        },
    },
    'kibisu-gaeshi': {
        type: 'te-waza',
        name: 'heel counter (a.k.a. ankle pick, heel trip, one-hand reversal)',
        links: {
            'KODOKAN': 'https://youtu.be/tJylJYfBliA'
        },
    },
    'morote-gari': {
        type: 'te-waza',
        name: 'two-hand reap',
        links: {
            'KODOKAN': 'https://youtu.be/BHLQS4K85bs'
        },
    },
    'obi-otoshi': {
        type: 'te-waza',
        name: 'belt drop',
        links: {
            'KODOKAN': 'https://youtu.be/BHLQS4K85bs'
        },
    },
    'seoinage': {
        type: 'te-waza',
        name: 'shoulder throw, a.k.a. morote seoinage (two-hand shoulder throw)',
        links: {
            'KODOKAN': 'https://youtu.be/zIq0xI0ogxk'
        },
    },
    'seoi-otoshi': {
        type: 'te-waza',
        name: 'shoulder drop',
        links: {
            'KODOKAN': 'https://youtu.be/vu1TMVNnq34'
        },
    },
    'sukui-nage': {
        type: 'te-waza',
        name: 'scoop throw',
        links: {
            'KODOKAN': 'https://youtu.be/vU6aJ2kFxoI'
        },
    },
    'sumi-otoshi': {
        type: 'te-waza',
        name: 'corner drop',
        links: {
            'KODOKAN': 'https://youtu.be/lLU9wv52ni0'
        },
    },
    'tai-otoshi': {
        type: 'te-waza',
        name: 'body drop',
        links: {
            'KODOKAN': 'https://youtu.be/4x6S3Q-Ktv8'
        },
    },
    'uchi-mata-sukashi': {
        type: 'te-waza',
        name: 'inner thigh void throw',
        links: {
            'KODOKAN': 'https://youtu.be/V-RS3uhtVWM'
        },
    },
    'uki-otoshi': {
        type: 'te-waza',
        name: 'floating drop',
        links: {
            'KODOKAN': 'https://youtu.be/6H5tmncOY4Q'
        },
    },
    'yama-arashi': {
        type: 'te-waza',
        name: 'mountain storm',
        links: {
            'KODOKAN': 'https://youtu.be/MGlyKmSuzdc'
        },
    },
    'kouchi-gaeshi': {
        type: 'te-waza',
        name: 'small inner counter',
        links: {
            'KODOKAN': 'https://youtu.be/_MWAdYi_LC4'
        },
    },
    'kuchiki-taoshi': {
        type: 'te-waza',
        name: 'single leg takedown',
        links: {
            'KODOKAN': 'https://youtu.be/ZNL47q1aJNY'
        },
        aka: 'dead tree drop'
    },

    // ************** Koshi Waza ************************************
    'daki-age': {
        type: 'koshi-waza',
        name: 'hugging high lift',
        links: {
            'Efficient Judo': 'https://youtu.be/5lFXv3crN30'
        },
    },
    'hane-goshi': {
        type: 'koshi-waza',
        name: 'springing hip',
        links: {
            'KODOKAN': 'https://youtu.be/M9_7De6A1kk'
        },
    },
    'harai-goshi': {
        type: 'koshi-waza',
        name: 'sweeping hip',
        links: {
            'KODOKAN': 'https://youtu.be/qTo8HlAAkOo'
        },
    },
    'koshi-guruma': {
        type: 'koshi-waza',
        name: 'hip wheel',
        links: {
            'KODOKAN': 'https://youtu.be/SU7Id6uVJ44'
        },
    },
    'o-goshi': {
        type: 'koshi-waza',
        name: 'full hip',
        links: {
            'KODOKAN': 'https://youtu.be/yhu1mfy2vJ4'
        },
    },
    'sode-tsurikomi-goshi': {
        type: 'koshi-waza',
        name: 'sleeve lifting-and-pulling hip',
        links: {
            'KODOKAN': 'https://youtu.be/QsmAxpmYLOI'
        },
    },
    'tsuri-goshi': {
        type: 'koshi-waza',
        name: 'lifting hip',
        links: {
            'KODOKAN': 'https://youtu.be/51Htlp7xEvE'
        },
    },
    'tsurikomi-goshi': {
        type: 'koshi-waza',
        name: 'lifting-and-pulling hip',
        links: {
            'KODOKAN': 'https://youtu.be/McfzA0yRVt4'
        },
    },
    'uki-goshi': {
        type: 'koshi-waza',
        name: 'floating hip',
        links: {
            'KODOKAN': 'https://youtu.be/bPKwtB4lyOQ'
        },
    },
    'ushiro-goshi': {
        type: 'koshi-waza',
        name: 'rear hip',
        links: {
            'KODOKAN': 'https://youtu.be/ORIYstuxYT8'
        },
    },
    'utsuri-goshi': {
        type: 'koshi-waza',
        name: 'shifting hip',
        links: {
            'KODOKAN': 'https://youtu.be/4pQd_bEnlf0'
        },
    },

    // ************** Ashi Waza ************************************
    'ashi-guruma': {
        type: 'ashi-waza',
        name: 'leg wheel',
        links: {
            'KODOKAN': 'ashi-guruma'
        },
    },
    'de-ashi-barai': {
        type: 'ashi-waza',
        name: 'advanced foot sweep',
        links: {
            'KODOKAN': 'https://youtu.be/4BUUvqxi_Kk'
        },
    },
    'hane-goshi-gaeshi': {
        type: 'ashi-waza',
        name: 'hip spring counter',
        links: {
            'KODOKAN': 'https://youtu.be/9bZAZSBtnGs'
        },
    },
    'harai-goshi-gaeshi': {
        type: 'ashi-waza',
        name: 'hip sweep counter',
        links: {
            'KODOKAN': 'https://youtu.be/4U3It-7PPsc'
        },
    },
    'harai-tsurikomi-ashi': {
        type: 'ashi-waza',
        name: 'lifting-and-pulling foot sweep',
        links: {
            'KODOKAN': 'https://youtu.be/gGPXvWL8VbE'
        },
    },
    'hiza-guruma': {
        type: 'ashi-waza',
        name: 'knee wheel',
        links: {
            'KODOKAN': 'https://youtu.be/JPJx9-oAVns'
        },
    },
    'kosoto-gake': {
        type: 'ashi-waza',
        name: 'small outer hook',
        links: {
            'KODOKAN': 'https://youtu.be/8b6kY4s4zH4'
        },
    },
    'kosoto-gari': {
        type: 'ashi-waza',
        name: 'small outer reap',
        links: {
            'KODOKAN': 'https://youtu.be/jeQ541ScLB4'
        },
    },
    'o-guruma': {
        type: 'ashi-waza',
        name: 'big wheel',
        links: {
            'KODOKAN': 'https://youtu.be/SnZciTAY9vc'
        },
    },
    'okuri-ashi-harai': {
        type: 'ashi-waza',
        name: 'sliding foot sweep',
        links: {
            'KODOKAN': 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        },
    },
    'osoto-gaeshi': {
        type: 'ashi-waza',
        name: 'big outer (reap) counter',
        links: {
            'KODOKAN': 'https://youtu.be/8ZjM3X_EANo'
        },
    },
    'osoto-gari': {
        type: 'ashi-waza',
        name: 'big outer reap',
        links: {
            'KODOKAN': 'https://youtu.be/c-A_nP7mKAc'
        },
    },
    'osoto-guruma': {
        type: 'ashi-waza',
        name: 'big outer wheel',
        links: {
            'KODOKAN': 'https://youtu.be/92KbCm6pQeI'
        },
    },
    'osoto-otoshi': {
        type: 'ashi-waza',
        name: 'big outer drop',
        links: {
            'KODOKAN': 'https://youtu.be/2DsVvDw7b8g'
        },
    },
    'ouchi-gaeshi': {
        type: 'ashi-waza',
        name: 'big inner (reap) counter',
        links: {
            'KODOKAN': 'https://youtu.be/dCyZTXyjIXE'
        },
    },
    'ouchi-gari': {
        type: 'ashi-waza',
        name: 'big inner reap',
        links: {
            'KODOKAN': 'https://youtu.be/0itJFhV9pDQ'
        },
    },
    'sasae-tsurikomi ashi': {
        type: 'ashi-waza',
        name: 'propping lifting-and-pulling leg',
        links: {
            'KODOKAN': 'https://youtu.be/699i--pvYmE'
        },
    },
    'tsubame-gaeshi': {
        type: 'ashi-waza',
        name: 'swallow counter',
        links: {
            'KODOKAN': 'https://youtu.be/GwweWqqFB5g'
        },
    },
    'uchi-mata': {
        type: 'ashi-waza',
        name: 'inner thigh',
        links: {
            'KODOKAN': 'https://youtu.be/iUpSu5J-bgw'
        },
    },
    'uchi-mata gaeshi': {
        type: 'ashi-waza',
        name: 'inner thigh counter',
        links: {
            'KODOKAN': 'https://youtu.be/Sy6sLWxkWYw'
        },
    },

    // ************** Ma-sutemi Waza ************************************
    'hikikomi-gaeshi': {
        type: 'ma-sutemi-waza',
        name: 'pulling in counter',
        links: {
            'KODOKAN': 'https://youtu.be/92zUYWBp5N8'
        },
    },
    'sumi-gaeshi': {
        type: 'ma-sutemi-waza',
        name: 'corner counter',
        links: {
            'KODOKAN': 'https://youtu.be/5VhduA5xkbA'
        },
    },
    'tawara-gaeshi': {
        type: 'ma-sutemi-waza',
        name: 'rice bag counter',
        links: {
            'KODOKAN': 'https://youtu.be/TmTWgrmViZc'
        },
    },
    'tomoe-nage': {
        type: 'ma-sutemi-waza',
        name: 'circle throw',
        links: {
            'KODOKAN': 'https://youtu.be/880WbHvHv6A'
        },
    },
    'ura-nage': {
        type: 'ma-sutemi-waza',
        name: 'rear throw',
        links: {
            'KODOKAN': 'https://youtu.be/Fgi9b8DJ5sQ'
        },
    },

    // ************** Yoko-sutemi Waza ************************************
    'daki-wakare': {
        type: 'yoko-sutemi-waza',
        name: 'high separation',
        links: {
            'KODOKAN': 'https://youtu.be/Hr0cOMGBDYo'
        },
    },
    'hane-makikomi': {
        type: 'yoko-sutemi-waza',
        name: 'springing wraparound',
        links: {
            'KODOKAN': 'https://youtu.be/6CRBGLGz9j8'
        },
    },
    'harai-makikomi': {
        type: 'yoko-sutemi-waza',
        name: '(hip) sweep wraparound',
        links: {
            'KODOKAN': 'https://youtu.be/VBaHzKaCXss'
        },
    },
    'kani-basami': {
        type: 'yoko-sutemi-waza',
        name: 'crap or scissors throw',
        links: {
            'KODOKAN': 'https://youtu.be/Be4zud_rG60'
        },
    },
    'kawazu-gake': {
        type: 'yoko-sutemi-waza',
        name: 'one-leg entablement',
        links: {
            'KODOKAN': 'https://youtu.be/w6G57bWACi0'
        },
    },
    'osoto-makikomi': {
        type: 'yoko-sutemi-waza',
        name: 'big outer wraparound',
        links: {
            'KODOKAN': 'https://youtu.be/DGDv2oMwmas'
        },
    },
    'soto-makikomi': {
        type: 'yoko-sutemi-waza',
        name: 'outer wraparound',
        links: {
            'KODOKAN': 'https://youtu.be/bWG9O1BVKtQ'
        },
    },
    'tani-otoshi': {
        type: 'yoko-sutemi-waza',
        name: 'valley drop',
        links: {
            'KODOKAN': 'https://youtu.be/3b9Me3Fohpk'
        },
    },
    'uchi-makikomi': {
        type: 'yoko-sutemi-waza',
        name: 'inner wraparound',
        links: {
            'KODOKAN': 'https://youtu.be/5BowcjduxVc'
        },
    },
    'uchi-mata-makikomi': {
        type: 'yoko-sutemi-waza',
        name: 'inner thigh wraparound',
        links: {
            'KODOKAN': 'https://youtu.be/jZXENTLpJCI'
        },
    },
    'uki-waza': {
        type: 'yoko-sutemi-waza',
        name: 'floating technique',
        links: {
            'KODOKAN': 'https://youtu.be/weVOpJ63gII'
        },
    },
    'yoko-gake': {
        type: 'yoko-sutemi-waza',
        name: 'side prop',
        links: {
            'KODOKAN': 'https://youtu.be/tP1Sj1uDfSo'
        },
    },
    'yoko-guruma': {
        type: 'yoko-sutemi-waza',
        name: 'side wheel',
        links: {
            'KODOKAN': 'https://youtu.be/MehP6I5cY2c'
        },
    },
    'yoko-otoshi': {
        type: 'yoko-sutemi-waza',
        name: 'side drop',
        links: {
            'KODOKAN': 'https://youtu.be/MnNG67pF_a0'
        },
    },
    'yoko-wakare': {
        type: 'yoko-sutemi-waza',
        name: 'side separation',
        links: {
            'KODOKAN': 'https://youtu.be/bp1tscHlePI'
        },
    },


    // ************** Osaekomi Waza ************************************
    'kesa-gatame': {
        type: 'osaikomi-waza',
        name: 'scarf hold',
        links: {
            'KODOKAN': 'https://youtu.be/NDaQuJOFBYk'
        },
    },
    'kuzure-kesa-gatame': {
        type: 'osaikomi-waza',
        name: 'modified scarf hold',
        links: {
            'KODOKAN': 'https://youtu.be/Q2fb9jaoUFQ'
        },
    },
    'ushiro-kesa-gatame': {
        type: 'osaikomi-waza',
        name: 'reverse scarf hold',
        links: {
            'KODOKAN': 'https://youtu.be/SBapox2M2dE'
        },
    },
    'kata-gatame': {
        type: 'osaikomi-waza',
        name: 'shoulder hold',
        links: {
            'KODOKAN': 'https://youtu.be/zQR3IOXxO_Q'
        },
    },
    'kami-shiho-gatame': {
        type: 'osaikomi-waza',
        name: 'upper four quarter hold',
        links: {
            'KODOKAN': 'https://youtu.be/HFuMjOv0WN8'
        },
    },
    'kuzure-kami-shiho-gatame': {
        type: 'osaikomi-waza',
        name: 'modified upper four quarter hold',
        links: {
            'KODOKAN': 'https://youtu.be/YUrogQWdwiY'
        },
    },
    'tate-shiho-gatame': {
        type: 'osaikomi-waza',
        name: 'vertical four quarter hold',
        links: {
            'KODOKAN': 'https://youtu.be/55-rFmBx53g'
        },
    },
    'yoko-shiho-gatame': {
        type: 'osaikomi-waza',
        name: 'side four quarter hold',
        links: {
            'KODOKAN': 'https://youtu.be/TT7XJVSEQxA'
        },
    },
    'ura-gatame': {
        type: 'osaikomi-waza',
        name: 'rear hold',
        links: {
            'KODOKAN': 'https://youtu.be/eeAHZB0v3XY'
        },
    },
    'uki-gatame': {
        type: 'osaikomi-waza',
        name: 'floating hold',
        links: {
            'KODOKAN': 'https://youtu.be/e_lAjik1SUM'
        },
    },
    // ************** Shime Waza ************************************
    'do-jime': {
        type: 'shime-waza',
        name: 'trunk strangle',
        links: {
            'KODOKAN': 'https://youtu.be/D_0fFcoIbvY'
        },
    },
    'gyaku-juji-jime': {
        type: 'shime-waza',
        name: 'reverse cross strangle',
        links: {
            'KODOKAN': 'https://youtu.be/t3tQriIPdlI'
        },
    },
    'nami-juji-jime': {
        type: 'shime-waza',
        name: 'normal cross strangle',
        links: {
            'KODOKAN': 'https://youtu.be/k2cHry9HByQ'
        },
    },
    'kata-juji-jime': {
        type: 'shime-waza',
        name: 'trunk strangle',
        links: {
            'KODOKAN': 'https://youtu.be/3VZVUAmiMD8'
        },
    },
    'hadaka-jime': {
        type: 'shime-waza',
        name: 'naked strangle',
        links: {
            'KODOKAN': 'https://youtu.be/9f0n8jez7iA'
        },
    },
    'kata-ha-jime': {
        type: 'shime-waza',
        name: 'single wing strangle',
        links: {
            'KODOKAN': 'https://youtu.be/yaTGgRjnwB8'
        },
    },
    'katate-jime': {
        type: 'shime-waza',
        name: 'one-hand strangle',
        links: {
            'KODOKAN': 'https://youtu.be/cHeIs-fSqwE'
        },
    },
    'okuri-eri-jime': {
        type: 'shime-waza',
        name: 'sliding collar or lapel strangle',
        links: {
            'KODOKAN': 'https://youtu.be/EiqyoVcIAi8'
        },
    },
    'ryote-jime': {
        type: 'shime-waza',
        name: 'two-hand strangle',
        links: {
            'KODOKAN': 'https://youtu.be/-RHC4V7TQiY'
        },
    },
    'sankaku-jime': {
        type: 'shime-waza',
        name: 'triangle strangle',
        links: {
            'KODOKAN': 'https://youtu.be/lq1CUBRAm7s'
        },
    },
    'sode-guruma-jime': {
        type: 'shime-waza',
        name: 'sleeve wheel strangle',
        links: {
            'KODOKAN': 'https://youtu.be/E3nvQzClcAU'
        },
    },
    'tsukkomi-jime': {
        type: 'shime-waza',
        name: 'thrust strangle',
        links: {
            'KODOKAN': 'https://youtu.be/dKKpnD3eLcY'
        },
    },



    // ************** Kansetsu Waza ************************************
    'ude-garami': {
        type: 'kansetsu-waza',
        name: 'arm entanglement',
        links: {
            'KODOKAN': 'https://youtu.be/AIlTvZb4RlE'
        },
    },
    'ude-hishigi-juji-gatame': {
        type: 'kansetsu-waza',
        name: 'arm crush cross lock',
        links: {
            'KODOKAN': 'https://youtu.be/OWgSOlCuMXw'
        },
    },
    'ude-hishigi-ude-gatame': {
        type: 'kansetsu-waza',
        name: 'arm crush arm lock',
        links: {
            'KODOKAN': 'https://youtu.be/SBf0aTma1VI'
        },
    },
    'ude-hishigi-hiza-gatame': {
        type: 'kansetsu-waza',
        name: 'arm crush knee lock',
        links: {
            'KODOKAN': 'https://youtu.be/H2HtAJdiJcE'
        },
    },
    'ude-hishigi-waki-gatame': {
        type: 'kansetsu-waza',
        name: 'arm crush armpit lock',
        links: {
            'KODOKAN': 'https://youtu.be/8F5p1zuJRG0'
        },
    },
    'ude-hishigi-hara-gatame': {
        type: 'kansetsu-waza',
        name: 'arm crush stomach lock',
        links: {
            'KODOKAN': 'https://youtu.be/ZzEycg8R_9M'
        },
    },
    'ude-hishigi-ashi-gatame': {
        type: 'kansetsu-waza',
        name: 'arm crush leg lock',
        links: {
            'KODOKAN': 'https://youtu.be/ClY7g_pX-4s'
        },
    },
    'ude-hishigi-te-gatame': {
        type: 'kansetsu-waza',
        name: 'arm crush hand lock',
        links: {
            'KODOKAN': 'https://youtu.be/6DnvhY0tQVM'
        },
    },
    'ude-hishigi-sankaku-gatame': {
        type: 'kansetsu-waza',
        name: 'arm crush triangle lock',
        links: {
            'KODOKAN': 'https://youtu.be/WefAmW4azhk'
        },
    },
    'ashi-garami': {
        type: 'kansetsu-waza',
        name: 'leg entanglement',
        links: {
            'KODOKAN': 'https://youtu.be/BWWb0GoAtZw'
        },
    },
}
