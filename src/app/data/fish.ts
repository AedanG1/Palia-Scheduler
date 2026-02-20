import { defaultTimeSlots, bait, rarity } from "./data";
import type { PaliaActivity } from "./data";

export const fish: Array<PaliaActivity> = [
{
        id: "albino-eel",
        name: "Albino Eel",
        desc: "An eel with no pigmentation. Found in Bahari Bay caves using worms.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-albino-eel.png",
        timesAvailable: [
            {
              id: "albino-eel-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "albino-eel-day",
              ...defaultTimeSlots.day
          },
      {
              id: "albino-eel-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "albino-eel-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "alligator-gar",
        name: "Alligator Gar",
        desc: "A carnivorous fish with brilliant purple scales, the Alligator Gar is named after its long snout and rows of large teeth. Found in Kilima Lake using glow worms.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-alligator-gar.png",
        timesAvailable: [
            {
              id: "alligator-gar-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "alligator-gar-day",
              ...defaultTimeSlots.day
          },
      {
              id: "alligator-gar-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "alligator-gar-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "ancient-cloudminnow",
        name: "Ancient Cloudminnow",
        desc: "A legendary minnow that was previously only known in legend. Found in clouds... allegedly.",
        location: "Temple of the Gales",
        locationImage: "",
        displayImage: "/fish-ancient-cloudminnow.png",
        timesAvailable: [
            {
              id: "ancient-cloudminnow-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "ancient-cloudminnow-day",
              ...defaultTimeSlots.day
          },
      {
              id: "ancient-cloudminnow-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "ancient-cloudminnow-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.legendary,
        type: "Fish"
    },
{
        id: "ancient-fish",
        name: "Ancient Fish",
        desc: "These fish are as old as the continent of Palia itself, and were thought to be extinct. Guess you have something in common.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-ancient-fish.png",
        timesAvailable: [
            {
              id: "ancient-fish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "ancient-fish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "ancient-fish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "ancient-fish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.epic,
        type: "Fish"
    },
{
        id: "ancient-koi",
        name: "Ancient Koi",
        desc: "Legends say these koi once lived in the ponds of King Mudan's palace.",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-ancient-koi.png",
        timesAvailable: [
            {
              id: "ancient-koi-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "ancient-koi-day",
              ...defaultTimeSlots.day
          },
      {
              id: "ancient-koi-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "ancient-koi-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "angelfish",
        name: "Angelfish",
        desc: "Be not afraid.",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-angelfish.png",
        timesAvailable: [
            {
              id: "angelfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "angelfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "angelfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "angelfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "bahari-bass",
        name: "Bahari Bass",
        desc: "A bountiful, staple fish known for its mild flavor. Found off the coast of Bahari Bay without bait.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-bahari-bass.png",
        timesAvailable: [
            {
              id: "bahari-bass-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "bahari-bass-day",
              ...defaultTimeSlots.day
          },
      {
              id: "bahari-bass-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "bahari-bass-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "bahari-bream",
        name: "Bahari Bream",
        desc: "These fish are widely considered to be a staple of the local diet. Found off the coast of Bahari Bay using worms.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-bahari-bream.png",
        timesAvailable: [
            {
              id: "bahari-bream-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "bahari-bream-day",
              ...defaultTimeSlots.day
          },
      {
              id: "bahari-bream-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "bahari-bream-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "bahari-pike",
        name: "Bahari Pike",
        desc: "A pike with a deep green hue native to Bahari Bay. Found in Bahari rivers using glow worms.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-bahari-pike.png",
        timesAvailable: [
            {
              id: "bahari-pike-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "bahari-pike-day",
              ...defaultTimeSlots.day
          },
      {
              id: "bahari-pike-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "bahari-pike-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "barracuda",
        name: "Barracuda",
        desc: "A vicious saltwater predator that tastes great lightly grilled with a little butter. Found off the coast of Bahari Bay without bait in the evening and night.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-barracuda.png",
        timesAvailable: [
            {
              id: "barracuda-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "barracuda-day",
              ...defaultTimeSlots.day
          },
      {
              id: "barracuda-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "barracuda-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "bat-ray",
        name: "Bat Ray",
        desc: "An ominous ray that is known to leap out of the water like a flying bat. Found in Bahari Bay caves using worms.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-bat-ray.png",
        timesAvailable: [
            {
              id: "bat-ray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "bat-ray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "bat-ray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "bat-ray-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "beluga-sturgeon",
        name: "Beluga Sturgeon",
        desc: "A large sturgeon that grows throughout its entire lifetime. Found in Kilima Lake using glow worms.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-beluga-sturgeon.png",
        timesAvailable: [
            {
              id: "beluga-sturgeon-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "beluga-sturgeon-day",
              ...defaultTimeSlots.day
          },
      {
              id: "beluga-sturgeon-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "beluga-sturgeon-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "black-sea-bass",
        name: "Black Sea Bass",
        desc: "Known for the black spots on their skin, these bass are gentle and non-threatening to Majiri and humans alike. Found off the coast of Bahari Bay using glow worms.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-black-sea-bass.png",
        timesAvailable: [
            {
              id: "black-sea-bass-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "black-sea-bass-day",
              ...defaultTimeSlots.day
          },
      {
              id: "black-sea-bass-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "black-sea-bass-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "blobfish",
        name: "Blobfish",
        desc: "A bloated, slimy fish that lives at the bottom of cavern pools. Found in Bahari Bay caves using glow worms.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-blobfish.png",
        timesAvailable: [
            {
              id: "blobfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "blobfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "blobfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "blobfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "blue-marlin",
        name: "Blue Marlin",
        desc: "A large and resilient fish. The Blue Marlin is considered a prize by even the most experienced fishermen. Found off the coast of Bahari Bay using worms.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-blue-marlin.png",
        timesAvailable: [
            {
              id: "blue-marlin-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "blue-marlin-day",
              ...defaultTimeSlots.day
          },
      {
              id: "blue-marlin-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "blue-marlin-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "blue-spotted-ray",
        name: "Blue Spotted Ray",
        desc: "A colorful stingray with bright blue spots across its body and blue stripes along its tail. Found off the coast of Bahari Bay using glow worms in the morning, day, and evening.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-blue-spotted-ray.png",
        timesAvailable: [
            {
              id: "blue-spotted-ray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "blue-spotted-ray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "blue-spotted-ray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "blue-spotted-ray-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "bluefin-tuna",
        name: "Bluefin Tuna",
        desc: "A common, sleek fish adapted for swimming quickly through ocean currents. Found off the coast of Bahari Bay using worms.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-bluefin-tuna.png",
        timesAvailable: [
            {
              id: "bluefin-tuna-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "bluefin-tuna-day",
              ...defaultTimeSlots.day
          },
      {
              id: "bluefin-tuna-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "bluefin-tuna-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "bronze-bluegill",
        name: "Bronze Bluegill",
        desc: "Just like the Orange Bluegill , this fish has nary a spot of blue to be seen- not even its gills!",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-bronze-bluegill.png",
        timesAvailable: [
            {
              id: "bronze-bluegill-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "bronze-bluegill-day",
              ...defaultTimeSlots.day
          },
      {
              id: "bronze-bluegill-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "bronze-bluegill-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "cactus-moray",
        name: "Cactus Moray",
        desc: "An eel with sharp spines growing along its length to deter predators. Found off the coast of Bahari Bay using glow worms in the day and night.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-cactus-moray.png",
        timesAvailable: [
            {
              id: "cactus-moray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "cactus-moray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "cactus-moray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "cactus-moray-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "calico-koi",
        name: "Calico Koi",
        desc: "A standard koi fish with a beautiful calico pattern. Found in ponds without using any bait.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-calico-koi.png",
        timesAvailable: [
            {
              id: "calico-koi-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "calico-koi-day",
              ...defaultTimeSlots.day
          },
      {
              id: "calico-koi-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "calico-koi-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "cantankerous-koi",
        name: "Cantankerous Koi",
        desc: "Local legend has it that the first Cantankerous Koi was a cranky old man transfigured by a wicked witch. Found in ponds without using any bait during the day and at night.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-cantankerous-koi.png",
        timesAvailable: [
            {
              id: "cantankerous-koi-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "cantankerous-koi-day",
              ...defaultTimeSlots.day
          },
      {
              id: "cantankerous-koi-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "cantankerous-koi-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "channel-catfish",
        name: "Channel Catfish",
        desc: "A river catfish at home navigating fast currents. Found in Kilima Rivers without bait.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-channel-catfish.png",
        timesAvailable: [
            {
              id: "channel-catfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "channel-catfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "channel-catfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "channel-catfish-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "chub",
        name: "Chub",
        desc: "A hard-fighting fish famous for its wide ranging appetite. Found in Bahari rivers using glow worms.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-chub.png",
        timesAvailable: [
            {
              id: "chub-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "chub-day",
              ...defaultTimeSlots.day
          },
      {
              id: "chub-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "chub-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "cloudfish",
        name: "Cloudfish",
        desc: "A bottom feeding pondfish that can create swirling clouds of sediment for cover. Found in ponds using glow worms in the morning and day.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-cloudfish.png",
        timesAvailable: [
            {
              id: "cloudfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "cloudfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "cloudfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "cloudfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "crimson-fangtooth",
        name: "Crimson Fangtooth",
        desc: "A small red fish with huge teeth in proportion to its own size. Found in Bahari Bay caves using glow worms.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-crimson-fangtooth.png",
        timesAvailable: [
            {
              id: "crimson-fangtooth-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "crimson-fangtooth-day",
              ...defaultTimeSlots.day
          },
      {
              id: "crimson-fangtooth-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "crimson-fangtooth-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "crucian-carp",
        name: "Crucian Carp",
        desc: "A hardy carp with coppery golden scales. Found in Kilima rivers using glow worms.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-crucian-carp.png",
        timesAvailable: [
            {
              id: "crucian-carp-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "crucian-carp-day",
              ...defaultTimeSlots.day
          },
      {
              id: "crucian-carp-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "crucian-carp-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "cutthroat-trout",
        name: "Cutthroat Trout",
        desc: "A river trout named after its long jaw and mouth. Found in Bahari Bay rivers using worms.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-cutthroat-trout.png",
        timesAvailable: [
            {
              id: "cutthroat-trout-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "cutthroat-trout-day",
              ...defaultTimeSlots.day
          },
      {
              id: "cutthroat-trout-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "cutthroat-trout-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "dawnray",
        name: "Dawnray",
        desc: "A golden ray that hunts at dawn, its scales absorbing the sun's light. Found in Bahari Rivers without bait in the morning from 3 AM to 6 AM.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-dawnray.png",
        timesAvailable: [
            {
              id: "dawnray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "dawnray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "dawnray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "dawnray-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "devilfish",
        name: "Devilfish",
        desc: "Actually not that bad a guy.",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-devilfish.png",
        timesAvailable: [
            {
              id: "devilfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "devilfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "devilfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "devilfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "duskray",
        name: "Duskray",
        desc: "A mottled charcoal ray that hunts at dusk, blending into the riverbed. Found in Bahari Rivers without bait in the evening.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-duskray.png",
        timesAvailable: [
            {
              id: "duskray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "duskray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "duskray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "duskray-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "eleroo-eel",
        name: "Eleroo Eel",
        desc: "Affectionately named for its sizable snout, and not for what it eats. Still, you might want to keep your eleroos at a distance.",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-eleroo-eel.png",
        timesAvailable: [
            {
              id: "eleroo-eel-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "eleroo-eel-day",
              ...defaultTimeSlots.day
          },
      {
              id: "eleroo-eel-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "eleroo-eel-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "enchanted-pupfish",
        name: "Enchanted Pupfish",
        desc: "A cute little fish which can absorb trace amounts of Flow into its scales. Found in Kilima Lake using glow worms.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-enchanted-pupfish.png",
        timesAvailable: [
            {
              id: "enchanted-pupfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "enchanted-pupfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "enchanted-pupfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "enchanted-pupfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "energized-piranha",
        name: "Energized Piranha",
        desc: "A piranha infused with magic after consuming a Grimalkin magic trinket. Found in Kilima Rivers using worms.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-energized-piranha.png",
        timesAvailable: [
            {
              id: "energized-piranha-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "energized-piranha-day",
              ...defaultTimeSlots.day
          },
      {
              id: "energized-piranha-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "energized-piranha-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "eyeless-minnow",
        name: "Eyeless Minnow",
        desc: "A cave dwelling creature that has lost the need for eyes. Found in Bahari Bay caves without bait.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-eyeless-minnow.png",
        timesAvailable: [
            {
              id: "eyeless-minnow-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "eyeless-minnow-day",
              ...defaultTimeSlots.day
          },
      {
              id: "eyeless-minnow-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "eyeless-minnow-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "fairy-carp",
        name: "Fairy Carp",
        desc: "A shy fish with a hypnotically translucent sheen. Found in ponds using worms in the mornings and evenings.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-fairy-carp.png",
        timesAvailable: [
            {
              id: "fairy-carp-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "fairy-carp-day",
              ...defaultTimeSlots.day
          },
      {
              id: "fairy-carp-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "fairy-carp-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "fathead-minnow",
        name: "Fathead Minnow",
        desc: "A small freshwater fish known for its oversized head. Found in Bahari rivers using glow worms.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-fathead-minnow.png",
        timesAvailable: [
            {
              id: "fathead-minnow-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "fathead-minnow-day",
              ...defaultTimeSlots.day
          },
      {
              id: "fathead-minnow-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "fathead-minnow-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "flametongue-ray",
        name: "Flametongue Ray",
        desc: "A rare river ray named for the bright orange and red streaks across its back. Found in Kilima rivers using glow worms in the morning and day.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-flametongue-ray.png",
        timesAvailable: [
            {
              id: "flametongue-ray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "flametongue-ray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "flametongue-ray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "flametongue-ray-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.epic,
        type: "Fish"
    },
{
        id: "freshwater-eel",
        name: "Freshwater Eel",
        desc: "A long and lithe river fish often confused for a snake. Found in Kilima Rivers using worms in the evening and night.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-freshwater-eel.png",
        timesAvailable: [
            {
              id: "freshwater-eel-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "freshwater-eel-day",
              ...defaultTimeSlots.day
          },
      {
              id: "freshwater-eel-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "freshwater-eel-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "giant-goldfish",
        name: "Giant Goldfish",
        desc: "Against all odds, some goldfish live to become legendary in size. Found in ponds using glow worms.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-giant-goldfish.png",
        timesAvailable: [
            {
              id: "giant-goldfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "giant-goldfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "giant-goldfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "giant-goldfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.epic,
        type: "Fish"
    },
{
        id: "giant-kilima-stingray",
        name: "Giant Kilima Stingray",
        desc: "The lord of Kilima Lake, this stingray's poisonous spike can also pierce the bones of its prey. Found in Kilima Lake using glow worms in the morning, day, and evening.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-giant-kilima-stingray.png",
        timesAvailable: [
            {
              id: "giant-kilima-stingray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "giant-kilima-stingray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "giant-kilima-stingray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "giant-kilima-stingray-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.epic,
        type: "Fish"
    },
{
        id: "gillyfin",
        name: "Gillyfin",
        desc: "The most common fish in Palia. Found in Kilima Lake without using bait.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-gillyfin.png",
        timesAvailable: [
            {
              id: "gillyfin-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "gillyfin-day",
              ...defaultTimeSlots.day
          },
      {
              id: "gillyfin-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "gillyfin-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "golden-salmon",
        name: "Golden Salmon",
        desc: "A common sort of salmon known to thrive in the sunlight. Found in Kilima Rivers using worms in the morning and day.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-golden-salmon.png",
        timesAvailable: [
            {
              id: "golden-salmon-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "golden-salmon-day",
              ...defaultTimeSlots.day
          },
      {
              id: "golden-salmon-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "golden-salmon-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "honey-loach",
        name: "Honey Loach",
        desc: "A river fish whose yellow and black stripes resemble a honeybee. Found in Bahari rivers using glow worms at day and night.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-honey-loach.png",
        timesAvailable: [
            {
              id: "honey-loach-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "honey-loach-day",
              ...defaultTimeSlots.day
          },
      {
              id: "honey-loach-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "honey-loach-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "hypnotic-moray",
        name: "Hypnotic Moray",
        desc: "A moray eel that combines its striking pattern and hypnotic movements to lure in prey. Found in caves using glow worms.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-hypnotic-moray.png",
        timesAvailable: [
            {
              id: "hypnotic-moray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "hypnotic-moray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "hypnotic-moray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "hypnotic-moray-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "indigo-lamprey",
        name: "Indigo Lamprey",
        desc: "Palians in the past would harvest the scales of this fish to make a deep indigo dye. Found in Kilima rivers using glow worms in the evening and night.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-indigo-lamprey.png",
        timesAvailable: [
            {
              id: "indigo-lamprey-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "indigo-lamprey-day",
              ...defaultTimeSlots.day
          },
      {
              id: "indigo-lamprey-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "indigo-lamprey-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "inyrevn-mermaid",
        name: "Inyrevn Mermaid",
        desc: "Murmurs of a mermaid in the water brought curious fishers from across Bahari Island to these woods in hopes they could catch sight of such a majestic creature. The Inyrevn Mermaid is likely not what they pictured.",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-inyrevn-mermaid.png",
        timesAvailable: [
            {
              id: "inyrevn-mermaid-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "inyrevn-mermaid-day",
              ...defaultTimeSlots.day
          },
      {
              id: "inyrevn-mermaid-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "inyrevn-mermaid-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.epic,
        type: "Fish"
    },
{
        id: "kenli's-carp",
        name: "Kenli's Carp",
        desc: "Kenli personally discovered this carp near Kilima Village . Bears a remarkable resemblance to a Crucian Carp ... Found in Kilima rivers using glow worms.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-kenli's-carp.png",
        timesAvailable: [
            {
              id: "kenli's-carp-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "kenli's-carp-day",
              ...defaultTimeSlots.day
          },
      {
              id: "kenli's-carp-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "kenli's-carp-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "kilima-catfish",
        name: "Kilima Catfish",
        desc: "A unique type of catfish found only in the Kilima Valley . Found in ponds using worms.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-kilima-catfish.png",
        timesAvailable: [
            {
              id: "kilima-catfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "kilima-catfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "kilima-catfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "kilima-catfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "kilima-grayling",
        name: "Kilima Grayling",
        desc: "A streamlined fish that spends the first part of its life at sea before returning to the rivers of the Kilima Valley . Found in Kilima rivers using glow worms.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-kilima-grayling.png",
        timesAvailable: [
            {
              id: "kilima-grayling-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "kilima-grayling-day",
              ...defaultTimeSlots.day
          },
      {
              id: "kilima-grayling-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "kilima-grayling-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "kilima-redfin",
        name: "Kilima Redfin",
        desc: "An aggressive river predator that will eat literally anything. Found in Bahari Bay rivers using worms.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-kilima-redfin.png",
        timesAvailable: [
            {
              id: "kilima-redfin-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "kilima-redfin-day",
              ...defaultTimeSlots.day
          },
      {
              id: "kilima-redfin-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "kilima-redfin-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "lake-shark",
        name: "Lake Shark",
        desc: "Just when you thought the lakes were safe...",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-lake-shark.png",
        timesAvailable: [
            {
              id: "lake-shark-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "lake-shark-day",
              ...defaultTimeSlots.day
          },
      {
              id: "lake-shark-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "lake-shark-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "largemouth-bass",
        name: "Largemouth Bass",
        desc: "A very talkative bass that can swallow creatures over 50% their own body weight. Found in Kilima Lake using worms.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-largemouth-bass.png",
        timesAvailable: [
            {
              id: "largemouth-bass-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "largemouth-bass-day",
              ...defaultTimeSlots.day
          },
      {
              id: "largemouth-bass-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "largemouth-bass-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "long-nosed-unicorn-fish",
        name: "Long Nosed Unicorn Fish",
        desc: "The horn of the unicorn fish is valuable to any alchemist or potion master. But beware, they are rumored to have psychic abilities that can make even the most accomplished fisherman think left is right. Found off the coast of Bahari Bay using glow worms during the day.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-long-nosed-unicorn-fish.png",
        timesAvailable: [
            {
              id: "long-nosed-unicorn-fish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "long-nosed-unicorn-fish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "long-nosed-unicorn-fish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "long-nosed-unicorn-fish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.epic,
        type: "Fish"
    },
{
        id: "majiri-of-war",
        name: "Majiri-of-War",
        desc: "A mythological floatfish said to be attracted to areas associated with great strife.",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-majiri-of-war.png",
        timesAvailable: [
            {
              id: "majiri-of-war-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "majiri-of-war-day",
              ...defaultTimeSlots.day
          },
      {
              id: "majiri-of-war-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "majiri-of-war-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.epic,
        type: "Fish"
    },
{
        id: "maws",
        name: "Maws",
        desc: "There's a shark in the Elderwood, they say, with eyes as black as the void, like a potato pod's eyes. Maws, they call him, and by the time you see him coming, it's too late.",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-maws.png",
        timesAvailable: [
            {
              id: "maws-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "maws-day",
              ...defaultTimeSlots.day
          },
      {
              id: "maws-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "maws-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.legendary,
        type: "Fish"
    },
{
        id: "midnight-floatfish",
        name: "Midnight Floatfish",
        desc: "This floatfish emerges in the dark of night to feed on the nightmares of little children who don't eat their veggies- or so the old Umbraan tale goes.",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-midnight-floatfish.png",
        timesAvailable: [
            {
              id: "midnight-floatfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "midnight-floatfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "midnight-floatfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "midnight-floatfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "midnight-paddlefish",
        name: "Midnight Paddlefish",
        desc: "A rare paddlefish that feeds at night, its dark scales keeping it hidden from predators. Found in Kilima Lake using glow worms at night.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-midnight-paddlefish.png",
        timesAvailable: [
            {
              id: "midnight-paddlefish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "midnight-paddlefish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "midnight-paddlefish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "midnight-paddlefish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "mini-mullet",
        name: "Mini Mullet",
        desc: "A controversial fish both despised and beloved across Palia.",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-mini-mullet.png",
        timesAvailable: [
            {
              id: "mini-mullet-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "mini-mullet-day",
              ...defaultTimeSlots.day
          },
      {
              id: "mini-mullet-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "mini-mullet-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "mirror-carp",
        name: "Mirror Carp",
        desc: "A silvery carp with scales resembling mirrors. Found in ponds using worms.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-mirror-carp.png",
        timesAvailable: [
            {
              id: "mirror-carp-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "mirror-carp-day",
              ...defaultTimeSlots.day
          },
      {
              id: "mirror-carp-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "mirror-carp-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "mossyfin",
        name: "Mossyfin",
        desc: "The Mossyfin will hide among the mossy rocks at the bottom of pools to camouflage itself. Unfortunately the bright pink stripes on its fins mean this is mostly pointless.",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-mossyfin.png",
        timesAvailable: [
            {
              id: "mossyfin-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "mossyfin-day",
              ...defaultTimeSlots.day
          },
      {
              id: "mossyfin-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "mossyfin-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "mottled-gobi",
        name: "Mottled Gobi",
        desc: "An under appreciated fish that feeds on excess pond algae. Found in ponds using glow worms.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-mottled-gobi.png",
        timesAvailable: [
            {
              id: "mottled-gobi-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "mottled-gobi-day",
              ...defaultTimeSlots.day
          },
      {
              id: "mottled-gobi-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "mottled-gobi-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "mudminnow",
        name: "Mudminnow",
        desc: "A common minnow known for its muddy looking color. Found in ponds without using any bait.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-mudminnow.png",
        timesAvailable: [
            {
              id: "mudminnow-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "mudminnow-day",
              ...defaultTimeSlots.day
          },
      {
              id: "mudminnow-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "mudminnow-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "mutated-angler",
        name: "Mutated Angler",
        desc: "A terrifying monstrosity, said to be a survivor from the time of humans. Found in Bahari Bay caves using worms.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-mutated-angler.png",
        timesAvailable: [
            {
              id: "mutated-angler-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "mutated-angler-day",
              ...defaultTimeSlots.day
          },
      {
              id: "mutated-angler-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "mutated-angler-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "oily-anchovy",
        name: "Oily Anchovy",
        desc: "A slimy fish some Majiri find strangely appetizing. Found in Bahari Bay rivers using worms.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-oily-anchovy.png",
        timesAvailable: [
            {
              id: "oily-anchovy-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "oily-anchovy-day",
              ...defaultTimeSlots.day
          },
      {
              id: "oily-anchovy-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "oily-anchovy-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "orange-bluegill",
        name: "Orange Bluegill",
        desc: "An omnivorous fish that prefers insects but will eat anything it can fit into its mouth. Found in ponds using worms.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-orange-bluegill.png",
        timesAvailable: [
            {
              id: "orange-bluegill-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "orange-bluegill-day",
              ...defaultTimeSlots.day
          },
      {
              id: "orange-bluegill-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "orange-bluegill-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "paddlefish",
        name: "Paddlefish",
        desc: "A primitive fish that has survived for millions of years. Found in Bahari Bay rivers using worms.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-paddlefish.png",
        timesAvailable: [
            {
              id: "paddlefish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "paddlefish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "paddlefish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "paddlefish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "painted-perch",
        name: "Painted Perch",
        desc: "A petite river fish known for its pleasing colors. Found in Kilima Lake using worms.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-painted-perch.png",
        timesAvailable: [
            {
              id: "painted-perch-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "painted-perch-day",
              ...defaultTimeSlots.day
          },
      {
              id: "painted-perch-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "painted-perch-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "palian-betta",
        name: "Palian Betta",
        desc: "The Palian Betta is known for its solitary nature and tendency to fight others of its own kind. Unsurprisingly, the Palian Betta was named by Umbraans .",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-palian-betta.png",
        timesAvailable: [
            {
              id: "palian-betta-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "palian-betta-day",
              ...defaultTimeSlots.day
          },
      {
              id: "palian-betta-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "palian-betta-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "piksii-floatfish",
        name: "Piksii Floatfish",
        desc: "The Piksii of the Elderwood can come in all shapes and sizes. This one, for example, comes in the shape and size of a floatfish.",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-piksii-floatfish.png",
        timesAvailable: [
            {
              id: "piksii-floatfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "piksii-floatfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "piksii-floatfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "piksii-floatfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "platinum-chad",
        name: "Platinum Chad",
        desc: "The brilliant platinum scales of this chad can fool fishermen into dreams of wealth. Found in Kilima rivers using glow worms.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-platinum-chad.png",
        timesAvailable: [
            {
              id: "platinum-chad-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "platinum-chad-day",
              ...defaultTimeSlots.day
          },
      {
              id: "platinum-chad-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "platinum-chad-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "prism-trout",
        name: "Prism Trout",
        desc: "A gorgeous trout that shines like rainbows in the sunlight. Found in Kilima Lake using worms in the morning and day.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-prism-trout.png",
        timesAvailable: [
            {
              id: "prism-trout-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "prism-trout-day",
              ...defaultTimeSlots.day
          },
      {
              id: "prism-trout-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "prism-trout-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "radiant-sunfish",
        name: "Radiant Sunfish",
        desc: "A beautifully radiant river fish that emits a blinding ray of light many compare to looking directly into the sun. Found in Kilima Rivers using worms.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-radiant-sunfish.png",
        timesAvailable: [
            {
              id: "radiant-sunfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "radiant-sunfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "radiant-sunfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "radiant-sunfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "rainbow-trout",
        name: "Rainbow Trout",
        desc: "A river fish sporting a muted multicolor scale pattern. Not smart enough to be jealous of the Prism Trout . Found in Kilima Rivers without bait.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-rainbow-trout.png",
        timesAvailable: [
            {
              id: "rainbow-trout-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "rainbow-trout-day",
              ...defaultTimeSlots.day
          },
      {
              id: "rainbow-trout-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "rainbow-trout-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "red-bellied-piranha",
        name: "Red-bellied Piranha",
        desc: "An aggressive river predator that will eat literally anything. Found in Kilima Rivers using worms.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-red-bellied-piranha.png",
        timesAvailable: [
            {
              id: "red-bellied-piranha-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "red-bellied-piranha-day",
              ...defaultTimeSlots.day
          },
      {
              id: "red-bellied-piranha-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "red-bellied-piranha-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "ribbontail-ray",
        name: "Ribbontail Ray",
        desc: "Known to frequent tropical waters, the Ribbontail Ray recently made a surprising migration from the isles of Inyrevn to the west coast of the Palian Republic. Found off the coast of Bahari Bay using worms in the morning and evening.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-ribbontail-ray.png",
        timesAvailable: [
            {
              id: "ribbontail-ray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "ribbontail-ray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "ribbontail-ray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "ribbontail-ray-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "rosy-bitterling",
        name: "Rosy Bitterling",
        desc: "A freshwater fish with a rosy patch on its behind. Found in Bahari Rivers without bait.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-rosy-bitterling.png",
        timesAvailable: [
            {
              id: "rosy-bitterling-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "rosy-bitterling-day",
              ...defaultTimeSlots.day
          },
      {
              id: "rosy-bitterling-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "rosy-bitterling-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "sabertoothed-anchovy",
        name: "Sabertoothed Anchovy",
        desc: "An anchovy with teeth so sharp it might eat YOU for dinner.",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-sabertoothed-anchovy.png",
        timesAvailable: [
            {
              id: "sabertoothed-anchovy-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "sabertoothed-anchovy-day",
              ...defaultTimeSlots.day
          },
      {
              id: "sabertoothed-anchovy-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "sabertoothed-anchovy-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "sardine",
        name: "Sardine",
        desc: "A small, but quick foraging fish that many Majiri enjoy eating when pickled. Found off the coast of Bahari Bay without bait.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-sardine.png",
        timesAvailable: [
            {
              id: "sardine-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "sardine-day",
              ...defaultTimeSlots.day
          },
      {
              id: "sardine-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "sardine-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "scarlet-koi",
        name: "Scarlet Koi",
        desc: "A sleek koi fish with a deep red pattern. Found in ponds using glow worms.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-scarlet-koi.png",
        timesAvailable: [
            {
              id: "scarlet-koi-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "scarlet-koi-day",
              ...defaultTimeSlots.day
          },
      {
              id: "scarlet-koi-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "scarlet-koi-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "shimmerfin",
        name: "Shimmerfin",
        desc: "A mysterious fish that can sometimes be in two places at once. Found in Kilima Lake using worms.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-shimmerfin.png",
        timesAvailable: [
            {
              id: "shimmerfin-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "shimmerfin-day",
              ...defaultTimeSlots.day
          },
      {
              id: "shimmerfin-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "shimmerfin-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "silver-salmon",
        name: "Silver Salmon",
        desc: "A common silvery fish. Found in Kilima Rivers without bait in evenings and nights.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-silver-salmon.png",
        timesAvailable: [
            {
              id: "silver-salmon-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "silver-salmon-day",
              ...defaultTimeSlots.day
          },
      {
              id: "silver-salmon-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "silver-salmon-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "silvery-minnow",
        name: "Silvery Minnow",
        desc: "A common minnow with silvery scales that sparkle in the sun. Found in Bahari Bay rivers without bait.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-silvery-minnow.png",
        timesAvailable: [
            {
              id: "silvery-minnow-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "silvery-minnow-day",
              ...defaultTimeSlots.day
          },
      {
              id: "silvery-minnow-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "silvery-minnow-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "smallmouth-bass",
        name: "Smallmouth Bass",
        desc: "A common bass with very little to say that is known to occasionally leap from the water. Found in Kilima Lake using worms.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-smallmouth-bass.png",
        timesAvailable: [
            {
              id: "smallmouth-bass-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "smallmouth-bass-day",
              ...defaultTimeSlots.day
          },
      {
              id: "smallmouth-bass-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "smallmouth-bass-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "spotted-bullhead",
        name: "Spotted Bullhead",
        desc: "A bullhead with a spotted pattern. Found in Kilima Rivers without bait.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-spotted-bullhead.png",
        timesAvailable: [
            {
              id: "spotted-bullhead-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "spotted-bullhead-day",
              ...defaultTimeSlots.day
          },
      {
              id: "spotted-bullhead-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "spotted-bullhead-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "stalking-catfish",
        name: "Stalking Catfish",
        desc: "A predatory blue catfish that will attack nearby vulnerable fish. Found in ponds using glow worms in the evening and night.",
        location: "Ponds",
        locationImage: "",
        displayImage: "/fish-stalking-catfish.png",
        timesAvailable: [
            {
              id: "stalking-catfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "stalking-catfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "stalking-catfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "stalking-catfish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "starry-bitterling",
        name: "Starry Bitterling",
        desc: "It's said all the Elderwood's stars are in its waters, for its canopy blocks out the sky.",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-starry-bitterling.png",
        timesAvailable: [
            {
              id: "starry-bitterling-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "starry-bitterling-day",
              ...defaultTimeSlots.day
          },
      {
              id: "starry-bitterling-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "starry-bitterling-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "stickleback",
        name: "Stickleback",
        desc: "A carnivorous fish that enjoys feasting on roe, insects, crustaceans, and the toes of fisherman. Found in Kilima Rivers using worms in the morning and day.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-stickleback.png",
        timesAvailable: [
            {
              id: "stickleback-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "stickleback-day",
              ...defaultTimeSlots.day
          },
      {
              id: "stickleback-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "stickleback-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "stonefish",
        name: "Stonefish",
        desc: "Extremely poisonous, Stonefish naturally blend into their surroundings while waiting for prey. Found in caves using glow worms.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-stonefish.png",
        timesAvailable: [
            {
              id: "stonefish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "stonefish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "stonefish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "stonefish-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "stormray",
        name: "Stormray",
        desc: "A majestic river ray that hunts by twisting water currents and channeling lightning through its tail. Found in Bahari rivers using glow worms in the morning and evening.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-stormray.png",
        timesAvailable: [
            {
              id: "stormray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "stormray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "stormray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "stormray-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "striped-dace",
        name: "Striped Dace",
        desc: "A dace with a striped pattern down its back. Found in Kilima Rivers without bait.",
        location: "Kilima Rivers",
        locationImage: "",
        displayImage: "/fish-striped-dace.png",
        timesAvailable: [
            {
              id: "striped-dace-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "striped-dace-day",
              ...defaultTimeSlots.day
          },
      {
              id: "striped-dace-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "striped-dace-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "striped-sturgeon",
        name: "Striped Sturgeon",
        desc: "A bottom feeding lake fish with light colored stripes that allow it to camouflage in the sunlight. Found in Kilima Lake using worms in the evening and night.",
        location: "Kilima Lake",
        locationImage: "",
        displayImage: "/fish-striped-sturgeon.png",
        timesAvailable: [
            {
              id: "striped-sturgeon-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "striped-sturgeon-day",
              ...defaultTimeSlots.day
          },
      {
              id: "striped-sturgeon-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "striped-sturgeon-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "swordfin-eel",
        name: "Swordfin Eel",
        desc: "An apex predator eel that uses its own body to cut down prey. Found in Bahari rivers using glow worms.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-swordfin-eel.png",
        timesAvailable: [
            {
              id: "swordfin-eel-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "swordfin-eel-day",
              ...defaultTimeSlots.day
          },
      {
              id: "swordfin-eel-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "swordfin-eel-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.epic,
        type: "Fish"
    },
{
        id: "thundering-eel",
        name: "Thundering Eel",
        desc: "An electrically charged eel that can shock its prey into submission. Found in Bahari Bay rivers using worms.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-thundering-eel.png",
        timesAvailable: [
            {
              id: "thundering-eel-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "thundering-eel-day",
              ...defaultTimeSlots.day
          },
      {
              id: "thundering-eel-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "thundering-eel-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "tinfin",
        name: "Tinfin",
        desc: "A somewhat paranoid cousin of the Kilima Gillyfin.",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-tinfin.png",
        timesAvailable: [
            {
              id: "tinfin-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "tinfin-day",
              ...defaultTimeSlots.day
          },
      {
              id: "tinfin-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "tinfin-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "toadstool-floatfish",
        name: "Toadstool Floatfish",
        desc: "One touch of this floatfish's tentacles will induce mild hallucinations in its victim. You don't want to know what two touches does.",
        location: "Elderwood Saltwater",
        locationImage: "",
        displayImage: "/fish-toadstool-floatfish.png",
        timesAvailable: [
            {
              id: "toadstool-floatfish-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "toadstool-floatfish-day",
              ...defaultTimeSlots.day
          },
      {
              id: "toadstool-floatfish-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "toadstool-floatfish-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "turn-pike",
        name: "Turn Pike",
        desc: "This fish can go from 0-60 in the blink of an eye and complete a 90 degree turn at full speed.",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-turn-pike.png",
        timesAvailable: [
            {
              id: "turn-pike-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "turn-pike-day",
              ...defaultTimeSlots.day
          },
      {
              id: "turn-pike-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "turn-pike-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    },
{
        id: "umbraan-betta",
        name: "Umbraan Betta",
        desc: "Unlike its Palian cousin, the Umbraan Betta can tolerate and even thrive in the presence of other Umbraan Betta.",
        location: "Elderwood Freshwater",
        locationImage: "",
        displayImage: "/fish-umbraan-betta.png",
        timesAvailable: [
            {
              id: "umbraan-betta-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "umbraan-betta-day",
              ...defaultTimeSlots.day
          },
      {
              id: "umbraan-betta-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "umbraan-betta-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "umbran-carp",
        name: "Umbran Carp",
        desc: "A relative of the Fairy Carp, the Umbran Carp prefers the dark environments of caves and underground lake systems. Found in caves without bait.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-umbran-carp.png",
        timesAvailable: [
            {
              id: "umbran-carp-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "umbran-carp-day",
              ...defaultTimeSlots.day
          },
      {
              id: "umbran-carp-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "umbran-carp-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.uncommon,
        type: "Fish"
    },
{
        id: "void-ray",
        name: "Void Ray",
        desc: "Alien and terrifying, some say the Void Ray can enter the Echo realm and feed off smaller echoes is finds. Found in caves using glow worms.",
        location: "Caves",
        locationImage: "",
        displayImage: "/fish-void-ray.png",
        timesAvailable: [
            {
              id: "void-ray-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "void-ray-day",
              ...defaultTimeSlots.day
          },
      {
              id: "void-ray-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "void-ray-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.epic,
        type: "Fish"
    },
{
        id: "willow-lamprey",
        name: "Willow Lamprey",
        desc: "A long, thin lamprey named after its similarity to the branches of a willow tree. Found in Bahari Bay rivers using worms at night.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-willow-lamprey.png",
        timesAvailable: [
            {
              id: "willow-lamprey-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "willow-lamprey-day",
              ...defaultTimeSlots.day
          },
      {
              id: "willow-lamprey-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "willow-lamprey-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.worm,
        ...rarity.rare,
        type: "Fish"
    },
{
        id: "yellow-perch",
        name: "Yellow Perch",
        desc: "A common perch found in rivers. Found in Bahari Rivers without bait.",
        location: "Bahari Rivers",
        locationImage: "",
        displayImage: "/fish-yellow-perch.png",
        timesAvailable: [
            {
              id: "yellow-perch-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "yellow-perch-day",
              ...defaultTimeSlots.day
          },
      {
              id: "yellow-perch-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "yellow-perch-night",
              ...defaultTimeSlots.night
          }
        ],
        
        ...rarity.common,
        type: "Fish"
    },
{
        id: "yellowfin-tuna",
        name: "Yellowfin Tuna",
        desc: "A large tuna that can swim faster than its size implies. Found off the coast of Bahari Bay using glow worms.",
        location: "Bahari Coast",
        locationImage: "",
        displayImage: "/fish-yellowfin-tuna.png",
        timesAvailable: [
            {
              id: "yellowfin-tuna-morning",
              ...defaultTimeSlots.morning
          },
      {
              id: "yellowfin-tuna-day",
              ...defaultTimeSlots.day
          },
      {
              id: "yellowfin-tuna-evening",
              ...defaultTimeSlots.evening
          },
      {
              id: "yellowfin-tuna-night",
              ...defaultTimeSlots.night
          }
        ],
        ...bait.glowWorm,
        ...rarity.common,
        type: "Fish"
    }
];