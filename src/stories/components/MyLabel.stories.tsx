import { MyLabel } from "../../components/MyLabel"
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/Etiquetas/MyLabel',
    component: MyLabel,
} as ComponentMeta<typeof MyLabel>  

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args }/>

export const Basic = Template.bind({})
Basic.args = {label: 'Etiqueta', size: 'normal'}

export const AllCaps = Template.bind({})
AllCaps.args = {label: 'Allcaps', size: 'normal', allCaps: true}

export const Secondary = Template.bind({})