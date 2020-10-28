<p align="center"><img src="public/logo512.png" alt="FOSSDorm" width="250" height="250"></p>
<h1 align="center">FOSSDorm</h1>

<div align="center">
  <strong>Build your open source profile</strong><br>
  A <a href="https://www.gnome.org/challenge/">GNOME Challenge 2020 </a> project that aims to bring, engage, and retain new contributors to the open source community.
</div>
<br/>
FOSSDorm is a free and open source platform to help newcomers find open source projects based on their skill preference, then learn how to contribute to the selected project, and engage them for the long term.

<br/>

To achieve the same target, FOSSDorm aims to fulfills three basic needs:

1. <strong>Where to find skill-based suitable project:</strong> GitHub is a large ocean where new contributors find hard to search for project meeting their demands. Hence, FOSSDorm provides a list of all verified and approved (by us) open source projects.
2. <strong>How to contribute:</strong> Even after finding a project, contributors sometimes fail to engage with the community due to lack of good documentation for beginners. Hence, each project on FOSSDorm contains a separate page providing all informations about the project, how to set up a project at localhost, guide for contribution, and how to stay in touch with the community.
3. <strong>How to engage contributors forever:</strong> FOSSDorm also has reward system that helps contributors build their profile displaying the amount of open source contribution they've done to the projects listed at FOSSDorm.

## Open Source Tools Used By FOSSDorm
We at FOSSDorm highly promotes the open source softwares and hence use them as well against the proprietary or closed softwares.
- [Node.js](https://nodejs.org/)
  
- [NPM](https://www.npmjs.com/)
  
- [React.js](https://reactjs.org/)
  
- [Inkscape](https://inkscape.org/)
  
- [Storybook](https://storybook.js.org/)
  
- [Sass](https://sass-lang.com/)
  
- [Bootstrap](https://getbootstrap.com/) 
  
- [Semantic UI](https://semantic-ui.com/)
  
- [Postman](https://www.postman.com/)
  
#### Special mention to [Fosshost](https://fosshost.org/), who provides free hosting to FOSS projects including FOSSDorm.

## How To Use FOSSDorm platform?

## How To Contribute To FOSSDorm project (Frontend)?
Whether you're a developer or not, you can contribute to FOSSDorm in any of the following ways:

- Coding 

- Documentation
  
- Bug fixes
  
- Website design

### Set up local environment
Before setting up project locally, you must have the following tools installed on your system:
- Git
- NPM

**1. Fork the frontend repository**

<p align="center"><img src="docs/images/readme/fork_the_repo.png" alt="Fork the repo" width="auto" height="auto"></p>

**2. Clone your own copy of repo**

```
git clone https://github.com/<username>/frontend.git
```
Here replace `<username>` with your own github username

**3. Install dependencies**

```
cd frontend
npm install
```
**4. Run site at localhost**

```
npm start
```
If you're able to see website running at localhost, then you're ready to make change and contribute.
<p align="center"><img src="docs/images/readme/localhost_run_successfully.png" alt="localhost site run successfully" width="auto" height="auto"></p>

### Make changes and create pull request
**1. Create your own branch and checkout**

Though you can also make changes in your `main` branch and create pull request, we highly recommend you to make your own new branch and checkout to it before making any changes.

```
git branch <new-branch-name>
git checkout <new-branch-name>
```
Here replace `<new-branch-name>` with a new branch name you want to give. e.g. `git branch my-changes`
<br/>
Now, make sure you're on the new branch.
```
git branch
```

<p align="center"><img src="docs/images/readme/create_branch_checkout.png" alt="Create branch and checkout" width="auto" height="auto"></p>

**2. Make changes**

Once you switch to a new branch, make changes you want.

**3. Commit new changes**
Once you're done testing your new changes at localhost, save the work by running commands:
```
git add .
git commit -m "<message>"
```
Here replace `<message>` with a small description of your new changes. e.g. "add contact us page", "fix docs".

**4. Push local changes to remote**
```
git remote --set-upstream origin <new-branch-name>
```
If you're prompted to enter GitHub username and password, enter your credential and you're ready to create a pull request.
<p align="center"><img src="docs/images/readme/push_changes.png" alt="Push new changes" width="auto" height="auto"></p>
Next time, you can only run `git push` to push new changes to remote.

**5. Create pull request**

Once you push all changes to your remote GitHub server, go to your own GitHub account >> `frontend` repo and you'll see a notification of new changes.

<p align="center"><img src="docs/images/readme/display_pull_request.png" alt="new changes notification" width="auto" height="auto"></p>

Click on the "Compare & pull request" and then open a pull request from the next page.
<p align="center"><img src="docs/images/readme/open_pull_request.png" alt="open pull request" width="auto" height="auto"></p>
Leave a comment if you want to add any message in detail.

## Contact Us
If you've any doubt or want to ask any question, feel free to message us through [mail](mailto:sarru1291@gmail.com), [slack](https://join.slack.com/t/fossdorm/shared_invite/zt-imvn58kj-blkO4r49JHX58l9ioB0eAg), or [telegram](https://t.me/fossdorm).
