// agrupar pelo o cnpj
// somar valores

const dfes = [
  {
    nfses: {
      retido_fonte: {
        ind_nat_ret: '1',
        cod_rec: '2',
        ind_nat_rec: '10',
        ind_dec: '9',
      },
      nfse: {
        dataEmissao: '20/01/2021',
      },
      destinatario: {
        cnpj: '1892786218332',
      },
      servico: {
        valores: {
          cofins: {
            valor: '112',
            baseCalculo: '100',
          },
          pis: {
            valor: '12',
          },
        },
      },
    },
  },
  {
    nfses: {
      retido_fonte: {
        ind_nat_ret: '1',
        cod_rec: '2',
        ind_nat_rec: '10',
        ind_dec: '9',
      },
      nfse: {
        dataEmissao: '20/01/2021',
      },
      destinatario: {
        cnpj: '1892786218332',
      },
      servico: {
        valores: {
          cofins: {
            valor: '112',
            baseCalculo: '100',
          },
          pis: {
            valor: '12',
          },
        },
      },
    },
  },
  {
    nfses: {
      retido_fonte: {
        ind_nat_ret: '1',
        cod_rec: '2',
        ind_nat_rec: '5',
        ind_dec: '9',
      },
      nfse: {
        dataEmissao: '20/01/2020',
      },
      destinatario: {
        cnpj: '1892786218332',
      },
      servico: {
        valores: {
          cofins: {
            valor: '112',
            baseCalculo: '100',
          },
          pis: {
            valor: '12',
          },
        },
      },
    },
  },
  {
    nfses: {
      retido_fonte: {
        ind_nat_ret: '1',
        cod_rec: null,
        ind_nat_rec: '10',
        ind_dec: '9',
      },
      nfse: {
        dataEmissao: '20/01/2021',
      },
      destinatario: {
        cnpj: '1892786218332',
      },
      servico: {
        valores: {
          cofins: {
            valor: '112',
            baseCalculo: '100',
          },
          pis: {
            valor: '12',
          },
        },
      },
    },
  },
  {
    nfses: {
      retido_fonte: {
        ind_nat_ret: '1',
        cod_rec: null,
        ind_nat_rec: '10',
        ind_dec: '9',
      },
      nfse: {
        dataEmissao: '20/01/2021',
      },
      destinatario: {
        cnpj: '1892786218331',
      },
      servico: {
        valores: {
          cofins: {
            valor: '112',
            baseCalculo: '100',
          },
          pis: {
            valor: '12',
          },
        },
      },
    },
  },
]

// console.log(
//   data.map((item, index) => {
//     const cnpj = item.nfses.destinatario.cnpj
//     if (cnpj === data[index + 1].nfses.destinatario.cnpj) {
//       const valor = Number(item.nfses.servico)
//       return {
//         ...item,
//         servico: {
//           valores: {
//             ...item.servico.valores,
//             pis: {
//               valor: '12',
//             },
//           },
//         },
//       }
//     } else {
//       return item
//     }
//   })
// )

// const build = data.map(item => {
//   const cnpj = item.nfses.destinatario.cnpj
//   return cnpj
// })

// const arrUnique = [...new Set(build)]

// const sumValues = arrUnique.map(item => {
//   data.map(item2 => {
//     if (item2.nfses.destinatario.cnpj === item) {
//       console.log('aqui')
//     }
//   })
// })

const buildedObject = []

dfes.forEach(dfe => {
  const objectIndex = buildedObject.findIndex(
    each =>
      each.ind_nat_ret === dfe.nfses.retido_fonte.ind_nat_ret &&
      each.dt_ret === dfe.nfses.nfse.dataEmissao &&
      each.cod_rec === dfe.nfses.retido_fonte.cod_rec &&
      each.ind_nat_rec === dfe.nfses.retido_fonte.ind_nat_rec &&
      each.cnpj === dfe.nfses.destinatario.cnpj
  )

  console.log(buildedObject)

  if (
    dfe.nfses.retido_fonte.ind_nat_ret &&
    dfe.nfses.nfse.dataEmissao &&
    dfe.nfses.retido_fonte.cod_rec &&
    dfe.nfses.retido_fonte.ind_nat_rec &&
    dfe.nfses.destinatario.cnpj
  ) {
    if (objectIndex !== -1) {
      buildedObject[objectIndex].vl_bc_ret = (
        Number(
          String(buildedObject[objectIndex].vl_bc_ret).replace(/\,/g, '.')
        ) +
        Number(
          String(dfe.nfses.servico.valores.cofins.baseCalculo).replace(
            /\,/g,
            '.'
          )
        )
      )
        .toFixed(2)
        .replace(/\./g, ',')
      buildedObject[objectIndex].vl_ret = (
        Number(String(buildedObject[objectIndex].vl_ret).replace(/\,/g, '.')) +
        (Number(
          String(dfe.nfses.servico.valores.pis.valor).replace(/\,/g, '.')
        ) +
          Number(
            String(dfe.nfses.servico.valores.cofins.valor).replace(/\,/g, '.')
          ))
      )
        .toFixed(2)
        .replace(/\./g, ',')
      buildedObject[objectIndex].vl_ret_pis = (
        Number(
          String(buildedObject[objectIndex].vl_ret_pis).replace(/\,/g, '.')
        ) +
        Number(String(dfe.nfses.servico.valores.pis.valor).replace(/\,/g, '.'))
      )
        .toFixed(2)
        .replace(/\./g, ',')
      buildedObject[objectIndex].vl_ret_cofins = (
        Number(
          String(buildedObject[objectIndex].vl_ret_cofins).replace(/\,/g, '.')
        ) +
        Number(
          String(dfe.nfses.servico.valores.cofins.valor).replace(/\,/g, '.')
        )
      )
        .toFixed(2)
        .replace(/\./g, ',')
    } else {
      buildedObject.push({
        ind_nat_ret: dfe.nfses.retido_fonte.ind_nat_ret,
        dt_ret: dfe.nfses.nfse.dataEmissao,
        vl_bc_ret: dfe.nfses.servico.valores.cofins.baseCalculo,
        vl_ret: (
          Number(dfe.nfses.servico.valores.pis.valor) +
          Number(dfe.nfses.servico.valores.cofins.valor)
        )?.toFixed(2),
        cod_rec: dfe.nfses.retido_fonte.cod_rec,
        ind_nat_rec: dfe.nfses.retido_fonte.ind_nat_rec,
        cnpj: dfe.nfses.destinatario.cnpj,
        vl_ret_pis: dfe.nfses.servico.valores.pis.valor,
        vl_ret_cofins: dfe.nfses.servico.valores.cofins.valor,
        ind_dec: dfe.nfses.retido_fonte.ind_dec,
      })
    }
  }
})
