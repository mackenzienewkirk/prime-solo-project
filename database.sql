
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "endeavor" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (255),
    "budget" INTEGER,
    "materials" VARCHAR (255),
    "inspiration" VARCHAR (255),
    "description" TEXT,
    "end_goal" VARCHAR (255),
    "created" TIMESTAMP,
    "is_done" BOOLEAN,
    "user_id" INTEGER
    );