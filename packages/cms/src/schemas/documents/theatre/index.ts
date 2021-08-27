import { schema as locationSchema } from './location';
import { schema as artistSchema } from './artist';

import { schema as showSchema, objects as showObjects } from './show';
import { schema as seasonSchema } from './season';
import { schema as organizationSchema } from './organization';
import { schema as seriesSchema } from './series';

export const theatreDocuments = [
    artistSchema,
    locationSchema,
    organizationSchema,
    seriesSchema,
    showSchema,
    seasonSchema,
];

export const theatreObjects = [...showObjects];
