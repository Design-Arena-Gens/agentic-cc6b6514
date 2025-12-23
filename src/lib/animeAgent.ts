import { 
  animeDatabase, 
  studioDatabase, 
  animeGenres, 
  animeTerms, 
  famousDirectors, 
  historicalTimeline,
  AnimeInfo
} from './animeKnowledge';

interface AgentResponse {
  text: string;
  suggestions?: string[];
}

// Helper function to find anime by title
function findAnimeByTitle(query: string): AnimeInfo | undefined {
  const lowerQuery = query.toLowerCase();
  return animeDatabase.find(anime => 
    anime.title.toLowerCase().includes(lowerQuery) ||
    (anime.japaneseTitle && anime.japaneseTitle.includes(query))
  );
}

// Helper function to find anime by genre
function findAnimeByGenre(genre: string): AnimeInfo[] {
  const lowerGenre = genre.toLowerCase();
  return animeDatabase.filter(anime => 
    anime.genres.some(g => g.toLowerCase().includes(lowerGenre))
  );
}

// Helper function to find anime by studio
function findAnimeByStudio(studioName: string): AnimeInfo[] {
  const lowerStudio = studioName.toLowerCase();
  return animeDatabase.filter(anime => 
    anime.studio.toLowerCase().includes(lowerStudio)
  );
}

// Helper function to get random items from array
function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Main agent function that processes queries
export function processAnimeQuery(query: string): AgentResponse {
  const lowerQuery = query.toLowerCase();
  
  // Greeting patterns
  if (lowerQuery.match(/^(hi|hello|hey|yo|konnichiwa|ohayo|greetings)/i)) {
    return {
      text: `こんにちは (Konnichiwa)! 🎌 I'm your Anime Sensei! I have encyclopedic knowledge about anime - from classic masterpieces like Evangelion and Cowboy Bebop to modern hits like Jujutsu Kaisen and Frieren.\n\nAsk me about:\n• 📺 Any anime series or film\n• 🎬 Studios like Ghibli, MAPPA, or Kyoto Animation\n• 🎭 Directors like Miyazaki or Shinkai\n• 📖 Genres, terms, and anime culture\n• 🏆 Recommendations based on your preferences\n\nWhat would you like to explore?`,
      suggestions: ["What's the best anime ever?", "Tell me about Studio Ghibli", "What is isekai?", "Recommend me something dark"]
    };
  }

  // Specific anime queries
  const animePatterns = [
    /(?:tell me about|what is|what's|explain|info on|information about)\s+(.+?)(?:\s+anime)?$/i,
    /^(.+?)(?:\s+anime)?(?:\s+info|\s+synopsis|\s+about)?$/i
  ];

  for (const pattern of animePatterns) {
    const match = lowerQuery.match(pattern);
    if (match) {
      const searchTerm = match[1].trim();
      const anime = findAnimeByTitle(searchTerm);
      
      if (anime) {
        let response = `# ${anime.title} ${anime.japaneseTitle ? `(${anime.japaneseTitle})` : ''}\n\n`;
        response += `**Year:** ${anime.year} | **Studio:** ${anime.studio} | **Episodes:** ${anime.episodes}\n`;
        response += `**Genres:** ${anime.genres.join(', ')}\n\n`;
        response += `**Synopsis:**\n${anime.synopsis}\n\n`;
        response += `**Main Characters:** ${anime.mainCharacters.join(', ')}\n`;
        if (anime.rating) response += `\n**Rating:** ${anime.rating}`;
        if (anime.impact) response += `\n\n**Cultural Impact:**\n${anime.impact}`;
        
        return {
          text: response,
          suggestions: [`More anime from ${anime.studio}`, `Similar ${anime.genres[0]} anime`, `${anime.year}s anime`, "Recommend something different"]
        };
      }
    }
  }

  // Studio queries
  if (lowerQuery.includes('studio') || studioDatabase.some(s => lowerQuery.includes(s.name.toLowerCase()))) {
    for (const studio of studioDatabase) {
      if (lowerQuery.includes(studio.name.toLowerCase())) {
        const studioAnime = findAnimeByStudio(studio.name);
        let response = `# ${studio.name}\n\n`;
        response += `**Founded:** ${studio.founded}\n\n`;
        response += `**Signature Style:** ${studio.style}\n\n`;
        response += `**Description:**\n${studio.description}\n\n`;
        response += `**Notable Works:** ${studio.notableWorks.join(', ')}\n\n`;
        
        if (studioAnime.length > 0) {
          response += `**In Our Database:** ${studioAnime.map(a => a.title).join(', ')}`;
        }
        
        return {
          text: response,
          suggestions: studioAnime.slice(0, 3).map(a => `Tell me about ${a.title}`).concat(["Compare with another studio"])
        };
      }
    }
    
    // List all studios
    if (lowerQuery.match(/list|all|what|studios/)) {
      const studioList = studioDatabase.map(s => `• **${s.name}** (${s.founded}): ${s.notableWorks.slice(0, 2).join(', ')}`).join('\n');
      return {
        text: `# Major Anime Studios 🎬\n\n${studioList}\n\nAsk me about any specific studio for more details!`,
        suggestions: ["Tell me about MAPPA", "Tell me about Studio Ghibli", "Tell me about Kyoto Animation"]
      };
    }
  }

  // Genre queries
  for (const [genreKey, genreDesc] of Object.entries(animeGenres)) {
    if (lowerQuery.includes(genreKey.replace('_', ' ')) || lowerQuery.includes(genreKey)) {
      const genreAnime = findAnimeByGenre(genreKey.replace('_', ' '));
      let response = `# ${genreKey.charAt(0).toUpperCase() + genreKey.slice(1).replace('_', ' ')} Genre 🎭\n\n`;
      response += `**Description:** ${genreDesc}\n\n`;
      
      if (genreAnime.length > 0) {
        response += `**Examples in Our Database:**\n`;
        genreAnime.slice(0, 5).forEach(anime => {
          response += `• **${anime.title}** (${anime.year}) - ${anime.synopsis.substring(0, 100)}...\n`;
        });
      }
      
      return {
        text: response,
        suggestions: genreAnime.slice(0, 3).map(a => `Tell me about ${a.title}`)
      };
    }
  }

  // Term queries
  for (const [term, definition] of Object.entries(animeTerms)) {
    if (lowerQuery.includes(term.toLowerCase())) {
      return {
        text: `# ${term.charAt(0).toUpperCase() + term.slice(1)} 📚\n\n${definition}`,
        suggestions: ["What other terms should I know?", "What is tsundere?", "What is isekai?", "What does sakuga mean?"]
      };
    }
  }

  // List all terms
  if (lowerQuery.match(/term|vocabulary|glossary|words|otaku terms|anime terms|slang/)) {
    const termsList = Object.entries(animeTerms).slice(0, 15).map(([term, def]) => 
      `• **${term}**: ${def.substring(0, 80)}...`
    ).join('\n');
    return {
      text: `# Anime Terms & Vocabulary 📖\n\n${termsList}\n\nAsk about any specific term for the full explanation!`,
      suggestions: ["What is waifu?", "What does moe mean?", "Explain tsundere", "What is sakuga?"]
    };
  }

  // Director queries
  for (const director of famousDirectors) {
    if (lowerQuery.includes(director.name.toLowerCase())) {
      let response = `# ${director.name} 🎬\n\n`;
      response += `**Style:** ${director.style}\n\n`;
      response += `**Description:**\n${director.description}\n\n`;
      response += `**Notable Works:** ${director.works.join(', ')}`;
      
      return {
        text: response,
        suggestions: director.works.slice(0, 3).map(w => `Tell me about ${w}`)
      };
    }
  }

  // List directors
  if (lowerQuery.match(/director|creator|animator|who made|who created/)) {
    const directorList = famousDirectors.map(d => 
      `• **${d.name}**: ${d.works.slice(0, 2).join(', ')}`
    ).join('\n');
    return {
      text: `# Legendary Anime Directors 🎬\n\n${directorList}\n\nAsk me about any director for more details!`,
      suggestions: ["Tell me about Hayao Miyazaki", "Who is Makoto Shinkai?", "Who created Evangelion?"]
    };
  }

  // History queries
  if (lowerQuery.match(/history|timeline|when did|how old|began|started|origin/)) {
    const timelineText = historicalTimeline.map(event => 
      `• **${event.year}**: ${event.event}`
    ).join('\n');
    return {
      text: `# Anime History Timeline 📜\n\n${timelineText}`,
      suggestions: ["Tell me about Akira", "What made Evangelion special?", "Why is Spirited Away important?"]
    };
  }

  // Recommendation queries
  if (lowerQuery.match(/recommend|suggestion|what should|watch next|similar to|like|best|top|greatest/)) {
    // Recommendation based on mood/type
    if (lowerQuery.match(/dark|psychological|thriller|mind/)) {
      const darkAnime = animeDatabase.filter(a => 
        a.genres.some(g => ['Psychological', 'Thriller', 'Horror', 'Dark'].some(dg => g.includes(dg)))
      );
      const selected = getRandomItems(darkAnime, 5);
      return {
        text: `# Dark & Psychological Recommendations 🖤\n\n${selected.map(a => 
          `• **${a.title}** (${a.year}) - ${a.synopsis.substring(0, 120)}...`
        ).join('\n\n')}\n\nThese anime will make you think deeply and maybe lose some sleep!`,
        suggestions: selected.slice(0, 3).map(a => `Tell me about ${a.title}`)
      };
    }

    if (lowerQuery.match(/action|exciting|fight|battle/)) {
      const actionAnime = animeDatabase.filter(a => 
        a.genres.some(g => g.includes('Action'))
      );
      const selected = getRandomItems(actionAnime, 5);
      return {
        text: `# Action-Packed Recommendations ⚔️\n\n${selected.map(a => 
          `• **${a.title}** (${a.year}) - ${a.synopsis.substring(0, 120)}...`
        ).join('\n\n')}\n\nGet ready for some epic battles!`,
        suggestions: selected.slice(0, 3).map(a => `Tell me about ${a.title}`)
      };
    }

    if (lowerQuery.match(/romance|love|romantic|relationship/)) {
      const romanceAnime = animeDatabase.filter(a => 
        a.genres.some(g => ['Romance', 'Drama'].some(rg => g.includes(rg)))
      );
      const selected = getRandomItems(romanceAnime, 5);
      return {
        text: `# Romance Recommendations 💕\n\n${selected.map(a => 
          `• **${a.title}** (${a.year}) - ${a.synopsis.substring(0, 120)}...`
        ).join('\n\n')}\n\nPrepare for some heartfelt emotions!`,
        suggestions: selected.slice(0, 3).map(a => `Tell me about ${a.title}`)
      };
    }

    if (lowerQuery.match(/beginner|new to anime|first anime|start|gateway/)) {
      const beginnerAnime = ["Death Note", "Attack on Titan", "Demon Slayer", "My Hero Academia", "Spy x Family"];
      const selected = animeDatabase.filter(a => beginnerAnime.includes(a.title));
      return {
        text: `# Gateway Anime for Beginners 🌟\n\n${selected.map(a => 
          `• **${a.title}** (${a.year}) - ${a.synopsis.substring(0, 120)}...`
        ).join('\n\n')}\n\nThese are perfect starting points for your anime journey!`,
        suggestions: selected.slice(0, 3).map(a => `Tell me about ${a.title}`)
      };
    }

    if (lowerQuery.match(/classic|old|legendary|must.watch|masterpiece/)) {
      const classicAnime = animeDatabase.filter(a => 
        a.year < 2010 && (a.rating?.includes('Masterpiece') || a.rating?.includes('Classic') || a.rating?.includes('Iconic'))
      );
      const selected = getRandomItems(classicAnime, 5);
      return {
        text: `# Classic Must-Watch Anime 🏆\n\n${selected.map(a => 
          `• **${a.title}** (${a.year}) - ${a.synopsis.substring(0, 120)}...`
        ).join('\n\n')}\n\nThese are the timeless classics that shaped anime!`,
        suggestions: selected.slice(0, 3).map(a => `Tell me about ${a.title}`)
      };
    }

    // Best of all time
    if (lowerQuery.match(/best|greatest|all time|top/)) {
      const bestAnime = animeDatabase.filter(a => 
        a.rating?.includes('Masterpiece') || a.rating?.includes('Perfect') || a.rating?.includes('Classic')
      );
      const selected = getRandomItems(bestAnime, 7);
      return {
        text: `# Greatest Anime of All Time 👑\n\n${selected.map(a => 
          `• **${a.title}** (${a.year}) - ${a.rating}\n  ${a.synopsis.substring(0, 100)}...`
        ).join('\n\n')}\n\nThese are considered among the finest anime ever created!`,
        suggestions: selected.slice(0, 3).map(a => `Tell me about ${a.title}`)
      };
    }

    // General recommendation
    const randomAnime = getRandomItems(animeDatabase, 5);
    return {
      text: `# Anime Recommendations 🎯\n\n${randomAnime.map(a => 
        `• **${a.title}** (${a.year}, ${a.studio})\n  Genres: ${a.genres.join(', ')}\n  ${a.synopsis.substring(0, 100)}...`
      ).join('\n\n')}\n\nWant more specific recommendations? Tell me what you're in the mood for!`,
      suggestions: ["I want something dark", "Recommend action anime", "Gateway anime for beginners", "Classic masterpieces"]
    };
  }

  // Year-based queries
  const yearMatch = lowerQuery.match(/(\d{4})/);
  if (yearMatch) {
    const year = parseInt(yearMatch[1]);
    if (year >= 1980 && year <= 2025) {
      const yearAnime = animeDatabase.filter(a => Math.abs(a.year - year) <= 2);
      if (yearAnime.length > 0) {
        return {
          text: `# Anime from around ${year} 📅\n\n${yearAnime.map(a => 
            `• **${a.title}** (${a.year}) - ${a.genres.join(', ')}`
          ).join('\n')}`,
          suggestions: yearAnime.slice(0, 3).map(a => `Tell me about ${a.title}`)
        };
      }
    }
  }

  // Character queries
  for (const anime of animeDatabase) {
    for (const character of anime.mainCharacters) {
      if (lowerQuery.includes(character.toLowerCase())) {
        return {
          text: `# ${character} 🎭\n\n**From:** ${anime.title} (${anime.year})\n**Studio:** ${anime.studio}\n\n${character} is one of the main characters in ${anime.title}.\n\n**About the anime:**\n${anime.synopsis}`,
          suggestions: [`Tell me about ${anime.title}`, `More characters from ${anime.studio}`, `Similar anime`]
        };
      }
    }
  }

  // Comparison queries
  if (lowerQuery.match(/vs|versus|compare|difference|better/)) {
    return {
      text: `# Anime Comparisons 🤔\n\nI'd love to compare anime for you! Try asking something like:\n\n• "Naruto vs One Piece"\n• "MAPPA vs ufotable animation"\n• "What's the difference between shounen and seinen?"\n• "Miyazaki vs Shinkai"\n\nWhat would you like me to compare?`,
      suggestions: ["Dragon Ball vs Naruto", "Studio Ghibli vs Kyoto Animation", "Sub vs dub", "Best action anime"]
    };
  }

  // Fallback - try to find any relevant anime
  const words = lowerQuery.split(/\s+/);
  for (const word of words) {
    if (word.length > 3) {
      const foundAnime = animeDatabase.find(a => 
        a.title.toLowerCase().includes(word) ||
        a.genres.some(g => g.toLowerCase().includes(word)) ||
        a.studio.toLowerCase().includes(word)
      );
      if (foundAnime) {
        return processAnimeQuery(`tell me about ${foundAnime.title}`);
      }
    }
  }

  // Default response
  const suggestions = getRandomItems([
    "What's the best anime ever?",
    "Tell me about Attack on Titan",
    "What is isekai?",
    "Recommend me something",
    "Tell me about Studio Ghibli",
    "Who is Hayao Miyazaki?",
    "What anime should a beginner watch?",
    "Tell me about Demon Slayer",
    "History of anime",
    "What does tsundere mean?"
  ], 4);

  return {
    text: `I'm your Anime Sensei, ready to share my vast knowledge! 🎌\n\nI can help you with:\n\n• **Anime Info** - Ask about any anime series or film\n• **Studios** - Learn about Ghibli, MAPPA, Bones, and more\n• **Directors** - Miyazaki, Shinkai, Anno, and other legends\n• **Recommendations** - I'll suggest anime based on your preferences\n• **Terminology** - Understand otaku culture and anime terms\n• **History** - The evolution of anime from 1917 to today\n\nTry asking me something like: "Tell me about Death Note" or "Recommend me something dark"`,
    suggestions
  };
}
