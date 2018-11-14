const  Discord  =  require ( ' discord.js ' )
var database =  require ( ' ./database.js ' )

exportações . run  = ({cliente, mensagem, args, lang, idioma}, t ) => {
  console . log ( ' Logs iniciada! ' )

  cliente . on ( ' channelCreate ' , canal  => {
    if ( canal . tipo  ! ==  ' dm ' ) {
      banco de dados . Guilds . findOne ({
        ' _id ' :  canal . guild . identidade
      }, function ( servro , servidor ) {
        if (servidor) {
          if ( servidor . logs ) {
            if ( canal . guild . canais . get ( servidor . logschannel )) {
              var canalLOGS =  canal . guild . canais . get ( servidor . logschannel )
              canalLOGS . sendMessage ({
                ' embed ' : {
                  ' color ' :  11676858 ,
                  ' timestamp ' :  new  Date (),
                  ' footer ' : {
                    ' icon_url ' :  canal . guild . iconURL ,
                    ' texto ' :  canal . guild . nome
                  }
                  ' thumbnail ' : {
                    ' url ' :  canal . guild . iconURL
                  }
                  ' author ' : {
                    ' name ' :  ' Canal criado: ' ,
                    ' icon_url ' :  canal . guild . iconURL
                  }
                  ' fields ' : [
                    {
                      ' name ' :  ' : desktop: Nome: ' ,
                      ' valor ' :  canal . nome ,
                      ' inline ' :  true
                    }
                    {
                      ' name ' :  ' : pencil: Tipo: ' ,
                      ' valor ' :  canal . tipo . replace ( ' texto ' , ' texto ' ). substituir ( ' voz ' , ' voz ' ),
                      ' inline ' :  true
                    }
                    {
                      ' name ' :  ' : tools: ID: ' ,
                      ' valor ' :  canal . id ,
                      ' inline ' :  true
                    }
                  ]
                }
              }). pegar ( a  => {
                servidor . logs  =  false
                servidor . logschannel  =  ' Nenhum '
                servidor . salvar ()
              })
            } mais {
              servidor . logs  =  false
              servidor . logschannel  =  ' Nenhum '
              servidor . salvar ()
            }
          }
        }
      })
    }
  })

  cliente . on ( ' channelDelete ' , canal  => {
    if ( canal . tipo  ! ==  ' dm ' ) {
      banco de dados . Guilds . findOne ({
        ' _id ' :  canal . guild . identidade
      }, function ( servro , servidor ) {
        if (servidor) {
          if ( servidor . logs ) {
            if ( canal . guild . canais . get ( servidor . logschannel )) {
              var canalLOGS =  canal . guild . canais . get ( servidor . logschannel )
              canalLOGS . sendMessage ({
                ' embed ' : {
                  ' color ' :  11676858 ,
                  ' timestamp ' :  new  Date (),
                  ' footer ' : {
                    ' icon_url ' :  canal . guild . iconURL ,
                    ' texto ' :  canal . guild . nome
                  }
                  ' thumbnail ' : {
                    ' url ' :  canal . guild . iconURL
                  }
                  ' author ' : {
                    ' name ' :  ' Canal deletado: ' ,
                    ' icon_url ' :  canal . guild . iconURL
                  }
                  ' fields ' : [
                    {
                      ' name ' :  ' : desktop: Nome: ' ,
                      ' valor ' :  canal . nome ,
                      ' inline ' :  true
                    }
                    {
                      ' name ' :  ' : pencil: Tipo: ' ,
                      ' valor ' :  canal . tipo . replace ( ' texto ' , ' texto ' ). substituir ( ' voz ' , ' voz ' ),
                      ' inline ' :  true
                    }
                    {
                      ' name ' :  ' : tools: ID: ' ,
                      ' valor ' :  canal . id ,
                      ' inline ' :  true
                    }
                  ]
                }
              }). pegar ( a  => {
                servidor . logs  =  false
                servidor . logschannel  =  ' Nenhum '
                servidor . salvar ()
              })
            } mais {
              servidor . logs  =  false
              servidor . logschannel  =  ' Nenhum '
              servidor . salvar ()
            }
          }
        }
      })
    }
  })
}
