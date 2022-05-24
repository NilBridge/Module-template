
class template extends NIL.ModuleBase{
	onStart(api){
		/*
		api.listen('onMainMessageReceived',(e)=>{
			e.reply(e.raw_message,true);
		})
		*/
		api.logger.info('模块模板加载成功！！');
	}
}

module.exports = new template