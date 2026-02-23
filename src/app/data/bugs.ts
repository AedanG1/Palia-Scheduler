import { activityType, defaultTimeSlots, rarity } from "./data";
import { PaliaActivity } from "./data"

  
export const bugs: Array<PaliaActivity> = [
  {
    id: "ancient-amber-beetle",
    name: "Ancient Amber Beetle",
    desc: "One of the oldest known insects species in Palia, was said to exist in the time of humans. Found in the forests of Bahari Bay. Also has a chance to be found when chopping trees in Bahari Bay.",
    location: "Bahari Forest",
    locationImage: "",
    displayImage: "/bug-ancient-amber-beetle.webp",
    timesAvailable: [
      {
        id: "ancient-amber-beetle-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "ancient-amber-beetle-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "ancient-amber-beetle-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "ancient-amber-beetle-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.epic,
    ...activityType.bugs,
  },
  {
    id: "ancient-flowbug",
    name: "Ancient Flowbug",
    desc: "A rare species of bioluminescent fauna that was previously thought to be a myth. Bahari Glowbugs are said to have descended from them.",
    location: "Temple of the Gales",
    locationImage: "",
    displayImage: "/bug-ancient-flowbug.webp",
    timesAvailable: [
      {
        id: "ancient-flowbug-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "ancient-flowbug-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "ancient-flowbug-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "ancient-flowbug-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.legendary,
    ...activityType.bugs,
  },
  {
    id: "azure-stonehopper",
    name: "Azure Stonehopper",
    desc: "This little blue beauty has been known to camouflage itself as a shiny blue pebble. Found in the fields of Bahari Bay.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-azure-stonehopper.webp",
    timesAvailable: [
      {
        id: "azure-stonehopper-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "azure-stonehopper-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "azure-stonehopper-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "azure-stonehopper-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "bahari-bee",
    name: "Bahari Bee",
    desc: "A local species of bees, known to produce delicious honey. Has a chance to be found when chopping trees in Bahari Bay.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-bahari-bee.webp",
    timesAvailable: [
      {
        id: "bahari-bee-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "bahari-bee-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "bahari-bee-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "bahari-bee-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "bahari-crab",
    name: "Bahari Crab",
    desc: "A local crab, known to taste good with drawn butter. Found along the coast of Bahari Bay. Also has a chance to be found when foraging shells in Bahari Bay.",
    location: "Bahari Coast",
    locationImage: "",
    displayImage: "/bug-bahari-crab.webp",
    timesAvailable: [
      {
        id: "bahari-crab-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "bahari-crab-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "bahari-crab-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "bahari-crab-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "bahari-glowbug",
    name: "Bahari Glowbug",
    desc: "A local species of bioluminescent fauna. Discovered by Professor Bonlin Amepongo. Found in the fields of Bahari Bay during the evening and night.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-bahari-glowbug.webp",
    timesAvailable: [
      {
        id: "bahari-glowbug-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "bahari-glowbug-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "blood-beetle",
    name: "Blood Beetle",
    desc: "Named for the startling red markings splashed across this beetle's exoskeleton. Despite the name they actually prefer feasting on piksii berries over anything sanguine.",
    location: "Elderwood Caves",
    locationImage: "",
    displayImage: "/bug-blood-beetle.webp",
    timesAvailable: [
      {
        id: "blood-beetle-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "blood-beetle-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "blood-beetle-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "blood-beetle-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "blushing-batterfly",
    name: "Blushing Batterfly",
    desc: "A batterfly that spends most of its time flitting among the bioluminescent foliage of the Elderwood's caves.",
    location: "Elderwood Caves",
    locationImage: "",
    displayImage: "/bug-blushing-batterfly.webp",
    timesAvailable: [
      {
        id: "blushing-batterfly-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "blushing-batterfly-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "blushing-batterfly-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "blushing-batterfly-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "brighteye-butterfly",
    name: "Brighteye Butterfly",
    desc: "Whenever you see the sun out, you can see the eyes of this intricately patterned butterfly looking around Bahari Bay. Found in the Forests of Bahari Bay during the morning and day.",
    location: "Bahari Forest",
    locationImage: "",
    displayImage: "/bug-brighteye-butterfly.webp",
    timesAvailable: [
      {
        id: "brighteye-butterfly-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "brighteye-butterfly-day",
        ...defaultTimeSlots.day,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "brushtail-dragonfly",
    name: "Brushtail Dragonfly",
    desc: "The tail of this Dragonfly is so bright and vibrant, some early Majiri were said to have used it as a paintbrush. Found around the lake in Kilima, as well as rivers and ponds in Bahari Bay.",
    location: "Bahari Rivers",
    locationImage: "",
    displayImage: "/bug-brushtail-dragonfly.webp",
    timesAvailable: [
      {
        id: "brushtail-dragonfly-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "brushtail-dragonfly-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "brushtail-dragonfly-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "brushtail-dragonfly-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "cave-piksii",
    name: "Cave Piksii",
    desc: "This Piksii lives under the staircase mushrooms that grow along the walls of caves in the Elderwood. Be careful where you tread, lest you disturb one and face its tiny wrath.",
    location: "Elderwood Caves",
    locationImage: "",
    displayImage: "/bug-cave-piksii.webp",
    timesAvailable: [
      {
        id: "cave-piksii-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "cave-piksii-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "cave-piksii-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "cave-piksii-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "cerulean-cicada",
    name: "Cerulean Cicada",
    desc: "The call of this cicada is so soothing, it was said to be the inspiration for Ayana's fourth symphony. Found attached to trees in Bahari Bay during the morning and day.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-cerulean-cicada.webp",
    timesAvailable: [
      {
        id: "cerulean-cicada-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "cerulean-cicada-day",
        ...defaultTimeSlots.day,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "common-bark-cicada",
    name: "Common Bark Cicada",
    desc: "A common cicada. Found attached to trees in Bahari Bay during the morning and day.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-common-bark-cicada.webp",
    timesAvailable: [
      {
        id: "common-bark-cicada-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "common-bark-cicada-day",
        ...defaultTimeSlots.day,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "common-blue-butterfly",
    name: "Common Blue Butterfly",
    desc: "Ever resilient. Butterflies of this type can be found in almost every climate in Palia. Found all around Kilima and Bahari Bay during the morning and day.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-common-blue-butterfly.webp",
    timesAvailable: [
      {
        id: "common-blue-butterfly-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "common-blue-butterfly-day",
        ...defaultTimeSlots.day,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "common-field-cricket",
    name: "Common Field Cricket",
    desc: "Field crickets can be found anywhere you can find a field. Found all around Kilima and Bahari Bay.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-common-field-cricket.webp",
    timesAvailable: [
      {
        id: "common-field-cricket-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "common-field-cricket-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "common-field-cricket-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "common-field-cricket-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "draugr-beetle",
    name: "Draugr Beetle",
    desc: "One might mistake the bright coloring on its armor for natural markings, but they're actually a sign of the parasitic fungus that has taken control of this unsuspecting beetle.",
    location: "Elderwood Swamps",
    locationImage: "",
    displayImage: "/bug-draugr-beetle.webp",
    timesAvailable: [
      {
        id: "draugr-beetle-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "draugr-beetle-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "draugr-beetle-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "draugr-beetle-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "duskwing-butterfly",
    name: "Duskwing Butterfly",
    desc: "A beautiful butterfly with wings the color of dusk. Unique to the Kilima Valley. Found around the Dragon Shrine in Kilima during the morning and day.",
    location: "Dragon Shrine",
    locationImage: "",
    displayImage: "/bug-duskwing-butterfly.webp",
    timesAvailable: [
      {
        id: "duskwing-butterfly-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "duskwing-butterfly-day",
        ...defaultTimeSlots.day,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "fairy-mantis",
    name: "Fairy Mantis",
    desc: "A mantis from early Majiri legend only recently confirmed to exist by modern entomologists. Said to have magical properties. Found in the fields of Bahari Bay.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-fairy-mantis.webp",
    timesAvailable: [
      {
        id: "fairy-mantis-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "fairy-mantis-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "fairy-mantis-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "fairy-mantis-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.epic,
    ...activityType.bugs,
  },
  {
    id: "firebreathing-dragonfly",
    name: "Firebreathing Dragonfly",
    desc: "This Dragonfly is notoriously difficult to catch, in part due to its fiery breath. Found in the fields of Kilima.",
    location: "Kilima Fields",
    locationImage: "",
    displayImage: "/bug-firebreathing-dragonfly.webp",
    timesAvailable: [
      {
        id: "firebreathing-dragonfly-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "firebreathing-dragonfly-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "firebreathing-dragonfly-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "firebreathing-dragonfly-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "flame-horned-rockhopper",
    name: "Flame-Horned Rockhopper",
    desc: "Despite the name, its horns are as cool and slimy to the touch as the rest of this rockhopper. It uses its fiery appearance to intimidate potential predators.",
    location: "Elderwood Swamps",
    locationImage: "",
    displayImage: "/bug-flame-horned-rockhopper.webp",
    timesAvailable: [
      {
        id: "flame-horned-rockhopper-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "flame-horned-rockhopper-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "flame-horned-rockhopper-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "flame-horned-rockhopper-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "garden-ladybug",
    name: "Garden Ladybug",
    desc: "A black and red ladybug, popular for controlling garden pests. Has a chance to be found when foraging in the fields of Bahari Bay.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-garden-ladybug.webp",
    timesAvailable: [
      {
        id: "garden-ladybug-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "garden-ladybug-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "garden-ladybug-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "garden-ladybug-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "garden-leafhopper",
    name: "Garden Leafhopper",
    desc: "The Garden Leafhopper is such a delight in Palia that many children keep them as pets. They are said to bring good luck. Found in the fields and Badruu's Farm in Kilima. Also has a chance to be found when foraging in Kilima.",
    location: "Kilima Fields",
    locationImage: "",
    displayImage: "/bug-garden-leafhopper.webp",
    timesAvailable: [
      {
        id: "garden-leafhopper-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "garden-leafhopper-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "garden-leafhopper-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "garden-leafhopper-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "garden-mantis",
    name: "Garden Mantis",
    desc: "Nothing to see here. Just your garden variety mantis. Found around the lake in Kilima. Also has a chance to be found when foraging around the lake in Kilima.",
    location: "Kilima Lake",
    locationImage: "",
    displayImage: "/bug-garden-mantis.webp",
    timesAvailable: [
      {
        id: "garden-mantis-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "garden-mantis-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "garden-mantis-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "garden-mantis-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "garden-millipede",
    name: "Garden Millipede",
    desc: "A brown and green millipede that loves feasting on garden crops. Found in the fields of Kilima. Also has a chance to be found when foraging in the fields of Kilima.",
    location: "Kilima Fields",
    locationImage: "",
    displayImage: "/bug-garden-millipede.webp",
    timesAvailable: [
      {
        id: "garden-millipede-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "garden-millipede-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "garden-millipede-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "garden-millipede-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "garden-snail",
    name: "Garden Snail",
    desc: "A snail that has evolved over time to look like a leaf. Good for hiding from predators, bad for hiding from the Leafstalker Mantis. Found along the coast and in forests of Bahari Bay.",
    location: "Bahari Coast",
    locationImage: "",
    displayImage: "/bug-garden-snail.webp",
    timesAvailable: [
      {
        id: "garden-snail-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "garden-snail-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "garden-snail-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "garden-snail-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "golden-glory-bee",
    name: "Golden Glory Bee",
    desc: "A rare bee, imported from the Akwindu province. Mead made from this bee's honey is said to be heavily consumed by the Queen of the province and her family. Has a chance to be found when chopping trees in Kilima during the morning and day.",
    location: "Kilima Fields",
    locationImage: "",
    displayImage: "/bug-golden-glory-bee.webp",
    timesAvailable: [
      {
        id: "golden-glory-bee-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "golden-glory-bee-day",
        ...defaultTimeSlots.day,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "gossamer-veil-moth",
    name: "Gossamer Veil Moth",
    desc: "The wings of this moth are so thin that some say you can see a peek of the Dragon Realm by looking through them. Found in the fields of Kilima during the evening and night.",
    location: "Kilima Fields",
    locationImage: "",
    displayImage: "/bug-gossamer-veil-moth.webp",
    timesAvailable: [
      {
        id: "gossamer-veil-moth-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "gossamer-veil-moth-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "grumpy-granite-rockhopper",
    name: "Grumpy Granite Rockhopper",
    desc: "It is impossible to tell if this rockhopper is genuinely mad at you, or if its face just looks that way.",
    location: "Elderwood Forest",
    locationImage: "",
    displayImage: "/bug-grumpy-granite-rockhopper.webp",
    timesAvailable: [
      {
        id: "grumpy-granite-rockhopper-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "grumpy-granite-rockhopper-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "grumpy-granite-rockhopper-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "grumpy-granite-rockhopper-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "hairy-millipede",
    name: "Hairy Millipede",
    desc: "A millipede with a hair growth problem. Found in the forests of Bahari Bay.",
    location: "Bahari Forest",
    locationImage: "",
    displayImage: "/bug-hairy-millipede.webp",
    timesAvailable: [
      {
        id: "hairy-millipede-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "hairy-millipede-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "hairy-millipede-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "hairy-millipede-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "inky-dragonfly",
    name: "Inky Dragonfly",
    desc: "This stealthy Dragonfly is used as a component in various black dyes and inks. Found around rivers and ponds in Bahari Bay.",
    location: "Bahari Rivers",
    locationImage: "",
    displayImage: "/bug-inky-dragonfly.webp",
    timesAvailable: [
      {
        id: "inky-dragonfly-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "inky-dragonfly-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "inky-dragonfly-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "inky-dragonfly-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "jewelwing-dragonfly",
    name: "Jewelwing Dragonfly",
    desc: "A Dragonfly with wings as bright and colorful as any precious stone. Found near a cave entrance on a cliff in Bahari Bay.",
    location: "Cliffs Above Pavel Mines",
    locationImage: "",
    displayImage: "/bug-jewelwing-dragonfly.webp",
    timesAvailable: [
      {
        id: "jewelwing-dragonfly-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "jewelwing-dragonfly-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "jewelwing-dragonfly-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "jewelwing-dragonfly-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.epic,
    ...activityType.bugs,
  },
  {
    id: "kilima-night-moth",
    name: "Kilima Night Moth",
    desc: "While beautiful, the Kilima night moth is so prevalent on hot summer nights that some consider it to be a pest. Keep away from stored cloth. Found all around Kilima and Bahari Bay during the evening and night.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-kilima-night-moth.webp",
    timesAvailable: [
      {
        id: "kilima-night-moth-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "kilima-night-moth-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "leafstalker-mantis",
    name: "Leafstalker Mantis",
    desc: "An herbivorous mantis that exclusively eats leaves. Has a chance to be found when foraging in the forests of Bahari Bay.",
    location: "Bahari Forest",
    locationImage: "",
    displayImage: "/bug-leafstalker-mantis.webp",
    timesAvailable: [
      {
        id: "leafstalker-mantis-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "leafstalker-mantis-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "leafstalker-mantis-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "leafstalker-mantis-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "lunar-fairy-moth",
    name: "Lunar Fairy Moth",
    desc: "The Lunar Fairy Moth is said to have a very special connection to the Dragon Moon, and is said to only appear at special times during its cycle. Found in the fields and forests of Bahari Bay during the evening and night.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-lunar-fairy-moth.webp",
    timesAvailable: [
      {
        id: "lunar-fairy-moth-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "lunar-fairy-moth-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "nightshadow-batterfly",
    name: "Nightshadow Batterfly",
    desc: "This batterfly only comes out under the cover of night and canopy both.",
    location: "Elderwood Caves",
    locationImage: "",
    displayImage: "/bug-nightshadow-batterfly.webp",
    timesAvailable: [
      {
        id: "nightshadow-batterfly-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "nightshadow-batterfly-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "paper-lantern-bug",
    name: "Paper Lantern Bug",
    desc: "This bug glows as brightly as a colorful feast day lantern taking flight into the Palian night sky. Found along the coast and in forests of Bahari Bay during the evening and night.",
    location: "Bahari Coast",
    locationImage: "",
    displayImage: "/bug-paper-lantern-bug.webp",
    timesAvailable: [
      {
        id: "paper-lantern-bug-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "paper-lantern-bug-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "princess-ladybug",
    name: "Princess Ladybug",
    desc: "A very regal looking lady bug, made popular by the children's fairytale, The Princess Who Turned Into A Ladybug. Found around the lake in Kilima.",
    location: "Kilima Lake",
    locationImage: "",
    displayImage: "/bug-princess-ladybug.webp",
    timesAvailable: [
      {
        id: "princess-ladybug-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "princess-ladybug-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "princess-ladybug-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "princess-ladybug-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "proudhorned-stag-beetle",
    name: "Proudhorned Stag Beetle",
    desc: "The horns of this stag beetle are said to resemble that of the Proudhorned Sernuk . Has a chance to be found when mining in Kilima.",
    location: "Kilima Fields",
    locationImage: "",
    displayImage: "/bug-proudhorned-stag-beetle.webp",
    timesAvailable: [
      {
        id: "proudhorned-stag-beetle-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "proudhorned-stag-beetle-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "proudhorned-stag-beetle-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "proudhorned-stag-beetle-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "pumpkin-rockhopper",
    name: "Pumpkin Rockhopper",
    desc: "This rockhopper has evolved to sport a rather spooky face on its back, likely to scare away predators. Just don't let it scare away YOU!",
    location: "Kilima",
    locationImage: "",
    displayImage: "/bug-pumpkin-rockhopper.webp",
    timesAvailable: [
      {
        id: "pumpkin-rockhopper-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "pumpkin-rockhopper-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "pumpkin-rockhopper-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "pumpkin-rockhopper-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "rainbow-tipped-butterfly",
    name: "Rainbow-tipped Butterfly",
    desc: "Ancient legends say this rare butterfly got its beautiful coloring from dipping the tip of its wings in a Well of Flow. Found in the Fields of Bahari Bay during the morning and day.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-rainbow-tipped-butterfly.webp",
    timesAvailable: [
      {
        id: "rainbow-tipped-butterfly-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "rainbow-tipped-butterfly-day",
        ...defaultTimeSlots.day,
      },
    ],
    ...rarity.epic,
    ...activityType.bugs,
  },
  {
    id: "raspberry-beetle",
    name: "Raspberry Beetle",
    desc: "A beetle whose entire diet consists of raspberries. Found around Badruu's Farm in Kilima.",
    location: "Daiya Family Farm",
    locationImage: "",
    displayImage: "/bug-raspberry-beetle.webp",
    timesAvailable: [
      {
        id: "raspberry-beetle-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "raspberry-beetle-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "raspberry-beetle-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "raspberry-beetle-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "scintillating-centipede",
    name: "Scintillating Centipede",
    desc: "A rare centipede with a shiny hard shell. Has a chance to be found when mining in Bahari Bay.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-scintillating-centipede.webp",
    timesAvailable: [
      {
        id: "scintillating-centipede-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "scintillating-centipede-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "scintillating-centipede-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "scintillating-centipede-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "spineshell-crab",
    name: "Spineshell Crab",
    desc: "A crab with a very spiny shell. Found along the coast of Bahari Bay.",
    location: "Bahari Coast",
    locationImage: "",
    displayImage: "/bug-spineshell-crab.webp",
    timesAvailable: [
      {
        id: "spineshell-crab-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "spineshell-crab-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "spineshell-crab-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "spineshell-crab-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "spitfire-cicada",
    name: "Spitfire Cicada",
    desc: "A spirited cicada, whose bark is worse than its bite. Found attached to trees in Bahari Bay during the morning and day.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-spitfire-cicada.webp",
    timesAvailable: [
      {
        id: "spitfire-cicada-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "spitfire-cicada-day",
        ...defaultTimeSlots.day,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "spotted-mantis",
    name: "Spotted Mantis",
    desc: "A rare mantis with a beautiful set of spots. Found around the Dragon Shrine in Kilima.",
    location: "Dragon Shrine",
    locationImage: "",
    displayImage: "/bug-spotted-mantis.webp",
    timesAvailable: [
      {
        id: "spotted-mantis-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "spotted-mantis-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "spotted-mantis-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "spotted-mantis-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "spotted-stinkbug",
    name: "Spotted Stinkbug",
    desc: "A bug known more for his strong musk than its striking colors. Found all around Kilima and Bahari Bay.",
    location: "Bahari Fields",
    locationImage: "",
    displayImage: "/bug-spotted-stinkbug.webp",
    timesAvailable: [
      {
        id: "spotted-stinkbug-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "spotted-stinkbug-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "spotted-stinkbug-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "spotted-stinkbug-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "stripeshell-snail",
    name: "Stripeshell Snail",
    desc: "A snail with such distinctive stripes, that its shell was once used as a currency among the early Majiri. Found along the coast in Bahari Bay.",
    location: "Bahari Coast",
    locationImage: "",
    displayImage: "/bug-stripeshell-snail.webp",
    timesAvailable: [
      {
        id: "stripeshell-snail-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "stripeshell-snail-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "sunburst-batterfly",
    name: "Sunburst Batterfly",
    desc: "Unlike its light-averse brethren, this batterfly thrives under the meager light of the Elderwood.",
    location: "Elderwood Forest",
    locationImage: "",
    displayImage: "/bug-sunburst-batterfly.webp",
    timesAvailable: [
      {
        id: "sunburst-batterfly-day",
        ...defaultTimeSlots.day,
      },
    ],
    ...rarity.uncommon,
    ...activityType.bugs,
  },
  {
    id: "vampire-crab",
    name: "Vampire Crab",
    desc: "An invasive species of crab that sucks the life out of the local population. Found around the Flooded Fortress in Bahari Bay during the evening and night.",
    location: "Flooded Fortress",
    locationImage: "",
    displayImage: "/bug-vampire-crab.webp",
    timesAvailable: [
      {
        id: "vampire-crab-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "vampire-crab-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.rare,
    ...activityType.bugs,
  },
  {
    id: "veil-piksii",
    name: "Veil Piksii",
    desc: "These Piksiis are said to form from the Flow of those unable to cross the Veil. Strange that so many should populate the Elderwood.",
    location: "Elderwood Caves",
    locationImage: "",
    displayImage: "/bug-veil-piksii.webp",
    timesAvailable: [
      {
        id: "veil-piksii-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "veil-piksii-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "veil-piksii-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "veil-piksii-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.common,
    ...activityType.bugs,
  },
  {
    id: "will-o-wisp-rockhopper",
    name: "Will-o-wisp Rockhopper",
    desc: "This pale rockhopper is said to glow softly in the dark of the Elderwood, luring unwitting travelers deeper into the marsh.",
    location: "Elderwood Forest",
    locationImage: "",
    displayImage: "/bug-will-o-wisp-rockhopper.webp",
    timesAvailable: [
      {
        id: "will-o-wisp-rockhopper-morning",
        ...defaultTimeSlots.morning,
      },
      {
        id: "will-o-wisp-rockhopper-day",
        ...defaultTimeSlots.day,
      },
      {
        id: "will-o-wisp-rockhopper-evening",
        ...defaultTimeSlots.evening,
      },
      {
        id: "will-o-wisp-rockhopper-night",
        ...defaultTimeSlots.night,
      },
    ],
    ...rarity.epic,
    ...activityType.bugs,
  },
];