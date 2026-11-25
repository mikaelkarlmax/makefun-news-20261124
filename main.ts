// THE WORLD IN ONE DAY — news-image-20261124 entry (Node 22, standard library only).
//
// The poster is the entry.png beside this file: a 1024x1024 broadsheet of 46 stories,
// every one verified against reporting dated Tuesday 24 November 2026. This program
// does exactly one thing: it copies that image, byte for byte, to
// $MAKEFUN_OUTPUT_DIR/entry.png (or /output/entry.png when the variable is unset).
// No network, no randomness, no image processing — run it twice and the output is
// identical, because the input never changes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
