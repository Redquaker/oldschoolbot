import { randomSnowflake } from '@oldschoolgg/toolkit';
import { Time } from 'e';
import { Bank } from 'oldschooljs';
import { describe, expect, test } from 'vitest';

import { runRolesTask } from '../../src/lib/rolesTask';
import { MinigameName, Minigames } from '../../src/lib/settings/minigames';
import { prisma } from '../../src/lib/settings/prisma';
import { cryptoRand } from '../../src/lib/util';
import { userStatsBankUpdate } from '../../src/mahoji/mahojiSettings';
import { createTestUser } from './util';

describe('Roles Task', async () => {
	test('Should not throw', async () => {
		const user = await createTestUser();
		await userStatsBankUpdate(user.id, 'sacrificed_bank', new Bank().add('Coal', 10_000));
		const ironUser = await createTestUser();
		await ironUser.update({ minion_ironman: true, sacrificedValue: 1_000_000 });
		await userStatsBankUpdate(ironUser.id, 'sacrificed_bank', new Bank().add('Coal', 10_000));

		// Create minigame scores:
		const minigames = Minigames.map(game => game.column).filter(i => i !== 'tithe_farm');
		const minigameUpdate: { [K in MinigameName]?: number } = {};
		for (const minigame of minigames) {
			minigameUpdate[minigame] = 1000;
		}
		await prisma.minigame.upsert({
			where: { user_id: ironUser.id },
			update: minigameUpdate,
			create: { user_id: ironUser.id, ...minigameUpdate }
		});

		await prisma.giveaway.create({
			data: {
				user_id: user.id,
				loot: { 995: 10_000 },
				start_date: new Date(),
				finish_date: new Date(Date.now() + Time.Hour),
				channel_id: '792691343284764693',
				message_id: randomSnowflake(),
				reaction_id: randomSnowflake(),
				users_entered: [],
				id: cryptoRand(1, 100),
				completed: false,
				duration: 10_000
			}
		});
		const result = await runRolesTask();
		expect(result).toBeTruthy();
		expect(result).includes('Roles');
	});
});
