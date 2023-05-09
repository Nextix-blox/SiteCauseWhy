import Database from "better-sqlite3";

const db = new Database("database.db");

// make sure its ran only once
let initialized = false;
export function initDatabase() {
    if (initialized) return;
    initialized = true;

    const stmt = db.prepare(
        "CREATE TABLE IF NOT EXISTS auctions (UID TEXT PRIMARY KEY, sellerID INTEGER, price INTEGER, quantity INTEGER, length INTEGER, itemID TEXT, itemClass TEXT)"
    );
    stmt.run();

    // create for auction count
    const stmt2 = db.prepare(
        "CREATE TABLE IF NOT EXISTS auctionCount (count INTEGER)"
    );
    stmt2.run();

    // add auction count if it doesn't exist
    const stmt2_1 = db.prepare(
        "INSERT INTO auctionCount (count) SELECT 0 WHERE NOT EXISTS (SELECT 1 FROM auctionCount)"
    );
    stmt2_1.run();

    // create a table for all users purchased auctions mapped to ClaimedAuction
    const stmt3 = db.prepare(
        "CREATE TABLE IF NOT EXISTS claimedAuctions (UID TEXT PRIMARY KEY, sellerID INTEGER, itemID TEXT, itemClass TEXT, price INTEGER)"
    );
    stmt3.run();

    // create a table for the connected servers mapped by their jobID
    const stmt4 = db.prepare(
        "CREATE TABLE IF NOT EXISTS servers (jobID TEXT PRIMARY KEY, secret TEXT)"
    );
    stmt4.run();
}

export function hookDatabase(callback: (db: Database.Database) => void) {
    initDatabase();
    callback(db);
}

// make a function to get the database in a promise
export function getDatabase(): Promise<Database.Database> {
    return new Promise((resolve) => {
        hookDatabase((db) => {
            resolve(db);
        });
    });
}
