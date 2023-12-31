interface Props {
  sheet: GoogleAppsScript.Spreadsheet.Sheet
  blob: string
  column: number
  row: number
  size: number
}

export default function setImage (props: Props): GoogleAppsScript.Spreadsheet.OverGridImage | null {
  const {
    sheet,
    blob,
    column,
    row,
    size
  } = props

  if (!blob.startsWith('data:image/png;')) return null

  const image = sheet.insertImage(blob, column, row)
  image.setWidth(size)
  image.setHeight(size)
  return image
}
