/**
 * Kopi for 0.1 version , very easy form
 * 
 */

var Kopi = {
	parse : function(meta) {
		if (!meta || !meta.items) {
			return;
		}
		$.each(meta, function(index, item) {

		});
	},
	createElement : function(meta) {
		var _label = $('<label for="addname" class="form-label"></label>');
		var _input = $('<input type="text" class="form-control" id="name" name="name" ng-model="selectItem.name">');
		var _div = $('<div class="form-group"></div>');
		_div.append(_label);
		_label.html(meta.label);

	}
};

var _kopi_ = {
	easyForm : {
		restrict : "AE",
		scope : {
			formData : "=",
			formMeta : "=",
		},
		template : '<form >'
				+ '<div class="form-group" ng-show="{{mitem.visible}}" ng-repeat="mitem in formMeta">'
				+ ' <label for="addname" class="form-label">{{mitem.label}}</label> '
				+ '<div ng-switch="mitem.editor">'
				+ ' <input ng-switch-default type="{{mitem.editor}}" ng-model="formData[formMeta[$index].name]" class="form-control" name="{{mitem.name}}">'
				+ ' <textarea ng-switch-when="textarea" class="form-control" ng-model="formData[formMeta[$index].name]" name="{{mitem.name}}"></textarea>'
				+ '<select ng-switch-when="select" ng-model="formData[formMeta[$index].name]" class="form-control" name="{{mitem.name}}" ></select>'
				+ '</div></div></form>',
		replace : true,
		link : function(scope) {
			scope.model = function(mitem) {
				return "formMeta." + mitem.name;
			}
		},
	},
	easyGrid : {
		restrict : "AE",
		scope : {},
		template : '<form >'
				+ '<div class="form-group" ng-show="{{mitem.visible}}" ng-repeat="mitem in formMeta">'
				+ ' <label for="addname" class="form-label">{{mitem.label}}</label> '
				+ '<div ng-switch="mitem.editor">'
				+ ' <input ng-switch-default type="{{mitem.editor}}" ng-model="formData[formMeta[$index].name]" class="form-control" name="{{mitem.name}}">'
				+ ' <textarea ng-switch-when="textarea" class="form-control" ng-model="formData[formMeta[$index].name]" name="{{mitem.name}}"></textarea>'
				+ '<select ng-switch-when="select" ng-model="formData[formMeta[$index].name]" class="form-control" name="{{mitem.name}}" ></select>'
				+ '</div></div></form>',
		replace : true,
		link : function(scope) {
			scope.model = function(mitem) {
				return "formMeta." + mitem.name;
			}
		},
	}
}
