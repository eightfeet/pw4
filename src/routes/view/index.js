import { h, Component } from 'preact';
import {test1} from '~/core/test';

test1();
class View extends Component {

	render() {
		return (
			<div>
				page View
			</div>
		);
	}
}

export default View;
