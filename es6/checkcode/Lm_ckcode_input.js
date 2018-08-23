import Lm_base from '../Lm_base';
class Lm_ckcode_input extends Lm_base{
	constructor(options){
		let opts = {
			attr:{
				class:'ckcode_input',
			},
			domStr:'<input type="text" ${this.opts.attrStr} >${this.opts.children}</input>'
		}
		$.extend(true,opts,options);
		super(opts);
		
	}
}
export default Lm_ckcode_input;