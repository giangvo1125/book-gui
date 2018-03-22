import React, { Component } from 'react'
import { connect } from 'react-redux'
class AudioComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<article id={this.props.id || Math.random()} 
                className="post-46 post type-post status-publish format-video hentry category-category-trio tag-audio tag-media tag-video post_format-post-format-video clearfix">
                <span className="entry-date"><span className="entry-meta-date"><time dateTime={this.props.time|| ''}>{this.props.time || ''}</time></span></span>
                <div className="hentry-box">
                    {
                        this.props.content ?
                        <div className="entry-status clearfix" style={{marginBottom: '5px'}}>
                            <p style={{textShadow: '-0.25px 0 black, 0 0.25px black, 0.25px 0 black, 0 -0.25px black'}} >
                                {this.props.content}
                            </p>
                        </div> : ''
                    }
                    <figure className="entry-video">
                        <iframe 
                            src={this.props.link || ''} 
                            width="450" height="199" 
                            frameBorder="0" title={this.props.content || ''} 
                            data-rocket-lazyload="fitvidscompatible" 
                            data-lazy-src={this.props.link || ''} >
                        </iframe>
                        
                    </figure>
                </div>
                {/*<footer className="entry-footer">
                    <ul>
                        <li><i className="fa fa-comment"></i><a href="https://demo.herothemes.com/scopic/video-post-format-embeded/#respond">Add Comment</a></li>
                    </ul>
                </footer>*/}
            </article>
		)
	}
}

AudioComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (AudioComponent)