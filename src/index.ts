import createSheet from './createSheet'
import data from './data'

function main (): void {
  const sheet = createSheet()
}

declare let global: any
global.handler = main
