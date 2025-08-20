<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Inverse Gamma][inverse-gamma] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for an [inverse gamma][inverse-gamma] random variable is

<!-- <equation class="equation" label="eq:invgamma_cdf" align="center" raw="F(x; \alpha, \beta) = \frac{\Gamma\left(\alpha,\frac{\beta}{x}\right)}{\Gamma(\alpha)} = Q\left(\frac{\beta}{x},\alpha\right)" alt="Cumulative distribution function for a Inverse Gamma distribution."> -->

```math
F(x; \alpha, \beta) = \frac{\Gamma\left(\alpha,\frac{\beta}{x}\right)}{\Gamma(\alpha)} = Q\left(\frac{\beta}{x},\alpha\right)
```

<!-- <div class="equation" align="center" data-raw-text="F(x; \alpha, \beta) = \frac{\Gamma\left(\alpha,\frac{\beta}{x}\right)}{\Gamma(\alpha)} = Q\left(\frac{\beta}{x},\alpha\right)" data-equation="eq:invgamma_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/invgamma/cdf/docs/img/equation_invgamma_cdf.svg" alt="Cumulative distribution function for a Inverse Gamma distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha > 0` is the shape parameter and `beta > 0` is the scale parameter. `Q` is the upper regularized incomplete gamma function.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-invgamma-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-invgamma-cdf' );
```

#### cdf( x, alpha, beta )

Evaluates the [cumulative distribution function][cdf] (CDF) for an [inverse gamma][inverse-gamma] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = cdf( 2.0, 1.0, 1.0 );
// returns ~0.607

y = cdf( 2.0, 3.0, 1.0 );
// returns ~0.986

y = cdf( -1.0, 2.0, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = cdf( +Infinity, 4.0, 2.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 0.5 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.5, -1.0 );
// returns NaN
```

#### cdf.factory( alpha, beta )

Returns a function for evaluating the [cumulative distribution function][cdf] for an [inverse gamma][inverse-gamma] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mycdf = cdf.factory( 0.5, 0.1 );

var y = mycdf( 12.0 );
// returns ~0.897

y = mycdf( 8.0 );
// returns ~0.874
```

</section>

<!-- /.usage -->

* * *

<section class="c">

## C APIs

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/invgamma/cdf.h"
```

#### stdlib_base_dists_invgamma_cdf( x, alpha, beta )

Evaluates the [cumulative distribution function][cdf] (CDF) for an [inverse gamma][inverse-gamma] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```c
double out = stdlib_base_dists_invgamma_cdf( 2.0, 1.0, 1.0 );
// returns ~0.607

out = stdlib_base_dists_invgamma_cdf( 2.0, 3.0, 1.0 );
// returns ~0.986
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **alpha**: `[in] double` shape parameter.
-   **beta**: `[in] double` scale parameter.

```c
double stdlib_base_dists_invgamma_cdf( const double x, const double alpha, const double beta );
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/invgamma/cdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( double min, double max ) {
    double scale = rand() / (double) RAND_MAX;
    return min + ( scale * ( max - min ) );
}

int main( void ) {
    double alpha;
    double beta;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.1, 5.0 );
        alpha = random_uniform( 1.0, 5.0 );
        beta = random_uniform( 1.0, 5.0 );
        y = stdlib_base_dists_invgamma_cdf( x, alpha, beta );
        printf( "x: %lf, α: %lf, β: %lf, F(x;α,β): %lf\n", x, alpha, beta, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var cdf = require( '@stdlib/stats-base-dists-invgamma-cdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 2.0;
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = cdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, F(x;α,β): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-invgamma-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-invgamma-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-invgamma-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-invgamma-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-invgamma-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-invgamma-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-invgamma-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-invgamma-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[inverse-gamma]: https://en.wikipedia.org/wiki/Inverse-gamma_distribution

</section>

<!-- /.links -->
