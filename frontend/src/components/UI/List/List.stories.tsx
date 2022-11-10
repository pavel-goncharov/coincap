import {ComponentMeta, ComponentStory} from '@storybook/react';
import List, {ListModes} from '@/components/UI/List/List';
import {IListItem} from '@/types/ui';

const initItems: IListItem[] = [
  {id: 0, title: 'title0', value: 'value0', complete: 'valueComplete0'},
  {id: 1, title: 'title1', value: 'value1', complete: 'valueComplete1'}
];

export default {
  title: 'UI/List',
  component: List,
  argTypes: {
    mode: {
      description: 'Mode of list',
      options: ListModes,
      control: {
        type: 'select',
      }
    },
    items: {
      description: 'data items of list',
    },
    checked: {
      description: 'Show complete item',
      control: {
        type: 'boolean'
      },
    },
  }
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args}/>

export const Default = Template.bind({});
Default.args = {
  mode: ListModes.BAG_HEAD,
  items: initItems,
  checked: false
}