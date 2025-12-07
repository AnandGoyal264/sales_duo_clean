import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database file stored locally
const dbPath = path.join(__dirname, "../../salesduo.db");

// Create database file if not exist
const db = new Database(dbPath);

// Create table if not exist
db.exec(`
CREATE TABLE IF NOT EXISTS optimizations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    asin TEXT,
    original_title TEXT,
    original_bullets TEXT,
    original_description TEXT,
    optimized_title TEXT,
    optimized_bullets TEXT,
    optimized_description TEXT,
    keywords TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
)
`);

export default db;
