//create a "class" for complex numbers...


//create a constructor with two fields: re, im.

function ComplexNumber(re,im){
	this.re = re;
	this.im = im;
}

//doubles the real and imaginary part of z of the element
ComplexNumber.prototype.double = function() {
	this.re = 2*this.re;
	this.im = 2*this.im;
}

ComplexNumber.prototype.square = function() {
	const re1 = this.re*this.re - this.im*this.im;
	const im1 = 2*this.re*this.im;
	this.re = re1;
	this.im = im1;
}

const num = new ComplexNumber(1,2);
num.double();
num.square();




Template.testing.helpers({
	num: function() {return num;}
});