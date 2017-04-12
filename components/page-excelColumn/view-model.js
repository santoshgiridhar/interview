import can from 'can';

export default can.Map.extend({

	define: {
			columnNumber: {
					value: '1'
			},
			setExcelColumnCode: {
					value: ''
			},
	},

	getExcelColumnCode: function() {
			var self = this,
					convertedLetter = self.numToChar(self.attr('columnNumber'));

			self.attr('setExcelColumnCode', convertedLetter);
	},

	numToChar: function(number) {
			var numeric = (number - 1) % 26;
			var letter = this.chr(65 + numeric);
			var number2 = parseInt((number - 1) / 26);
			if (number2 > 0) {
					return this.numToChar(number2) + letter;
			} else {
					return letter;
			}
	},

	chr: function(codePt) {
			if (codePt > 0xFFFF) {
					codePt -= 0x10000;
					return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
			}
			return String.fromCharCode(codePt);
	}
});
