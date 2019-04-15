import React from 'react';
import { faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import Layout from '../../components/layout';
import AcademicProject from '../../components/projects/academicProject';
import matrixSolversImg from '../../images/projects/matrix-solvers.png';

const name = 'Matrix Solvers for Stochastic Galerkin Schemes';
const info = [`For my master's thesis, I studied and implemented various methods for solving
Sylvester equations and stochastic partial differential equations (PDEs with random input).`,
'This was an extremely rewarding project that was also very challenging.'];
const techList = [
  'Python: ',
  'Jupyter: ',
  'GitHub: Used as version control during the project',
  'LaTeX: The final report and supporting documents were written using LaTeX',
];
const iconList = [faPython, faGithub];
const github = 'https://github.com/mm13ah/matrix-solvers';

const props = {
  name,
  info,
  techList,
  iconList,
  github,
  img: matrixSolversImg,
};

const MatrixSolversPage = () => (
  <Layout>
    <AcademicProject {...props} />
  </Layout>
);

export default MatrixSolversPage;
