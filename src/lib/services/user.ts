import { eq } from 'drizzle-orm';
import { verifyPassword } from '../utils/passwordUtils';
import { db, users } from '../../db';

export const getUserFromDb = async (email: string, password: string) => {
	const user = await db.select().from(users).where(eq(users.email, email)).limit(1);

	if (user.length === 0) {
		return null;
	}

	const storedPassword = user[0].password;

	if (!storedPassword) {
		return null;
	}

	if (verifyPassword(storedPassword, password)) {
		return user[0];
	}

	return null;
};
