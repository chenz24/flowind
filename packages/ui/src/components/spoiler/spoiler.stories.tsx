import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '../accordion';
import { Spoiler } from './spoiler';

const meta: Meta<typeof Spoiler> = {
  title: 'Components/Spoiler',
  component: Spoiler,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Spoiler>;

export function ContentChanges() {
  const [count, setCount] = useState(1);
  const randomCount = () => setCount(Math.round(Math.random() * 5 + 1));
  const content = Array(count)
    .fill(0)
    .map((_, index) => (
      <p key={index}>
        您坐祖而頭抱果共肖上直院，珠讀木右欠。到聲怎昌夕，良走右有爸支勿汗門扒元愛抱兔起見做固止他、真浪隻，子封根。蛋說它吹飯戶抱未，國木拍還交長八衣兄經且眼生相您拍許回沒借，苗雄巴，邊問可；間水年游念各院。
      </p>
    ));

  return (
    <div style={{ padding: 40 }}>
      <button type="button" onClick={randomCount}>
        Random count
      </button>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
        {content}
      </Spoiler>
    </div>
  );
}

export function InsideAccordion() {
  return (
    <div style={{ padding: 40 }}>
      <Accordion>
        <Accordion.Item value="first">
          <Accordion.Control>Expand me</Accordion.Control>
          <Accordion.Panel>
            <Spoiler showLabel="Show" hideLabel="Hide" maxHeight={50}>
              院旦車語壯哪雄教村音支送吧跑央抄定地，村語它。是喜下勿貓了采直，地拍福：泉送冒往姊各古信父食兩青？紅菜信隻念草帽四清好了「耳節聽」種果要寸吹節玩至那這封爬兌休訴，至得開學陽追犬買貝青往走朋。
              示個背刀但造牠次找知荷春找抱游亭雪園士，上再誰刃車風古文黃首由，和司故苦寺根洋封還事牙坐丁旁尾九向央息空，神帽力童開口山但唱造那意海種甲穿見牙詞，哭斤筆新三。食喝枝有虎京造相扒。
              朱從北助雪要故。登頁室地躲課信。
            </Spoiler>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
