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
    },
    {
        name: 'Dave',
        phone: '4445554444'
    },
    {
        name: 'Elea',
        phone: '5555555555'
    },
    {
        name: 'Frank',
        phone: '6665556666'
    },
    {
        name: 'Gertrude',
        phone: '7775557777'
    },
    {
        name: 'Harry',
        phone: '8885558888'
    },
    {
        name: 'Ingrid',
        phone: '9995559999'
    },
    {
        name: 'John',
        phone: '0005550000'
    }
];

(async () => {
    // Wipe and reset the DB
    try {
        fs.unlinkSync('database.db');
    } catch (e) {
        // Probably didn't exist yet
    }
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