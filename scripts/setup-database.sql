-- Database setup script for AI-Powered Job Prep
-- This script creates all necessary tables and enums

-- Create enums first
CREATE TYPE "public"."job_infos_experience_level" AS ENUM('junior', 'mid-level', 'senior');
CREATE TYPE "public"."questions_question_difficulty" AS ENUM('easy', 'medium', 'hard');

-- Create users table
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"imageUrl" varchar NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);

-- Create job_info table
CREATE TABLE IF NOT EXISTS "job_info" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar,
	"name" varchar NOT NULL,
	"experienceLevel" "job_infos_experience_level" NOT NULL,
	"description" varchar NOT NULL,
	"userId" varchar NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

-- Create interviews table
CREATE TABLE IF NOT EXISTS "interviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"jobInfoId" uuid NOT NULL,
	"duration" varchar NOT NULL,
	"humeChatId" varchar,
	"feedback" varchar,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

-- Create questions table
CREATE TABLE IF NOT EXISTS "questions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"jobInfoId" uuid NOT NULL,
	"text" varchar NOT NULL,
	"difficulty" "questions_question_difficulty" NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);

-- Add foreign key constraints
ALTER TABLE "job_info" ADD CONSTRAINT IF NOT EXISTS "job_info_userId_users_id_fk" 
    FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "interviews" ADD CONSTRAINT IF NOT EXISTS "interviews_jobInfoId_job_info_id_fk" 
    FOREIGN KEY ("jobInfoId") REFERENCES "public"."job_info"("id") ON DELETE cascade ON UPDATE no action;

ALTER TABLE "questions" ADD CONSTRAINT IF NOT EXISTS "questions_jobInfoId_job_info_id_fk" 
    FOREIGN KEY ("jobInfoId") REFERENCES "public"."job_info"("id") ON DELETE cascade ON UPDATE no action;

-- Insert some sample data for testing
INSERT INTO "users" ("id", "name", "email", "imageUrl") VALUES 
    ('user_sample123', 'Test User', 'test@example.com', 'https://via.placeholder.com/150')
ON CONFLICT ("email") DO NOTHING;

SELECT 'Database setup completed successfully!' as status;
