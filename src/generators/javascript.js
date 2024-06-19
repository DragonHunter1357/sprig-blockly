/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['sprig_display_text'] = function (block, generator) {
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  const text = block.getFieldValue('TEXT');
  const color = block.getFieldValue('COLOR');
  return `displayText(${x}, ${y}, ${text}, ${color});\n`;
};

forBlock['sprig_color'] = function (block, generator) {
  const color = block.getFieldValue('COLOR');
  return [color, generator.ORDER_ATOMIC];
}