/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var aliases = require( '@stdlib/namespace-aliases' );
var DATA = require( './../data/data.json' );
var help = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof help, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			help( value );
		};
	}
});

tape( 'the function returns help text', function test( t ) {
	var expected;
	var actual;
	var list;
	var i;

	list = aliases();
	for ( i = 0; i < list.length; i++ ) {
		expected = DATA[ list[i] ];
		if ( expected === void 0 ) {
			expected = null;
		}
		actual = help( list[i] );
		t.strictEqual( actual, expected, 'returns expected value for '+list[i] );
	}
	t.end();
});

tape( 'the function returns `null` if provided an unrecognized alias', function test( t ) {
	var values;
	var i;

	values = [
		'adfkaljdfdsafs',
		'adklfadjflajdslfjalsdf',
		'adflkajdlkfjasdlkfjsadlkfjlasdjflsdjfla'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( help( values[ i ] ), null, 'returns expected value' );
	}
	t.end();
});
