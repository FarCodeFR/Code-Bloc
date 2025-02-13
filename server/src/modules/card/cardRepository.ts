import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

type Card = {
  id?: number;
  title: string;
  description: string;
  image: string;
};

class cardRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all programs from the "program" table
    const [rows] = await databaseClient.query<Rows>(
      "select id, title, description, image from card",
    );

    // Return the array of programs
    return rows as Card[];
  }

  async create(card: Card) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into card (title, description, image) values (?, ?, ?)",
      [card.title, card.description, card.image],
    );
    return result.insertId;
  }
}

export default new cardRepository();
