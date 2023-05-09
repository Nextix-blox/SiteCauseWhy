import { hookDatabase } from "./hookDatabase";

export function getAuctionCount() {
    let AuctionCount = 0;

    // fetch auction count from database
    hookDatabase((db) => {
        const stmt = db.prepare("SELECT count FROM auctionCount");
        const result = stmt.get();
        if (result) {
            AuctionCount = result.count;
        }
    });

    return AuctionCount;
}

export function incrementAuctionCount() {
    hookDatabase((db) => {
        const stmt = db.prepare("UPDATE auctionCount SET count = count + 1");
        stmt.run();
    });
}

export function decrementAuctionCount() {
    hookDatabase((db) => {
        const stmt = db.prepare("UPDATE auctionCount SET count = count - 1");
        stmt.run();
    });
}