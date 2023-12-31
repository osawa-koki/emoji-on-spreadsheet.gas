import getSheetName from './getSheetName'

export default function createSheet (): GoogleAppsScript.Spreadsheet.Sheet {
  const activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = activeSpreadSheet.insertSheet()
  sheet.activate()
  sheet.setName(getSheetName())
  sheet.activate()
  activeSpreadSheet.getSheets().forEach((sheet) => {
    if (sheet.getName() !== activeSpreadSheet.getActiveSheet().getName()) activeSpreadSheet.deleteSheet(sheet)
  })
  SpreadsheetApp.flush()
  return sheet
}
