const e531 = [
    {
        "number": "11",
        "key": "10",
        "vl_aj_item": 10,
        "nfe_id": "nfeid",
        "issuer_name": "Jhon",
        "id": "73abb265-e1ab-41b4-9a96-84b4d0a048f0"
    },
    {
        "number": "11",
        "key": "10",
        "vl_aj_item": 10,
        "nfe_id": "nfeid",
        "issuer_name": "Jhon",
        "id": "57f37a18-fdec-42cd-a386-1b518c63920b"
    },
    {
        "number": "11",
        "key": "10",
        "vl_aj_item": 10,
        "nfe_id": "nfeid",
        "issuer_name": "Jhon",
        "id": "57f37a18-fdec-42cd-a386-1b518c63920b"
    },
    {
        "number": "11",
        "key": "10",
        "vl_aj_item": 10,
        "nfe_id": "nfeid",
        "issuer_name": "Jhon",
        "id": "57f37a18-fdec-42cd-a386-1b518c63920b"
    }
]

function arrayPagination(items, page, size) {
    let data = []
    let totalPages = Math.ceil(items.length / size)
    let count = (page * size) - size
    let delimiter = count + size

    if(page <= totalPages) {
        for(let i= count; i < delimiter; i++) {
            data.push(items[i])
            count ++
        }
    }
    return {data, totalPages, count, total: items.length, limit: size, page}
}

console.log(arrayPagination(e531, 1, 2))