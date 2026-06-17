import { Router } from 'express';
import { getBase44 } from '../base44/client.js';

const router = Router();

router.post('/functions/:name', async (req, res) => {
  try {
    const base44 = getBase44();
    const result = await base44.functions.invoke(req.params.name, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;