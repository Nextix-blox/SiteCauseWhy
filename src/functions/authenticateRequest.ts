import { getDatabase, hookDatabase } from "./hookDatabase";


export function addToServerCache(jobID: string, secret: string) {
    hookDatabase((db) => {
        const stmt = db.prepare("INSERT INTO servers (jobID, secret) VALUES (?, ?)");
        stmt.run(jobID, secret);
    });
}

export function removeFromServerCache(jobID: string) {
    hookDatabase((db) => {
        const stmt = db.prepare("DELETE FROM servers WHERE jobID = ?");
        stmt.run(jobID);
    });
}

export async function getSecretFromServerCache(jobID: string): Promise<string | undefined> {
    const db = await getDatabase();


    const stmt = db.prepare("SELECT * FROM servers WHERE jobID = ?");
    const data = stmt.get(jobID);
    if (data) {
        return data.secret;
    }
}

export async function authenticateRequest(jobID: string, secret: string) {
    if (!jobID || !secret) return false;
    
    const cachedSecret = await getSecretFromServerCache(jobID);
    return cachedSecret === secret;
}