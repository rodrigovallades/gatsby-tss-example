// Materialize has a bug which applies a button:focus
// background-color to all buttons, not just the ones scoped to Materialize.
// We have an issue open at Materialize on Github, but we know
// it's an abandoned project - it's not going to be fixed.
//
// Issue: https://github.com/Dogfalo/materialize/issues/6669
// Bug: https://github.com/Dogfalo/materialize/blob/v1-dev/sass/components/forms/_forms.scss
//
// This override makes sure that the correct @mui/material background-color
// has precedence over Materialize's.

const MuiButton = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      let backgroundColor = 'transparent';

      if (ownerState.variant === 'contained')
        backgroundColor = theme.palette[ownerState.color].main;

      const minHeights = {
        small: '32px',
        medium: '40px',
        large: '48px'
      };

      return {
        ...{
          borderRadius: theme.spacing(5),
          minHeight: minHeights[ownerState.size],
          '&&:focus': {
            backgroundColor
          }
        }
      };
    }
  }
};

export default MuiButton;
