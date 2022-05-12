
export default class UserEmails {
    
    private static user_emails: Map<string, string[]> = new Map();
    
    private constructor() {}
    
    /**
     * Get the email of a user.
     * @param id {string} The user's id.
     * @returns {string[]} The user's email (element 0) and the token (element 1).
     */
    public static getAddress(id: string): string[] | undefined {
        return UserEmails.user_emails.get(id);
    }
    
    /**
     * Sets the address for a user.
     * @param id {string} The user's ID.
     * @param address {string} The user's email address.
     * @param token {string} The user's token.
     */
    public static setAddress(id: string, address: string, token: string): void {
        this.user_emails.set(id, [address, token]);
    }
    
    /**
     * Delete the email address and token for the user.
     * @param id {string} The user's id.
     */
    public static deleteAddress(id: string): void {
        this.user_emails.delete(id);
    }
}
