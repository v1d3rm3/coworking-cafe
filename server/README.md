## Primeiros Passos
- Copiar o arquivo `TEMPLATE.db.json` para o mesmo local com nome `db.json`.

## Rotas

### Cadastrar usuário
```
POST /usuario
{
    nome: string
    dataNascimento: Date
    email: string
    login: string
    senha: string
}
```