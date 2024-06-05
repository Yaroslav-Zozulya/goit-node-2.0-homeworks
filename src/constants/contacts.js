import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const PATH_DB = path.resolve(__dirname, '..', 'db', 'db.json');

// version 2
// import path from 'path';
// export const PATH_DB = path.resolve(process.cwd(), 'src', 'db', 'db.json');

// version 3
// import path from 'path';
// export const PATH_DB = path.resolve('src', 'db', 'db.json');
