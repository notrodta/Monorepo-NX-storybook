import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Mycomps } from './mycomps';

const Story: ComponentMeta<typeof Mycomps> = {
  component: Mycomps,
  title: 'Mycomps',
};
export default Story;

const Template: ComponentStory<typeof Mycomps> = (args) => (
  <Mycomps {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
