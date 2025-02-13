import type { RequestHandler } from "express";
import cardRepository from "./cardRepository";

const browse: RequestHandler = async (req, res) => {
  const programsFromDB = await cardRepository.readAll();

  res.json(programsFromDB);
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const card = {
      id: Number(req.params.id),
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
    };

    const affectedRows = await cardRepository.update(card);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const add: RequestHandler = async (req, res) => {
  try {
    const newCard = {
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
    };
    const insertId = await cardRepository.create(newCard);
    if (insertId) {
      res.status(201).json({ insertId });
    } else {
      res.status(400).send("Erreur carte déja présent");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

const destroy: RequestHandler = async (req, res) => {
  try {
    const cardId = Number(req.params.id);
    await cardRepository.delete(cardId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
  }
};

const read: RequestHandler = async (req, res) => {
  try {
    const cardId = Number.parseInt(req.params.id);

    const card = await cardRepository.read(cardId);

    if (card != null) {
      res.json(card);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
};

export default { add, browse, read, edit, destroy };
