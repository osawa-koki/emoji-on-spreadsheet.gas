import createSheet from './createSheet'
import data from './data.json'
import setImage from './setImage'

function main (): void {
  const sheet = createSheet()
  const rows: string[][] = data as unknown as string[][]
  {
    const header = rows[0]
    const rowNumber = 1
    sheet.getRange(`A${rowNumber}`).setValue(header[0]) // no
    sheet.getRange(`B${rowNumber}`).setValue(header[1]) // code
    sheet.getRange(`C${rowNumber}`).setValue(header[2]) // browser
    sheet.getRange(`D${rowNumber}`).setValue(header[3]) // sample
    sheet.getRange(`E${rowNumber}`).setValue(header[4]) // gmail
    sheet.getRange(`F${rowNumber}`).setValue(header[5]) // sb
    sheet.getRange(`G${rowNumber}`).setValue(header[6]) // dcm
    sheet.getRange(`H${rowNumber}`).setValue(header[7]) // kddi
    sheet.getRange(`I${rowNumber}`).setValue(header[8]) // cldrShortName
  }
  rows.forEach((row: string[], index) => {
    if (index === 0) return

    const no = row[0]
    const code = row[1]
    const browser = row[2]
    const sample = row[3]
    const gmail = row[4]
    const sb = row[5]
    const dcm = row[6]
    const kddi = row[7]
    const cldrShortName = row[8]

    const rowNumber = index + 1

    sheet.getRange(`A${rowNumber}`).setValue(no) // no
    sheet.getRange(`B${rowNumber}`).setValue(code) // code
    sheet.getRange(`C${rowNumber}`).setValue(browser) // browser

    const size = 25
    setImage({ sheet, blob: sample, column: 4, row: rowNumber, size }) // sample
    setImage({ sheet, blob: gmail, column: 5, row: rowNumber, size }) // gmail
    setImage({ sheet, blob: sb, column: 6, row: rowNumber, size }) // sb
    setImage({ sheet, blob: dcm, column: 7, row: rowNumber, size }) // dcm
    setImage({ sheet, blob: kddi, column: 8, row: rowNumber, size }) // kddi

    sheet.getRange(`I${rowNumber}`).setValue(cldrShortName) // cldrShortName

    sheet.setRowHeight(rowNumber, size)

    SpreadsheetApp.flush()
  })
}

declare let global: any
global.handler = main
