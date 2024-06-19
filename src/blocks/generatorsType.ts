/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * This file is a copy of the original file from Blockly, with the following modifications:
 * 1. Removed all imports except for JavascriptGenerator.
 * 2. Removed all exports except for JavascripGenerators.
 */

import type {JavascriptGenerator} from 'blockly/javascript';

/**
 * An object containing zero or more generators. This is passed
 * to block installation functions so that they may install
 * per-block generators on any languages they support.
 */
export interface Generators {
  javascript?: JavascriptGenerator;
}
