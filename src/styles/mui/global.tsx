import GlobalStyles from "@mui/material/GlobalStyles";
import { css } from "@mui/system";

export default (
  <GlobalStyles
    styles={css`
      pre,
      code {
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: #d3d3d335 white;

        &::-webkit-scrollbar {
          width: 0.5rem;
          height: 0.8rem;
          border-radius: 0.2rem;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background: #d3d3d335;
          border-radius: 0.2rem;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: #d3d3d351;
        }
      }
    `}
  />
);
