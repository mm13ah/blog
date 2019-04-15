import React from 'react';
import Helmet from 'react-helmet';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Layout from '../../components/layout';
import AcademicProject from '../../components/projects/academicProject';
import visualCryptographyImg from '../../images/projects/visual-cryptography.png';

const name = 'Visual Cryptography';
const info = [`For my undergraduate dissertation, I studied and implemented a cryptographic technique known 
as visual cryptography (Wikipedia). This involved a comprehensive study into the topic of visual cryptography,
a lengthy implementation and testing phase, followed by a write up of a detailed report.`,
`This was my first major programming project and greatly developed my skills of analysis, software development
and report writing (to new a few).`,
`Equipped with the skills I have now, if I had to do a project like this again I would love to take a more web-app
based approach, maybe using a JavaScript framework like React for the frontend (it would definitely look better). 
It would also be interesting to try and use NodeJS on the backend and see how this played out with C++.`];
const techList = [
  'C++: Used to program the visual cryptography schemes and related functions',
  'Qt: Used to design and develop the frontend',
  'GitHub: Used as version control during the project',
  'LaTeX: The final report and supporting documents were written using LaTeX',
];
const iconList = [faGithub];
const github = 'https://github.com/mm13ah/matrix-solvers';

const props = {
  name,
  info,
  techList,
  iconList,
  github,
  img: visualCryptographyImg,
  cplusplus: true,
};


const VisualCryptographyPage = () => (
  <Layout>
    <Helmet>
      <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
    </Helmet>
    <AcademicProject {...props} />
  </Layout>
);

export default VisualCryptographyPage;
