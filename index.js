const autoSort = new AutoSort()

// 始点
const refRow = 1
const refColumn = 2

// 参照列数
const tables = 3

const sort = () => {
    autoSort.execute(refRow, refColumn, tables)
}