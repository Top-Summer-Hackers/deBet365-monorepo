export default {
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "faucet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "test",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x60806040523480156200001157600080fd5b5060405162000c7538038062000c75833981016040819052620000349162000123565b818160036200004483826200021c565b5060046200005382826200021c565b5050505050620002e8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008657600080fd5b81516001600160401b0380821115620000a357620000a36200005e565b604051601f8301601f19908116603f01168101908282118183101715620000ce57620000ce6200005e565b81604052838152602092508683858801011115620000eb57600080fd5b600091505b838210156200010f5785820183015181830184015290820190620000f0565b600093810190920192909252949350505050565b600080604083850312156200013757600080fd5b82516001600160401b03808211156200014f57600080fd5b6200015d8683870162000074565b935060208501519150808211156200017457600080fd5b50620001838582860162000074565b9150509250929050565b600181811c90821680620001a257607f821691505b602082108103620001c357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021757600081815260208120601f850160051c81016020861015620001f25750805b601f850160051c820191505b818110156200021357828155600101620001fe565b5050505b505050565b81516001600160401b038111156200023857620002386200005e565b62000250816200024984546200018d565b84620001c9565b602080601f8311600181146200028857600084156200026f5750858301515b600019600386901b1c1916600185901b17855562000213565b600085815260208120601f198616915b82811015620002b95788860151825594840194600190910190840162000298565b5085821015620002d85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61097d80620002f86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c578063a9059cbb11610066578063a9059cbb146101a0578063d0064aea146101b3578063dd62ed3e146101c8578063f8a8fd6d146101c657600080fd5b806370a082311461015c57806395d89b4114610185578063a457c2d71461018d57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc6101db565b6040516100e991906107a4565b60405180910390f35b61010561010036600461080e565b61026d565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610838565b610287565b604051601281526020016100e9565b61010561015736600461080e565b6102ab565b61011961016a366004610874565b6001600160a01b031660009081526020819052604090205490565b6100dc6102cd565b61010561019b36600461080e565b6102dc565b6101056101ae36600461080e565b61035c565b6101c66101c1366004610896565b61036a565b005b6101196101d63660046108c2565b610378565b6060600380546101ea906108ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610216906108ec565b80156102635780601f1061023857610100808354040283529160200191610263565b820191906000526020600020905b81548152906001019060200180831161024657829003601f168201915b5050505050905090565b60003361027b8185856103a3565b60019150505b92915050565b6000336102958582856104c7565b6102a0858585610541565b506001949350505050565b60003361027b8185856102be8383610378565b6102c89190610926565b6103a3565b6060600480546101ea906108ec565b600033816102ea8286610378565b90508381101561034f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102a082868684036103a3565b60003361027b818585610541565b61037481836106e5565b5050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104055760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610346565b6001600160a01b0382166104665760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610346565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104d38484610378565b9050600019811461053b578181101561052e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610346565b61053b84848484036103a3565b50505050565b6001600160a01b0383166105a55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610346565b6001600160a01b0382166106075760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610346565b6001600160a01b0383166000908152602081905260409020548181101561067f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610346565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361053b565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610346565b806002600082825461074d9190610926565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b818110156107d1578581018301518582016040015282016107b5565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461080957600080fd5b919050565b6000806040838503121561082157600080fd5b61082a836107f2565b946020939093013593505050565b60008060006060848603121561084d57600080fd5b610856846107f2565b9250610864602085016107f2565b9150604084013590509250925092565b60006020828403121561088657600080fd5b61088f826107f2565b9392505050565b600080604083850312156108a957600080fd5b823591506108b9602084016107f2565b90509250929050565b600080604083850312156108d557600080fd5b6108de836107f2565b91506108b9602084016107f2565b600181811c9082168061090057607f821691505b60208210810361092057634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561028157634e487b7160e01b600052601160045260246000fdfea2646970667358221220f32d3244b0bfca199b5303475cd254e57c43ac5f79386d65fc9b68b805e0e6ca64736f6c63430008130033",
    "sourceMap": "128:301:52:-:0;;;162:102;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;246:5;253:7;2046:5:39;:13;246:5:52;2046::39;:13;:::i;:::-;-1:-1:-1;2069:7:39;:17;2079:7;2069;:17;:::i;:::-;;1980:113;;162:102:52;;128:301;;14:127:79;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:840;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:79;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:79;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;730:3;725:2;720;712:6;708:15;704:24;701:33;698:53;;;747:1;744;737:12;698:53;769:1;760:10;;779:133;793:2;790:1;787:9;779:133;;;881:14;;;877:23;;871:30;850:14;;;846:23;;839:63;804:10;;;;779:133;;;954:1;932:15;;;928:24;;;921:35;;;;936:6;146:840;-1:-1:-1;;;;146:840:79:o;991:562::-;1090:6;1098;1151:2;1139:9;1130:7;1126:23;1122:32;1119:52;;;1167:1;1164;1157:12;1119:52;1194:16;;-1:-1:-1;;;;;1259:14:79;;;1256:34;;;1286:1;1283;1276:12;1256:34;1309:61;1362:7;1353:6;1342:9;1338:22;1309:61;:::i;:::-;1299:71;;1416:2;1405:9;1401:18;1395:25;1379:41;;1445:2;1435:8;1432:16;1429:36;;;1461:1;1458;1451:12;1429:36;;1484:63;1539:7;1528:8;1517:9;1513:24;1484:63;:::i;:::-;1474:73;;;991:562;;;;;:::o;1558:380::-;1637:1;1633:12;;;;1680;;;1701:61;;1755:4;1747:6;1743:17;1733:27;;1701:61;1808:2;1800:6;1797:14;1777:18;1774:38;1771:161;;1854:10;1849:3;1845:20;1842:1;1835:31;1889:4;1886:1;1879:15;1917:4;1914:1;1907:15;1771:161;;1558:380;;;:::o;2069:545::-;2171:2;2166:3;2163:11;2160:448;;;2207:1;2232:5;2228:2;2221:17;2277:4;2273:2;2263:19;2347:2;2335:10;2331:19;2328:1;2324:27;2318:4;2314:38;2383:4;2371:10;2368:20;2365:47;;;-1:-1:-1;2406:4:79;2365:47;2461:2;2456:3;2452:12;2449:1;2445:20;2439:4;2435:31;2425:41;;2516:82;2534:2;2527:5;2524:13;2516:82;;;2579:17;;;2560:1;2549:13;2516:82;;;2520:3;;;2160:448;2069:545;;;:::o;2790:1352::-;2910:10;;-1:-1:-1;;;;;2932:30:79;;2929:56;;;2965:18;;:::i;:::-;2994:97;3084:6;3044:38;3076:4;3070:11;3044:38;:::i;:::-;3038:4;2994:97;:::i;:::-;3146:4;;3210:2;3199:14;;3227:1;3222:663;;;;3929:1;3946:6;3943:89;;;-1:-1:-1;3998:19:79;;;3992:26;3943:89;-1:-1:-1;;2747:1:79;2743:11;;;2739:24;2735:29;2725:40;2771:1;2767:11;;;2722:57;4045:81;;3192:944;;3222:663;2016:1;2009:14;;;2053:4;2040:18;;-1:-1:-1;;3258:20:79;;;3376:236;3390:7;3387:1;3384:14;3376:236;;;3479:19;;;3473:26;3458:42;;3571:27;;;;3539:1;3527:14;;;;3406:19;;3376:236;;;3380:3;3640:6;3631:7;3628:19;3625:201;;;3701:19;;;3695:26;-1:-1:-1;;3784:1:79;3780:14;;;3796:3;3776:24;3772:37;3768:42;3753:58;3738:74;;3625:201;-1:-1:-1;;;;;3872:1:79;3856:14;;;3852:22;3839:36;;-1:-1:-1;2790:1352:79:o;:::-;128:301:52;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c578063a9059cbb11610066578063a9059cbb146101a0578063d0064aea146101b3578063dd62ed3e146101c8578063f8a8fd6d146101c657600080fd5b806370a082311461015c57806395d89b4114610185578063a457c2d71461018d57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc6101db565b6040516100e991906107a4565b60405180910390f35b61010561010036600461080e565b61026d565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610838565b610287565b604051601281526020016100e9565b61010561015736600461080e565b6102ab565b61011961016a366004610874565b6001600160a01b031660009081526020819052604090205490565b6100dc6102cd565b61010561019b36600461080e565b6102dc565b6101056101ae36600461080e565b61035c565b6101c66101c1366004610896565b61036a565b005b6101196101d63660046108c2565b610378565b6060600380546101ea906108ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610216906108ec565b80156102635780601f1061023857610100808354040283529160200191610263565b820191906000526020600020905b81548152906001019060200180831161024657829003601f168201915b5050505050905090565b60003361027b8185856103a3565b60019150505b92915050565b6000336102958582856104c7565b6102a0858585610541565b506001949350505050565b60003361027b8185856102be8383610378565b6102c89190610926565b6103a3565b6060600480546101ea906108ec565b600033816102ea8286610378565b90508381101561034f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102a082868684036103a3565b60003361027b818585610541565b61037481836106e5565b5050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104055760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610346565b6001600160a01b0382166104665760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610346565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104d38484610378565b9050600019811461053b578181101561052e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610346565b61053b84848484036103a3565b50505050565b6001600160a01b0383166105a55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610346565b6001600160a01b0382166106075760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610346565b6001600160a01b0383166000908152602081905260409020548181101561067f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610346565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361053b565b6001600160a01b03821661073b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610346565b806002600082825461074d9190610926565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b818110156107d1578581018301518582016040015282016107b5565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461080957600080fd5b919050565b6000806040838503121561082157600080fd5b61082a836107f2565b946020939093013593505050565b60008060006060848603121561084d57600080fd5b610856846107f2565b9250610864602085016107f2565b9150604084013590509250925092565b60006020828403121561088657600080fd5b61088f826107f2565b9392505050565b600080604083850312156108a957600080fd5b823591506108b9602084016107f2565b90509250929050565b600080604083850312156108d557600080fd5b6108de836107f2565b91506108b9602084016107f2565b600181811c9082168061090057607f821691505b60208210810361092057634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561028157634e487b7160e01b600052601160045260246000fdfea2646970667358221220f32d3244b0bfca199b5303475cd254e57c43ac5f79386d65fc9b68b805e0e6ca64736f6c63430008130033",
    "sourceMap": "128:301:52:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98:39;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4444:197;;;;;;:::i;:::-;;:::i;:::-;;;1169:14:79;;1162:22;1144:41;;1132:2;1117:18;4444:197:39;1004:187:79;3255:106:39;3342:12;;3255:106;;;1342:25:79;;;1330:2;1315:18;3255:106:39;1196:177:79;5203:256:39;;;;;;:::i;:::-;;:::i;3104:91::-;;;3186:2;1853:36:79;;1841:2;1826:18;3104:91:39;1711:184:79;5854:234:39;;;;;;:::i;:::-;;:::i;3419:125::-;;;;;;:::i;:::-;-1:-1:-1;;;;;3519:18:39;3493:7;3519:18;;;;;;;;;;;;3419:125;2369:102;;;:::i;6575:427::-;;;;;;:::i;:::-;;:::i;3740:189::-;;;;;;:::i;:::-;;:::i;270:91:52:-;;;;;;:::i;:::-;;:::i;:::-;;3987:149:39;;;;;;:::i;:::-;;:::i;2158:98::-;2212:13;2244:5;2237:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98;:::o;4444:197::-;4527:4;719:10:43;4581:32:39;719:10:43;4597:7:39;4606:6;4581:8;:32::i;:::-;4630:4;4623:11;;;4444:197;;;;;:::o;5203:256::-;5300:4;719:10:43;5356:38:39;5372:4;719:10:43;5387:6:39;5356:15;:38::i;:::-;5404:27;5414:4;5420:2;5424:6;5404:9;:27::i;:::-;-1:-1:-1;5448:4:39;;5203:256;-1:-1:-1;;;;5203:256:39:o;5854:234::-;5942:4;719:10:43;5996:64:39;719:10:43;6012:7:39;6049:10;6021:25;719:10:43;6012:7:39;6021:9;:25::i;:::-;:38;;;;:::i;:::-;5996:8;:64::i;2369:102::-;2425:13;2457:7;2450:14;;;;;:::i;6575:427::-;6668:4;719:10:43;6668:4:39;6749:25;719:10:43;6766:7:39;6749:9;:25::i;:::-;6722:52;;6812:15;6792:16;:35;;6784:85;;;;-1:-1:-1;;;6784:85:39;;3429:2:79;6784:85:39;;;3411:21:79;3468:2;3448:18;;;3441:30;3507:34;3487:18;;;3480:62;-1:-1:-1;;;3558:18:79;;;3551:35;3603:19;;6784:85:39;;;;;;;;;6903:60;6912:5;6919:7;6947:15;6928:16;:34;6903:8;:60::i;3740:189::-;3819:4;719:10:43;3873:28:39;719:10:43;3890:2:39;3894:6;3873:9;:28::i;270:91:52:-;335:19;341:3;346:7;335:5;:19::i;:::-;270:91;;:::o;3987:149:39:-;-1:-1:-1;;;;;4102:18:39;;;4076:7;4102:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3987:149::o;10457:340::-;-1:-1:-1;;;;;10558:19:39;;10550:68;;;;-1:-1:-1;;;10550:68:39;;3835:2:79;10550:68:39;;;3817:21:79;3874:2;3854:18;;;3847:30;3913:34;3893:18;;;3886:62;-1:-1:-1;;;3964:18:79;;;3957:34;4008:19;;10550:68:39;3633:400:79;10550:68:39;-1:-1:-1;;;;;10636:21:39;;10628:68;;;;-1:-1:-1;;;10628:68:39;;4240:2:79;10628:68:39;;;4222:21:79;4279:2;4259:18;;;4252:30;4318:34;4298:18;;;4291:62;-1:-1:-1;;;4369:18:79;;;4362:32;4411:19;;10628:68:39;4038:398:79;10628:68:39;-1:-1:-1;;;;;10707:18:39;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10758:32;;1342:25:79;;;10758:32:39;;1315:18:79;10758:32:39;;;;;;;10457:340;;;:::o;11078:411::-;11178:24;11205:25;11215:5;11222:7;11205:9;:25::i;:::-;11178:52;;-1:-1:-1;;11244:16:39;:37;11240:243;;11325:6;11305:16;:26;;11297:68;;;;-1:-1:-1;;;11297:68:39;;4643:2:79;11297:68:39;;;4625:21:79;4682:2;4662:18;;;4655:30;4721:31;4701:18;;;4694:59;4770:18;;11297:68:39;4441:353:79;11297:68:39;11407:51;11416:5;11423:7;11451:6;11432:16;:25;11407:8;:51::i;:::-;11168:321;11078:411;;;:::o;7456:788::-;-1:-1:-1;;;;;7552:18:39;;7544:68;;;;-1:-1:-1;;;7544:68:39;;5001:2:79;7544:68:39;;;4983:21:79;5040:2;5020:18;;;5013:30;5079:34;5059:18;;;5052:62;-1:-1:-1;;;5130:18:79;;;5123:35;5175:19;;7544:68:39;4799:401:79;7544:68:39;-1:-1:-1;;;;;7630:16:39;;7622:64;;;;-1:-1:-1;;;7622:64:39;;5407:2:79;7622:64:39;;;5389:21:79;5446:2;5426:18;;;5419:30;5485:34;5465:18;;;5458:62;-1:-1:-1;;;5536:18:79;;;5529:33;5579:19;;7622:64:39;5205:399:79;7622:64:39;-1:-1:-1;;;;;7768:15:39;;7746:19;7768:15;;;;;;;;;;;7801:21;;;;7793:72;;;;-1:-1:-1;;;7793:72:39;;5811:2:79;7793:72:39;;;5793:21:79;5850:2;5830:18;;;5823:30;5889:34;5869:18;;;5862:62;-1:-1:-1;;;5940:18:79;;;5933:36;5986:19;;7793:72:39;5609:402:79;7793:72:39;-1:-1:-1;;;;;7899:15:39;;;:9;:15;;;;;;;;;;;7917:20;;;7899:38;;8114:13;;;;;;;;;;:23;;;;;;8163:26;;1342:25:79;;;8114:13:39;;8163:26;;1315:18:79;8163:26:39;;;;;;;8200:37;12073:91;8520:535;-1:-1:-1;;;;;8603:21:39;;8595:65;;;;-1:-1:-1;;;8595:65:39;;6218:2:79;8595:65:39;;;6200:21:79;6257:2;6237:18;;;6230:30;6296:33;6276:18;;;6269:61;6347:18;;8595:65:39;6016:355:79;8595:65:39;8747:6;8731:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8899:18:39;;:9;:18;;;;;;;;;;;:28;;;;;;8952:37;1342:25:79;;;8952:37:39;;1315:18:79;8952:37:39;;;;;;;270:91:52;;:::o;14:548:79:-;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;553:2;546;542:7;537:2;529:6;525:15;521:29;510:9;506:45;502:54;494:62;;;;14:548;;;;:::o;567:173::-;635:20;;-1:-1:-1;;;;;684:31:79;;674:42;;664:70;;730:1;727;720:12;664:70;567:173;;;:::o;745:254::-;813:6;821;874:2;862:9;853:7;849:23;845:32;842:52;;;890:1;887;880:12;842:52;913:29;932:9;913:29;:::i;:::-;903:39;989:2;974:18;;;;961:32;;-1:-1:-1;;;745:254:79:o;1378:328::-;1455:6;1463;1471;1524:2;1512:9;1503:7;1499:23;1495:32;1492:52;;;1540:1;1537;1530:12;1492:52;1563:29;1582:9;1563:29;:::i;:::-;1553:39;;1611:38;1645:2;1634:9;1630:18;1611:38;:::i;:::-;1601:48;;1696:2;1685:9;1681:18;1668:32;1658:42;;1378:328;;;;;:::o;1900:186::-;1959:6;2012:2;2000:9;1991:7;1987:23;1983:32;1980:52;;;2028:1;2025;2018:12;1980:52;2051:29;2070:9;2051:29;:::i;:::-;2041:39;1900:186;-1:-1:-1;;;1900:186:79:o;2091:254::-;2159:6;2167;2220:2;2208:9;2199:7;2195:23;2191:32;2188:52;;;2236:1;2233;2226:12;2188:52;2272:9;2259:23;2249:33;;2301:38;2335:2;2324:9;2320:18;2301:38;:::i;:::-;2291:48;;2091:254;;;;;:::o;2350:260::-;2418:6;2426;2479:2;2467:9;2458:7;2454:23;2450:32;2447:52;;;2495:1;2492;2485:12;2447:52;2518:29;2537:9;2518:29;:::i;:::-;2508:39;;2566:38;2600:2;2589:9;2585:18;2566:38;:::i;2615:380::-;2694:1;2690:12;;;;2737;;;2758:61;;2812:4;2804:6;2800:17;2790:27;;2758:61;2865:2;2857:6;2854:14;2834:18;2831:38;2828:161;;2911:10;2906:3;2902:20;2899:1;2892:31;2946:4;2943:1;2936:15;2974:4;2971:1;2964:15;2828:161;;2615:380;;;:::o;3000:222::-;3065:9;;;3086:10;;;3083:133;;;3138:10;3133:3;3129:20;3126:1;3119:31;3173:4;3170:1;3163:15;3201:4;3198:1;3191:15",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "decimals()": "313ce567",
    "decreaseAllowance(address,uint256)": "a457c2d7",
    "faucet(uint256,address)": "d0064aea",
    "increaseAllowance(address,uint256)": "39509351",
    "name()": "06fdde03",
    "symbol()": "95d89b41",
    "test()": "f8a8fd6d",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"faucet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"test\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Mocks/MockToken.sol\":\"MockToken\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@chainlink/=lib/@chainlink/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df\",\"dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"src/Mocks/MockToken.sol\":{\"keccak256\":\"0x0cbfc284f96c5fb364ece81d69d399f3327d8f668226393566a6f7d91024a00a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f39772a1e238edaf06f0e6e8916069632f7d51519f20518f81b5df50679e206d\",\"dweb:/ipfs/QmcB6RQvzbb6aPjKUvSTvrBuVCuRN7TjxLyLLEeH73JCWM\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "faucet"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "test"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "allowance(address,address)": {
            "details": "See {IERC20-allowance}."
          },
          "approve(address,uint256)": {
            "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
          },
          "balanceOf(address)": {
            "details": "See {IERC20-balanceOf}."
          },
          "decimals()": {
            "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
          },
          "decreaseAllowance(address,uint256)": {
            "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
          },
          "increaseAllowance(address,uint256)": {
            "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
          },
          "name()": {
            "details": "Returns the name of the token."
          },
          "symbol()": {
            "details": "Returns the symbol of the token, usually a shorter version of the name."
          },
          "totalSupply()": {
            "details": "See {IERC20-totalSupply}."
          },
          "transfer(address,uint256)": {
            "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
          },
          "transferFrom(address,address,uint256)": {
            "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        ":@chainlink/=lib/@chainlink/",
        ":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",
        ":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        ":ds-test/=lib/forge-std/lib/ds-test/src/",
        ":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        ":forge-std/=lib/forge-std/src/",
        ":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
        ":openzeppelin-contracts/=lib/openzeppelin-contracts/",
        ":openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/Mocks/MockToken.sol": "MockToken"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b",
        "urls": [
          "bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df",
          "dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca",
        "urls": [
          "bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd",
          "dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        "urls": [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
        ],
        "license": "MIT"
      },
      "src/Mocks/MockToken.sol": {
        "keccak256": "0x0cbfc284f96c5fb364ece81d69d399f3327d8f668226393566a6f7d91024a00a",
        "urls": [
          "bzz-raw://f39772a1e238edaf06f0e6e8916069632f7d51519f20518f81b5df50679e206d",
          "dweb:/ipfs/QmcB6RQvzbb6aPjKUvSTvrBuVCuRN7TjxLyLLEeH73JCWM"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/Mocks/MockToken.sol",
    "id": 34297,
    "exportedSymbols": {
      "Context": [
        32618
      ],
      "ERC20": [
        32163
      ],
      "IERC20": [
        32241
      ],
      "IERC20Metadata": [
        32266
      ],
      "MockToken": [
        34296
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:398:52",
    "nodes": [
      {
        "id": 34263,
        "nodeType": "PragmaDirective",
        "src": "32:24:52",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 34264,
        "nodeType": "ImportDirective",
        "src": "58:68:52",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
        "file": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 34297,
        "sourceUnit": 32164,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 34296,
        "nodeType": "ContractDefinition",
        "src": "128:301:52",
        "nodes": [
          {
            "id": 34278,
            "nodeType": "FunctionDefinition",
            "src": "162:102:52",
            "nodes": [],
            "body": {
              "id": 34277,
              "nodeType": "Block",
              "src": "262:2:52",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 34273,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34268,
                    "src": "246:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "id": 34274,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34270,
                    "src": "253:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 34275,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 34272,
                  "name": "ERC20",
                  "nameLocations": [
                    "240:5:52"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 32163,
                  "src": "240:5:52"
                },
                "nodeType": "ModifierInvocation",
                "src": "240:21:52"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 34271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34268,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "197:5:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 34278,
                  "src": "183:19:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34267,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "183:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34270,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "226:7:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 34278,
                  "src": "212:21:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34269,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "173:66:52"
            },
            "returnParameters": {
              "id": 34276,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "262:0:52"
            },
            "scope": 34296,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 34291,
            "nodeType": "FunctionDefinition",
            "src": "270:91:52",
            "nodes": [],
            "body": {
              "id": 34290,
              "nodeType": "Block",
              "src": "325:36:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34286,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34282,
                        "src": "341:3:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 34287,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34280,
                        "src": "346:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34285,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31980,
                      "src": "335:5:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "335:19:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34289,
                  "nodeType": "ExpressionStatement",
                  "src": "335:19:52"
                }
              ]
            },
            "functionSelector": "d0064aea",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "faucet",
            "nameLocation": "279:6:52",
            "parameters": {
              "id": 34283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34280,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "294:7:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 34291,
                  "src": "286:15:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34279,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "286:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34282,
                  "mutability": "mutable",
                  "name": "_to",
                  "nameLocation": "311:3:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 34291,
                  "src": "303:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34281,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:7:52",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "285:30:52"
            },
            "returnParameters": {
              "id": 34284,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "325:0:52"
            },
            "scope": 34296,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34295,
            "nodeType": "FunctionDefinition",
            "src": "400:27:52",
            "nodes": [],
            "body": {
              "id": 34294,
              "nodeType": "Block",
              "src": "425:2:52",
              "nodes": [],
              "statements": []
            },
            "functionSelector": "f8a8fd6d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "test",
            "nameLocation": "409:4:52",
            "parameters": {
              "id": 34292,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "413:2:52"
            },
            "returnParameters": {
              "id": 34293,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "425:0:52"
            },
            "scope": 34296,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 34265,
              "name": "ERC20",
              "nameLocations": [
                "150:5:52"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 32163,
              "src": "150:5:52"
            },
            "id": 34266,
            "nodeType": "InheritanceSpecifier",
            "src": "150:5:52"
          }
        ],
        "canonicalName": "MockToken",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          34296,
          32163,
          32266,
          32241,
          32618
        ],
        "name": "MockToken",
        "nameLocation": "137:9:52",
        "scope": 34297,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 52
} as const;