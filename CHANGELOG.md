# Change Log

## [v2.0.0] - 2016-03-27

- All functions in `Pux.Html.Elements` now receive children. This enables
  consistent use of the `!` operator.
- Added `##` operator to combine array of `Html`.

## [v1.0.0] - 2016-03-24

### Breaking Changes

- The `VirtualDOM` monad has been replaced with `#` operator and rebindable
  `do`, which enables the use of both array notation or `do` notation for
  composing views.
- `VirtualDOM` is now `Html a` and is parameterized by the component's action
  type.
- One-to-one mapping between event types and React's synthetic events.
- The `Update` function no longer receives an input `Signal.Channel`.
- `EffModel` type has changed to
  `{ state: state, effects: Array (Aff eff action)`, and actions are
   automatically fed into the input channel.

### Upgrading

- The `VirtualDOM` monad has been replaced by a simpler data structure `Html a`.
  Element attributes and children can now be specified using array literal
  notation. `do` notation is optional and can be used via `Pux.Html.bind`
  and `Pux.Html.#`.
- All event handlers receive an event, and the use of `Prelude.const` is
  encouraged to ignore events when constructing actions.
- The effect in the `Update` function type signature now appears last, and
  `Update` no longer receives a channel as the third argument.
- Applications are now created using `start`, and the resulting `app.html`
  signal passed to `renderToDOM` or `renderToString`.

## [v0.3.0] - 2016-03-24

### Fixed

- Load React from CommonJS. Fixes [#10](https://github.com/alexmingoia/purescript-pux/issues/10).
- Fix onChange handler so it produces a value. Fixes [#7](https://github.com/alexmingoia/purescript-pux/issues/7).
- List all dependencies. Fixes [#9](https://github.com/alexmingoia/purescript-pux/issues/9).

### Added

- SVG elements and attributes. Fixes [#6](https://github.com/alexmingoia/purescript-pux/issues/6).

## [v0.1.0] - 2016-02-02

### Fixed
- Make foreign functions safe in runtimes without `window`.

### Changed
- BREAKING: `View` type synonym removed. `VDom` renamed to `VirtualDOM` and
exported via `Pux` and `Pux.DOM` instead of `Pux.View`.

## [v0.0.1] - 2016-01-24

### Added
- Initial release. Experimental API.
