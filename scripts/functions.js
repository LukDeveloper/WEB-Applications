var nos = [
  "Instituto Canção Nova", //1
  "Pizzaria do Renato", //2
  "Padaria Bom Jesus", //3
  "Praça Prado Filho", //4
  "Sorveteria Tio João", //5
  "Chiquinho Sorvetes", //6
  "Rodoviário Velho", //7
  "Estação", //8
  "Copa de Marcha", //9
  "Parque Ecológico", //10
  "Mercearia Amorim", //11
  "Mirante", //12
  "Estatua", //13
  "Cervejaria", //14
  "Clube Literário", //15
  "INPE", //16
  "Praça do Parque", //17
  "CPTEC", //18
  "Rodoviário Nova", //19
  "Bar do Araujo", //20
];

var grafo = [
  ["Rodoviário Velho"],
  ["Padaria Bom Jesus", "Chiquinho Sorvetes"],
  [
    "Rodoviário Velho",
    "Parque Ecológico",
    "Praça Prado Filho",
    "Pizzaria do Renato",
  ],
  [
    "Padaria Bom Jesus",
    "Parque Ecológico",
    "Sorveteria Tio João",
    "Chiquinho Sorvetes",
    "Bar do Araujo",
  ],
  ["Praça Prado Filho", "Parque Ecológico", "Chiquinho Sorvetes"],
  [
    "Pizzaria do Renato",
    "Praça Prado Filho",
    "Sorveteria Tio João",
    "Bar do Araujo",
    "Clube Literário",
  ],
  ["Instituto Canção Nova", "Estação", "Parque Ecológico", "Padaria Bom Jesus"],
  ["Rodoviário Velho", "Parque Ecológico"],
  ["Parque Ecológico", "Mercearia Amorim", "Cervejaria"],
  [
    "Estação",
    "Rodoviário Velho",
    "Padaria Bom Jesus",
    "Praça Prado Filho",
    "Sorveteria Tio João",
    "Copa de Marcha",
  ],
  ["Copa de Marcha", "Mirante", "Cervejaria"],
  ["Mercearia Amorim", "Cervejaria", "Estatua"],
  ["Mirante", "Cervejaria"],
  ["Copa de Marcha", "Mercearia Amorim", "Mirante", "Estatua"],
  ["Chiquinho Sorvetes", "INPE", "Rodoviário Nova", "Praça do Parque"],
  ["Clube Literário", "CPTEC", "Rodoviário Nova"],
  ["Clube Literário", "Rodoviário Nova"],
  ["INPE"],
  ["INPE", "Clube Literário", "Praça do Parque"],
  ["Praça Prado Filho", "Chiquinho Sorvetes"],
];

var grafo1 = [
  ["Rodoviário Velho"],
  ["Chiquinho Sorvetes", "Padaria Bom Jesus"],
  [
    "Pizzaria do Renato",
    "Praça Prado Filho",
    "Parque Ecológico",
    "Rodoviário Velho",
  ],
  [
    "Bar do Araujo",
    "Chiquinho Sorvetes",
    "Sorveteria Tio João",
    "Parque Ecológico",
    "Padaria Bom Jesus",
  ],
  ["Chiquinho Sorvetes", "Parque Ecológico", "Praça Prado Filho"],
  [
    "Clube Literário",
    "Bar do Araujo",
    "Sorveteria Tio João",
    "Praça Prado Filho",
    "Pizzaria do Renato",
  ],
  ["Padaria Bom Jesus", "Parque Ecológico", "Estação", "Instituto Canção Nova"],
  ["Parque Ecológico", "Rodoviário Velho"],
  ["Cervejaria", "Mercearia Amorim", "Parque Ecológico"],
  [
    "Copa de Marcha",
    "Sorveteria Tio João",
    "Praça Prado Filho",
    "Padaria Bom Jesus",
    "Rodoviário Velho",
    "Estação",
  ],
  ["Cervejaria", "Mirante", "Copa de Marcha"],
  ["Estatua", "Cervejaria", "Mercearia Amorim"],
  ["Cervejaria", "Mirante"],
  ["Estatua", "Mirante", "Mercearia Amorim", "Copa de Marcha"],
  ["Praça do Parque", "Rodoviário Nova", "INPE", "Chiquinho Sorvetes"],
  ["Rodoviário Nova", "CPTEC", "Clube Literário"],
  ["Rodoviário Nova", "Clube Literário"],
  ["INPE"],
  ["Praça do Parque", "Clube Literário", "INPE"],
  ["Chiquinho Sorvetes", "Praça Prado Filho"],
];

grafoPon = [
  [["Rodoviário Velho", 7]],
  [
    ["Padaria Bom Jesus", 2],
    ["Chiquinho Sorvetes", 4],
  ],
  [
    ["Rodoviário Velho", 4],
    ["Parque Ecológico", 7],
    ["Praça Prado Filho", 3],
    ["Pizzaria do Renato", 2],
  ],
  [
    ["Padaria Bom Jesus", 3],
    ["Parque Ecológico", 6],
    ["Sorveteria Tio João", 1],
    ["Chiquinho Sorvetes", 1],
    ["Bar do Araujo", 14],
  ],
  [
    ["Praça Prado Filho", 1],
    ["Parque Ecológico", 6],
    ["Chiquinho Sorvetes", 1],
  ],
  [
    ["Pizzaria do Renato", 2],
    ["Praça Prado Filho", 4],
    ["Sorveteria Tio João", 1],
    ["Bar do Araujo", 14],
    ["Clube Literário", 5],
  ],
  [
    ["Instituto Canção Nova", 7],
    ["Estação", 4],
    ["Parque Ecológico", 6],
    ["Padaria Bom Jesus", 4],
  ],
  [
    ["Rodoviário Velho", 4],
    ["Parque Ecológico", 5],
  ],
  [
    ["Parque Ecológico", 1],
    ["Mercearia Amorim", 10],
    ["Cervejaria", 5],
  ],
  [
    ["Estação", 5],
    ["Rodoviário Velho", 6],
    ["Padaria Bom Jesus", 7],
    ["Praça Prado Filho", 6],
    ["Sorveteria Tio João", 6],
    ["Copa de Marcha", 1],
  ],
  [
    ["Copa de Marcha", 10],
    ["Cervejaria", 8],
    ["Mirante", 7],
  ],
  [
    ["Mercearia Amorim", 7],
    ["Cervejaria", 14],
    ["Estatua", 1],
  ],
  [
    ["Mirante", 1],
    ["Cervejaria", 14],
  ],
  [
    ["Copa de Marcha", 5],
    ["Mercearia Amorim", 8],
    ["Mirante", 14],
    ["Estatua", 14],
  ],
  [
    ["Chiquinho Sorvetes", 5],
    ["INPE", 15],
    ["Rodoviário Nova", 6],
    ["Praça do Parque", 6],
  ],
  [
    ["Clube Literário", 15],
    ["CPTEC", 17],
    ["Rodoviário Nova", 10],
  ],
  [
    ["Clube Literário", 6],
    ["Rodoviário Nova", 3],
  ],
  [["INPE", 17]],
  [
    ["INPE", 10],
    ["Clube Literário", 6],
    ["Praça do Parque", 3],
  ],
  [
    ["Praça Prado Filho", 14],
    ["Chiquinho Sorvetes", 14],
  ],
];

///Primeira Parte
class Node {
  constructor(p, v, n) {
    this.pai = p;
    this.valor = v;
    this.nivel = n;
    this.anterior = null;
    this.proximo = null;
  }
}

class Lista {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insereUltimo(v, n, p) {
    let novoNode = new Node(p, v, n);

    if (this.head == null) {
      this.head = novoNode;
    } else {
      this.tail.proximo = novoNode;
      novoNode.anterior = this.tail;
    }
    this.tail = novoNode;
  }

  deletaPrimeiro() {
    if (this.head == null) {
      return null;
    } else {
      let no = this.head;
      this.head = this.head.proximo;
      if (this.head != null) {
        this.head.anterior = null;
      } else {
        this.tail = null;
      }
      return no;
    }
  }

  deletaUltimo() {
    if (this.tail == null) {
      return null;
    } else {
      let no = this.tail;
      this.tail = this.tail.anterior;
      if (this.tail != null) {
        this.tail.proximo = null;
      } else {
        this.head = null;
      }
      return no;
    }
  }

  vazio() {
    if (this.head == null) {
      return true;
    } else {
      return false;
    }
  }

  exibeArvore() {
    let atual = this.tail;
    let caminho = [];
    let index = 0;
    while (atual.pai != null) {
      caminho[index] = atual.valor;
      index++;
      atual = atual.pai;
    }
    caminho[index] = atual.valor;
    return caminho;
  }

  exibeArvore1(q) {
    let atual = this.head;
    console.log(q);
    while (q != atual.valor) {
      atual = atual.proximo;
    }
    let caminho = [];
    atual = atual.pai;
    let index = 0;
    while (atual.pai != null) {
      caminho[index] = atual.valor;
      index++;
      atual = atual.pai;
    }
    caminho[index] = atual.valor;
    return caminho;
  }

  primeiro() {
    return this.head;
  }

  ultimo() {
    return this.tail;
  }
}

class Busca {
  amplitude(inicio, fim) {
    let l1 = new Lista();
    let l2 = new Lista();
    let visitado = [];

    l1.insereUltimo(inicio, 0, null);
    l2.insereUltimo(inicio, 0, null);
    let linha = [];
    linha[0] = inicio;
    linha[1] = 0;
    visitado[0] = linha;

    let atual = null,
      ind = 0,
      novo = null,
      flag = true,
      x = 1;
    let flag1 = false;
    while (l1.vazio() != null && flag1 == false) {
      atual = l1.deletaPrimeiro();
      ind = nos.indexOf(atual.valor);
      for (let i = 0; i < grafo[ind].length; i++) {
        novo = grafo[ind][i];
        flag = true;
        for (let j = 0; j < visitado.length; j++) {
          if (visitado[j][0] == fim) {
            flag = false;
            break;
          }
        }
        if (flag) {
          l1.insereUltimo(novo, atual.nivel + 1, atual);
          l2.insereUltimo(novo, atual.nivel + 1, atual);
          linha = [];
          linha[0] = novo;
          linha[1] = atual.nivel + 1;
          visitado[x] = linha;
          x++;
          if (novo == fim) {
            flag1 = true;
          }
        }
      }
    }
    let caminho = [];
    if (flag1) {
      caminho = l2.exibeArvore();
    } else {
      caminho = "Caminho não encontrado";
    }
    return caminho;
  }

  profundidade(inicio, fim) {
    let l1 = new Lista();
    let l2 = new Lista();
    let visitado = [];

    l1.insereUltimo(inicio, 0, null);
    l2.insereUltimo(inicio, 0, null);
    let linha = [];
    linha[0] = inicio;
    linha[1] = 0;
    visitado[0] = linha;

    let atual = null,
      ind = 0,
      novo = null,
      flag = true,
      x = 1,
      flag1 = false;
    while (l1.vazio() != true) {
      atual = l1.deletaUltimo();
      ind = nos.indexOf(atual.valor);
      for (let i = grafo[ind].length - 1; i >= 0; i--) {
        novo = grafo[ind][i];
        flag = true;
        for (let j = 0; j < visitado.length; j++) {
          if (visitado[j][0] == novo) {
            if (visitado[j][1] <= atual.nivel + 1) {
              flag = false;
            } else {
              visitado[j][1] = atual.nivel + 1;
            }
            break;
          }
        }

        if (flag) {
          l1.insereUltimo(novo, atual.nivel + 1, atual);
          l2.insereUltimo(novo, atual.nivel + 1, atual);
          linha = [];
          linha[0] = novo;
          linha[1] = atual.nivel + 1;
          visitado[x] = linha;
          x++;
          console.log(novo);
          if (novo == fim) {
            let caminho = [];
            caminho = l2.exibeArvore();
            return caminho;
          }
        }
      }
    }
    return "Caminho não encontrado";
  }

  profundidadeLimitada(inicio, fim, limite) {
    let l1 = new Lista();
    let l2 = new Lista();
    let visitado = [];

    l1.insereUltimo(inicio, 0, null);
    l2.insereUltimo(inicio, 0, null);
    let linha = [];
    linha[0] = inicio;
    linha[1] = 0;
    visitado[0] = linha;

    let atual = null,
      ind = 0,
      novo = null,
      flag = true,
      x = 1,
      flag1 = false;
    while (l1.vazio() != true) {
      atual = l1.deletaUltimo();
      if (atual.nivel < limite) {
        ind = nos.indexOf(atual.valor);
        for (let i = grafo[ind].length - 1; i >= 0; i--) {
          novo = grafo[ind][i];
          flag = true;
          for (let j = 0; j < visitado.length; j++) {
            if (visitado[j][0] == novo) {
              if (visitado[j][1] <= atual.nivel + 1) {
                flag = false;
              } else {
                visitado[j][1] = atual.nivel + 1;
              }
              break;
            }
          }

          if (flag) {
            l1.insereUltimo(novo, atual.nivel + 1, atual);
            l2.insereUltimo(novo, atual.nivel + 1, atual);
            linha = [];
            linha[0] = novo;
            linha[1] = atual.nivel + 1;
            visitado[x] = linha;
            x++;
            //console.log(novo);
            if (novo == fim) {
              let caminho = [];
              caminho = l2.exibeArvore();
              return caminho;
            }
          }
        }
      } else {
        alert("Caminho não encontrado - limite = " + limite);
        break;
      }
    }
  }

  aprofundamentoIterativo(inicio, fim, l_max) {
    for (var limite = 0; limite <= l_max; limite++) {
      let l1 = new Lista();
      let l2 = new Lista();
      let visitado = [];

      l1.insereUltimo(inicio, 0, null);
      l2.insereUltimo(inicio, 0, null);
      let linha = [];
      linha[0] = inicio;
      linha[1] = 0;
      visitado[0] = linha;

      let atual = null,
        ind = 0,
        novo = null,
        flag = true,
        x = 1,
        flag1 = false;
      while (l1.vazio() != true) {
        atual = l1.deletaUltimo();
        if (atual.nivel < limite) {
          ind = nos.indexOf(atual.valor);
          for (let i = grafo[ind].length - 1; i >= 0; i--) {
            novo = grafo[ind][i];
            flag = true;
            for (let j = 0; j < visitado.length; j++) {
              if (visitado[j][0] == novo) {
                if (visitado[j][1] <= atual.nivel + 1) {
                  flag = false;
                } else {
                  visitado[j][1] = atual.nivel + 1;
                }
                break;
              }
            }

            if (flag) {
              l1.insereUltimo(novo, atual.nivel + 1, atual);
              l2.insereUltimo(novo, atual.nivel + 1, atual);
              linha = [];
              linha[0] = novo;
              linha[1] = atual.nivel + 1;
              visitado[x] = linha;
              x++;
              //console.log(novo);
              if (novo == fim) {
                let caminho = [];
                caminho = l2.exibeArvore();
                return caminho;
              }
            }
          }
        }
      }
    }
    alert("Caminho não encontrado - limite = " + limite);
  }

  bidirecional(inicio, fim) {
    let l1 = new Lista();
    let l2 = new Lista();

    let l3 = new Lista();
    let l4 = new Lista();
    let visitado = [];

    l1.insereUltimo(inicio, 0, null);
    l2.insereUltimo(inicio, 0, null);
    let linha = [];
    linha[0] = inicio;
    linha[1] = 1;
    visitado[0] = linha;

    l3.insereUltimo(fim, 0, null);
    l4.insereUltimo(fim, 0, null);
    linha = [];
    linha[0] = fim;
    linha[1] = 2;
    visitado[0] = linha;
    while (true) {
      let atual = null,
        ind = 0,
        novo = null,
        x = 1;
      let flag1 = true;
      let flag2 = null;
      let flag3 = null;

      while (flag1 == true) {
        atual = l1.deletaPrimeiro();

        ind = nos.indexOf(atual.valor);
        //console.log(ind);
        for (let i = 0; i < grafo[ind].length; i++) {
          novo = grafo[ind][i];
          flag2 = true;
          flag3 = false;
          for (let j = 0; j < visitado.length; j++) {
            if (visitado[j][0] == novo) {
              if (visitado[j][1] == 1) {
                flag2 = false;
              } else {
                flag3 = true;
                break;
              }
            }
          }
          if (flag2) {
            l1.insereUltimo(novo, atual.nivel + 1, atual);
            l2.insereUltimo(novo, atual.nivel + 1, atual);

            if (flag3) {
              let caminho = [];
              caminho = l2.exibeArvore();
              caminho.concat(caminho.reverse());
              caminho.push(l4.exibeArvore1(novo));
              return caminho;
            } else {
              linha = [];
              linha[0] = novo;
              linha[1] = 1;
              visitado[x] = linha;
              x++;
            }
          }
        }
        if (l1.vazio() != true) {
          let aux = l1.primeiro();
          if (aux.nivel == atual.nivel) {
            flag1 = true;
          } else {
            flag1 = false;
          }
        }
      }

      // execução do 2º Amplitude
      flag1 = true;
      while (flag1) {
        atual = l3.deletaPrimeiro();
        if (atual == null) {
          break;
        }
        ind = nos.indexOf(atual.valor);
        for (let i = 0; i < grafo[ind].length; i++) {
          novo = grafo[ind][i];
          flag2 = true;
          flag3 = false;
          for (let j = 0; j < visitado.length; j++) {
            if (visitado[j][0] == novo) {
              if (visitado[j][1] == 2) {
                flag2 = false;
              } else {
                flag3 = true;
                break;
              }
            }
          }
          if (flag2) {
            l3.insereUltimo(novo, atual.nivel + 1, atual);
            l4.insereUltimo(novo, atual.nivel + 1, atual);

            if (flag3) {
              let caminho1 = [];
              caminho1 = l4.exibeArvore();
              caminho1.concat(caminho1.reverse());
              caminho1.concat(l2.exibeArvore1(novo));
              return caminho1;
            } else {
              linha = [];
              linha[0] = novo;
              linha[1] = 2;
              visitado[x] = linha;
              x++;
            }
          }
        }
        if (l3.vazio() != true) {
          let aux = l3.primeiro();
          if (atual.nivel == aux.nivel) {
            flag1 = true;
          } else {
            flag1 = false;
          }
        }
      }
    }
  }
}