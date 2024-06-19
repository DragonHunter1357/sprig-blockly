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

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  displayText,
]);
