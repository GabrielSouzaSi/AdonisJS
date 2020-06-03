'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with buses
 */
var data
class BusController {
  /**
   * Show a list of all buses.
   * GET buses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    // var rp = require('request-promise');

    // var options = {
    //   method: 'POST',
    //   url: 'http://ap3.stc.srv.br/integration/prod/ws/getClientVehicles',
    //   headers: {
    //     'Content-Type': ['application/json', 'application/json'],
    //     'Accept': 'application/json',
    //     'Cookie': 'XSRF-TOKEN=eyJpdiI6IjVCeVc5SDNJODMzTEpmOHV4RW4rWGc9PSIsInZhbHVlIjoiMm1aV0xJNXVwdmVxR0REVUNySGppNDY2OUd4eWJHU3pBdnhRMFoxelwvSDNyanJBRFl2U3FLbXdOOFI1T2xVdlRNdTF0Y0xrQnllVVwvRTJocUoxWWw0dz09IiwibWFjIjoiYjNjMmYwNTdiNmZlMDE1OWY3ZGQzNmE0ZjRhNDhiMWRkMDhiNmI1NDFmNGNhNTlhNjk1ODY5NzljZDZjYjQzZSJ9; laravel_session=eyJpdiI6IjV5THM4NFFZQ241UWFoaW9oNm1VSVE9PSIsInZhbHVlIjoiaXhXaEVxbFpBR1RHXC80QlRFMVpCTzcxOTFlaDZuV3RwMUlqK0Zlbm05RHpYV0FnOTNUVXJkXC9GN283b3ZTeFNmN1Y2QThGNkswM2NvRStFS21rZEo1Zz09IiwibWFjIjoiYTY1MTYxYzdjODk5MjY4NWZlZTFlMjRlYmE4MWRkMzIxZWY1ZTYxNGQ5YWFhNjNiZDQ0MGRhN2M3MjdmMTlkMCJ9'
    //   },
    //   body: JSON.stringify({ "key": "b637b72162e4f270b359b2aa7a963c1d", "user": "viacao", "pass": "f8684ee267cd1270a6cf9aba72eadf79" })

    // };
    // rp(options)
    // .then(function (parsedBody) {
    //     this.data = parsedBody.data
    // })
    // .catch(function (err) {
    //     console.log(err)
    // });
    // return  rp(options).then(process)
    var data = [
      {
      "vehicleId": 17,
      "plate": "CAR1109",
      "label": null,
      "positionId": 75989855,
      "date": "2020-06-01 16:44:45",
      "latitude": "2.823111",
      "longitude": "-60.75492"
      },
      {
      "vehicleId": 82,
      "plate": "CAR1110",
      "label": null,
      "positionId": 74574091,
      "date": "2020-05-01 15:53:14",
      "latitude": "2.822611",
      "longitude": "-60.754935"
      },
      {
      "vehicleId": 117,
      "plate": "CAR1111",
      "label": null,
      "positionId": 75274413,
      "date": "2020-05-17 01:12:46",
      "latitude": "2.823016",
      "longitude": "-60.75484"
      },
      {
      "vehicleId": 114,
      "plate": "CAR1112",
      "label": null,
      "positionId": 75266513,
      "date": "2020-05-16 20:27:45",
      "latitude": "2.823199",
      "longitude": "-60.754844"
      },
      {
      "vehicleId": 22,
      "plate": "CAR1113",
      "label": null,
      "positionId": 75406018,
      "date": "2020-05-19 21:27:27",
      "latitude": "2.82308",
      "longitude": "-60.754667"
      },
      {
      "vehicleId": 18,
      "plate": "CAR1114",
      "label": null,
      "positionId": 74701566,
      "date": "2020-05-04 04:35:57",
      "latitude": "2.822503",
      "longitude": "-60.754978"
      },
      {
      "vehicleId": 13,
      "plate": "CAR1115",
      "label": null,
      "positionId": 74574986,
      "date": "2020-05-01 16:17:25",
      "latitude": "2.822656",
      "longitude": "-60.754931"
      },
      {
      "vehicleId": 35,
      "plate": "CAR1201",
      "label": null,
      "positionId": 75989836,
      "date": "2020-06-01 16:44:30",
      "latitude": "2.823093",
      "longitude": "-60.754538"
      },
      {
      "vehicleId": 44,
      "plate": "CAR1202",
      "label": null,
      "positionId": 75989847,
      "date": "2020-06-01 16:44:38",
      "latitude": "2.822454",
      "longitude": "-60.754938"
      },
      {
      "vehicleId": 21,
      "plate": "CAR1203",
      "label": null,
      "positionId": 75989841,
      "date": "2020-06-01 16:44:35",
      "latitude": "2.822354",
      "longitude": "-60.754963"
      },
      {
      "vehicleId": 99,
      "plate": "CAR1204",
      "label": null,
      "positionId": 75989874,
      "date": "2020-06-01 16:45:14",
      "latitude": "2.823297",
      "longitude": "-60.754664"
      },
      {
      "vehicleId": 42,
      "plate": "CAR1205",
      "label": null,
      "positionId": 73837334,
      "date": "2020-04-18 06:31:09",
      "latitude": "2.823412",
      "longitude": "-60.75468"
      },
      {
      "vehicleId": 12,
      "plate": "CAR1301",
      "label": null,
      "positionId": 75989863,
      "date": "2020-06-01 16:44:58",
      "latitude": "2.799855",
      "longitude": "-60.710363"
      },
      {
      "vehicleId": 25,
      "plate": "CAR1302",
      "label": null,
      "positionId": 75989871,
      "date": "2020-06-01 16:45:09",
      "systemDate": "2020-06-01 17:45:08",
      "ignition": "ON",
      "speed": "48",
      "output1": "ON",
      "output2": "ON",
      "latitude": "2.812579",
      "longitude": "-60.736911"
      },
      {
      "vehicleId": 109,
      "plate": "CAR1303",
      "label": null,
      "positionId": 75989167,
      "date": "2020-06-01 16:24:21",
      "latitude": "2.822574",
      "longitude": "-60.754896"
      },
      {
      "vehicleId": 8,
      "plate": "CAR1304",
      "label": null,
      "positionId": 74086392,
      "date": "2020-04-22 17:37:10",
      "systemDate": "2020-04-22 18:37:09",
      "ignition": "ON",
      "speed": "0",
      "output1": "OFF",
      "output2": "ON",
      "latitude": "2.822568",
      "longitude": "-60.67509"
      },
      {
      "vehicleId": 95,
      "plate": "CAR1305",
      "label": null,
      "positionId": 75987492,
      "date": "2020-06-01 15:56:27",
      "latitude": "2.82269",
      "longitude": "-60.754867"
      },
      {
      "vehicleId": 7,
      "plate": "CAR1306",
      "label": null,
      "positionId": 75989873,
      "date": "2020-06-01 16:45:11",
      "systemDate": "2020-06-01 17:45:10",
      "ignition": "ON",
      "speed": "25",
      "output1": "OFF",
      "output2": "ON",
      "latitude": "2.852165",
      "longitude": "-60.659727"
      },
      {
      "vehicleId": 115,
      "plate": "CAR1307",
      "label": null,
      "positionId": 75989392,
      "date": "2020-06-01 16:31:04",
      "latitude": "2.822453",
      "longitude": "-60.754675"
      },
      {
      "vehicleId": 10,
      "plate": "CAR1308",
      "label": null,
      "positionId": 75989862,
      "date": "2020-06-01 16:44:57",
      "latitude": "2.825779",
      "longitude": "-60.704803"
      },
      {
      "vehicleId": 72,
      "plate": "CAR1309",
      "label": null,
      "positionId": 75988940,
      "date": "2020-06-01 16:17:19",
      "latitude": "2.823087",
      "longitude": "-60.754737"
      },
      {
      "vehicleId": 11,
      "plate": "CAR1310",
      "label": null,
      "positionId": 75987296,
      "date": "2020-06-01 15:52:09",
      "latitude": "2.822363",
      "longitude": "-60.754778"
      },
      {
      "vehicleId": 110,
      "plate": "CAR1311",
      "label": null,
      "positionId": 75989838,
      "date": "2020-06-01 16:44:33",
      "latitude": "2.820811",
      "longitude": "-60.673858"
      },
      {
      "vehicleId": 108,
      "plate": "CAR1312",
      "label": null,
      "positionId": 75989831,
      "date": "2020-06-01 16:44:10",
      "latitude": "2.842732",
      "longitude": "-60.670384"
      },
      {
      "vehicleId": 96,
      "plate": "CAR1313",
      "label": null,
      "positionId": 75989867,
      "date": "2020-06-01 16:45:05",
      "latitude": "2.822534",
      "longitude": "-60.754733"
      },
      {
      "vehicleId": 112,
      "plate": "CAR1314",
      "label": null,
      "positionId": 75987321,
      "date": "2020-06-01 15:52:51",
      "latitude": "2.823407",
      "longitude": "-60.754572"
      },
      {
      "vehicleId": 9,
      "plate": "CAR1315",
      "label": null,
      "positionId": 75989844,
      "date": "2020-06-01 16:44:38",
      "latitude": "2.810267",
      "longitude": "-60.750957"
      },
      {
      "vehicleId": 38,
      "plate": "CAR1316",
      "label": null,
      "positionId": 75989856,
      "date": "2020-06-01 16:44:46",
      "latitude": "2.823436",
      "longitude": "-60.754486"
      },
      {
      "vehicleId": 88,
      "plate": "CAR1317",
      "label": null,
      "positionId": 75989845,
      "date": "2020-06-01 16:44:36",
      "latitude": "2.82276",
      "longitude": "-60.754756"
      },
      {
      "vehicleId": 116,
      "plate": "CAR1318",
      "label": null,
      "positionId": 75989876,
      "date": "2020-06-01 16:45:18",
      "latitude": "2.805067",
      "longitude": "-60.752984"
      },
      {
      "vehicleId": 36,
      "plate": "CAR1319",
      "label": null,
      "positionId": 75989875,
      "date": "2020-06-01 16:45:15",
      "systemDate": "2020-06-01 17:45:15",
      "ignition": "ON",
      "speed": "48",
      "output1": "OFF",
      "output2": "ON",
      "latitude": "2.809318",
      "longitude": "-60.777521"
      },
      {
      "vehicleId": 5,
      "plate": "CAR1320",
      "label": null,
      "positionId": 75989869,
      "date": "2020-06-01 16:44:58",
      "latitude": "2.85057",
      "longitude": "-60.740822"
      },
      {
      "vehicleId": 75,
      "plate": "CAR1321",
      "label": null,
      "positionId": 75989864,
      "date": "2020-06-01 16:44:56",
      "latitude": "2.822667",
      "longitude": "-60.754713"
      },
      {
      "vehicleId": 94,
      "plate": "CAR1322",
      "label": null,
      "positionId": 75989835,
      "date": "2020-06-01 16:44:23",
      "latitude": "2.813959",
      "longitude": "-60.669874"
      },
      {
      "vehicleId": 107,
      "plate": "CAR1323",
      "label": null,
      "positionId": 75989839,
      "date": "2020-06-01 16:44:28",
      "latitude": "2.819114",
      "longitude": "-60.706044"
      },
      {
      "vehicleId": 86,
      "plate": "CAR1324",
      "label": null,
      "positionId": 75989840,
      "date": "2020-06-01 16:44:34",
      "systemDate": "2020-06-01 17:44:34",
      "ignition": "ON",
      "speed": "7",
      "output1": "OFF",
      "output2": "ON",
      "latitude": "2.823596",
      "longitude": "-60.737464"
      },
      {
      "vehicleId": 19,
      "plate": "CAR1325",
      "label": null,
      "positionId": 75989866,
      "date": "2020-06-01 16:45:04",
      "latitude": "2.77292",
      "longitude": "-60.720569"
      },
      {
      "vehicleId": 118,
      "plate": "CAR1401",
      "label": null,
      "positionId": 72988605,
      "date": "2020-04-03 22:38:01",
      "latitude": "2.822765",
      "longitude": "-60.754909"
      },
      {
      "vehicleId": 74,
      "plate": "CAR1402",
      "label": null,
      "positionId": 73383640,
      "date": "2020-04-10 10:11:11",
      "latitude": "2.822823",
      "longitude": "-60.754908"
      },
      {
      "vehicleId": 104,
      "plate": "CAR1403",
      "label": null,
      "positionId": 74065707,
      "date": "2020-04-22 08:11:00",
      "latitude": "2.822821",
      "longitude": "-60.754889"
      },
      {
      "vehicleId": 119,
      "plate": "CAR1404",
      "label": null,
      "positionId": 75989859,
      "date": "2020-06-01 16:44:41",
      "latitude": "2.822849",
      "longitude": "-60.754882"
      },
      {
      "vehicleId": 43,
      "plate": "CAR1405",
      "label": null,
      "positionId": 73330822,
      "date": "2020-04-09 12:26:37",
      "latitude": "2.822901",
      "longitude": "-60.754918"
      },
      {
      "vehicleId": 73,
      "plate": "CAR1406",
      "label": null,
      "positionId": 73236428,
      "date": "2020-04-07 21:12:58",
      "latitude": "2.822914",
      "longitude": "-60.754908"
      },
      {
      "vehicleId": 6,
      "plate": "CAR1407",
      "label": null,
      "positionId": 73187331,
      "date": "2020-04-07 02:22:16",
      "latitude": "2.822888",
      "longitude": "-60.754907"
      },
      {
      "vehicleId": 124,
      "plate": "CAR1408",
      "label": null,
      "positionId": 73433477,
      "date": "2020-04-11 06:54:21",
      "latitude": "2.822987",
      "longitude": "-60.754893"
      },
      {
      "vehicleId": 123,
      "plate": "CAR1409",
      "label": null,
      "positionId": 73288407,
      "date": "2020-04-08 18:46:14",
      "latitude": "2.822976",
      "longitude": "-60.754899"
      },
      {
      "vehicleId": 85,
      "plate": "CAR1801",
      "label": null,
      "positionId": 72799282,
      "date": "2020-04-01 01:55:57",
      "latitude": "2.822667",
      "longitude": "-60.754932"
      },
      {
      "vehicleId": 70,
      "plate": "CAR1802",
      "label": null,
      "positionId": 73017642,
      "date": "2020-04-04 10:01:23",
      "latitude": "2.822713",
      "longitude": "-60.754864"
      },
      {
      "vehicleId": 4,
      "plate": "CAR1803",
      "label": null,
      "positionId": 72439555,
      "date": "2020-03-26 20:05:33",
      "latitude": "2.822689",
      "longitude": "-60.75493"
      },
      {
      "vehicleId": 120,
      "plate": "CAR1804",
      "label": null,
      "positionId": 72492243,
      "date": "2020-03-27 15:27:53",
      "latitude": "2.822748",
      "longitude": "-60.754851"
      },
      {
      "vehicleId": 20,
      "plate": "CAR3001",
      "label": null,
      "positionId": 75989820,
      "date": "2020-06-01 16:43:54",
      "latitude": "2.822454",
      "longitude": "-60.75497"
      },
      {
      "vehicleId": 40,
      "plate": "CAR3002",
      "label": null,
      "positionId": 75989384,
      "date": "2020-06-01 16:30:56",
      "latitude": "2.822803",
      "longitude": "-60.754568"
      },
      {
      "vehicleId": 32,
      "plate": "CAR3003",
      "label": null,
      "positionId": 75989860,
      "date": "2020-06-01 16:44:54",
      "latitude": "2.822524",
      "longitude": "-60.754729"
      },
      {
      "vehicleId": 27,
      "plate": "CAR3004",
      "label": null,
      "positionId": 75989857,
      "date": "2020-06-01 16:44:48",
      "latitude": "2.823442",
      "longitude": "-60.754535"
      },
      {
      "vehicleId": 28,
      "plate": "CAR3005",
      "label": null,
      "positionId": 75989868,
      "date": "2020-06-01 16:45:05",
      "latitude": "2.822442",
      "longitude": "-60.754711"
      },
      {
      "vehicleId": 34,
      "plate": "CAR3006",
      "label": null,
      "positionId": 75987290,
      "date": "2020-06-01 15:52:04",
      "latitude": "2.822505",
      "longitude": "-60.754594"
      },
      {
      "vehicleId": 121,
      "plate": "CAR3007",
      "label": null,
      "positionId": 75989833,
      "date": "2020-06-01 16:44:12",
      "latitude": "2.803348",
      "longitude": "-60.685009"
      },
      {
      "vehicleId": 29,
      "plate": "CAR3008",
      "label": null,
      "positionId": 75989872,
      "date": "2020-06-01 16:45:10",
      "latitude": "2.866115",
      "longitude": "-60.696813"
      },
      {
      "vehicleId": 98,
      "plate": "CAR3009",
      "label": null,
      "positionId": 75987331,
      "date": "2020-06-01 15:53:25",
      "latitude": "2.82256",
      "longitude": "-60.754961"
      },
      {
      "vehicleId": 30,
      "plate": "CAR3010",
      "label": null,
      "positionId": 75989754,
      "date": "2020-06-01 16:41:52",
      "latitude": "2.822914",
      "longitude": "-60.754502"
      },
      {
      "vehicleId": 81,
      "plate": "CAR3012",
      "label": null,
      "positionId": 75989852,
      "date": "2020-06-01 16:44:37",
      "systemDate": "2020-06-01 17:44:43",
      "ignition": "ON",
      "speed": "0",
      "output1": "OFF",
      "output2": "ON",
      "latitude": "2.81394",
      "longitude": "-60.669891"
      },
      {
      "vehicleId": 79,
      "plate": "CAR3013",
      "label": null,
      "positionId": 75989870,
      "date": "2020-06-01 16:45:05",
      "latitude": "2.823046",
      "longitude": "-60.754701"
      },
      {
      "vehicleId": 84,
      "plate": "CAR3111",
      "label": null,
      "positionId": 75024528,
      "date": "2020-05-11 06:49:28",
      "latitude": "2.822455",
      "longitude": "-60.754948"
      },
      {
      "vehicleId": 37,
      "plate": "CAR3112",
      "label": null,
      "positionId": 75890521,
      "date": "2020-05-30 14:19:04",
      "latitude": "2.823389",
      "longitude": "-60.754435"
      },
      {
      "vehicleId": 41,
      "plate": "CAR3113",
      "label": null,
      "positionId": 75292996,
      "date": "2020-05-17 11:18:11",
      "latitude": "2.823145",
      "longitude": "-60.754921"
      },
      {
      "vehicleId": 113,
      "plate": "CAR3114",
      "label": null,
      "positionId": 75989738,
      "date": "2020-06-01 16:41:20",
      "latitude": "2.823052",
      "longitude": "-60.754902"
      },
      {
      "vehicleId": 89,
      "plate": "CAR3117",
      "label": null,
      "positionId": 74655856,
      "date": "2020-05-03 06:34:03",
      "latitude": "2.823096",
      "longitude": "-60.754971"
      },
      {
      "vehicleId": 90,
      "plate": "CAR3118",
      "label": null,
      "positionId": 73056557,
      "date": "2020-04-05 00:50:16",
      "latitude": "2.823423",
      "longitude": "-60.754562"
      },
      {
      "vehicleId": 76,
      "plate": "CAR3119",
      "label": null,
      "positionId": 74788163,
      "date": "2020-05-05 21:59:30",
      "latitude": "2.822585",
      "longitude": "-60.754959"
      },
      {
      "vehicleId": 39,
      "plate": "CAR3201",
      "label": null,
      "positionId": 75989865,
      "date": "2020-06-01 16:45:01",
      "latitude": "2.822352",
      "longitude": "-60.754962"
      },
      {
      "vehicleId": 33,
      "plate": "CAR3202",
      "label": null,
      "positionId": 75275834,
      "date": "2020-05-17 02:04:59",
      "latitude": "2.823104",
      "longitude": "-60.754909"
      },
      {
      "vehicleId": 78,
      "plate": "CAR3203",
      "label": null,
      "positionId": 75979365,
      "date": "2020-06-01 11:54:57",
      "latitude": "2.823241",
      "longitude": "-60.754668"
      },
      {
      "vehicleId": 122,
      "plate": "CAR3204",
      "label": null,
      "positionId": 75989853,
      "date": "2020-06-01 16:44:42",
      "latitude": "2.822953",
      "longitude": "-60.754701"
      },
      {
      "vehicleId": 31,
      "plate": "CAR3205",
      "label": null,
      "positionId": 75987235,
      "date": "2020-06-01 15:50:28",
      "latitude": "2.822929",
      "longitude": "-60.754549"
      }
      ]
    return data
  }
}

module.exports = BusController
