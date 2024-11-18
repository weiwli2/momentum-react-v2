/* eslint-disable import/extensions, import/no-unresolved, import/no-duplicates, import/namespace */
import { TYPES } from './Text.constants';
import type { AllowedTagNames, FontStyle } from './Text.types';
import { FONT_TYPE } from '@momentum-design/components/dist/components/text/text.constants.js';
import type { FontType } from '@momentum-design/components/dist/components/text/text.types';

const inferTagName = (type: FontStyle): AllowedTagNames => {
  switch (type) {
    case TYPES.DISPLAY:
    case TYPES.BANNER_TERTIARY:
    case TYPES.BANNER_SECONDARY:
    case TYPES.BANNER_PRIMARY:
      return 'h1';

    case TYPES.TITLE:
      return 'h2';

    case TYPES.HEADER_PRIMARY:
    case TYPES.HIGHLIGHT_PRIMARY:
    case TYPES.SUBHEADER_PRIMARY:
    case TYPES.HEADER_SECONDARY:
    case TYPES.HIGHLIGHT_SECONDARY:
    case TYPES.SUBHEADER_SECONDARY:
      return 'h3';

    case TYPES.BODY_PRIMARY:
    case TYPES.HYPERLINK_PRIMARY:
      return 'p';

    case TYPES.BODY_SECONDARY:
    case TYPES.HYPERLINK_SECONDARY:
    case TYPES.HIGHLIGHT_COMPACT:
    case TYPES.BODY_COMPACT:
    case TYPES.LABEL_COMPACT:
      return 'small';

    default:
      return 'p';
  }
};

// this is to map from the old types from the
// old Web Specs to the new Momentum Global Web Library types
const mapOldToNewType = (type: FontStyle): FontType => {
  switch (type) {
    case TYPES.DISPLAY:
      return FONT_TYPE.HEADING_XLARGE_MEDIUM;
    case TYPES.BANNER_TERTIARY:
      return FONT_TYPE.HEADING_MIDSIZE_BOLD;
    case TYPES.BANNER_PRIMARY:
      return FONT_TYPE.HEADING_MIDSIZE_MEDIUM;
    case TYPES.BANNER_SECONDARY:
      return FONT_TYPE.HEADING_MIDSIZE_REGULAR;
    case TYPES.TITLE:
      return FONT_TYPE.HEADING_SMALL_MEDIUM;
    case TYPES.HEADER_PRIMARY:
      return FONT_TYPE.BODY_LARGE_BOLD;
    case TYPES.HEADER_SECONDARY:
      return FONT_TYPE.BODY_MIDSIZE_BOLD;
    case TYPES.SUBHEADER_PRIMARY:
      return FONT_TYPE.BODY_LARGE_MEDIUM;
    case TYPES.SUBHEADER_SECONDARY:
      return FONT_TYPE.BODY_MIDSIZE_MEDIUM;
    case TYPES.BODY_PRIMARY:
      return FONT_TYPE.BODY_LARGE_REGULAR;
    case TYPES.BODY_SECONDARY:
      return FONT_TYPE.BODY_MIDSIZE_REGULAR;
    case TYPES.BODY_COMPACT:
      return FONT_TYPE.BODY_SMALL_REGULAR;
    case TYPES.HIGHLIGHT_PRIMARY:
      return FONT_TYPE.BODY_LARGE_BOLD;
    case TYPES.HIGHLIGHT_SECONDARY:
      return FONT_TYPE.BODY_MIDSIZE_BOLD;
    case TYPES.HIGHLIGHT_COMPACT:
      return FONT_TYPE.BODY_SMALL_BOLD;
    case TYPES.HYPERLINK_PRIMARY:
      return FONT_TYPE.BODY_LARGE_REGULAR_UNDERLINE;
    case TYPES.HYPERLINK_SECONDARY:
      return FONT_TYPE.BODY_MIDSIZE_REGULAR_UNDERLINE;
    case TYPES.LABEL_COMPACT:
      return FONT_TYPE.BODY_SMALL_MEDIUM;
    default:
      return type as FontType;
  }
};
export { inferTagName, mapOldToNewType };
