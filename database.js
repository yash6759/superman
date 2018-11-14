var mongoose =  require ( ' mangusto ' )
var Esquema =  mangusto . Esquema
mangusto . connect ( banco de dados process . env . , {useNewUrlParser : true }, ( err ) => { 
  se (err) retornar o  console . log ( ' Erro ao conectar nenhum banco de dados! ' )
  console . log ( ' Conectado ao BANCO DE DADOS! ' )
})

var Usuário =  novo  esquema ({
  _id : {
    type :  String
  }
  level : {
    tipo :  Number ,
    padrão :  0
  }
  xp : {
    tipo :  Number ,
    padrão :  0
  }
  moedas : {
    tipo :  Number ,
    padrão :  0
  }
  sobre : {
    tipo :  String ,
    padrão :  ' Use z! sobremim para poder alterar está mensagem. '
  }
  rep : {
    tipo :  Number ,
    padrão :  0
  }
  caixas : {
    tipo :  Array ,
    padrão : []
  }
  background : {
    tipo :  String ,
    padrão :  ' https://i.imgur.com/CJ8fmrT.png '
  }
  vip : {
    tipo :  booleano ,
    padrão :  false
  }
  dev : {
    tipo :  booleano ,
    padrão :  false
  }
  sup : {
    tipo :  booleano ,
    padrão :  false
  }
  dzn : {
    tipo :  booleano ,
    padrão :  false
  }
  owner : {
    tipo :  booleano ,
    padrão :  false
  }
  subowner : {
    tipo :  booleano ,
    padrão :  false
  }
  ban : {
    tipo :  booleano ,
    padrão :  false
  }
  timevip : {
    tipo :  String ,
    padrão :  ' 0000000000000 '
  }
  timedaily : {
    tipo :  String ,
    padrão :  ' 0000000000000 '
  }
  timerep : {
    tipo :  String ,
    padrão :  ' 0000000000000 '
  }
})

var Guild =  new  Schema ({
  _id : {
    type :  String
  }
  prefixo : {
    tipo :  String ,
    padrão :  ' z! '
  }
  lang : {
    tipo :  String ,
    padrão :  ' pt-BR '
  }
  bem - vindo : {
    tipo :  booleano ,
    padrão :  false
  }
  welcomechannel : {
    tipo :  String ,
    padrão :  ' nenhum '
  }
  welcomemsg : {
    tipo :  String ,
    padrão :  ' nenhuma '
  }
  byebye : {
    tipo :  booleano ,
    padrão :  false
  }
  byebyechannel : {
    tipo :  String ,
    padrão :  ' nenhum '
  }
  byebyemsg : {
    tipo :  String ,
    padrão :  ' nenhuma '
  }
  autorole : {
    tipo :  booleano ,
    padrão :  false
  }
  autoroleid : {
    tipo :  String ,
    dafault :  ' Nenhum '
  }
  logs : {
    tipo :  booleano ,
    padrão :  false
  }
  logschannel : {
    tipo :  String ,
    dafault :  ' Nenhum '
  }
  níveis : {
    tipo :  booleano ,
    padrão :  true
  }
  moedas : {
    tipo :  booleano ,
    padrão :  true
  }
  box : {
    tipo :  booleano ,
    padrão :  true
  }
  roleshop : {
    tipo :  booleano ,
    padrão :  false
  }
  caixa : {
    tipo :  booleano ,
    padrão :  false
  }
  caixatipo : {
    tipo :  String ,
    padrão :  ' Comum '
  }
  links : {
    tipo :  booleano ,
    padrão :  false
  }
  convida : {
    tipo :  booleano ,
    padrão :  false
  }
  palavras : {
    tipo :  Array ,
    padrão : []
  }
  customcmd : {
    tipo :  Array ,
    padrão : []
  }
  customfun : {
    tipo :  Array ,
    padrão : []
  }
  customresposta : {
    tipo :  Array ,
    padrão : []
  }
  cargos : {
    tipo :  Array ,
    padrão : []
  }
  cargospreço : {
    tipo :  Array ,
    padrão : []
  }
  cargosmsg : {
    tipo :  booleano ,
    padrão :  false
  }
  blackchannels : {
    tipo :  Array ,
    padrão : []
  }
  blackcmds : {
    tipo :  Array ,
    padrão : []
  }
})

var Athena =  new  Schema ({
  _id : {
    type :  String
  }
  respostas : {
    tipo :  Array ,
    padrão : []
  }
})

var Comando =  new  Schema ({
  _id : {
    type :  String
  }
  usos : {
    tipo :  Number ,
    padrão :  0
  }
  manutenção : {
    tipo :  booleano ,
    padrão :  false
  }
  lastError : {
    tipo :  String ,
    padrão :  " nenhum "
  }
})

var Cla =  new  Schema ({
  _id : {
    type :  String
  }
  dono : {
    type :  String
  }
  foto : {
    tipo :  String ,
    padrão :  ' https://i.imgur.com/0DEF4PI.png '
  }
  proteção : {
    tipo :  Number ,
    padrão :  0
  }
  equipes : {
    tipo :  Array ,
    padrão : []
  }
  membros : {
    tipo :  Array ,
    padrão : []
  }
  trofeus : {
    tipo :  Number ,
    padrão :  0
  }
  liga : {
    tipo :  String ,
    padrão :  ' Bronze 3 '
  }
  vitorias : {
    tipo :  Number ,
    padrão :  0
  }
  derrotas : {
    tipo :  Number ,
    padrão :  0
  }
  espera : {
    tipo :  Array ,
    padrão : []
  }
})

var Ship =  new  Schema ({
  _id : {
    type :  String
  }
  _id1 : {
    type :  String
  }
  _id2 : {
    type :  String
  }
  porcentagem : {
    tipo :  Number ,
    padrão :  0
  }
})

var Navios =  mangusto . modelo ( ' navios ' , navio)
var Clas =  mangusto . modelo ( ' Clas ' , Cla)
var Comandos =  mangusto . modelo ( ' Comandos ' , Comando)
var Athenas =  mangusto . modelo ( ' Athenas ' , Athena)
var Guildas =  mangusto . model ( ' Guildas ' , Guild)
var Usuários =  mangusto . model ( ' Usuários ' , Usuário)
exportações . Navios  = Navios
exportações . Clas  = Clas
exportações . Comandos  = Comandos
exportações . Athenas  = Athenas
exportações . Guildas  = Guildas
exportações . Usuários  = usuários
