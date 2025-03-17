const { z } = require('zod');

const createTODO = z.object({
  title: z.string(),
  description: z.string(),
  completed: z.boolean().optional()

});

const updateTODO = z.object({
  id: z.string(),
  Completed: z.boolean()
});

module.exports = { createTODO, updateTODO };