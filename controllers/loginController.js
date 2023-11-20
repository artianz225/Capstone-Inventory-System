import loginService from "../services/loginService.js";

async function login(req, res, _next) {
  try {
    const body = req.body;
    console.log(body); 

    const user = await loginService.login(body);

    res.status(200).json({
      token: user.token,
      employeeId: user.employeeId,
      username: user.username,
      name: user.name,
      contact: user.contact,
      email: user.email,
      position: user.position
    });
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
}

export default { login };
