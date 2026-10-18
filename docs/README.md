# Swoop project website

Static English Bootstrap website for **https://profdrluigi.github.io/SwoopGame/**.

## Publish with GitHub Pages

1. Commit and push the `docs` directory to the **SwoopGame** repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing this folder and **/docs**, then save.

Once GitHub finishes the deployment, the page is available at the URL above.
No frontend build, package installation or custom domain is required.
See [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The website links to `https://github.com/ProfDrLuigi/SwoopGame`, matching the supplied Pages address.
The local Git remote is not changed by these website files.

## Local preview

From the repository root:

```sh
python3 -m http.server 8000 --directory docs
```

Open **http://localhost:8000/**. The site also works below the GitHub Pages
`/SwoopGame/` project prefix because every local asset URL is relative.

## Contents

- `index.html`: English copy, navigation, features, modes, fan add-ons, controls, releases and FAQ.
- `assets/css/site.css`: responsive theme and reduced-motion styles.
- `assets/js/site.js`: New/Classic screenshot switch and mobile navigation.
- `assets/img/`: optimized copies of project artwork and real captures of the native port.
- `assets/vendor/bootstrap/`: Bootstrap **5.3.8**, distributed under its included MIT license.
- `.nojekyll`: serves the directory as ordinary static files.
- `sitemap.xml`, `robots.txt`: canonical Pages URL.

Bootstrap CSS/JS are stored locally and checked against the official SHA-384
values in [Bootstrap's download documentation](https://getbootstrap.com/docs/5.3/getting-started/download/).
There are no external font, analytics or video-embed requests.

The site explicitly describes **New Mode (HD)** and **Classic Mode (original
pixel art)**, plus the two independent integrated fan audio add-ons:
**NAMCO sound effects** and **Star Wars: TIE Fighter music**.
It does not advertise a finished parity percentage or invent a downloadable release.

The screenshots were captured from the native GameScene in a private preview build.
The New/Classic pair shares the same actual game state. Project artwork was
optimized into website copies; original game resources are unchanged.

The public page intentionally contains no Git commands or developer build instructions.
