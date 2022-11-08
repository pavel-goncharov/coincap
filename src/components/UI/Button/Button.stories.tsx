import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button, {BtnTypes, BtnIconKeys} from '@/components/UI/Button/Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    type: {
      description: 'Attribute type of tag button',
      control: {
        type: 'select'
      },
      options: BtnTypes,
      table: {
        defaultValue: {summary: BtnTypes.BUTTON},
      }
    },
    title: {
      description: 'Text title in button',
      control: {
        type: 'text'
      },
      table: {
        defaultValue: {summary: 'undefined'},
      }
    },
    iconKey: {
      description: 'Icon in button',
      control: {
        type: 'select',
      },
      options: BtnIconKeys,
      table: {
        defaultValue: {summary: 'undefined'},
      }
    },
    handler: {
      description: 'Handler of button',
    },
    disabled: {
      description: 'Disabled of tag button',
      control: {
        type: 'boolean'
      },
      table: {
        defaultValue: {summary: false},
      }
    },
    isRemove: {
      description: 'Is remove mode of button',
      control: {
        type: 'boolean'
      },
      table: {
        defaultValue: {summary: false},
      }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Default = Template.bind({});
Default.args = {
  type: BtnTypes.BUTTON,
  title: 'BtnTitle',
  handler: () => alert('Btn Handler'),
  disabled: false,
  isRemove: false
}