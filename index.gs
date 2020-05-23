const autoSort = new AutoSort()

// 始点
const rowTarget = 1
const columnTarget = 1

const refRow = 1
const refColumn = 2

// 参照列数
const tables = 3

const sort = () => {
    autoSort.setTarget(rowTarget, columnTarget)
    autoSort.execute(refRow, refColumn, tables)
}