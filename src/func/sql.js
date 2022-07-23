
import initSqlJs from 'sql.js';

const sqlPromise = initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`,
});

export const parseVocabDb = async (buffer) => {
    const sql = await sqlPromise;
    const db = new sql.Database(new Uint8Array(buffer));

    console.log("Load vocab.db", db);

    let res = db.exec("SELECT name FROM sqlite_schema WHERE type='table' AND name NOT LIKE 'sqlite_%'");
    console.log("SELECT...", res);

    res = db.exec("SELECT word_key, usage FROM LOOKUPS");
    console.log("SELECT...", res);

    return res[0].values.map(entry => ({
        key: entry[0],
        context: entry[1]
    }));
};