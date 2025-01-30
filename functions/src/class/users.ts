export const register = (req: {
  body: {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    role?: string;
  };
}) => {
  return {
    name: req.body.name || "",
    email: req.body.email || "",
    password: req.body.password || "",
    phone: req.body.phone || "",
    role: req.body.role || "user",
    createdAt: new Date(),
  };
};
