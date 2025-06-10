
import { serial, text, pgTable, timestamp, numeric } from 'drizzle-orm/pg-core';

export const landingConfigTable = pgTable('landing_config', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  message: text('message').notNull(),
  background_color: text('background_color').notNull(),
  glass_opacity: numeric('glass_opacity', { precision: 3, scale: 2 }).notNull(),
  spinner_color: text('spinner_color').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

export type LandingConfig = typeof landingConfigTable.$inferSelect;
export type NewLandingConfig = typeof landingConfigTable.$inferInsert;

export const tables = { landingConfig: landingConfigTable };
