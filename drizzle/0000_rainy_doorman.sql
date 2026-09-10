CREATE TABLE `entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`group_code` text NOT NULL,
	`member_id` integer NOT NULL,
	`day_id` integer NOT NULL,
	`exercise` text NOT NULL,
	`weight` real,
	`reps` text DEFAULT '' NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`logged_at` text NOT NULL,
	FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_entries_group_date` ON `entries` (`group_code`,`logged_at`);--> statement-breakpoint
CREATE INDEX `idx_entries_member_exercise` ON `entries` (`member_id`,`exercise`);--> statement-breakpoint
CREATE TABLE `members` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`group_code` text NOT NULL,
	`name` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_members_group` ON `members` (`group_code`);