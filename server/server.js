const jsonServer = require("json-server");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const saltRounds = 10;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

/**
 * POST /autenticar
 */
server.post("/usuario/autenticar", async (req, res) => {
  const usuario = await getUserByLogin(req.body.login);

  if (!usuario) {
    sendErro400("Usuário não existe", res);
    return;
  }

  if (!(req?.body?.senha && usuario?.senha)) {
    sendErro400("Senha não foi passada", res);
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(req.body.senha, usuario.senha);

  if (!isPasswordCorrect) {
    sendErro400("Senha incorreta", res);
    return;
  }

  res.status(200).json({});
});

/**
 * POST /usuario
 * A ideia aqui é criptografar a senha
 * do usuário através do algoritmo bcrypt antes
 * de repassar para o banco.
 */
server.post("/usuario", async (req, res, next) => {
  const alreadyExists = await userAlreadyExists(req.body.login);

  if (alreadyExists) {
    res.status(400).json({ message: "Usuário já existe" });
    return;
  }

  const hash = await bcrypt.hash(req.body.senha, saltRounds);
  req.body.senha = hash;
  next();
});

/**
 * Verifica se usuário já existe no banco ou não.
 * @param {string} login
 */
async function userAlreadyExists(login) {
  const usuario = getUserByLogin(login);
  if (usuario) {
    return true;
  } else {
    return false;
  }
}

/**
 * Recupera usuário pelo login
 * @param {string} login
 */
async function getUserByLogin(login) {
  return _(router.db.get("usuario"))
  .filter((u) => u.login === login)
  .first()
  .value();
}

async function sendErro400(message, res) {
  res.status(400).json({ message });
  return;
}

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
