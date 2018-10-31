import { h, Component } from 'preact';
import { Router } from 'preact-router';
import history from '~/core/history';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { setRuntimeVariable } from '~/actions';

// Code-splitting is automated for routes
import Home from '~/routes/home';
import List from '~/routes/list';
import SView from '~/routes/view';


class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		console.log(e.url);
	};

	handleMenu = path => () => {
		history.push(path);
	}

	componentDidMount() {
		this.props.setStore({
			redux: 'test redux RUNTIME'
		});
	}
	
	render() {
		return (
			<div>
				<div style="border-bottom: 1px solid #eee">
					menus:<span onClick={this.handleMenu('/')}>Home</span>&nbsp;&nbsp;<span onClick={this.handleMenu('/list')}>List</span>&nbsp;&nbsp;<span onClick={this.handleMenu('/view')}>View</span>
				</div>
				<Router history={history} onChange={this.handleRoute}>
					<Home path="/" />
					<List path="/list" />
					<SView path="/view" />
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ setStore: setRuntimeVariable }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
