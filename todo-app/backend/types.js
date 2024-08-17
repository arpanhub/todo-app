const zod = require("zod");

const createTODO = zod.object({
  title: zod.tostring(),
  description: zod.string(),
});

const updateTODO = zod.object({
  id: zod.tostring(),
});

module.exports = {
  createTODO: createTODO,
  updateTODO: updateTODO,
};
