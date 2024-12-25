'use client';

import React, { useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import copy from 'copy-to-clipboard';

import { CheckCircleSolid, SquareTwoStack } from '@flowind/icons';
import { Tooltip } from '@/components/tooltip';
import { clx } from '@/utils/clx';

type CopyProps = {
  content: string;
  asChild?: boolean;
};

const Copy = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & CopyProps
>(({ children, content, className, asChild = false, ...props }, ref) => {
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('Copy');

  const copyToClipboard = () => {
    setDone(true);
    copy(content);

    setTimeout(() => {
      setDone(false);
    }, 2000);
  };

  React.useEffect(() => {
    if (done) {
      setText('Copied');
      return;
    }

    setTimeout(() => {
      setText('Copy');
    }, 500);
  }, [done]);

  const Component = asChild ? Slot : 'button';

  return (
    <Tooltip content={text} open={done || open}>
      <Component
        ref={ref}
        aria-label="Copy to clipboard"
        type="button"
        onClick={copyToClipboard}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={clx(className, { 'pointer-events-none cursor-default': done })}
        {...props}
      >
        {children || (done ? <CheckCircleSolid /> : <SquareTwoStack />)}
      </Component>
    </Tooltip>
  );
});
Copy.displayName = 'Copy';

export { Copy };
