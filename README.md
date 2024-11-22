# Angular PWA Setup

A Progressive Web App (PWA) is a type of application delivered through the web that leverages modern web technologies to provide an app-like experience. PWAs are reliable, fast, and engaging, offering features like offline access, push notifications, and installation on devices.

### Advantages of PWAs:
- **Offline Capability**: Works even without an internet connection.
- **Cross-Platform**: Runs on any device with a browser.
- **App-Like Feel**: Provides a native app-like experience.
- **No App Store Required**: Install directly from the browser without needing an app store.
- **Improved Performance**: Optimized loading and caching enhance speed.
- **SEO Friendly**: As it's a web application, it can be indexed by search engines.


---


This guide will help you set up an Angular Progressive Web App. The current Angular version is **17.1.2**

## Steps to Get Started

1. **Add a Template**  
   Download and integrate the template from: [Kevinflor-ES Template](https://angulartemplates.com/product/kevinflor-es)

2. **Install Dependencies**  
   Install the required dependencies by running:  
   ```bash
   npm install
3. **Add the Angular PWA Library**
  Set up the Angular Service Worker to enable PWA features by running:
    ```bash
   ng add @angular/pwa
4. **Run the Application**
  Start the development server with the following command:
   ```bash
   ng serve
5. **Access the App**

    Open your browser and go to:
    `http://localhost:4200/`

In the right side of the URL bar, you will notice a **download/install icon**.
Click on it to install the app as a PWA and start enjoying its features!



---

## Important Notes for Angular Deployment to GitHub Pages

1. ##### Configure Build Path
    - To configure the build path, refer to the official Angular documentation [here](https://angular.dev/tools/cli/deployment#manual-deployment-to-a-remote-server).

    - Example configuration in angular.json:
     ```bash
    "outputPath": "dist/deploy-angular-pwa-app"
2. ##### Configure Base URL for Production Build
    - Navigate to **Pages / GitHub Pages** in your repository settings and copy the 'site URL' (e.g., https://username.github.io/repository-name).

    - Update the package.json file with the following build command:
    ```bash
    "build:prod": "ng build --configuration production --base-href {site url}/"
3. ##### Set Deployment Branch
    - Navigate to **Pages / GitHub Pages** in your repository settings.

    - Set the deployment branch to `gh-pages`, as specified in the `branch` field of your workflow YAML file.
4. ##### Generate and Configure GitHub Token

    - Follow the guide [here](https://docs.catalyst.zoho.com/en/tutorials/githubbot/java/generate-personal-access-token/) to generate a personal access token.

    - Add the token to your repository secrets as a new secret.

    - Use the token in your workflow YAML file as:
    ```bash
    github_token: ${{ secrets.PWA_GITHUB_TOKEN }}
