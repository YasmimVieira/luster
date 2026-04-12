# luster-accordion



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                            | Default     |
| -------------- | --------------- | ----------- | ----------------------------------------------- | ----------- |
| `badge`        | `badge`         |             | `string`                                        | `''`        |
| `badgeVariant` | `badge-variant` |             | `"beta" \| "default" \| "primary" \| "success"` | `'default'` |
| `expanded`     | `expanded`      |             | `boolean`                                       | `false`     |
| `heading`      | `heading`       |             | `string`                                        | `''`        |
| `subtitle`     | `subtitle`      |             | `string`                                        | `''`        |


## Events

| Event      | Description | Type                   |
| ---------- | ----------- | ---------------------- |
| `dcToggle` |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [luster-badge](../luster-badge)

### Graph
```mermaid
graph TD;
  luster-accordion --> luster-badge
  style luster-accordion fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
