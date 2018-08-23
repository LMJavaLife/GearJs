import Lm_base from './Lm_base';
class Lm_th extends Lm_base{
	constructor(options){
		options.children = options.attr.caption;
		super(options);
	}
}
export default Lm_th;