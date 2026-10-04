# DoubleU Softs website

Static HTML, CSS and JavaScript website for doubleusofts.com, adapted from the whisperads.top reference. No build step or framework is required.

## Included
- Reference layout, section labels, colored cards, floating dock and theme switch.
- Software and web development content, six expandable service cards and service details.
- Responsive layout, keyboard-accessible dialogs, reduced-motion support and custom favicon.
- GitHub Pages deployment workflow.

## Preview locally
Run `python3 -m http.server 8000` from this folder, then open http://localhost:8000.

## Publish through GitHub
1. Create a GitHub repository and upload the contents of this folder, including `.github/workflows/deploy.yml`, to the `main` branch.
2. In repository Settings → Pages, select **GitHub Actions** as the source.
3. Push a commit or run the deployment workflow. GitHub will show the resulting Pages URL.
4. When ready, configure doubleusofts.com in Settings → Pages → Custom domain and follow GitHub's current DNS instructions. Enable HTTPS after domain verification.

The domain has not been connected, and this project has not been published.

## Edit content
- `index.html`: company copy, social links, contact link and structure.
- `app.js`: service details and interactions.
- `styles.css`: reference styling and DoubleU Softs refinements.
- `favicon.svg`: temporary W brand mark; replace with your final logo if desired.

Social links and the LinkedIn contact route are carried over from the supplied reference website. Replace them with company profiles if preferred. No email address, payment processing, client projects, testimonials or performance claims have been invented. Service copy is draft positioning for review.

Only theme preference is stored in the visitor's browser. No analytics or backend is included.
