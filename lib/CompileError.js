function CompileError(info) {
    SyntaxError.call(this);

    var startPos = info.file.getLineAndCharacterOfPosition(info.start);

    this.fileName = info.file.fileName;
    this.line = startPos.line + 1;
    this.column = startPos.character + 1;
    this.name = 'TS' + info.code;

    this.message = this.fileName + '(' + this.line + ',' + this.column + '): ' +
    	this.name + ': ' + info.messageText;
}

CompileError.prototype = Object.create(SyntaxError.prototype);

module.exports = CompileError;
