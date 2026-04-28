import { 
  Dog, Cat, Bird, Fish, Rabbit, 
  Apple, Banana, Carrot, Egg, Flower, 
  Heart, IceCream, Gamepad2, Key, Leaf, 
  Moon, Circle, Pizza, Crown, Rocket, 
  Sun, Train, Umbrella, Mountain, Watch, Music, 
  Ship, Zap, Cloud, Star, Anchor, CloudRain, 
  Book, Camera, Earth, Flame, Gift, Home, 
  Infinity, Lamp, Map, Notebook, Plane, Orbit,
  Radio, Trees, Wind, Smile,
  Bug, PawPrint, TreePalm, Milk, Rat, Grape, Weight, Globe, FlaskConical, Eye, SportShoe,
  ZoomIn, Thermometer, Snail, BadgeDollarSign, HatGlasses, Drum, Hammer, Volleyball, Wheat, Microwave, Diamond, Candy
} from 'lucide-react';

export type Language = 'fi' | 'es' | 'en';

export interface AlphabetItem {
  letter: string;
  examples: {
    [key in Language]: {
      word: string;
      icon: any;
      description: string;
    }
  };
  color: string;
}

export const ALPHABET_DATA: AlphabetItem[] = [
  {
    letter: 'A',
    color: 'bg-red-400',
    examples: {
      en: { word: 'Apple', icon: Apple, description: 'A sweet red fruit.' },
      es: { word: 'Avión', icon: Plane, description: 'Un transporte que vuela por el cielo.' },
      fi: { word: 'Aurinko', icon: Sun, description: 'Suuri tähti taivaalla.' }
    }
  },
  {
    letter: 'B',
    color: 'bg-blue-400',
    examples: {
      en: { word: 'Bird', icon: Bird, description: 'An animal that flies.' },
      es: { word: 'Ballena', icon: Fish, description: 'Un mamífero gigante del mar.' },
      fi: { word: 'Banaani', icon: Banana, description: 'Keltainen hedelmä.' }
    }
  },
  {
    letter: 'C',
    color: 'bg-green-400',
    examples: {
      en: { word: 'Cat', icon: Cat, description: 'A small furry pet.' },
      es: { word: 'Conejo', icon: Rabbit, description: 'Un animal con orejas largas.' },
      fi: { word: 'Celsius', icon: Thermometer, description: 'Lampotilan mittayksikko.' }
    }
  },
  {
    letter: 'CH',
    color: 'bg-green-400',
    examples: {
      en: { word: 'Chocolate', icon: Candy, description: 'A sweet treat made from cocoa.' },
      es: { word: 'Chocolate', icon: Candy, description: 'Un dulce delicioso hecho con cacao.' },
      fi: { word: 'Suklaa', icon: Candy, description: 'Makea herkku, joka tehdaan kaakaosta.' }
    }
  },
  {
    letter: 'D',
    color: 'bg-yellow-400',
    examples: {
      en: { word: 'Dog', icon: Dog, description: 'Man\'s best friend.' },
      es: { word: 'Diamante', icon: Diamond, description: 'Una piedra preciosa brillante y muy valiosa.' },
      fi: { word: 'Dollari', icon: BadgeDollarSign, description: 'Rahan yksikkö, jota käytetään monissa maissa.' }
    }
  },
  {
    letter: 'E',
    color: 'bg-purple-400',
    examples: {
      en: { word: 'Egg', icon: Egg, description: 'Chickens lay these.' },
      es: { word: 'Estrella', icon: Star, description: 'Un astro brillante que vemos en el cielo nocturno.' },
      fi: { word: 'Etana', icon: Snail, description: 'Hidas eläin, jolla on koti selässä.' }
    }
  },
  {
    letter: 'F',
    color: 'bg-pink-400',
    examples: {
      en: { word: 'Flower', icon: Flower, description: 'A beautiful plant.' },
      es: { word: 'Fuego', icon: Flame, description: 'Algo muy caliente.' },
      fi: { word: 'Fasaani', icon: Bird, description: 'Värikäs lintu.' }
    }
  },
  {
    letter: 'G',
    color: 'bg-orange-400',
    examples: {
      en: { word: 'Gift', icon: Gift, description: 'Something you give to a friend.' },
      es: { word: 'Gato', icon: Cat, description: 'Un felino doméstico.' },
      fi: { word: 'Globe', icon: Globe, description: 'Maapalloa kuvaava pallo tai maailmaa esittava symboli.' }
    }
  },
  {
    letter: 'H',
    color: 'bg-teal-400',
    examples: {
      en: { word: 'Heart', icon: Heart, description: 'A symbol of love.' },
      es: { word: 'Huella', icon: PawPrint, description: 'La marca que deja la pata de un animal.' },
      fi: { word: 'Hattu', icon: HatGlasses, description: 'Paahan laitettava vaatekappale.' }
    }
  },
  {
    letter: 'I',
    color: 'bg-indigo-400',
    examples: {
      en: { word: 'Ice Cream', icon: IceCream, description: 'A cold treat.' },
      es: { word: 'Insecto', icon: Bug, description: 'Un animal pequeño con seis patas.' },
      fi: { word: 'Iloinen', icon: Smile, description: 'Ihminen, joka on hyvalla tuulella ja onnellinen.' }
    }
  },
  {
    letter: 'J',
    color: 'bg-cyan-400',
    examples: {
      en: { word: 'Joypad', icon: Gamepad2, description: 'Used for playing games.' },
      es: { word: 'Juego', icon: Gamepad2, description: 'Actividad divertida para jugar.' },
      fi: { word: 'Juna', icon: Train, description: 'Kulkuneuvo, joka kulkee raiteilla.' }
    }
  },
  {
    letter: 'K',
    color: 'bg-lime-400',
    examples: {
      en: { word: 'Key', icon: Key, description: 'Used to open locks.' },
      es: { word: 'Kilo', icon: Weight, description: 'Una unidad de peso usada para medir.' },
      fi: { word: 'Kukka', icon: Flower, description: 'Kaunis kasvi.' }
    }
  },
  {
    letter: 'L',
    color: 'bg-emerald-400',
    examples: {
      en: { word: 'Leaf', icon: Leaf, description: 'Part of a tree.' },
      es: { word: 'Luna', icon: Moon, description: 'El satelite natural de la Tierra que vemos por la noche.' },
      fi: { word: 'Lintu', icon: Bird, description: 'Eläin, joka lentää.' }
    }
  },
  {
    letter: 'LL',
    color: 'bg-emerald-400',
    examples: {
      en: { word: 'Rain', icon: CloudRain, description: 'Water falling from the clouds.' },
      es: { word: 'Lluvia', icon: CloudRain, description: 'Agua que cae de las nubes.' },
      fi: { word: 'Sade', icon: CloudRain, description: 'Vetta, joka putoaa pilvista.' }
    }
  },
  {
    letter: 'M',
    color: 'bg-rose-400',
    examples: {
      en: { word: 'Moon', icon: Moon, description: 'It shines at night.' },
      es: { word: 'Manzana', icon: Apple, description: 'Una fruta roja o verde.' },
      fi: { word: 'Maa', icon: Earth, description: 'Planeetta, jolla asumme.' }
    }
  },
  {
    letter: 'N',
    color: 'bg-sky-400',
    examples: {
      en: { word: 'Notebook', icon: Notebook, description: 'A book with pages for writing notes.' },
      es: { word: 'Nube', icon: Cloud, description: 'Vapor de agua en el cielo.' },
      fi: { word: 'Nuotti', icon: Music, description: 'Musiikin merkki, joka kertoo aanen korkeuden ja keston.' }
    }
  },
  {
    letter: 'Ñ',
    color: 'bg-sky-400',
    examples: {
      en: { word: 'Nandu', icon: Bird, description: 'A large bird from South America.' },
      es: { word: 'Ñandú', icon: Bird, description: 'Un ave grande que vive en Sudamérica.' },
      fi: { word: 'Nandu', icon: Bird, description: 'Etela-Amerikassa elava suuri lintu.' }
    }
  },
  {
    letter: 'O',
    color: 'bg-amber-400',
    examples: {
      en: { word: 'Orbit', icon: Orbit, description: 'The path an object follows around a planet or star.' },
      es: { word: 'Ojo', icon: Eye, description: 'Organo con el que vemos.' },
      fi: { word: 'Omena', icon: Apple, description: 'Makea hedelmä.' }
    }
  },
  {
    letter: 'P',
    color: 'bg-violet-400',
    examples: {
      en: { word: 'Pizza', icon: Pizza, description: 'A tasty Italian food.' },
      es: { word: 'Planeta', icon: Earth, description: 'Un cuerpo celeste grande como la Tierra.' },
      fi: { word: 'Pallo', icon: Volleyball, description: 'Pyöreä esine leikkimiseen.' }
    }
  },
  {
    letter: 'Q',
    color: 'bg-fuchsia-400',
    examples: {
      en: { word: 'Queen', icon: Crown, description: 'A female ruler.' },
      es: { word: 'Química', icon: FlaskConical, description: 'La ciencia que estudia las sustancias y sus cambios.' },
      fi: { word: 'Quinoa', icon: Wheat, description: 'Terveellinen siemen tai viljamainen ruoka-aine.' }
    }
  },
  {
    letter: 'R',
    color: 'bg-red-500',
    examples: {
      en: { word: 'Rocket', icon: Rocket, description: 'It goes to space.' },
      es: { word: 'Ratón', icon: Rat, description: 'Un animal pequeño.' },
      fi: { word: 'Rumpu', icon: Drum, description: 'Soitin, jota lyödään.' }
    }
  },
  {
    letter: 'S',
    color: 'bg-blue-500',
    examples: {
      en: { word: 'Sun', icon: Sun, description: 'The star of our system.' },
      es: { word: 'Sol', icon: Sun, description: 'La estrella del día.' },
      fi: { word: 'Sydän', icon: Heart, description: 'Elin, joka pumppaa verta kehossa.' }
    }
  },
  {
    letter: 'T',
    color: 'bg-green-500',
    examples: {
      en: { word: 'Train', icon: Train, description: 'It travels on tracks.' },
      es: { word: 'Tigre', icon: Cat, description: 'Un felino con rayas.' },
      fi: { word: 'Tähti', icon: Star, description: 'Pieni valo yötaivaalla.' }
    }
  },
  {
    letter: 'U',
    color: 'bg-yellow-500',
    examples: {
      en: { word: 'Umbrella', icon: Umbrella, description: 'Keeps you dry in rain.' },
      es: { word: 'Uva', icon: Grape, description: 'Una fruta pequeña y redonda.' },
      fi: { word: 'Uuni', icon: Microwave, description: 'Laite, jossa valmistetaan tai lämmitetään ruokaa.' }
    }
  },
  {
    letter: 'V',
    color: 'bg-purple-500',
    examples: {
      en: { word: 'Volcano', icon: Mountain, description: 'A mountain with lava.' },
      es: { word: 'Volcán', icon: Mountain, description: 'Una montaña que echa fuego.' },
      fi: { word: 'Vasara', icon: Hammer, description: 'Työkalu, jolla lyödään nauloja.' }
    }
  },
  {
    letter: 'W',
    color: 'bg-pink-500',
    examples: {
      en: { word: 'Watch', icon: Watch, description: 'Tells the time.' },
      es: { word: 'Web', icon: Globe, description: 'La red de internet donde vemos paginas y contenido.' },
      fi: { word: 'Watti', icon: Zap, description: 'Sähkötehon yksikkö.' }
    }
  },
  {
    letter: 'X',
    color: 'bg-orange-500',
    examples: {
      en: { word: 'Xylophone', icon: Music, description: 'A musical instrument.' },
      es: { word: 'Xilófono', icon: Music, description: 'Un instrumento musical.' },
      fi: { word: 'Xylitoli', icon: Smile, description: 'Hampaille hyvä aine.' }
    }
  },
  {
    letter: 'Y',
    color: 'bg-teal-500',
    examples: {
      en: { word: 'Yacht', icon: Ship, description: 'A fancy boat.' },
      es: { word: 'Yate', icon: Ship, description: 'Una embarcación elegante que navega por el agua.' },
      fi: { word: 'Yö', icon: Moon, description: 'Aika, jolloin nukutaan.' }
    }
  },
  {
    letter: 'Z',
    color: 'bg-indigo-500',
    examples: {
      en: { word: 'Zoom', icon: ZoomIn, description: 'Make something look bigger on a screen.' },
      es: { word: 'Zapato', icon: SportShoe, description: 'Un calzado que usamos para caminar y correr.' },
      fi: { word: 'piZZa', icon: Pizza, description: 'Suosittu ruoka, jossa on usein juustoa ja taytteita.' }
    }
  },
  {
    letter: 'Å',
    color: 'bg-emerald-500',
    examples: {
      en: { word: 'Aland', icon: Map, description: 'A Nordic archipelago often written as Åland.' },
      es: { word: 'Aland', icon: Map, description: 'Archipielago nordico que suele escribirse como Åland.' },
      fi: { word: 'Åland', icon: Map, description: 'Itsehallinnollinen saaristo Suomen alueella.' }
    }
  },
  {
    letter: 'Ä',
    color: 'bg-cyan-500',
    examples: {
      en: { word: 'Aiti', icon: Heart, description: 'From Finnish "aiti" (mother), written as "aiti" with umlaut.' },
      es: { word: 'Aiti', icon: Heart, description: 'Del finlandes "aiti" (mama), que se escribe con dieresis.' },
      fi: { word: 'Äiti', icon: Heart, description: 'Sana, joka tarkoittaa mamaa.' }
    }
  },
  {
    letter: 'Ö',
    color: 'bg-lime-500',
    examples: {
      en: { word: 'Oljy', icon: Flame, description: 'From Finnish "oljy" (oil), written as "oljy" with umlaut.' },
      es: { word: 'Oljy', icon: Flame, description: 'Del finlandes "oljy" (aceite), se escribe con dieresis.' },
      fi: { word: 'Ötökkä', icon: Bug, description: 'Pieni hyonteinen tai muu pikku otus.' }
    }
  }
];
