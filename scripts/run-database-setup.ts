import { config } from "dotenv"
import { neon } from "@neondatabase/serverless"

// Load environment variables from .env.local
config({ path: ".env.local" })

// Database connection using environment variables
const sql = neon(process.env.DATABASE_URL!)

async function setupDatabase() {
  try {
    console.log("🚀 Starting database setup...")

    // Create users table
    await sql`
      CREATE TABLE IF NOT EXISTS "users" (
        "id" text PRIMARY KEY NOT NULL,
        "name" text NOT NULL,
        "email" text NOT NULL,
        "imageUrl" text,
        "createdAt" timestamp DEFAULT now() NOT NULL,
        "updatedAt" timestamp DEFAULT now() NOT NULL,
        CONSTRAINT "users_email_unique" UNIQUE("email")
      );
    `
    console.log("✅ Created users table")

    // Create job_info table
    await sql`
      CREATE TABLE IF NOT EXISTS "job_info" (
        "id" text PRIMARY KEY NOT NULL,
        "userId" text NOT NULL,
        "title" text NOT NULL,
        "description" text NOT NULL,
        "experienceLevel" text DEFAULT 'junior' NOT NULL,
        "createdAt" timestamp DEFAULT now() NOT NULL,
        "updatedAt" timestamp DEFAULT now() NOT NULL
      );
    `
    console.log("✅ Created job_info table")

    // Create interviews table
    await sql`
      CREATE TABLE IF NOT EXISTS "interviews" (
        "id" text PRIMARY KEY NOT NULL,
        "jobInfoId" text NOT NULL,
        "userId" text NOT NULL,
        "type" text NOT NULL,
        "status" text DEFAULT 'pending' NOT NULL,
        "feedback" text,
        "score" integer,
        "createdAt" timestamp DEFAULT now() NOT NULL,
        "updatedAt" timestamp DEFAULT now() NOT NULL
      );
    `
    console.log("✅ Created interviews table")

    // Create questions table
    await sql`
      CREATE TABLE IF NOT EXISTS "questions" (
        "id" text PRIMARY KEY NOT NULL,
        "jobInfoId" text NOT NULL,
        "userId" text NOT NULL,
        "question" text NOT NULL,
        "answer" text,
        "difficulty" text DEFAULT 'medium' NOT NULL,
        "type" text DEFAULT 'technical' NOT NULL,
        "createdAt" timestamp DEFAULT now() NOT NULL,
        "updatedAt" timestamp DEFAULT now() NOT NULL
      );
    `
    console.log("✅ Created questions table")

    // Add foreign key constraints
    await sql`
      DO $$ 
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.table_constraints 
          WHERE constraint_name = 'job_info_userId_users_id_fk'
        ) THEN
          ALTER TABLE "job_info" ADD CONSTRAINT "job_info_userId_users_id_fk" 
          FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
        END IF;
      END $$;
    `

    await sql`
      DO $$ 
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.table_constraints 
          WHERE constraint_name = 'interviews_jobInfoId_job_info_id_fk'
        ) THEN
          ALTER TABLE "interviews" ADD CONSTRAINT "interviews_jobInfoId_job_info_id_fk" 
          FOREIGN KEY ("jobInfoId") REFERENCES "job_info"("id") ON DELETE cascade ON UPDATE no action;
        END IF;
      END $$;
    `

    await sql`
      DO $$ 
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.table_constraints 
          WHERE constraint_name = 'interviews_userId_users_id_fk'
        ) THEN
          ALTER TABLE "interviews" ADD CONSTRAINT "interviews_userId_users_id_fk" 
          FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
        END IF;
      END $$;
    `

    await sql`
      DO $$ 
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.table_constraints 
          WHERE constraint_name = 'questions_jobInfoId_job_info_id_fk'
        ) THEN
          ALTER TABLE "questions" ADD CONSTRAINT "questions_jobInfoId_job_info_id_fk" 
          FOREIGN KEY ("jobInfoId") REFERENCES "job_info"("id") ON DELETE cascade ON UPDATE no action;
        END IF;
      END $$;
    `

    await sql`
      DO $$ 
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.table_constraints 
          WHERE constraint_name = 'questions_userId_users_id_fk'
        ) THEN
          ALTER TABLE "questions" ADD CONSTRAINT "questions_userId_users_id_fk" 
          FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
        END IF;
      END $$;
    `

    console.log("✅ Added foreign key constraints")

    console.log("🎉 Database setup completed successfully!")

    // Test the connection by querying users table
    const result = await sql`SELECT COUNT(*) as count FROM users`
    console.log(`📊 Users table has ${result[0].count} records`)
  } catch (error) {
    console.error("💥 Database setup failed:", error)
    process.exit(1)
  }
}

setupDatabase()
