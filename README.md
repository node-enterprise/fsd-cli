# FSD CLI

> CLI for generating slices with segments by [Feature-Sliced Design](https://feature-sliced.design)

[![Package version](https://img.shields.io/npm/v/fsd-cli
)](https://www.npmjs.com/package/fsd-cli)
[![Node version](https://img.shields.io/node/v/fsd-cli.svg)](https://www.npmjs.com/package/fsd-cli)
[![GitHub issues](https://img.shields.io/github/issues/node-enterprise/fsd-cli)](https://github.com/node-enterprise/fsd-cli/issues)
[![License](https://img.shields.io/npm/l/fsd-cli)](https://www.npmjs.com/package/fsd-cli)

## Table of Contents

* [Install](#install)
* [Usage](#usage)
  * [Command structure](#command-structure)
  * [Commands](#commands)
  * [Examples](#examples)
* [Description](#description)

## Install

[npm](https://www.npmjs.com/package/fsd-cli):

```sh
npm install -g fsd-cli
```

[yarn](https://yarnpkg.com/package/fsd-cli):

```sh
yarn add fsd-cli
```

## Usage

### Command structure

```sh
fsd [COMMAND] [FLAG] [VALUE] 
```

### Commands

Supports passing multiple options at the same time.

<table>
  <thead>
    <th>Command</th>
    <th>Alias</th>
    <th>Options</th>
  </thead>

  <tbody>
    <tr>
      <td>
        <code>generate</code>
      </td>
      <td>
        <code>g</code>
      </td>
      <td>
        <p>-w --widget</p>
        <p>-p --page</p>
        <p>-f --feature</p>
        <p>-e --entity</p>
        <p>-m --module</p>
        <p>-c --component</p>
      </td>
    </tr>
  </tbody>
</table>

### Examples

Generate widget
```sh
fsd g -w widget-name
```
Generate page
```sh
fsd g -p page-name
```
Generate feature
```sh
fsd g -f feature-name
```
Generate entity
```sh
fsd g -e entity-name
```
Generate module
```sh
fsd g -m module-name
```
Generate component
```sh
fsd g -c component-name
```

## Description

The names of the slices are case-insensitive, all cases will be transformed into the case corresponding to the segment.

On the command example
```sh
fsd g -w placeholder
```

| Segment | Filename |
| --- | --- |
| Public index | index.ts |
| Composable | usePlaceholder.ts |
| Component | Placeholder.vue |
| Types | placeholder.types.ts |

The postfix "page" will be automatically added to the pages if it is not present. If the segment exists in the slice, then the file will not be overwritten.

> Supported Node version: >= v14
