export const requireTenant = (req, res, next) => {
  const tenantId = req.headers['x-tenant-id'];

  if (!tenantId) {
    return res.status(400).json({
      success: false,
      message: 'Missing x-tenant-id header'
    });
  }

  req.tenantId = tenantId;

  next();
};