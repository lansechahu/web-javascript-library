/*
 * 数学相关的功能
 */
(function() {
	var math = {
		/*
		 * 计算两点间距离
		 * @param {object} [p1] 点1
		 * @param {object} [p2] 点2
		 * */
		getDistance: function(p1, p2) {
			var a = p2.x - p1.x;
			var b = p2.y - p1.y;
			var n = Math.sqrt(a * a + b * b);
			return n;
		},
		/*
		 * 计算两点间直线任意点的坐标，p1 p2为直线的两个端点，_x和_y为要求的坐标点中的一个坐标，求另一个
		 * @param {object} [p1] 点1
		 * @param {object} [p2] 点2
		 * @param {number} [_x] 要求的点的x坐标，求x坐标的话，该参数填null
		 * @param {number} [_y] 要求的点的y坐标，求x坐标的话，该参数填null
		 * */
		getOnLineXY: function(p1, p2, _x, _y) {
			var k = (p2.y - p1.y) / (p2.x - p1.x);
			var b = p1.y - k * (p1.x);
			if(_x == null) {
				_x = (_y - b) / k;
			} else if(_y == null) {
				_y = k * _x + b;
			}
			var p = {
				x: _x,
				y: _y
			};
			return p;
		},
		/*
		 * 计算两点间直线中心点坐标
		 * @param {object} [p1] 点1
		 * @param {object} [p2] 点2
		 * */
		getOnLineCenter: function(p1, p2) {
			var xx = (p1.x + p2.x) / 2;
			var yy = (p1.y + p1.y) / 2;
			var p = {
				x: xx,
				y: yy
			};
			return p;
		},
		/*
		 * 返回起点到终点的角度
		 * @param {object} [start] 起点
		 * @param {object} [end] 终点
		 * */
		Cangle: function(start, end) {
			var diff_x = end.x - start.x,
				diff_y = end.y - start.y;
			//返回角度,不是弧度
			return 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
		},
		/*
		 * 每隔三位数加一个逗号
		 * @param {string/number} [value] 要转换的值
		 * */
		cutStr: function(value) {
			var temp = parseFloat(value).toLocaleString();
			return temp;
		},
		/*
		 * 数字四舍五入（保留n位小数）
		 * @param {number} [number] 要四舍五入的数字
		 * @param {number} [n] 保留的位数
		 * */
		getFloat: function(number, n) {
			n = n ? parseInt(n) : 0;
			if(n <= 0) return Math.round(number);
			number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
			return number;
		}
	};
	window.math = math;
}());