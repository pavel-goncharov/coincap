import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button, {BtnTypes, BtnModes} from '@/components/UI/Button/Button';

export default {
  title: 'Example/Button2',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Default = Template.bind({});
Default.args = {
  type: BtnTypes.button,
  mode: BtnModes.TITLE,
  title: 'BtnTitle',
  handler: alert,
};