import React, { Component } from 'react'
import { connect } from 'react-redux'

class FooterComponent extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<footer id="site-footer" className="clearfix">
	            <div id="footer-widgets" className="clearfix">
	                <div className="container">
	                    <div className="ht-grid ht-grid-stacked">
	                        <div id="text-2" className="ht-column ht-col-third widget widget_text">
	                            <h4 className="widget-title"><span>About Blog.</span></h4>
	                            <div className="textwidget">
	                                <p>
	                                	This is my memories.
	                                </p>
	                            </div>
	                        </div>
	                        <div id="ht_flickr_widget-2" className="ht-column ht-col-third widget ht_flickr_widget">
	                        </div>
	                        <div id="tag_cloud-2" className="ht-column ht-col-third widget widget_tag_cloud">
	                            <h4 className="widget-title"><span>Tags.</span></h4>
	                            <div className="tagcloud">
	                            	{/*
		                            	<a 
		                            		href="https://demo.herothemes.com/scopic/tag/announcement/" 
		                            		className="tag-cloud-link tag-link-5 tag-link-position-1" 
		                            		style={{fontSize: '8pt'}} 
		                            		aria-label="Announcement (1 item)">
		                            		Announcement
		                            	</a>
		                            */}
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            
	        </footer>
		)
	}
}

FooterComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default (FooterComponent)