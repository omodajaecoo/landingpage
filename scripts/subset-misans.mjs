import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const fontsDir = join(root, 'assets', 'fonts')
const unicodeRange = [
  'U+0020-007E',
  'U+00A0-00FF',
  'U+0100-017F',
  'U+0180-024F',
  'U+2000-206F',
  'U+20A0-20CF',
  'U+2122',
  'U+2190-21FF',
  'U+2212',
  'U+25A0-25FF',
].join(',')

const weights = ['Light', 'Normal', 'Regular', 'Medium', 'Semibold']
const pythonCandidates = ['python', 'python3', 'py']

function runFontTools(args) {
  for (const command of pythonCandidates) {
    const result = spawnSync(command, ['-m', 'fontTools.subset', ...args], {
      cwd: root,
      stdio: 'inherit',
      shell: false,
    })

    if (result.error?.code === 'ENOENT') {
      continue
    }

    return result
  }

  return {
    status: 1,
    error: new Error('Python was not found. Install Python and fonttools to generate font subsets.'),
  }
}

for (const weight of weights) {
  const input = join(fontsDir, `MiSans-${weight}.woff2`)
  const output = join(fontsDir, `MiSans-${weight}-latin.woff2`)

  if (!existsSync(input)) {
    throw new Error(`Missing source font: ${input}`)
  }

  const result = runFontTools([
    input,
    `--output-file=${output}`,
    '--flavor=woff2',
    `--unicodes=${unicodeRange}`,
    '--layout-features=*',
    '--no-hinting',
    '--ignore-missing-unicodes',
  ])

  if (result.status !== 0) {
    throw result.error ?? new Error(`Failed to subset MiSans-${weight}.woff2`)
  }

  console.log(`Generated ${output}`)
}
