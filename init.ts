import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import fs from 'fs';

import type {Applicant} from './pages/api/lib/applicant'
import { getDB } from './pages/api/lib/db';

const DUMMY_APPLICANTS: Applicant[] = [
    {
        name: 'Alice',
        phone: '1115551111'
    },
    {
        name: 'Bob',
        phone: '2225552222'
    },
    {
        name: 'Carol',
        phone: '3335553333'
    }
];

(async () => {
    // Wipe and reset the DB
    fs.unlinkSync('database.db');
    const db = await getDB();
    await db.exec(`
        create table applicant (
            name text,
            phone text,
            screener text
        ); 
    `)
    // 
    for (const applicant of DUMMY_APPLICANTS) {
        await db.run('insert into applicant (name, phone) values (?, ?)', 
            applicant.name,
            applicant.phone);
    }
})()