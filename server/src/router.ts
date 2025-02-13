import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import cardActions from "./modules/card/cardActions";
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Card All

router.get("/api/card", cardActions.browse);

// Card Add

router.post("/api/card", cardActions.add);

// Card id

router.get("/api/card/:id", cardActions.read);

// Card Edit

router.put("/api/card/:id", cardActions.edit);

// Card Delete

router.delete("/api/card/:id", cardActions.destroy);

export default router;
