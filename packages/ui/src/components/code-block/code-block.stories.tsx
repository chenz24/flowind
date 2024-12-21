import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CodeBlock } from './code-block';

const meta: Meta<typeof CodeBlock> = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CodeBlock>;

// Basic single code snippet
export const Basic: Story = {
  render: () => (
    <div className="w-[600px]">
      <CodeBlock
        snippets={[
          {
            label: 'JavaScript',
            language: 'javascript',
            code: `function hello() {
  console.log("Hello, World!");
}`,
          },
        ]}
      >
        <CodeBlock.Body />
      </CodeBlock>
    </div>
  ),
};

// Multiple languages
export const MultipleSnippets: Story = {
  render: () => (
    <div className="w-[600px]">
      <CodeBlock
        snippets={[
          {
            label: 'JavaScript',
            language: 'javascript',
            code: `const greeting = "Hello, World!";
console.log(greeting);`,
          },
          {
            label: 'Python',
            language: 'python',
            code: `greeting = "Hello, World!"
print(greeting)`,
          },
          {
            label: 'Java',
            language: 'java',
            code: `class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
          },
        ]}
      >
        <CodeBlock.Header />
        <CodeBlock.Body />
      </CodeBlock>
    </div>
  ),
};

// Hide line numbers
export const NoLineNumbers: Story = {
  render: () => (
    <div className="w-[600px]">
      <CodeBlock
        snippets={[
          {
            label: 'TypeScript',
            language: 'typescript',
            code: `interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30
};`,
            hideLineNumbers: true,
          },
        ]}
      >
        <CodeBlock.Body />
      </CodeBlock>
    </div>
  ),
};

// Hide copy button
export const NoCopyButton: Story = {
  render: () => (
    <div className="w-[600px]">
      <CodeBlock
        snippets={[
          {
            label: 'Shell',
            language: 'shell',
            code: `npm install @your-package/ui
yarn add @your-package/ui`,
            hideCopy: true,
          },
        ]}
      >
        <CodeBlock.Body />
      </CodeBlock>
    </div>
  ),
};

// With Meta information
export const WithMeta: Story = {
  render: () => (
    <div className="w-[600px]">
      <CodeBlock
        snippets={[
          {
            label: 'Example',
            language: 'typescript',
            code: `import { Something } from '@your-package/ui';

const Component = () => {
  return <Something />;
};`,
          },
        ]}
      >
        <CodeBlock.Header>
          <CodeBlock.Header.Meta>Installation</CodeBlock.Header.Meta>
        </CodeBlock.Header>
        <CodeBlock.Body />
      </CodeBlock>
    </div>
  ),
};

// Long code example
export const LongCode: Story = {
  render: () => (
    <div className="w-[800px]">
      <CodeBlock
        snippets={[
          {
            label: 'TypeScript',
            language: 'typescript',
            code: `import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}

export default UserList;`,
          },
        ]}
      >
        <CodeBlock.Body />
      </CodeBlock>
    </div>
  ),
};
