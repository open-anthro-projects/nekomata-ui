import { publish } from 'gh-pages';

publish(
 'build', 
 {
  branch: 'gh-pages',
  repo: 'https://github.com/open-anthro-projects/nekomata-ui.git', 
  user: {
   name: 'Tom Konink', 
   email: 'konink1992@gmail.com' 
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);