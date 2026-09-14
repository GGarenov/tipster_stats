const fs = require("fs");
const path = require("path");

const FIELDS_TO_REMOVE = [
  "bookmaker",
  "status",
  "score",
  "sport",
  "kickOff",
  "publishedAt",
  "live",
];

function stripPickFields(pick, fields = FIELDS_TO_REMOVE) {
  const cleaned = { ...pick };
  for (const field of fields) {
    delete cleaned[field];
  }
  return cleaned;
}

function refactorPicksFile(filePath, fields = FIELDS_TO_REMOVE) {
  const absolutePath = path.resolve(filePath);
  const data = JSON.parse(fs.readFileSync(absolutePath, "utf8"));

  if (!Array.isArray(data.picks)) {
    throw new Error(`No "picks" array found in ${absolutePath}`);
  }

  data.picks = data.picks.map((pick) => stripPickFields(pick, fields));
  fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2) + "\n", "utf8");

  return data.picks.length;
}

const inputFile = process.argv[2] || "july.json";
const count = refactorPicksFile(inputFile);

console.log(
  `Cleaned ${count} picks in ${inputFile} (removed: ${FIELDS_TO_REMOVE.join(", ")})`
);

module.exports = { stripPickFields, refactorPicksFile, FIELDS_TO_REMOVE };
