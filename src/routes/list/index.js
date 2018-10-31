import {h, Component } from 'preact';
import {test1} from '~/core/test';

test1();
class List extends Component {

	render() {
		return (
			<div>
				page List
				<img src="./assets/check.png" />
			</div>
		);
	}
}

export default List;
