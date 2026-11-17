# adivijaykumar.github.io

Website for Aditya Vijaykumar, built with Jekyll and served by GitHub Pages.

## Run locally

Requires [pixi](https://pixi.sh). It provides Ruby and the compilers; gems are installed into `vendor/bundle`.

```bash
pixi run serve        # http://localhost:4000 with live reload
pixi run build        # one-off build into _site/
pixi run check-links  # build, then check internal links and files
pixi run update-cv    # download the CV for local previews
```

## Deploying

GitHub Actions builds and deploys the site (`.github/workflows/pages.yml`):

- **Every push** builds the site and checks internal links. Only pushes to `master` deploy.
- **The CV** is downloaded from the [resume repo](https://github.com/adivijaykumar/resume)
  (`Vijaykumar_CV_with_pubs.pdf`) during each build and served at `/Vijaykumar_CV.pdf`.
  A daily run picks up a new CV automatically; for an immediate update, use
  **Actions → Build and deploy site → Run workflow**.
- In the repo settings, **Pages → Source** must be set to **GitHub Actions**.

For local previews, `pixi run update-cv` downloads a copy of the CV (it isn't committed).

## Where things live

| What | File |
| --- | --- |
| Papers on `/research/` | `_data/papers.yml` |
| Homepage | `index.html` |
| Research page layout | `research.html`, `_includes/paper-list.html` |
| About / Resources text | `about.md`, `resources.md` |
| Header, footer, social links | `_includes/site-header.html`, `_includes/site-footer.html`, `_includes/social-icons.html` |
| Styles (light + dark) | `assets/css/main.css` |
| Theme toggle, mobile menu | `assets/js/site.js` |

### Adding a paper

Add an entry at the top of the right list (`short`, `collaboration`, or `other`) in `_data/papers.yml`:

```yaml
  - title: "Paper title"
    authors: "Someone, **Aditya Vijaykumar**, Someone Else"
    year: 2026
    arxiv: "https://arxiv.org/abs/XXXX.XXXXX"
    journal: { name: "Phys. Rev. D", url: "https://doi.org/..." }   # optional
    extra:                                                          # optional
      - { name: "Astrobites", url: "https://..." }
    note: "Submitted to PRD."                                       # optional
```

Each paper's SciX link is built automatically from its `arxiv` URL. To override it, add `scix: "https://scixplorer.org/abs/<bibcode>"`.
