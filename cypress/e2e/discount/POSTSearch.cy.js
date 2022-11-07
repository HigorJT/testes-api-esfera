/// <reference types="Cypress" />

import { successfulRequest, badRequest, unauthorizedRequest } from '../../api/discount/POSTSearch/request.js'

describe('Testando a rota de POST Search', () => {
    before(() => {
        cy.setToken(88888888888)
    })

    it('Successful Request', () => {
        successfulRequest('Cadeira').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.items.length).to.below(11)
        })
    })

    it('Bad Request', () => {
        badRequest().then(res => {
            expect(res.status).to.eq(403)
        })
    })

    it('Unauthorized Request', () => {
        unauthorizedRequest().then(res => {
            expect(res.status).to.eq(401)
            expect(res.body).to.eq('invalid token\n')
        })
    })

    it('Deve retornar produtos que contenham o texto Luz', () => {

        const response = {
            "totalResults": 3500,
            "offset": 0,
            "limit": 10,
            "category": null,
            "context": {
                "minPointsValue": 700.0,
                "maxPointsValue": 33400.0
            },
            "items": [
                {
                    "listPrice": 3900.0,
                    "salePrice": 3900.0,
                    "displayName": "Combo Livros Biografias Religiosas",
                    "id": "e100604960",
                    "skuId": "dmgl225368700",
                    "repositoryId": "e100604960",
                    "cardImage": "//a-static.mlcdn.com.br/410x308/title-reference/magazineluiza/225368700/a8bc145d40f0fb2623b2312d2b02b67f.jpg",
                    "route": "/p/combo-livros-biografias-religiosas/e100604960",
                    "productType": "physicalProductType"
                },
                {
                    "listPrice": 4700.0,
                    "salePrice": 4700.0,
                    "displayName": "Kit Livros Meu Livro Gigante do Mundo Um Montão de Labirintos Incríveis",
                    "id": "e100620756",
                    "skuId": "dmgl229233500",
                    "repositoryId": "e100620756",
                    "cardImage": "//i.mlcdn.com.br/410x308/229233500.jpg",
                    "route": "/p/kit-livros-meu-livro-gigante-do-mundo-um-montao-de-labirintos-incriveis/e100620756",
                    "productType": "physicalProductType"
                },
                {
                    "listPrice": 3900.0,
                    "salePrice": 3900.0,
                    "displayName": "Lua branca Livro 2 da saga três luas",
                    "id": "e100013671",
                    "skuId": "dmgl223185000",
                    "repositoryId": "e100013671",
                    "cardImage": "//a-static.mlcdn.com.br/410x308/title-reference/magazineluiza/223185000/b6e48d2d38f02617b903e6c09317f655.jpg",
                    "route": "/p/lua-branca-livro-2-da-saga-tres-luas/e100013671",
                    "productType": "physicalProductType"
                },
                {
                    "listPrice": 4000.0,
                    "salePrice": 4000.0,
                    "displayName": "Livro Corte de Espinhos e Rosas Vol. 1 Sarah J. Maas com Brinde",
                    "id": "e100864929",
                    "skuId": "dmgl233306000",
                    "repositoryId": "e100864929",
                    "cardImage": "//a-static.mlcdn.com.br/410x308/title-reference/magazineluiza/233306000/c94144fb5f918d61e8e308af5fdba6c7.jpg",
                    "route": "/p/livro-corte-de-espinhos-e-rosas-vol-1-sarah-j-maas-com-brinde/e100864929",
                    "productType": "physicalProductType"
                },
                {
                    "listPrice": 3900.0,
                    "salePrice": 3900.0,
                    "displayName": "O panda : Livro chocalho",
                    "id": "e100020164",
                    "skuId": "dmgl222509900",
                    "repositoryId": "e100020164",
                    "cardImage": "//i.mlcdn.com.br/410x308/222509900.jpg",
                    "route": "/p/o-panda-livro-chocalho/e100020164",
                    "productType": "physicalProductType"
                },
                {
                    "listPrice": 3900.0,
                    "salePrice": 3900.0,
                    "displayName": "Livro - A Era do Capitalismo de Vigilância",
                    "id": "e100836522",
                    "skuId": "dmgl227595900",
                    "repositoryId": "e100836522",
                    "cardImage": "//a-static.mlcdn.com.br/410x308/title-reference/magazineluiza/227595900/8ebd6d1f81b17e8493d3d6114e30e399.jpg",
                    "route": "/p/livro-a-era-do-capitalismo-de-vigilancia/e100836522",
                    "productType": "physicalProductType"
                },
                {
                    "listPrice": 3900.0,
                    "salePrice": 3900.0,
                    "displayName": "Kit Livros A Seleção Kiera Cass 6 Livros",
                    "id": "e100614800",
                    "skuId": "dmgl229234700",
                    "repositoryId": "e100614800",
                    "cardImage": "//i.mlcdn.com.br/410x308/229234700.jpg",
                    "route": "/p/kit-livros-a-selecao-kiera-cass-6-livros/e100614800",
                    "productType": "physicalProductType"
                },
                {
                    "listPrice": 4000.0,
                    "salePrice": 4000.0,
                    "displayName": "Livro - Dialogando com a própria história",
                    "id": "e100866075",
                    "skuId": "dmgl233305900",
                    "repositoryId": "e100866075",
                    "cardImage": "//a-static.mlcdn.com.br/410x308/title-reference/magazineluiza/233305900/d55a8ef4cd004836f5bf168f19e6ead7.jpg",
                    "route": "/p/livro-dialogando-com-a-propria-historia/e100866075",
                    "productType": "physicalProductType"
                },
                {
                    "listPrice": 3900.0,
                    "salePrice": 3900.0,
                    "displayName": "Livro - O Enigma do Quarto 622",
                    "id": "e100836352",
                    "skuId": "dmgl227595800",
                    "repositoryId": "e100836352",
                    "cardImage": "//a-static.mlcdn.com.br/410x308/title-reference/magazineluiza/227595800/21106720ecce6920c718f5fb429954bb.jpg",
                    "route": "/p/livro-o-enigma-do-quarto-622/e100836352",
                    "productType": "physicalProductType"
                },
                {
                    "listPrice": 3900.0,
                    "salePrice": 3900.0,
                    "displayName": "Livro Tecnologia na Infância Shimi Kang",
                    "id": "e100861829",
                    "skuId": "dmgl232593600",
                    "repositoryId": "e100861829",
                    "cardImage": "//a-static.mlcdn.com.br/410x308/title-reference/magazineluiza/232593600/8ffc47068a19104f78b5d22ff2734add.jpg",
                    "route": "/p/livro-tecnologia-na-infancia-shimi-kang/e100861829",
                    "productType": "physicalProductType"
                }
            ]
        } 
        successfulRequest('Luz').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.items.length).to.below(11)
            res.body.items.forEach(item => {
                expect(item.displayName.toLowerCase()).contain('luz')
            })
        })
    })

    it('Realizando uma pesquisa sem retorno', () => {
        successfulRequest('testeteste').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.totalResults).to.eq(0)
            expect(res.body.items.length).to.eq(0)
        })
    })
})



