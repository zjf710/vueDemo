import Soul from './Soul';
import Body from '../main/Body/Body';
import Menu from '../main/Home/Menu';

const routerConfigs = [{
  path: '/',
  component: Menu
}];

Soul.menu.forEach((item) => {
  routerConfigs.push({
    path: `/${item.name}`,
    component: Body,
    props: () => item
  });
});

export default routerConfigs;
