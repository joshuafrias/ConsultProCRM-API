import { Router } from 'express';
import { getBase44 } from '../base44/client.js';

const router = Router();

router.get('/entities/:entity', async (req, res) => {
  try {
    const base44 = getBase44();
    const data = await base44.entities[req.params.entity].list();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;