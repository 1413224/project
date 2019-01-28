const baseUrl = 'http://api.9yetech.com/public/?service='

let url={
	GetCategoryList:baseUrl + 'control.help_Category.GetList',
	DelCategoryById:baseUrl + 'control.help_Category.DelById'
}

export default url;