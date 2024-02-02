"use strict";
/** @format */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var findStatus = {
    0: 'Sucesso',
    1: 'Alerta',
    2: 'Erro',
};
function valueValidator(value, type) {
    if (type === 'number') {
        return typeof value === 'number' && !isNaN(value);
    }
    if (type === 'string') {
        return typeof value === 'string' && value.trim() !== '';
    }
    if (type === 'array') {
        return Array.isArray(value) && value.length > 0;
    }
    return true;
}
function mainValidator(dfe, keysValidation, array, arrValidation) {
    var e_1, _a, e_2, _b, e_3, _c;
    var arrStatus = [0];
    var arrDescription = [];
    var arrFather = [];
    var _loop_1 = function (each) {
        if (each.path) {
            var arrPath = each.path.split('.');
            var path_1 = dfe;
            for (var i = 0; i < arrPath.length; i += 1) {
                path_1 = path_1[arrPath[i]] === undefined ? {} : path_1[arrPath[i]];
            }
            var hasFather = Array.isArray(each.father)
                ? arrFather.some(function (item) { return each.father.includes(item); })
                : false;
            var condition = !hasFather &&
                (!(path_1 === null || path_1 === void 0 ? void 0 : path_1.hasOwnProperty(each.key)) ||
                    !valueValidator(path_1[each.key], each.type));
            if (each.dependentField) {
                var mainField = valueValidator(path_1[each.key], each.type);
                var dependentField = valueValidator(path_1[each.dependentField], each.type);
                var dependantFieldsValidation = mainField ? false : !dependentField;
                condition = !hasFather && dependantFieldsValidation;
            }
            if (condition) {
                each.type === 'object' && each.father
                    ? arrFather.push.apply(arrFather, __spreadArray([], __read(each.father), false)) : null;
                arrDescription.push(each.description);
                arrStatus.push(each.statusNumber);
            }
        }
        else if (!each.path &&
            (!(dfe === null || dfe === void 0 ? void 0 : dfe.hasOwnProperty(each.key)) ||
                !valueValidator(dfe[each.key], each.type))) {
            arrDescription.push(each.description);
            arrStatus.push(each.statusNumber);
        }
    };
    try {
        for (var keysValidation_1 = __values(keysValidation), keysValidation_1_1 = keysValidation_1.next(); !keysValidation_1_1.done; keysValidation_1_1 = keysValidation_1.next()) {
            var each = keysValidation_1_1.value;
            _loop_1(each);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keysValidation_1_1 && !keysValidation_1_1.done && (_a = keysValidation_1.return)) _a.call(keysValidation_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (array && Array.isArray(array)) {
        try {
            for (var arrValidation_1 = __values(arrValidation), arrValidation_1_1 = arrValidation_1.next(); !arrValidation_1_1.done; arrValidation_1_1 = arrValidation_1.next()) {
                var itemKey = arrValidation_1_1.value;
                try {
                    for (var array_1 = (e_3 = void 0, __values(array)), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                        var item = array_1_1.value;
                        if (itemKey.path) {
                            var arrPath = itemKey.path.split('.');
                            var path_2 = item;
                            for (var i = 0; i < arrPath.length; i += 1) {
                                path_2 = path_2[arrPath[i]] === undefined ? {} : path_2[arrPath[i]];
                            }
                            if (!(path_2 === null || path_2 === void 0 ? void 0 : path_2.hasOwnProperty(itemKey.key)) ||
                                !valueValidator(path_2[itemKey.key], itemKey.type)) {
                                arrDescription.push(itemKey.description);
                                arrStatus.push(itemKey.statusNumber);
                            }
                        }
                        else if (!(item === null || item === void 0 ? void 0 : item.hasOwnProperty(itemKey.key)) ||
                            !valueValidator(item[itemKey.key], itemKey.type)) {
                            arrDescription.push(itemKey.description);
                            arrStatus.push(itemKey.statusNumber);
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (array_1_1 && !array_1_1.done && (_c = array_1.return)) _c.call(array_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (arrValidation_1_1 && !arrValidation_1_1.done && (_b = arrValidation_1.return)) _b.call(arrValidation_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    dfe.status = findStatus[Math.max.apply(Math, __spreadArray([], __read(arrStatus), false))];
    dfe.description = __spreadArray([], __read(new Set(arrDescription)), false).join(',');
}
function validateNfseV2(nfseV2) {
    var keysValidation = [
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
            description: 'Campo codigoMunicipio do endereço do prestador não informado',
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
    ];
    var itemsValidation = [
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
    ];
    mainValidator(nfseV2, keysValidation, nfseV2.data.itens, itemsValidation);
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
var path = require('path');
var directoryPath = './notas';
var allData = [];
fs.readdir(directoryPath, function (err, files) {
    var e_4, _a;
    if (err) {
        console.error('Erro ao listar o diretório:', err);
        return;
    }
    var jsonFiles = files.filter(function (file) { return path.extname(file).toLowerCase() === '.json'; });
    var _loop_2 = function (jsonFile) {
        var filePath = path.join(directoryPath, jsonFile);
        fs.readFile(filePath, 'utf8', function (err, data) {
            var e_5, _a;
            if (err) {
                console.error("Erro ao ler o arquivo ".concat(jsonFile, ":"), err);
                return;
            }
            try {
                var jsonData = JSON.parse(data);
                try {
                    for (var jsonData_1 = (e_5 = void 0, __values(jsonData)), jsonData_1_1 = jsonData_1.next(); !jsonData_1_1.done; jsonData_1_1 = jsonData_1.next()) {
                        var nota = jsonData_1_1.value;
                        validateNfseV2(nota);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (jsonData_1_1 && !jsonData_1_1.done && (_a = jsonData_1.return)) _a.call(jsonData_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                allData.push.apply(allData, __spreadArray([], __read(jsonData), false));
            }
            catch (parseError) {
                console.error("Erro ao analisar o arquivo ".concat(jsonFile, " como JSON:"), parseError);
            }
            finally {
                console.log(allData.length);
                fs.writeFileSync('nfseV2gringo.json', JSON.stringify(allData), 'utf8');
            }
        });
    };
    try {
        for (var jsonFiles_1 = __values(jsonFiles), jsonFiles_1_1 = jsonFiles_1.next(); !jsonFiles_1_1.done; jsonFiles_1_1 = jsonFiles_1.next()) {
            var jsonFile = jsonFiles_1_1.value;
            _loop_2(jsonFile);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (jsonFiles_1_1 && !jsonFiles_1_1.done && (_a = jsonFiles_1.return)) _a.call(jsonFiles_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
});
