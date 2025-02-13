import type { RequestHandler } from "express";
import cardRepository from "./cardRepository";

const browse: RequestHandler = async (req, res) => {
  const programsFromDB = await cardRepository.readAll();

  res.json(programsFromDB);
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

export default { add, browse };
