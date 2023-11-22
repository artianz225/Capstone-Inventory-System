import loginService from "../services/loginService.js";

function login(req, res, _next) {
  const body = req.body;

  loginService
    .login(body).then((user) => res.status(200).json({
        token: user.token,
        employeeId: user.employeeId,
        username: user.username,
        name: user.name,
        contact: user.contact,
        email: user.email,
        position: user.position,
        photoInfo: {
          url: user.photoInfo.url,
        },
      })
    ).catch((error) => res.status(403).json({error: error.message}));
}

export default {login};
