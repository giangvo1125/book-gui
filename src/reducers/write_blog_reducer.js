const initState = {
	isShowWriteBlog: false,
	typeBlog: [
		{id: 1, label: 'Note'}, 
		{id: 2, label: 'Status'}, 
		// {id: 3, label: 'Image'}, 
		{id: 4, label: 'Audio'}, 
		{id: 5, label: 'Gallery'}, 
	], 
	writeBlogType: '', 
	valueContent: '', 
	blogs: [], 
	link: '', 
	count: 0, 
	limit: 10, 
	offset: 0, 
}

function writeBlog(state = initState, action) {
	switch(action.type) {
		case types.ON_BEGIN_WRITE_BLOG:
			return {...state, ...action.payload}
		case types.UPDATE_VALUE_CONTENT:
			return {...state, ...action.payload}
		case types.CREATE_BLOG:
			return {...state, ...action.payload}
		case types.GET_BLOG:
			return {...state, ...action.payload}
		case types.UPDATE_VALUE_LINK:
			return {...state, ...action.payload}
		case types.CHANGE_PAGE:
			return {...state, ...action.payload}
		default:
			return state;

	}
	return state;
}

module.exports = writeBlog;
