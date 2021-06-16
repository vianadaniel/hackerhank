let clients = [
  {
    id: "pEy79KadBwds9JbMno89",
    taxId: "06604890660",
    kind: "natural",
    name: "DANIEL VIANA DE ALMEIDA",
  },
  {
    id: "0W99m6PywR2UOYzledWb",
    taxId: "02622271000",
    kind: "natural",
    name: "DIEGO AUGUSTO WESZ",
  },
  {
    id: "j1nwBme4wpUAb9N4XRZE",
    taxId: "02929785000107",
    kind: "legal",
    name: "CIA DA TERRA AGRONEGOCIOS LTDA",
  },
  {
    id: "8arwrqOZDeI2JQ2X7Y6K",
    taxId: "21820014001608",
    kind: "legal",
    name: "VACCINAR INDUSTRIA E COMERCIO LTDA",
  },
  {
    id: "kj6lA1J7XAGUZ5qqBYWM",
    taxId: "01938550978",
    kind: "natural",
    name: "ELMO TEODORO RIBEIRO",
  },
  {
    id: "WKneZ1q95YIBr9elVDvk",
    taxId: "42276907000128",
    kind: "legal",
    name: "VLI MULTIMODAL S.A.",
  },
  {
    id: "WGJPlpKnvocm46y6gvrE",
    taxId: "02558115000121",
    kind: "legal",
    name: "TIM PARTICIPACOES S.A",
  },
  {
    id: "jYqGbBLQAKiN32me0oaP",
    taxId: "32441636004829",
    kind: "legal",
    name: "GLENCORE IMPORTADORA E EXPORTADORA S.A.",
  },
  {
    id: "WrnzDa1reDs1ab3qbqqW",
    taxId: "05492968000104",
    kind: "legal",
    name: "CHS AGRONEGOCIO - INDUSTRIA E COMERCIO LTDA",
  },
  {
    id: "BEBLmnY2e4Dhlw4QbA8Z",
    taxId: "00545216028",
    kind: "natural",
    name: "MILTON DE LIMA",
  },
  {
    id: "EnzQbNJBbZUeDDG9ODJE",
    taxId: "06333478000110",
    kind: "legal",
    name: "EAGLE FLORES, FRUTAS & HORTALICAS EIRELI",
  },
  {
    id: "BEBLmAJ1A13Fe2qgm2y8",
    taxId: " 39201760817",
    kind: "legal",
    name: "",
  },
  {
    id: "nj3x0X3xNMDt9owaOorE",
    taxId: "39201760817",
    kind: "natural",
    name: "ANDREIA OLIVEIRA KITAZAWA",
  },
  {
    id: "YjYqGAroZGNc3DXyOrzj",
    taxId: "98355961153",
    kind: "natural",
    name: "EDERSON SCHENATTO",
  },
  {
    id: "BWrnzlyGYp5coKolPnWX",
    taxId: "00273709682",
    kind: "natural",
    name: "RENATO JUSTINO DA SILVA",
  },
]

const alphabet = [
  "#",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

function clientsListLength(list) {
  let data = {}
  for (const key of alphabet) {
    if (!!list[key]) {
      data = { ...data, [key]: list[key].length }
    } else {
      data = { ...data, [key]: 0 }
    }
  }
  return data
}

let data = {}
for (const key of alphabet) {
  const items = clients?.filter((item) => {
    if (
      (!item?.name && key === "#") ||
      (!!item?.name && key === item?.name[0]?.toUpperCase() && !item?.groupId)
    ) {
      return true
    }
    return false
  })
  if (items.length > 0) {
    data = { ...data, [key]: items }
  }
}

let list = clientsListLength(data)
console.log(list)
