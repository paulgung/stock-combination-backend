-- CreateTable
CREATE TABLE "Combination" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "combinationName" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "SubCombination" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subCombinationName" TEXT NOT NULL DEFAULT '',
    "combinationId" INTEGER,
    CONSTRAINT "SubCombination_combinationId_fkey" FOREIGN KEY ("combinationId") REFERENCES "Combination" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Stocks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stockName" TEXT NOT NULL DEFAULT '',
    "stockCode" TEXT DEFAULT '',
    "stockPrice" TEXT DEFAULT '',
    "stockGains" TEXT DEFAULT '',
    "stockUrl" TEXT DEFAULT '',
    "subCombinationId" INTEGER,
    CONSTRAINT "Stocks_subCombinationId_fkey" FOREIGN KEY ("subCombinationId") REFERENCES "SubCombination" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SubCombination_id_key" ON "SubCombination"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stocks_id_key" ON "Stocks"("id");
