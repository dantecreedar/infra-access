export const LoginDto = (req: any) => ({
  email: req.body.email as string,
  password: req.body.password as string,
});

export const RegisterDto = (req: any) => ({
  email: req.body.email as string,
  password: req.body.password as string,
  name: req.body.name as string,
  lastName: req.body.lastName as string,
  phone: req.body.phone as string | undefined,
});
