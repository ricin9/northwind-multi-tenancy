export declare function hashPassword(password: string, providedSalt?: Uint8Array): Promise<string>;
export declare function verifyPassword(storedHash: string, passwordAttempt: string): Promise<boolean>;
export declare function generateRandomString(): string;
