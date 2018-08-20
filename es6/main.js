import $ from './jquery-vendor';
import Lm_pager from './Lm_pager';
import styles from './Lm_tb.css';

let $lm = new Lm_pager({id:'tag'});
$.extend({
	getLmWidget(id){
		return $lm.getWidget(id);
	}
});

