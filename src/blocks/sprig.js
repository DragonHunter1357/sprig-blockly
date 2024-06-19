/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const displayText = {
  type: 'sprig_display_text',
  message0: 'Display text at X %1 Y %2\n text %3\n color %4',
  args0: [
    {
      type: 'input_value',
      name: 'X',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'Y',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
    {
      type: 'input_value',
      name: 'COLOR',
      check: 'String',
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: '',
  helpUrl: '',
};

const color = {
  type: 'sprig_color',
  message0: 'Color %1',
  args0: [
    {
      type: 'field_color',
      name: 'COLOR',
      color: 'color`1`',
      colorCode: [
        '0',
        'L',
        '1',
        '2',
        '3',
        'C',
        '7',
        '5',
        '6',
        'F',
        '4',
        'D',
        '8',
        'H',
        '9',
        '.'
      ],
      colorDisplay: [
        'rgb(0, 0, 0)',
        'rgb(73, 80,87)',
        'rgb(145, 151, 156)',
        'rgb(248, 249, 250)',
        'rgb(235, 44, 71)',
        'rgb(139, 65, 46)',
        'rgb(25, 177, 248)',
        'rgb(19, 21, 224)',
        'rgb(254, 230, 16)',
        'rgb(149, 140, 50)',
        'rgb(45, 225, 62)',
        'rgb(29, 148, 16)',
        'rgb(245, 109, 187)',
        'rgb(170, 58, 197)',
        'rgb(245, 113, 23)',
        'rgba(0, 0, 0, 0)'
      ]
    },
  ],
  output: 'Color',
  colour: 160,
  tooltip: '',
  helpUrl: '',
};

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  displayText,
  color
]);
