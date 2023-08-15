import { Select } from "@medusajs/ui"

export default function SelectDemo() {
  const currencies = [
    {
      value: "eur",
      label: "EUR",
    },
    {
      value: "usd",
      label: "USD",
    },
    {
      value: "dkk",
      label: "DKK",
    },
  ]

  const onChange = (value: any) =>
    console.log(`Currently selected: ${value.value}`)

  return (
    <div className="w-[256px]">
      <Select onChange={onChange}>
        <Select.Trigger>
          <Select.Value placeholder="Select a currency ..." />
          <Select.TriggerIcon />
        </Select.Trigger>
        <Select.Content>
          {currencies.map((item) => (
            <Select.Item key={item.value} item={item}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    </div>
  )
}