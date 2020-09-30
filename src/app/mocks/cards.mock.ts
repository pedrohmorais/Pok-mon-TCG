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
    {
        id: 'dp5-70',
        name: 'Pikachu',
        evolvesFrom: null,
        nationalPokedexNumber: 25,
        imageUrl: 'https://images.pokemontcg.io/dp5/70.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/dp5/70_hires.png',
        types: ['Lightning'],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '60',
        retreatCost: ['Colorless'],
        convertedRetreatCost: 1,
        number: '70',
        artist: 'Daisuke Ito',
        rarity: 'Common',
        series: 'Diamond & Pearl',
        set: 'Majestic Dawn',
        setCode: 'dp5',
        attacks: [
            {
                cost: ['Colorless'],
                name: 'Quick Attack',
                text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage.',
                damage: '10+',
                convertedEnergyCost: '1'
            },
            {
                cost: [
                    'Lightning',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Volt Tackle',
                text: 'Pikachu does 10 damage to itself.',
                damage: '50',
                convertedEnergyCost: '3'
            }
        ],
        resistances: [
            {
                type: 'Metal',
                value: '-20'
            }
        ],
        weaknesses: [
            {
                type: 'Fighting',
                value: '+10'
            }
        ],
        ability: null,
        text: null,
        resource: null,
    },
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

