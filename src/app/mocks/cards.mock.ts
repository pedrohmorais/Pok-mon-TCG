import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

export const cards: PokemonTCG.Card[] = [
  {
    id: 'swsh2-13',
    name: 'Abomasnow',
    nationalPokedexNumber: 460,
    imageUrl: 'https://images.pokemontcg.io/swsh2/13.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/swsh2/13_hires.png',
    types: [
        'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Snover',
    hp: '140',
    retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '13',
    artist: 'Kazuma Koda',
    rarity: 'Rare',
    series: 'Sword & Shield',
    set: 'Rebel Clash',
    setCode: 'swsh2',
    attacks: [
        {
            cost: [
                'Grass',
                'Colorless',
                'Colorless'
            ],
            name: 'Soothing Scent',
            text: 'Your opponents Active Pokémon is now Asleep.',
            damage: '80',
            convertedEnergyCost: '3'
        },
        {
            cost: [
                'Grass',
                'Grass',
                'Colorless',
                'Colorless'
            ],
            name: 'Megaton Lariat',
            text: '',
            damage: '140',
            convertedEnergyCost: '4'
        }
    ],
    weaknesses: [
        {
            type: 'Fire',
            value: '×2',
        }
    ],
    ability: null,
    resistances: null,
    text: null,
    resource: null,
  },
];

