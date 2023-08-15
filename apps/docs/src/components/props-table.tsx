"use client"

import { InformationCircleSolid } from "@medusajs/icons"
import { Table, Tooltip } from "@medusajs/ui"

import { EnumType, PropData, PropDataMap } from "@/types/props"

type PropTableProps = {
  props: PropDataMap
}

const PropTable = ({ props }: PropTableProps) => {
  return (
    <Table>
      <Table.Header className="border-t-0">
        <Table.Row>
          <Table.HeaderCell>Prop</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell className="text-right">Default</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body className="border-b-0 [&_tr:last-child]:border-b-0">
        {props.map((propData, index) => (
          <Row key={index} {...propData} />
        ))}
      </Table.Body>
    </Table>
  )
}

const Row = ({ prop, type, defaultValue }: PropData) => {
  const isEnum = (t: unknown): t is EnumType => {
    return (t as EnumType).type !== undefined && (t as EnumType).type === "enum"
  }

  const defaultValueRenderer = (
    v: string | number | boolean | null | undefined
  ) => {
    if (v === undefined) {
      return "-"
    }

    if (typeof v === "boolean") {
      return v ? "true" : "false"
    }

    if (v === null) {
      return "null"
    }

    if (typeof v === "string") {
      return `"${v}"`
    }

    return v
  }

  return (
    <Table.Row className="code-body">
      <Table.Cell>{prop}</Table.Cell>
      <Table.Cell>
        {isEnum(type) ? (
          <Tooltip content={type.values.map((v) => `"${v}"`).join(" | ")}>
            <div className="flex items-center gap-x-1">
              <span>enum</span>
              <InformationCircleSolid className="text-ui-fg-subtle" />
            </div>
          </Tooltip>
        ) : (
          type.toString()
        )}
      </Table.Cell>
      <Table.Cell className="text-right">
        {defaultValueRenderer(defaultValue)}
      </Table.Cell>
    </Table.Row>
  )
}

export { PropTable }