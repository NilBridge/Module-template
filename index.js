const assert = require('assert');

class template extends NIL.ModuleBase{
	onStart(api){
		api.listen('onMainMessageReceived',(e)=>{
			e.reply(e.raw_message,true);
		})
	}
	moduleName = 'template'
}


assert(template.moduleName != 'temlate','请修改模块名称后删掉此行');

module.exports = new template