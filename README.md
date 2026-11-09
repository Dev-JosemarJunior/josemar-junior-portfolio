# Josemar Júnior — portfólio

Site pessoal estático (HTML/CSS/JS) para GitHub Pages.

URL esperada:

`https://dev-josemarjunior.github.io/josemar-junior-portfolio/`

## Rodar local

Abra `index.html` no navegador, ou na pasta deste projeto:

```bash
npx --yes serve .
```

## Publicar no GitHub Pages

Este pasta deve ir para um repositório **separado** (não o `portal-nac`).

1. Crie um repositório público `josemar-junior-portfolio` na conta [Dev-JosemarJunior](https://github.com/Dev-JosemarJunior).
2. Nesta pasta:

```bash
git init
git add .
git commit -m "feat: primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/Dev-JosemarJunior/josemar-junior-portfolio.git
git push -u origin main
```

3. No GitHub: **Settings → Pages**.
4. Source: **Deploy from a branch**.
5. Branch: `main` / pasta `/ (root)`.
6. Em 1–2 minutos o site sobe em:

`https://Dev-JosemarJunior.github.io/josemar-junior-portfolio/`

Para o endereço curto `https://dev-josemarjunior.github.io/`, o repositório precisa se chamar `Dev-JosemarJunior.github.io`.

## Colocar no LinkedIn

1. **Website do perfil** — lápis em Introdução → **Adicionar site** → tipo **Site pessoal** → cole a URL do Pages.
2. **Destaques** — **Adicionar destaque** → **Link** → mesma URL → título `Portfólio`.
3. **Sobre** — inclua a URL no texto.
4. **Experiência atual** — em Grupo Solução & Cia → **Adicionar mídia** → **Link**.
