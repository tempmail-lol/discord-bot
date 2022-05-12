
export default class UserEmails {
    
    private static user_emails: Map<string, string[]> = new Map();
    
    private constructor() {}
    
    public static getAddress(id: string): string[] | undefined {
        return UserEmails.user_emails.get(id);
    }
    
    public static setAddress(id: string, address: string, token: string): void {
        this.user_emails.set(id, [address, token]);
    }
}
