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
			var self = this, convertedLetter = self.numToChar(self.attr('columnNumber'));

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
        //0xFFFF -->Base16 respresentation or value in BCD notation --> -1
        //0x10000 -->Base16 respresentation or value in BCD notation --> 0
        if (codePt > 0xFFFF) {
            codePt -= 0x10000;
            //String.fromCharCode() method returns a string created by using the specified sequence of Unicode values
            //>> (Sign-propagating right shift)
            // 9 >> 2 yields 2:
            //& (Bitwise AND)
            return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
        }
        return String.fromCharCode(codePt);
    }

});
