/** @format */

const fs = require('fs')

const findStatus: { [key: string]: string } = {
  0: 'Sucesso',
  1: 'Alerta',
  2: 'Erro',
}

function valueValidator(value: any, type: string) {
  if (type === 'number') {
    return typeof value === 'number' && !isNaN(value)
  }
  if (type === 'string') {
    return typeof value === 'string' && value.trim() !== ''
  }
  if (type === 'array') {
    return Array.isArray(value) && value.length > 0
  }

  return true
}

function mainValidator(dfe, keysValidation, array?, arrValidation?) {
  const arrStatus = [0]
  const arrDescription = []
  const arrFather = []
  for (const each of keysValidation) {
    if (each.path) {
      const arrPath = each.path.split('.')
      let path = dfe

      for (let i = 0; i < arrPath.length; i += 1) {
        path = path[arrPath[i]] === undefined ? {} : path[arrPath[i]]
      }

      const hasFather = Array.isArray(each.father)
        ? arrFather.some((item) => each.father.includes(item))
        : false

      let condition =
        !hasFather &&
        (!path?.hasOwnProperty(each.key) ||
          !valueValidator(path[each.key], each.type))

      if (each.dependentField) {
        const mainField = valueValidator(path[each.key], each.type)
        const dependentField = valueValidator(
          path[each.dependentField],
          each.type
        )
        const dependantFieldsValidation = mainField ? false : !dependentField
        condition = !hasFather && dependantFieldsValidation
      }

      if (condition) {
        each.type === 'object' && each.father
          ? arrFather.push(...each.father)
          : null

        arrDescription.push(each.description)
        arrStatus.push(each.statusNumber)
      }
    } else if (
      !each.path &&
      (!dfe?.hasOwnProperty(each.key) ||
        !valueValidator(dfe[each.key], each.type))
    ) {
      arrDescription.push(each.description)
      arrStatus.push(each.statusNumber)
    }
  }

  if (array && Array.isArray(array)) {
    for (const itemKey of arrValidation) {
      for (const item of array) {
        if (itemKey.path) {
          const arrPath = itemKey.path.split('.')

          let path = item

          for (let i = 0; i < arrPath.length; i += 1) {
            path = path[arrPath[i]] === undefined ? {} : path[arrPath[i]]
          }

          if (
            !path?.hasOwnProperty(itemKey.key) ||
            !valueValidator(path[itemKey.key], itemKey.type)
          ) {
            arrDescription.push(itemKey.description)
            arrStatus.push(itemKey.statusNumber)
          }
        } else if (
          !item?.hasOwnProperty(itemKey.key) ||
          !valueValidator(item[itemKey.key], itemKey.type)
        ) {
          arrDescription.push(itemKey.description)
          arrStatus.push(itemKey.statusNumber)
        }
      }
    }
  }

  dfe.status = findStatus[Math.max(...arrStatus)]
  dfe.description = [...new Set(arrDescription)].join(',')
}

function validateNfseV2(nfseV2) {
  const keysValidation = [
    {
      key: 'branchId',
      statusNumber: 2,
      description: 'Estabelecimento do documento não informado',
      type: 'string',
      path: 'data',
    },
    {
      key: 'movimento',
      statusNumber: 2,
      description: 'Campo movimento não informado',
      type: 'string',
      path: 'data.identificacao',
    },
    {
      key: 'valores',
      statusNumber: 2,
      description: 'Campo valores não informado',
      type: 'object',
      path: 'data',
    },
    {
      key: 'prestador',
      statusNumber: 1,
      description: 'Prestador não informado',
      type: 'object',
      path: 'data',
      father: ['prestador'],
    },
    {
      key: 'cnpj',
      statusNumber: 1,
      description: 'Cnpj do prestador não informado',
      type: 'string',
      path: 'data.prestador',
      father: ['prestador'],
      dependentField: 'cpf',
    },
    {
      key: 'cpf',
      statusNumber: 1,
      description: 'Cpf do prestador não informado',
      type: 'string',
      path: 'data.prestador',
      father: ['prestador'],
      dependentField: 'cnpj',
    },
    {
      key: 'razaoSocial',
      statusNumber: 1,
      description: 'Campo razão social do prestador não informado',
      type: 'string',
      path: 'data.prestador',
      father: ['prestador'],
    },
    {
      key: 'endereco',
      statusNumber: 1,
      description: 'Campo endereço do prestador não informado',
      type: 'object',
      path: 'data.prestador',
      father: ['prestador'],
    },
    {
      key: 'logradouro',
      statusNumber: 1,
      description: 'Campo logradouro não informado',
      type: 'string',
      path: 'data.prestador.endereco',
      father: ['prestador'],
    },
    {
      key: 'numero',
      statusNumber: 1,
      description: 'Campo numero do endereço do prestador não informado',
      type: 'string',
      path: 'data.prestador.endereco',
      father: ['prestador'],
    },
    {
      key: 'bairro',
      statusNumber: 1,
      description: 'Campo bairro do endereço do prestador não informado',
      type: 'string',
      path: 'data.prestador.endereco',
      father: ['prestador'],
    },
    {
      key: 'codigoMunicipio',
      statusNumber: 2,
      description:
        'Campo codigoMunicipio do endereço do prestador não informado',
      type: 'string',
      path: 'data.prestador.endereco',
      father: ['prestador'],
    },
    {
      key: 'uf',
      statusNumber: 2,
      description: 'Campo uf do endereço do prestador não informado',
      type: 'string',
      path: 'data.prestador.endereco',
      father: ['prestador'],
    },
    {
      key: 'municipio',
      statusNumber: 2,
      description: 'Campo municipio do endereço do prestador não informado',
      type: 'string',
      path: 'data.prestador.endereco',
      father: ['prestador'],
    },
    {
      key: 'tomador',
      statusNumber: 1,
      description: 'Tomador não informado',
      type: 'object',
      path: 'data',
      father: ['tomador'],
    },
    {
      key: 'cnpj',
      statusNumber: 1,
      description: 'Cnpj do tomador não informado',
      type: 'string',
      path: 'data.tomador',
      father: ['tomador'],
      dependentField: 'cpf',
    },
    {
      key: 'cpf',
      statusNumber: 1,
      description: 'Cpf do tomador não informado',
      type: 'string',
      path: 'data.tomador',
      father: ['tomador'],
      dependentField: 'cnpj',
    },
    {
      key: 'razaoSocial',
      statusNumber: 1,
      description: 'Campo razão social do tomador não informado',
      type: 'string',
      path: 'data.tomador',
      father: ['tomador'],
    },
    {
      key: 'endereco',
      statusNumber: 1,
      description: 'Campo endereço do tomador não informado',
      type: 'object',
      path: 'data.tomador',
      father: ['tomador'],
    },
    {
      key: 'logradouro',
      statusNumber: 1,
      description: 'Campo logradouro do endereço do tomador não informado',
      type: 'string',
      path: 'data.tomador.endereco',
      father: ['tomador'],
    },
    {
      key: 'numero',
      statusNumber: 1,
      description: 'Campo numero do endereço do tomador não informado',
      type: 'string',
      path: 'data.tomador.endereco',
      father: ['tomador'],
    },
    {
      key: 'bairro',
      statusNumber: 1,
      description: 'Campo bairro do endereço do tomador não informado',
      type: 'string',
      path: 'data.tomador.endereco',
      father: ['tomador'],
    },
    {
      key: 'codigoMunicipio',
      statusNumber: 2,
      description: 'Campo codigoMunicipio do endereço do tomador não informado',
      type: 'string',
      path: 'data.tomador.endereco',
      father: ['tomador'],
    },
    {
      key: 'uf',
      statusNumber: 2,
      description: 'Campo uf do endereço do tomador não informado',
      type: 'string',
      path: 'data.tomador.endereco',
      father: ['tomador'],
    },
    {
      key: 'municipio',
      statusNumber: 2,
      description: 'Campo municipio do endereço do tomador não informado',
      type: 'string',
      path: 'data.tomador.endereco',
      father: ['tomador'],
    },
  ]

  const itemsValidation = [
    {
      key: 'cst',
      statusNumber: 2,
      description: 'CST PIS do item não informado',
      type: 'string',
      path: 'impostos.pis',
    },
    {
      key: 'cst',
      statusNumber: 2,
      description: 'CST COFINS do item não informado',
      type: 'string',
      path: 'impostos.cofins',
    },
    {
      key: 'codigoAtividade',
      statusNumber: 2,
      description: 'Código da atividade do item não informado',
      type: 'string',
    },
    {
      key: 'itemListaServico',
      statusNumber: 2,
      description: 'Campo lista de serviço do item não informado',
      type: 'string',
    },
    {
      key: 'codigoTributacaoMunicipio',
      statusNumber: 2,
      description: 'Campo código tributação do município não informado',
      type: 'string',
    },
    {
      key: 'contaContabil',
      statusNumber: 2,
      description: 'Campo contaContabil do Pis não informado',
      path: 'impostos.pis',
      type: 'string',
    },
    {
      key: 'contaContabil',
      statusNumber: 2,
      description: 'Campo contaContabil do Cofins não informado',
      path: 'impostos.cofins',
      type: 'string',
    },
  ]

  mainValidator(nfseV2, keysValidation, nfseV2.data.itens, itemsValidation)
}

// fs.readFile('./base64', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Erro ao ler o arquivo:', err)
//   } else {
//     const decodedData = Buffer.from(data, 'base64').toString('utf8')

//     const jsonObject = JSON.parse(decodedData)
//     for (const nota of jsonObject) {
//       validateNfseV2(nota)
//     }

//     console.log(jsonObject)

//     const jsonData = JSON.stringify(jsonObject)

//     fs.writeFileSync('dados.json', jsonData, 'utf8')
//   }
// })

const path = require('path')

const directoryPath = './notas'
const allData = []

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Erro ao listar o diretório:', err)
    return
  }

  const jsonFiles = files.filter(
    (file) => path.extname(file).toLowerCase() === '.json'
  )

  for (const jsonFile of jsonFiles) {
    const filePath = path.join(directoryPath, jsonFile)

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Erro ao ler o arquivo ${jsonFile}:`, err)
        return
      }

      try {
        const jsonData = JSON.parse(data)
        for (const nota of jsonData) {
          validateNfseV2(nota)
        }
        allData.push(...jsonData)
      } catch (parseError) {
        console.error(
          `Erro ao analisar o arquivo ${jsonFile} como JSON:`,
          parseError
        )
      } finally {
        console.log(allData.length)
        
          fs.writeFileSync('nfseV2gringo.json', JSON.stringify(allData), 'utf8')
      }
    })
  }
})

export {}
