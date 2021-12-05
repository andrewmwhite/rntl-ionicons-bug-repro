import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { Ionicons } from '@expo/vector-icons';
 
const icon = <Ionicons accessibilityLabel="myIcon" name="md-checkmark-circle" />;


describe('<Ionicons />', () => {
  it('renders icon with react-native-testng-library', () => {
    const tree = render(icon);
    tree.debug();
    console.log(tree.toJSON());
    expect(tree.getByLabelText(/myIcon/i)).toBeDefined();
  });
  it('renders icon with react-test-renderer', () => {
    const tree = renderer.create(icon);
    console.log(tree.toJSON());
    expect(tree.root.findByProps({accessibilityLabel: "myIcon"})).toBeDefined();
  });
});
