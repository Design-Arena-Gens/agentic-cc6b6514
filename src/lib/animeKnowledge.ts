// Comprehensive Anime Knowledge Base
export interface AnimeInfo {
  title: string;
  japaneseTitle?: string;
  year: number;
  studio: string;
  genres: string[];
  episodes: number | string;
  synopsis: string;
  mainCharacters: string[];
  rating?: string;
  impact?: string;
}

export interface AnimeCharacter {
  name: string;
  anime: string;
  role: string;
  description: string;
  traits: string[];
  voiceActor?: string;
}

export interface AnimeStudio {
  name: string;
  founded: number;
  notableWorks: string[];
  style: string;
  description: string;
}

export const animeDatabase: AnimeInfo[] = [
  // Classic Anime
  {
    title: "Neon Genesis Evangelion",
    japaneseTitle: "新世紀エヴァンゲリオン",
    year: 1995,
    studio: "Gainax",
    genres: ["Mecha", "Psychological", "Drama", "Sci-Fi"],
    episodes: 26,
    synopsis: "In a post-apocalyptic future, teenagers pilot giant biomechanical robots called Evangelions to fight mysterious beings known as Angels. The series explores deep psychological themes, existentialism, and the human condition.",
    mainCharacters: ["Shinji Ikari", "Rei Ayanami", "Asuka Langley Soryu", "Misato Katsuragi"],
    rating: "Masterpiece",
    impact: "Revolutionized the mecha genre and anime as a whole, inspiring countless works and discussions about its symbolism and themes."
  },
  {
    title: "Cowboy Bebop",
    japaneseTitle: "カウボーイビバップ",
    year: 1998,
    studio: "Sunrise",
    genres: ["Sci-Fi", "Action", "Drama", "Comedy"],
    episodes: 26,
    synopsis: "A ragtag crew of bounty hunters travels through space on the Bebop, each member haunted by their past. The series blends jazz, noir, and western influences into a unique space opera.",
    mainCharacters: ["Spike Spiegel", "Jet Black", "Faye Valentine", "Edward Wong", "Ein"],
    rating: "Masterpiece",
    impact: "Considered one of the greatest anime series ever made, famous for its jazz soundtrack by Yoko Kanno and episodic storytelling."
  },
  {
    title: "Dragon Ball Z",
    japaneseTitle: "ドラゴンボールZ",
    year: 1989,
    studio: "Toei Animation",
    genres: ["Action", "Adventure", "Martial Arts", "Shounen"],
    episodes: 291,
    synopsis: "Goku and his allies defend Earth from increasingly powerful villains. The series popularized many shonen tropes including power-ups, tournament arcs, and epic battles.",
    mainCharacters: ["Son Goku", "Vegeta", "Gohan", "Piccolo", "Frieza", "Cell", "Majin Buu"],
    rating: "Iconic",
    impact: "One of the most influential anime series globally, bringing anime to mainstream Western audiences."
  },
  {
    title: "Naruto",
    japaneseTitle: "ナルト",
    year: 2002,
    studio: "Pierrot",
    genres: ["Action", "Adventure", "Martial Arts", "Shounen"],
    episodes: "220 (Naruto) + 500 (Shippuden)",
    synopsis: "Naruto Uzumaki, an orphan ninja with a demon fox sealed inside him, dreams of becoming Hokage. The series follows his journey from outcast to hero.",
    mainCharacters: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"],
    rating: "Legendary",
    impact: "Became a global phenomenon, introducing millions to anime and inspiring the next generation of creators."
  },
  {
    title: "One Piece",
    japaneseTitle: "ワンピース",
    year: 1999,
    studio: "Toei Animation",
    genres: ["Action", "Adventure", "Comedy", "Shounen"],
    episodes: "1000+",
    synopsis: "Monkey D. Luffy and his Straw Hat Pirates search for the legendary treasure 'One Piece' to become the Pirate King. Known for its worldbuilding and emotional storytelling.",
    mainCharacters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji", "Tony Tony Chopper", "Nico Robin", "Franky", "Brook", "Jinbe"],
    rating: "Best-selling manga of all time",
    impact: "The best-selling manga series in history with profound cultural impact worldwide."
  },
  {
    title: "Death Note",
    japaneseTitle: "デスノート",
    year: 2006,
    studio: "Madhouse",
    genres: ["Psychological", "Thriller", "Supernatural", "Mystery"],
    episodes: 37,
    synopsis: "High school genius Light Yagami finds a supernatural notebook that can kill anyone whose name is written in it. A cat-and-mouse game ensues with the mysterious detective L.",
    mainCharacters: ["Light Yagami", "L Lawliet", "Ryuk", "Misa Amane", "Near", "Mello"],
    rating: "Masterpiece",
    impact: "Brought the psychological thriller genre to mainstream anime and sparked debates about morality and justice."
  },
  {
    title: "Attack on Titan",
    japaneseTitle: "進撃の巨人",
    year: 2013,
    studio: "Wit Studio / MAPPA",
    genres: ["Action", "Drama", "Dark Fantasy", "Post-Apocalyptic"],
    episodes: 87,
    synopsis: "Humanity lives within enormous walls to escape man-eating Titans. When the walls are breached, Eren Jaeger vows to exterminate every Titan. The series reveals increasingly complex truths about the world.",
    mainCharacters: ["Eren Jaeger", "Mikasa Ackerman", "Armin Arlert", "Levi Ackerman", "Historia Reiss"],
    rating: "Modern Classic",
    impact: "Defined the 2010s anime era and became a global cultural phenomenon with intense plot twists."
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    japaneseTitle: "鋼の錬金術師 FULLMETAL ALCHEMIST",
    year: 2009,
    studio: "Bones",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    episodes: 64,
    synopsis: "Brothers Edward and Alphonse Elric use alchemy to try to resurrect their mother, resulting in catastrophic consequences. They seek the Philosopher's Stone to restore their bodies.",
    mainCharacters: ["Edward Elric", "Alphonse Elric", "Roy Mustang", "Winry Rockbell", "Scar"],
    rating: "Perfect",
    impact: "Consistently rated as one of the greatest anime series ever made, known for its themes, characters, and satisfying conclusion."
  },
  {
    title: "Spirited Away",
    japaneseTitle: "千と千尋の神隠し",
    year: 2001,
    studio: "Studio Ghibli",
    genres: ["Fantasy", "Adventure", "Drama"],
    episodes: "Feature Film",
    synopsis: "10-year-old Chihiro becomes trapped in a spirit world bathhouse. She must work to free herself and her parents while navigating a world of gods, spirits, and magic.",
    mainCharacters: ["Chihiro/Sen", "Haku", "Yubaba", "No-Face", "Lin"],
    rating: "Masterpiece",
    impact: "Won the Academy Award for Best Animated Feature, becoming the first anime film to do so. Highest-grossing anime film in Japan for nearly two decades."
  },
  {
    title: "My Hero Academia",
    japaneseTitle: "僕のヒーローアカデミア",
    year: 2016,
    studio: "Bones",
    genres: ["Action", "Superhero", "Comedy", "Shounen"],
    episodes: "138+",
    synopsis: "In a world where 80% of people have superpowers (Quirks), Izuku Midoriya is born without one. Despite this, he dreams of becoming a hero and eventually inherits power from the greatest hero, All Might.",
    mainCharacters: ["Izuku Midoriya", "Katsuki Bakugo", "Ochaco Uraraka", "All Might", "Shoto Todoroki"],
    rating: "Modern Hit",
    impact: "Revitalized the superhero genre in anime and became a major gateway anime for new fans."
  },
  {
    title: "Demon Slayer",
    japaneseTitle: "鬼滅の刃",
    year: 2019,
    studio: "ufotable",
    genres: ["Action", "Fantasy", "Historical", "Shounen"],
    episodes: "55+",
    synopsis: "Tanjiro Kamado's family is slaughtered by demons, with his sister Nezuko being turned into one. He becomes a demon slayer to avenge his family and find a cure for his sister.",
    mainCharacters: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
    rating: "Cultural Phenomenon",
    impact: "Mugen Train became the highest-grossing anime film of all time. Known for ufotable's stunning animation quality."
  },
  {
    title: "Steins;Gate",
    japaneseTitle: "シュタインズ・ゲート",
    year: 2011,
    studio: "White Fox",
    genres: ["Sci-Fi", "Thriller", "Drama", "Romance"],
    episodes: 24,
    synopsis: "Self-proclaimed mad scientist Okabe Rintaro discovers he can send text messages to the past, accidentally triggering a butterfly effect. He must navigate time loops to save those he loves.",
    mainCharacters: ["Okabe Rintaro", "Makise Kurisu", "Mayuri Shiina", "Hashida Itaru"],
    rating: "Masterpiece",
    impact: "Considered one of the best time travel narratives in any medium, praised for its scientific accuracy and emotional depth."
  },
  {
    title: "Code Geass",
    japaneseTitle: "コードギアス 反逆のルルーシュ",
    year: 2006,
    studio: "Sunrise",
    genres: ["Mecha", "Political", "Drama", "Action"],
    episodes: 50,
    synopsis: "Exiled prince Lelouch gains the power of Geass, which forces anyone to obey a single command. He leads a rebellion against the Holy Britannian Empire using strategy and manipulation.",
    mainCharacters: ["Lelouch vi Britannia", "Suzaku Kururugi", "C.C.", "Kallen Stadtfeld"],
    rating: "Classic",
    impact: "Famous for its strategic battles, complex characters, and one of the most acclaimed endings in anime."
  },
  {
    title: "Your Name",
    japaneseTitle: "君の名は。",
    year: 2016,
    studio: "CoMix Wave Films",
    genres: ["Romance", "Drama", "Fantasy", "Supernatural"],
    episodes: "Feature Film",
    synopsis: "Tokyo boy Taki and rural girl Mitsuha begin mysteriously swapping bodies. As they develop a connection, they discover a deeper mystery connecting their fates.",
    mainCharacters: ["Taki Tachibana", "Mitsuha Miyamizu"],
    rating: "Masterpiece",
    impact: "Became the highest-grossing anime film worldwide (at the time) and brought anime to mainstream audiences globally."
  },
  {
    title: "Hunter x Hunter",
    japaneseTitle: "ハンター×ハンター",
    year: 2011,
    studio: "Madhouse",
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    episodes: 148,
    synopsis: "Gon Freecss discovers his father is a legendary Hunter and sets out to find him. Along the way, he makes friends, discovers the Nen power system, and faces increasingly dangerous challenges.",
    mainCharacters: ["Gon Freecss", "Killua Zoldyck", "Kurapika", "Leorio Paradinight", "Hisoka"],
    rating: "Modern Classic",
    impact: "Praised for its dark themes, complex power system, and subversion of shounen tropes. The Chimera Ant arc is considered one of the best in anime."
  },
  {
    title: "Jujutsu Kaisen",
    japaneseTitle: "呪術廻戦",
    year: 2020,
    studio: "MAPPA",
    genres: ["Action", "Supernatural", "Dark Fantasy", "Shounen"],
    episodes: "47+",
    synopsis: "Yuji Itadori swallows a cursed finger to save his friends, becoming the host of the King of Curses, Sukuna. He joins Tokyo Jujutsu High to learn sorcery and find the remaining fingers.",
    mainCharacters: ["Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo", "Ryomen Sukuna"],
    rating: "Sensation",
    impact: "Took the anime world by storm with its animation quality and cool character designs, particularly Gojo Satoru."
  },
  {
    title: "Violet Evergarden",
    japaneseTitle: "ヴァイオレット・エヴァーガーデン",
    year: 2018,
    studio: "Kyoto Animation",
    genres: ["Drama", "Fantasy", "Slice of Life"],
    episodes: 13,
    synopsis: "Former child soldier Violet Evergarden becomes an Auto Memory Doll, writing letters for people, as she tries to understand the meaning of 'I love you' - the last words her major spoke to her.",
    mainCharacters: ["Violet Evergarden", "Gilbert Bougainvillea", "Claudia Hodgins"],
    rating: "Beautiful",
    impact: "Showcases Kyoto Animation's incredible animation quality and emotional storytelling. Won numerous awards."
  },
  {
    title: "Monster",
    japaneseTitle: "モンスター",
    year: 2004,
    studio: "Madhouse",
    genres: ["Psychological", "Thriller", "Mystery", "Drama"],
    episodes: 74,
    synopsis: "Brilliant surgeon Dr. Tenma saves a young boy's life instead of a politician's. Years later, he discovers the boy has become a serial killer and sets out to stop him.",
    mainCharacters: ["Kenzo Tenma", "Johan Liebert", "Nina Fortner", "Inspector Lunge"],
    rating: "Masterpiece",
    impact: "Considered one of the greatest psychological thrillers in anime, praised for its complex villain and moral questions."
  },
  {
    title: "Mob Psycho 100",
    japaneseTitle: "モブサイコ100",
    year: 2016,
    studio: "Bones",
    genres: ["Action", "Comedy", "Supernatural", "Slice of Life"],
    episodes: 37,
    synopsis: "Shigeo 'Mob' Kageyama is an incredibly powerful esper who wants nothing more than to live a normal life. He works part-time for con man Reigen while trying to keep his powers in check.",
    mainCharacters: ["Shigeo 'Mob' Kageyama", "Arataka Reigen", "Ritsu Kageyama", "Dimple"],
    rating: "Outstanding",
    impact: "From ONE (creator of One Punch Man), known for its unique animation style and themes of self-improvement."
  },
  {
    title: "One Punch Man",
    japaneseTitle: "ワンパンマン",
    year: 2015,
    studio: "Madhouse",
    genres: ["Action", "Comedy", "Superhero", "Parody"],
    episodes: "24+",
    synopsis: "Saitama has become so powerful he can defeat any enemy with a single punch, leading to extreme boredom. He becomes a hero for fun while searching for a worthy opponent.",
    mainCharacters: ["Saitama", "Genos", "Speed-o'-Sound Sonic", "King", "Garou"],
    rating: "Excellent",
    impact: "Became a viral sensation for its parody of superhero and battle anime tropes, known for its incredible Season 1 animation."
  },
  {
    title: "Chainsaw Man",
    japaneseTitle: "チェンソーマン",
    year: 2022,
    studio: "MAPPA",
    genres: ["Action", "Dark Fantasy", "Horror", "Shounen"],
    episodes: "12+",
    synopsis: "Denji, a poor young man, merges with his devil dog Pochita to become Chainsaw Man. He joins the Public Safety Devil Hunters to achieve his simple dreams of good food and a girlfriend.",
    mainCharacters: ["Denji", "Power", "Aki Hayakawa", "Makima", "Pochita"],
    rating: "Hit",
    impact: "Brought Tatsuki Fujimoto's unique, chaotic storytelling style to a wider audience with high-quality MAPPA animation."
  },
  {
    title: "Spy x Family",
    japaneseTitle: "スパイファミリー",
    year: 2022,
    studio: "Wit Studio / CloverWorks",
    genres: ["Action", "Comedy", "Slice of Life", "Spy"],
    episodes: "37+",
    synopsis: "A spy, an assassin, and a telepath form a fake family, each hiding their true identities. Hijinks ensue as they try to maintain their covers while growing genuinely close.",
    mainCharacters: ["Loid Forger/Twilight", "Yor Forger/Thorn Princess", "Anya Forger", "Bond"],
    rating: "Wholesome Hit",
    impact: "Became a massive cross-demographic success, appealing to fans of action, comedy, and family stories alike."
  },
  {
    title: "Tokyo Ghoul",
    japaneseTitle: "東京喰種トーキョーグール",
    year: 2014,
    studio: "Pierrot",
    genres: ["Action", "Horror", "Psychological", "Supernatural"],
    episodes: 48,
    synopsis: "College student Kaneki Ken becomes a half-ghoul after a deadly encounter. He must navigate both human and ghoul societies while struggling with his identity and hunger.",
    mainCharacters: ["Ken Kaneki", "Touka Kirishima", "Shuu Tsukiyama", "Hideyoshi Nagachika"],
    rating: "Popular",
    impact: "Gained a massive following despite adaptation criticisms, known for its themes of identity and its iconic opening theme 'Unravel'."
  },
  {
    title: "Bleach",
    japaneseTitle: "ブリーチ",
    year: 2004,
    studio: "Pierrot",
    genres: ["Action", "Adventure", "Supernatural", "Shounen"],
    episodes: "366+",
    synopsis: "Ichigo Kurosaki gains the powers of a Soul Reaper and must protect the living world from evil spirits and guide departed souls to the afterlife.",
    mainCharacters: ["Ichigo Kurosaki", "Rukia Kuchiki", "Orihime Inoue", "Uryu Ishida", "Renji Abarai"],
    rating: "Big Three Classic",
    impact: "Part of the 'Big Three' alongside Naruto and One Piece, known for its cool character designs and Bankai power system."
  },
  {
    title: "Sword Art Online",
    japaneseTitle: "ソードアート・オンライン",
    year: 2012,
    studio: "A-1 Pictures",
    genres: ["Action", "Adventure", "Romance", "Fantasy", "Isekai"],
    episodes: "96+",
    synopsis: "Players become trapped in a virtual reality MMO where death in-game means death in real life. Kirito must clear the game while navigating virtual and real-world challenges.",
    mainCharacters: ["Kirito", "Asuna", "Yui", "Sinon", "Leafa"],
    rating: "Gateway Anime",
    impact: "Popularized the isekai and gaming anime genres, introducing many to anime despite divisive critical reception."
  },
  {
    title: "Re:Zero",
    japaneseTitle: "Re:ゼロから始める異世界生活",
    year: 2016,
    studio: "White Fox",
    genres: ["Isekai", "Fantasy", "Psychological", "Thriller"],
    episodes: "50+",
    synopsis: "Subaru Natsuki is transported to a fantasy world where he discovers he has the ability to return from death. He must use this painful ability to save those he cares about.",
    mainCharacters: ["Subaru Natsuki", "Emilia", "Rem", "Ram", "Beatrice"],
    rating: "Excellent",
    impact: "Subverted isekai expectations with its darker take on the genre and psychological horror elements."
  },
  {
    title: "Evangelion: 3.0+1.0",
    japaneseTitle: "シン・エヴァンゲリオン劇場版",
    year: 2021,
    studio: "Studio Khara",
    genres: ["Mecha", "Psychological", "Drama", "Sci-Fi"],
    episodes: "Feature Film",
    synopsis: "The final film in the Rebuild of Evangelion tetralogy, concluding the story of Shinji Ikari and providing closure to a franchise that began in 1995.",
    mainCharacters: ["Shinji Ikari", "Rei Ayanami", "Asuka Shikinami", "Mari Illustrious"],
    rating: "Closure",
    impact: "Finally concluded Hideaki Anno's legendary franchise after 26 years, providing the resolution fans had long awaited."
  },
  {
    title: "Akira",
    japaneseTitle: "アキラ",
    year: 1988,
    studio: "Tokyo Movie Shinsha",
    genres: ["Cyberpunk", "Sci-Fi", "Action", "Horror"],
    episodes: "Feature Film",
    synopsis: "In a post-apocalyptic Neo-Tokyo, biker gang member Tetsuo develops psychic powers after a motorcycle accident. His friend Kaneda must stop him before his powers destroy everything.",
    mainCharacters: ["Kaneda Shotaro", "Tetsuo Shima", "Kei", "Colonel Shikishima"],
    rating: "Revolutionary",
    impact: "Brought anime to international attention and influenced countless films, including The Matrix. Its animation quality was unprecedented for its time."
  },
  {
    title: "Ghost in the Shell",
    japaneseTitle: "攻殻機動隊",
    year: 1995,
    studio: "Production I.G",
    genres: ["Cyberpunk", "Sci-Fi", "Action", "Philosophical"],
    episodes: "Feature Film",
    synopsis: "In a future where cybernetic enhancements are common, Major Motoko Kusanagi leads a special ops unit hunting cyber-criminals while questioning her own identity and humanity.",
    mainCharacters: ["Major Motoko Kusanagi", "Batou", "Togusa", "Puppet Master"],
    rating: "Influential",
    impact: "Directly inspired The Matrix and countless sci-fi works. Pioneered cyberpunk aesthetics and philosophical themes in anime."
  },
  {
    title: "Princess Mononoke",
    japaneseTitle: "もののけ姫",
    year: 1997,
    studio: "Studio Ghibli",
    genres: ["Fantasy", "Adventure", "Drama", "Environmental"],
    episodes: "Feature Film",
    synopsis: "Young prince Ashitaka is cursed and travels west seeking a cure. He becomes entangled in a war between the forest gods and a mining town, meeting wolf-raised San along the way.",
    mainCharacters: ["Ashitaka", "San", "Lady Eboshi", "Moro", "Forest Spirit"],
    rating: "Masterpiece",
    impact: "Miyazaki's epic exploration of humanity vs. nature became the highest-grossing Japanese film upon release."
  },
  {
    title: "Weathering with You",
    japaneseTitle: "天気の子",
    year: 2019,
    studio: "CoMix Wave Films",
    genres: ["Romance", "Fantasy", "Drama", "Supernatural"],
    episodes: "Feature Film",
    synopsis: "Runaway Hodaka meets Hina, a girl who can control the weather. As Tokyo is drowning in endless rain, their connection deepens, leading to an impossible choice.",
    mainCharacters: ["Hodaka Morishima", "Hina Amano", "Keisuke Suga"],
    rating: "Beautiful",
    impact: "Makoto Shinkai's follow-up to Your Name became another global hit, showcasing his stunning visual style."
  },
  {
    title: "Rurouni Kenshin",
    japaneseTitle: "るろうに剣心",
    year: 1996,
    studio: "Studio Gallop / Studio Deen",
    genres: ["Action", "Historical", "Samurai", "Romance"],
    episodes: 95,
    synopsis: "Former assassin Kenshin Himura wanders Japan in the Meiji era, seeking redemption by protecting the innocent with his reverse-blade sword.",
    mainCharacters: ["Kenshin Himura", "Kaoru Kamiya", "Sanosuke Sagara", "Yahiko Myojin"],
    rating: "Classic",
    impact: "One of the most beloved samurai anime, known for its action, romance, and themes of redemption."
  },
  {
    title: "Clannad / Clannad After Story",
    japaneseTitle: "クラナド",
    year: 2007,
    studio: "Kyoto Animation",
    genres: ["Drama", "Romance", "Slice of Life", "Supernatural"],
    episodes: 47,
    synopsis: "Delinquent Tomoya befriends the shy Nagisa and helps her restore the school drama club. After Story follows their adult life, family, and the meaning of happiness.",
    mainCharacters: ["Tomoya Okazaki", "Nagisa Furukawa", "Kyou Fujibayashi", "Tomoyo Sakagami"],
    rating: "Emotional Masterpiece",
    impact: "Frequently cited as the saddest anime ever made, particularly After Story's exploration of family and loss."
  },
  {
    title: "A Silent Voice",
    japaneseTitle: "聲の形",
    year: 2016,
    studio: "Kyoto Animation",
    genres: ["Drama", "Romance", "School"],
    episodes: "Feature Film",
    synopsis: "Former bully Shoya seeks to make amends with Shoko, a deaf girl he tormented in elementary school. A story of redemption, self-worth, and human connection.",
    mainCharacters: ["Shoya Ishida", "Shoko Nishimiya", "Yuzuru Nishimiya", "Tomohiro Nagatsuka"],
    rating: "Beautiful",
    impact: "Praised for its sensitive handling of disability, bullying, and depression. A landmark film in anime storytelling."
  },
  {
    title: "Made in Abyss",
    japaneseTitle: "メイドインアビス",
    year: 2017,
    studio: "Kinema Citrus",
    genres: ["Adventure", "Fantasy", "Sci-Fi", "Dark"],
    episodes: "25+",
    synopsis: "Young Riko descends into the mysterious Abyss with robot boy Reg to find her legendary mother. The deeper they go, the more horrifying the challenges become.",
    mainCharacters: ["Riko", "Reg", "Nanachi", "Lyza"],
    rating: "Dark Adventure",
    impact: "Subverted expectations with its cute art style masking incredibly dark and mature themes. Known for its worldbuilding."
  },
  {
    title: "March Comes in Like a Lion",
    japaneseTitle: "3月のライオン",
    year: 2016,
    studio: "Shaft",
    genres: ["Drama", "Slice of Life", "Sports", "Psychological"],
    episodes: 44,
    synopsis: "17-year-old professional shogi player Rei Kiriyama struggles with depression and isolation until he meets the warm Kawamoto family.",
    mainCharacters: ["Rei Kiriyama", "Akari Kawamoto", "Hinata Kawamoto", "Momo Kawamoto"],
    rating: "Masterpiece",
    impact: "Praised for its realistic portrayal of depression and recovery, with stunning Shaft animation style."
  },
  {
    title: "Bocchi the Rock!",
    japaneseTitle: "ぼっち・ざ・ろっく！",
    year: 2022,
    studio: "CloverWorks",
    genres: ["Comedy", "Music", "Slice of Life"],
    episodes: 12,
    synopsis: "Socially anxious guitar prodigy Hitori 'Bocchi' Gotoh dreams of being in a band but can barely talk to people. She's roped into joining Kessoku Band by accident.",
    mainCharacters: ["Hitori Gotoh", "Nijika Ijichi", "Ryou Yamada", "Ikuyo Kita"],
    rating: "Sensation",
    impact: "Became a viral hit for its relatable social anxiety humor and creative animation depicting Bocchi's inner turmoil."
  },
  {
    title: "Odd Taxi",
    japaneseTitle: "オッドタクシー",
    year: 2021,
    studio: "OLM / P.I.C.S.",
    genres: ["Mystery", "Thriller", "Drama"],
    episodes: 13,
    synopsis: "Walrus taxi driver Odokawa becomes entangled in a mystery involving a missing girl, all while various passengers share their own interconnected troubles.",
    mainCharacters: ["Hiroshi Odokawa", "Gouriki", "Shirakawa", "Dobu"],
    rating: "Hidden Gem",
    impact: "Became a critical darling for its intricate plot, realistic dialogue, and unexpected twists."
  },
  {
    title: "Vinland Saga",
    japaneseTitle: "ヴィンランド・サガ",
    year: 2019,
    studio: "Wit Studio / MAPPA",
    genres: ["Action", "Adventure", "Historical", "Drama"],
    episodes: "48+",
    synopsis: "Young Viking Thorfinn seeks revenge against the warrior who killed his father, only to question the meaning of true strength and what it means to be a warrior.",
    mainCharacters: ["Thorfinn", "Askeladd", "Canute", "Thorkell"],
    rating: "Epic",
    impact: "Praised for its historical accuracy, complex characters, and themes of violence and pacifism."
  },
  {
    title: "Frieren: Beyond Journey's End",
    japaneseTitle: "葬送のフリーレン",
    year: 2023,
    studio: "Madhouse",
    genres: ["Adventure", "Fantasy", "Drama", "Slice of Life"],
    episodes: "28+",
    synopsis: "Elven mage Frieren, who lived over a thousand years, reflects on her time with her deceased human companions as she undertakes a new journey with Fern.",
    mainCharacters: ["Frieren", "Fern", "Stark", "Himmel", "Heiter", "Eisen"],
    rating: "Instant Classic",
    impact: "Became one of the highest-rated anime of all time, praised for its meditative exploration of time, memory, and regret."
  }
];

export const studioDatabase: AnimeStudio[] = [
  {
    name: "Studio Ghibli",
    founded: 1985,
    notableWorks: ["Spirited Away", "My Neighbor Totoro", "Princess Mononoke", "Howl's Moving Castle", "Grave of the Fireflies"],
    style: "Hand-drawn animation, detailed backgrounds, themes of nature and childhood",
    description: "Founded by Hayao Miyazaki and Isao Takahata, Studio Ghibli is arguably the most prestigious anime studio in the world, known for their breathtaking hand-drawn animation and timeless storytelling."
  },
  {
    name: "Kyoto Animation",
    founded: 1981,
    notableWorks: ["Violet Evergarden", "A Silent Voice", "K-On!", "Clannad", "The Melancholy of Haruhi Suzumiya"],
    style: "Fluid character animation, detailed eyes, emotional storytelling, slice-of-life excellence",
    description: "KyoAni is renowned for treating their animators well and producing some of the most beautiful animation in the industry. They survived the tragic 2019 arson attack and continue to create stunning works."
  },
  {
    name: "MAPPA",
    founded: 2011,
    notableWorks: ["Jujutsu Kaisen", "Chainsaw Man", "Attack on Titan (Final Season)", "Vinland Saga S2", "Yuri on Ice"],
    style: "High-energy action, CGI integration, modern aesthetic, ambitious projects",
    description: "Founded by ex-Madhouse producer Masao Maruyama, MAPPA has become one of the most prolific studios, known for taking on ambitious projects with tight deadlines."
  },
  {
    name: "Madhouse",
    founded: 1972,
    notableWorks: ["Death Note", "Hunter x Hunter", "One Punch Man S1", "Monster", "Frieren: Beyond Journey's End"],
    style: "Versatile, high-quality animation, adapts various genres excellently",
    description: "One of the most legendary studios in anime history, known for adapting some of the greatest manga series and producing consistently high-quality animation across all genres."
  },
  {
    name: "Bones",
    founded: 1998,
    notableWorks: ["Fullmetal Alchemist: Brotherhood", "My Hero Academia", "Mob Psycho 100", "Soul Eater", "Eureka Seven"],
    style: "Dynamic action animation, expressive character movement, shounen excellence",
    description: "Founded by ex-Sunrise staff, Bones is known for their exceptional action animation and ability to bring shounen manga to life with incredible fight scenes."
  },
  {
    name: "ufotable",
    founded: 2000,
    notableWorks: ["Demon Slayer", "Fate/stay night: Unlimited Blade Works", "Fate/Zero", "Kara no Kyoukai"],
    style: "CGI integration, spectacular lighting effects, cinematic action sequences",
    description: "Known for pushing the boundaries of anime production with their stunning CGI-enhanced animation, particularly their work on the Fate franchise and Demon Slayer."
  },
  {
    name: "Wit Studio",
    founded: 2012,
    notableWorks: ["Attack on Titan (S1-3)", "Spy x Family", "Vinland Saga S1", "The Ancient Magus' Bride", "Ranking of Kings"],
    style: "Intense action, detailed backgrounds, emotional storytelling",
    description: "A Production I.G subsidiary that made a name with Attack on Titan, known for dynamic action sequences and emotionally resonant adaptations."
  },
  {
    name: "Shaft",
    founded: 1975,
    notableWorks: ["Monogatari Series", "Madoka Magica", "March Comes in Like a Lion", "3-gatsu no Lion", "Nisekoi"],
    style: "Head tilts, avant-garde visuals, surreal imagery, heavy dialogue focus",
    description: "Known for their unique visual style featuring distinctive head tilts, abstract imagery, and creative direction, particularly under director Akiyuki Shinbo."
  },
  {
    name: "Production I.G",
    founded: 1987,
    notableWorks: ["Ghost in the Shell", "Psycho-Pass", "Haikyuu!!", "Attack on Titan", "Legend of the Galactic Heroes"],
    style: "High production values, action excellence, cyberpunk aesthetics",
    description: "A prestigious studio known for high-quality productions across various genres, from cyberpunk classics to sports anime masterpieces."
  },
  {
    name: "Trigger",
    founded: 2011,
    notableWorks: ["Kill la Kill", "Promare", "SSSS.Gridman", "Little Witch Academia", "Cyberpunk: Edgerunners"],
    style: "Over-the-top action, bold colors, explosive animation, stylized movement",
    description: "Founded by ex-Gainax staff, Trigger is known for their explosive, over-the-top animation style and passion projects that push creative boundaries."
  },
  {
    name: "A-1 Pictures",
    founded: 2005,
    notableWorks: ["Sword Art Online", "Kaguya-sama", "Your Lie in April", "Fairy Tail", "86 -Eighty Six-"],
    style: "Polished production, wide range of genres, consistent quality",
    description: "Part of Aniplex, A-1 Pictures produces a large volume of anime across all demographics, known for their adaptability and consistent production values."
  },
  {
    name: "CloverWorks",
    founded: 2018,
    notableWorks: ["Bocchi the Rock!", "Spy x Family", "The Promised Neverland", "Horimiya", "My Dress-Up Darling"],
    style: "Character-focused animation, expressive faces, romance and drama",
    description: "Originally A-1 Pictures' Koenji Studio, CloverWorks became independent and has quickly made a name with popular character-driven anime."
  },
  {
    name: "White Fox",
    founded: 2007,
    notableWorks: ["Steins;Gate", "Re:Zero", "Goblin Slayer", "Akame ga Kill!", "The Devil is a Part-Timer!"],
    style: "Faithful adaptations, atmospheric storytelling, isekai expertise",
    description: "Known for excellent visual novel adaptations and isekai anime, White Fox excels at creating atmospheric, story-driven series."
  },
  {
    name: "CoMix Wave Films",
    founded: 2007,
    notableWorks: ["Your Name", "Weathering with You", "Suzume", "5 Centimeters per Second", "The Garden of Words"],
    style: "Photorealistic backgrounds, romantic drama, Makoto Shinkai's home",
    description: "Primarily known as the home of director Makoto Shinkai, CoMix Wave produces stunningly beautiful animated films with detailed, photorealistic backgrounds."
  },
  {
    name: "Sunrise",
    founded: 1972,
    notableWorks: ["Gundam franchise", "Code Geass", "Cowboy Bebop", "Gintama", "Love Live!"],
    style: "Mecha animation excellence, diverse portfolio, long-running franchises",
    description: "One of the most influential studios in anime history, creators of the legendary Gundam franchise and numerous other iconic series."
  }
];

export const animeGenres = {
  shounen: "Anime/manga targeting young boys, typically featuring action, friendship, and personal growth. Examples: Dragon Ball, Naruto, One Piece",
  shoujo: "Anime/manga targeting young girls, often focusing on romance, relationships, and emotional development. Examples: Sailor Moon, Fruits Basket, Ouran High School Host Club",
  seinen: "Anime/manga targeting adult men, often featuring more mature themes, complex narratives, and graphic content. Examples: Berserk, Monster, Vinland Saga",
  josei: "Anime/manga targeting adult women, focusing on realistic romance, workplace drama, and adult relationships. Examples: Nana, Honey and Clover, Paradise Kiss",
  isekai: "Genre where the protagonist is transported to, reborn, or trapped in another world. Examples: Re:Zero, Sword Art Online, That Time I Got Reincarnated as a Slime",
  mecha: "Anime featuring giant robots or machines, often exploring themes of war and humanity. Examples: Gundam, Evangelion, Code Geass",
  slice_of_life: "Anime focusing on everyday life experiences, often relaxing and character-driven. Examples: K-On!, Nichijou, Barakamon",
  iyashikei: "Healing anime designed to have a soothing, calming effect on the viewer. Examples: Aria, Non Non Biyori, Laid-Back Camp",
  sports: "Anime centered around sports, featuring competition, teamwork, and personal growth. Examples: Haikyuu!!, Kuroko's Basketball, Blue Lock",
  psychological: "Anime that delves into the mind, exploring mental states, philosophy, and human nature. Examples: Death Note, Monster, Paranoia Agent"
};

export const animeTerms = {
  otaku: "A person with obsessive interests, particularly anime, manga, and video games. In Japan, it can have negative connotations, but internationally it's often embraced as a badge of honor.",
  waifu: "A fictional female character that someone has a strong attachment to. The male equivalent is 'husbando'.",
  senpai: "An upperclassman or someone more experienced. 'Notice me senpai' is a popular meme.",
  kohai: "A junior or underclassman, the opposite of senpai.",
  tsundere: "A character who is initially cold/hostile but gradually reveals a warmer side. Example: Taiga (Toradora!)",
  yandere: "A character who is obsessively in love to the point of violence. Example: Yuno Gasai (Future Diary)",
  kuudere: "A character who appears cool and unemotional but eventually shows a caring side. Example: Rei Ayanami (Evangelion)",
  dandere: "A character who is quiet and anti-social but becomes talkative around people they like.",
  moe: "The feeling of affection towards cute characters. Can also describe the characters themselves.",
  kawaii: "Japanese word for 'cute', used frequently in anime culture.",
  fanservice: "Content included to please fans, often referring to suggestive scenes, but can also mean callbacks to popular moments.",
  filler: "Non-canon episodes added to an anime adaptation to prevent catching up with the manga source material.",
  sakuga: "Animation of noticeably high quality, often referring to impressive action sequences.",
  seiyuu: "Japanese voice actor. Famous seiyuu include Kana Hanazawa, Mamoru Miyano, and Nana Mizuki.",
  OP: "Opening theme song of an anime.",
  ED: "Ending theme song of an anime.",
  OVA: "Original Video Animation - anime released directly to home video without prior TV broadcast.",
  ONA: "Original Net Animation - anime released directly to the internet.",
  simulcast: "Simultaneous broadcast - when anime episodes air internationally at the same time as Japan.",
  sub: "Subtitled anime - watching in Japanese with subtitles.",
  dub: "Dubbed anime - watching with voice acting in another language, typically English.",
  shonen_jump: "Weekly Shōnen Jump - the most popular manga magazine, home to Dragon Ball, One Piece, Naruto, etc.",
  cour: "A 10-13 episode broadcast season, typically one anime season.",
  arc: "A storyline spanning multiple episodes with its own beginning, middle, and end.",
  canon: "Events that are part of the official story, as opposed to filler or spin-offs."
};

export const famousDirectors = [
  {
    name: "Hayao Miyazaki",
    works: ["Spirited Away", "My Neighbor Totoro", "Princess Mononoke", "Howl's Moving Castle", "Nausicaä of the Valley of the Wind"],
    style: "Hand-drawn animation, environmental themes, strong female protagonists, pacifist messages",
    description: "Co-founder of Studio Ghibli and arguably the most influential animator in history. His films have won numerous awards including the Academy Award for Spirited Away."
  },
  {
    name: "Makoto Shinkai",
    works: ["Your Name", "Weathering with You", "Suzume", "5 Centimeters per Second", "The Garden of Words"],
    style: "Photorealistic backgrounds, romantic drama, themes of distance and connection, beautiful lighting",
    description: "Known as 'the new Miyazaki', Shinkai's films feature stunning visuals and emotional romantic stories that have achieved massive global success."
  },
  {
    name: "Hideaki Anno",
    works: ["Neon Genesis Evangelion", "Shin Godzilla", "Shin Ultraman", "Nadia: The Secret of Blue Water"],
    style: "Psychological depth, religious symbolism, meta-commentary, exploration of depression and anxiety",
    description: "Creator of Evangelion, Anno is known for his deeply personal, psychologically complex works that often reflect his own struggles with depression."
  },
  {
    name: "Satoshi Kon",
    works: ["Perfect Blue", "Paprika", "Millennium Actress", "Tokyo Godfathers", "Paranoia Agent"],
    style: "Reality-bending narratives, psychological horror, seamless transitions, social commentary",
    description: "A master of blurring reality and fiction, Kon's works influenced Hollywood films like Inception and Black Swan. He passed away in 2010 at age 46."
  },
  {
    name: "Mamoru Hosoda",
    works: ["Wolf Children", "Summer Wars", "The Girl Who Leapt Through Time", "Belle", "The Boy and the Beast"],
    style: "Family themes, coming-of-age, digital worlds, warm emotional storytelling",
    description: "Known for heartwarming family stories that explore the intersection of technology and human relationships."
  },
  {
    name: "Shinichiro Watanabe",
    works: ["Cowboy Bebop", "Samurai Champloo", "Space Dandy", "Carole & Tuesday", "Terror in Resonance"],
    style: "Music-driven storytelling, genre fusion, episodic structure, cool protagonists",
    description: "Master of blending music and animation, Watanabe's works feature jazz, hip-hop, and other genres as integral parts of the storytelling."
  },
  {
    name: "Masaaki Yuasa",
    works: ["Devilman Crybaby", "The Tatami Galaxy", "Keep Your Hands Off Eizouken!", "Mind Game", "Inu-Oh"],
    style: "Experimental animation, psychedelic visuals, fluid movement, unconventional storytelling",
    description: "One of the most distinctive visual stylists in anime, Yuasa's works feature wildly creative animation that pushes the medium's boundaries."
  },
  {
    name: "Naoko Yamada",
    works: ["A Silent Voice", "Liz and the Blue Bird", "K-On!", "Tamako Love Story"],
    style: "Subtle character animation, emotional depth, focus on hands and legs, intimate storytelling",
    description: "Former Kyoto Animation director known for her delicate, emotionally resonant works and attention to small character details."
  }
];

export const historicalTimeline = [
  { year: 1917, event: "The earliest known Japanese animated film 'Namakura Gatana' is created" },
  { year: 1958, event: "Toei Animation releases 'Hakujaden' (The Tale of the White Serpent), Japan's first color anime film" },
  { year: 1963, event: "Osamu Tezuka's 'Astro Boy' becomes the first popular anime TV series, establishing many industry conventions" },
  { year: 1979, event: "Mobile Suit Gundam debuts, revolutionizing the mecha genre with realistic war drama" },
  { year: 1984, event: "Nausicaä of the Valley of the Wind leads to the founding of Studio Ghibli" },
  { year: 1988, event: "Akira premieres, becoming a landmark film that brings anime to Western attention" },
  { year: 1995, event: "Neon Genesis Evangelion and Ghost in the Shell change the landscape of anime storytelling" },
  { year: 1997, event: "Pokémon debuts, becoming a global multimedia phenomenon" },
  { year: 1998, event: "Cowboy Bebop premieres, later becoming a gateway anime for Western audiences" },
  { year: 2001, event: "Spirited Away wins the Academy Award for Best Animated Feature" },
  { year: 2006, event: "The Melancholy of Haruhi Suzumiya sparks the light novel adaptation boom" },
  { year: 2011, event: "Puella Magi Madoka Magica deconstructs the magical girl genre to critical acclaim" },
  { year: 2013, event: "Attack on Titan begins, becoming a global phenomenon" },
  { year: 2016, event: "Your Name becomes the highest-grossing anime film worldwide at the time" },
  { year: 2019, event: "Demon Slayer: Mugen Train becomes the highest-grossing anime film of all time" },
  { year: 2023, event: "Frieren: Beyond Journey's End becomes one of the highest-rated anime series ever" }
];
