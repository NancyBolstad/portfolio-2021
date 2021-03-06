const projectsData = [
  {
    id: 'hcd917cf128b48408369541784e28b31',
    name: 'Hotel booking platform',
    published: '2020-06',
    title: 'Full stack web development project',
    descriptions:
      '<p> A Node.js Restful API for CRUD operations using Express, TypeScript, Google Cloud Functions with Firebase. Automated development workflow using GitHub Actions. React components based design system using Styled-Components and Storybook. Search, filtering, sorting and paginating using Custom React Hooks. Dynamic routes and authentication using react-router-dom. Performance optimization, code splitting and lazy loading. Redux-like persisted Global Store using React Hooks and the State Reducer Pattern. Schema-based form-level validation using Yup.</p>',
    technologies: [
      'react',
      'typescript',
      'node',
      'firebase',
      'styled-components',
      'CircleCI',
      'heroku',
    ],
    categories: ['school projects', 'e-commerce'],
    website: 'https://holidaze-bergen.netlify.app/',
    image:
      'https://res.cloudinary.com/dykdxdtuu/image/upload/v1597259024/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64796b6478647475752f696d6167652f75706c6f61642f715f6175746f3a65636f2f76313539313838323338322f686f6c6964617a612f686f6c6964617a652d62657267656e2e6e65746c6966792e6170705f5f4c6170746f705f_1_f69myi.png',
    isOpenSource: true,
    gitLink: 'https://github.com/NancyBolstad/bergen-hotel-booking',
  },
  {
    id: 'ecd917cf128b48408369541784e28b31',
    name: 'ludens',
    published: '2020-04',
    title: "Developed the front-end for Luden's new website within two weeks",
    descriptions:
      "<p>The purpose of this project was to build a new website for a Norwegian design and technology company located in Oslo. The end-goal is to get the new website to sell the company's digital services and software.</p><p>Together with another developer at Ludens, I developed this website from scratch to end product within only two weeks. The final product has a plethora of features, functionality, and configurations, including SEO, integration with a scalable, headless,cross-platform content management system and easy forms.</p><strong>My contribution in this project includes: developing the header, footer and article components, creating on-site search functionalities, and building the contact forms. I was also responsible for creating automated build, test, and deploy workflows using CircleCI.</strong>",
    technologies: [
      'react',
      'typescript',
      'next',
      'node',
      'mongoDB',
      'styled-components',
      'CircleCI',
      'heroku',
    ],
    categories: ['work projects'],
    website: 'https://www.ludensreklame.no/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586430095/mysite/mtgdj2b494j1oyonbzqz.jpg',
    isOpenSource: false,
  },
  {
    id: 'c2598cb52970426581df9f3d5fce612a',
    name: 'asker kulturhus',
    published: '2019-05',
    title: "My very first React project at work: Asker Kulturhus' website",
    descriptions:
      "<p>I got my first developer job after 6 months of learning web development at Noroff. Ludens is a Norwegian design and technology company, building its clients??? websites mostly using React, TypeScript, Node, Next and MongoDB. They also handle SEO, graphic designs and digital marketing among other things.</p><p>Asker Kulturhus' website was my first web development project in the company. I got a crash course in developing websites with React, TypeScript, Node and MongoDB, and started putting these to work immediately.</p>",
    technologies: ['react', 'typescript', 'sanity', 'styled-components'],
    categories: ['work projects'],
    website: 'https://askerkulturhus.no/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586331201/mysite/bo2ytz6xsco4awdxkibu.jpg',
    isOpenSource: false,
  },
  {
    id: '2ea19538f04340e1a9b0a6024e4852bd',
    name: 'tensorflow-detection',
    published: '2019-07',
    title: 'Real time movement detection app built with TensorFlow.js',
    descriptions:
      '<p>As a web developer, I am thirsting for new things to learn. This eye movement tracking app is built with TensorFlow.js, a JavaScript framework which allows us to build Machine Learning models. On this project, I learnt how to create multi-dimensional data containers. I also got a deep understanding of how TypeScript and React hooks work.</p>',
    technologies: ['typescript', 'react', 'tensorflow', 'npm'],
    categories: ['pet projects', 'machine learning'],
    website: 'https://look-at-me.netlify.com/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586330977/mysite/svpmnxwcwgtdbz2wga1f.jpg',
    isOpenSource: true,
    gitLink: 'https://github.com/NancyBolstad/tensorflow-detection',
  },
  {
    id: '0ed92f5bf1e1459fb367b205a25a69a1',
    name: 'giphy search',
    published: '2019-10',
    title: 'A simple gif search React app made with the GIPHY API.',
    descriptions:
      '<p>This is a pet project I created during my spare time for practicing async programming, promises, and try/catch in JavaScript as well as creating my own React custom hooks for fetching data from a third party API.</p><h3>Technology Stack</h3><ul><li>TypeScript</li><li>React</li><li>Styled components</li><li>Storybook</li></ul><h3>Features</h3><ul><li>Async fetching</li><li>Display search results in a Masonry-like grid layout/photo gallery</li><li>Support infinite loading: keep loading more images when user clicks the &quot;Load more&quot; button</li><li>Show trending gifs in the index page</li><li>Responsive design. Mobile-first.</li><li>Meet the Web accessibility requirements.</li></ul>',
    technologies: ['typescript', 'react'],
    categories: ['pet projects', 'search app'],
    website: 'https://nancybolstad.github.io/giphy-app/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586331189/mysite/izlujktnarjapwodehjb.jpg',
    isOpenSource: true,
    gitLink: 'https://github.com/NancyBolstad/giphy-app',
  },
  {
    id: '8c83fb093a79424fb4d2f24da9bc0bb1',
    name: 'stendi',
    published: '2020-01',
    title: "Build website for Norway's largest private healthcare services",
    descriptions:
      "<p>Together with the development team at Ludens, we developed this website for Stendi, Norway's largest provider of private healthcare services. I was involved in both the frontend and backend of the development process. In the frontend part, I created the theme/mode change toggle, page layout, slider, CTA page banners, responsive cards list and the employee list. In the backend part, I created schemas in the database using Node, Next and MongoDB, as well as functionalities that support generating PDF documents using NodeJs.</p>",
    technologies: ['react', 'typescript', 'Node', 'Next', 'mongoDB'],
    categories: ['work projects', 'e-commerce'],
    website: 'https://stendi.no/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586331052/mysite/gvycbh0le6qladriqmpk.jpg',
    isOpenSource: false,
  },
  {
    id: 'b0a7f1b9b45840458b1944a6304d85b6',
    name: 'search for RAWG Video Games',
    published: '2020-03',
    title: 'Hooks for Advanced React Component Development',
    descriptions:
      "<p>I created this video game search app with React and TypeScript for the JavaScript Frameworks course at Noroff.</p><h3>Technology Stack</h3><ul><li>TypeScript</li><li>React</li><li>React router dom</li><li>Styled-components</li><li>Storybook</li></ul><h3>Features</h3><ul><li>Creating a custom hook for fetching Data</li><li>Managing global state with React&#39;s Hooks and Context API</li><li>Lazy Loading components with React.lazy and React.suspense </li><li>Taking advantage of local storage to create persist state on page refresh</li><li>Enabling dark mode with Styled-components' theme provider</li><li>Testing with Jest</li><li>Creating reusable array sort functions</li><li>Creating reusable component and utils</li></ul>",
    technologies: ['typescript', 'react'],
    categories: ['school projects', 'search app'],
    website: 'https://agitated-kilby-44b818.netlify.com/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586331151/mysite/yim4muf9qt9zhwghxlc8.jpg',
    isOpenSource: true,
    gitLink: 'https://github.com/NancyBolstad/noroff-react-ca',
  },
  {
    id: 'ff1ded744630499fabd1d8904467041e',
    name: 'gravstein24',
    published: '2019-09',
    title: 'Selling gravestones online: from scratch to final products',
    descriptions:
      '<p>Cooperated with the marketing and design teams at Ludens, our development team developed a web shop for Gravestein24. I participated in and contributed to the whole development process from the backend to the frontend, and from developing the product model and schemas with MongoDB, Node and Next to creating the product page on the frontend. I also developed client side caching with Redis for improving the performance as well as authentication using JWTs.</p>',
    technologies: ['react', 'typescript', 'node', 'next', 'mongoDB'],
    categories: ['work projects', 'e-commerce'],
    website: 'https://www.gravstein24.no/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586331083/mysite/rkoeqlndzf6yxzgmpzr0.jpg',
    isOpenSource: false,
  },
  {
    id: 'ff569900ceac43cdb6dd495a515b7f62',
    name: 'elkoenery',
    published: '2019-11',
    title: 'Built an e-commerce platform for a Norwegian electrical company from scratch',
    descriptions:
      '<p>On this project, I got to create layouts, set up schemas for Sanity studios, and develop several components. The designer team sent us the style guide, which we implemented using Styled-Components and Storybook. I also got experience in how to deploy a website on Heroku. I had so much fun and learnt a lot of practical skills during this process.</p>',
    technologies: ['react', 'typescript', 'mogodb', 'storybook'],
    categories: ['e-commerce', 'work projects'],
    website: 'https://elkoenergy.no/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586331115/mysite/xnlhnqzlej8d0snrd7ad.jpg',
    isOpenSource: false,
  },
  {
    id: '71e6e4a9433d412592326f05aec6469b',
    name: 'Alt Installasjon AS',
    published: '2020-02',
    title: 'Online store for electrical installations and equipment',
    descriptions:
      '<p>Implemented well-designed user interfaces using React/Redux, TypeScript, Styled-Components, Node and advanced CSS animations. Gained hands-on experience with automated testing as well as continuous integration/deployment using CircleCI.</p>',
    technologies: ['react', 'typescript'],
    categories: ['e-commerce', 'work projects'],
    website: 'https://www.altinstallasjon.no/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586331065/mysite/xt8munzm56nasprajcxz.jpg',
    isOpenSource: false,
  },
  {
    id: 'bbab7c1cc3794605bbb11afd7786a282',
    name: 'board game',
    published: '2019-12',
    title: 'Online board game made with TypeScript, Sass and native HTML',
    descriptions:
      '<p>Starting from identifying my target user group as well as the brand personality, I then proceeded to carry out my design sketches for visual elements and interactive features. From there I moved on to develop the game, making use of modern front-end technologies such as HTML5, SASS, JavaScript, TypeScript as well as tools such as Yarn, browserify and Git. I have named the final product ???Cartoon Game of Thrones???. The website has been validated under the Web Content Accessibility Guidelines (WCAG)/the World Wide Web Consortium (W3C) standards. According to Google???s Lighthouse auditing, the page scored an overall performance grade of 99 out of 100.</p><p>The game code is made up of four main parts. First, I created a class called Storage (located in the util subfolder). Because there are several places where we need to make use of the local storage to access, update or remove player information such as their index and who is the winner, it is better to use a class rather than duplicating this code in several sections.&nbsp;</p><p>Second, I used the Fetch API together with Async/Await and try/catch syntax to make API calls. The benefit here is that the async function allows for fast page delivery and that the try/catch syntax makes error handling easier. Refer to the showCharacter.ts file in the scripts folder to see the details.&nbsp;</p><p>Third, several DOM manipulation methods were used for the following purposes and features:&nbsp;</p><ul><li>I used the drag and drop event listener to make the character selection page interactive according to different mouse events;</li><li>I added event listeners to detect click event on the client side and to attach callback functions to such clicks;&nbsp;</li><li>I used the querySelector() and the getElementById() methods to gain access to HTML files.&nbsp;</li><li>Together with methods such as appendChild(), if/else statements and loops, this allows us to create, update and remove HTML elements from the page. For instance, I used loops to create a game board with tiles and traps. The logic is quite simple and this method works fast. Additionally, rather than writing one line of code for each tile (and thus creating tons of duplicate code), the loop approach here keeps the code short and easy to read.</li></ul><p>Fourth, I used JavaScript to create the animations and delayed effects in the game. For instance, to display the trap message i used the setTimeout() method to add a pause in the execution of the next line of code, until the user has had enough time to read the content of the message box. As for the animations, I created the confetti 10 animation effect using canvas on the winner page. Basically, it creates a particle for a small confetti and then makes use of loops together with array functions to multiply this object with random colours and positions on the screen. Then, I used the window.requestAnimationFrame() to update the canvas drawing of the particles and thus create the movement effect.</p>',
    technologies: ['typescript', 'sass', 'canvas animation'],
    categories: ['school projects', 'game'],
    website: 'https://cartoon-game-of-thrones.netlify.com/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586331179/mysite/s3zc3tzfbll42tis5rlw.jpg',
    isOpenSource: true,
    gitLink: 'https://github.com/NancyBolstad/game',
  },
  {
    id: 'a3d713a95c8b4ad498d08de162b3c0aa',
    name: 'nasa-apollo',
    published: '2019-06',
    title: 'Using NASA API to create microsite',
    descriptions:
      "<p>Developed for the final semester project at my first year at Noroff. The goal of this semester exam project was to develop a history learning microsite for the groundbreaking first moon landing mission, in celebration of its 50th anniversary on July 20 2019. Starting from planning the project schedule with the Gantt Chart, defining the functional requirements, and researching the target user group, I designed and developed a responsive, dynamic, and interactive microsite using <a href='https://images.nasa.gov/' rel='noopener noreferrer' target='_blank'>NASA&rsquo;s Image and Video Library API</a>.</p><p>Following a mobile-first approach and complying with industry standards in terms of design principles, I am very happy with the end result that has come out of this project. With semantic HTML elements and meta tags the website is optimised for search engines. With aria-attributes, together with a good combination of color and fonts, the accessibility of the page is validated against WCAG requirements. With modern JavaScript syntax I have been able to create sophisticated onsite search functionality as well as make fast API calls that successfully retrieve, interact with and presents the results of these calls in a manner of my choosing. All this together with a good user interface. The end result is a dynamic and responsive website, built from the ground up without the convenience and shortcuts provided by frameworks.</p><h3>Features</h3><ul><li> A mobile-first approach was applied for responsive design.</li><li>Javascript fetch JSON with ES7 Async Await.</li><li>Easy-to-use search for better user experience.</li></ul>",
    technologies: ['javascript', 'html', 'css'],
    categories: ['school projects'],
    website: 'https://nancybolstad.github.io/nasa-apollo/',
    image:
      'https://res.cloudinary.com/dnkfgmzy1/image/upload/q_auto/v1586331136/mysite/wvslnkz2lotvcua1h4vu.jpg',
    isOpenSource: true,
    gitLink: 'https://github.com/NancyBolstad/nasa-apollo',
  },
];

export default projectsData;
