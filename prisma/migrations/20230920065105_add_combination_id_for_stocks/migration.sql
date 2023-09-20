-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stocks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stockName" TEXT NOT NULL DEFAULT '',
    "stockCode" TEXT DEFAULT '',
    "stockPrice" TEXT DEFAULT '',
    "stockGains" TEXT DEFAULT '',
    "stockUrl" TEXT DEFAULT '',
    "subCombinationId" INTEGER,
    "combinationId" INTEGER,
    CONSTRAINT "Stocks_subCombinationId_fkey" FOREIGN KEY ("subCombinationId") REFERENCES "SubCombination" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Stocks_combinationId_fkey" FOREIGN KEY ("combinationId") REFERENCES "Combination" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stocks" ("id", "stockCode", "stockGains", "stockName", "stockPrice", "stockUrl", "subCombinationId") SELECT "id", "stockCode", "stockGains", "stockName", "stockPrice", "stockUrl", "subCombinationId" FROM "Stocks";
DROP TABLE "Stocks";
ALTER TABLE "new_Stocks" RENAME TO "Stocks";
CREATE UNIQUE INDEX "Stocks_id_key" ON "Stocks"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
