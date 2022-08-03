import * as React from 'react';
import { Drawer } from 'react-native-paper';

const Sidemenu = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
      <Drawer.Item
    style={{ backgroundColor: '#64ffda' }}
     icon="star"
     label="First Item"
      />

    </Drawer.Section>
  );
};

export default Sidemenu;