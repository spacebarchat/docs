# Spacebar Docs

[![Build to GitHub Pages](https://github.com/spacebarchat/docs/actions/workflows/build.yml/badge.svg)](https://github.com/spacebarchat/docs/actions/workflows/build.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/86622c9d-4952-4da5-9825-cc016e4a5e5f/deploy-status)](https://app.netlify.com/sites/spacebar-chat/deploys)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/spacebarchat/docs)

## How to get started

1. Fork this repository.
2. Clone the forked repository.

    ```bash
    git clone https://github.com/<YOUR_USERNAME_HERE>/docs
    ```

3. Install dependencies.

    ```bash
    python3 -m pip install -r requirements.txt
    ```

4. Edit documents(s).

    - Format document(s).

    Spacebar uses [prettier](https://prettier.io) formatter to consistently format our documents. Instructions to install and use prettier can be found [here](https://prettier.io/docs/en/install.html).

    If you are using vscode, install the [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to automatically format documents on save.

5. Test locally.

    - Serve in <http://127.0.0.1:8000> with hot reload:

        ```bash
        python3 -m mkdocs serve
        ```

    - Build for production:

        ```bash
        python3 -m mkdocs build
        ```

6. Commit changes with good commit messages.
7. Create a pull request.
