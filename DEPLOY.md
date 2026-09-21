# Deploy ROBONEXA to GitHub (via terminal)

Push this folder to GitHub, turn on Pages, and your store is live.

---

## 0. One-time setup (if not done)

- Install Git: https://git-scm.com  → check with `git --version`
- (Optional, easiest auth) Install GitHub CLI: https://cli.github.com
- Set your identity once:
  ```bash
  git config --global user.name  "Akshay Kangude"
  git config --global user.email "akshaykangude35@gmail.com"
  ```

---

## Option A — GitHub CLI (simplest, recommended)

From inside this folder:

```bash
cd robonext-web

# sign in once (opens the browser)
gh auth login

# create the repo AND push in one command
gh repo create RoboNexa_Web --public --source=. --remote=origin --push
```

Then turn on Pages:

```bash
gh repo edit --enable-pages 2>/dev/null || true
```
(If that flag isn't supported, just do step "Turn on Pages" below in the browser — one time.)

---

## Option B — Plain Git (create the empty repo on github.com first)

1. On **github.com**: **New repository** → name **`RoboNexa_Web`** → **Public** →
   **do NOT** add a README/.gitignore → **Create repository**.

2. In the terminal, inside this folder:

```bash
cd robonext-web

git init
git add .
git commit -m "Initial ROBONEXA store"
git branch -M main
git remote add origin https://github.com/akshaykangude/RoboNexa_Web.git
git push -u origin main
```

> Already created the repo under a different name earlier? Just repoint the remote:
> ```bash
> git remote set-url origin https://github.com/akshaykangude/RoboNexa_Web.git
> git push -u origin main
> ```

### About the password prompt
GitHub does **not** accept your normal password over HTTPS. When it asks for a
password, paste a **Personal Access Token (PAT)**:

- github.com → your avatar → **Settings ▸ Developer settings ▸ Personal access
  tokens ▸ Tokens (classic) ▸ Generate new token (classic)**
- tick the **`repo`** scope, generate, copy it, and paste it as the password.

(Or set up an SSH key and use `git@github.com:akshaykangude/RoboNexa_Web.git`
as the remote instead.)

---

## Turn on Pages (one time, in the browser)

Repo → **Settings ▸ Pages** → *Build and deployment* →
Source **Deploy from a branch** → Branch **main** / **/(root)** → **Save**.

---

## Where is my link?

Because the repo is named **`RoboNexa_Web`** (a normal project repo), your live
site includes the repo name in the path:

### 👉 https://akshaykangude.github.io/RoboNexa_Web/

It appears ~1 minute after you enable Pages. The exact URL is also shown at the
top of **Settings ▸ Pages** once it's live. Mind the capital letters — the path
matches the repo name exactly.

---

## Every time you change something later

```bash
git add .
git commit -m "update products / prices / images"
git push
```
The live site updates automatically in about a minute.

---

## Don't forget

Open `index.html` and set your repo in the config block near the top of the
`<script>` so the admin "Choose from GitHub" picker works:

```js
const GH_USER   = "akshaykangude";
const GH_REPO   = "RoboNexa_Web";
const GH_BRANCH = "main";
```
Also change `const ADMIN_PASS = "admin123";` to your own admin password.
