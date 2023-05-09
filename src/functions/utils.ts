import crypto from "crypto";

export function generateUID(length = 16) {
    return crypto.randomBytes(length).toString("hex");
}