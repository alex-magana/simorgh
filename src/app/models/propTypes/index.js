import { arrayOf, bool, number, shape, string } from 'prop-types';
import { textBlockPropTypes } from './text';
import { imageBlockPropTypes } from './image';

export const optionalTextPropTypes = {
  blocks: arrayOf(
    shape({
      model: shape({
        blocks: arrayOf(
          shape({
            model: shape({
              text: string,
            }),
          }),
        ),
      }),
    }),
  ),
};

export const videoPropTypes = {
  blocks: arrayOf(
    shape({
      locator: string,
      blocks: arrayOf(
        // raw video
        shape({
          model: shape({
            isLive: bool,
            duration: string,
            locator: string.isRequired,
          }),
        }),
        // alt text
        shape(textBlockPropTypes),
        // image
        shape(imageBlockPropTypes),
      ),
    }),
  ).isRequired,
};

export const videoComponentPropTypes = {
  pid: string.isRequired,
  kind: string.isRequired,
  title: string.isRequired,
  items: arrayOf(
    shape({
      versionID: string.isRequired,
      kind: string.isRequired,
      duration: number.isRequired,
    }),
  ).isRequired,
  holdingImageUrl: string.isRequired,
  statsAppName: string.isRequired,
  statsAppType: string.isRequired,
  statsCountername: string.isRequired,
  statsDestination: string.isRequired,
  uiLocale: string.isRequired,
};

const baseDefaultPropTypes = {
  model: {
    blocks: [
      {
        model: {},
      },
    ],
  },
};

// this is a temp default prop until Image and Video can be moved to using the new approach to prop type definition
export const emptyBlockArrayDefaultProps = {
  blocks: [
    {
      model: {},
    },
  ],
};

export const imageDefaultPropTypes = baseDefaultPropTypes;

export const textDefaultPropTypes = {
  blocks: [baseDefaultPropTypes],
};
