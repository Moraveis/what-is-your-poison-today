import { Ingridient } from "./stubIngridients";

export interface Recipe {
    id: number;
    name: string;
    ingridients: Array<Ingridient>;
    howto: string;
}

export var stubRecipes: Recipe[] = [
    {
        "id": 1,
        "name": "recipe 1 - pasta",
        "ingridients": [
            {
                "id": 1,
                "name": "salt",
                "quantity": 1,
            },
            {
                "id": 2,
                "name": "garlic",
                "quantity": 1,
            },
            {
                "id": 2,
                "name": "oil",
                "quantity": 1,
            },
            {
                "id": 2,
                "name": "pasta",
                "quantity": 1,
            },
        ],
        "howto": "how to do recipe 1"
    },
    {
        "id": 2,
        "name": "recipe 2 - strogonoff",
        "ingridients": [
            {
                "id": 1,
                "name": "salt",
                "quantity": 1,
            },
            {
                "id": 2,
                "name": "garlic",
                "quantity": 1,
            },
            {
                "id": 3,
                "name": "oil",
                "quantity": 1,
            },
            {
                "id": 4,
                "name": "chicken",
                "quantity": 2,
            },
        ],
        "howto": "how to do recipe 2"
    },
]