class AutoSort {

    constructor() {

        this.sheet = SpreadsheetApp.getActiveSheet()

        this.rowPosition = 1
    }

    /**
     * 指定のセルに選択した範囲をペーストする。
     * 
     * @param {number} endRow
     * @param {object} selected 選択範囲
     * @return {void}
     */
    paste(endRow, selected) {

        selected.copyTo(this.sheet.getRange(this.rowPosition, 1))
        this.rowPosition = this.rowPosition + endRow - 1
    }

    /**
     * 参照範囲を取得する。
     * 
     * @param {number} refRow
     * @param {number} refColumn
     * @return {number}
     */
    endPoint(refRow, refColumn) {

        let value = null

        while (value !== '') {
            value = this.sheet.getRange(refRow, refColumn).getValue()
            refRow ++
        }

        return refRow = refRow - 1
    }

    /**
     * ソートを実行する。
     * 
     * @param {number} column
     * @return {void}
     */
    sort(column) {

        console.log(column)
        this.sheet.sort(column)
    }

    /**
     * 参照範囲を選択する。
     * 
     * @param {number} refRow
     * @param {number} refColumn
     * @param {number} tables
     * @return {void}
     */
    select(refRow, refColumn, tables) {

        let endRow = null
        let selected = null

        for (let i = refColumn; i < tables + refColumn; i ++) {
            this.sort(i)
            endRow = this.endPoint(refRow, i)
            selected = this.sheet.getRange(refRow, i, endRow, 1)

            this.paste(endRow, selected)
        }
    }

    /**
     * エントリーポイント
     * 
     * @param {number} refRow
     * @param {number} refColumn
     * @param {number} tables
     * @return {void}
     */
    execute(refRow, refColumn, tables) {

        this.select(refRow, refColumn, tables)
    }
}