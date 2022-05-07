class template extends NIL.ModuleBase{
	onStart(api){
		api.listen('onMainMessageReceived',(e)=>{
			e.reply(e.raw_message,true);
		})
	}
}


module.exports = new template;
