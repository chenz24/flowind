import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { ModalsProvider, openModal } from '../modal-manager';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const data = [
  {
    label: 'Shirts',
    items: [
      {
        value: 'dress-shirt-striped',
        label: 'Striped Dress Shirt',
      },
      {
        value: 'relaxed-button-down',
        label: 'Relaxed Fit Button Down',
      },
      {
        value: 'slim-button-down',
        label: 'Slim Fit Button Down',
      },
      {
        value: 'dress-shirt-solid',
        label: 'Solid Dress Shirt',
      },
      {
        value: 'dress-shirt-check',
        label: 'Check Dress Shirt',
      },
    ],
  },
  {
    label: 'T-Shirts',
    items: [
      {
        value: 'v-neck',
        label: 'V-Neck',
      },
      {
        value: 'crew-neck',
        label: 'Crew Neck',
      },
      {
        value: 'henley',
        label: 'Henley',
      },
      {
        value: 'polo',
        label: 'Polo',
      },
      {
        value: 'mock-neck',
        label: 'Mock Neck',
      },
      {
        value: 'turtleneck',
        label: 'Turtleneck',
      },
      {
        value: 'scoop-neck',
        label: 'Scoop Neck',
      },
    ],
  },
];

const data2 = ['React', 'Angular', 'Vue', 'Svelte'];

export const Default: Story = {
  render: () => (
    <div className="w-[250px]">
      <div className="h-[850px]"></div>
      <Select data={data2} clearable searchable defaultValue="React" placeholder="please select" />
      <div className="h-[350px]"></div>
    </div>
  ),
};

export const InModal = () => {
  const open = () => {
    console.log('open modal');
    openModal({
      modalId: 'content-modal',
      title: 'Select',
      children: (
        <Select
          withinPortal
          data={data2}
          clearable
          defaultValue="Vue"
          placeholder="please select"
          searchable
          label="Select a framework"
        />
      ),
      onClose: () => console.log('content modal 1 closed'),
    });
  };

  return (
    <ModalsProvider>
      <Button onClick={open}>打开</Button>
    </ModalsProvider>
  );
};

// export const Disabled: Story = {
//   render: () => {
//     return (
//       <div className="w-[250px]">
//         <Select>
//           <Select.Trigger disabled={true}>
//             <Select.Value placeholder="Select" />
//           </Select.Trigger>
//           <Select.Content>
//             {data.map((group) => (
//               <Select.Group key={group.label}>
//                 <Select.Label>{group.label}</Select.Label>
//                 {group.items.map((item) => (
//                   <Select.Item key={item.value} value={item.value}>
//                     {item.label}
//                   </Select.Item>
//                 ))}
//               </Select.Group>
//             ))}
//           </Select.Content>
//         </Select>
//       </div>
//     )
//   },
// }
//
// export const Small: Story = {
//   render: () => {
//     return (
//       <div className="w-[250px]">
//         <Select size="small">
//           <Select.Trigger>
//             <Select.Value placeholder="Select" />
//           </Select.Trigger>
//           <Select.Content>
//             {data.map((group) => (
//               <Select.Group key={group.label}>
//                 <Select.Label>{group.label}</Select.Label>
//                 {group.items.map((item) => (
//                   <Select.Item key={item.value} value={item.value}>
//                     {item.label}
//                   </Select.Item>
//                 ))}
//               </Select.Group>
//             ))}
//           </Select.Content>
//         </Select>
//       </div>
//     )
//   },
// }

// const InModalDemo = () => {
//   const [open, setOpen] = React.useState(false)
//   const prompt = usePrompt()

//   const onClose = async () => {
//     const res = await prompt({
//       title: "Are you sure?",
//       description: "You have unsaved changes. Are you sure you want to close?",
//       confirmText: "Yes",
//       cancelText: "Cancel",
//     })

//     if (!res) {
//       return
//     }

//     setOpen(false)
//   }

//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <Drawer.Trigger asChild>
//         <Button>Edit Variant</Button>
//       </Drawer.Trigger>
//       <Drawer.Content>
//         <Drawer.Header>
//           <Drawer.Title>Edit Variant</Drawer.Title>
//         </Drawer.Header>
//         <Drawer.Body>
//           <Select size="small">
//             <Select.Trigger>
//               <Select.Value placeholder="Select" />
//             </Select.Trigger>
//             <Select.Content>
//               {data.map((group) => (
//                 <Select.Group key={group.label}>
//                   <Select.Label>{group.label}</Select.Label>
//                   {group.items.map((item) => (
//                     <Select.Item key={item.value} value={item.value}>
//                       {item.label}
//                     </Select.Item>
//                   ))}
//                 </Select.Group>
//               ))}
//             </Select.Content>
//           </Select>
//         </Drawer.Body>
//         <Drawer.Footer>
//           <Button variant="secondary" onClick={onClose}>
//             Cancel
//           </Button>
//           <Button>Save</Button>
//         </Drawer.Footer>
//       </Drawer.Content>
//     </Drawer>
//   )
// }

// export const InModal: Story = {
//   render: () => {
//     return <InModalDemo />
//   },
// }
