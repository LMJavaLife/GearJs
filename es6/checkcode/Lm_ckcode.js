import Lm_base from '../Lm_base';
import Lm_ckcode_input from './Lm_ckcode_input';
import Lm_ckcode_btn from './Lm_ckcode_btn';
class Lm_ckcode extends Lm_base{
	constructor(options){
		let opts = {
			attr:{
				class:'ckcode',
			}
		}
		$.extend(true,opts,options);
		super(opts);
		let ckinput = new Lm_ckcode_input();
		let ckbtn = new Lm_ckcode_btn({delay:this.opts.delay,click:this.opts.click});
		this.append(ckinput);
		this.append(ckbtn);
		this.draw();
	}
}
export default Lm_ckcode;