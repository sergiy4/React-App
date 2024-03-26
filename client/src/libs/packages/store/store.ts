import { config } from '../config/consfig.js';
import { Store } from './store.package.js';

const store = new Store(config);

export { store };
