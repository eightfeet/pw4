import { h, Component } from 'preact';
import s from './style.scss';
import {test1} from '~/core/test';

test1();
class Home extends Component {

	render() {
		return (
			<div class={s.root}>
				page Home
				<div class="test">test</div>
			</div>
		);
	}
}

export default Home;
