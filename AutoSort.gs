class AutoSort {

    constructor() {

        this.sheet = SpreadsheetApp.getActiveSheet()

        this.rowTarget = null
        this.columnTarget = null
    }

    /**
     * 選択範囲を指定範囲にペーストする。
     * 
     * @param {number} rowEnd
     * @param {object} select
     * @return {void}
     */
    paste(rowEnd, select) {

        let columnTarget = 1

        let target = this.sheet.getRange(this.rowTarget, columnTarget)
        select.copyTo(target)

        this.rowTarget = this.rowTarget + rowEnd - 1
    }

    /**
     * 選択範囲をソートする。
     * 
     * @param {number} refColumn
     * @param {object} select
     * @return {void}
     */
    sort(refColumn, select) {

        select.sort(refColumn)
    }

    /**
     * コピーの範囲を選択する。
     * 
     * @param {number} refRow
     * @param {number} refColumn
     * @param {number} rowEnd
     * @return {object}
     */
    select(refRow, refColumn, rowEnd) {

        return this.sheet.getRange(refRow, refColumn, rowEnd, 1)
    }

    /**
     * コピーする範囲の最終行を取得する。
     * 
     * @param {number} refrow
     * @param {number} refColumn
     * @return {number}
     */
    rowEnd(refRow, refColumn) {

        let value = null

        while (value !== '') {
            value = this.sheet.getRange(refRow, refColumn).getValue()
            refRow ++
        }
        return (refRow - 1)
    }

    /**
     * 指定範囲（ペーストの対象範囲）を設定する。
     * 
     * @param {number} rowTarget
     * @param {number} columnTarget
     * @return {void}
     */
    setTarget(rowTarget, columnTarget) {

        this.rowTarget = rowTarget
        this.columnTarget = columnTarget
    }

    /**
     * エントリーポイント
     * 
     * @param {number} refRow
     * @param {number} refColumn
     * @param {number} tables
     * @returns {void}
     */
    execute(refRow, refColumn, tables) {

        let rowEnd = null
        let select = null

        for (let i = refColumn; i < refColumn + tables; i ++) {
            // 最終行を取得する。
            rowEnd = this.rowEnd(refRow, i)
            // 選択範囲をコピーする。
            select = this.select(refRow, i, rowEnd)
            // 選択範囲をソートする。
            this.sort(i, select)
            // 指定範囲にペーストする。
            this.paste(rowEnd, select)
        }
    }
}