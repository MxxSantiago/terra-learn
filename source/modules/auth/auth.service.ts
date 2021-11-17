import {
	getAuth,
	signInWithPopup,
	signInWithCredential,
	FacebookAuthProvider,
	GoogleAuthProvider,
	GithubAuthProvider,
} from 'firebase/auth';
import type { Auth, User } from 'firebase/auth';

import { app } from '@/global/firebase';

import type { OAuthProviderKey } from './auth.types';

export class AuthService {
	private auth: Auth = getAuth(app);

	private providers = {
		facebook: FacebookAuthProvider,
		google: GoogleAuthProvider,
		github: GithubAuthProvider,
	};

	public async signIn(providerKey: OAuthProviderKey): Promise<User | void> {
		const Provider = this.providers[providerKey];
		const result = await signInWithPopup(this.auth, new Provider());
		const credential = Provider.credentialFromResult(result);
		const { user } = await signInWithCredential(this.auth, credential);
		return user;
	}

	public async signOut(): Promise<void> {
		return await this.auth.signOut();
	}

	public onAuthStateChanged(callback): void {
		return this.auth.onAuthStateChanged(callback);
	}
}
