import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type CardAdd = {
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

  async update(card: Card) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE card SET title = ?, description = ?, image = ? WHERE id = ?",
      [card.title, card.description, card.image, card.id],
    );
    return result.affectedRows;
  }

  async create(card: CardAdd) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into card ( title, description, image) values ( ?, ?, ?)",
      [card.title, card.description, card.image],
    );
    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM card WHERE id = ?",
      [id],
    );
    return rows[0] as Card;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM card WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new cardRepository();
