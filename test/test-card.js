var React =require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/components/card')

describe('Card component', function(){
	it('Renders the text', function(){
		var words = "This is a test"

		var renderer = TestUtils.createRenderer();
		renderer.render(<Card text={words} />);
		var result = renderer.getRenderOutput();
		result.props.className.should.equal('card');

		result.props.children.should.equal(words)
	});

});
