import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Sparkles, 
  X, 
  Trophy,
  Volume2,
  Gamepad2,
  BookOpen
} from 'lucide-react';
import { ALPHABET_DATA, Language, AlphabetItem } from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [selectedLetter, setSelectedLetter] = useState<AlphabetItem | null>(null);
  const [score, setScore] = useState(0);
  const [gameMode, setGameMode] = useState(false);
  const [targetLetter, setTargetLetter] = useState<AlphabetItem | null>(null);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸', letterCount: 27 },
    { code: 'en', name: 'English', flag: '🇬🇧', letterCount: 26 },
    { code: 'fi', name: 'Suomi', flag: '🇫🇮', letterCount: 29 },
  ];
  const currentLanguage = languages.find((l) => l.code === lang);
  const hiddenLetters = lang === 'fi' ? ['CH', 'LL', 'Ñ'] : lang === 'es' ? ['Å', 'Ä', 'Ö'] : ['CH', 'LL', 'Ñ', 'Å', 'Ä', 'Ö'];
  const visibleAlphabetData = ALPHABET_DATA.filter((item) => !hiddenLetters.includes(item.letter));
  const headerLogoByLanguage = {
    es: '/Logo-1-caracol.svg',
    en: '/Logo-3-caracol.svg',
    fi: '/Logo-2-caracol.svg',
  } as const;
  const welcomeCopy = {
    es: {
      titlePrefix: '¡Aprendamos el ',
      titleHighlight: 'Alfabeto',
      titleSuffix: '!',
      description: 'Explora las letras en tres idiomas diferentes. Haz clic en cada tarjeta para descubrir animales y cosas increíbles.',
    },
    en: {
      titlePrefix: "Let's Learn the ",
      titleHighlight: 'Alphabet',
      titleSuffix: '!',
      description: 'Explore letters in three different languages. Click each card to discover amazing animals and things.',
    },
    fi: {
      titlePrefix: 'Opetellaan ',
      titleHighlight: 'aakkoset',
      titleSuffix: '!',
      description: 'Tutki kirjaimia kolmella eri kielellä. Klikkaa jokaista korttia ja löydä eläimiä sekä muita hauskoja asioita.',
    },
  } as const;

  const startNewGame = () => {
    const randomLetter = visibleAlphabetData[Math.floor(Math.random() * visibleAlphabetData.length)];
    setTargetLetter(randomLetter);
    setGameMode(true);
  };

  const handleCardClick = (item: AlphabetItem) => {
    if (gameMode && targetLetter) {
      if (item.letter === targetLetter.letter) {
        setScore(prev => prev + 10);
        const nextLetter = visibleAlphabetData[Math.floor(Math.random() * visibleAlphabetData.length)];
        setTargetLetter(nextLetter);
      } else {
        setScore(prev => Math.max(0, prev - 5));
      }
    } else {
      setSelectedLetter(item);
    }
  };

  const currentExample = (item: AlphabetItem) => item.examples[lang];

  return (
    <div className="min-h-screen pb-20 bg-brand-soft">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-lg border-b border-brand-primary/10 px-4 py-4 sm:px-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-transparent p-0">
            <img
              src={headerLogoByLanguage[lang]}
              alt="Mundo Alfabeto logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
          </div>
          <h1 className="text-2xl font-display font-bold text-brand-dark tracking-tight">
            Mundo<span className="text-brand-primary">Alfabeto</span>
          </h1>
        </div>

        <div className="flex items-center gap-3 bg-white p-1 rounded-2xl shadow-inner border border-gray-100">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code as Language)}
              className={`px-3 py-1.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                lang === l.code 
                  ? 'bg-brand-primary text-white shadow-md scale-105' 
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span>{l.flag}</span>
              <span className="hidden sm:inline">{l.name}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-2xl border border-brand-accent/30">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="font-bold text-brand-dark">{score}</span>
          </div>
          <button 
            onClick={() => gameMode ? setGameMode(false) : startNewGame()}
            className={`p-2.5 rounded-2xl transition-all shadow-lg hover:scale-110 active:scale-95 ${
              gameMode ? 'bg-red-500 text-white' : 'bg-brand-secondary text-white'
            }`}
          >
            {gameMode ? <X className="w-6 h-6" /> : <Gamepad2 className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {/* Hero / Game Info */}
        <AnimatePresence mode="wait">
          {gameMode ? (
            <motion.div 
              key="game-banner"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-brand-secondary/10 border-2 border-brand-secondary border-dashed rounded-3xl p-6 mb-8 text-center"
            >
              <h2 className="text-xl font-display font-bold text-brand-secondary mb-2">
                ¡Encuentra la letra! / Find the letter!
              </h2>
              <div className="text-5xl font-display font-black text-brand-secondary animate-bounce">
                {targetLetter?.letter}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="welcome-banner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12 text-center sm:text-left"
            >
              <h2 className="text-3xl sm:text-5xl font-display font-black text-brand-dark mb-4 leading-tight">
                {welcomeCopy[lang].titlePrefix}
                <span className="text-brand-primary underline decoration-brand-accent decoration-wavy">
                  {welcomeCopy[lang].titleHighlight}
                </span>
                {welcomeCopy[lang].titleSuffix}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                {welcomeCopy[lang].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Alphabet Grid */}
        <div className="alphabet-grid">
          {visibleAlphabetData.map((item, idx) => {
            const example = currentExample(item);
            const Icon = example.icon;
            
            return (
              <motion.button
                key={item.letter}
                layoutId={`card-${item.letter}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(item)}
                className={`relative group h-48 sm:h-56 rounded-[2.5rem] p-6 flex flex-col items-center justify-between transition-all shadow-xl hover:shadow-2xl overflow-hidden ${
                  gameMode && targetLetter?.letter === item.letter ? 'ring-4 ring-brand-secondary ring-offset-4' : ''
                }`}
                style={{ backgroundColor: 'white' }}
              >
                {/* Background Accent */}
                <div className={`absolute top-0 left-0 w-full h-2 ${item.color}`} />
                
                <span className={`text-5xl sm:text-6xl font-display font-black ${item.letter === 'X' ? 'text-brand-dark' : item.color.replace('bg-', 'text-')}`}>
                  {item.letter}
                </span>

                <div className={`p-4 rounded-full bg-gray-50 group-hover:bg-brand-soft transition-colors`}>
                  <Icon className={`w-10 h-10 ${item.letter === 'X' ? 'text-brand-dark' : item.color.replace('bg-', 'text-')}`} />
                </div>

                <div className="text-center">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {lang}
                  </p>
                  <p className="text-base font-display font-bold text-brand-dark truncate w-full">
                    {example.word}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLetter(null)}
              className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedLetter.letter}`}
              className="relative w-full max-w-lg bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedLetter(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <div className={`h-28 sm:h-32 ${selectedLetter.color} flex items-center justify-center`}>
                <span className="text-6xl sm:text-8xl font-display font-black text-white drop-shadow-lg">
                  {selectedLetter.letter}
                </span>
              </div>

              <div className="p-6 sm:p-12">
                <div className="flex items-start sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-brand-dark mb-2 break-words">
                      {currentExample(selectedLetter).word}
                    </h3>
                    <div className="flex gap-2">
                      {languages.map(l => (
                        <span key={l.code} className={`px-2 py-1 rounded-lg text-xs font-bold ${lang === l.code ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {l.code.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`p-4 sm:p-6 rounded-3xl ${selectedLetter.color} bg-opacity-10 shrink-0`}>
                    {(() => {
                      const Icon = currentExample(selectedLetter).icon;
                      return (
                        <Icon
                          className={`w-12 h-12 sm:w-16 sm:h-16 ${
                            selectedLetter.letter === 'X'
                              ? 'text-brand-dark'
                              : selectedLetter.color.replace('bg-', 'text-')
                          }`}
                        />
                      );
                    })()}
                  </div>
                </div>

                <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-8">
                  {currentExample(selectedLetter).description}
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-4 text-brand-primary">
                      <Globe className="w-5 h-5" />
                      <span className="font-bold uppercase tracking-wider text-sm">Traducciones / Translations</span>
                    </div>
                    <div className="space-y-3">
                      {languages.map(l => (
                        <div key={l.code} className="flex items-center justify-between">
                          <span className="text-gray-500 font-medium">{l.name}</span>
                          <span className="font-display font-bold text-brand-dark">
                            {selectedLetter.examples[l.code as Language].word}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const msg = new SpeechSynthesisUtterance(currentExample(selectedLetter).word);
                    msg.lang = lang === 'fi' ? 'fi-FI' : lang === 'es' ? 'es-ES' : 'en-US';
                    window.speechSynthesis.speak(msg);
                  }}
                  className="w-full mt-8 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-3 transition-all active:scale-95"
                >
                  <Volume2 className="w-6 h-6" />
                  Escuchar / Listen / Kuuntele
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer / Navigation Hint */}
      {!gameMode && (
        <footer className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-30">
          <div className="glass-card px-4 sm:px-6 py-3 rounded-2xl sm:rounded-full flex items-center justify-center gap-3 sm:gap-4 border-brand-primary/20 max-w-full">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 min-w-0">
              <BookOpen className="w-4 h-4" />
              <span className="truncate">{currentLanguage?.letterCount} letras ({currentLanguage?.name})</span>
            </div>
            {lang === 'es' && (
              <span className="text-[10px] sm:text-xs text-orange-500 hidden sm:inline">
                CH y LL se incluyen por aprendizaje.
              </span>
            )}
            {lang === 'es' && (
              <span className="text-[10px] text-orange-500 sm:hidden">
                Incluye CH y LL.
              </span>
            )}
            <div className="hidden sm:block w-px h-4 bg-gray-200" />
            <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-primary">
              <Sparkles className="w-4 h-4" />
              <span>¡Sigue explorando!</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
