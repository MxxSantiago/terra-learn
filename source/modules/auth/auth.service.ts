import {
	getAuth,
	signInWithPopup,
	FacebookAuthProvider,
	GoogleAuthProvider,
	GithubAuthProvider,
} from 'firebase/auth';
import type { Auth, OAuthCredential } from 'firebase/auth';

import { app } from '@/global/firebase';

import { OAuthProviderKey } from './auth.types';

export class AuthService {
	private auth: Auth = getAuth(app);

	private providers = {
		facebook: FacebookAuthProvider,
		google: GoogleAuthProvider,
		github: GithubAuthProvider,
	};

	public async signIn(providerKey: OAuthProviderKey): Promise<OAuthCredential> {
		const Provider = this.providers[providerKey];
		const result = await signInWithPopup(this.auth, new Provider());
		const credential = Provider.credentialFromResult(result);
		return credential;
	}

	public async signOut(): Promise<void> {
		return await this.auth.signOut();
	}
}
