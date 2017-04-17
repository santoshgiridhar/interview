import can from 'can';

export default can.Map.extend({

    define: {
        columnNumber: {
          type:'number',
          value:'1'
        },
        setExcelColumnCode: {
          set: function(){
              return this.numToChar(this.columnNumber);
          }
        },
        convertedNumber: {
            value: '1'
        },
        setConvertedNumber: {
            value: ''
        }
    },

    getExcelColumnCode: function(val) {
        var self = this,
            convertedLetter = val;//self.numToChar(self.attr('columnNumber'));

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
    },

    doLetterConverstion: function() {
        var self = this,
            convertNumber = self.numToWords(self.attr('convertedNumber'));

        self.attr('setConvertedNumber', convertNumber);
    },
    numToWords: function(viewValue) {
      var self = this;
        var converted = viewValue.replace(/\d+/g, function(n) {
            return self.inWords(n);
        });
        return converted;
    },
    inWords: function(num) {
			var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']; //jscs:disable maximumLineLength
			var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if ((num = num.toString()).length > 9) {
            return 'overflow';
        }
        var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) {
            return;
        }
        var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
        return str;
    }
});
