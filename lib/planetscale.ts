import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface PostInfo {
  id: Generated<number>;
  slug: string;
  views: number;
}

interface Database {
  PostInfo: PostInfo;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL
  })
});
