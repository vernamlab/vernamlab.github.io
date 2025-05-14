## Maintaining the website on Github

Subpages have "edit this page link"  at the bottom. I tried to make the formatting as easy as possible for editing
- to add a Blogs or News entry, you just create a markdown file under the blogs or news folder.
- To add a user, modify the facultyMembers, phdStudents or alumni arrays in `/docs/member.mdx`
- to edit the projects page, edit `/docs/projects.md` 
- to edit the join us page, edit `/docs/join-us.md`

Editing the landing page is tricky but minor edits are easy:
- the quote under the slider is kept in `/src/pages/index.js`
- the text for Grad/Undergrad Students are kept in `/src/components/HomepageFeatures/index.js`
- Recent news holds the most recent 4 news automatically. no need to edit that.
- sponsor thank you note is kept in `/src/components/SponsorBanner.js`
- sponsor logos are under `/static/img/logos`, just add/remove an image  and it updates automatically.

## Local development

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation
`Bash
$ npm install
`
This command installs all the necessary dependencies for your project.

`Bash
$ npm run start -- --poll
`
This command starts a local development server and typically opens up a browser window. Most changes are reflected live without having to restart the server.
