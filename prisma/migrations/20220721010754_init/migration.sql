-- CreateTable
CREATE TABLE "ingridients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "recipes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "how_to_prepare" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "IngridientsOnRecipe" (
    "ingridient_id" TEXT NOT NULL,
    "recipe_id" TEXT NOT NULL,
    "quantity" REAL NOT NULL,

    PRIMARY KEY ("ingridient_id", "recipe_id"),
    CONSTRAINT "IngridientsOnRecipe_ingridient_id_fkey" FOREIGN KEY ("ingridient_id") REFERENCES "ingridients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IngridientsOnRecipe_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
