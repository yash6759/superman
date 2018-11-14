const { ShardingManager } =  require ( ' discord.js ' )
const  gerente  =  new  ShardingManager ( ` ./zhon.js ` , {totalShards :  2 })

gerente . desovar ()

gerente . on ( ' launch ' , shard  =>  console . log ( ` Shard $ { shard . id } iniciada com sucesso! ` ))
