import { roll, Time } from 'e';
import { Bank, Monsters } from 'oldschooljs';

import { corporealBeastCL, muspahCL } from '../../../../data/CollectionsExport';
import { GearStat } from '../../../../gear/types';
import { SkillsEnum } from '../../../../skilling/types';
import itemID from '../../../../util/itemID';
import resolveItems, { deepResolveItems } from '../../../../util/resolveItems';
import { KillableMonster } from '../../../types';

const killableBosses: KillableMonster[] = [
	{
		id: Monsters.GiantMole.id,
		name: Monsters.GiantMole.name,
		aliases: Monsters.GiantMole.aliases,
		timeToFinish: Time.Minute * 1.6,
		table: Monsters.GiantMole,
		emoji: '<:Baby_mole:324127375858204672>',
		wildy: false,
		difficultyRating: 3,
		itemsRequired: resolveItems(["Dharok's helm", "Dharok's platebody", "Dharok's platelegs", "Dharok's greataxe"]),
		notifyDrops: resolveItems(['Baby mole']),
		qpRequired: 0,
		itemInBankBoosts: [
			{
				[itemID('Barrows gloves')]: 5
			},
			{
				[itemID('Berserker ring')]: 5,
				[itemID('Berserker ring (i)')]: 7,
				[itemID('Twisted bow')]: 10
			}
		],
		levelRequirements: {
			prayer: 43
		},
		defaultAttackStyles: [SkillsEnum.Attack],
		combatXpMultiplier: 1.075,
		itemCost: {
			itemCost: new Bank().add('Prayer potion(4)'),
			qtyPerKill: 0.1
		}
	},
	{
		id: Monsters.Vorkath.id,
		name: Monsters.Vorkath.name,
		aliases: Monsters.Vorkath.aliases,
		timeToFinish: Time.Minute * 3.85,
		table: Monsters.Vorkath,
		emoji: '<:Vorki:400713309252222977>',
		wildy: false,

		difficultyRating: 8,
		itemsRequired: resolveItems(['Armadyl chestplate', 'Armadyl chainskirt']),
		notifyDrops: resolveItems(['Vorki', 'Jar of decay', 'Draconic visage', 'Skeletal visage']),
		qpRequired: 205,
		itemInBankBoosts: [
			{
				[itemID('Zaryte crossbow')]: 18,
				[itemID('Bandos godsword')]: 13,
				[itemID('Dragon warhammer')]: 13,
				[itemID('Dragon claws')]: 8
			},
			{
				[itemID('Dragon hunter lance')]: 15,
				[itemID('Dragon hunter crossbow')]: 15
			},
			{
				[itemID('Lightbearer')]: 1
			}
		],
		levelRequirements: {
			prayer: 43
		},
		healAmountNeeded: 20 * 15,
		attackStyleToUse: GearStat.AttackRanged,
		attackStylesUsed: [GearStat.AttackMagic, GearStat.AttackRanged],
		defaultAttackStyles: [SkillsEnum.Ranged]
	},
	{
		id: Monsters.Zulrah.id,
		name: Monsters.Zulrah.name,
		aliases: Monsters.Zulrah.aliases,
		timeToFinish: Time.Minute * 3.2,
		table: Monsters.Zulrah,
		emoji: '<:Pet_snakeling:324127377816944642>',
		wildy: false,

		difficultyRating: 8,
		notifyDrops: resolveItems(['Tanzanite mutagen', 'Magma mutagen', 'Jar of swamp', 'Pet snakeling']),
		qpRequired: 75,
		itemInBankBoosts: [
			{
				[itemID('Ranger boots')]: 2,
				[itemID('Pegasian boots')]: 4
			},
			{
				[itemID("Iban's staff")]: 1,
				[itemID('Trident of the seas')]: 2,
				[itemID('Trident of the swamp')]: 3,
				[itemID('Sanguinesti staff')]: 4,
				[itemID('Harmonised nightmare staff')]: 5,
				[itemID("Tumeken's shadow")]: 8
			},
			{
				[itemID('Barrows gloves')]: 3
			},
			{
				[itemID('Twisted bow')]: 5,
				[itemID('Toxic blowpipe')]: 4,
				[itemID('Bow of faerdhinen (c)')]: 3,
				[itemID('Magic shortbow')]: 2
			},
			{
				[itemID('Ancestral hat')]: 2
			},
			{
				[itemID('Ancestral robe top')]: 2
			},
			{
				[itemID('Ancestral robe bottom')]: 2
			},
			{
				[itemID('Imbued heart')]: 3
			}
		],
		levelRequirements: {
			prayer: 43
		},
		healAmountNeeded: 20 * 7,
		attackStyleToUse: GearStat.AttackRanged,
		attackStylesUsed: [GearStat.AttackRanged, GearStat.AttackMagic],
		minimumGearRequirements: {
			mage: {
				[GearStat.AttackMagic]: 50
			},
			range: {
				[GearStat.AttackRanged]: 47
			}
		},
		defaultAttackStyles: [SkillsEnum.Ranged, SkillsEnum.Magic],
		disallowedAttackStyles: [SkillsEnum.Attack, SkillsEnum.Strength]
	},
	{
		id: Monsters.KalphiteQueen.id,
		name: Monsters.KalphiteQueen.name,
		aliases: Monsters.KalphiteQueen.aliases,
		timeToFinish: Time.Minute * 4,
		table: Monsters.KalphiteQueen,
		emoji: '<:Kalphite_princess_2nd_form:324127376915300352>',
		wildy: false,

		difficultyRating: 7,
		itemsRequired: deepResolveItems([
			"Verac's flail",
			"Verac's plateskirt",
			["Black d'hide body", "Karil's leathertop", 'Armadyl chestplate'],
			["Black d'hide chaps", "karil's leatherskirt", 'Armadyl chainskirt']
		]),
		notifyDrops: resolveItems(['Jar of sand', 'Kalphite princess']),
		qpRequired: 0,
		itemInBankBoosts: [
			{
				[itemID('Dragon warhammer')]: 10
			},
			{
				[itemID('Elder maul')]: 5
			},
			{
				[itemID('Keris partisan of breaching')]: 5
			}
		],
		levelRequirements: {
			prayer: 43
		},
		pohBoosts: {
			pool: {
				'Rejuvenation pool': 10,
				'Fancy rejuvenation pool': 10,
				'Ornate rejuvenation pool': 10
			}
		},
		defaultAttackStyles: [SkillsEnum.Strength],
		customMonsterHP: 510,
		combatXpMultiplier: 1.05,
		healAmountNeeded: 20 * 3,
		minimumGearRequirements: {
			melee: {
				[GearStat.MeleeStrength]: 10
			}
		},
		disallowedAttackStyles: [SkillsEnum.Magic, SkillsEnum.Ranged],
		attackStylesUsed: [GearStat.AttackMagic],
		attackStyleToUse: GearStat.AttackCrush
	},
	{
		id: Monsters.CorporealBeast.id,
		name: Monsters.CorporealBeast.name,
		aliases: Monsters.CorporealBeast.aliases,
		table: Monsters.CorporealBeast,
		timeToFinish: Time.Minute * 30,
		emoji: '<:Pet_dark_core:324127377347313674>',
		wildy: false,

		difficultyRating: 6,
		itemsRequired: resolveItems(['Zamorakian spear']),
		notifyDrops: resolveItems([
			'Spectral sigil',
			'Arcane sigil',
			'Elysian sigil',
			'Pet dark core',
			'Jar of spirits'
		]),
		qpRequired: 0,
		itemInBankBoosts: [{ [itemID('Dragon warhammer')]: 10 }, { [itemID('Bandos godsword')]: 5 }],
		groupKillable: true,
		respawnTime: 20_000,
		levelRequirements: {
			prayer: 43
		},
		uniques: corporealBeastCL,
		pohBoosts: {
			pool: {
				'Rejuvenation pool': 50,
				'Fancy rejuvenation pool': 50,
				'Ornate rejuvenation pool': 50
			}
		},
		defaultAttackStyles: [SkillsEnum.Attack],
		disallowedAttackStyles: [SkillsEnum.Magic, SkillsEnum.Ranged],
		combatXpMultiplier: 1.55
	},
	{
		id: Monsters.Cerberus.id,
		name: Monsters.Cerberus.name,
		aliases: Monsters.Cerberus.aliases,
		timeToFinish: Time.Minute * 2.65,
		table: Monsters.Cerberus,
		emoji: '<:Hellpuppy:324127376185491458>',
		wildy: false,

		difficultyRating: 7,
		itemsRequired: deepResolveItems([
			["Torag's platebody", "Dharok's platebody", 'Bandos chestplate', 'Torva platebody', "Inquisitor's hauberk"],
			["Torag's platelegs", "Dharok's platelegs", 'Bandos tassets', 'Torva platelegs', "Inquisitor's plateskirt"],
			[
				'Zamorakian spear',
				'Zamorakian hasta',
				'Arclight',
				'Abyssal whip',
				'Abyssal tentacle',
				'Abyssal bludgeon',
				"Inquisitor's mace"
			]
		]),
		notifyDrops: resolveItems(['Hellpuppy', 'Jar of souls']),
		qpRequired: 0,
		itemInBankBoosts: [
			{ [itemID('Spectral spirit shield')]: 10 },
			{
				[itemID('Bandos chestplate')]: 5,
				[itemID('Torva platebody')]: 6,
				[itemID("Inquisitor's hauberk")]: 8
			},
			{
				[itemID('Bandos tassets')]: 5,
				[itemID('Torva platelegs')]: 6,
				[itemID("Inquisitor's plateskirt")]: 8
			},
			{
				[itemID('Arclight')]: 8,
				[itemID('Abyssal whip')]: 10,
				[itemID('Abyssal tentacle')]: 11,
				[itemID('Abyssal bludgeon')]: 13,
				[itemID("Inquisitor's mace")]: 15
			}
		],
		levelRequirements: {
			prayer: 43,
			slayer: 91
		},
		slayerOnly: true,
		defaultAttackStyles: [SkillsEnum.Strength],
		combatXpMultiplier: 1.15,
		healAmountNeeded: 20 * 15,
		attackStyleToUse: GearStat.AttackCrush,
		attackStylesUsed: [GearStat.AttackCrush]
	},
	{
		id: Monsters.KingBlackDragon.id,
		name: Monsters.KingBlackDragon.name,
		aliases: Monsters.KingBlackDragon.aliases,
		table: Monsters.KingBlackDragon,
		timeToFinish: Time.Minute * 3.1,
		emoji: '<:Prince_black_dragon:324127378538364928>',
		wildy: false,
		difficultyRating: 6,
		itemsRequired: deepResolveItems([
			'Anti-dragon shield',
			['Armadyl crossbow', 'Rune crossbow', 'Twisted bow', 'Dragon hunter crossbow'],
			["Black d'hide body", "Black d'hide body (g)", "Black d'hide body (t)", "Karil's leathertop"],
			["Black d'hide chaps", "Black d'hide chaps (g)", "Black d'hide chaps (t)", "Karil's leatherskirt"]
		]),
		notifyDrops: resolveItems(['Prince black dragon', 'Draconic visage']),
		qpRequired: 0,
		itemInBankBoosts: [
			{
				[itemID('Armadyl crossbow')]: 6,
				[itemID('Twisted bow')]: 10
			}
		],
		defaultAttackStyles: [SkillsEnum.Ranged],
		combatXpMultiplier: 1.075,
		healAmountNeeded: 5 * 20,
		attackStyleToUse: GearStat.AttackSlash,
		attackStylesUsed: [GearStat.AttackSlash]
	},
	{
		id: Monsters.PhantomMuspah.id,
		name: Monsters.PhantomMuspah.name,
		aliases: Monsters.PhantomMuspah.aliases,
		table: Monsters.PhantomMuspah,
		timeToFinish: Time.Minute * 8,
		qpRequired: 215,
		respawnTime: 10_000,
		levelRequirements: {
			prayer: 43,
			agility: 69,
			thieving: 64,
			hunter: 56,
			firemaking: 66,
			mining: 72,
			construction: 35,
			magic: 66,
			cooking: 62,
			fishing: 62,
			smithing: 65,
			crafting: 40,
			runecraft: 50,
			fletching: 50
		},
		uniques: muspahCL,
		defaultAttackStyles: [SkillsEnum.Magic, SkillsEnum.Ranged],
		disallowedAttackStyles: [SkillsEnum.Attack, SkillsEnum.Strength],
		attackStylesUsed: [GearStat.AttackMagic, GearStat.AttackRanged],
		attackStyleToUse: GearStat.AttackMagic,
		notifyDrops: resolveItems(['Muphin']),
		degradeableItemUsage: [
			{
				required: true,
				gearSetup: 'mage',
				items: [
					{
						itemID: itemID("Tumeken's shadow"),
						boostPercent: 15
					},
					{
						itemID: itemID('Sanguinesti staff'),
						boostPercent: 10
					},
					{
						itemID: itemID('Trident of the swamp'),
						boostPercent: 5
					}
				]
			}
		],
		itemInBankBoosts: [
			{
				[itemID('Saturated heart')]: 4,
				[itemID('Imbued heart')]: 2
			}
		],
		projectileUsage: {
			required: true,
			calculateQuantity: ({ quantity }) => quantity * 10
		},
		equippedItemBoosts: [
			{
				items: [{ boostPercent: 10, itemID: itemID('Twisted bow') }],
				gearSetup: 'range'
			},
			{
				items: [
					{ boostPercent: 10, itemID: itemID('Dragon arrow') },
					{ boostPercent: 6, itemID: itemID('Amethyst arrow') }
				],
				gearSetup: 'range'
			},
			{
				items: [
					{ boostPercent: 6, itemID: itemID('Masori body (f)') },
					{ boostPercent: 3, itemID: itemID('Masori body') }
				],
				gearSetup: 'range'
			},
			{
				items: [
					{ boostPercent: 6, itemID: itemID('Masori chaps (f)') },
					{ boostPercent: 3, itemID: itemID('Masori chaps') }
				],
				gearSetup: 'range'
			},
			{
				items: [
					{ boostPercent: 11, itemID: itemID("Tumeken's shadow") },
					{ boostPercent: 6, itemID: itemID('Sanguinesti staff') }
				],
				gearSetup: 'mage'
			},
			{
				items: [{ boostPercent: 6, itemID: itemID('Ancestral robe top') }],
				gearSetup: 'mage'
			},
			{
				items: [{ boostPercent: 6, itemID: itemID('Ancestral robe bottom') }],
				gearSetup: 'mage'
			},
			{
				items: [{ boostPercent: 3, itemID: itemID("Ava's assembler") }],
				gearSetup: 'range'
			},
			{
				items: [{ boostPercent: 3, itemID: itemID('Zaryte vambraces') }],
				gearSetup: 'range'
			},
			{
				items: [{ boostPercent: 3, itemID: itemID('Pegasian boots') }],
				gearSetup: 'range'
			},
			{
				items: [{ boostPercent: 3, itemID: itemID('Eternal boots') }],
				gearSetup: 'mage'
			}
		],
		effect: async ({ quantity, user, messages }) => {
			if (user.bank.has('Charged ice')) return;
			let gotIce = false;
			for (let i = 0; i < quantity; i++) {
				if (roll(20)) {
					gotIce = true;
					break;
				}
			}
			if (!gotIce) return;
			await user.addItemsToBank({ items: new Bank().add('Charged ice'), collectionLog: true });
			messages.push('You got a Charged ice for killing the Phantom Muspah in under 3 minutes!');
		},
		healAmountNeeded: 150
	}
];

export default killableBosses;
