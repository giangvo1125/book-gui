import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WriteBlogAction from '../../actions/write_blog_action'

class HeaderComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	_onClickGoToWrite(id) {
		this.props.onBeginWriteBlog(id)
	}
	render() {
		let {typeBlog} = this.props;

		let item_menu1 = typeBlog.map((item, index) => {
			return (
				<li 
					key={`item-1-${index}`} 
					className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home"
					onClick={this._onClickGoToWrite.bind(this, item.id)}
				>
					<a>{item.label}</a>
				</li>
			)
		})

		let item_menu2 = typeBlog.map((item, index) => {
			return (
				<li 
					key={`item-2-${index}`} 
					className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-home"
					onClick={this._onClickGoToWrite.bind(this, item.id)}
				>
					<a>{item.label}</a>
				</li>
			)
		})

		return (
			<header id="site-header" className="clearfix" role="banner">
	            <div id="logo">
	                <div className="container"> <a title="ibcurt"> <img alt="ibcurt" width="128" height="56" src="assets/images/logo1.png" /> </a></div>
	            </div>
	            <nav id="nav-primary-mobile" className="clearfix">
	                <a className="menu-toggle" ><i className="fa fa-bars"></i>Write Blog</a>
	                <ul id="mobile-menu" className="clearfix">
	                    {item_menu1}
	                </ul>
	            </nav>
	            <div id="header-bottom" role="navigation" className="clearfix">
	                <div className="container">
	                    <nav id="nav-primary">
	                        <ul>
	                            <li>
	                                <a ><i className="fa fa-reorder"></i>Write Blog</a>
	                                <ul id="menu-primary-nav" className="nav clearfix">
	                                    {item_menu2}
	                                </ul>
	                            </li>
	                        </ul>
	                    </nav>
	                    <ul id="social-icons" className="clearfix">
	                        {/*<li className="rss"> <a href="https://demo.herothemes.com/scopic/feed/"><i className="fa fa-rss"></i></a></li>*/}
	                        {/*<li className="twitter"> <a href="https://twitter.com/herothemes" target="_blank"><i className="fa fa-twitter"></i></a></li>*/}
	                        {/*<li className="facebook"> <a href="https://facebook.com/herothemes" target="_blank"><i className="fa fa-facebook"></i></a></li>*/}
	                    </ul>
	                    <img width="95" height="95" className="avatar" src="https://mk0herothemesdek9380.kinstacdn.com/wp-content/uploads/sites/11/2013/07/avatar.png" alt=""/>
	                </div>
	            </div>
	        </header>
		)
	}
}

HeaderComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		typeBlog: state.write_blog.typeBlog
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		...WriteBlogAction,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

